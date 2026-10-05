/* Premium explanatory visuals. Actual staff, facility and clinical comparison images remain factual. */
const NSV_UPGRADE_MAP = {"/assets/img/main2/section_spine_card.jpg": "lumbar", "/assets/img/main2/section_joint_card.jpg": "knee", "/assets/img/main2/section_rehab.jpg": "rehab", "/assets/img/main/home-v4/principle-symptom-imaging.webp": "imaging", "/assets/img/main/home-v4/principle-treatment-first.webp": "rehab", "/assets/img/main/home-v4/principle-minimally-invasive.webp": "procedure", "/assets/img/main/home-v4/principle-recovery.webp": "recovery", "/assets/img/sub/r10/s1010_hero.png": "hospital", "/assets/img/sub/r10/s1040_hero.png": "exterior", "/assets/img/sub/r10/intro01.png": "consult", "/assets/img/sub/r10/intro02.png": "rehab", "/assets/img/sub/r10/intro03.png": "imaging", "/assets/img/sub/r10/intro04.png": "doctor", "/assets/img/sub/r20/s2010_hero.png": "consult", "/assets/img/sub/r20/s2020_hero.png": "preop", "/assets/img/sub/r20/s2030_hero.png": "decision", "/assets/img/sub/npay_hero.png": "decision", "/assets/img/sub/r30/spine-consult_hero.png": "procedure", "/assets/img/sub/r30/s3010_hero.png": "cervical", "/assets/img/sub/r30/s3020_hero.png": "lumbar", "/assets/img/sub/r30/stenosis_hero.png": "senior", "/assets/img/sub/r30/sciatica_hero.png": "lumbar", "/assets/img/sub/r30/elderly_hero.png": "senior", "/assets/img/sub/r30/s3030_hero.png": "knee", "/assets/img/sub/r30/s3040_hero.png": "shoulder", "/assets/img/sub/r30/s3050_hero.png": "hip", "/assets/img/sub/r30/s3060_hero.png": "elbow", "/assets/img/sub/r30/s3070_hero.png": "wrist", "/assets/img/sub/r30/s3080_hero.png": "ankle", "/assets/img/sub/r40/4010_hero.png": "procedure", "/assets/img/sub/r40/s4020_hero.png": "procedure", "/assets/img/sub/r40/s4030_hero.png": "procedure", "/assets/img/sub/r40/s4040_hero.png": "rehab", "/assets/img/sub/r40/s4050_hero.png": "knee", "/assets/img/sub/r40/s4060_hero.png": "knee", "/assets/img/sub/r40/s4070_hero.png": "knee", "/assets/img/sub/r40/s4080_hero.png": "knee", "/assets/img/sub/r40/s4090_hero.png": "shoulder", "/assets/img/sub/r40/s40a0_hero.png": "elbow", "/assets/img/sub/r40/s40b0_hero.png": "wrist", "/assets/img/sub/r40/s40c0_hero.png": "ankle", "/assets/img/sub/r40/s40d0_hero.png": "ankle", "/assets/img/sub/r40/s40e0_hero.png": "forefoot", "/assets/img/sub/r40/s40f0_hero.png": "rehab", "/assets/img/sub/r50/s5010_hero.png": "rehab", "/assets/img/sub/r50/s5020_hero.png": "rehab", "/assets/img/sub/r50/rehab_hero.png": "rehab", "/assets/img/sub/r50/office_hero.png": "posture", "/assets/img/sub/r50/knee_hero.png": "knee", "/assets/img/sub/r50/shoulder_hero.png": "shoulder", "/assets/img/sub/r50/foot_hero.png": "ankle", "/assets/img/sub/r50/ivnt_hero.png": "infusion", "/assets/img/sub/r60/6010_hero.png": "infusion", "/assets/img/sub/r60/s6020_hero.png": "vaccination", "/assets/img/sub/tmap_hero.png": "hospital", "/assets/img/q/hero-question-hub.webp": "consult", "/assets/img/q/hero-bear-without-surgery.webp": "decision", "/assets/img/q/hero-procedure-instead-of-surgery.webp": "procedure", "/assets/img/q/hero-injection-not-working.webp": "consult", "/assets/img/q/hero-will-i-not-walk.webp": "recovery", "/assets/img/preop/eras-red-panda-master-v1-3-20260826.webp": "preop", "/assets/img/remote-care-20260905/image-1.jpg": "imaging", "/assets/img/remote-care-20260905/image-3.jpg": "decision", "/assets/img/remote-care-20260905/image-4.jpg": "consult", "/assets/img/hero/decision-consultation.webp": "consult", "/assets/img/hero/decision-imaging-comparison.webp": "imaging", "/assets/img/hero/decision-strength-assessment.webp": "gait", "/assets/img/hero/decision-postoperative-review.webp": "postoperative", "/assets/img/hero/limits-local-first.webp": "access", "/assets/img/hero/gangwon-access.webp": "access", "/assets/img/sub/r10/mission-img01.png": "procedure", "/assets/img/sub/r10/mission-img02.png": "recovery", "/assets/img/sub/r10/mission-img03.png": "decision", "/assets/img/sub/r10/mission-img04.png": "preop", "/assets/img/sub/r10/mission-img05.png": "lumbar", "/assets/img/sub/r10/mission-img06.png": "decision", "/assets/img/sub/r10/mission-img07.png": "recovery", "/assets/img/sub/r10/mission-img08.png": "wound", "/assets/img/sub/r10/mission-img09.png": "procedure", "/assets/img/sub/r10/mission-img10.png": "consult", "/assets/img/page-shadow-v1/spondylolisthesis-shadow.webp": "lumbar", "/assets/img/page-shadow-v1/mri-second-opinion-shadow.webp": "imaging", "/assets/img/page-shadow-v1/case-bank-evidence-shadow.webp": "decision", "/assets/img/page-shadow-v1/postpartum-childcare-shadow.webp": "parenting", "/assets/img/page-shadow-v1/senior-gait-balance-shadow.webp": "senior", "/assets/img/page-shadow-v1/discharge-guide-hub-shadow.webp": "recovery", "/assets/img/page-shadow-v1/lumbar-surgery-recovery-shadow.webp": "postoperative", "/assets/img/page-shadow-v1/lumbar-brace-care-shadow.webp": "postoperative", "/assets/img/page-shadow-v1/wound-dressing-care-shadow.webp": "wound", "/assets/img/page-shadow-v1/constipation-care-shadow.webp": "nutrition", "/assets/img/page-shadow-v1/recovery-diet-shadow.webp": "nutrition", "/assets/img/page-shadow-v1/posture-movement-shadow.webp": "posture", "/assets/img/page-shadow-v1/cervical-surgery-care-shadow.webp": "cervical", "/assets/img/page-shadow-v1/vertebroplasty-care-shadow.webp": "procedure", "/assets/img/page-shadow-v1/lumbar-nucleoplasty-care-shadow.webp": "procedure", "/assets/img/navigation-card-backgrounds-v2/decision.webp": "decision", "/assets/img/sub/r40/hero-region-icheon.png": "access", "/assets/img/sub/r40/hero-region-anseong.png": "access", "/assets/img/sub/r40/hero-region-yeoju.png": "access", "/assets/img/sub/r40/hero-region-gwangju.png": "access", "/assets/img/sub/r40/hero-region-osan.png": "access", "/assets/img/sub/r40/hero-region-pyeongtaek.png": "access", "/assets/img/sub/r40/hero-region-cheongju.png": "access", "/assets/img/sub/r40/hero-region-cheonan.png": "access", "/assets/img/navigation-card-backgrounds-v2/lumbar.webp": "lumbar", "/assets/img/sub/r40/hero-region-sejong.png": "access", "/assets/img/sub/r40/hero-region-daejeon.png": "access", "/assets/img/sub/r40/hero-region-wonju.png": "access", "/assets/img/sub/r40/hero-region-chuncheon.png": "access", "/assets/img/sub/r40/hero-region-chungbuk.png": "access", "/assets/img/sub/r40/hero-region-chungnam.png": "access", "/assets/img/sub/r40/hero-region-chungju.png": "access", "/assets/img/sub/r40/hero-region-asan.png": "access", "/assets/img/sub/r40/hero-region-jecheon.png": "access", "/assets/img/sub/r40/hero-region-sokcho.png": "access", "/assets/img/sub/r40/hero-region-yangpyeong-v2.webp": "access", "/assets/img/sub/r40/hero-region-gapyeong-v2.webp": "access", "/assets/img/sub/r40/hero-region-hongcheon-v2.webp": "access", "/assets/img/navigation-card-backgrounds-v2/wound.webp": "wound", "/assets/img/navigation-card-backgrounds-v2/hospital.webp": "hospital", "/assets/img/navigation-card-backgrounds-v2/nutrition.webp": "nutrition", "/assets/img/navigation-card-backgrounds-v2/rehab.webp": "rehab", "/assets/img/navigation-card-backgrounds-v2/safety.webp": "safety", "/assets/img/section-atmosphere-v1/section-atmosphere-atlas.webp": "garden", "/assets/img/sub/r40/cervical-myelopathy-section-atmosphere-v1.webp": "garden", "/images/joint-hero.svg": "rehab", "/images/generated/visit-prep-background-20260901.webp": "consult", "/images/generated/acute-sprain-kit-20260901.webp": "acute", "/images/generated/parenting-recovery-corner-20260901.webp": "parenting", "/images/generated/ergonomic-workspace-20260901.webp": "posture", "/images/generated/senior-balance-room-20260901.webp": "senior", "/images/generated/postoperative-prep-20260901.webp": "postoperative", "/images/generated/gait-assessment-corridor-20260901.webp": "gait", "/images/generated/cards-20260902/symptom-observation.webp": "consult", "/images/generated/cards-20260902/functional-assessment.webp": "gait", "/images/generated/cards-20260902/recovery-exercise.webp": "rehab", "/images/generated/cards-20260902/postoperative-consultation.webp": "postoperative", "/images/generated/cards-20260902/medical-records.webp": "decision", "/images/generated/cards-20260902/spine-recovery.webp": "lumbar", "/images/generated/cards-20260902/knee-recovery.webp": "knee", "/images/generated/cards-20260902/shoulder-recovery.webp": "shoulder", "/assets/img/sub/r40/hero-region-yeongwol.png": "access", "/assets/img/sub/r40/hero-region-jeongseon.png": "access", "/assets/img/sub/r40/hero-region-taebaek.png": "access", "/assets/img/sub/r40/hero-region-samcheok.png": "access", "/assets/img/sub/r40/hero-region-donghae.png": "access", "/assets/img/sub/r40/hero-region-gangwon.png": "access", "/assets/img/sub/r40/hero-region-gangneung.png": "access", "/assets/img/sub/r40/hero-region-seosan.png": "access", "/assets/img/sub/r40/hero-region-hongseong.png": "access", "/assets/img/sub/r40/hero-region-gongju.png": "access", "/assets/img/sub/r40/cervical-myelopathy-imaging-review-v1.webp": "imaging"};
const NSV_UPGRADE_LABELS = {"consult": "질문 노트와 청진기 — AI 설명용 연출 이미지", "wound": "거즈와 드레싱 준비 도구 — AI 설명용 연출 이미지", "nutrition": "곡물밥과 생선·채소 식사 — AI 설명용 연출 이미지", "imaging": "영상 자료를 검토하는 모니터와 기록지 — AI 설명용 연출 이미지", "doctor": "의료 상담을 상징하는 청진기와 기록지 — AI 설명용 연출 이미지", "procedure": "척추 모형과 치료 상담 자료 — AI 설명용 연출 이미지", "safety": "전화와 응급 대응 준비 가방 — AI 설명용 연출 이미지", "access": "방문 준비를 상징하는 지도와 위치 표시 — AI 설명용 연출 이미지", "decision": "자료 비교를 위한 점검표와 돋보기 — AI 설명용 연출 이미지", "preop": "입원 준비 가방과 개인 물품 — AI 설명용 연출 이미지", "posture": "작업 자세를 위한 의자와 책상 — AI 설명용 연출 이미지", "rehab": "탄력 밴드와 운동 도구 — AI 설명용 연출 이미지", "recovery": "보행과 일상 복귀 준비 물품 — AI 설명용 연출 이미지", "acute": "발목 보조기와 냉찜질 준비 물품 — AI 설명용 연출 이미지", "parenting": "육아 중 자세 상담을 위한 생활 공간 — AI 설명용 연출 이미지", "senior": "보행·균형 평가를 상징하는 운동 공간 — AI 설명용 연출 이미지", "postoperative": "회복 상담용 보조기와 지팡이 — AI 설명용 연출 이미지", "gait": "보행 평가를 상징하는 빈 운동 통로 — AI 설명용 연출 이미지", "infusion": "수액 상담을 상징하는 밀봉된 의료 물품 — AI 설명용 연출 이미지", "vaccination": "예방접종 상담을 상징하는 밀봉된 의료 물품 — AI 설명용 연출 이미지", "garden": "자연광 아래의 식물과 밝은 벽 — AI 설명용 연출 이미지", "shoulder": "어깨 관절과 회전근개 구조 — AI 설명용 3D 일러스트", "cervical": "경추와 신경 구조 — AI 설명용 3D 일러스트", "hip": "고관절 구조 — AI 설명용 3D 일러스트", "ankle": "발목과 아킬레스 구조 — AI 설명용 3D 일러스트", "wrist": "손목과 힘줄 구조 — AI 설명용 3D 일러스트", "lumbar": "요추와 신경 구조 — AI 설명용 3D 일러스트", "forefoot": "엄지발가락 관절 구조 — AI 설명용 3D 일러스트", "elbow": "팔꿈치 관절 구조 — AI 설명용 3D 일러스트", "knee": "무릎 관절 구조 — AI 설명용 3D 일러스트", "hospital": "새기준병원 실제 접수 공간", "facility": "새기준병원 실제 재활 치료 공간", "exterior": "새기준병원 실제 건물 외관"};
const NSV_ANATOMY = new Set(["ankle", "cervical", "elbow", "forefoot", "hip", "knee", "lumbar", "shoulder", "wrist"]);
function nsvOriginalPath(source) {
 try { const u=new URL(source,location.origin); return u.pathname==='/_next/image' ? new URL(u.searchParams.get('url'),location.origin).pathname : u.pathname; } catch { return ''; }
}
function upgradeExistingVisuals(rootPath) {
 const root=document.querySelector('main')||document.querySelector('#container')||document.querySelector('#wrapper');
 if(!root)return;
 for(const img of root.querySelectorAll('img')){
  if(img.closest('[data-nsv-added]'))continue;
  const sourcePath=nsvOriginalPath(img.getAttribute('src')||img.currentSrc);
  const key=NSV_UPGRADE_MAP[sourcePath] || (sourcePath.startsWith(rootPath) ? sourcePath.split('/').pop().replace('.webp','') : null);
  if(!key)continue;
  if(!img.dataset.nsvOriginal)img.dataset.nsvOriginal=JSON.stringify({src:img.getAttribute('src'),srcset:img.getAttribute('srcset'),alt:img.getAttribute('alt'),title:img.getAttribute('title')});
  img.removeAttribute('srcset'); img.src=rootPath+key+'.webp'; img.alt=NSV_UPGRADE_LABELS[key];img.title=NSV_UPGRADE_LABELS[key];img.dataset.nsvUpgraded=key;
  img.classList.add('nsv-upgraded-image');if(NSV_ANATOMY.has(key))img.classList.add('nsv-upgraded-anatomy');
 }
 for(const el of root.querySelectorAll('*')){
  const background=getComputedStyle(el).backgroundImage;
  if(!background.includes('url('))continue;
  const upgraded=background.replace(/url\(["']?([^"')]+)["']?\)/g,(match,url)=>{
   const key=NSV_UPGRADE_MAP[nsvOriginalPath(url)];return key?'url("'+rootPath+key+'.webp")':match;
  });
  if(upgraded!==background){
   if(!el.dataset.nsvBackgroundOriginal)el.dataset.nsvBackgroundOriginal=el.style.backgroundImage||'__stylesheet__';
   el.style.backgroundImage=upgraded;el.dataset.nsvBackgroundUpgraded='true';
  }
 }
}
function restoreHospitalVisuals(){
 for(const img of document.querySelectorAll('[data-nsv-original]')){
  const attrs=JSON.parse(img.dataset.nsvOriginal);
  for(const [k,v]of Object.entries(attrs))if(v===null)img.removeAttribute(k);else img.setAttribute(k,v);
  img.classList.remove('nsv-upgraded-image','nsv-upgraded-anatomy');delete img.dataset.nsvOriginal;delete img.dataset.nsvUpgraded;
 }
 for(const el of document.querySelectorAll('[data-nsv-background-original]')){
  if(el.dataset.nsvBackgroundOriginal==='__stylesheet__')el.style.removeProperty('background-image');else el.style.backgroundImage=el.dataset.nsvBackgroundOriginal;
  delete el.dataset.nsvBackgroundOriginal;delete el.dataset.nsvBackgroundUpgraded;
 }
}

