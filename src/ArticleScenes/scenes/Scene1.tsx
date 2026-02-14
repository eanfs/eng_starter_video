import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';
import {ErrorText} from '../components/ErrorText';
import {QuestionIcon} from '../components/QuestionIcon';
import {CrossIcon} from '../components/CrossIcon';

export const Scene1 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
  // 动画关键帧
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const underlineProgress = interpolate(effectiveFrame, [30, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const crossSlideIn = spring({
    frame: effectiveFrame - 45,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15.5, mass: 1},
  });
  
  return (
    <AbsoluteFill style={{background: COLORS.backgrounds.warmStart}}>
      <BackgroundGradient 
        start={COLORS.primary.orange} 
        end={COLORS.primary.yellow}
        frame={effectiveFrame}
      />
      
      <QuestionIcon frame={effectiveFrame} />
      
      <Sequence>
        <ErrorText 
          text="a hour"
          errorIndex={4}
          textSlideIn={textSlideIn}
          underlineProgress={underlineProgress}
          frame={effectiveFrame}
        />
      </Sequence>
      
      {crossSlideIn > 0 && (
        <CrossIcon progress={crossSlideIn} />
      )}
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene1}
        text="你有没有在考试中写过 a hour？这可是大错特错哦~"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
