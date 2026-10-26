/* Reviewed per-page cards. Matching uses a frozen selector and exact heading, never medical keyword inference. */
(function(){'use strict';
window.NSCardImages?.clear();
const VARIANTS={"review":["a","b","c"],"imaging":["a","b","c"],"rehab":["a","b","c"],"consult":["a","b","c"],"endoscopy":["a","b","c"],"gait":["a","b","c"],"records":["a","b"],"access":["a","b"],"safety":["a","b"],"recovery":["a","b"],"lumbar":["a","b"],"knee":["a","b"],"posture":["a","b"],"wound":["a","b"],"shoulder":["a","b"],"ankle":["a","b"],"cervical":["a","b"],"wrist":["a","b"],"bone":["a","b"],"nutrition":["a","b"],"forefoot":["a","b"],"cost":["a","b"],"preop":["a","b"],"elbow":["a","b"],"internal":["a","b"],"parenting":["a","b"],"hip":["a","b"],"infusion":["a","b"],"vaccination":["a","b"]};
const hash=s=>{let n=2166136261;for(const c of s)n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;};
const LABELS={"records":{"alt":"의무기록 폴더와 영상자료 CD — AI 설명용 3D 렌더링","fit":"cover","folder":"card-3d-20261026"},"cost":{"alt":"진료비 확인을 위한 계산기와 안내 서류 — AI 설명용 3D 렌더링","fit":"cover","folder":"card-3d-20261026"},"internal":{"alt":"혈압계와 심장 교육 모형 — AI 설명용 3D 렌더링","fit":"cover","folder":"card-3d-20261026"},"bone":{"alt":"뼈의 내부 구조를 표현한 모형과 손목 보조기 — AI 설명용 3D 렌더링","fit":"cover","folder":"card-3d-20261026"},"endoscopy":{"alt":"요추 교육 모형과 분리된 내시경 장비 — AI 설명용 3D 렌더링","fit":"cover","folder":"card-3d-20261026"},"review":{"alt":"치료 선택을 비교하는 점검표와 돋보기 — AI 설명용 3D 렌더링","fit":"cover","folder":"card-3d-20261026"},"consult":{"alt":"상담 질문을 적는 노트와 청진기 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"imaging":{"alt":"영상자료를 확인하는 모니터와 기록지 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"rehab":{"alt":"탄력 밴드와 근력 운동 도구 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"recovery":{"alt":"일상 복귀를 준비하는 운동화와 생활 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"wound":{"alt":"상처 관리용 거즈와 드레싱 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"nutrition":{"alt":"곡물밥과 생선·채소 식사 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"safety":{"alt":"연락을 준비하는 전화와 응급 대응 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"preop":{"alt":"입원 준비 가방과 개인 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"posture":{"alt":"업무 자세를 위한 의자와 책상 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"access":{"alt":"방문 준비를 상징하는 지도와 위치 표시 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"parenting":{"alt":"육아 중 자세 상담을 위한 생활 공간 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"acute":{"alt":"발목 보조기와 냉찜질 준비 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"gait":{"alt":"보행과 균형 평가를 상징하는 빈 운동 통로 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"senior":{"alt":"보행·균형 관리용 운동 공간 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"lumbar":{"alt":"요추와 신경 구조를 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"cervical":{"alt":"경추와 신경 구조를 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"knee":{"alt":"무릎 관절을 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"shoulder":{"alt":"어깨 관절을 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"hip":{"alt":"고관절을 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"ankle":{"alt":"발목과 아킬레스 구조를 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"wrist":{"alt":"손목과 힘줄을 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"elbow":{"alt":"팔꿈치 관절을 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"forefoot":{"alt":"엄지발가락 관절을 표현한 교육 모형 — AI 설명용 3D 렌더링","fit":"contain","folder":"content-images-v5"},"infusion":{"alt":"수액 상담을 상징하는 밀봉 의료 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"},"vaccination":{"alt":"예방접종 상담을 상징하는 밀봉 의료 물품 — AI 설명용 3D 렌더링","fit":"cover","folder":"content-images-v5"}};
const base='/card-images-20261026/';
const imageBase='/images/';
let aborter,added=[],indexPromise;
const normalize=s=>s.replace(/\s+/g,' ').trim();
function key(){const u=new URL(location.href);if(u.pathname==='/bbs/board.php'){const q=new URLSearchParams();for(const k of ['bo_table','wr_id','page'])if(u.searchParams.has(k)&&!(k==='page'&&u.searchParams.get('bo_table')==='board'&&!u.searchParams.has('wr_id')))q.set(k,u.searchParams.get(k));return u.pathname+'?'+q.toString()}return u.pathname;}
function clear(){aborter?.abort();for(const [el,holder,prior]of added){holder.remove();el.classList.remove('nsc-illustrated');if(prior===null)el.removeAttribute('data-nsc-layout');else el.dataset.nscLayout=prior;}added=[];}
function hasMedia(el){return [...el.querySelectorAll('img,picture,video,iframe,canvas')].some(x=>{const b=x.getBoundingClientRect();return b.width>=115&&b.height>=65});}
async function apply(){clear();const controller=new AbortController();aborter=controller;const activeKey=key();
try{
indexPromise??=fetch(base+'index.json?v=2').then(r=>{if(!r.ok)throw Error('card index');return r.json()}).catch(e=>{indexPromise=null;throw e});
const index=await indexPromise;const file=index[activeKey];if(!file||controller.signal.aborted)return;
const response=await fetch(base+file+'?v=2',{signal:controller.signal});if(!response.ok)return;const cards=await response.json();
if(controller.signal.aborted||key()!==activeKey)return;
let count=0;const used={};
const ordered=cards.map(card=>({card,el:document.querySelector(card.q)})).filter(x=>x.el).sort((a,b)=>a.el===b.el?0:(a.el.compareDocumentPosition(b.el)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1));
for(const {card,el} of ordered){if(!el||el.querySelector(':scope > [data-nsc-image]')||el.closest('nav,header,footer,form,table,[role="dialog"],[role="navigation"]')||hasMedia(el))continue;
 const heading=normalize(el.querySelector('h2,h3,h4,summary,strong,b')?.textContent||el.textContent).slice(0,180);
 if(heading!==card.h&&!(card.p&&heading.startsWith(card.p)))continue;
 const media=LABELS[card.k];if(!media)continue;
 const holder=document.createElement('span');holder.className='nsc-card-image';holder.dataset.nscImage=card.k;holder.dataset.mediaSource='ai-explanatory';holder.dataset.nscFit=media.fit;
 const pool=VARIANTS[card.k]||['a'];const occurrence=used[card.k]||0;used[card.k]=occurrence+1;const variant=pool[(hash(activeKey+'|'+card.k)+occurrence)%pool.length];holder.dataset.nscVariant=variant;
 const img=document.createElement('img');img.src=variant==='a'?imageBase+media.folder+'/'+card.k+'.webp':imageBase+'card-variants-20261026/'+card.k+'-'+variant+'.webp';img.alt=media.alt;img.width=720;img.height=480;img.loading='lazy';img.decoding='async';
 const badge=document.createElement('small');badge.className='nsc-image-note';badge.setAttribute('aria-hidden','true');badge.textContent='AI 설명용 이미지';
 holder.append(img,badge);const prior=el.getAttribute('data-nsc-layout');el.dataset.nscLayout=card.w?'wide':'card';
 if(el.tagName==='DETAILS'){const summary=el.querySelector(':scope > summary');if(summary)summary.after(holder);else el.prepend(holder)}else el.prepend(holder);
 el.classList.add('nsc-illustrated');added.push([el,holder,prior]);count++;
}
document.documentElement.dataset.cardImagesVersion='20261026-v2';
document.documentElement.dataset.cardImagesCount=String(count);
window.dispatchEvent(new CustomEvent('nsc:applied',{detail:{path:activeKey,count}}));
}catch(e){if(e.name!=='AbortError')document.documentElement.dataset.cardImagesError='unavailable';}}
window.NSCardImages={apply,clear};window.dispatchEvent(new Event('nsc:ready'));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();
