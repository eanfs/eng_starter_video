import {AbsoluteFill, Sequence, useCurrentFrame, spring, interpolate, staticFile, Audio} from 'remotion';
import {SCENES} from './constants';

// 转场动画帧数
const TRANSITION = SCENES.TRANSITION_FRAMES;

// 生成场景淡入淡出效果
const useSceneTransition = (frame: number, durationInFrames: number) => {
  // 淡入效果
  const fadeIn = interpolate(
    frame,
    [0, TRANSITION],
    [0, 1],
    {extrapolateRight: 'clamp'}
  );
  
  // 淡出效果
  const fadeOut = interpolate(
    frame,
    [durationInFrames - TRANSITION, durationInFrames],
    [1, 0],
    {extrapolateLeft: 'clamp'}
  );
  
  // 缩放效果
  const scale = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0.95, 1, 1, 0.95],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );
  
  return {
    opacity: Math.min(fadeIn, fadeOut),
    scale,
  };
};

// Scene 1: a hour 错误引入
const Scene1 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene1;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const underlineProgress = interpolate(frame, [30, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFF5E6",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity,
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "120px", color: "#EF4444", fontWeight: "bold",
        marginBottom: "20px"
      }}>a hour</div>
      {frame >= 30 && (
        <div style={{
          width: `${underlineProgress * 300}px`, height: "8px", backgroundColor: "#EF4444"
        }} />
      )}
      {frame >= 45 && (
        <div style={{fontSize: "100px", color: "#EF4444"}}>❌</div>
      )}
    </div>
  );
};

// Scene 2: an university 错误引入
const Scene2 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene2;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E0F2FF",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity,
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "100px", color: "#EF4444", fontWeight: "bold",
        marginBottom: "20px"
      }}>an university</div>
      {frame >= 45 && (
        <div style={{fontSize: "100px", color: "#EF4444"}}>❌</div>
      )}
    </div>
  );
};

// Scene 3: 失分强调
const Scene3 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene3;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FEF2F2",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity,
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "120px", color: "#EF4444", fontWeight: "bold",
        marginBottom: "30px"
      }}>失分！</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>这两个错误，每次都让大批学生失分</div>
    </div>
  );
};

// Scene 4: a vs an 规则
const Scene4 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene4;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFF5E6",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "40px",
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "100px", color: "#FF6B35", fontWeight: "bold"
      }}>a 辅音 an 元音</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>a 用在辅音音素开头的词前面</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>an 用在元音音素开头的词前面</div>
    </div>
  );
};

// Scene 5: 音素 vs 字母
const Scene5 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene5;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px",
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "120px", color: "#111827", fontWeight: "bold"
      }}>音素 ≠ 字母</div>
      <div style={{
        fontSize: "60px", color: "#EF4444"
      }}>看发音，别看拼写！</div>
    </div>
  );
};

// Scene 6: hour 举例
const Scene6 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene6;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#F0FDF4",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px",
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "120px", color: "#1F2937", fontWeight: "bold"
      }}>h-our</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>h 不发音，实际读音是 [au-er]</div>
      <div style={{
        fontSize: "80px", color: "#10B981", fontWeight: "bold"
      }}>an hour ✓</div>
    </div>
  );
};

// Scene 7: university 举例
const Scene7 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene7;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E0F2FF",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px",
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "120px", color: "#1F2937", fontWeight: "bold"
      }}>u-niversity</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>u 发 [ju] 音，j 是辅音音素</div>
      <div style={{
        fontSize: "80px", color: "#10B981", fontWeight: "bold"
      }}>a university ✓</div>
    </div>
  );
};

// Scene 8: the 用法
const Scene8 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene8;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E0F2FF",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px",
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "120px", color: "#4A90E2", fontWeight: "bold"
      }}>the</div>
      <div style={{
        fontSize: "50px", color: "#1F2937", display: "flex", flexDirection: "column", gap: "20px"
      }}>
        <div>✓ 已确定的事物</div>
        <div>✓ 唯一的事物</div>
        <div>✓ 双方都知道的事物</div>
      </div>
    </div>
  );
};

// Scene 9: the sun 举例
const Scene9 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene9;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#87CEEB",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px",
      transform: `scale(${scale})`
    }}>
      <div style={{fontSize: "150px"}}>☀️</div>
      <div style={{
        fontSize: "100px", color: "#4A90E2", fontWeight: "bold"
      }}>the sun</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>太阳是唯一的</div>
    </div>
  );
};

