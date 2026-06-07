import "./AnimatedBlob.css";

export default function AnimatedBlob() {
  return (
    <div className="mascot-container">
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="mascot"
      >
        {/* CLIP PATH */}
        <defs>
          <clipPath id="mouthClip">
            <circle cx="110" cy="95" r="52" />
          </clipPath>
        </defs>

        {/* body */}
        <ellipse cx="110" cy="165" rx="48" ry="24" fill="#0f9b8e" />

        {/* neck */}
        <rect
          x="92"
          y="120"
          width="36"
          height="32"
          rx="16"
          fill="#18c7b6"
        />

        {/* face */}
        <circle cx="110" cy="95" r="52" fill="#18c7b6" />

        {/* hair */}
        <circle cx="70" cy="42" r="12" fill="#0f172a" />
        <circle cx="88" cy="28" r="14" fill="#0f172a" />
        <circle cx="110" cy="22" r="15" fill="#0f172a" />
        <circle cx="132" cy="28" r="14" fill="#0f172a" />
        <circle cx="150" cy="42" r="12" fill="#0f172a" />

        {/* waving hand */}
        <g className="wave-arm">
          <rect
            x="40"
            y="82"
            width="18"
            height="60"
            rx="10"
            fill="#18c7b6"
          />

          {/* palm */}
          <circle cx="49" cy="74" r="13" fill="#18c7b6" />

          {/* fingers */}
          <circle cx="39" cy="65" r="4" fill="#18c7b6" />
          <circle cx="47" cy="60" r="4" fill="#18c7b6" />
          <circle cx="56" cy="62" r="4" fill="#18c7b6" />
        </g>

        {/* right arm */}
        <rect
          x="160"
          y="88"
          width="18"
          height="54"
          rx="10"
          fill="#18c7b6"
          transform="rotate(24 160 88)"
        />

        {/* eyes */}
        <g className="eyes">
          {/* eye whites */}
          <circle cx="88" cy="90" r="18" fill="white" />
          <circle cx="132" cy="90" r="18" fill="white" />

          {/* pupils */}
          <circle cx="93" cy="94" r="8" fill="#111827" />
          <circle cx="137" cy="94" r="8" fill="#111827" />

          {/* shine */}
          <circle cx="96" cy="90" r="2.5" fill="white" />
          <circle cx="140" cy="90" r="2.5" fill="white" />
        </g>

        {/* blush */}
        <ellipse
          className="blush blush-left"
          cx="68"
          cy="112"
          rx="10"
          ry="6"
        />

        <ellipse
          className="blush blush-right"
          cx="152"
          cy="112"
          rx="10"
          ry="6"
        />

        {/* mouth group */}
        <g className="mouth-group" clipPath="url(#mouthClip)">
          {/* smile */}
          <path
            className="smile"
            d="M82 125 Q110 145 138 125"
            stroke="#0f172a"
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
          />

          {/* teeth */}
          <rect
            className="teeth"
            x="92"
            y="123"
            width="36"
            height="8"
            rx="4"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
}