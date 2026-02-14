import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneConcept2: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const card1Opacity = interpolate(frame, [100, 180], [0, 1], { extrapolateLeft: "clamp" });
  const card2Opacity = interpolate(frame, [300, 380], [0, 1], { extrapolateLeft: "clamp" });
  const tipOpacity = interpolate(frame, [500, 600], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.purple[0] }}>
      <div style={{ position: "absolute", top: 80, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 56, fontWeight: 700, color: COLORS.text.primary }}>
          双音节词的特殊规则
        </Text>
      </div>

      <div style={{ position: "absolute", top: 250, left: 150, width: 600, opacity: card1Opacity, backgroundColor: COLORS.accent.green, padding: 40, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 40, fontWeight: 700, color: COLORS.text.white, textAlign: "center" }}>
          用 -er
        </Text>
        <div style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block" }}>happy → happier</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block", marginTop: 15 }}>clever → cleverer</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block", marginTop: 15 }}>pretty → prettier</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block", marginTop: 15 }}>narrow → narrower</Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 250, right: 150, width: 600, opacity: card2Opacity, backgroundColor: COLORS.accent.blue, padding: 40, borderRadius: 20 }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 40, fontWeight: 700, color: COLORS.text.white, textAlign: "center" }}>
          用 more
        </Text>
        <div style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block" }}>modern → more modern</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block", marginTop: 15 }}>polite → more polite</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block", marginTop: 15 }}>famous → more famous</Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, textAlign: "center", display: "block", marginTop: 15 }}>careful → more careful</Text>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 250, left: 0, right: 0, textAlign: "center", opacity: tipOpacity }}>
        <div style={{ backgroundColor: COLORS.accent.red, padding: "20px 40px", borderRadius: 15, display: "inline-block" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, fontWeight: 600, color: COLORS.text.white }}>
            技巧：以 -y -er -le -ow 结尾 → 加 -er
          </Text>
        </div>
      </div>

      <Subtitle text="但是！双音节词比较特殊。有些用-er，有些用-more，没有绝对规则。我们来看几个常见词。记住，以-y -er -le -ow结尾的双音节词，通常加-er。其他双音节词，用-more更安全。" />
    </AbsoluteFill>
  );
};
