#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

# 读取音频结果
with open("audio_results.json", "r", encoding="utf-8") as f:
    audio_results = json.load(f)

# 定义每个场景的音频片段（基于脚本内容）
SCENE_SEGMENTS = {
    "scene1": [
        "你有没有在考试中写过 a hour？",
        "这两个错误，每次都让大批学生失分。",
    ],
    "scene2": [
        "或者把 a university 写成 an university？",
    ],
    "scene3": [
        "这两个错误，每次都让大批学生失分。",
    ],
    "scene4": [
        "其实规则非常简单。",
        "a 用在辅音音素开头的词前面，",
        "an 用在元音音素开头的词前面。",
    ],
    "scene5": [
        "注意，是音素，不是字母！",
    ],
    "scene6": [
        "比如 hour，虽然以 h 开头，但 h 不发音，",
        "实际读音是 au-er，是元音开头，",
        "所以是 an hour。",
    ],
    "scene7": [
        "而 university 虽然以 u 开头，",
        "但发的是 ju 音，j 是辅音音素，",
        "所以是 a university。",
    ],
    "scene8": [
        "那 the 什么时候用呢？",
        "记住三个核心场景：",
        "已确定的事物、唯一的事物、",
        "双方都知道的事物。",
    ],
    "scene9": [
        "比如，",
        "我在说 the sun，",
        "因为太阳是唯一的，",
        "大家都知道是哪个太阳。",
    ],
    "scene10": [
        "再说，",
        "我把手机丢在 the classroom，",
        "因为我们都知道是哪个教室，",
        "所以用 the。",
    ],
    "scene11": [
        "最后送你一个口诀，考试之前默念三遍。",
    ],
    "scene12": [
        "a 加辅音，an 加元音。",
        "特指某样用 the 定。",
        "唯一事物 the 相认。",
        "双方皆知 the 呼应。",
    ],
    "scene13": [
        "下次看到冠词，",
        "想想这个口诀，",
        "绝对不会再错！",
    ],
}

def estimate_segment_duration(full_text, segment_text, full_duration):
    """根据文本比例估算片段时长"""
    segment_ratio = len(segment_text) / len(full_text)
    return full_duration * segment_ratio

def generate_audio_segments():
    """生成所有场景的音频片段时间线"""
    audio_segments = {}
    
    for scene_key, segments in SCENE_SEGMENTS.items():
        full_text = "".join(segments)
        full_duration = audio_results[scene_key]["duration"]
        total_frames = audio_results[scene_key]["frames"]
        
        scene_segments = []
        current_frame = 0
        
        for segment_text in segments:
            duration = estimate_segment_duration(full_text, segment_text, full_duration)
            frames = int(duration * 30)
            
            scene_segments.append({
                "startFrame": current_frame,
                "endFrame": current_frame + frames
            })
            
            current_frame += frames
        
        # 调整最后一个片段的结束帧，确保总帧数匹配
        if scene_segments:
            scene_segments[-1]["endFrame"] = total_frames
        
        audio_segments[scene_key] = scene_segments
    
    return audio_segments

def generate_new_constants():
    """生成新的constants.ts文件"""
    audio_segments = generate_audio_segments()
    
    # 读取原始constants.ts
    with open("src/constants.ts", "r", encoding="utf-8") as f:
        constants_content = f.read()
    
    # 更新AUDIO_SEGMENTS部分
    new_audio_segments = "export const AUDIO_SEGMENTS = {\n"
    
    for scene_key, segments in audio_segments.items():
        new_audio_segments += f"  {scene_key}: [\n"
        for seg in segments:
            new_audio_segments += f"    {{ startFrame: {seg['startFrame']}, endFrame: {seg['endFrame']} }},\n"
        new_audio_segments += "  ],\n"
    
    new_audio_segments += "};"
    
    # 替换AUDIO_SEGMENTS部分
    import re
    pattern = r'export const AUDIO_SEGMENTS = \{[^}]*\};'
    new_constants = re.sub(pattern, new_audio_segments, constants_content, flags=re.DOTALL)
    
    # 保存新文件
    with open("src/constants.ts", "w", encoding="utf-8") as f:
        f.write(new_constants)
    
    print("✓ constants.ts 已更新")
    print("\n场景音频时长统计:")
    for scene_key, segments in audio_segments.items():
        total_frames = audio_results[scene_key]["frames"]
        total_duration = audio_results[scene_key]["duration"]
        print(f"  {scene_key}: {total_duration:.2f}秒 ({total_frames}帧)")

if __name__ == "__main__":
    generate_new_constants()
