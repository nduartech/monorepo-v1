import { Component } from "solid-js";
import "./index.css";
import Nav from "./components/nav/Nav";
import SkillBar from './components/skill/SkillBar';
import skills from "./components/skill/skills";
import Xp from "./components/skill/Xp";

const App: Component = (props: any) => {


  const nav = () => [
    {
      icon: '<svg class="nav w-7 h-7" stroke-width="0.8" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf2ff" viewBox="2.55 3.23 18.9 18.22"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="#ddf2ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-5"></path></svg>',
      label: "Home",
      path: "home"
    }
  ];

  return (
    <div
      class="flex h-full max-w-screen">
      <div class="h-full max-h-screen w-full overflow-hidden">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-col w-full h-full space-y-10">
          <div class="page flex flex-row justify-center items-center w-full">
              <SkillBar skills={skills()}></SkillBar>
          </div>
          <div class="page flex flex-col justify-start items-center w-full">
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
