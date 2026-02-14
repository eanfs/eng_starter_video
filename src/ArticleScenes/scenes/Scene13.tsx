import {AbsoluteFill, useCurrentFrame, spring} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene13 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <AbsoluteFill style={{background: COLORS.backgrounds.correctStart}}>
      <BackgroundGradient 
        start={COLORS.accent.green} 
        end={COLORS.accent.emerald}
        frame={effectiveFrame}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          opacity,
          textAlign: 'center',
        }}
      >
        <div style={{
          fontSize: '120px',
          marginBottom: '20px',
        }}>
          👑
        </div>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xxxl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.accent.emerald,
            marginBottom: '20px',
          }}
        >
          满分！
        </div>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.lg,
            color: COLORS.neutral.dark,
          }}
        >
          祝你考试顺利！
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene13}
        text="下次看到冠词，想想这个口诀，绝对不会再错！"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
