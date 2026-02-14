import {AbsoluteFill, useCurrentFrame, spring} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene3 = () => {
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
    <AbsoluteFill style={{background: COLORS.backgrounds.errorStart}}>
      <BackgroundGradient 
        start={COLORS.warning.red} 
        end={COLORS.warning.rose}
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
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xxxl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.warning.red,
            marginBottom: '20px',
          }}
        >
          失分！
        </div>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.md,
            color: COLORS.neutral.dark,
          }}
        >
          这两个错误，每次都让大批学生失分
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene3}
        text="这两个错误，每次都让大批学生失分"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
