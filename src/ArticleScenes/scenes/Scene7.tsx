import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene7 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  return (
    <AbsoluteFill style={{background: COLORS.secondary.sky}}>
      <BackgroundGradient 
        start={COLORS.secondary.sky} 
        end={COLORS.secondary.teal}
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
          color: COLORS.neutral.dark,
          marginBottom: '40px',
        }}>
          u-niversity
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.chinese,
          fontSize: TYPOGRAPHY.fontSize.md,
          color: COLORS.neutral.dark,
          marginBottom: '20px',
        }}>
          u 发 [ju] 音，j 是辅音音素
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.english,
          fontSize: TYPOGRAPHY.fontSize.xxl,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.accent.green,
        }}>
          a university ✓
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene7}
        text="u 发 ju 音，j 是辅音音素，所以是 a university"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
