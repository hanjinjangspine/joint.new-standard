/* Decorative enhancement only: no content or navigation changes. */
function applyHospitalVisuals(rootPath) {
  if (/^\/(adm|api|medican_db_admin)(\/|$)/.test(location.pathname)) return;
  const root = document.querySelector('main') || document.querySelector('#container') || document.querySelector('#wrapper');
  document.body.classList.add('nsv-site');
  document.body.style.setProperty('--nsv-garden', 'url("' + rootPath + 'garden-v1.webp")');
  if (!root) return;
  const rules = [
    ['safety', /응급|위험|마비|안전|주의|red.flag/i],
    ['doctor', /의료진|전문의|원장|의사|doctor/i],
    ['imaging', /MRI|CT|X.?ray|영상|검사|판독|검진/i],
    ['wound', /상처|드레싱|소독|봉합|실밥/i],
    ['nutrition', /식사|단백질|영양|저염|변비|수분/i],
    ['posture', /보조기|자세|육아|산후|직장인/i],
    ['ankle', /발목|족부|발바닥|발·|아킬레스|무지외반/i],
    ['knee', /무릎|슬관절|십자인대|연골판|반월상/i],
    ['shoulder', /어깨|회전근개|오십견/i],
    ['hip', /고관절|골반|사타구니/i],
    ['wrist', /손목|손가락|손·|수근|수지/i],
    ['elbow', /팔꿈치|엘보/i],
    ['cervical', /목디스크|경추|목 통증|거북목/i],
    ['rehab', /재활|운동|보행|균형|낙상|회복/i],
    ['lumbar', /허리|요추|척추|디스크|협착/i],
    ['procedure', /수술|시술|내시경|주사|치료/i],
    ['access', /오시는|주차|교통|방문|지역|이천|여주|광주|용인/i],
    ['decision', /판단|결정|선택|비교|연구|근거|기록|논문/i],
    ['hospital', /병원|센터|시설|입원/i]
  ];
  function category(element) {
    const heading = element.querySelector('h1,h2,h3,h4,strong,b');
    const title = heading ? heading.textContent : '';
    const text = element.textContent || '';
    for (const signal of [title, text.slice(0,260)]) {
      for (const [key, pattern] of rules) if (pattern.test(signal)) return key;
    }
    return 'consult';
  }
  function excluded(el) {
    return el.closest('header,footer,nav,form,[role="dialog"],[role="navigation"],[data-nsv-exclude],.quick,[class*="chatbot"],[class*="Chatbot"],[class*="floating"],[class*="Floating"]');
  }
  function hasPhoto(el) {
    return !!el.querySelector('img,picture,video,iframe,canvas') || /url\(/.test(getComputedStyle(el).backgroundImage);
  }
  function light(el) {
    const s=getComputedStyle(el);
    const rgb=s.color.match(/[\d.]+/g);
    // Keep white text and dark call-to-action panels on their original surfaces.
    return !rgb || (+rgb[0]*.2126 + +rgb[1]*.7152 + +rgb[2]*.0722) < 180;
  }
  const candidates=[...root.querySelectorAll('article,aside,a,div,li,details,section')].filter(el=>{
    if (excluded(el) || el.classList.contains('nsv-card') || hasPhoto(el) || !light(el)) return false;
    const cls=String(el.className);
    if (!/card|Card|rounded|panel|Panel|summary|Summary|box|Box|step|Step/.test(cls)) return false;
    if (/grid|Grid|wrap|Wrap|list|List|cards|Cards|steps|Steps|hero|Hero|cta|Cta|badge|Badge/.test(cls) && !/rounded/.test(cls)) return false;
    const rect=el.getBoundingClientRect();
    if (rect.width < 155 || rect.height < 78 || getComputedStyle(el).display==='none') return false;
    if ((el.textContent||'').trim().length < 24 || !el.querySelector('h2,h3,h4,p,li,summary,strong,b')) return false;
    if ([...el.querySelectorAll('article,aside,details,[class*="card"],[class*="Card"],div[class*="rounded"],a[class*="rounded"]')].some(child => {
      const box=child.getBoundingClientRect();
      return box.width>=155 && box.height>=78 && (child.textContent||'').trim().length>=24;
    })) return false;
    return true;
  });
  for(const el of candidates) {
    if (el.closest('.nsv-card')) continue;
    const key=category(el);
    el.classList.add('nsv-card');
    el.dataset.nsvImage=key;
    el.style.setProperty('--nsv-card-image','url("'+rootPath+key+'.webp")');
  }
  // A quiet botanical texture in every top-level content section, including heroes.
  for (const el of root.querySelectorAll('section')) {
    if (excluded(el) || el.classList.contains('nsv-section') || el.closest('.nsv-card')) continue;
    if (el.parentElement.closest('section') || hasPhoto(el) && /url\(/.test(getComputedStyle(el).backgroundImage) || !light(el)) continue;
    const rect=el.getBoundingClientRect();
    if (rect.width<250 || rect.height<140) continue;
    el.classList.add('nsv-section');
  }
  document.documentElement.dataset.nsvVersion='20261005-v2';
}

export { applyHospitalVisuals };
