import { loadFont } from "@remotion/google-fonts/NotoSansSC";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: notoSansSC } = loadFont();
const { fontFamily: inter } = loadInter();

export const FONTS = { notoSansSC, inter };

export const COLORS = {
  background: {
    light: "#F8FAFC",
    medium: "#E2E8F0",
    dark: "#CBD5E1",
  },
  accent: {
    blue: "#3B82F6",
    orange: "#F59E0B",
    green: "#10B981",
    purple: "#8B5CF6",
    red: "#EF4444",
  },
  semantic: {
    correct: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
  },
  text: {
    primary: "#1E293B",
    secondary: "#64748B",
    white: "#FFFFFF",
  },
  sceneBg: {
    default: ["#F8FAFC", "#E2E8F0"],
    blue: ["#EFF6FF", "#DBEAFE"],
    green: ["#F0FDF4", "#DCFCE7"],
    orange: ["#FFFBEB", "#FEF3C7"],
    purple: ["#FAF5FF", "#F3E8FF"],
    red: ["#FEF2F2", "#FEE2E2"],
  },
};

export const SCENES = {
  hook: { start: 0, duration: 300 },
  intro: { start: 300, duration: 450 },
  concept1: { start: 750, duration: 1800 },
  concept2: { start: 2550, duration: 1350 },
  concept3: { start: 3900, duration: 2700 },
  concept4: { start: 6600, duration: 1350 },
  concept5: { start: 7950, duration: 1350 },
  concept6: { start: 9300, duration: 1800 },
  practice: { start: 11100, duration: 3600 },
  summary: { start: 14700, duration: 900 },
  outro: { start: 15600, duration: 600 },
} as const;

export const TRANSITION_DURATION = 20;
export const SCENE_PAD = 15;
export const TOTAL_FRAMES = 16200;

export const NARRATION = {
  hook: "同学们好！考试时遇到比较级句型，你是否经常出错？今天，我们就来彻底搞定比较级句型！",
  intro: "本期内容，我们将学习比较级的三种构成方式，五个常见错误，以及六个必考知识点。学完这节课，考试中的比较级题，你再也不会丢分了！",
  concept1: "首先，比较级有两种构成方式。第一种，加-er。适用于短音节的形容词。比如：big bigger，fast faster，hard harder。两个音节以下，一般都加-er。第二种，加-more。适用于多音节的形容词。比如：beautiful more beautiful，expensive more expensive，difficult more difficult。",
  concept2: "但是！双音节词比较特殊。有些用-er，有些用-more，没有绝对规则。我们来看几个常见词：happy happier，clever cleverer。但是：modern more modern，polite more polite。记住，以-y -er -le -ow结尾的双音节词，通常加-er。其他双音节词，用-more更安全。",
  concept3: "现在，我们来看五个最容易错的句子！第一个错误：很多人会说-more-cheaper，这是错的！cheap是短音节，应该加-er：cheap cheaper cheapest。正确说法是：much cheaper。第二个错误：很多人说-more-delicious，其实delicious虽然是三音节，但口语中也常说-more-delicious。两种都可以！但更推荐：much more delicious。第三个错误：very cheaper是错的！副词very不能修饰比较级，要用much或far来加强语气。正确说法：much cheaper，far better。第四个错误：quite cheaper也是错的！quite只能修饰原级：quite good，quite bad。修饰比较级要用much或even：even cheaper。第五个错误：很多人忘记双音节词的规则。比如pretty，要说prettier，不是-more-pretty。",
  concept4: "接下来，我们看一个重要结构：more and more（越来越...）。注意：这里不用加-er，直接用原级。天气越来越冷：The weather is getting colder and colder。女孩越来越美：The girl is becoming more and more beautiful。无论原级是加-er还是-more，变成越来越时，统一用-more and more加原级！",
  concept5: "还有一个重要句型：The more... the more...（越...越...）。结构是：The加比较级，The加比较级。越吃越胖：The more you eat，the fatter you will be。越努力越成功：The harder you work，the more successful you will be。前面的the more是条件，后面的the more是结果。",
  concept6: "最后，我们看三个表示不如的句型。第一种：less-than（不如...）This computer is less expensive than that one。这台电脑没有那台贵。第二种：not so...as或not as...as（不如...）She is not so tall as her sister。她不如她姐姐高。This film is not as interesting as that one。这部电影不如那部有趣。not so...as中间只能加原级，不能加比较级！",
  practice: "好了，现在我们来做几道真题练习！第一题：Which does Jimmy like Chinese or Art？题目是比较两个科目，用better：Which does Jimmy like better Chinese or Art？正确答案是C better。第二题：My hair is longer than。应该填什么？注意，比较的对象要一致！应该说My hair is longer than my sister's。正确答案是C my brother's。因为比较的是我的头发和我哥哥的头发。第三题：The pen is than that one。cheap是短音节，用much cheaper！正确答案是C much cheaper。第四题：The dumplings are than the noodles。delicious是多音节，用much more delicious！正确答案是D much more delicious。第五题：The Yellow River isn't so as the Changjiang River。not so...as中间用原级，所以是A long。第六题：The earth is getting。表示越来越，用warmer and warmer！正确答案是C warmer and warmer。",
  summary: "好了，我们来总结一下今天学的五个关键点！第一，短音节形容词加-er，多音节加-more。第二，双音节词要看结尾，-y -er -le -ow用-er。第三，修饰比较级用much far even，不能用very quite。第四，表示越来越用-more and more加原级。第五，表示不如用less-than或not so-as-as。",
  outro: "同学们，比较级句型是英语考试的重点，一定要多练习！如果觉得有帮助，请点赞、收藏、关注我，下期我们继续讲解更多英语易错知识点！再见！",
} as const;

