import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {COLORS, TYPOGRAPHY} from '../../constants';

interface SubtitleSegment {
  startFrame: number;
  endFrame: number;
}

interface SubtitleSequenceProps {
  segments: SubtitleSegment[];
  text: string;
  frame: number;
}

export const SubtitleSequence = ({segments, text, frame}: SubtitleSequenceProps) => {
  // 检查当前帧是否在任何有效片段内
  const activeSegment = segments.find(
    seg => frame >= seg.startFrame && frame < seg.endFrame
  );
  
  // 如果没有激活的片段，返回空
  if (!activeSegment) {
    return null;
  }
  
  // 计算淡入淡出
  const fadeIn = interpolate(frame, [activeSegment.startFrame, activeSegment.startFrame + 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const fadeOut = interpolate(frame, [activeSegment.endFrame - 10, activeSegment.endFrame], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const opacity = fadeIn * fadeOut;
  
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        left: '50%',
        transform: `translateX(-50%)`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: COLORS.neutral.white,
        fontFamily: TYPOGRAPHY.fontFamily.chinese,
        fontSize: TYPOGRAPHY.fontSize.subtitle,
        fontWeight: TYPOGRAPHY.fontWeight.semibold,
        padding: '20px 40px',
        borderRadius: '10px',
        opacity,
        textAlign: 'center',
        maxWidth: '80%',
      }}
    >
      {text}
    </div>
  );
};
