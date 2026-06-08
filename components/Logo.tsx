import React from 'react';

export default function Logo({ ...rest }) {
  return (
    <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {/* Icon: Command Prompt Cursor + Root Branch Node */}
      <rect x="0" y="6" width="28" height="28" rx="6" fill="rgb(var(--primary))" />
      {/* Command prompt symbol '>' */}
      <path
        d="M9 13.5L14.5 19L9 24.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Terminal underscore cursor '_' */}
      <path
        d="M14 24H19"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Brand Text */}
      <text
        x="38"
        y="27"
        fill="currentColor"
        fontFamily="var(--font)"
        fontWeight="700"
        fontSize="21"
        letterSpacing="-0.03em"
      >
        rebel
        <tspan fill="rgb(var(--primary))">root</tspan>
      </text>
    </svg>
  );
}
