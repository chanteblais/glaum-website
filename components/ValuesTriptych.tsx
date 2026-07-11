/* The three core values as folk-art arch shrines.
   Flat filled SVG scenes; palettes per panel, gold arches, sparkles. */

function Sparkle({
  x,
  y,
  s = 1,
  fill = "#c8a848",
}: {
  x: number;
  y: number;
  s?: number;
  fill?: string;
}) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -7 L1.6 -1.6 L7 0 L1.6 1.6 L0 7 L-1.6 1.6 L-7 0 L-1.6 -1.6 Z"
      fill={fill}
    />
  );
}

/* A stylized open hand built from a palm and capsule fingers,
   pointing up; scale/rotate/tint via props. */
function Hand({
  x,
  y,
  scale = 1,
  rotate = 0,
  fill,
  palmMark,
  thumb = true,
}: {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  fill: string;
  palmMark?: boolean;
  thumb?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      {/* wrist + palm */}
      <rect x="-16" y="6" width="32" height="34" rx="12" fill={fill} />
      {/* fingers */}
      <rect x="-15.5" y="-16" width="8" height="30" rx="4" fill={fill} />
      <rect x="-5.5" y="-24" width="8" height="38" rx="4" fill={fill} />
      <rect x="4.5" y="-22" width="8" height="36" rx="4" fill={fill} />
      <rect x="13.5" y="-12" width="7.5" height="26" rx="3.75" fill={fill} />
      {thumb && (
        <rect
          x="-28"
          y="4"
          width="8"
          height="24"
          rx="4"
          fill={fill}
          transform="rotate(35 -24 16)"
        />
      )}
      {palmMark && (
        <g transform="translate(0 20) scale(0.28)" opacity="0.85">
          <rect x="-16" y="6" width="32" height="30" rx="12" fill="#3b204a" />
          <rect x="-15.5" y="-14" width="8" height="28" rx="4" fill="#3b204a" />
          <rect x="-5.5" y="-22" width="8" height="36" rx="4" fill="#3b204a" />
          <rect x="4.5" y="-20" width="8" height="34" rx="4" fill="#3b204a" />
          <rect x="13.5" y="-10" width="7.5" height="24" rx="3.75" fill="#3b204a" />
        </g>
      )}
    </g>
  );
}

function CompassionScene() {
  return (
    <svg viewBox="0 0 200 190" className="w-full h-auto" aria-hidden="true">
      {/* eye-with-heart above */}
      <g transform="translate(100 22)">
        <path
          d="M-20 0 C-11 -11, 11 -11, 20 0 C11 11, -11 11, -20 0 Z"
          fill="none"
          stroke="#c8a848"
          strokeWidth="2"
        />
        <path
          d="M0 -4.5 C-2 -7.5 -6.5 -6 -6.5 -2.5 C-6.5 0.5 -3 3 0 5.5 C3 3 6.5 0.5 6.5 -2.5 C6.5 -6 2 -7.5 0 -4.5 Z"
          fill="#b0578f"
        />
        <path
          d="M0 -14 v-5 M-13 -10 l-3.5 -3.5 M13 -10 l3.5 -3.5 M-24 2 h-6 M24 2 h6"
          stroke="#c8a848"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* gold heart, radiant */}
      <g transform="translate(100 92)">
        <path
          d="M0 -14 C-7 -26 -26 -21 -26 -6 C-26 6 -12 16 0 26 C12 16 26 6 26 -6 C26 -21 7 -26 0 -14 Z"
          fill="#c8a848"
        />
        <path
          d="M0 -34 v-8 M-20 -27 l-5 -6 M20 -27 l5 -6"
          stroke="#c8a848"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* cradling hands */}
      <Hand x={68} y={148} rotate={-16} fill="#7c4fa8" thumb={false} />
      <Hand x={132} y={148} rotate={16} fill="#7c4fa8" thumb={false} />

      {/* leaves */}
      <g stroke="#8a63b5" strokeWidth="2.5" strokeLinecap="round" fill="#8a63b5">
        <path d="M30 168 q10 -14 24 -18" fill="none" />
        <ellipse cx="36" cy="160" rx="5" ry="2.6" transform="rotate(-40 36 160)" />
        <ellipse cx="46" cy="152" rx="5" ry="2.6" transform="rotate(-30 46 152)" />
        <path d="M170 168 q-10 -14 -24 -18" fill="none" />
        <ellipse cx="164" cy="160" rx="5" ry="2.6" transform="rotate(40 164 160)" />
        <ellipse cx="154" cy="152" rx="5" ry="2.6" transform="rotate(30 154 152)" />
      </g>

      <Sparkle x={38} y={70} s={0.8} />
      <Sparkle x={165} y={58} s={0.6} />
      <Sparkle x={100} y={132} s={0.55} fill="#fdf8e7" />
    </svg>
  );
}

