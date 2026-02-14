import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneConcept1: React.FC = () => {
  const frame = useCurrentFrame();

  const leftOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const rightOpacity = interpolate(frame, [150, 200], [0, 1], { extrapolateLeft: "clamp" });

  const example1Opacity = interpolate(frame, [200, 300], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.default[0] }}>
      <div style={{ position: "absolute", top: 80, left: 0, right: 0, textAlign: "center" }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 56, fontWeight: 700, color: COLORS.text.primary }}>
          比较级的两种构成方式
        </Text>
      </div>

      <div style={{ position: "absolute", top: 250, left: 100, width: 700, opacity: leftOpacity, backgroundColor: COLORS.sceneBg.blue[1], padding: 40, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 48, fontWeight: 700, color: COLORS.accent.blue, textAlign: "center" }}>
          加 -er
        </Text>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, marginTop: 30, textAlign: "center" }}>
          适用于短音节形容词
        </div>
        <div style={{ marginTop: 40 }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, display: "block", opacity: example1Opacity }}>big → bigger</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, display: "block", marginTop: 15, opacity: example1Opacity }}>fast → faster</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, display: "block", marginTop: 15, opacity: example1Opacity }}>hard → harder</Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 250, right: 100, width: 700, opacity: rightOpacity, backgroundColor: COLORS.sceneBg.orange[1], padding: 40, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 48, fontWeight: 700, color: COLORS.accent.orange, textAlign: "center" }}>
          加 more
        </Text>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, marginTop: 30, textAlign: "center" }}>
          适用于多音节形容词
        </div>
        <div style={{ marginTop: 40 }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, display: "block", opacity: example1Opacity }}>beautiful → more beautiful</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, display: "block", marginTop: 15, opacity: example1Opacity }}>expensive → more expensive</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, display: "block", marginTop: 15, opacity: example1Opacity }}>difficult → more difficult</Text>
        </div>
      </div>

      <Subtitle text="首先，比较级有两种构成方式。第一种，加-er。适用于短音节的形容词。比如：big bigger，fast faster，hard harder。两个音节以下，一般都加-er。第二种，加-more。适用于多音节的形容词。比如：beautiful more beautiful，expensive more expensive，difficult more difficult。" />
    </AbsoluteFill>
  );
};
