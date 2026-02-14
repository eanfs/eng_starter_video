import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

const OptionButton: React.FC<{ 
  children: React.ReactNode; 
  correct?: boolean;
  opacity: number;
}> = ({ children, correct, opacity }) => {
  return (
    <div 
      style={{ 
        padding: "12px 24px", 
        borderRadius: 10, 
        border: correct ? "3px solid #22C55E" : "2px solid #CBD5E1",
        backgroundColor: correct ? "#22C55E" : "#F8FAFC",
        display: "inline-block",
        opacity 
      }}
    >
      <Text style={{ fontFamily: FONTS.inter, fontSize: 28, color: correct ? "#FFFFFF" : "#64748B", fontWeight: correct ? 700 : 400 }}>
        {children}
      </Text>
    </div>
  );
};

export const ScenePractice: React.FC = () => {
  const frame = useCurrentFrame();

  const q1Opacity = interpolate(frame, [30, 150], [0, 1], { extrapolateLeft: "clamp" });
  const q2Opacity = interpolate(frame, [600, 720], [0, 1], { extrapolateLeft: "clamp" });
  const q3Opacity = interpolate(frame, [1200, 1320], [0, 1], { extrapolateLeft: "clamp" });
  const q4Opacity = interpolate(frame, [1800, 1920], [0, 1], { extrapolateLeft: "clamp" });
  const q5Opacity = interpolate(frame, [2400, 2520], [0, 1], { extrapolateLeft: "clamp" });
  const q6Opacity = interpolate(frame, [3000, 3120], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.default[0] }}>
      <div style={{ position: "absolute", top: 30, left: 0, right: 0, textAlign: "center" }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 48, fontWeight: 700, color: COLORS.text.primary }}>
          真题练习
        </Text>
      </div>

      <div style={{ position: "absolute", top: 120, left: 100, width: 800, opacity: q1Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: 25, borderRadius: 15, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, fontWeight: 600 }}>1. Which does Jimmy like better, Chinese or Art?</Text>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <OptionButton opacity={q1Opacity}>A. well</OptionButton>
            <OptionButton opacity={q1Opacity}>B. best</OptionButton>
            <OptionButton correct opacity={q1Opacity}>C. better ✓</OptionButton>
            <OptionButton opacity={q1Opacity}>D. much</OptionButton>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 350, left: 100, width: 800, opacity: q2Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: 25, borderRadius: 15, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, fontWeight: 600 }}>2. My hair is longer than ____.</Text>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <OptionButton opacity={q2Opacity}>A. Amy</OptionButton>
            <OptionButton opacity={q2Opacity}>B. Kate</OptionButton>
            <OptionButton correct opacity={q2Opacity}>C. my brother's ✓</OptionButton>
            <OptionButton opacity={q2Opacity}>D. Lucy's</OptionButton>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 580, left: 100, width: 800, opacity: q3Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: 25, borderRadius: 15, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, fontWeight: 600 }}>3. The pen is ____ than that one.</Text>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <OptionButton opacity={q3Opacity}>A. more cheap</OptionButton>
            <OptionButton opacity={q3Opacity}>B. cheap</OptionButton>
            <OptionButton correct opacity={q3Opacity}>C. much cheaper ✓</OptionButton>
            <OptionButton opacity={q3Opacity}>D. quite cheaper</OptionButton>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 120, right: 100, width: 800, opacity: q4Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: 25, borderRadius: 15, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, fontWeight: 600 }}>4. The dumplings are ____ than the noodles.</Text>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <OptionButton opacity={q4Opacity}>A. more nicer</OptionButton>
            <OptionButton opacity={q4Opacity}>B. much delicious</OptionButton>
            <OptionButton opacity={q4Opacity}>C. very nice</OptionButton>
            <OptionButton correct opacity={q4Opacity}>D. much more delicious ✓</OptionButton>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 350, right: 100, width: 800, opacity: q5Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: 25, borderRadius: 15, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, fontWeight: 600 }}>5. The Yellow River isn't so ____ as the Changjiang River.</Text>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <OptionButton correct opacity={q5Opacity}>A. long ✓</OptionButton>
            <OptionButton opacity={q5Opacity}>B. longest</OptionButton>
            <OptionButton opacity={q5Opacity}>C. longer</OptionButton>
            <OptionButton opacity={q5Opacity}>D. the longest</OptionButton>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 580, right: 100, width: 800, opacity: q6Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: 25, borderRadius: 15, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, fontWeight: 600 }}>6. The earth is getting ____.</Text>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <OptionButton opacity={q6Opacity}>A. warm and warmer</OptionButton>
            <OptionButton opacity={q6Opacity}>B. warmer and warm</OptionButton>
            <OptionButton correct opacity={q6Opacity}>C. warmer and warmer ✓</OptionButton>
            <OptionButton opacity={q6Opacity}>D. warm and warm</OptionButton>
          </div>
        </div>
      </div>

      <Subtitle text="好了，现在我们来做几道真题练习！答案：C better, C my brother's, C much cheaper, D much more delicious, A long, C warmer and warmer。" />
    </AbsoluteFill>
  );
};
