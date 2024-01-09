//svg from basmilius

export const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="a"
        x1="150"
        x2="234"
        y1="119.2"
        y2="264.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fbbf24" />
        <stop offset=".5" stopColor="#fbbf24" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="b" viewBox="0 0 384 384">
        <circle
          cx="192"
          cy="192"
          r="84"
          fill="url(#a)"
          stroke="#f8af18"
          strokeMiterlimit="10"
          strokeWidth="6"
        />
        <path
          fill="none"
          stroke="#fbbf24"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="24"
          d="M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 192 192; 45 192 192"
          />
        </path>
      </symbol>
    </defs>
    <use xlinkHref="#b" width="384" height="384" transform="translate(64 64)" />
  </svg>
);

export const rainCloud = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="b2"
        x1="99.5"
        x2="232.6"
        y1="30.7"
        y2="261.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f3f7fe" />
        <stop offset=".5" stopColor="#f3f7fe" />
        <stop offset="1" stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="a2"
        x1="1381.3"
        x2="1399.5"
        y1="-1144.7"
        y2="-1097.4"
        gradientTransform="rotate(-9 8002.567 8233.063)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0b65ed" />
        <stop offset=".5" stopColor="#0a5ad4" />
        <stop offset="1" stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a2"
        id="e2"
        x1="1436.7"
        x2="1454.9"
        y1="-1137"
        y2="-1089.7"
        gradientTransform="rotate(-9 8009.537 8233.037)"
      />
      <linearGradient
        xlinkHref="#a2"
        id="h2"
        x1="1492.1"
        x2="1510.3"
        y1="-1129.3"
        y2="-1082.1"
        gradientTransform="rotate(-9 8016.566 8233.078)"
      />
      <symbol id="k2" viewBox="0 0 350 222">
        <path
          fill="url(#b2)"
          stroke="#e6effc"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="l2" overflow="visible" viewBox="0 0 129 57">
        <path
          fill="url(#a2)"
          stroke="#0a5ad4"
          strokeMiterlimit="10"
          d="M8.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"
          opacity="0"
        >
          <animateTransform
            id="c2"
            additive="sum"
            attributeName="transform"
            begin="0s; c2.end+.33s"
            dur=".67s"
            type="translate"
            values="0 -60; 0 60"
          />
          <animate
            id="d2"
            attributeName="opacity"
            begin="0s; d2.end+.33s"
            dur=".67s"
            keyTimes="0; .25; 1"
            values="0; 1; 0"
          />
        </path>
        <path
          fill="url(#e2)"
          stroke="#0a5ad4"
          strokeMiterlimit="10"
          d="M64.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"
          opacity="0"
        >
          <animateTransform
            id="f2"
            additive="sum"
            attributeName="transform"
            begin=".33s; f2.end+.33s"
            dur=".67s"
            type="translate"
            values="0 -60; 0 60"
          />
          <animate
            id="g2"
            attributeName="opacity"
            begin=".33s; g2.end+.33s"
            dur=".67s"
            keyTimes="0; .25; 1"
            values="0; 1; 0"
          />
        </path>
        <path
          fill="url(#h2)"
          stroke="#0a5ad4"
          strokeMiterlimit="10"
          d="M120.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"
          opacity="0"
        >
          <animateTransform
            id="i2"
            additive="sum"
            attributeName="transform"
            begin="-.33s; i2.end+.33s"
            dur=".67s"
            type="translate"
            values="0 -60; 0 60"
          />
          <animate
            id="j2"
            attributeName="opacity"
            begin="-.33s; j2.end+.33s"
            dur=".67s"
            keyTimes="0; .25; 1"
            values="0; 1; 0"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#k2"
      width="350"
      height="222"
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#l2"
      width="129"
      height="57"
      transform="translate(191.5 343.5)"
    />
  </svg>
);
export const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="a3"
        x1="54.3"
        x2="187.2"
        y1="29"
        y2="259.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#86c3db" />
        <stop offset=".5" stopColor="#86c3db" />
        <stop offset="1" stopColor="#5eafcf" />
      </linearGradient>
      <symbol id="b3" overflow="visible" viewBox="0 0 270 270">
        <path
          fill="url(#a3)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          d="M252.3 168.6A133.4 133.4 0 01118 36.2 130.5 130.5 0 01122.5 3 133 133 0 003 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 01-14.8.8Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-15 135 135; 9 135 135; -15 135 135"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#b3"
      width="270"
      height="270"
      transform="translate(121 121)"
    />
  </svg>
);

export const tornado = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="a"
        x1="220"
        x2="292"
        y1="97.7"
        y2="222.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#d4d7dd" />
        <stop offset=".5" stopColor="#d4d7dd" />
        <stop offset="1" stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1="224"
        x2="288"
        y1="152.6"
        y2="263.4"
      />
      <linearGradient
        xlinkHref="#a"
        id="c"
        x1="229"
        x2="283"
        y1="209.2"
        y2="302.8"
      />
      <linearGradient
        xlinkHref="#a"
        id="d"
        x1="234"
        x2="278"
        y1="265.9"
        y2="342.1"
      />
      <linearGradient
        xlinkHref="#a"
        id="e"
        x1="242"
        x2="270"
        y1="327.8"
        y2="376.3"
      />
    </defs>
    <path
      fill="none"
      stroke="url(#a)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="24"
      d="M136 160h240"
    >
      <animateTransform
        id="x2"
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-12 0; 12 0; -12 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#b)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="24"
      d="M152 208h208"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-24 0; 24 0; -24 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#c)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="24"
      d="M172 256h168"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-36 0; 36 0; -36 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#d)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="24"
      d="M192 304h128"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-48 0; 48 0; -48 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#e)"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="24"
      d="M224 352h64"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="3s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="-60 0; 60 0; -60 0"
      />
    </path>
  </svg>
);

