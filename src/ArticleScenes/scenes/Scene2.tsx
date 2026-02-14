import {AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring} from 'remotion';
import {COLORS, TYPOGRAPHY, SCENES, AUDIO_SEGMENTS} from '../../constants';
import {BackgroundGradient} from '../components/BackgroundGradient';
import {SubtitleSequence} from '../components/SubtitleSequence';
import {ErrorText} from '../components/ErrorText';
import {CrossIcon} from '../components/CrossIcon';

export const Scene2 = () => {
  const frame = useCurrentFrame();
  const {SCENE_PAD} = SCENES;
  const effectiveFrame = Math.max(0, frame - SCENE_PAD);
  
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
    <AbsoluteFill style={{background: COLORS.backgrounds.coolStart}}>
      <BackgroundGradient 
        start={COLORS.secondary.blue} 
        end={COLORS.secondary.sky}
        frame={effectiveFrame}
      />
      
      <Sequence>
        <ErrorText 
          text="an university"
          errorIndex={2}
          textSlideIn={textSlideIn}
          underlineProgress={underlineProgress}
          frame={effectiveFrame}
        />
      </Sequence>
      
      {crossSlideIn > 0 && (
        <CrossIcon progress={crossSlideIn} />
      )}
      
      <SubtitleSequence 
        segments={AUDIO_SEGMENTS.scene2}
        text="或者把 a university 写成 an university？这个也错啦！"
        frame={effectiveFrame}
      />
    </AbsoluteFill>
  );
};