function CommunityScene() {
  return (
    <svg viewBox="0 0 200 190" className="w-full h-auto" aria-hidden="true">
      {/* star above */}
      <g transform="translate(100 24)">
        <path
          d="M0 -16 L3.5 -3.5 L16 0 L3.5 3.5 L0 16 L-3.5 3.5 L-16 0 L-3.5 -3.5 Z"
          fill="#c8a848"
        />
      </g>

      {/* three raised hands — the centre bears the hand-within-hand */}
      <Hand x={57} y={128} scale={0.82} rotate={-8} fill="#c98bb8" />
      <Hand x={143} y={128} scale={0.82} rotate={8} fill="#d8a0b8" />
      <Hand x={100} y={112} scale={1.12} fill="#b79ad6" palmMark />

      {/* laurel sprigs */}
      <g stroke="#c8a848" strokeWidth="2.5" strokeLinecap="round" fill="#c8a848">
        <path d="M28 172 q6 -20 20 -30" fill="none" />
        <ellipse cx="33" cy="162" rx="5.5" ry="2.8" transform="rotate(-55 33 162)" />
        <ellipse cx="40" cy="150" rx="5.5" ry="2.8" transform="rotate(-45 40 150)" />
        <path d="M172 172 q-6 -20 -20 -30" fill="none" />
        <ellipse cx="167" cy="162" rx="5.5" ry="2.8" transform="rotate(55 167 162)" />
        <ellipse cx="160" cy="150" rx="5.5" ry="2.8" transform="rotate(45 160 150)" />
      </g>

      <Sparkle x={35} y={60} s={0.7} fill="#fdf8e7" />
      <Sparkle x={168} y={48} s={0.55} fill="#fdf8e7" />
      <Sparkle x={148} y={80} s={0.45} />
    </svg>
  );
}

function PlayfulnessScene() {
  return (
    <svg viewBox="0 0 200 190" className="w-full h-auto" aria-hidden="true">
      {/* moon */}
      <path
        d="M168 26 a14 14 0 1 0 10 24 a11 11 0 1 1 -10 -24 Z"
        fill="#c8a848"
      />

      {/* teapot */}
      <g transform="translate(88 108)">
        {/* body */}
        <ellipse cx="0" cy="10" rx="46" ry="38" fill="#9a72c4" />
        {/* shrimp window */}
        <circle cx="0" cy="12" r="24" fill="#f3dcE8" />
        {/* the resident shrimp */}
        <g transform="translate(0 12)">
          <path
            d="M12 -8 c9 3 11 15 3 21 c-6 5 -15 5 -20 1 c-5 -4 -6 -12 -1 -16 c4 -4 10 -4 13 0 c2 3 1 7 -2 8"
            fill="none"
            stroke="#e78bab"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M14 -10 c2 -3 6 -5 9 -4 M13 -11 c0 -3 2 -6 4 -8"
            stroke="#e78bab"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M-8 12 l-5 6 M-4 14 l-2 7"
            stroke="#e78bab"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
        {/* spout */}
        <path
          d="M-42 -4 C-58 -8 -62 -20 -56 -30 C-52 -24 -46 -22 -40 -20 Z"
          fill="#9a72c4"
        />
        {/* handle */}
        <path
          d="M44 -6 C60 -4 62 14 48 20"
          fill="none"
          stroke="#9a72c4"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* lid */}
        <path d="M-20 -26 a20 12 0 0 1 40 0 Z" fill="#7c4fa8" />
        <circle cx="0" cy="-30" r="5" fill="#c8a848" />
        {/* base */}
        <rect x="-16" y="44" width="32" height="6" rx="3" fill="#7c4fa8" />
      </g>

      {/* teacup */}
      <g transform="translate(160 142)">
        <path d="M-18 -10 h36 v10 a18 14 0 0 1 -36 0 Z" fill="#b79ad6" />
        <path
          d="M18 -6 c9 0 10 10 2 13"
          fill="none"
          stroke="#b79ad6"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <ellipse cx="0" cy="16" rx="24" ry="4.5" fill="#7c4fa8" />
        <path
          d="M-6 -18 c-2 4 2 5 0 9 M6 -22 c-2 4 2 5 0 9"
          stroke="#b79ad6"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* a tiny hand, present for the occasion */}
      <Hand x={26} y={152} scale={0.45} rotate={-10} fill="#a5698e" />

      {/* hearts + sparkles */}
      <g transform="translate(34 82) scale(1.6)">
        <path
          d="M0 -3 c-1.5 -2.5 -5 -1.5 -5 1 c0 2 2.5 3.5 5 5.5 c2.5 -2 5 -3.5 5 -5.5 c0 -2.5 -3.5 -3.5 -5 -1 Z"
          fill="#b0578f"
        />
      </g>
      <Sparkle x={54} y={44} s={0.7} />
      <Sparkle x={140} y={70} s={0.5} fill="#fdf8e7" />
      <Sparkle x={182} y={96} s={0.55} />
    </svg>
  );
}

const PANELS = [
  {
    title: "Compassion",
    scene: <CompassionScene />,
    bg: "#dcc6f0",
    titleColor: "#5b3a86",
  },
  {
    title: "Community",
    scene: <CommunityScene />,
    bg: "#3b204a",
    titleColor: "#f3e3c8",
  },
  {
    title: "Playfulness",
    scene: <PlayfulnessScene />,
    bg: "#eccadf",
    titleColor: "#7c4276",
  },
];

export function ValuesTriptych() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-8 sm:gap-6 sm:grid-cols-3 max-w-xs sm:max-w-none mx-auto">
        {PANELS.map((p) => (
          <div
            key={p.title}
            className="arch-panel px-4 pt-10 pb-6"
            style={{ backgroundColor: p.bg }}
          >
            <h3
              className="font-tokyo text-2xl text-center mb-3 tracking-wide"
              style={{ color: p.titleColor }}
            >
              {p.title}
            </h3>
            {p.scene}
          </div>
        ))}
      </div>

      {/* Ribbon */}
      <div className="flex justify-center mt-12">
        <div className="value-ribbon relative bg-plum text-cream font-tokyo tracking-[0.12em] sm:tracking-[0.2em] text-xs sm:text-base px-5 sm:px-12 py-3 text-center">
          Accept Glåüm into your heart.
        </div>
      </div>
    </div>
  );
}
