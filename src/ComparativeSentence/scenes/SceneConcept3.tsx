import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneConcept3: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const error1Opacity = interpolate(frame, [100, 200], [0, 1], { extrapolateLeft: "clamp" });
  const error2Opacity = interpolate(frame, [400, 500], [0, 1], { extrapolateLeft: "clamp" });
  const error3Opacity = interpolate(frame, [700, 800], [0, 1], { extrapolateLeft: "clamp" });
  const error4Opacity = interpolate(frame, [1000, 1100], [0, 1], { extrapolateLeft: "clamp" });
  const error5Opacity = interpolate(frame, [1300, 1400], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.red[0] }}>
      <div style={{ position: "absolute", top: 50, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 52, fontWeight: 700, color: COLORS.text.primary }}>
          五个常见错误
        </Text>
      </div>

      <div style={{ position: "absolute", top: 180, left: 100, width: 1700, opacity: error1Opacity, backgroundColor: "rgba(239, 68, 68, 0.1)", padding: 20, borderRadius: 15, borderLeft: "5px solid #EF4444" }}>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.error, textDecoration: "line-through" }}>✗ more cheaper</Text>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.correct, marginTop: 10 }}>✓ much cheaper</Text>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.secondary, marginTop: 10 }}>cheap 是短音节，加 -er</Text>
      </div>

      <div style={{ position: "absolute", top: 350, left: 100, width: 1700, opacity: error2Opacity, backgroundColor: "rgba(239, 68, 68, 0.1)", padding: 20, borderRadius: 15, borderLeft: "5px solid #EF4444" }}>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.error, textDecoration: "line-through" }}>✗ very cheaper</Text>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.correct, marginTop: 10 }}>✓ much cheaper / far better</Text>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.secondary, marginTop: 10 }}>very 不能修饰比较级，用 much / far</Text>
      </div>

      <div style={{ position: "absolute", top: 520, left: 100, width: 1700, opacity: error3Opacity, backgroundColor: "rgba(239, 68, 68, 0.1)", padding: 20, borderRadius: 15, borderLeft: "5px solid #EF4444" }}>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.error, textDecoration: "line-through" }}>✗ quite cheaper</Text>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.correct, marginTop: 10 }}>✓ even cheaper</Text>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.secondary, marginTop: 10 }}>quite 只能修饰原级</Text>
      </div>

      <div style={{ position: "absolute", top: 690, left: 100, width: 1700, opacity: error4Opacity, backgroundColor: "rgba(239, 68, 68, 0.1)", padding: 20, borderRadius: 15, borderLeft: "5px solid #EF4444" }}>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.error, textDecoration: "line-through" }}>✗ more pretty</Text>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.correct, marginTop: 10 }}>✓ prettier</Text>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.secondary, marginTop: 10 }}>pretty 以 -y 结尾，加 -er</Text>
      </div>

      <div style={{ position: "absolute", top: 860, left: 100, width: 1700, opacity: error5Opacity, backgroundColor: "rgba(239, 68, 68, 0.1)", padding: 20, borderRadius: 15, borderLeft: "5px solid #EF4444" }}>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.error, textDecoration: "line-through" }}>✗ more delicious</Text>
        <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.semantic.correct, marginTop: 10 }}>✓ much more delicious</Text>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.secondary, marginTop: 10 }}>三音节词口语中也常用 more</Text>
      </div>

      <Subtitle text="现在，我们来看五个最容易错的句子！第一个错误：more-cheaper是错的！cheap 是短音节，应该加-er。正确：much cheaper。第二个错误：very cheaper是错的！用much或far。第三个错误：quite cheaper也是错的！用much或even。第四个错误：more pretty是错的！pretty加-er。第五个错误：more delicious也是错的！用much more delicious。" />
    </AbsoluteFill>
  );
};