// Scene 10: the classroom 举例
const Scene10 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene10;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E8D5C4",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px",
      transform: `scale(${scale})`
    }}>
      <div style={{fontSize: "150px"}}>🏫</div>
      <div style={{
        fontSize: "100px", color: "#1F2937", fontWeight: "bold"
      }}>the classroom</div>
      <div style={{
        fontSize: "50px", color: "#1F2937"
      }}>双方都知道是哪个教室</div>
    </div>
  );
};

// Scene 11: 记忆口诀引入
const Scene11 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene11;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "20px",
      opacity,
      transform: `scale(${scale})`
    }}>
      <div style={{fontSize: "100px"}}>⚡️</div>
      <div style={{
        fontSize: "100px", color: "#FFFFFF", fontWeight: "bold"
      }}>记忆口诀</div>
      <div style={{
        fontSize: "50px", color: "#FFFFFF"
      }}>考试必备神器！</div>
    </div>
  );
};

// Scene 12: 记忆口诀内容
const Scene12 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene12;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "20px",
      transform: `scale(${scale})`
    }}>
      <div style={{
        fontSize: "50px", color: "#FFFFFF", fontWeight: "bold",
        display: "flex", flexDirection: "column", gap: "15px"
      }}>
        <div>1. a 加辅音，an 加元音</div>
        <div>2. 特指某样用the 定</div>
        <div>3. 唯一事物the 相认</div>
        <div>4. 双方皆知the 呼应</div>
      </div>
    </div>
  );
};

// Scene 13: 结束
const Scene13 = () => {
  const frame = useCurrentFrame();
  const duration = SCENES.durations.scene13;
  const {opacity: transitionOpacity, scale} = useSceneTransition(frame, duration);
  
  const textSlideIn = spring({
    frame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn) * transitionOpacity;
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#F0FDF4",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "20px",
      opacity,
      transform: `scale(${scale})`
    }}>
      <div style={{fontSize: "120px"}}>👑</div>
      <div style={{
        fontSize: "100px", color: "#10B981", fontWeight: "bold"
      }}>满分！</div>
      <div style={{
        fontSize: "60px", color: "#1F2937"
      }}>祝你考试顺利！</div>
    </div>
  );
};

// 场景配置数组，便于循环处理
const sceneConfigs = [
  { Component: Scene1, duration: SCENES.durations.scene1, audio: 'scene1.mp3', name: 'Scene1' },
  { Component: Scene2, duration: SCENES.durations.scene2, audio: 'scene2.mp3', name: 'Scene2' },
  { Component: Scene3, duration: SCENES.durations.scene3, audio: 'scene3.mp3', name: 'Scene3' },
  { Component: Scene4, duration: SCENES.durations.scene4, audio: 'scene4.mp3', name: 'Scene4' },
  { Component: Scene5, duration: SCENES.durations.scene5, audio: 'scene5.mp3', name: 'Scene5' },
  { Component: Scene6, duration: SCENES.durations.scene6, audio: 'scene6.mp3', name: 'Scene6' },
  { Component: Scene7, duration: SCENES.durations.scene7, audio: 'scene7.mp3', name: 'Scene7' },
  { Component: Scene8, duration: SCENES.durations.scene8, audio: 'scene8.mp3', name: 'Scene8' },
  { Component: Scene9, duration: SCENES.durations.scene9, audio: 'scene9.mp3', name: 'Scene9' },
  { Component: Scene10, duration: SCENES.durations.scene10, audio: 'scene10.mp3', name: 'Scene10' },
  { Component: Scene11, duration: SCENES.durations.scene11, audio: 'scene11.mp3', name: 'Scene11' },
  { Component: Scene12, duration: SCENES.durations.scene12, audio: 'scene12.mp3', name: 'Scene12' },
  { Component: Scene13, duration: SCENES.durations.scene13, audio: 'scene13.mp3', name: 'Scene13' },
];

// 主组件
export const FullVideo = () => {
  // 计算每个场景的开始帧
  const sceneStarts: number[] = [];
  let currentStart = 0;
  
  for (const config of sceneConfigs) {
    sceneStarts.push(currentStart);
    currentStart += config.duration;
  }
  
  return (
    <AbsoluteFill style={{background: "#FFF5E6"}}>
      {sceneConfigs.map((config, index) => {
        const { Component, duration, audio, name } = config;
        const from = sceneStarts[index];
        
        return (
          <Sequence 
            key={name}
            name={name} 
            durationInFrames={duration} 
            from={from}
          >
            <Component />
            <Audio src={staticFile(`audio/narration/${audio}`)} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};