/* ═══════════════════════════════════════════════════════════════════════
   ㈜미래아이엔텍 홈페이지 — 콘텐츠 설정 파일 (content.js)
   ─ 관리자 페이지로 이관할 때 이 파일의 데이터만 교체하면 됩니다.
   ─ SAMPLE 주석이 붙은 값은 임의로 작성한 값입니다. 실제 값으로 교체해 주세요.
   ═══════════════════════════════════════════════════════════════════════ */
window.SITE_CONTENT = {

  /* ── 회사 기본 정보 (실제 값) ── */
  company: {
    name: '㈜미래아이엔텍',
    en: 'Mirae I&N Tech Co., Ltd.',
    ceo: '김학연',
    est: 2003,
    // 로고 이미지: mrint.co.kr 실제 로고 파일 (없으면 null → 텍스트 로고 placeholder로 자동 대체)
    logo: { src: 'assets/img/logo.svg', alt: '미래아이엔텍' },
    address: '서울시 중구 수표로 23, 1001호·1101호',
    addressEn: '23 Supyo-ro, Jung-gu, Seoul',
    tel: '02-557-5267',
    fax: '02-557-5268',
    email: 'mrint01@mrint.co.kr',
  },

  /* ── 메인 슬로건 ── */
  slogan: {
    en: 'Mirae I&N Tech — Connecting the Future of Business',
    kr1: '비즈니스의 미래를',
    kr2em: '연결',
    kr2: '하는 기술',
    sub: '시스템 구축부터 운영, AI 전환까지. 미래기술연구소를 중심으로 다섯 개 사업영역 전체에 AI를 더해, 비즈니스의 다음 20년을 준비합니다.',
  },

  /* ── 핵심 수치 ──
     SAMPLE: Projects 500+ / Avg. Growth 20% 는 임의 수치 — 실제 값으로 교체 필요 */
  metrics: [
    { k: 'Established', v: 2003, static: true, d: '2003년 설립 이후 20년 넘게 축적한 현장 경험' },
    { k: 'Projects Delivered', v: 500, suffix: '+', d: '구축·운영·솔루션 누적 프로젝트', sample: true }, // SAMPLE
    { k: 'Avg. Annual Growth', v: 20, prefix: '약', suffix: '%', d: '최근 3년 연평균 성장률', sample: true },   // SAMPLE
    { k: 'Business Areas', v: 5, suffix: '+1', d: '5개 사업영역과 미래기술연구소' },
  ],

  /* ── 고객사 (마키 표기명) ──
     SAMPLE: 노출 고객사 목록 — 기존 사이트 게재 고객사 기준, 확정 필요 */
  clients: {
    note: '사업실적 및 서비스 소개에 게재된 고객사입니다.',
    row1: ['농협은행', 'IBK기업은행', 'SC제일은행', '흥국생명', '흥국화재', '현대카드', '라이나손해보험', 'KDB캐피탈'], // SAMPLE
    row2: ['현대차증권', 'SBI저축은행', '한국투자저축은행', '애큐온저축은행', '애큐온캐피탈', 'BNK캐피탈', '태광그룹', '경동나비엔'], // SAMPLE
  },

  /* ── 미래기술연구소 허브 (메인·비즈니스 개요 공통) ── */
  hub: {
    tag: 'Future Technology Research Center',
    titleHtml: '미래기술연구소가<br>다섯 개 영역에 <em>AI</em>를 더합니다.',
    desc: '연구소가 발굴하고 검증한 기술이 시스템 통합, 시스템 운영, IT 컨설팅, 솔루션 비즈니스, 디지털 전환 다섯 영역에 각각 다른 방식으로 스며들어, 기존 역량을 한 단계 끌어올립니다.',
    linkLabel: '미래기술연구소 자세히 보기',
    // 솔루션 비즈니스 상세 페이지의 미래기술연구소 섹션(#lab)으로 이동
    linkHref: 'business/solutions/index.html#lab',
  },

  /* ── 사업영역 5개 — 개요·서비스 범위에 AI가 자연스럽게 스며든 문구 ── */
  areas: [
    {
      id: 'system-integration', no: '01', tag: 'SI', glyph: 'g-b',
      title: '시스템 통합', en: 'System Integration',
      short: '고객에게 최적화된 정보시스템과 IT 솔루션을 설계·구축합니다.',
      overviewTitle: '설계부터 구축까지, 고객의 사업 목적에 맞는 정보시스템을 만듭니다.',
      overview: '요구사항 분석부터 설계·개발·안정화까지 전 과정을 아우르는 시스템 통합 서비스를 제공합니다. 다양한 구축 경험과 노하우를 AI에 학습시켜 개발을 효율화하고, 오래된 시스템도 검증된 자산을 그대로 살려 새로운 기술 환경으로 전환합니다. 축적된 자산을 패키지 형태로 재활용해 빠르게 구축하며, 구축 이후의 운영까지 하나의 체계로 이어갑니다.',
      scope: [
        ['요구사항 분석 및 설계', '축적된 구축 노하우를 학습한 AI와 함께 고객의 업무 프로세스를 분석하고 시스템의 뼈대를 설계합니다.'],
        ['업무·화면 시스템 개발', 'AI 학습으로 개발 효율을 높여, 안정적인 품질로 업무 시스템과 화면을 개발합니다.'],
        ['차세대·신규 시스템 구축', '변경되는 비즈니스에 맞춰 신규 시스템을 구축합니다.'],
        ['레거시 전환·현대화', '낡은 시스템의 검증된 자산을 AI로 변환·재활용해, 최신 기술 환경에 맞는 현대적인 시스템으로 전환합니다.'],
        ['품질 검증 및 안정화', '체계적인 테스트로 오픈 이후의 안정성을 확보합니다.'],
        ['패키지형 빠른 구축', '검증된 자산을 패키지 형태로 재활용해, 새로운 프로젝트도 빠르게 구축합니다.'],
      ],
      quotes: [ // SAMPLE — 인용문·화자 모두 임의 작성
        { text: '기존 시스템을 그대로 옮기는 줄 알았는데, 검증된 자산을 AI로 변환해 재활용하는 방식 덕분에 구축 일정이 눈에 띄게 빨라졌습니다.', who: '국내 대기업 계열사 정보시스템 담당자', tag: 'System Integration', sample: true },
        { text: '요구사항이 바뀔 때마다 새로 만드는 게 아니라 검증된 자산을 다듬는 방식이라, 화면 품질이 처음부터 일정했습니다.', who: '제조 기업 정보시스템 담당자', tag: 'System Integration', sample: true },
        { text: '구축 후 운영까지 같은 팀이 이어서 보니, 인수인계에서 생기던 공백이 없었습니다.', who: '서비스 기업 IT 담당자', tag: 'System Integration', sample: true },
      ],
    },
    {
      id: 'system-operation', no: '02', tag: 'ITO · SM', glyph: 'g-c',
      title: '시스템 운영', en: 'System Management',
      short: 'SLA 기반으로 애플리케이션부터 인프라까지, 멈추지 않는 IT 운영을 지원합니다.',
      overviewTitle: '시스템이 멈추지 않도록, 운영 전 영역을 하나의 수준으로 관리합니다.',
      overview: '애플리케이션 유지보수부터 인프라 통합 유지보수까지, IT 운영의 전 영역을 서비스수준협약(SLA) 기반으로 관리합니다. SLA 지표 관리와 예측, 장애·이슈 대응, 투입 인력 관리까지 AI를 함께 돌려 측정·보고·개선의 순환(SLM)으로 서비스 품질을 보장하고, 기존 운영 우수 인력 중심의 조직으로 서비스의 연속성을 지킵니다.',
      scope: [
        ['애플리케이션 유지보수', '업무 시스템의 유지보수·진단·성능 향상을 수행합니다.'],
        ['인프라 통합 유지보수', '서버·스토리지·네트워크를 통합해 관리합니다.'],
        ['SLA · SLM 기반 운영', 'SLA 지표를 AI로 관리·예측하고, 측정·보고·개선의 순환을 운영합니다.'],
        ['장애·이슈 대응', '발생한 장애와 이슈를 AI가 분류·추적해 체계적으로 대응합니다.'],
        ['라이선스 · 자산 운영 지원', '라이선스 만료를 사전에 안내하고 신청을 지원하며, 신규 입사자에게 자산을 자동 배정합니다.'],
        ['투입 인력 이상 징후 감지', '투입 인력의 이상 징후를 AI가 감지해 운영 품질을 일정하게 유지합니다.'],
      ],
      quotes: [ // SAMPLE — 인용문·화자 모두 임의 작성
        { text: '지표 관리가 AI 예측으로 바뀌면서 장애를 미리 알려주는 느낌입니다. 운영 인력의 이상 징후까지 봐주니 안심이 됩니다.', who: '서비스 기업 운영팀 리더', tag: 'System Management', sample: true },
        { text: '야간 장애 대응이 가장 걱정이었는데, 이슈가 분류돼서 먼저 접수되니 대응 속도가 달라졌습니다.', who: '통합 유지보수 운영 담당자', tag: 'System Management', sample: true },
        { text: '라이선스 만료를 미리 챙겨주니 감사 시즌이 한결 편해졌습니다.', who: '중견기업 인프라 담당자', tag: 'System Management', sample: true },
      ],
    },
    {
      id: 'it-consulting', no: '03', tag: 'CONSULTING', glyph: 'g-d',
      title: 'IT 컨설팅', en: 'IT Consulting',
      short: 'IT 운영 효율화부터 디지털 전환, 정보 보안까지 — IT 전 영역을 진단하고 방향을 제시합니다.',
      overviewTitle: '현장의 경험이 답을 알고 있습니다. 진단에서 로드맵까지 함께합니다.',
      overview: 'IT 운영 효율화, 디지털 전환, 정보 보안 등 IT 전 영역에 대한 컨설팅을 제공합니다. 축적된 제안서와 산출물을 AI가 분석해 고객 상황에 맞는 진단과 제안서를 빠르고 정교하게 준비하고, 오랜 현장 수행 경험을 바탕으로 최적의 솔루션과 개선 방향을 제시합니다.',
      scope: [
        ['IT 운영 효율화 컨설팅', '운영 프로세스와 조직의 효율을 진단합니다.'],
        ['디지털 전환 컨설팅', 'AI·디지털 전환의 방향과 순서를 설계합니다.'],
        ['정보 보안 컨설팅', '보안 수준을 진단하고 개선 과제를 도출합니다.'],
        ['서비스 수준(SLA) 진단', '현재 운영 수준을 객관적으로 측정합니다.'],
        ['AI 진단 · 제안서 작성', '축적된 제안서와 산출물을 AI가 분석해 고객 상황에 맞는 진단과 제안서를 빠르고 정교하게 작성합니다.'],
        ['개선 로드맵 수립', '단계적인 개선 로드맵을 제시합니다.'],
      ],
      quotes: [ // SAMPLE — 인용문·화자 모두 임의 작성
        { text: '컨설팅 결과물이 선언문이 아니라 실행 계획이었습니다. 다음 단계가 명확해졌습니다.', who: '중견기업 경영지원팀 담당자', tag: 'IT Consulting', sample: true },
        { text: '보안 점검에서 지적됐던 항목을 진단표로 정리해 주니 내부 보고가 쉬웠습니다.', who: '중소 제조사 경영지원팀 담당자', tag: 'IT Consulting', sample: true },
        { text: '실제 운영 데이터를 기반으로 진단해 주니 설득력이 달랐습니다.', who: '공공기관 정보시스템 담당자', tag: 'IT Consulting', sample: true },
      ],
    },
    {
      id: 'solutions', no: '04', tag: 'SOLUTION', glyph: 'g-e',
      title: '솔루션 비즈니스', en: 'Solution Business',
      short: 'STEG ITSM·ITAM과 자사 통합 사업 관리 시스템 FLAME으로, 도입부터 운영까지 이어지는 솔루션 서비스를 제공합니다.',
      overviewTitle: '단독 도입부터 운영 패키지까지, 고객의 방식에 맞춰 대응합니다.',
      overview: 'IT 서비스 관리(STEG ITSM)와 IT 자산 관리(STEG ITAM) 솔루션의 도입과 안정적인 운영을 지원합니다. 여기에 자사 통합 사업 관리 시스템 FLAME을 더해 고객·사업·인력 운영을 하나의 흐름으로 연결하고, 쌓인 운영 데이터를 AI가 읽어 이슈를 선제적으로 감지하고 반복 업무를 자동화합니다. 솔루션 단독 도입을 원하는 고객과 운영 전체를 맡기는 고객(자사 시스템 기반 패키지 제공)에게 각각 다른 방식으로 대응합니다.',
      scope: [
        ['STEG ITSM', 'IT 서비스 관리 — 인시던트·요청·변경 관리를 체계화합니다. (에스티이지 제공)'],
        ['STEG ITAM', 'IT 자산 관리 — 자산의 생애주기를 통합 관리합니다. (에스티이지 제공)'],
        ['FLAME — 통합 사업 관리 시스템', '고객·주소록 관리, 사업 파이프라인과 영업 관리, 출퇴근·휴가·근태 등 인력 관리를 하나로 연결하며, AI가 축적된 사업·인력 데이터를 분석해 인사이트를 제공합니다.'],
        ['단독 도입 · 구축 · 교육', '솔루션만 깔끔하게 도입하고 싶은 고객을 위한 형태입니다.'],
        ['운영 연계 패키지', '운영 전체를 맡기는 고객을 위한 자사 시스템 기반 패키지입니다.'],
        ['선제적 이슈 대응', '운영 데이터를 AI가 학습해 이슈를 선제적으로 감지하고 반복 업무를 자동화합니다.'],
      ],
      quotes: [ // SAMPLE — 인용문·화자 모두 임의 작성
        { text: '솔루션 도입만 맡기려 했는데, 운영까지 함께 보니 자산 관리가 처음으로 실적이 되었습니다.', who: '공공·서비스 기업 정보시스템 담당자', tag: 'Solution Business', sample: true },
        { text: '단독 도입을 요청했는데, 구축 후 교육과 안정화까지 깔끔하게 마무리해 주었습니다.', who: '제조 그룹사 정보시스템 담당자', tag: 'Solution Business', sample: true },
        { text: '우리 상황에 맞는 형태를 선택지로 보여주는 점이 인상적이었습니다.', who: '서비스 기업 운영 담당자', tag: 'Solution Business', sample: true },
      ],
    },
    {
      id: 'ax-dx', no: '05', tag: '디지털 전환', glyph: 'g-f',
      title: '디지털 전환', en: 'Digital & AI Transformation',
      short: '고객의 디지털 전환(DX)과 AI 전환을 설계하고 실행합니다.',
      overviewTitle: '전환은 큰 말이 아니라, 검증된 작은 단계의 연속입니다.',
      overview: '고객의 디지털 전환(DX)과 AI 전환을 서비스합니다. AI 전환 전략 수립부터 업무 자동화, 데이터 기반 의사결정 체계, 클라우드 전환까지 — 전환의 각 단계에 검증된 방법론과 미래기술연구소의 AI를 적용해, 체감 가능한 변화를 만듭니다.',
      scope: [
        ['AI 전환 전략 수립', '조직에 맞는 AI 적용 로드맵을 수립합니다.'],
        ['업무 프로세스 자동화', '반복 업무를 AI로 자동화해 사람의 시간을 되돌립니다.'],
        ['데이터 기반 의사결정 체계', '감이 아니라 데이터로 결정하는 조직을 만듭니다.'],
        ['클라우드 전환 · 현대화', '인프라를 유연한 클라우드 기반으로 전환합니다.'],
        ['AI 리터러시 · 교육 지원', '현장이 AI를 무서워하지 않고 쓸 수 있게 함께 성장합니다.'],
      ],
      quotes: [ // SAMPLE — 인용문·화자 모두 임의 작성
        { text: '거창한 플랜 대신 이번 분기에 실제로 자동화된 업무가 눈에 보였습니다. 그 차이가 큽니다.', who: '제조 그룹사 전략팀 담당자', tag: '디지털 전환', sample: true },
        { text: '전환이 큰 프로젝트가 아니라 매달 지켜볼 수 있는 지표라는 걸 배웠습니다.', who: '중견기업 전략기획 담당자', tag: '디지털 전환', sample: true },
        { text: '현장에서 AI 도구를 먼저 찾게 된 것이 가장 뜻밖의 변화였습니다.', who: '유통 그룹사 정보시스템 담당자', tag: '디지털 전환', sample: true },
      ],
    },
  ],

  /* ── 미래기술연구소 쇼케이스 (솔루션 비즈니스 상세 — 연구소 어필 섹션) ── */
  labShowcase: {
    eyebrow: 'Future Technology Research Center',
    big: '미래기술연구소',
    kicker: '정밀하게 연결하고, 끊김 없이 진화합니다.',
    desc: '미래기술연구소를 중심으로 핵심 기술을 지속적으로 연구하고, 업계 트렌드를 주시하며 전문 인력이 발굴·검증한 신기술과 솔루션을 고객 서비스에 적용합니다.',
    fw: { no: '01 / Framework', name: 'AI 적용 프레임워크', desc: '각 사업영역에 맞는 AI 적용 모델을 연구하고 현장에 적용합니다.' },
    products: [
      {
        no: '02 / Platform', name: '플레임 FLAME', en: 'Integrated Business Management System',
        desc: '인력·프로젝트·파이프라인 관리 시스템으로 전사 운영 체계를 지원합니다. 미래기술연구소에서 개발한 자사 통합 사업 관리 시스템입니다.',
        addr: 'flame.mrint.co.kr', // SAMPLE — 목업 주소 표기
        screen: 'flame',
        target: 'FULL PACKAGE — 운영 전체 위탁 고객용', // SAMPLE
        features: 'main', // 메인 페이지 플레임 소개와 동일한 4개 항목 사용 (flame.features)
        badges: [['ALL-IN-ONE', '통합 사업 관리'], ['PIPELINE', '영업 파이프라인'], ['PEOPLE', '인력·근태 관리']], // SAMPLE — 배지 문구
      },
      {
        no: '03 / Operation', name: 'ITSM', en: 'Unified Maintenance & Service Management',
        desc: '통합 유지관리 — IT 서비스와 자산을 SLA 기반으로 한 곳에서 관리합니다. 미래기술연구소와 함께 만든 통합 유지관리 솔루션입니다.',
        addr: 'itsm.mrint.co.kr', // SAMPLE — 목업 주소 표기
        screen: 'itsm',
        target: 'FULL PACKAGE — 운영 전체 위탁 고객용', // SAMPLE
        features: [ // SAMPLE — 항목·설명은 임의 작성
          ['01 / Process', '프로세스 관리', '인시던트·서비스 요청·변경을 하나의 프로세스로, 접수부터 완료까지 추적합니다.'],
          ['02 / SLA', 'SLA 관리', '서비스 수준 지표를 상시 측정하고, 목표 이탈 전에 먼저 알려줍니다.'],
          ['03 / Workforce', '인력관리', '유지관리 인력의 투입·일정·성과를 함께 관리해 품질을 일정하게 유지합니다.'],
          ['04 / Report', '통계 및 보고서', '운영 데이터를 모아 월간·분기 리포트로 자동 정리해 드립니다.'],
        ],
        badges: [['PROCESS', '프로세스 관리'], ['SLA', 'SLA 관리'], ['MONITORING', '모니터링']], // SAMPLE — 배지 문구
      },
    ],
  },

  /* ── STEG 솔루션 (솔루션 비즈니스 상세 — 에스티이지 제품 구축 납품) ── */
  steg: {
    intro: '솔루션 단독 도입으로 더 높은 완성도를 원하는 고객에게 — 에스티이지(STG)의 검증된 솔루션을 도입·구축하고 안정화까지 납품합니다.',
    items: [
      {
        no: '01 / STEG ITSM', name: 'STEG ITSM', en: 'E-GENE™ ITSM — by STG (에스티이지)',
        head: 'IT 서비스 운영의 모든 단계를 완성하는 매니지먼트 워크플로우 통합 플랫폼',
        desc: 'ITIL 기반 표준 프로세스를 중심으로 모든 IT 워크플로우를 자동화하며, 노코드 기술을 활용한 자동화 기능과 확장성, AI 에이전트와의 협업 구조로 AI SM(Service Management)을 제공합니다. 에스티이지의 검증된 솔루션을 미래아이엔텍이 도입·구축하고 안정화까지 납품합니다.',
        target: 'SINGLE SOLUTION — 단독 도입 · 구축 납품', // SAMPLE
        addr: 'egene-itsm.stg.co.kr', // SAMPLE — 목업 주소 표기
        screen: 'egitsm',
        features: [ // SAMPLE — 항목·설명은 임의 작성
          ['01 / Request', '서비스요청 관리', '서비스 요청을 접수부터 완료까지 표준 프로세스로 처리합니다.'],
          ['02 / Incident', '장애 관리', '장애를 신속하게 접수·전파하고 해결 이력을 남깁니다.'],
          ['03 / Change', '변경 관리', '시스템 변경을 통제된 절차로 검토·승인합니다.'],
          ['04 / Problem', '문제 관리', '반복되는 이슈의 근본 원인을 찾아 재발을 막습니다.'],
        ],
        badges: [['ITIL', '표준 프로세스'], ['NO-CODE', '자동화'], ['AI AGENT', 'AI SM 협업']], // SAMPLE — 배지 문구
      },
      {
        no: '02 / STEG ITAM', name: 'STEG ITAM', en: 'E-GENE™ ITAM — by STG (에스티이지)',
        head: '보유부터 폐기까지, IT 자산의 생애주기를 완성하는 통합 자산관리 플랫폼', // SAMPLE — 3번째 캡처 미첨부로 임의 작성
        desc: 'IT 자산의 생애주기 전체를 표준 프로세스로 관리하는 자산관리 솔루션입니다. 보유 자산부터 계약·라이선스, 수명주기까지 한 곳에서 관리하며, 에스티이지의 검증된 솔루션을 미래아이엔텍이 도입·구축하고 안정화까지 납품합니다.',
        target: 'SINGLE SOLUTION — 단독 도입 · 구축 납품', // SAMPLE
        addr: 'egene-itam.stg.co.kr', // SAMPLE — 목업 주소 표기
        screen: 'egitam',
        features: [ // SAMPLE — 항목·설명은 임의 작성
          ['01 / Asset', '자산 조회·분류', '모든 IT 자산을 표준 분류 체계로 한눈에 관리합니다.'],
          ['02 / License', '계약·라이선스 관리', '계약과 라이선스 만료를 체계적으로 관리합니다.'],
          ['03 / Lifecycle', '수명주기 관리', '입고부터 배정, 반납, 폐기까지 자산의 생애주기를 관리합니다.'],
          ['04 / Audit', '통계·감사', '보유 현황과 이력을 통계로 정리해 감사에 바로 씁니다.'],
        ],
        badges: [['LIFECYCLE', '자산 생애주기'], ['LICENSE', '계약·라이선스'], ['AUDIT', '통계·감사']], // SAMPLE — 배지 문구
      },
    ],
  },

  /* ── FLAME (자사 통합 사업 관리 시스템) ── */
  flame: {
    eyebrow: '04 — Our Platform',
    kicker: '기업의 운영을 하나로 연결하는',
    name: '플레임 FLAME',
    sub: 'Integrated Business Management System',
    desc: '플레임은 고객·주소록, 사업 파이프라인과 영업 활동, 출퇴근·휴가 등 인력 관리까지 하나의 화면에서 다루는 통합 사업 관리 시스템입니다. 흩어져 있던 사업 정보를 한 곳에 모으고, 쌓인 데이터를 AI가 읽어 다음에 해야 할 일을 알려줍니다. 미래아이엔텍은 자사 업무 전반에 플레임을 적용해 왔으며, 이를 상용 서비스로 확장해 나가고 있습니다.',
    features: [
      ['01 / CRM', '고객·주소록 관리', '고객사와 담당자, 커뮤니케이션 이력을 한 곳에서 관리합니다.'],
      ['02 / Pipeline', '사업·영업 파이프라인', '영업 단계별 진행 상황과 예상 일정을 시각적으로 관리합니다.'],
      ['03 / Workforce', '인력·근태 관리', '출퇴근, 휴가, 근태 현황을 자동 집계해 관리 부담을 줄입니다.'],
      ['04 / Industry', '업종별 사업 관리', '업종 특성에 맞춘 사업 코드·항목 체계를 선택적으로 적용합니다.'],
    ],
    badges: [
      ['ALL-IN-ONE', '통합 사업 관리'],   // SAMPLE — 배지 문구
      ['PIPELINE', '영업 파이프라인'],     // SAMPLE — 배지 문구
      ['PEOPLE', '인력·근태 관리'],        // SAMPLE — 배지 문구
    ],
    mockAddr: 'flame.mrint.co.kr', // SAMPLE — 목업 주소 표기
  },

  /* ── 고객 사례 인용 (메인) ── SAMPLE: 인용문·화자 모두 임의 작성 */
  quotes: [
    {
      text: '처음 기대했던 것보다 업무 범위가 넓어지고, 전체적인 효율이 눈에 띄게 높아졌습니다. 시스템이 멈추지 않는다는 안정감이 가장 큽니다.',
      who: '대기업 계열사 정보시스템 담당자', tag: 'SI · SM', sample: true,
    },
    {
      text: '운영 인력 교체 주차마다 걱정했는데, 이상 징후를 먼저 알려주니 서비스 품질이 한층 안정적으로 느껴집니다.',
      who: '서비스 기업 운영팀 리더', tag: 'ITO · SM', sample: true,
    },
    {
      text: 'AI 전환을 어디부터 시작할지 막막했는데, 분기마다 눈에 보이는 결과로 방향을 잡아주었습니다.',
      who: '중견기업 경영지원팀 담당자', tag: '디지털 전환', sample: true,
    },
  ],

  /* ── 뉴스룸 ── SAMPLE: 모든 글(제목·본문·날짜)은 임의 작성 — 실제 소식으로 교체 필요 */
  newsCats: ['전체', '회사 소식', '기술 · AI', '사업 소식', '채용'], // ※ 뉴스룸 필터 제거로 현재 미사용
  /* ── 뉴스룸 — 실제 공지사항 (mrint.co.kr News&Notices 원문 기준: 제목·날짜·본문·링크 모두 실제 값) ── */
  news: [
    {
      id: "notice-1", date: "2026.03.31", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d, \uae40\ud559\uc5f0 \uc2e0\uc784 \ub300\ud45c\uc774\uc0ac \uc120\uc784\u2026 \u201c\uae08\uc735 IT \ud601\uc2e0 \uc774\ub044\ub294 \uc81c2\uc758 \ub3c4\uc57d \uc120\uc5b8\u201d",
      excerpt: "10\ub144\uac04 \ud575\uc2ec \ud504\ub85c\uc81d\ud2b8\ub97c \uc774\ub048 \ud604\uc7a5\ud615 IT \uc804\ubb38\uac00\uc758 \uc120\uc784\uacfc \ud765\uad6d\ud654\uc7ac\u00b7\ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589 \uc218\uc8fc \ub4f1 \uae08\uc735\uad8c \ud1b5\ud569 ITO \uc785\uc9c0 \uacf5\uace0\ud654\ub97c \ubc1c\ud45c\ud588\uc2b5\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/?post_type=news_notices&p=1583",
      body: ["- 10\ub144\uac04 \ud575\uc2ec \ud504\ub85c\uc81d\ud2b8 \uc774\ub048 \ud604\uc7a5\ud615 IT \uc804\ubb38\uac00\u2026 4\uc6d4 1\uc77c \uacf5\uc2dd \ucde8\uc784", "- \ud765\uad6d\ud654\uc7ac\u00b7\ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589 \uc218\uc8fc \ub4f1 \uae08\uc735\uad8c \ud1b5\ud569 ITO \uc785\uc9c0 \uacf5\uace0\ud654 \uc8fc\ub3c4", "- \u201c\uae30\uc874 \uae08\uc735 IT \uc5ed\ub7c9 \uace0\ub3c4\ud654 \ubc0f \ud601\uc2e0\uc801 \uac00\uce58 \uc81c\uacf5\ud558\ub294 \uc2e0\ub8b0\uc758 \ud30c\ud2b8\ub108 \ub420 \uac83\u201d", "\uae08\uc735 IT \uc194\ub8e8\uc158 \ubc0f \uc544\uc6c3\uc18c\uc2f1 \uc804\ubb38 \uae30\uc5c5 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \uae30\uc5c5\uc758 \uc0c8\ub85c\uc6b4 \ub3c4\uc57d\uacfc \uc11c\ube44\uc2a4 \uc804\ubb38\uc131 \uac15\ud654\ub97c \uc704\ud574 \uae40\ud559\uc5f0 \uc2e0\uc784 \ub300\ud45c\uc774\uc0ac\ub97c \uc120\uc784\ud588\ub2e4\uace0 31\uc77c \ubc1d\ud614\ub2e4. \uacf5\uc2dd \ucde8\uc784 \uc77c\uc790\ub294 \uc624\ub294 4\uc6d4 1\uc77c\uc774\ub2e4.", "\uae40\ud559\uc5f0 \uc2e0\uc784 \ub300\ud45c\uc774\uc0ac\ub294 \uc9c0\ub09c 10\ub144\uac04 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc758 \ud575\uc2ec \ud504\ub85c\uc81d\ud2b8\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc774\ub04c\uc5b4\uc628 IT \uc11c\ube44\uc2a4 \uc804\ubb38\uac00\ub2e4. \ud604\uc7a5\uc5d0 \ub300\ud55c \uae4a\uc740 \uc774\ud574\uc640 \ub0a0\uce74\ub85c\uc6b4 \ud1b5\ucc30\ub825\uc744 \uac16\ucd98 \ub9ac\ub354\ub85c, \uae09\ubcc0\ud558\ub294 \ub514\uc9c0\ud138 \ud658\uacbd \uc18d\uc5d0\uc11c \ud68c\uc0ac\uc758 \uafb8\uc900\ud55c \uc131\uc7a5\uc744 \uacac\uc778\ud574 \uc654\ub2e4\ub294 \ud3c9\uac00\ub97c \ubc1b\ub294\ub2e4.", "\ud2b9\ud788 \uae40 \uc2e0\uc784 \ub300\ud45c\ub294 \ubcf8\ubd80\uc7a5 \uc7ac\uc9c1 \uc2dc\uc808, \ud0c0\uc6d4\ud55c \ub9ac\ub354\uc2ed\uacfc \uc2e4\ubb34 \uac10\uac01\uc744 \ubc14\ud0d5\uc73c\ub85c \uc8fc\uc694 \uae08\uc735\uad8c \uc0ac\uc5c5 \uc218\uc8fc\ub97c \uc5f0\uc774\uc5b4 \uc131\uc0ac\uc2dc\ucf30\ub2e4. \uc9c0\ub09c\ud574 11\uc6d4 \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc758 \uc815\ubcf4\uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5\uc744 \uc218\uc8fc\ud558\uba70 \uc800\ucd95\uc740\ud589 \uace0\uac1d\uc758 \ub514\uc9c0\ud138 \uacbd\uc7c1\ub825 \uac15\ud654\uc5d0 \uae30\uc5ec\ud588\uc73c\uba70, \ud765\uad6d\uc0dd\uba85\uc5d0 \uc774\uc5b4 \uc62c\ud574 4\uc6d4\ubd80\ud130 \ubcf8\uaca9 \ucc29\uc218\ud558\ub294 \ud765\uad6d\ud654\uc7ac\uc758 \u2018IT Application \uc720\uc9c0\ubcf4\uc218 \uc11c\ube44\uc2a4\u2019 \uc0ac\uc5c5\uae4c\uc9c0 \uc5f0\ub2ec\uc544 \uc218\uc8fc\ud558\uba70 \uc0dd\uba85\ubcf4\ud5d8\uacfc \uc190\ud574\ubcf4\ud5d8 \uc601\uc5ed\uc744 \uc544\uc6b0\ub974\ub294 \uae08\uc735 \uadf8\ub8f9\uc0ac IT \uc11c\ube44\uc2a4 \uc601\uc5ed \ud655\uc7a5\uc744 \uc8fc\ub3c4\ud588\ub2e4.", "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \uc774\ubc88 \uc2e0\uc784 \ub300\ud45c \ucde8\uc784\uc744 \uacc4\uae30\ub85c \uc870\uc9c1\uc744 \uc0c8\ub86d\uac8c \uc815\ube44\ud558\uace0, 20\ub144 \uc774\uc0c1 \ucd95\uc801\ub41c \uae08\uc735 IT \uc6b4\uc601 \ub178\ud558\uc6b0\ub97c \ubc14\ud0d5\uc73c\ub85c \uae30\uc874 \uc5ed\ub7c9\uc744 \ub354\uc6b1 \uace0\ub3c4\ud654\ud560 \uacc4\ud68d\uc774\ub2e4.", "\uae40\ud559\uc5f0 \uc2e0\uc784 \ub300\ud45c\uc774\uc0ac\ub294 \ucde8\uc784\uc0ac\ub97c \ud1b5\ud574 \u201c\uadf8\ub3d9\uc548 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc774 \ud55c\uad6d\uc740\ud589, IBK\uae30\uc5c5\uc740\ud589, \ud604\ub300\ucc28\uc99d\uad8c, MG\uc0c8\ub9c8\uc744\uae08\uace0 \ub4f1 \uc8fc\uc694 \uae08\uc735\uae30\uad00\uacfc \uc313\uc544\uc628 \ud0c4\ud0c4\ud55c \uc2e0\ub8b0\ub97c \ubc14\ud0d5\uc73c\ub85c, \uc774\uc81c\ub294 \ub514\uc9c0\ud138 \uae08\uc735 \ud658\uacbd\uc744 \uc120\ub3c4\ud558\ub294 \ud601\uc2e0\uc801\uc778 \ud30c\ud2b8\ub108\ub85c \uac70\ub4ed\ub098\uc57c \ud560 \ub54c\u201d\ub77c\uba70, \u201c\uc55e\uc73c\ub85c\ub3c4 \uc804 \uc784\uc9c1\uc6d0\uc774 \ud569\uc2ec\ud558\uc5ec \uace0\uac1d\uc0ac \uc5ec\ub7ec\ubd84\uaed8 24\uc2dc\uac04 365\uc77c \ubb34\uc911\ub2e8\u00b7\ubb34\uacb0\uc810\uc758 \uc548\uc815\uc801\uc778 IT \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uace0, \ucc28\ubcc4\ud654\ub41c \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\ub294 \ub370 \ucd1d\ub825\uc744 \ub2e4\ud558\uaca0\ub2e4\u201d\uace0 \ud3ec\ubd80\ub97c \ubc1d\ud614\ub2e4.", "\uc0c8\ub85c\uc6b4 \ub9ac\ub354\uc2ed\uc744 \ub9de\uc774\ud55c \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc774 \uae08\uc735\uad8c \ud1b5\ud569 ITO(IT \uc544\uc6c3\uc18c\uc2f1) \ubc0f \uc194\ub8e8\uc158 \uc2dc\uc7a5\uc5d0\uc11c \ubcf4\uc5ec\uc904 \uc55e\uc73c\ub85c\uc758 \ud601\uc2e0 \ud589\ubcf4\uc5d0 \uc5c5\uacc4\uc758 \uc774\ubaa9\uc774 \uc9d1\uc911\ub418\uace0 \uc788\ub2e4."],
    },
    {
      id: "notice-2", date: "2026.02.11", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d, \u20182026 \ud765\uad6d\ud654\uc7ac IT Application \uc720\uc9c0\ubcf4\uc218\u2019 \uc0ac\uc5c5 \uc218\uc8fc / \ubcf4\ud5d8 \uae08\uc735 IT \uac15\uc790 \uc785\uc99d",
      excerpt: "\ud765\uad6d\uc0dd\uba85\uc5d0 \uc774\uc5b4 \ud765\uad6d\ud654\uc7ac\uae4c\uc9c0 \uc218\uc8fc\ud558\uba70 \uae08\uc735 \uadf8\ub8f9\uc0ac IT \uc11c\ube44\uc2a4 \uc601\uc5ed\uc744 \ud655\uc7a5\ud558\uace0, \uae30\uac04\uacc4\u00b7\ucc44\ub110\uacc4 \ub4f1 \ud575\uc2ec \uc2dc\uc2a4\ud15c\uc758 \uc548\uc815\uc801 \uc6b4\uc601\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/?post_type=news_notices&p=1563",
      body: ["- \ud765\uad6d\uc0dd\uba85\uc5d0 \uc774\uc5b4 \ud765\uad6d\ud654\uc7ac\uae4c\uc9c0 \uc218\uc8fc\ud558\uba70 \uae08\uc735 \uadf8\ub8f9\uc0ac IT \uc11c\ube44\uc2a4 \uc601\uc5ed \ud655\uc7a5", "- \uae30\uac04\uacc4\u00b7\ucc44\ub110\uacc4 \ub4f1 \ud575\uc2ec \uc2dc\uc2a4\ud15c\uc758 \uc548\uc815\uc801 \uc6b4\uc601 \ubc0f \ub514\uc9c0\ud138 \uacbd\uc7c1\ub825 \uac15\ud654 \uc8fc\ubaa9", "\uae08\uc735 IT \uc194\ub8e8\uc158 \ubc0f \uc544\uc6c3\uc18c\uc2f1 \uc804\ubb38 \uae30\uc5c5 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d(\ub300\ud45c \uae40\uba85\uc2dd)\uc740 \ud2f0\uc2dc\uc2a4(Tsis)\uac00 \ubc1c\uc8fc\ud55c \u20182026 \ud765\uad6d\ud654\uc7ac IT Application \uc720\uc9c0\ubcf4\uc218 \uc11c\ube44\uc2a4\u2019 \uc0ac\uc5c5\uc744 \uc218\uc8fc\ud588\ub2e4\uace0 11\uc77c \ubc1d\ud614\ub2e4.", "\uc774\ubc88 \uc0ac\uc5c5\uc740 \ud765\uad6d\ud654\uc7ac\uc758 \ubcf4\ud5d8 \uc5c5\ubb34 \uacbd\uc7c1\ub825 \uac15\ud654\ub97c \uc704\ud574 IT \uc778\ud504\ub77c\uc758 \uc548\uc815\uc131\uc744 \ud655\ubcf4\ud558\uace0 \uc11c\ube44\uc2a4 \ud488\uc9c8\uc744 \uc81c\uace0\ud558\ub294 \uac83\uc744 \ud575\uc2ec \ubaa9\uc801\uc73c\ub85c \ud55c\ub2e4. \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \uc774\ubc88 \uacc4\uc57d\uc744 \ud1b5\ud574 \uc624\ub294 4\uc6d4\ubd80\ud130 \ud765\uad6d\ud654\uc7ac\uc758 \uae30\uac04\uacc4(\uc7a5\uae30\u00b7\uc790\ub3d9\ucc28\u00b7\uc77c\ubc18\ubcf4\ud5d8, \uc735\uc790, \uc601\uc5c5 \ub4f1) \ubc0f \ube44\uae30\uac04\uacc4(\uc815\ubcf4\uacc4, \uace0\uac1d \ucc44\ub110, \ud648\ud398\uc774\uc9c0, \ubaa8\ubc14\uc77c \ub4f1) \uc2dc\uc2a4\ud15c \uc804\ubc18\uc5d0 \ub300\ud55c \ud1b5\ud569 \uc720\uc9c0\ubcf4\uc218 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uac8c \ub41c\ub2e4.", "\ub610\ud55c, \uc81c\uc548\uc0ac\ub294 \uc774\uc6d0\ud654\ub41c \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ud2f0\uc2dc\uc2a4(Tsis)\uc640\uc758 \uae34\ubc00\ud55c \ud611\uc5c5\uc744 \ud1b5\ud574 \uc77c\uad00\ub41c \uc11c\ube44\uc2a4 \ud488\uc9c8\uc744 \uc720\uc9c0\ud558\uace0, \uc7a5\uc560 \ubc1c\uc0dd \uc2dc \uc2e0\uc18d\ud55c \uacf5\ub3d9 \ub300\uc751 \uccb4\uacc4\ub97c \uac00\ub3d9\ud558\uc5ec \uc6b4\uc601 \ub9ac\uc2a4\ud06c\ub97c \ucd5c\uc18c\ud654\ud560 \uacc4\ud68d\uc774\ub2e4.", "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \uc774\ubbf8 \ud765\uad6d\uc0dd\uba85\uc758 IT Application \uc720\uc9c0\ubcf4\uc218 \ubc0f \ucc28\uc138\ub300 \uc2dc\uc2a4\ud15c \uc9c0\uc6d0 \uc0ac\uc5c5\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc218\ud589\ud558\uba70 \ud765\uad6d\uae08\uc735\uadf8\ub8f9 \ub0b4\uc5d0\uc11c \ud0c4\ud0c4\ud55c \uc2e0\ub8b0\ub97c \uc313\uc544\uc654\ub2e4. \uc774\ubc88 \ud765\uad6d\ud654\uc7ac \uc0ac\uc5c5 \uc218\uc8fc\ub294 \uc774\ub7ec\ud55c \uc0dd\uba85\ubcf4\ud5d8 \uc601\uc5ed\uc5d0\uc11c\uc758 \uc131\uacfc\uac00 \uc190\ud574\ubcf4\ud5d8 \uc601\uc5ed\uc73c\ub85c \ud655\uc7a5\ub41c \uc0ac\ub840\ub85c, \uae08\uc735\uad8c \ud1b5\ud569 ITO(IT \uc544\uc6c3\uc18c\uc2f1) \uc804\ubb38 \uae30\uc5c5\uc73c\ub85c\uc11c\uc758 \uc785\uc9c0\ub97c \ub354\uc6b1 \uacf5\uace0\ud788 \ud558\ub294 \uacc4\uae30\uac00 \ub420 \uc804\ub9dd\uc774\ub2e4.", "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d \uae40\ud559\uc5f0 \ubcf8\ubd80\uc7a5\uc740 \u201c\ud765\uad6d\uc0dd\uba85\uc5d0 \uc774\uc5b4 \ud765\uad6d\ud654\uc7ac\uc758 IT \uc2dc\uc2a4\ud15c \uc6b4\uc601\uae4c\uc9c0 \ub9e1\uac8c \ub418\uc5b4 \ub9c9\uc911\ud55c \ucc45\uc784\uac10\uc744 \ub290\ub080\ub2e4\u201d\uba70, \u201c\ub2f9\uc0ac\uac00 \ubcf4\uc720\ud55c 20\ub144 \uc774\uc0c1\uc758 \uae08\uc735 IT \uc6b4\uc601 \ub178\ud558\uc6b0\uc640 \uc804\ubb38 \uc778\ub825\uc744 \ucd1d\ub3d9\uc6d0\ud558\uc5ec, \ud765\uad6d\ud654\uc7ac\uac00 \uae09\ubcc0\ud558\ub294 \ub514\uc9c0\ud138 \uae08\uc735 \ud658\uacbd \uc18d\uc5d0\uc11c\ub3c4 \ud754\ub4e4\ub9bc \uc5c6\ub294 \ubcf8\uc5c5 \uacbd\uc7c1\ub825\uc744 \ubc1c\ud718\ud560 \uc218 \uc788\ub3c4\ub85d \ubb34\uc911\ub2e8\u00b7\ubb34\uacb0\uc810 IT \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uaca0\ub2e4\u201d\uace0 \ud3ec\ubd80\ub97c \ubc1d\ud614\ub2e4.", "\ud55c\ud3b8, \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 2003\ub144 \uc124\ub9bd \uc774\ud6c4 \ud55c\uad6d\uc740\ud589, IBK\uae30\uc5c5\uc740\ud589, \ud604\ub300\ucc28\uc99d\uad8c, MG\uc0c8\ub9c8\uc744\uae08\uace0 \ub4f1 \uc8fc\uc694 \uae08\uc735\uae30\uad00\uc758 \uc2dc\uc2a4\ud15c \uad6c\ucd95 \ubc0f \uc6b4\uc601 \uc0ac\uc5c5\uc744 \uc787\ub2ec\uc544 \uc218\ud589\ud558\uba70 \uc9c0\uc18d\uc801\uc778 \uc131\uc7a5\uc138\ub97c \uc774\uc5b4\uac00\uace0 \uc788\ub2e4."],
    },
    {
      id: "notice-3", date: "2025.12.02", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "(\uc8fc)\ubbf8\ub798\uc544\uc774\uc5d4\ud14d, \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589 \u2018\uacc4\uc815\u00b7\ucc44\ub110 \ud1b5\ud569\uad00\ub9ac\u2019 \uc815\ubcf4\uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5 \uc218\uc8fc",
      excerpt: "\uc800\ucd95\uc740\ud589\uc758 \ud575\uc2ec \uc778\ud504\ub77c\uc778 \uacc4\uc815\uacc4\u00b7\ucc44\ub110\uacc4 \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud569 \uad00\ub9ac\u00b7\uc548\uc815\ud654\ud558\ub294 \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5\uc744 \uc218\uc8fc, \ub514\uc9c0\ud138 \uacbd\uc7c1\ub825 \uac15\ud654\uc758 \ubc1c\ud310\uc744 \ub9c8\ub828\ud588\uc2b5\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/?post_type=news_notices&p=1528",
      body: ["\u201c\ub514\uc9c0\ud138 \uae08\uc735 \uacbd\uc7c1\ub825 \uac15\ud654 \ubc0f \uc2dc\uc2a4\ud15c \uc548\uc815\uc131 \ud655\ubcf4\uc5d0 \uae30\uc5ec\u201d", "\uae08\uc735 IT \uc194\ub8e8\uc158 \uc804\ubb38 \uae30\uc5c5 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc758 \uc815\ubcf4\uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5\uc744 \uc218\uc8fc\ud588\ub2e4\uace0 \uc624\ub298(2025\ub144 11\uc6d4 28\uc77c) \ubc1d\ud614\ub2e4.", "\uc774\ubc88 \uacc4\uc57d\uc740 \uc800\ucd95\uc740\ud589\uc758 \ud575\uc2ec \uc778\ud504\ub77c\uc778 \uacc4\uc815\uacc4 \ubc0f \ucc44\ub110\uacc4 \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud569\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uace0 \uc548\uc815\ud654\ud558\ub294 \ub370 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc5b4, \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc758 \ub514\uc9c0\ud138 \uacbd\uc7c1\ub825 \uac15\ud654\uc5d0 \uc911\uc694\ud55c \ubc1c\ud310\uc774 \ub420 \uc804\ub9dd\uc774\ub2e4.", "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \uc774\ubc88 \uc0ac\uc5c5\uc744 \ud1b5\ud574 \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc758 \uacc4\uc815 \uc2dc\uc2a4\ud15c\uacfc \uace0\uac1d \uc811\uc810\uc778 \ubaa8\ubc14\uc77c\u00b7\uc778\ud130\ub137 \ubc45\ud0b9 \ub4f1 \ucc44\ub110 \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud55c \uc804\ubb38\uc801\uc778 \uc720\uc9c0\ubcf4\uc218 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uac8c \ub41c\ub2e4.", "\ud2b9\ud788, \uc800\ucd95\uc740\ud589\uc758 \ub514\uc9c0\ud138 \uc804\ud658(DX) \uac00\uc18d\ud654\uc5d0 \ubc1c\ub9de\ucdb0 \uc2dc\uc2a4\ud15c\uc758 \uc6b4\uc601 \ud6a8\uc728\uc131 \uc99d\ub300, \uc7a5\uc560 \uc608\ubc29 \ubc0f \uc2e0\uc18d\ud55c \ub300\uc751 \uccb4\uacc4 \uad6c\ucd95, \ub098\uc544\uac00 \ud5a5\ud6c4 \ucc28\uc138\ub300 \uc2dc\uc2a4\ud15c \uad6c\ucd95 \ub4f1 \ub300\ud615 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \ud6a8\uc728\uc801\uc778 \ub300\uc751\uc5d0 \uc8fc\ub825\ud560 \uacc4\ud68d\uc774\ub2e4.", "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc758 \uae40\ud559\uc5f0 \ubcf8\ubd80\uc7a5\uc740 \u201c\ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc758 \uc815\ubcf4\uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5\uc744 \uc218\uc8fc\ud558\uac8c \ub418\uc5b4 \ub9e4\uc6b0 \uae30\uc058\ub2e4\u201d\uba70, \u201c\ub2f9\uc0ac\uac00 \ubcf4\uc720\ud55c \ub2e4\ub144\uac04\uc758 \uc800\ucd95\uc740\ud589 \ubc0f \uae08\uc735\uad8c \ud575\uc2ec \uc2dc\uc2a4\ud15c \uad6c\ucd95 \ubc0f \uc6b4\uc601 \ub178\ud558\uc6b0\ub97c \ucd1d\uc9d1\uacb0\ud558\uc5ec \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc774 \ub354\uc6b1 \uc548\uc815\uc801\uc774\uace0 \ud601\uc2e0\uc801\uc778 \uae08\uc735 \uc11c\ube44\uc2a4\ub97c \uace0\uac1d\uc5d0\uac8c \uc81c\uacf5\ud560 \uc218 \uc788\ub3c4\ub85d \ucd5c\uc120\uc744 \ub2e4\ud560 \uac83\u201d\uc774\ub77c\uace0 \ud3ec\ubd80\ub97c \ubc1d\ud614\ub2e4.", "\uc774\ubc88 \uc218\uc8fc\ub294 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc774 \uae08\uc735\uad8c\uc5d0\uc11c \uc313\uc544\uc628 IT \uc804\ubb38\uc131\uacfc \uc2e0\ub8b0\uc131\uc744 \ub2e4\uc2dc \ud55c\ubc88 \uc785\uc99d\ud55c \uc0ac\ub840\ub85c \ud3c9\uac00\ub41c\ub2e4.", "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d\uc740 \ud55c\uad6d\ud22c\uc790\uc800\ucd95\uc740\ud589\uc758 \uc2dc\uc2a4\ud15c\uc774 24\uc2dc\uac04 365\uc77c \ubb34\uc911\ub2e8\uc73c\ub85c \uc6b4\uc601\ub420 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud568\uc73c\ub85c\uc368, \uc800\ucd95\uc740\ud589 \uace0\uac1d\ub4e4\uc758 \uae08\uc735 \uc11c\ube44\uc2a4 \uc774\uc6a9 \ud3b8\uc758\ub97c \uadf9\ub300\ud654\ud558\uace0 \ub514\uc9c0\ud138 \uae08\uc735 \ud658\uacbd \ubcc0\ud654\uc5d0 \ub2a5\ub3d9\uc801\uc73c\ub85c \ub300\uc751\ud560 \uc218 \uc788\ub294 \uae30\ubc18\uc744 \ub9c8\ub828\ud574 \uc904 \uac83\uc73c\ub85c \uae30\ub300\ub41c\ub2e4."],
    },
    {
      id: "notice-4", date: "2025.07.09", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "\u321c\ubbf8\ub798\uc544\uc774\uc5d4\ud14d, DB\uc554\ud638\ud654 \uc194\ub8e8\uc158 \uc804\ubb38\uc5c5\uccb4 \u2018\uc774\uae00\ub85c\ubc8c\uc2dc\uc2a4\ud15c\u2019\uacfc \uc804\ub7b5\uc801 \ud30c\ud2b8\ub108\uc2ed \uccb4\uacb0",
      excerpt: "DB\uc554\ud638\ud654 \uc194\ub8e8\uc158 \uc804\ubb38 \uae30\uc5c5 \uc774\uae00\ub85c\ubc8c\uc2dc\uc2a4\ud15c\uacfc \uc804\ub7b5\uc801 \ud30c\ud2b8\ub108\uc2ed\uc744 \uccb4\uacb0\ud558\uace0, \ubcf4\uc548\uacfc \uc2dc\uc2a4\ud15c \ud1b5\ud569 \ubd84\uc57c\uc758 \uc804\ubb38\uc131\uc744 \uc735\ud569\ud569\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/?post_type=news_notices&p=1429",
      body: ["2025\ub144 6\uc6d4 \u2014 IT\uc11c\ube44\uc2a4 \uc804\ubb38\uae30\uc5c5 \ubbf8\ub798\uc544\uc774\uc5d4\ud14d(\ub300\ud45c \uae40\uba85\uc2dd)\uc740 DB\uc554\ud638\ud654 \uc194\ub8e8\uc158 \uc804\ubb38 \uae30\uc5c5 \uc774\uae00\ub85c\ubc8c\uc2dc\uc2a4\ud15c(\ub300\ud45c \uac15\ud76c\ucc3d)\uacfc \uc804\ub7b5\uc801 \ud30c\ud2b8\ub108\uc2ed \ud611\uc57d\uc744 \uccb4\uacb0\ud588\ub2e4\uace0 \ubc1d\ud614\ub2e4.", "\uc774\ubc88 \ud611\uc57d\uc740 \ubcf4\uc548\uacfc \uc2dc\uc2a4\ud15c \ud1b5\ud569 \ubd84\uc57c\uc758 \uc804\ubb38\uc131\uc744 \uc735\ud569\ud574, \uae30\uc5c5 \uace0\uac1d\uc758 \ub370\uc774\ud130 \ubcf4\ud638 \ubc0f \ub514\uc9c0\ud138 \uc804\ud658 \uc218\uc694\uc5d0 \uc801\uadf9 \ub300\uc751\ud558\uae30 \uc704\ud55c \uac83\uc73c\ub85c, \uc591\uc0ac\uc758 \uc804\ubb38 \uc5ed\ub7c9\uc774 \ud558\ub098\ub85c \uc5f0\uacb0\ub418\ub294 \ucd9c\ubc1c\uc810\uc774 \ub429\ub2c8\ub2e4."],
    },
    {
      id: "notice-5", date: "2024.12.18", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "KDB\uce90\ud53c\ud0c8 \ucc28\uc138\ub300 \uc0ac\uc5c5 \uc218\uc8fc(\uc778\ud504\ub77c \uad6c\ucd95 \ubd80\ubb38)",
      excerpt: "KDB\uce90\ud53c\ud0c8 \ucc28\uc138\ub300 \uc0ac\uc5c5\uc758 \uc778\ud504\ub77c \uad6c\ucd95 \ubd80\ubb38\uc744 \uc218\uc8fc\ud588\uc2b5\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/newsnotices/",
      body: [],
    },
    {
      id: "notice-6", date: "2024.08.08", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "\ud0dc\uad11\uadf8\ub8f9 \uacc4\uc5f4\uc0ac \ud648\ud398\uc774\uc9c0 \uc6b4\uc601 \uc0ac\uc5c5 \uc218\uc8fc",
      excerpt: "\ud0dc\uad11\uadf8\ub8f9 \uacc4\uc5f4\uc0ac \ud648\ud398\uc774\uc9c0 \uc6b4\uc601 \uc0ac\uc5c5\uc744 \uc218\uc8fc\ud588\uc2b5\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/newsnotices/",
      body: [],
    },
    {
      id: "notice-7", date: "2024.04.05", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "\ud648\ud398\uc774\uc9c0 \ub9ac\ub274\uc5bc \uc624\ud508",
      excerpt: "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d \ud648\ud398\uc774\uc9c0\uac00 \uc0c8\ub86d\uac8c \ub2e8\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/newsnotices/",
      body: [],
    },
    {
      id: "notice-8", date: "2023.07.07", cat: "\uacf5\uc9c0\uc0ac\ud56d",
      title: "\ubbf8\ub798\uc544\uc774\uc5d4\ud14d, \u2018\ud765\uad6d\uc0dd\uba85 IT \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5\u2019 \uc218\uc8fc",
      excerpt: "\ud765\uad6d\uc0dd\uba85 IT \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc720\uc9c0\ubcf4\uc218 \uc0ac\uc5c5\uc744 \uc218\uc8fc\ud588\uc2b5\ub2c8\ub2e4.",
      url: "https://mrint.co.kr/newsnotices/",
      body: [],
    },
  ],

  /* ── 고객 사례 (인터뷰형) ── SAMPLE: 인용문·화자 모두 임의 작성 */
  interviews: [
    {
      tag: 'System Integration', area: '시스템 통합',
      text: '차세대 프로젝트라고 하면 2년을 잡는 게 보통인데, 검증된 자산을 AI로 변환해 재활용하는 방식을 적용하니 1차 오픈이 예상보다 빨랐습니다. 오픈 후 수정 요청도 적었습니다.',
      who: '국내 대기업 계열사 정보시스템 담당자',
    },
    {
      tag: 'System Management', area: '시스템 운영',
      text: 'SLA 보고를 받기 전에 예측치를 먼저 받아봅니다. 장애가 나기 전에 움직여준다는 느낌이고, 이게 신뢰의 시작이라고 생각합니다.',
      who: '서비스 기업 운영팀 리더',
    },
    {
      tag: 'Solution Business', area: '솔루션 비즈니스',
      text: 'ITSM 도입만 요청했는데, 운영 패키지를 함께 보니 자산 관리가 처음으로 제대로 정리되었습니다. 저희 상황에 맞는 형태를 골라줬다는 점이 좋았습니다.',
      who: '공공·서비스 기업 정보시스템 담당자',
    },
    {
      tag: '디지털 전환', area: '디지털 전환',
      text: '거창한 전환 선언 대신 분기마다 자동화된 업무가 눈에 보였습니다. 현장이 AI를 무서워하지 않게 된 것이 가장 큰 변화입니다.',
      who: '제조 그룹사 전략팀 담당자',
    },
  ],

  /* ── 수행 실적 — 고객사례 수행 요약 목록 제거 요청으로 현재 미사용 ── */
  perf: [
    ['2026', '국내 대형 금융기관 채널계 시스템 고도화', 'SI'],
    ['2026', '그룹 공통 업무 플랫폼 구축', 'SI'],
    ['2025', '대기업 계열사 업무시스템 통합 운영', 'ITO'],
    ['2025', '제조 기업 정보시스템 통합 유지보수', 'ITO'],
    ['2025', '클라우드 전환 로드맵 수립 및 이행 지원', '디지털 전환'],
    ['2024', 'ITSM 솔루션 도입 및 안정화', 'Solution'],
    ['2024', '데이터 기반 경영 지표 체계 구축', '디지털 전환'],
    ['2024', '통합 자산관리 시스템 구축', 'Solution'],
  ],

  /* ── 문의 페이지 ── */
  contact: {
    intro: '새로운 프로젝트, 솔루션 도입, 운영 제휴 — 궁금한 점을 남겨 주시면 담당자가 확인 후 회신드립니다.',
    inquirySub: '이름·회사명·이메일과 문의 내용을 남겨 주세요. 평일 기준 하루 이내에 회신드립니다.', // SAMPLE
    brochureTitle: '회사소개서 발송 요청',
    brochureSub: '이메일 주소만 남겨 주세요. 회사소개서를 메일로 발송해 드립니다. (전화번호는 받지 않습니다)',
    doneInquiry: '문의가 접수되었습니다. 담당자가 확인 후 빠르게 회신드리겠습니다.',
    doneBrochure: '요청이 접수되었습니다. 담당자가 확인 후 메일로 발송해 드립니다.',
    privacyLabel: '개인정보 수집 및 이용 동의',
    privacyBrief: '문의 처리를 위한 개인정보 수집·이용에 동의합니다. (회사명, 이름, 이메일, 문의 내용 — 접수 후 1년 내 파기)',
  },

  /* ── 개인정보처리방침 ── SAMPLE: placeholder 본문 — 회사 원문으로 전체 교체 필요 */
  privacy: {
    updated: '2026.10.09', // SAMPLE
    intro: '㈜미래아이엔텍(이하 "회사")은 이용자의 개인정보를 소중히 여기며, 관련 법령을 준수하기 위해 최선을 다합니다.', // SAMPLE
    sections: [
      { h: '1. 수집하는 개인정보 항목', ps: ['회사는 문의 접수 시 이름, 회사명, 이메일, 문의 내용을 수집할 수 있습니다. 회사소개서 발송 요청 시 이메일 주소를 수집합니다.'], sample: true },
      { h: '2. 개인정보의 수집 및 이용 목적', ps: ['수집된 개인정보는 문의 회신, 회사소개서 발송 등 요청 처리를 위한 목적으로만 이용됩니다.'], sample: true },
      { h: '3. 보유 및 이용 기간', ps: ['원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. (문의 접수 기준 1년)'], sample: true },
      { h: '4. 개인정보의 제3자 제공', ps: ['회사는 이용자의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다.'], sample: true },
      { h: '5. 이용자의 권리', ps: ['이용자는 언제든지 자신의 개인정보를 열람·정정·삭제하거나 처리 정지를 요구할 수 있습니다.'], sample: true },
      { h: '6. 문의 창구', ps: ['개인정보 보호 관련 문의: mrint01@mrint.co.kr / 02-557-5267'], sample: true },
    ],
    note: '※ 본 페이지는 placeholder입니다. 회사에서 확정한 개인정보처리방침 원문으로 전체 교체해 주세요. (content.js — privacy 섹션)', // SAMPLE
  },

  /* ── 회사소개 페이지 — 비전 · 미션 ── */
  about: {
    visionTitle: '기술을 넘어,<br><span>신뢰를</span> 설계합니다.',
    lead: '2003년 설립 이후 미래아이엔텍은 다양한 산업의 핵심 정보시스템을 구축하고 운영해 왔습니다.',
    lead2: '검증된 아웃소싱 방법론과 서비스 수준 관리 체계(SLA)를 바탕으로 고객의 시스템이 멈추지 않도록 — 이제 미래기술연구소를 중심에 둔 AI로, 비즈니스의 다음 20년을 함께 준비합니다.',
    principles: [
      ['01', '비전 — 미래를 연결', '시스템 구축부터 운영, AI 전환까지. 끊김 없이 이어지는 기술로 고객의 비즈니스가 미래와 연결되게 합니다.'],
      ['02', '미션 — 신뢰를 설계', 'SLA 기반의 안정적인 운영과 정밀한 구축으로, 고객이 가장 믿고 맡길 수 있는 기술 파트너가 됩니다.'],
      ['03', '원칙 — AI는 허브에서', '미래기술연구소가 모든 사업영역의 데이터를 학습하고, 검증된 AI를 다시 현장에 불어넣는 구조를 지킵니다.'],
    ],
    lab: {
      eyebrow: 'Future Technology Research Center',
      titleHtml: '정밀하게 연결하고,<br><em>끊김 없이</em> 진화합니다.',
      desc: '미래기술연구소를 중심으로 핵심 기술을 지속적으로 연구하고, 업계 트렌드를 주시하며 전문 인력이 발굴·검증한 신기술과 솔루션을 고객 서비스에 적용합니다.',
      features: [ // 솔루션 비즈니스 페이지의 연구소 쇼케이스와 같은 구성 — 간략 소개
        ['01 / Framework', 'AI 적용 프레임워크', '각 사업영역에 맞는 AI 적용 모델을 연구하고 현장에 적용합니다.'],
        ['02 / Platform', '플레임 FLAME', '인력·프로젝트·파이프라인 관리 시스템으로 전사 운영 체계를 지원합니다.'],
        ['03 / Operation', 'ITSM', '통합 유지관리 — IT 서비스와 자산을 SLA 기반으로 한 곳에서 관리합니다.'],
      ],
    },
    mapQuery: '서울시 중구 수표로 23',
    howTitle: '오시는 길',
    howDesc: '서울시 중구 수표로 23, 1001호·1101호 — 지하철 을지로 3가역 / 충무로역 인근입니다.', // SAMPLE — 역 안내 검증 필요
  },
};
