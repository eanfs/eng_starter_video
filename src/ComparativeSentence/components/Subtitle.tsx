import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../constants";

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 40 }}>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "16px 32px",
          borderRadius: 12,
          maxWidth: "80%",
          opacity,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.notoSansSC,
            fontSize: 40,
            color: COLORS.text.white,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {text}
        </span>
      </div>
    </AbsoluteFill>
  );
};
