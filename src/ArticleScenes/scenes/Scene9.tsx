import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene9 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  return (
    <AbsoluteFill style={{background: '#87CEEB'}}>
      <BackgroundGradient 
        start="#87CEEB" 
        end="#ADD8E6"
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
          fontSize: '200px',
          marginBottom: '40px',
        }}>
          ☀️
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.english,
          fontSize: TYPOGRAPHY.fontSize.xxl,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.secondary.blue,
          marginBottom: '20px',
        }}>
          the sun
        </div>
        <div style={{
          fontFamily: TYPOGRAPHY.fontFamily.chinese,
          fontSize: TYPOGRAPHY.fontSize.md,
          color: COLORS.neutral.dark,
        }}>
          太阳是唯一的
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene9}
        text="the sun - 太阳是唯一的"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
