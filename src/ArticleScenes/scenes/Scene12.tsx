import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';

export const Scene12 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
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
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.neutral.white,
          }}>
            1. a 加辅音，an 加元音
          </div>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.neutral.white,
          }}>
            2. 特指某样用 the 定
          </div>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.neutral.white,
          }}>
            3. 唯一事物 the 相认
          </div>
          <div style={{
            fontFamily: TYPOGRAPHY.fontFamily.chinese,
            fontSize: TYPOGRAPHY.fontSize.xl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.neutral.white,
          }}>
            4. 双方皆知 the 呼应
          </div>
        </div>
      </div>
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene12}
        text="a 加辅音，an 加元音。特指某样用 the 定。唯一事物 the 相认。双方皆知 the 呼应"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
