import React, { useRef, useEffect } from "react";

export const TextSvg = ({ text, fillColor, strokeColor }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const computedStyle = window.getComputedStyle(textRef.current);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const fontSize = parseFloat(computedStyle.fontSize);
    const height = lineHeight * fontSize;
    const width = textRef.current.getComputedTextLength();
    textRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
  }, [text]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40">
      <text
        ref={textRef}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1"
        textAnchor="start"
        dominantBaseline="text-before-edge"
        fontFamily="Lexend"
        fontWeight="600"
        fontSize="40px"
        textTransform="capitalize"
      >
        {text}
      </text>
    </svg>
  );
};
