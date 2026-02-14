import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneConcept6: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const card1Opacity = interpolate(frame, [100, 200], [0, 1], { extrapolateLeft: "clamp" });
  const card2Opacity = interpolate(frame, [400, 500], [0, 1], { extrapolateLeft: "clamp" });
  const card3Opacity = interpolate(frame, [700, 800], [0, 1], { extrapolateLeft: "clamp" });
  const tipOpacity = interpolate(frame, [1000, 1100], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.green[0] }}>
      <div style={{ position: "absolute", top: 50, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 52, fontWeight: 700, color: COLORS.text.primary }}>
          表示"不如"的三个句型
        </Text>
      </div>

      <div style={{ position: "absolute", top: 200, left: 100, width: 550, opacity: card1Opacity, backgroundColor: COLORS.sceneBg.blue[1], padding: 30, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, fontWeight: 700, color: COLORS.accent.blue, textAlign: "center" }}>
          less...than
        </Text>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.primary, marginTop: 20, textAlign: "center" }}>
          <span>This computer is</span><br />
          <span style={{ color: COLORS.accent.blue, fontWeight: 600 }}>less expensive</span><br />
          <span>than that one.</span>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 24, color: COLORS.text.secondary, marginTop: 20, textAlign: "center" }}>
          这台电脑没有那台贵
        </div>
      </div>

      <div style={{ position: "absolute", top: 200, left: 700, width: 550, opacity: card2Opacity, backgroundColor: COLORS.sceneBg.orange[1], padding: 30, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, fontWeight: 700, color: COLORS.accent.orange, textAlign: "center" }}>
          not so...as
        </Text>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.primary, marginTop: 20, textAlign: "center" }}>
          <span>She is</span><br />
          <span style={{ color: COLORS.accent.orange, fontWeight: 600 }}>not so tall</span><br />
          <span>as her sister.</span>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 24, color: COLORS.text.secondary, marginTop: 20, textAlign: "center" }}>
          她不如她姐姐高
        </div>
      </div>

      <div style={{ position: "absolute", top: 200, right: 100, width: 550, opacity: card3Opacity, backgroundColor: COLORS.sceneBg.purple[1], padding: 30, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, fontWeight: 700, color: COLORS.accent.purple, textAlign: "center" }}>
          not as...as
        </Text>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.primary, marginTop: 20, textAlign: "center" }}>
          <span>This film is</span><br />
          <span style={{ color: COLORS.accent.purple, fontWeight: 600 }}>not as interesting</span><br />
          <span>as that one.</span>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 24, color: COLORS.text.secondary, marginTop: 20, textAlign: "center" }}>
          这部电影不如那部有趣
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 200, left: 0, right: 0, textAlign: "center", opacity: tipOpacity }}>
        <div style={{ backgroundColor: COLORS.accent.red, padding: "20px 40px", borderRadius: 15, display: "inline-block" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.white }}>
            not so...as 中间只能加原级，不能加比较级！
          </Text>
        </div>
      </div>

      <Subtitle text="最后，我们看三个表示不如的句型。第一种：less-than。This computer is less expensive than that one。第二种：not so...as。She is not so tall as her sister。第三种：not as...as。This film is not as interesting as that one。not so...as中间只能加原级，不能加比较级！" />
    </AbsoluteFill>
  );
};