export const AUDIO_SEGMENTS = {
  hook: [
    { text: "同学们好！", startFrame: 15, endFrame: 40 },
    { text: "考试时遇到比较级句型，你是否经常出错？", startFrame: 45, endFrame: 90 },
    { text: "今天，我们就来彻底搞定比较级句型！", startFrame: 95, endFrame: 140 },
  ],
  intro: [
    { text: "本期内容，我们将学习比较级的三种构成方式，五个常见错误，以及六个必考知识点。", startFrame: 15, endFrame: 80 },
    { text: "学完这节课，考试中的比较级题，你再也不会丢分了！", startFrame: 85, endFrame: 130 },
  ],
  concept1: [
    { text: "首先，比较级有两种构成方式。", startFrame: 15, endFrame: 40 },
    { text: "第一种，加-er。适用于短音节的形容词。", startFrame: 45, endFrame: 80 },
    { text: "比如：big bigger，fast faster，hard harder。", startFrame: 85, endFrame: 130 },
    { text: "两个音节以下，一般都加-er。", startFrame: 135, endFrame: 165 },
    { text: "第二种，加-more。适用于多音节的形容词。", startFrame: 170, endFrame: 210 },
    { text: "比如：beautiful more beautiful，expensive more expensive，difficult more difficult。", startFrame: 215, endFrame: 280 },
  ],
  concept2: [
    { text: "但是！双音节词比较特殊。", startFrame: 15, endFrame: 35 },
    { text: "有些用-er，有些用-more，没有绝对规则。", startFrame: 40, endFrame: 75 },
    { text: "我们来看几个常见词。", startFrame: 80, endFrame: 100 },
    { text: "happy happier，clever cleverer。", startFrame: 105, endFrame: 135 },
    { text: "但是：modern more modern，polite more polite。", startFrame: 140, endFrame: 180 },
    { text: "记住，以-y -er -le -ow结尾的双音节词，通常加-er。其他双音节词，用-more更安全。", startFrame: 185, endFrame: 240 },
  ],
  concept3: [
    { text: "现在，我们来看五个最容易错的句子！", startFrame: 15, endFrame: 40 },
    { text: "第一个错误：很多人会说-more-cheaper，这是错的！", startFrame: 45, endFrame: 75 },
    { text: "cheap是短音节，应该加-er：cheap cheaper cheapest。", startFrame: 80, endFrame: 120 },
    { text: "正确说法是：much cheaper。", startFrame: 125, endFrame: 150 },
    { text: "第二个错误：很多人说-more-delicious。", startFrame: 155, endFrame: 180 },
    { text: "其实delicious虽然是三音节，但口语中也常说-more-delicious。", startFrame: 185, endFrame: 230 },
    { text: "两种都可以！但更推荐：much more delicious。", startFrame: 235, endFrame: 270 },
    { text: "第三个错误：very cheaper是错的！", startFrame: 275, endFrame: 300 },
    { text: "副词very不能修饰比较级，要用much或far来加强语气。", startFrame: 305, endFrame: 350 },
    { text: "正确说法：much cheaper，far better。", startFrame: 355, endFrame: 390 },
    { text: "第四个错误：quite cheaper也是错的！", startFrame: 395, endFrame: 425 },
    { text: "quite只能修饰原级：quite good，quite bad。", startFrame: 430, endFrame: 475 },
    { text: "修饰比较级要用much或even：even cheaper。", startFrame: 480, endFrame: 520 },
    { text: "第五个错误：很多人忘记双音节词的规则。", startFrame: 525, endFrame: 560 },
    { text: "比如pretty，要说prettier，不是-more-pretty。", startFrame: 565, endFrame: 610 },
  ],
  concept4: [
    { text: "接下来，我们看一个重要结构：more and more（越来越...）。", startFrame: 15, endFrame: 55 },
    { text: "注意：这里不用加-er，直接用原级。", startFrame: 60, endFrame: 90 },
    { text: "天气越来越冷：The weather is getting colder and colder。", startFrame: 95, endFrame: 145 },
    { text: "女孩越来越美：The girl is becoming more and more beautiful。", startFrame: 150, endFrame: 205 },
    { text: "无论原级是加-er还是-more，变成越来越时，统一用-more and more加原级！", startFrame: 210, endFrame: 270 },
  ],
  concept5: [
    { text: "还有一个重要句型：The more... the more...（越...越...）。", startFrame: 15, endFrame: 55 },
    { text: "结构是：The加比较级，The加比较级。", startFrame: 60, endFrame: 95 },
    { text: "越吃越胖：The more you eat，the fatter you will be。", startFrame: 100, endFrame: 150 },
    { text: "越努力越成功：The harder you work，the more successful you will be。", startFrame: 155, endFrame: 215 },
    { text: "前面的the more是条件，后面的the more是结果。", startFrame: 220, endFrame: 265 },
  ],
  concept6: [
    { text: "最后，我们看三个表示不如的句型。", startFrame: 15, endFrame: 40 },
    { text: "第一种：less-than（不如...）This computer is less expensive than that one。", startFrame: 45, endFrame: 100 },
    { text: "这台电脑没有那台贵。", startFrame: 105, endFrame: 130 },
    { text: "第二种：not so...as或not as...as（不如...）", startFrame: 135, endFrame: 175 },
    { text: "She is not so tall as her sister。她不如她姐姐高。", startFrame: 180, endFrame: 230 },
    { text: "This film is not as interesting as that one。这部电影不如那部有趣。", startFrame: 235, endFrame: 290 },
    { text: "not so...as中间只能加原级，不能加比较级！", startFrame: 295, endFrame: 340 },
  ],
  practice: [
    { text: "好了，现在我们来做几道真题练习！", startFrame: 15, endFrame: 40 },
    { text: "第一题。", startFrame: 45, endFrame: 55 },
    { text: "Which does Jimmy like Chinese or Art？题目是比较两个科目，用better。", startFrame: 60, endFrame: 110 },
    { text: "正确答案是C better。", startFrame: 115, endFrame: 140 },
    { text: "第二题。", startFrame: 145, endFrame: 155 },
    { text: "My hair is longer than。应该填什么？注意，比较的对象要一致！", startFrame: 160, endFrame: 210 },
    { text: "正确答案是C my brother's。", startFrame: 215, endFrame: 245 },
    { text: "第三题。", startFrame: 250, endFrame: 260 },
    { text: "The pen is than that one。cheap是短音节，用much cheaper！", startFrame: 265, endFrame: 320 },
    { text: "正确答案是C much cheaper。", startFrame: 325, endFrame: 360 },
    { text: "第四题。", startFrame: 365, endFrame: 375 },
    { text: "The dumplings are than the noodles。delicious是多音节，用much more delicious！", startFrame: 380, endFrame: 450 },
    { text: "正确答案是D much more delicious。", startFrame: 455, endFrame: 495 },
    { text: "第五题。", startFrame: 500, endFrame: 510 },
    { text: "The Yellow River isn't so as the Changjiang River。not so...as中间用原级。", startFrame: 515, endFrame: 580 },
    { text: "正确答案是A long。", startFrame: 585, endFrame: 615 },
    { text: "第六题。", startFrame: 620, endFrame: 630 },
    { text: "The earth is getting。表示越来越，用warmer and warmer！", startFrame: 635, endFrame: 695 },
    { text: "正确答案是C warmer and warmer。", startFrame: 700, endFrame: 745 },
  ],
  summary: [
    { text: "好了，我们来总结一下今天学的五个关键点！", startFrame: 15, endFrame: 45 },
    { text: "第一，短音节形容词加-er，多音节加-more。", startFrame: 50, endFrame: 85 },
    { text: "第二，双音节词要看结尾，-y -er -le -ow用-er。", startFrame: 90, endFrame: 130 },
    { text: "第三，修饰比较级用much far even，不能用very quite。", startFrame: 135, endFrame: 180 },
    { text: "第四，表示越来越用-more and more加原级。", startFrame: 185, endFrame: 225 },
    { text: "第五，表示不如用less-than或not so-as-as。", startFrame: 230, endFrame: 275 },
  ],
  outro: [
    { text: "同学们，比较级句型是英语考试的重点，一定要多练习！", startFrame: 15, endFrame: 55 },
    { text: "如果觉得有帮助，请点赞、收藏、关注我。", startFrame: 60, endFrame: 100 },
    { text: "下期我们继续讲解更多英语易错知识点！再见！", startFrame: 105, endFrame: 155 },
  ],
} as const;
