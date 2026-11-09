const ShoppingIllustration = () => {
  return (
    <svg
      viewBox="0 0 600 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      fill="none"
    >
      <defs>
        <linearGradient id="green" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#16A34A" />
          <stop offset="1" stopColor="#065F35" />
        </linearGradient>
        <linearGradient id="phone" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E5F7EC" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* Background circles */}
      <circle cx="320" cy="220" r="190" fill="#DCFCE7" opacity=".65" />
      <circle cx="460" cy="100" r="45" fill="#BBF7D0" opacity=".6" />

      {/* Ground shadow */}
      <ellipse
        cx="300"
        cy="390"
        rx="220"
        ry="18"
        fill="#14532D"
        opacity=".12"
        filter="url(#shadow)"
      />

      {/* Smartphone */}
      <g transform="rotate(8 420 210)">
        <rect x="345" y="35" width="190" height="330" rx="28" fill="#17251E" />
        <rect
          x="352"
          y="43"
          width="176"
          height="314"
          rx="23"
          fill="url(#phone)"
        />
        <rect x="405" y="50" width="70" height="12" rx="6" fill="#17251E" />

        {/* Logo bag */}
        <path d="M410 145 L490 145 L482 215 L418 215 Z" fill="url(#green)" />
        <path
          d="M427 145 C427 105 473 105 473 145"
          stroke="#16A34A"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="440"
          y="250"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#17251E"
        >
          UpForSell
        </text>
        <circle cx="440" cy="335" r="5" fill="#A7F3D0" />
      </g>

      {/* Shopping bags */}
      <g>
        <path d="M125 165 H215 L225 275 H115 Z" fill="#16A34A" />
        <path
          d="M145 166 C145 110 195 110 195 166"
          stroke="#15803D"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M235 190 H310 L320 275 H225 Z"
          fill="#FFFFFF"
          stroke="#D1FAE5"
          strokeWidth="4"
        />
        <path
          d="M250 190 C250 150 295 150 295 190"
          stroke="#FFFFFF"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Cart handle */}
      <path
        d="M75 225 H105 L135 340"
        stroke="#166534"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Shopping cart */}
      <path
        d="M120 245 L355 245 L325 345 H145 Z"
        fill="url(#green)"
        stroke="#065F35"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M155 270 H340 M165 300 H332 M175 330 H325"
        stroke="#BBF7D0"
        strokeWidth="5"
        opacity=".8"
      />
      <path
        d="M185 250 L195 340 M245 250 L245 340 M305 250 L295 340"
        stroke="#BBF7D0"
        strokeWidth="5"
        opacity=".8"
      />

      {/* Wheels */}
      <circle cx="175" cy="365" r="18" fill="#064E3B" />
      <circle cx="175" cy="365" r="8" fill="#D1FAE5" />
      <circle cx="310" cy="365" r="18" fill="#064E3B" />
      <circle cx="310" cy="365" r="8" fill="#D1FAE5" />

      {/* Decorative stars */}
      <path
        d="M85 100 L93 120 L113 128 L93 136 L85 156 L77 136 L57 128 L77 120 Z"
        fill="#16A34A"
      />
      <circle cx="330" cy="100" r="8" fill="#86EFAC" />
      <circle cx="105" cy="190" r="6" fill="#86EFAC" />
    </svg>
  );
};

export default ShoppingIllustration;
