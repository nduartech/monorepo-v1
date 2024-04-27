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
      <div class="h-full w-full bg-regal-blue-400 dark:bg-regal-blue-950 overflow-y-hidden">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-row justify-center">
          <div class="page flex flex-row justify-center items-center fixed w-10/12">
              <SkillBar skills={skills()}></SkillBar>
          </div>
          <div class="page flex flex-col justify-start items-center h-screen w-screen">
            <div class="flex flex-col md:flex-row justify-center items-center mt-[3rem] lg:mt-[12rem] bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] backdrop-filter backdrop-blur-[2px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)] dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)] p-5 w-[80vw] h-[80vh] lg:h-[65vh] min-h-fit">
              <Xp></Xp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
