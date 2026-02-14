import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene6 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
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
          h-our
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.chinese,
          fontSize: TYPOGRAPHY.fontSize.md,
          color: COLORS.neutral.dark,
          marginBottom: '20px',
        }}>
          h 不发音，实际读音是 [au-er]
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.english,
          fontSize: TYPOGRAPHY.fontSize.xxl,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.accent.green,
        }}>
          an hour ✓
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene6}
        text="h 不发音，实际读音是 au-er，是元音开头，所以是 an hour"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
