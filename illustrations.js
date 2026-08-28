/* ============================================================
   ILUSTRAÇÕES DE PADRÃO DE MOVIMENTO
   Desenhadas do zero para este projeto. Nenhuma mídia de
   terceiro é usada. Sem dependência do repositório de origem.

   Vocabulário visual:
     - figura esquemática, traço arredondado, cabeça sólida
     - arco/seta em destaque = direção do movimento
     - linha de base = chão, banco ou apoio
     - cores por variável CSS: --fig (corpo), --mov (movimento),
       --eqp (equipamento), --flr (apoio)

   viewBox padrão 0 0 100 100 em todas.
   ============================================================ */
(function () {

  const W = (inner) =>
    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

  // atalhos de estilo
  const B = 'stroke="var(--fig)" stroke-width="4"';        // corpo
  const L = 'stroke="var(--fig)" stroke-width="3.4"';      // membro
  const M = 'stroke="var(--mov)" stroke-width="3"';        // movimento
  const E = 'stroke="var(--eqp)" stroke-width="3.4"';      // equipamento
  const F = 'stroke="var(--flr)" stroke-width="2.5"';      // apoio/chão
  const head = (x, y, r = 7) => `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--fig)"/>`;
  const plate = (x, y, h = 13) => `<line x1="${x}" y1="${y - h / 2}" x2="${x}" y2="${y + h / 2}" ${E}/>`;
  // seta de movimento: caminho + ponta
  const arrow = (d, tip) =>
    `<path d="${d}" ${M} stroke-dasharray="0" marker-start="none"/>
     <path d="${tip}" ${M} fill="none"/>`;

  const P = {};

  /* ---------- EMPURRAR HORIZONTAL — supino, flexão, crucifixo ---------- */
  P['empurrar-h'] = W(`
    <line x1="14" y1="70" x2="86" y2="70" ${F}/>
    <line x1="26" y1="62" x2="74" y2="62" ${B}/>
    ${head(22, 62, 6.5)}
    <path d="M46 62 L46 44" ${L}/><path d="M62 62 L62 44" ${L}/>
    <line x1="38" y1="44" x2="70" y2="44" ${E}/>
    ${plate(40, 44)}${plate(68, 44)}
    <path d="M54 36 L54 22" ${M}/>
    <path d="M48 28 L54 21 L60 28" ${M}/>
    <path d="M34 70 L26 82 M34 70 L44 82" ${L}/>`);

  /* ---------- EMPURRAR VERTICAL — desenvolvimento, militar ---------- */
  P['empurrar-v'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(50, 30, 7)}
    <path d="M50 38 L50 64" ${B}/>
    <path d="M50 44 L34 34 M50 44 L66 34" ${L}/>
    <line x1="26" y1="30" x2="74" y2="30" ${E}/>
    ${plate(29, 30)}${plate(71, 30)}
    <path d="M50 64 L40 90 M50 64 L60 90" ${L}/>
    <path d="M84 40 L84 20" ${M}/>
    <path d="M78 26 L84 19 L90 26" ${M}/>`);

  /* ---------- PUXAR VERTICAL — puxada, barra fixa ---------- */
  P['puxar-v'] = W(`
    <line x1="20" y1="18" x2="80" y2="18" ${E}/>
    ${head(50, 44, 7)}
    <path d="M50 52 L50 74" ${B}/>
    <path d="M50 56 L34 24 M50 56 L66 24" ${L}/>
    <path d="M50 74 L42 92 M50 74 L58 92" ${L}/>
    <path d="M84 30 L84 50" ${M}/>
    <path d="M78 44 L84 51 L90 44" ${M}/>`);

  /* ---------- PUXAR HORIZONTAL — remada ---------- */
  P['puxar-h'] = W(`
    <line x1="14" y1="88" x2="86" y2="88" ${F}/>
    ${head(34, 34, 7)}
    <path d="M36 42 L48 72" ${B}/>
    <path d="M40 52 L70 48" ${L}/>
    <line x1="70" y1="40" x2="70" y2="56" ${E}/>
    <path d="M48 72 L40 88 M48 72 L62 88" ${L}/>
    <path d="M84 48 L64 48" ${M}/>
    <path d="M70 42 L63 48 L70 54" ${M}/>`);

  /* ---------- REMADA ALTA ---------- */
  P['remada-alta'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(50, 24, 7)}
    <path d="M50 32 L50 62" ${B}/>
    <path d="M50 40 L36 46 M50 40 L64 46" ${L}/>
    <line x1="32" y1="46" x2="68" y2="46" ${E}/>
    ${plate(35, 46)}${plate(65, 46)}
    <path d="M50 62 L42 90 M50 62 L58 90" ${L}/>
    <path d="M84 58 L84 40" ${M}/>
    <path d="M78 46 L84 39 L90 46" ${M}/>`);

  /* ---------- AGACHAMENTO — squat, leg press, hack ---------- */
  P['agachamento'] = W(`
    <line x1="14" y1="90" x2="86" y2="90" ${F}/>
    ${head(46, 26, 7)}
    <path d="M46 34 L48 56" ${B}/>
    <line x1="30" y1="34" x2="66" y2="34" ${E}/>
    ${plate(33, 34)}${plate(63, 34)}
    <path d="M48 56 L64 64 L60 90" ${L}/>
    <path d="M48 56 L34 66 L38 90" ${L}/>
    <path d="M84 40 L84 72" ${M}/>
    <path d="M78 66 L84 73 L90 66" ${M}/>`);

  /* ---------- AVANÇO — afundo, passada, step-up ---------- */
  P['avanco'] = W(`
    <line x1="12" y1="90" x2="88" y2="90" ${F}/>
    ${head(44, 24, 7)}
    <path d="M44 32 L46 54" ${B}/>
    <path d="M46 54 L68 62 L68 90" ${L}/>
    <path d="M46 54 L30 72 L22 88" ${L}/>
    <path d="M46 40 L36 54 M46 40 L56 54" ${L}/>
    <path d="M84 44 L84 70" ${M}/>
    <path d="M78 64 L84 71 L90 64" ${M}/>`);

  /* ---------- FLEXÃO DE QUADRIL — terra, stiff, elevação pélvica ---------- */
  P['flexao-quadril'] = W(`
    <line x1="12" y1="90" x2="88" y2="90" ${F}/>
    ${head(30, 34, 7)}
    <path d="M34 40 L54 52" ${B}/>
    <path d="M54 52 L58 90" ${L}/>
    <path d="M40 44 L38 68" ${L}/>
    <line x1="26" y1="68" x2="52" y2="68" ${E}/>
    ${plate(29, 68)}${plate(49, 68)}
    <path d="M76 62 A 22 22 0 0 1 82 34" ${M}/>
    <path d="M75 40 L83 33 L87 42" ${M}/>`);

  /* ---------- FLEXORA — mesa flexora, leg curl ---------- */
  P['flexora'] = W(`
    <line x1="12" y1="66" x2="88" y2="66" ${F}/>
    ${head(22, 56, 6.5)}
    <line x1="28" y1="58" x2="58" y2="58" ${B}/>
    <path d="M58 58 L58 76" ${L}/>
    <path d="M58 76 L78 76" ${L}/>
    <line x1="78" y1="70" x2="78" y2="82" ${E}/>
    <path d="M70 88 A 20 20 0 0 0 86 66" ${M}/>
    <path d="M80 70 L87 65 L90 73" ${M}/>`);

  /* ---------- EXTENSORA — cadeira extensora ---------- */
  P['extensora'] = W(`
    <line x1="16" y1="86" x2="46" y2="86" ${F}/>
    <line x1="16" y1="40" x2="16" y2="86" ${F}/>
    ${head(30, 34, 7)}
    <path d="M30 42 L30 60" ${B}/>
    <path d="M30 60 L48 60" ${L}/>
    <path d="M48 60 L64 46" ${L}/>
    <line x1="64" y1="40" x2="64" y2="52" ${E}/>
    <path d="M50 84 A 26 26 0 0 0 74 56" ${M}/>
    <path d="M67 60 L75 55 L79 63" ${M}/>`);

  /* ---------- PANTURRILHA ---------- */
  P['panturrilha'] = W(`
    <line x1="18" y1="80" x2="82" y2="80" ${F}/>
    ${head(50, 22, 7)}
    <path d="M50 30 L50 56" ${B}/>
    <path d="M50 36 L38 50 M50 36 L62 50" ${L}/>
    <path d="M50 56 L44 72 L44 80" ${L}/>
    <path d="M50 56 L56 72 L56 80" ${L}/>
    <path d="M44 80 L36 80 M56 80 L64 80" ${E}/>
    <path d="M84 56 L84 38" ${M}/>
    <path d="M78 44 L84 37 L90 44" ${M}/>`);

  /* ---------- ABDUÇÃO DE QUADRIL ---------- */
  P['abducao'] = W(`
    <line x1="14" y1="90" x2="86" y2="90" ${F}/>
    ${head(40, 26, 7)}
    <path d="M40 34 L42 58" ${B}/>
    <path d="M42 58 L40 90" ${L}/>
    <path d="M42 58 L70 76" ${L}/>
    <path d="M78 84 A 24 24 0 0 0 84 60" ${M}/>
    <path d="M77 64 L85 59 L89 67" ${M}/>`);

  /* ---------- ADUÇÃO DE QUADRIL ---------- */
  P['aducao'] = W(`
    <line x1="14" y1="90" x2="86" y2="90" ${F}/>
    ${head(40, 26, 7)}
    <path d="M40 34 L42 58" ${B}/>
    <path d="M42 58 L40 90" ${L}/>
    <path d="M42 58 L70 76" ${L}/>
    <path d="M86 62 A 24 24 0 0 0 78 86" ${M}/>
    <path d="M85 82 L79 88 L73 82" ${M}/>`);

  /* ---------- ROSCA — bíceps ---------- */
  P['rosca'] = W(`
    <line x1="22" y1="90" x2="78" y2="90" ${F}/>
    ${head(50, 22, 7)}
    <path d="M50 30 L50 60" ${B}/>
    <path d="M50 36 L38 54" ${L}/>
    <path d="M38 54 L44 40" ${L}/>
    <line x1="38" y1="34" x2="52" y2="46" ${E}/>
    <path d="M50 60 L44 90 M50 60 L56 90" ${L}/>
    <path d="M70 72 A 22 22 0 0 1 82 46" ${M}/>
    <path d="M74 50 L83 45 L86 54" ${M}/>`);

  /* ---------- TRÍCEPS — pulley, testa, coice, mergulho ---------- */
  P['triceps'] = W(`
    <line x1="22" y1="90" x2="78" y2="90" ${F}/>
    ${head(46, 22, 7)}
    <path d="M46 30 L46 60" ${B}/>
    <path d="M46 36 L58 46" ${L}/>
    <path d="M58 46 L58 64" ${L}/>
    <line x1="50" y1="64" x2="66" y2="64" ${E}/>
    <path d="M46 60 L40 90 M46 60 L52 90" ${L}/>
    <path d="M82 44 L82 68" ${M}/>
    <path d="M76 62 L82 69 L88 62" ${M}/>`);

  /* ---------- ELEVAÇÃO LATERAL ---------- */
  P['elev-lateral'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(50, 24, 7)}
    <path d="M50 32 L50 62" ${B}/>
    <path d="M50 38 L26 38 M50 38 L74 38" ${L}/>
    <line x1="20" y1="32" x2="20" y2="44" ${E}/>
    <line x1="80" y1="32" x2="80" y2="44" ${E}/>
    <path d="M50 62 L44 90 M50 62 L56 90" ${L}/>
    <path d="M28 62 A 26 26 0 0 1 18 44" ${M}/>
    <path d="M14 50 L17 41 L25 45" ${M}/>`);

  /* ---------- ELEVAÇÃO FRONTAL ---------- */
  P['elev-frontal'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(42, 24, 7)}
    <path d="M42 32 L42 62" ${B}/>
    <path d="M42 38 L72 38" ${L}/>
    <line x1="76" y1="32" x2="76" y2="44" ${E}/>
    <path d="M42 62 L36 90 M42 62 L48 90" ${L}/>
    <path d="M72 66 A 30 30 0 0 0 80 42" ${M}/>
    <path d="M73 46 L81 41 L85 49" ${M}/>`);

  /* ---------- DELTOIDE POSTERIOR — crucifixo inverso, face pull ---------- */
  P['deltoide-post'] = W(`
    <line x1="14" y1="88" x2="86" y2="88" ${F}/>
    ${head(32, 36, 7)}
    <path d="M36 42 L50 68" ${B}/>
    <path d="M40 50 L22 32 M40 50 L62 32" ${L}/>
    <line x1="16" y1="26" x2="16" y2="38" ${E}/>
    <line x1="68" y1="26" x2="68" y2="38" ${E}/>
    <path d="M50 68 L42 88 M50 68 L62 88" ${L}/>
    <path d="M80 56 L80 34" ${M}/>
    <path d="M74 40 L80 33 L86 40" ${M}/>`);

  /* ---------- ENCOLHIMENTO — trapézio ---------- */
  P['encolhimento'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(50, 26, 7)}
    <path d="M50 34 L50 60" ${B}/>
    <path d="M34 38 L66 38" ${L}/>
    <path d="M34 38 L34 66 M66 38 L66 66" ${L}/>
    <line x1="28" y1="66" x2="40" y2="66" ${E}/>
    <line x1="60" y1="66" x2="72" y2="66" ${E}/>
    <path d="M50 60 L44 90 M50 60 L56 90" ${L}/>
    <path d="M84 50 L84 32" ${M}/>
    <path d="M78 38 L84 31 L90 38" ${M}/>`);

  /* ---------- ANTEBRAÇO / PUNHO ---------- */
  P['antebraco'] = W(`
    <line x1="16" y1="70" x2="60" y2="70" ${F}/>
    <path d="M24 62 L58 62" ${B}/>
    <path d="M58 62 L72 52" ${L}/>
    <line x1="66" y1="44" x2="80" y2="58" ${E}/>
    <path d="M76 76 A 20 20 0 0 0 86 58" ${M}/>
    <path d="M79 62 L87 57 L90 65" ${M}/>`);

  /* ---------- ABDOMINAL — crunch, sit-up, elevação de pernas ---------- */
  P['abdominal'] = W(`
    <line x1="12" y1="82" x2="88" y2="82" ${F}/>
    ${head(30, 52, 7)}
    <path d="M34 56 L54 74" ${B}/>
    <path d="M54 74 L70 60 L82 74" ${L}/>
    <path d="M34 56 L26 44" ${L}/>
    <path d="M34 34 A 22 22 0 0 0 16 52" ${M}/>
    <path d="M20 40 L15 50 L26 53" ${M}/>`);

  /* ---------- PRANCHA — isometria ---------- */
  P['prancha'] = W(`
    <line x1="10" y1="80" x2="90" y2="80" ${F}/>
    ${head(24, 48, 6.5)}
    <path d="M30 52 L74 68" ${B}/>
    <path d="M32 54 L28 80" ${L}/>
    <path d="M74 68 L82 80" ${L}/>
    <circle cx="50" cy="30" r="11" ${M}/>
    <path d="M50 23 L50 30 L55 34" ${M}/>`);

  /* ---------- ROTAÇÃO — twist, oblíquo, lenhador ---------- */
  P['rotacao'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(50, 24, 7)}
    <path d="M50 32 L50 62" ${B}/>
    <path d="M50 40 L72 52" ${L}/>
    <line x1="72" y1="46" x2="72" y2="58" ${E}/>
    <path d="M50 62 L44 90 M50 62 L56 90" ${L}/>
    <path d="M26 40 A 26 26 0 0 1 26 66" ${M}/>
    <path d="M20 60 L27 67 L33 60" ${M}/>`);

  /* ---------- CARDIO — corrida, esteira, bike ---------- */
  P['cardio'] = W(`
    <line x1="10" y1="90" x2="90" y2="90" ${F}/>
    ${head(52, 22, 7)}
    <path d="M52 30 L46 54" ${B}/>
    <path d="M50 38 L66 30 M50 38 L34 46" ${L}/>
    <path d="M46 54 L62 66 L60 88" ${L}/>
    <path d="M46 54 L32 62 L36 78" ${L}/>
    <path d="M14 40 L26 40 M10 52 L22 52 M16 64 L28 64" ${M}/>`);

  /* ---------- MOBILIDADE / ALONGAMENTO ---------- */
  P['mobilidade'] = W(`
    <line x1="12" y1="84" x2="88" y2="84" ${F}/>
    ${head(34, 44, 7)}
    <path d="M38 50 L52 70" ${B}/>
    <path d="M52 70 L80 76" ${L}/>
    <path d="M40 54 L66 70" ${L}/>
    <path d="M52 70 L36 84" ${L}/>
    <path d="M20 62 A 18 18 0 0 1 32 48" ${M}/>
    <path d="M26 46 L33 47 L32 55" ${M}/>`);

  /* ---------- GENÉRICO — fallback ---------- */
  P['generico'] = W(`
    <line x1="20" y1="90" x2="80" y2="90" ${F}/>
    ${head(50, 24, 7)}
    <path d="M50 32 L50 62" ${B}/>
    <path d="M50 40 L34 52 M50 40 L66 52" ${L}/>
    <path d="M50 62 L42 90 M50 62 L58 90" ${L}/>`);

  /* rótulos legíveis por padrão */
  const LABELS = {
    'empurrar-h': 'Empurrar horizontal', 'empurrar-v': 'Empurrar vertical',
    'puxar-v': 'Puxar vertical', 'puxar-h': 'Puxar horizontal',
    'remada-alta': 'Remada alta', 'agachamento': 'Agachamento',
    'avanco': 'Avanço', 'flexao-quadril': 'Flexão de quadril',
    'flexora': 'Flexão de joelho', 'extensora': 'Extensão de joelho',
    'panturrilha': 'Panturrilha', 'abducao': 'Abdução de quadril',
    'aducao': 'Adução de quadril', 'rosca': 'Rosca',
    'triceps': 'Extensão de cotovelo', 'elev-lateral': 'Elevação lateral',
    'elev-frontal': 'Elevação frontal', 'deltoide-post': 'Deltoide posterior',
    'encolhimento': 'Encolhimento', 'antebraco': 'Antebraço',
    'abdominal': 'Abdominal', 'prancha': 'Isometria',
    'rotacao': 'Rotação de tronco', 'cardio': 'Cardio',
    'mobilidade': 'Mobilidade', 'generico': 'Movimento'
  };

  window.PATTERNS = P;
  window.PATTERN_LABELS = LABELS;
})();
