import {AbsoluteFill, useCurrentFrame, spring} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene11 = () => {
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
    <AbsoluteFill style={{background: '#FFD700'}}>
      <BackgroundGradient 
        start="#FFD700" 
        end="#FFA500"
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
          fontSize: '100px',
          marginBottom: '20px',
        }}>
          ⚡
        </div>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xxxl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.neutral.white,
            marginBottom: '20px',
          }}
        >
          记忆口诀
        </div>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.md,
            color: COLORS.neutral.white,
          }}
        >
          考试必备神器！
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene11}
        text="最后送你一个口诀，考试之前默念三遍"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
