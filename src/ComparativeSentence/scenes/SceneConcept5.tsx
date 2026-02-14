import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneConcept5: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const personScale = interpolate(frame, [100, 800], [1, 2.5], { extrapolateLeft: "clamp" });
  const personOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const sentence1Opacity = interpolate(frame, [300, 400], [0, 1], { extrapolateLeft: "clamp" });
  const sentence2Opacity = interpolate(frame, [500, 600], [0, 1], { extrapolateLeft: "clamp" });
  const tipOpacity = interpolate(frame, [800, 900], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.orange[0] }}>
      <div style={{ position: "absolute", top: 50, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 56, fontWeight: 700, color: COLORS.text.primary }}>
          The more...  more... (越...越...)
        </Text>
      </div>

      <div style={{ position: "absolute", top: 250, left: 100, width: 400, height: 400, opacity: personOpacity }}>
        <div style={{ 
          width: 200 * personScale, 
          height: 200 * personScale, 
          borderRadius: 100 * personScale, 
          backgroundColor: COLORS.accent.orange, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          margin: "0 auto"
        }}>
          <span style={{ fontSize: 60 }}>🍔</span>
        </div>
        <div style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.primary, textAlign: "center", marginTop: 20 }}>
          越吃越胖
        </div>
      </div>

      <div style={{ position: "absolute", top: 280, right: 150, opacity: sentence1Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: "25px 35px", borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, textAlign: "center" }}>
            The more you eat,
          </Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.accent.orange, fontWeight: 700, textAlign: "center", marginTop: 15 }}>
            the fatter you will be
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 500, right: 150, opacity: sentence2Opacity }}>
        <div style={{ backgroundColor: COLORS.text.white, padding: "25px 35px", borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.text.primary, textAlign: "center" }}>
            The harder you work,
          </Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 36, color: COLORS.accent.green, fontWeight: 700, textAlign: "center", marginTop: 15 }}>
            the more successful you'll be
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 200, left: 0, right: 0, textAlign: "center", opacity: tipOpacity }}>
        <div style={{ backgroundColor: COLORS.accent.red, padding: "20px 40px", borderRadius: 15, display: "inline-block" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.white }}>
            前者是条件，后者是结果
          </Text>
        </div>
      </div>

      <Subtitle text="还有一个重要句型：The more...  the more...（越...越...）。结构是：The加比较级，The加比较级。越吃越胖：The more you eat，the fatter you will be。越努力越成功：The harder you work，the more successful you will be。前面的the more是条件，后面的the more是结果。" />
    </AbsoluteFill>
  );
};
