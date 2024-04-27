import { Component, For } from "solid-js";
import "./index.css";
import Nav from "./components/nav/Nav";
import SkillBar from './components/skill/SkillBar';
import skillFilters from "./components/skill/SkillFilters";
import Xp from "./components/skill/Xp";

const App: Component = (props: any) => {


  const nav = () => [
    {
      icon: "home",
      label: "Home",
      path: "home"
    }
  ];

  const skills = () => [
    {
      label: "CSS",
      skill: "css",
      category: "front-end",
      link: ""
    },
    {
      label: "JS",
      skill: "js",
      category: "front-end",
      link: ""
    },
    {
      label: "Typescript",
      skill: "ts",
      category: "front-end",
      link: ""
    },
    {
      label: "Java",
      skill: "java",
      category: "back-end",
      link: ""
    },
    {
      label: "Python",
      skill: "python",
      category: "back-end",
      link: "https://www.python.org/"
    },
    {
      label: "Golang",
      skill: "golang",
      category: "back-end",
      link: "https://go.dev/"
    },
    {
      label: "SQL",
      skill: "sql",
      category: "back-end",
      link: ""
    },
    {
      label: "Tailwind",
      skill: "tailwindcss",
      category: "front-end",
      link: "https://tailwindcss.com/"
    },
    {
      label: "SolidJS",
      skill: "solidjs,ts",
      category: "front-end",
      link: "https://www.solidjs.com/"
    },
    {
      label: "Astro",
      skill: "astrojs,ts",
      category: "front-end",
      link: "https://astro.build/"
    },
    {
      label: "Angular",
      skill: "angularjs,ts",
      category: "front-end",
      link: "https://angular.io/"
    },
    {
      label: "Mitosis",
      skill: "mitosisjs,ts",
      category: "front-end",
      link: "https://mitosis.builder.io/"
    },
    {
      label: "Spring Boot (2/3)",
      skill: "spring-boot,java",
      category: "back-end",
      link: "https://spring.io/projects/spring-boot"
    },
    {
      label: "Spring Integration",
      skill: "spring-integration,java",
      category: "back-end",
      link: "https://spring.io/projects/spring-integration"
    },
    {
      label: "Spring Cloud",
      skill: "spring-cloud,java",
      category: "back-end",
      link: "https://spring.io/projects/spring-cloud"
    },
    {
      label: "Spring Security",
      skill: "spring-security,java",
      category: "back-end",
      link: "https://spring.io/projects/spring-security"
    },
    {
      label: "YAVI",
      skill: "yavi,java",
      category: "back-end",
      link: "https://yavi.ik.am/"
    },
    {
      label: "MongoDB",
      skill: "mongo",
      category: "back-end",
      link: "https://www.mongodb.com/"
    },
    {
      label: "PostgreSQL",
      skill: "postgresql",
      category: "back-end",
      link: "https://www.postgresql.org/"
    },
  ];

  return (
    <div
      class={String(window.localStorage && window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : document.documentElement.dataset.theme)}>
      <div class="h-screen w-screen bg-regal-blue-400 dark:bg-regal-blue-950">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-row justify-center">
          <div class="page flex flex-row justify-center items-center fixed w-10/12">
              <SkillBar skills={skills()}></SkillBar>
          </div>
          <div class="page flex flex-col justify-start items-center h-screen w-screen">
            <div class="flex flex-col md:flex-row justify-center items-center mt-[5rem] md:mt-[15rem] lg:mt-[12rem] bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] backdrop-filter backdrop-blur-[2px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)] dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)] p-10 w-[80vw] h-[80vh] md:h-[60vh] lg:h-[65vh] min-h-fit">
              <Xp></Xp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
