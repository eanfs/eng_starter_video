import {useCurrentFrame, interpolate} from 'remotion';
import {COLORS, TYPOGRAPHY} from '../../constants';

interface ErrorTextProps {
  text: string;
  errorIndex: number;
  textSlideIn: number;
  underlineProgress: number;
  frame: number;
}

export const ErrorText = ({text, errorIndex, textSlideIn, underlineProgress, frame}: ErrorTextProps) => {
  const chars = text.split('');
  
  const textOpacity = interpolate(textSlideIn, [0, 1], [0, 1]);
  const textY = interpolate(textSlideIn, [0, 1], [100, 0]);
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, calc(-50% + ${textY}px))`,
        opacity: textOpacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {chars.map((char, index) => (
        <div
          key={index}
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.english,
            fontSize: TYPOGRAPHY.fontSize.xxxl,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.warning.red,
            marginLeft: '2px',
            marginRight: '2px',
            position: 'relative',
          }}
        >
          {char}
          {index === errorIndex && (
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                right: 0,
                height: '6px',
                backgroundColor: COLORS.warning.red,
                width: `${underlineProgress * 100}%`,
                borderRadius: '3px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
