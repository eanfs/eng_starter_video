import {useCurrentFrame, Audio} from 'remotion';

interface AudioSegment {
  startFrame: number;
  endFrame: number;
}

interface AudioLayerProps {
  audioFile: string;
  segments: AudioSegment[];
  currentFrame: number;
}

export const AudioLayer = ({audioFile, segments, currentFrame}: AudioLayerProps) => {
  // 检查当前帧是否在任何音频片段内
  const activeSegment = segments.find(
    seg => currentFrame >= seg.startFrame && currentFrame < seg.endFrame
  );
  
  if (!activeSegment) {
    return null;
  }
  
  return <Audio src={audioFile} />;
};
