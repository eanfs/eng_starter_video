import {COLORS} from '../../constants';

interface CrossIconProps {
  progress: number;
}

export const CrossIcon = ({progress}: CrossIconProps) => {
  const x = interpolate(progress, [0, 1], [1920, 1700]);
  const scale = interpolate(progress, [0, 1], [0.5, 1.2]);
  
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '35%',
        right: `${1920 - x}px`,
        transform: `scale(${scale})`,
      }}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={COLORS.warning.red}
        strokeWidth="2"
      />
      <path
        d="M15 9L9 15"
        stroke={COLORS.warning.red}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9L15 15"
        stroke={COLORS.warning.red}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function interpolate(progress: number, range: number[], output: number[]): number {
  const t = Math.max(0, Math.min(1, (progress - range[0]) / (range[1] - range[0])));
  return output[0] + t * (output[1] - output[0]);
}
