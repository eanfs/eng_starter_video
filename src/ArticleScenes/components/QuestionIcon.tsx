import {useCurrentFrame, interpolate} from 'remotion';
import {COLORS} from '../../constants';

interface QuestionIconProps {
  frame: number;
}

export const QuestionIcon = ({frame}: QuestionIconProps) => {
  const opacity = interpolate(frame, [0, 15], [0, 0.3], {
    extrapolateRight: 'clamp',
  });
  
  const scale = interpolate(frame, [0, 15], [0.8, 1], {
    extrapolateRight: 'clamp',
  });
  
  const rotation = frame * 0.02;
  
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '10%',
        right: '15%',
        opacity,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2.00001 12C2.00001 17.5228 6.47715 22 12 22Z"
        stroke={COLORS.warning.red}
        strokeWidth="2"
      />
      <path
        d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9213 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
        stroke={COLORS.warning.red}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H12.01"
        stroke={COLORS.warning.red}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
