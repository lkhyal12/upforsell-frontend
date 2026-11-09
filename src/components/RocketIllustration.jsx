const RocketIllustration = () => {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      fill="none"
    >
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D1FAE5" />
        </linearGradient>
        <linearGradient id="rocketGreen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#22C55E" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Background */}
      <circle cx="200" cy="205" r="155" fill="#DCFCE7" />
      <circle cx="300" cy="105" r="35" fill="#BBF7D0" />
      <circle cx="85" cy="250" r="22" fill="#BBF7D0" />

      {/* Stars */}
      <path
        d="M85 105 L93 125 L113 133 L93 141 L85 161 L77 141 L57 133 L77 125 Z"
        fill="#16A34A"
      />
      <path
        d="M315 245 L322 261 L338 268 L322 275 L315 291 L308 275 L292 268 L308 261 Z"
        fill="#16A34A"
      />
      <circle cx="270" cy="65" r="6" fill="#16A34A" />
      <circle cx="100" cy="190" r="5" fill="#16A34A" />

      {/* Rocket flame */}
      <path d="M180 260 Q165 315 200 340 Q235 315 220 260 Z" fill="#FBBF24" />
      <path d="M190 270 Q185 310 200 320 Q215 310 210 270 Z" fill="#F97316" />

      {/* Left fin */}
      <path d="M165 220 L115 280 Q110 290 125 290 L180 270 Z" fill="#15803D" />

      {/* Right fin */}
      <path d="M235 220 L285 280 Q290 290 275 290 L220 270 Z" fill="#15803D" />

      {/* Rocket body */}
      <path
        d="M200 55
           C150 105 145 190 160 270
           Q200 300 240 270
           C255 190 250 105 200 55 Z"
        fill="url(#rocketBody)"
        stroke="#15803D"
        strokeWidth="5"
      />

      {/* Rocket tip */}
      <path
        d="M200 55 Q175 90 160 130 Q200 110 240 130 Q225 90 200 55 Z"
        fill="url(#rocketGreen)"
      />

      {/* Window */}
      <circle cx="200" cy="175" r="30" fill="#065F46" />
      <circle cx="200" cy="175" r="21" fill="#334155" />
      <circle cx="193" cy="168" r="7" fill="#FFFFFF" opacity=".7" />

      {/* Rocket details */}
      <path d="M165 240 Q200 255 235 240" stroke="#16A34A" strokeWidth="5" />

      {/* Clouds */}
      <path
        d="M60 340
        C45 310 85 295 105 315
        C110 280 165 280 170 320
        C195 300 225 320 220 345
        Z"
        fill="#FFFFFF"
      />
      <path
        d="M215 350
        C200 320 240 305 260 325
        C270 290 320 295 325 330
        C350 310 380 330 370 355
        Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export default RocketIllustration;
