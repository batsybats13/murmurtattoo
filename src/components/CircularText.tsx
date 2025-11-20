import { useRef } from "react";
import "./CircularText.css";

type CircularTextProps = {
  text: string;
  spinDuration?: number;
  className?: string;
  radius?: number;
  fontSize?: number;
  color?: string;
};

export default function CircularText({
  text,
  spinDuration = 15,
  className = "",
  radius = 80,
  fontSize = 14,
  color = "#367faf",
}: CircularTextProps) {
  const circleIdRef = useRef(`text-circle-${Math.random().toString(36).substr(2, 9)}`);
  const size = (radius + fontSize) * 2;
  const circleId = circleIdRef.current;

  return (
    <div className={`circular-text-container ${className}`}>
      <svg
        className="circular-text-svg"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          animation: `spin ${spinDuration}s linear infinite`,
        }}
      >
        <defs>
          <circle
            id={circleId}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </defs>
        <text
          fill={color}
          fontSize={fontSize}
          fontFamily="Reggae One, sans-serif"
          fontWeight="400"
        >
          <textPath
            href={`#${circleId}`}
            startOffset="0%"
            fill={color}
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

