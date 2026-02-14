#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import subprocess
import json
import os

# 旁白文本定义
NARRATION = {
    "scene1": "你有没有在考试中写过 a hour？这两个错误，每次都让大批学生失分。",
    "scene2": "或者把 a university 写成 an university？",
    "scene3": "这两个错误，每次都让大批学生失分。",
    "scene4": "其实规则非常简单。a 用在辅音音素开头的词前面，an 用在元音音素开头的词前面。",
    "scene5": "注意，是音素，不是字母！",
    "scene6": "比如 hour，虽然以 h 开头，但 h 不发音，实际读音是 au-er，是元音开头，所以是 an hour。",
    "scene7": "而 university 虽然以 u 开头，但发的是 ju 音，j 是辅音音素，所以是 a university。",
    "scene8": "那 the 什么时候用呢？记住三个核心场景：已确定的事物、唯一的事物、双方都知道的事物。",
    "scene9": "比如，我在说 the sun，因为太阳是唯一的，大家都知道是哪个太阳。",
    "scene10": "再说，我把手机丢在 the classroom，因为我们都知道是哪个教室，所以用 the。",
    "scene11": "最后送你一个口诀，考试之前默念三遍。",
    "scene12": "a 加辅音，an 加元音。特指某样用 the 定。唯一事物 the 相认。双方皆知 the 呼应。",
    "scene13": "下次看到冠词，想想这个口诀，绝对不会再错！",
}

def generate_tts_audio(text, output_file, voice="zh-CN-XiaoxiaoNeural"):
    """使用edge-tts生成中文语音"""
    cmd = [
        "edge-tts",
        "--voice", voice,
        "--text", text,
        "--write-media", output_file
    ]
    
    try:
        subprocess.run(cmd, check=True, capture_output=True, text=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error generating audio for {output_file}: {e}")
        print(f"stderr: {e.stderr}")
        return False

def get_audio_duration(audio_file):
    """使用ffprobe获取音频时长（秒）"""
    cmd = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "json",
        audio_file
    ]
    
    try:
        result = subprocess.run(cmd, check=True, capture_output=True, text=True)
        data = json.loads(result.stdout)
        duration = float(data['format']['duration'])
        return duration
    except subprocess.CalledProcessError as e:
        print(f"Error getting duration for {audio_file}: {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error parsing duration for {audio_file}: {e}")
        return None

def main():
    # 创建输出目录
    output_dir = "public/audio/narration"
    os.makedirs(output_dir, exist_ok=True)
    
    results = {}
    
    print("开始生成TTS音频...")
    
    for scene_key, text in NARRATION.items():
        audio_file = os.path.join(output_dir, f"{scene_key}.mp3")
        
        print(f"生成 {scene_key} 的音频...")
        
        # 生成音频
        if generate_tts_audio(text, audio_file):
            # 获取时长
            duration = get_audio_duration(audio_file)
            if duration:
                results[scene_key] = {
                    "file": audio_file,
                    "duration": duration,
                    "frames": int(duration * 30)  # 转换为帧数（30fps）
                }
                print(f"  ✓ 生成成功，时长: {duration:.2f}秒 ({results[scene_key]['frames']}帧)")
            else:
                print(f"  ✗ 无法获取时长")
        else:
            print(f"  ✗ 生成失败")
    
    # 保存结果到JSON
    with open("audio_results.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"\n音频生成完成！结果已保存到 audio_results.json")
    print(f"\n请运行 update_constants.py 来更新 constants.ts")

if __name__ == "__main__":
    main()
