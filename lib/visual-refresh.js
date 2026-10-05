/* Content illustrations complement existing clinical photos without replacing them. */
function applyHospitalVisuals(rootPath) {
  if (/^\/(adm|api|medican_db_admin)(\/|$)/.test(location.pathname)) return;
  const root = document.querySelector('main') || document.querySelector('#container') || document.querySelector('#wrapper');
  if (!root) return;
  document.body.classList.add('nsv-site');
  document.body.style.setProperty('--nsv-garden', 'url("' + rootPath.replace('content-images-v3/', 'visual-refresh-v1/') + 'garden-v1.webp")');
  const topics = [
    ['safety', /응급|위험|마비|안전|주의|red.flag/i],
    ['wound', /상처|드레싱|소독|봉합|실밥/i],
    ['nutrition', /식사|단백질|영양|저염|변비|수분/i],
    ['imaging', /MRI|CT|X.?ray|영상|검사|판독|검진/i],
    ['ankle', /발목|족부|발바닥|발·|아킬레스/i],
    ['forefoot', /무지외반|엄지발가락/i],
    ['knee', /무릎|슬관절|십자인대|연골판|반월상/i],
    ['shoulder', /어깨|회전근개|오십견/i],
    ['hip', /고관절|골반|사타구니/i],
    ['wrist', /손목|손가락|손·|수근|수지/i],
    ['elbow', /팔꿈치|엘보/i],
    ['cervical', /목디스크|경추|목 통증|거북목/i],
    ['facility', /재활.*공간|재활.*시설|센터 소개|치료실/i],
    ['hospital', /병원 소개|시설|둘러보기|입원실|병동/i],
    ['rehab', /재활|운동|보행|균형|낙상/i],
    ['recovery', /회복|퇴원|복귀/i],
    ['lumbar', /허리|요추|척추|디스크|협착/i],
    ['posture', /보조기|자세|육아|산후|직장인/i],
    ['preop', /수술 전|수술전|금식|입원 준비|마취/i],
    ['procedure', /수술|시술|내시경|주사|치료/i],
    ['doctor', /의료진|전문의|원장|의사|doctor/i],
    ['access', /오시는|주차|교통|방문|지역|이천|여주|광주|용인/i],
    ['decision', /판단|결정|선택|비교|연구|근거|기록|논문/i],
    ['consult', /상담|문의|예약|질문|진료|접수/i]
  ];
  const labels = {
    safety:'안전 안내를 위한 전화와 의료 가방 일러스트', wound:'상처 관리용 거즈와 드레싱 도구 일러스트',
    nutrition:'식사와 수분 섭취를 나타낸 음식 일러스트', imaging:'영상 검사 자료와 화면 일러스트',
    ankle:'발목과 아킬레스 부위의 설명용 관절 그림', forefoot:'엄지발가락 관절의 설명용 그림',
    knee:'무릎 관절 구조의 설명용 그림', shoulder:'어깨 관절과 회전근개 부위의 설명용 그림',
    hip:'고관절 구조의 설명용 그림', wrist:'손목 관절 구조의 설명용 그림', elbow:'팔꿈치 관절 구조의 설명용 그림',
    cervical:'경추 부위의 설명용 그림', lumbar:'요추와 신경 부위의 설명용 그림',
    facility:'새기준병원 재활 치료 공간 사진', hospital:'새기준병원 접수 공간 사진',
    rehab:'재활 운동을 나타낸 탄력 밴드와 운동 도구 일러스트', recovery:'일상 복귀를 나타낸 신발과 보행 경로 일러스트',
    posture:'일상 자세 안내를 위한 의자와 작업 공간 일러스트', preop:'입원 준비물과 점검표 일러스트',
    procedure:'치료 계획을 나타낸 의료 도구 일러스트', doctor:'의료 상담을 나타낸 청진기와 기록지 일러스트',
    access:'방문 안내를 위한 지도와 위치 표시 일러스트', decision:'치료 선택을 나타낸 갈림길과 점검표 일러스트',
    consult:'질문과 상담을 나타낸 말풍선 일러스트'
  };
  const raster = new Set(['ankle','forefoot','knee','shoulder','hip','wrist','elbow','cervical','lumbar','facility','hospital']);
  const pageTitle = (root.querySelector('h1')?.textContent || document.title).trim();
  function topic(el) {
    const heading = el.querySelector('h1,h2,h3,h4,summary,strong,b')?.textContent || '';
    const sectionHeading = el.closest('section')?.querySelector('h1,h2,h3')?.textContent || '';
    for (const signal of [heading, (el.textContent || '').slice(0,180), sectionHeading, pageTitle]) {
      for (const [key, pattern] of topics) if (pattern.test(signal)) return key;
    }
    return 'consult';
  }
  function excluded(el) {
    return el.closest('header,footer,nav,form,table,[role="dialog"],[role="navigation"],[data-nsv-exclude],.quick,[class*="chatbot"],[class*="Chatbot"],[class*="floating"],[class*="Floating"]');
  }
  function media(el) {
    return [...el.querySelectorAll('img,picture,video,iframe,canvas,svg')].some(node => {
      if (node.closest('.nsv-media,.nshContextVisual,.nshNavCardVisual,.nshPanelAtmosphereVisual')) return false;
      const rect = node.getBoundingClientRect();
      return rect.width >= 120 && rect.height >= 64;
    });
  }
  function eligible(el) {
    if (excluded(el) || el.querySelector(':scope > .nsv-media') || media(el)) return false;
    const cls = String(el.className);
    if (!/card|Card|rounded|panel|Panel|summary|Summary|box|Box|step|Step/.test(cls)) return false;
    if (/grid|Grid|wrap|Wrap|list|List|cards|Cards|steps|Steps|badge|Badge/.test(cls) && !/rounded/.test(cls)) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width < 155 || rect.height < 78 || getComputedStyle(el).display === 'none') return false;
    if ((el.textContent || '').trim().length < 24 || !el.querySelector('h2,h3,h4,p,li,summary,strong,b')) return false;
    if ([...el.querySelectorAll('article,aside,details,[class*="card"],[class*="Card"],div[class*="rounded"],a[class*="rounded"]')].some(child => {
      const box = child.getBoundingClientRect();
      return box.width >= 155 && box.height >= 78 && (child.textContent || '').trim().length >= 24;
    })) return false;
    return true;
  }
  function insert(el, kind) {
    if (kind === 'card' && el.getBoundingClientRect().width >= 580) el.classList.add('nsv-content-wide');
    const key = topic(el);
    const holder = document.createElement('span');
    holder.className = 'nsv-media nsv-media-' + kind + (raster.has(key) && !['facility','hospital'].includes(key) ? ' nsv-media-anatomy' : '');
    holder.dataset.nsvAdded = 'true';
    holder.dataset.nsvImage = key;
    const image = document.createElement('img');
    image.src = rootPath + key + (raster.has(key) ? '.webp' : '.svg');
    image.alt = labels[key];
    image.width = 720; image.height = 400;
    image.loading = 'lazy'; image.decoding = 'async';
    holder.appendChild(image);
    if (el.tagName === 'DETAILS') {
      const summary = el.querySelector(':scope > summary');
      if (summary) summary.insertAdjacentElement('afterend', holder); else el.prepend(holder);
    } else el.prepend(holder);
    el.classList.add(kind === 'card' ? 'nsv-content-card' : 'nsv-content-section');
  }
  const cards = [...root.querySelectorAll('article,aside,a,div,li,details,section')].filter(eligible);
  for (const el of cards) if (!el.closest('.nsv-content-card')) insert(el, 'card');
  // Cover section introductions, including prose pages that have no card grid.
  for (const el of root.querySelectorAll('section')) {
    if (excluded(el) || el.closest('.nsv-content-card') || el.querySelector('section') || media(el) || el.querySelector('.nsv-media')) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 250 || rect.height < 160 || (el.textContent || '').trim().length < 40 || !el.querySelector('h1,h2,h3')) continue;
    insert(el, 'section');
  }
  document.documentElement.dataset.nsvVersion = '20261005-v3';
}

export { applyHospitalVisuals };
