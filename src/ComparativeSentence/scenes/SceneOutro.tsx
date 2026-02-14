import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../constants";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";

const ActionButton: React.FC<{
  children: React.ReactNode;
  emoji: string;
  color: string;
  opacity: number;
}> = ({ children, emoji, color, opacity }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "20px 50px",
        borderRadius: 50,
        backgroundColor: color,
        margin: "0 10px",
        opacity,
      }}
    >
      <span style={{ fontSize: 36, marginRight: 10 }}>{emoji}</span>
      <span
        style={{
          fontFamily: FONTS.notoSansSC,
          fontSize: 36,
          color: COLORS.text.white,
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  );
};

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [30, 80], [0, 1], { extrapolateLeft: "clamp" });
  const cta1Opacity = interpolate(frame, [150, 200], [0, 1], { extrapolateLeft: "clamp" });
  const cta2Opacity = interpolate(frame, [250, 300], [0, 1], { extrapolateLeft: "clamp" });
  const cta3Opacity = interpolate(frame, [350, 400], [0, 1], { extrapolateLeft: "clamp" });
  const goodbyeOpacity = interpolate(frame, [450, 500], [0, 1], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.sceneBg.blue[0] }}>
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: logoOpacity,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: COLORS.accent.blue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.notoSansSC,
                fontSize: 60,
                color: COLORS.text.white,
                fontWeight: 700,
              }}
            >
              英
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: FONTS.notoSansSC,
                fontSize: 48,
                fontWeight: 700,
                color: COLORS.text.primary,
              }}
            >
              英语易错知识点
            </Text>
            <Text
              style={{
                fontFamily: FONTS.notoSansSC,
                fontSize: 28,
                color: COLORS.text.secondary,
                marginTop: 10,
              }}
            >
              小红书爆火的英语学习
            </Text>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 450,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <ActionButton opacity={cta1Opacity} emoji="👍" color={COLORS.accent.red}>
          点赞
        </ActionButton>
        <ActionButton opacity={cta2Opacity} emoji="⭐" color={COLORS.accent.orange}>
          收藏
        </ActionButton>
        <ActionButton opacity={cta3Opacity} emoji="➕" color={COLORS.semantic.correct}>
          关注
        </ActionButton>
      </div>

      <div
        style={{
          position: "absolute",
          top: 580,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: cta2Opacity,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.notoSansSC,
            fontSize: 32,
            color: COLORS.text.secondary,
          }}
        >
          每周更新英语易错知识点
        </Text>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: goodbyeOpacity,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.notoSansSC,
            fontSize: 48,
            fontWeight: 600,
            color: COLORS.text.primary,
          }}
        >
          下期再见！👋
        </Text>
      </div>

      <Subtitle text="同学们，比较级句型是英语考试的重点，一定要多练习！如果觉得有帮助，请点赞、收藏、关注我。下期我们继续讲解更多英语易错知识点！再见！" />
    </AbsoluteFill>
  );
};
