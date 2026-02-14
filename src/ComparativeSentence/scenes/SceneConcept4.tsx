import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

export const SceneConcept4: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const thermometerOpacity = interpolate(frame, [100, 200], [0, 1], { extrapolateLeft: "clamp" });
  const mercuryHeight = interpolate(frame, [100, 800], [0, 300], { extrapolateLeft: "clamp" });
  const sentence1Opacity = interpolate(frame, [400, 500], [0, 1], { extrapolateLeft: "clamp" });
  const sentence2Opacity = interpolate(frame, [600, 700], [0, 1], { extrapolateLeft: "clamp" });
  const tipOpacity = interpolate(frame, [800, 900], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.blue[0] }}>
      <div style={{ position: "absolute", top: 50, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 56, fontWeight: 700, color: COLORS.text.primary }}>
          more and more (越来越...)
        </Text>
      </div>

      <div style={{ position: "absolute", top: 200, left: 100, width: 500, height: 500, opacity: thermometerOpacity }}>
        <div style={{ width: 60, height: 400, backgroundColor: "#E2E8F0", borderRadius: 30, position: "relative", margin: "0 auto" }}>
          <div style={{ 
            width: 60, 
            height: mercuryHeight, 
            backgroundColor: COLORS.accent.blue, 
            borderRadius: 30, 
            position: "absolute", 
            bottom: 0 
          }} />
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 28, color: COLORS.text.secondary }}>温度 →</Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 300, left: 700, opacity: sentence1Opacity }}>
        <div style={{ backgroundColor: COLORS.sceneBg.green[1], padding: "30px 40px", borderRadius: 20 }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary, textAlign: "center" }}>
            The weather is getting
          </Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 48, color: COLORS.accent.blue, fontWeight: 700, textAlign: "center", marginTop: 20 }}>
            colder and colder
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", top: 500, left: 700, opacity: sentence2Opacity }}>
        <div style={{ backgroundColor: COLORS.sceneBg.purple[1], padding: "30px 40px", borderRadius: 20 }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 36, color: COLORS.text.primary, textAlign: "center" }}>
            The girl is becoming
          </Text>
          <Text style={{ fontFamily: FONTS.inter, fontSize: 48, color: COLORS.accent.purple, fontWeight: 700, textAlign: "center", marginTop: 20 }}>
            more and more beautiful
          </Text>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 200, left: 0, right: 0, textAlign: "center", opacity: tipOpacity }}>
        <div style={{ backgroundColor: COLORS.accent.orange, padding: "20px 40px", borderRadius: 15, display: "inline-block" }}>
          <Text style={{ fontFamily: FONTS.notoSansSC, fontSize: 32, color: COLORS.text.white }}>
            无论原级是什么，统一用 more and more + 原级！
          </Text>
        </div>
      </div>

      <Subtitle text="接下来，我们看一个重要结构：more and more（越来越...）。注意：这里不用加-er，直接用原级。天气越来越冷：The weather is getting colder and colder。女孩越来越美：The girl is becoming more and more beautiful。无论原级是加-er还是-more，变成越来越时，统一用-more and more加原级！" />
    </AbsoluteFill>
  );
};
