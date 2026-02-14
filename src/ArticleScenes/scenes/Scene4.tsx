import {AbsoluteFill, useCurrentFrame, spring, interpolate} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene4 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  return (
    <AbsoluteFill style={{background: COLORS.backgrounds.warmStart}}>
      <BackgroundGradient 
        start={COLORS.primary.orange} 
        end={COLORS.primary.yellow}
        frame={effectiveFrame}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.english,
          fontSize: TYPOGRAPHY.fontSize.xxxl,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.primary.orange,
        }}>
          a 辅音 an 元音
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.chinese,
          fontSize: TYPOGRAPHY.fontSize.md,
          color: COLORS.neutral.dark,
        }}>
          a 用在辅音音素开头的词前面
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.chinese,
          fontSize: TYPOGRAPHY.fontSize.md,
          color: COLORS.neutral.dark,
        }}>
          an 用在元音音素开头的词前面
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene4}
        text="a 用在辅音音素开头的词前面，an 用在元音音素开头的词前面"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
