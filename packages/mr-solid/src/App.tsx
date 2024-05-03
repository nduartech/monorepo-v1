import { Component, For } from "solid-js";
import "./index.css";
import Nav from "./components/nav/Nav";
import SkillBar from './components/skill/SkillBar';
import skills from "./components/skill/skills";
import Xp from "./components/skill/Xp";

const App: Component = (props: any) => {


  const nav = () => [
    {
      icon: "home",
      label: "Home",
      path: "home"
    }
  ];

  return (
    <div
      class={String(window.localStorage && window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : document.documentElement.dataset.theme)}>
      <div class="h-full max-h-screen w-full overflow-hidden">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-col w-full h-full space-y-10">
          <div class="page flex flex-row justify-center items-center w-full">
              <SkillBar skills={skills()}></SkillBar>
          </div>
          <div class="page flex flex-col justify-start items-center h-full w-screen">
            <div class="mt-2 flex flex-col md:flex-row justify-center items-center bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] backdrop-filter backdrop-blur-[2px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)] dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)] p-5 w-[80vw] h-[85vh] lg:h-[65vh] min-h-fit">
              <Xp></Xp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
