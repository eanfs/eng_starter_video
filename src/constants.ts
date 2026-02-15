// 颜色定义 - Kurzgesagt风格配色
export const COLORS = {
  // 主色调 - 暖色系
  primary: {
    orange: '#FF6B35',
    yellow: '#F7C531',
    amber: '#FFB347',
  },
  
  // 辅助色 - 冷色系
  secondary: {
    blue: '#4A90E2',
    sky: '#7EC8E3',
    teal: '#5D9C98',
  },
  
  // 强调色 - 绿色系
  accent: {
    green: '#7ED957',
    emerald: '#10B981',
    lime: '#84CC16',
  },
  
  // 警告色 - 红色系
  warning: {
    red: '#EF4444',
    rose: '#FBE4D6',
    coral: '#FF6B6B',
  },
  
  // 中性色
  neutral: {
    white: '#FFFFFF',
    gray: '#6B7280',
    dark: '#1F2937',
    black: '#111827',
  },
  
  // 渐变背景色
  backgrounds: {
    warmStart: '#FFF5E6',
    warmEnd: '#FFE4B5',
    coolStart: '#E0F2FF',
    coolEnd: '#C7E9FF',
    errorStart: '#FEF2F2',
    errorEnd: '#FEE2E2',
    correctStart: '#F0FDF4',
    correctEnd: '#DCFCE7',
  },
};

// 字体定义
export const TYPOGRAPHY = {
  // 字体族
  fontFamily: {
    chinese: '"Microsoft YaHei", "PingFang SC", "Heiti SC", sans-serif',
    english: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
    mono: '"Courier New", monospace',
  },
  
  // 字号
  fontSize: {
    xxxl: '150px',  // 超大号 - 核心概念
    xxl: '120px',   // 特大号 - 标题
    xl: '100px',    // 大号 - 重要内容
    lg: '80px',     // 中大号 - 一般内容
    md: '60px',     // 中号 - 正文
    sm: '50px',     // 小号 - 辅助文字
    xs: '40px',     // 特小号 - UI文字
    subtitle: '50px', // 字幕
  },
  
  // 字重
  fontWeight: {
    bold: '700',
    semibold: '600',
    medium: '500',
    regular: '400',
  },
  
  // 行高
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

// 场景定义
export const SCENES = {
  // 转场动画时长（帧）
  TRANSITION_FRAMES: 15,
  
  // 帧率
  FPS: 30,
  
  // 场景时长（帧）- 基于实际音频长度
  durations: {
    scene1: 207,  // 错误引入1 - a hour (音频 6.912s)
    scene2: 123,  // 错误引入2 - an university (音频 4.128s)
    scene3: 113,  // 影响陈述 (音频 3.792s)
    scene4: 251,  // a vs an 规则 (音频 8.376s)
    scene5: 90,   // 重点强调 (音频 3.0s)
    scene6: 265,  // hour 举例 (音频 8.856s)
    scene7: 244,  // university 举例 (音频 8.16s)
    scene8: 256,  // the 用法引入 (音频 8.544s)
    scene9: 193,  // the 举例 - sun (音频 6.456s)
    scene10: 193, // the 举例 - classroom (音频 6.456s)
    scene11: 120, // 记忆口诀引入 (音频 4.008s)
    scene12: 272, // 记忆口诀内容 (音频 9.096s)
    scene13: 141, // 结束鼓励 (音频 4.704s)
  },
};

// 旁白文本
export const NARRATION = {
  scene1: `你有没有在考试中写过 a hour？这两个错误，每次都让大批学生失分。`,
  scene2: `或者把 a university 写成 an university？`,
  scene3: `这两个错误，每次都让大批学生失分。`,
  scene4: `其实规则非常简单。a 用在辅音音素开头的词前面，an 用在元音音素开头的词前面。`,
  scene5: `注意，是音素，不是字母！`,
  scene6: `比如 hour，虽然以 h 开头，但 h 不发音，实际读音是 au-er，是元音开头，所以是 an hour。`,
  scene7: `而 university 虽然以 u 开头，但发的是 ju 音，j 是辅音音素，所以是 a university。`,
  scene8: `那 the 什么时候用呢？记住三个核心场景：已确定的事物、唯一的事物、双方都知道的事物。`,
  scene9: `比如，我在说 the sun，因为太阳是唯一的，大家都知道是哪个太阳。`,
  scene10: `再说，我把手机丢在 the classroom，因为我们都知道是哪个教室，所以用 the。`,
  scene11: `最后送你一个口诀，考试之前默念三遍。`,
  scene12: `a 加辅音，an 加元音。特指某样用 the 定。唯一事物 the 相认。双方皆知 the 呼应。`,
  scene13: `下次看到冠词，想想这个口诀，绝对不会再错！`,
};

// 估计音频片段（将在Phase 4.5根据实际音频更新）
export const AUDIO_SEGMENTS = {
  scene1: [
    { startFrame: 0, endFrame: 60 },
    { startFrame: 60, endFrame: 150 },
  ],
  scene2: [
    { startFrame: 0, endFrame: 90 },
    { startFrame: 90, endFrame: 150 },
  ],
  scene3: [
    { startFrame: 0, endFrame: 60 },
    { startFrame: 60, endFrame: 90 },
  ],
  scene4: [
    { startFrame: 0, endFrame: 30 },
    { startFrame: 30, endFrame: 90 },
    { startFrame: 90, endFrame: 180 },
  ],
  scene5: [
    { startFrame: 0, endFrame: 60 },
  ],
  scene6: [
    { startFrame: 0, endFrame: 60 },
    { startFrame: 60, endFrame: 120 },
    { startFrame: 120, endFrame: 180 },
  ],
  scene7: [
    { startFrame: 0, endFrame: 60 },
    { startFrame: 60, endFrame: 120 },
    { startFrame: 120, endFrame: 180 },
  ],
  scene8: [
    { startFrame: 0, endFrame: 30 },
    { startFrame: 30, endFrame: 90 },
    { startFrame: 90, endFrame: 150 },
    { startFrame: 150, endFrame: 180 },
  ],
  scene9: [
    { startFrame: 0, endFrame: 30 },
    { startFrame: 30, endFrame: 90 },
    { startFrame: 90, endFrame: 120 },
    { startFrame: 120, endFrame: 150 },
  ],
  scene10: [
    { startFrame: 0, endFrame: 30 },
    { startFrame: 30, endFrame: 90 },
    { startFrame: 90, endFrame: 120 },
    { startFrame: 120, endFrame: 150 },
  ],
  scene11: [
    { startFrame: 0, endFrame: 60 },
  ],
  scene12: [
    { startFrame: 0, endFrame: 60 },
    { startFrame: 60, endFrame: 120 },
    { startFrame: 120, endFrame: 180 },
    { startFrame: 180, endFrame: 240 },
  ],
  scene13: [
    { startFrame: 0, endFrame: 40 },
    { startFrame: 40, endFrame: 80 },
    { startFrame: 80, endFrame: 120 },
  ],
};

// 动画配置
export const ANIMATION = {
  // 弹簧动画
  spring: {
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  
  // 缓动函数
  easing: {
    linear: (t: number) => t,
    easeIn: (t: number) => t * t,
    easeOut: (t: number) => t * (2 - t),
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  },
};
