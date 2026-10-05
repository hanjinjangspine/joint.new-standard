/* Shared, local-only search of verified public hospital pages. */
function normalizeHospitalSearch(value) {
 return String(value||"").normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"");
}
const HOSPITAL_SEARCH_ALIASES = [
 ["허리디스크","요추추간판탈출증","요추디스크","lumbar disc"],
 ["목디스크","경추추간판탈출증","경추디스크","cervical disc"],
 ["양방향내시경","양방향척추내시경","ube"],
 ["척추관협착증","척추관협착","spinal stenosis"],
 ["오십견","동결견","유착성관절낭염","frozen shoulder"],
 ["테니스엘보","테니스엘보우","외측상과염"],
 ["골프엘보","골프엘보우","내측상과염"],
 ["손목터널","손목터널증후군","수근관증후군","carpal tunnel"],
 ["무지외반증","무지외반","hallux valgus"],
 ["신경성형술","경피적경막외신경성형술","pen"],
 ["경막외내시경","경막외내시경신경성형술","een"],
 ["인공관절","인공관절치환술","관절치환"],
 ["반월상연골","연골판","반월판"],
 ["오시는길","찾아오는길","위치","주소","주차"],
 ["재활","회복재활","운동재활"]
].map(group=>group.map(normalizeHospitalSearch));
function searchHospitalPages(items,query,filter="",currentSite="main") {
 const normalized=normalizeHospitalSearch(query);
 if(!normalized)return[];
 const tokens=query.trim().split(/\s+/).map(normalizeHospitalSearch).filter(Boolean);
 const variants=HOSPITAL_SEARCH_ALIASES.filter(group=>group.includes(normalized));
 const expanded=new Set([normalized,...variants.flat()]);
 const initials=value=>[...value].map(char=>{
  const code=char.charCodeAt(0)-0xac00;
  return code>=0&&code<=11171?"ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"[Math.floor(code/588)]:char;
 }).join("");
 const initialQuery=/^[ㄱ-ㅎ]{2,}$/.test(query.trim());
 return items.filter(item=>!filter||item.site===filter).map(item=>{
  const title=normalizeHospitalSearch(item.title),description=normalizeHospitalSearch(item.description);
  const keywords=normalizeHospitalSearch(item.keywords),all=title+description+keywords;
  const titleMatch=[...expanded].some(word=>title.includes(word));
  const exact=title===normalized;
  const full=all.includes(normalized);
  const tokenMatch=tokens.length>1&&tokens.every(word=>all.includes(word));
  const synonym=[...expanded].some(word=>all.includes(word));
  const initialMatch=initialQuery&&initials(item.title).includes(query.trim());
  if(!full&&!tokenMatch&&!synonym&&!initialMatch)return null;
  const guidance=titleMatch&&(/\/sub\/r[34]0\//.test(item.url)||/\/(conditions|procedures|treatments|patient-guides)\//.test(item.url));
  const score=(guidance?100:0)+(exact?150:0)+(title.includes(normalized)?80:0)+(titleMatch?45:0)+(description.includes(normalized)?15:0)+(full?8:0)+(tokenMatch?5:0)+(item.site===currentSite?2:0);
  return {item,score};
 }).filter(Boolean).sort((a,b)=>b.score-a.score||a.item.title.length-b.item.title.length||a.item.url.localeCompare(b.item.url)).map(result=>result.item);
}
function mountHospitalSearch(host,{site="main",indexUrl="/hospital-search-v1.json"}={}) {
 if(host.dataset.nssMounted)return()=>{};
 host.dataset.nssMounted="true";host.className+=" nss-host";
 host.innerHTML='<form class="nss-bar" role="search"><label class="nss-label">빠른 검색<input class="nss-bar-input" type="search" maxlength="100" placeholder="질환·시술·페이지 검색" autocomplete="off" aria-label="질환·시술·페이지 검색"></label><button type="submit" class="nss-submit">검색</button></form>';
 const bar=host.querySelector("form"),barInput=host.querySelector("input");
 const dialog=document.createElement("dialog");dialog.className="nss-dialog";
 dialog.setAttribute("aria-labelledby","nss-dialog-title");
 dialog.innerHTML='<div class="nss-top"><h2 id="nss-dialog-title">질환·시술·페이지 찾기</h2><button type="button" class="nss-close" aria-label="검색 닫기">닫기 ×</button></div><form class="nss-query" role="search"><input type="search" maxlength="100" autocomplete="off" aria-label="통합 검색어" placeholder="예: 허리디스크, 양방향 내시경, 무릎"><button type="submit" class="nss-submit">검색</button></form><div class="nss-filters" role="group" aria-label="검색할 사이트"></div><p class="nss-status" role="status" aria-live="polite"></p><div class="nss-content"></div>';
 document.body.append(dialog);
 const input=dialog.querySelector("input"),content=dialog.querySelector(".nss-content"),status=dialog.querySelector(".nss-status");
 const names={main:"본원",joint:"관절센터",rehab:"회복재활센터"};
 let alive=true,items=null,pending=null,error=false,filter="",limit=30,previousFocus=null,previousOverflow=null,timer=null;
 const filters=dialog.querySelector(".nss-filters");
 function element(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
 function close(){if(dialog.open)dialog.close();}
 function restore(){if(previousOverflow!==null){document.body.style.overflow=previousOverflow;previousOverflow=null;}if(previousFocus?.isConnected)previousFocus.focus();}
 dialog.addEventListener("close",restore);
 dialog.querySelector(".nss-close").addEventListener("click",close);
 dialog.addEventListener("click",event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});
 for(const [key,label]of [["","전체"],...Object.entries(names)]){
  const button=element("button","nss-filter",label);button.type="button";button.dataset.site=key;button.setAttribute("aria-pressed",String(key===""));
  button.addEventListener("click",()=>{filter=key;limit=30;for(const child of filters.children)child.setAttribute("aria-pressed",String(child===button));render();});filters.append(button);
 }
 function render(){
  if(!alive)return;content.replaceChildren();
  if(!items){status.textContent=error?"검색 목록을 불러오지 못했습니다. 다시 시도해 주세요.":"검색 목록을 불러오고 있습니다.";
   if(error){const retry=element("button","nss-retry","다시 불러오기");retry.type="button";retry.addEventListener("click",()=>{error=false;pending=null;load();});content.append(retry);}return;
  }
  const query=input.value.trim();barInput.value=input.value;
  if(!query){
   status.textContent="질환명, 시술명 또는 찾고 싶은 페이지를 입력해 주세요.";
   const chips=element("div","nss-chips");
   for(const term of ["허리디스크","양방향 내시경","무릎","오십견","인공관절","재활","오시는 길"]){
    const button=element("button","nss-chip",term);button.type="button";button.addEventListener("click",()=>{input.value=term;limit=30;render();input.focus();});chips.append(button);
   }content.append(chips);return;
  }
  const matches=searchHospitalPages(items,query,filter,site);
  status.textContent=matches.length?matches.length+"개 안내 페이지를 찾았습니다." : "검색 결과가 없습니다. 짧은 질환명이나 아픈 부위로 다시 검색해 보세요.";
  if(!matches.length)return;
  const list=element("ul","nss-results");
  for(const item of matches.slice(0,limit)){
   let url;try{url=new URL(item.url);}catch{continue;}
   if(url.protocol!=="https:"||!["new-standard.co.kr","joint.new-standard.co.kr","rehab.new-standard.co.kr"].includes(url.hostname))continue;
   const li=element("li"),link=element("a","nss-result");link.href=url.origin===location.origin?url.pathname+url.search+url.hash:url.href;
   const meta=element("span","nss-meta",names[item.site]+" · "+item.category);
   const title=element("strong","nss-result-title",item.title);
   link.append(meta,title);if(item.description)link.append(element("span","nss-description",item.description));
   link.addEventListener("click",close);li.append(link);list.append(li);
  }content.append(list);
  if(matches.length>limit){const more=element("button","nss-more","결과 더 보기");more.type="button";more.addEventListener("click",()=>{limit+=30;render();});content.append(more);}
 }
 async function load(){
  if(items){render();return;}
  if(pending)return pending;
  render();
  pending=fetch(indexUrl,{credentials:"same-origin"}).then(response=>{if(!response.ok)throw new Error("Search index unavailable");return response.json();}).then(data=>{if(!Array.isArray(data.items))throw new Error("Invalid search index");items=data.items;error=false;if(alive)render();}).catch(()=>{error=true;if(alive)render();});
  return pending;
 }
 function open(){
  previousFocus=document.activeElement;input.value=barInput.value;limit=30;
  if(!dialog.open){previousOverflow=document.body.style.overflow;document.body.style.overflow="hidden";dialog.showModal();}
  input.focus();load();render();
 }
 bar.addEventListener("submit",event=>{event.preventDefault();open();});
 dialog.querySelector("form").addEventListener("submit",event=>{event.preventDefault();clearTimeout(timer);limit=30;render();});
 input.addEventListener("input",()=>{clearTimeout(timer);limit=30;timer=setTimeout(render,100);});
 dialog.addEventListener("keydown",event=>{
  if(event.key==="Escape"){event.preventDefault();event.stopPropagation();close();return;}
  const links=[...content.querySelectorAll(".nss-result")];
  if(event.key==="ArrowDown"&&links.length){event.preventDefault();const i=links.indexOf(document.activeElement);links[Math.min(i+1,links.length-1)].focus();}
  if(event.key==="ArrowUp"&&links.length){event.preventDefault();const i=links.indexOf(document.activeElement);if(i<=0)input.focus();else links[i-1].focus();}
 });
 return()=>{alive=false;clearTimeout(timer);close();dialog.remove();host.replaceChildren();delete host.dataset.nssMounted;};
}


export { normalizeHospitalSearch, searchHospitalPages, mountHospitalSearch };
