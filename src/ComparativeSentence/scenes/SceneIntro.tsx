import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";

const Text: React.FC<{ style?: React.CSSProperties; children: React.ReactNode }> = ({ style, children }) => (
  <span style={style}>{children}</span>
);

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [30, 80], [-50, 0], { extrapolateLeft: "clamp" });

  const item1Opacity = interpolate(frame, [100, 150], [0, 1], { extrapolateLeft: "clamp" });
  const item2Opacity = interpolate(frame, [180, 230], [0, 1], { extrapolateLeft: "clamp" });
  const item3Opacity = interpolate(frame, [260, 310], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.default[0] }}>
      <div style={{ position: "absolute", top: 150, left: 0, right: 0, textAlign: "center", opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 80, fontWeight: 700, color: COLORS.text.primary }}>
          英语比较级
        </Text>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 48, color: COLORS.accent.blue, marginTop: 20 }}>
          轻松搞定考试难点
        </div>
      </div>

      <div style={{ position: "absolute", top: 450, left: 200, opacity: item1Opacity }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.accent.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 40, color: COLORS.text.white, fontWeight: 700 }}>1</Text>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary, marginTop: 20 }}>
          三种构成方式
        </div>
      </div>

      <div style={{ position: "absolute", top: 450, left: 700, opacity: item2Opacity }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.accent.orange, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 40, color: COLORS.text.white, fontWeight: 700 }}>2</Text>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary, marginTop: 20 }}>
          五个常见错误
        </div>
      </div>

      <div style={{ position: "absolute", top: 450, right: 200, opacity: item3Opacity }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.accent.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 40, color: COLORS.text.white, fontWeight: 700 }}>3</Text>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary, marginTop: 20 }}>
          六个必考知识点
        </div>
      </div>

      <Subtitle text="本期内容，我们将学习比较级的三种构成方式，五个常见错误，以及六个必考知识点。学完这节课，考试，你再也不会丢中的比较级题分了！" />
    </AbsoluteFill>
  );
};
