import {
  AbsoluteFill,
  Sequence,
  staticFile,
} from "remotion";
import { SCENES } from "./constants";
import { SceneHook } from "./scenes/SceneHook";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneConcept1 } from "./scenes/SceneConcept1";
import { SceneConcept2 } from "./scenes/SceneConcept2";
import { SceneConcept3 } from "./scenes/SceneConcept3";
import { SceneConcept4 } from "./scenes/SceneConcept4";
import { SceneConcept5 } from "./scenes/SceneConcept5";
import { SceneConcept6 } from "./scenes/SceneConcept6";
import { ScenePractice } from "./scenes/ScenePractice";
import { SceneSummary } from "./scenes/SceneSummary";
import { SceneOutro } from "./scenes/SceneOutro";

export const ComparativeSentence: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#F8FAFC" }}>
      <Sequence from={SCENES.hook.start}>
        <SceneHook />
      </Sequence>
      <Sequence from={SCENES.intro.start}>
        <SceneIntro />
      </Sequence>
      <Sequence from={SCENES.concept1.start}>
        <SceneConcept1 />
      </Sequence>
      <Sequence from={SCENES.concept2.start}>
        <SceneConcept2 />
      </Sequence>
      <Sequence from={SCENES.concept3.start}>
        <SceneConcept3 />
      </Sequence>
      <Sequence from={SCENES.concept4.start}>
        <SceneConcept4 />
      </Sequence>
      <Sequence from={SCENES.concept5.start}>
        <SceneConcept5 />
      </Sequence>
      <Sequence from={SCENES.concept6.start}>
        <SceneConcept6 />
      </Sequence>
      <Sequence from={SCENES.practice.start}>
        <ScenePractice />
      </Sequence>
      <Sequence from={SCENES.summary.start}>
        <SceneSummary />
      </Sequence>
      <Sequence from={SCENES.outro.start}>
        <SceneOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
