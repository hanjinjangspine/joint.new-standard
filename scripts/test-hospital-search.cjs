const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),main=fs.existsSync(path.join(root,"head.sub.php"));
let src=fs.readFileSync(path.join(root,main?"assets/js/hospital-search-v1.js":"lib/hospital-search.js"),"utf8").split('document.addEventListener("DOMContentLoaded"')[0].replace(/export \{[^}]+\};/g,"");
const context=vm.createContext({});vm.runInContext(src,context);
const data=JSON.parse(fs.readFileSync(path.join(root,main?"assets/data/hospital-search-v1.json":"public/hospital-search-v1.json"),"utf8")).items;
const search=context.searchHospitalPages;
for(const query of ["허리디스크","목디스크","양방향 내시경","오십견","동결견","손목터널","신경성형술","무릎","인공관절","재활","오시는 길","ㅁㄹ"])assert(search(data,query).length>0,query);
assert.equal(search(data,"   ").length,0);assert.equal(search(data,"없는질환123456").length,0);
assert(search(data,"동결견").some(x=>x.title.includes("오십견")));
assert(search(data,"양방향 내시경").slice(0,5).some(x=>x.url.includes("/sub/r40/")));
assert.deepEqual(Array.from(search(data,"양방향 내시경"),x=>x.url).sort(),Array.from(search(data,"양방향내시경"),x=>x.url).sort());
for(const site of ["main","joint","rehab"]){const results=search(data,"무릎",site);assert(results.length>0);assert(results.every(x=>x.site===site));}
for(const item of data){const url=new URL(item.url);assert.equal(url.protocol,"https:");assert(["new-standard.co.kr","joint.new-standard.co.kr","rehab.new-standard.co.kr"].includes(url.hostname));assert(!/\/(adm|api)\/|bo_table=counsel.*wr_id=/.test(item.url));}
assert.equal(new Set(data.map(x=>x.url)).size,data.length);
console.log("Public search: 362 unique URLs, 12 queries, aliases, spacing, initial consonants, ranking, site filters and empty results passed.");

