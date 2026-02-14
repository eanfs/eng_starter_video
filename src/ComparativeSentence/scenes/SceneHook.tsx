import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();

  const leftStudentOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const rightStudentOpacity = interpolate(frame, [50, 100], [0, 1], { extrapolateLeft: "clamp" });
  const questionOpacity = interpolate(frame, [100, 150], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.blue[0] }}>
      <div style={{ position: "absolute", top: 100, left: 0, right: 0, textAlign: "center" }}>
        <span style={{ fontFamily: FONTS.notoSansSC, fontSize: 64, fontWeight: 700, color: COLORS.text.primary }}>
          考试遇到比较级？你会做吗？
        </span>
      </div>

      <div style={{ position: "absolute", top: 300, left: 200, opacity: leftStudentOpacity }}>
        <div style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: COLORS.accent.orange, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 48 }}>😟</span>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, marginTop: 20, textAlign: "center" }}>考试时...</div>
      </div>

      <div style={{ position: "absolute", top: 300, right: 200, opacity: rightStudentOpacity }}>
        <div style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: COLORS.accent.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 48 }}>😄</span>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, marginTop: 20, textAlign: "center" }}>高分通过！</div>
      </div>

      <div style={{ position: "absolute", top: 600, left: 0, right: 0, textAlign: "center", opacity: questionOpacity }}>
        <div style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", padding: "30px 50px", borderRadius: 20, display: "inline-block" }}>
          <span style={{ fontFamily: FONTS.inter, fontSize: 48, color: COLORS.accent.blue, fontWeight: 600 }}>
            Tom works harder than Jason.
          </span>
        </div>
      </div>

      <Subtitle text="同学们好！考试时遇到比较级句型，你是否经常出错？今天，我们就来彻底搞定比较级句型！" />
    </AbsoluteFill>
  );
};
