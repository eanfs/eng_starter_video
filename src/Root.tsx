import {Composition} from 'remotion';
import {FullVideo} from './FullVideo';
import {SCENES} from './constants';

export const Root = () => {
  const totalFrames = Object.values(SCENES.durations).reduce((sum, duration) => {
    return sum + duration;
  }, 0);
  
  return (
    <>
      <Composition
        id="FullVideo"
        component={FullVideo}
        durationInFrames={totalFrames}
        fps={SCENES.FPS}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
