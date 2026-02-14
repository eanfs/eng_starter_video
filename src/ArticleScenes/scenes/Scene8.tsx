import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene8 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  return (
    <AbsoluteFill style={{background: COLORS.backgrounds.coolStart}}>
      <BackgroundGradient 
        start={COLORS.secondary.blue} 
        end={COLORS.secondary.sky}
        frame={effectiveFrame}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.english,
          fontSize: TYPOGRAPHY.fontSize.xxxl,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.secondary.blue,
          marginBottom: '50px',
        }}>
          the
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
        }}>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.lg,
            color: COLORS.neutral.dark,
          }}>
            ✓ 已确定的事物
          </div>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.lg,
            color: COLORS.neutral.dark,
          }}>
            ✓ 唯一的事物
          </div>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.lg,
            color: COLORS.neutral.dark,
          }}>
            ✓ 双方都知道的事物
          </div>
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene8}
        text="the 用法：已确定的事物、唯一的事物、双方都知道的事物"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
