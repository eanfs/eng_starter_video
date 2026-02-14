import {AbsoluteFill, Sequence, useCurrentFrame, spring, interpolate} from 'remotion';
import {SCENES} from './constants';

// Scene 1: a hour 错误引入
const Scene1 = () => {
  const frame = useCurrentFrame();
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const underlineProgress = interpolate(effectiveFrame, [30, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFF5E6",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity
    }}>
      <div style={{
        fontSize: "120px", color: "#EF4444", fontWeight: "bold",
        marginBottom: "20px"
      }}>a hour</div>
       {effectiveFrame >= 30 && (
         <div style={{
           width: `${underlineProgress * 300}px`, height: "8px", backgroundColor: "#EF4444"
         }} />
       )}
     </div>
   );
};

// Scene 2: an university 错误引入
const Scene2 = () => {
  const frame = useCurrentFrame();
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFF5E6",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity
    }}>
      <div style={{
        fontSize: "120px", color: "#EF4444", fontWeight: "bold",
        marginBottom: "20px"
      }}>a hour</div>
      {effectiveFrame >= 30 && (
        <div style={{
          width: `${underlineProgress * 300}px`, height: "8px", backgroundColor: "#EF4444"
        }} />
"
    </div>
  );
};

// Scene 3: 失分强调
const Scene3 = () => {
  const frame = useCurrentFrame();
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FEF2F2",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFF5E6",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "40px"
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px"
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#F0FDF4",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px"
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E0F2FF",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px"
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E0F2FF",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px"
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
    </div>
  );
};

// Scene 9: the sun 举例
const Scene9 = () => {
  const frame = useCurrentFrame();
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#87CEEB",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px"
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#E8D5C4",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "30px"
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "20px",
      opacity
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
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity, gap: "20px"
    }}>
      <div style={{
        fontSize: "50px", color: "#FFFFFF", fontWeight: "bold",
        display: "flex", flexDirection: "column", gap: "15px"
      }}>
        <div>1. a 加辅音，an 加元音</div>
        <div>2. 特指某样用 the 定</div>
        <div>3. 唯一事物 the 相认</div>
        <div>4. 双方皆知 the 呼应</div>
      </div>
    </div>
  );
};

// Scene 13: 结束
const Scene13 = () => {
  const frame = useCurrentFrame();
  const effectiveFrame = Math.max(0, frame - SCENES.SCENE_PAD);
  
  const textSlideIn = spring({
    frame: effectiveFrame,
    fps: SCENES.FPS,
    config: {stiffness: 100, damping: 15, mass: 1},
  });
  
  const opacity = Math.min(1, textSlideIn);
  
  return (
    <div style={{
      width: "100%", height: "100%", 
      backgroundColor: "#FFD700",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "20px",
      opacity
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

// 主组件
export const FullVideo = () => {
  const scene1End = SCENES.durations.scene1 + SCENES.SCENE_PAD;
  const scene2End = scene1End + SCENES.durations.scene2 + SCENES.SCENE_PAD;
  const scene3End = scene2End + SCENES.durations.scene3 + SCENES.SCENE_PAD;
  const scene4End = scene3End + SCENES.durations.scene4 + SCENES.SCENE_PAD;
  const scene5End = scene4End + SCENES.durations.scene5 + SCENES.SCENE_PAD;
  const scene6End = scene5End + SCENES.durations.scene6 + SCENES.SCENE_PAD;
  const scene7End = scene6End + SCENES.durations.scene7 + SCENES.SCENE_PAD;
  const scene8End = scene7End + SCENES.durations.scene8 + SCENES.SCENE_PAD;
  const scene9End = scene8End + SCENES.durations.scene9 + SCENES.SCENE_PAD;
  const scene10End = scene9End + SCENES.durations.scene10 + SCENES.SCENE_PAD;
  const scene11End = scene10End + SCENES.durations.scene11 + SCENES.SCENE_PAD;
  const scene12End = scene11End + SCENES.durations.scene12 + SCENES.SCENE_PAD;
  
  return (
    <AbsoluteFill style={{background: "#FFF5E6"}}>
      <Sequence name="Scene1" durationInFrames={SCENES.durations.scene1 + SCENES.SCENE_PAD} from={0}>
        <Scene1 />
      </Sequence>
      
      <Sequence name="Scene2" durationInFrames={SCENES.durations.scene2 + SCENES.SCENE_PAD} from={scene1End}>
        <Scene2 />
      </Sequence>
      
      <Sequence name="Scene3" durationInFrames={SCENES.durations.scene3 + SCENES.SCENE_PAD} from={scene2End}>
        <Scene3 />
      </Sequence>
      
      <Sequence name="Scene4" durationInFrames={SCENES.durations.scene4 + SCENES.SCENE_PAD} from={scene3End}>
        <Scene4 />
      </Sequence>
      
      <Sequence name="Scene5" durationInFrames={SCENES.durations.scene5 + SCENES.SCENE_PAD} from={scene4End}>
        <Scene5 />
      </Sequence>
      
      <Sequence name="Scene6" durationInFrames={SCENES.durations.scene6 + SCENES.SCENE_PAD} from={scene5End}>
        <Scene6 />
      </Sequence>
      
      <Sequence name="Scene7" durationInFrames={SCENES.durations.scene7 + SCENES.SCENE_PAD} from={scene6End}>
        <Scene7 />
      </Sequence>
      
      <Sequence name="Scene8" durationInFrames={SCENES.durations.scene8 + SCENES.SCENE_PAD} from={scene7End}>
        <Scene8 />
      </Sequence>
      
      <Sequence name="Scene9" durationInFrames={SCENES.durations.scene9 + SCENES.SCENE_PAD} from={scene8End}>
        <Scene9 />
      </Sequence>
      
      <Sequence name="Scene10" durationInFrames={SCENES.durations.scene10 + SCENES.SCENE_PAD} from={scene9End}>
        <Scene10 />
      </Sequence>
      
      <Sequence name="Scene11" durationInFrames={SCENES.durations.scene11 + SCENES.SCENE_PAD} from={scene10End}>
        <Scene11 />
      </Sequence>
      
      <Sequence name="Scene12" durationInFrames={SCENES.durations.scene12 + SCENES.SCENE_PAD} from={scene11End}>
        <Scene12 />
      </Sequence>
      
      <Sequence name="Scene13" durationInFrames={SCENES.durations.scene13 + SCENES.SCENE_PAD} from={scene12End}>
        <Scene13 />
      </Sequence>
    </AbsoluteFill>
  );
};
