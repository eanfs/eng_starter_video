import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene10 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  return (
    <AbsoluteFill style={{background: '#E8D5C4'}}>
      <BackgroundGradient 
        start="#E8D5C4" 
        end="#D4B896"
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
          fontSize: '150px',
          marginBottom: '40px',
        }}>
          🏫
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.english,
          fontSize: TYPOGRAPHY.fontSize.xxl,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.neutral.dark,
          marginBottom: '20px',
        }}>
          the classroom
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.chinese,
          fontSize: TYPOGRAPHY.fontSize.md,
          color: COLORS.neutral.dark,
        }}>
          双方都知道是哪个教室
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene10}
        text="the classroom - 双方都知道是哪个教室"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
