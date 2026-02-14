import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneSummary: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const point1Opacity = interpolate(frame, [80, 130], [0, 1], { extrapolateLeft: "clamp" });
  const point2Opacity = interpolate(frame, [200, 250], [0, 1], { extrapolateLeft: "clamp" });
  const point3Opacity = interpolate(frame, [320, 370], [0, 1], { extrapolateLeft: "clamp" });
  const point4Opacity = interpolate(frame, [440, 490], [0, 1], { extrapolateLeft: "clamp" });
  const point5Opacity = interpolate(frame, [560, 610], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.default[0] }}>
      <div style={{ position: "absolute", top: 50, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 56, fontWeight: 700, color: COLORS.text.primary }}>
          五个关键要点
        </Text>
      </div>

      <div style={{ position: "absolute", top: 200, left: 200, opacity: point1Opacity }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.accent.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, fontWeight: 700 }}>1</Text>
          </div>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary }}>
            短音节加 <Text style={{ color: COLORS.accent.blue, fontWeight: 700 }}>-er</Text>，多音节加 <Text style={{ color: COLORS.accent.blue, fontWeight: 700 }}>more</Text>
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 320, left: 200, opacity: point2Opacity }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.accent.orange, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, fontWeight: 700 }}>2</Text>
          </div>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary }}>
            双音节看结尾，<Text style={{ color: COLORS.accent.orange, fontWeight: 700 }}>-y -er -le -ow</Text> 用 <Text style={{ color: COLORS.accent.orange, fontWeight: 700 }}>-er</Text>
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 440, left: 200, opacity: point3Opacity }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.accent.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, fontWeight: 700 }}>3</Text>
          </div>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary }}>
            修饰比较级用 <Text style={{ color: COLORS.accent.green, fontWeight: 700 }}>much / far / even</Text>，不用 <Text style={{ color: COLORS.semantic.error, fontWeight: 700 }}>very / quite</Text>
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 560, left: 200, opacity: point4Opacity }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.accent.purple, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, fontWeight: 700 }}>4</Text>
          </div>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary }}>
            "越来越" 用 <Text style={{ color: COLORS.accent.purple, fontWeight: 700 }}>more and more + 原级</Text>
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 680, left: 200, opacity: point5Opacity }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.accent.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: FONTS.inter, fontSize: 32, color: COLORS.text.white, fontWeight: 700 }}>5</Text>
          </div>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary }}>
            "不如" 用 <Text style={{ color: COLORS.accent.red, fontWeight: 700 }}>less...than</Text> 或 <Text style={{ color: COLORS.accent.red, fontWeight: 700 }}>not so/as...as</Text>
          </Text>
        </div>
      </div>

      <Subtitle text="好了，我们来总结一下今天学的五个关键点！第一，短音节形容词加-er，多音节加-more。第二，双音节词要看结尾，-y -er -le -ow用-er。第三，修饰比较级用much far even，不能用very quite。第四，表示越来越用-more and more加原级。第五，表示不如用less-than或not so-as-as。" />
    </AbsoluteFill>
  );
};
