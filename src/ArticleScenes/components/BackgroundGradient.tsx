import {useCurrentFrame, interpolate} from 'remotion';

interface BackgroundGradientProps {
  start: string;
  end: string;
  frame: number;
}

export const BackgroundGradient = ({start, end, frame}: BackgroundGradientProps) => {
  const opacity = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: 'clamp',
  });
  
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${start}, ${end})`,
        opacity,
      }}
    />
  );
};