/* Content illustrations complement existing clinical photos without replacing them. */
function applyHospitalVisuals(rootPath) {
  if (/^\/(adm|api|medican_db_admin)(\/|$)/.test(location.pathname)) return;
  const root = document.querySelector('main') || document.querySelector('#container') || document.querySelector('#wrapper');
  if (!root) return;
  upgradeExistingVisuals(rootPath);
  document.body.classList.add('nsv-site');
  document.body.style.setProperty('--nsv-garden', 'url("' + rootPath + 'garden.webp")');
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
  const labels = NSV_UPGRADE_LABELS;
  const raster = NSV_ANATOMY;
  const pageTitle = (root.querySelector('h1')?.textContent || document.title).trim();
  function topic(el) {
    const heading = (el.matches('h1,h2,h3,h4,p') ? el.textContent : el.querySelector('h1,h2,h3,h4,summary,strong,b')?.textContent) || '';
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
    image.src = rootPath + key + '.webp';
    image.alt = labels[key];
    image.width = 720; image.height = 400;
    image.loading = 'lazy'; image.decoding = 'async';
    holder.appendChild(image);
    if (kind === 'prose') {
      el.insertAdjacentElement('afterend', holder);
    } else if (el.tagName === 'DETAILS') {
      const summary = el.querySelector(':scope > summary');
      if (summary) summary.insertAdjacentElement('afterend', holder); else el.prepend(holder);
    } else el.prepend(holder);
    if (kind !== 'prose') el.classList.add(kind === 'card' ? 'nsv-content-card' : 'nsv-content-section');
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
  // Health columns use paragraphs instead of cards: illustrate each prose topic.
  function proseHeading(node) {
    if (node.matches('h1,h2')) return true;
    if (!node.matches('p') || node.textContent.trim().length > 180) return false;
    const style = getComputedStyle(node);
    return parseFloat(style.fontSize) >= 17 && parseInt(style.fontWeight, 10) >= 600;
  }
  for (const heading of root.querySelectorAll('.column-view__content h2,.column-view__content > p,#bo_v_con h2,article > h2')) {
    if (!proseHeading(heading)) continue;
    if (excluded(heading) || heading.nextElementSibling?.matches('[data-nsv-added]')) continue;
    const group = [];
    for (let node = heading.nextElementSibling; node && !proseHeading(node); node = node.nextElementSibling) group.push(node);
    if (group.some(node => node.matches('img,picture,video,iframe') || media(node)) || group.map(node => node.textContent).join('').trim().length < 60) continue;
    insert(heading, 'prose');
  }
  document.documentElement.dataset.nsvVersion = '20261005-v5';
}

export { applyHospitalVisuals, restoreHospitalVisuals };