export const thunderStorm = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="a5"
        x1="99.45"
        y1="30.68"
        x2="232.64"
        y2="261.37"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f3f7fe" />
        <stop offset="0.45" stopColor="#f3f7fe" />
        <stop offset="1" stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="b5"
        x1="8.67"
        y1="17.07"
        x2="80.88"
        y2="142.14"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f7b23b" />
        <stop offset="0.45" stopColor="#f7b23b" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="c5"
        x1="1381.32"
        y1="-1144.67"
        x2="1399.47"
        y2="-1097.39"
        gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0b65ed" />
        <stop offset="0.45" stopColor="#0a5ad4" />
        <stop offset="1" stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        id="d5"
        x1="1436.71"
        y1="-1137"
        x2="1454.86"
        y2="-1089.72"
        gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
        xlinkHref="#c5"
      />
      <linearGradient
        id="e5"
        x1="1492.12"
        y1="-1129.34"
        x2="1510.27"
        y2="-1082.06"
        gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
        xlinkHref="#c5"
      />
      <symbol id="f5" viewBox="0 0 350 222">
        <path
          d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
          stroke="#e6effc"
          strokeMiterlimit="10"
          strokeWidth="6"
          fill="url(#a5)"
        />
      </symbol>
      <symbol id="g5" viewBox="0 0 129 57" overflow="visible">
        {/* <!-- raindrop-1 --> */}
        <path
          d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
          stroke="#0a5ad4"
          strokeMiterlimit="10"
          fill="url(#c5)"
          opacity="0"
        >
          <animateTransform
            id="x15"
            attributeName="transform"
            additive="sum"
            type="translate"
            values="0 -60; 0 60"
            begin="0s; x15.end+.33s"
            dur=".67s"
          />

          <animate
            id="y15"
            attributeName="opacity"
            values="0; 1; 0"
            begin="0s; y15.end+.33s"
            dur=".67s"
            keyTimes="0; .25; 1"
          />
        </path>

        {/* <!-- raindrop-2 --> */}
        <path
          d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
          stroke="#0a5ad4"
          strokeMiterlimit="10"
          fill="url(#d5)"
          opacity="0"
        >
          <animateTransform
            id="x25"
            attributeName="transform"
            additive="sum"
            type="translate"
            values="0 -60; 0 60"
            begin=".33s; x25.end+.33s"
            dur=".67s"
          />

          <animate
            id="y25"
            attributeName="opacity"
            values="0; 1; 0"
            begin=".33s; y25.end+.33s"
            dur=".67s"
            keyTimes="0; .25; 1"
          />
        </path>

        {/* <!-- raindrop-3 --> */}
        <path
          d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
          stroke="#0a5ad4"
          strokeMiterlimit="10"
          fill="url(#e5)"
          opacity="0"
        >
          <animateTransform
            id="x35"
            attributeName="transform"
            additive="sum"
            type="translate"
            values="0 -60; 0 60"
            begin="-.33s; x35.end+.33s"
            dur=".67s"
          />

          <animate
            id="y35"
            attributeName="opacity"
            values="0; 1; 0"
            begin="-.33s; y35.end+.33s"
            dur=".67s"
            keyTimes="0; .25; 1"
          />
        </path>
      </symbol>
      <symbol id="h5" viewBox="0 0 102.66 186.75">
        {/* <!-- lightning-bolt --> */}
        <polygon
          points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
          stroke="#f6a823"
          strokeMiterlimit="10"
          strokeWidth="4"
          fill="url(#b5)"
        >
          <animate
            id="x15"
            attributeName="opacity"
            values="1; 1; 0; 1; 0; 1; 0; 1"
            begin="0s; x15.end+.67s"
            dur="1.33s"
            keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
          />
        </polygon>
      </symbol>
    </defs>
    <use
      width="350"
      height="222"
      transform="translate(81 145)"
      xlinkHref="#f5"
    />
    <use
      width="129"
      height="57"
      transform="translate(191.5 343.5)"
      xlinkHref="#g5"
    />
    <use
      width="102.66"
      height="186.74"
      transform="translate(205.23 291)"
      xlinkHref="#h5"
    />
  </svg>
);

export const wind = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="a6"
        x1="138.48"
        y1="5.12"
        x2="224.17"
        y2="153.53"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#d4d7dd" />
        <stop offset="0.45" stopColor="#d4d7dd" />
        <stop offset="1" stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="b6"
        x1="77.66"
        y1="96.23"
        x2="168.99"
        y2="254.41"
        xlinkHref="#a6"
      />
      <symbol id="c6" viewBox="0 0 348 240">
        {/* <!-- blow-1 --> */}
        <path
          d="M267.16,24.29A40,40,0,1,1,296,92H12"
          fill="none"
          strokeDasharray="148"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="24"
          stroke="url(#a6)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0; 2960"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* <!-- blow-2 --> */}
        <path
          d="M151.16,215.71A40,40,0,1,0,180,148H12"
          fill="none"
          strokeDasharray="110"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="24"
          stroke="url(#b6)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0; 1540"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </symbol>
    </defs>
    <use
      width="348"
      height="240"
      transform="translate(82 136)"
      xlinkHref="#c6"
    />
  </svg>
);
