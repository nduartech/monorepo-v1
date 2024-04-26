import { Component, For } from "solid-js";
import "./index.css";
import Nav from "./components/Nav";
import SkillButton from "./components/SkillButton";
import skillFilters from "./components/SkillFilters";

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

  const [filters, setFilters] = skillFilters;

  let scrollPosition = 0;

  return (
    <div
      class={String(window.localStorage && window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : document.documentElement.dataset.theme)}>
      <div class="h-screen w-screen bg-regal-blue-400 dark:bg-regal-blue-950">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-row justify-center">
          <div class="page flex flex-row justify-center items-center fixed w-10/12">
            <div class="rounded-t-none w-[60vw] min-h-[5rem] h-fit bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)]
        backdrop-filter backdrop-blur-[2px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)]
        dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter
        dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)]
        flex flex-row justify-start items-center px-0 md:px-5 lg:px-10">
              <div class="w-12/12 h-11/12 flex flex-row flex-wrap py-2 justify-center items-center"
                // no-scrollbar scroll-smooth
                // " onWheel={(event)=> {
                //   event.preventDefault();
                //   event.currentTarget.scroll(scrollPosition + event.deltaX > 0 ? event.deltaX : event.deltaY, 0);
                // }}
              >
                <For each={skills()}>
                  {(item, index) => (
                    <SkillButton label={item.label} skill={item.skill} category={item.category}
                                 link={item.link}></SkillButton>
                  )}
                </For>
              </div>
            </div>
          </div>
          <div class="page flex flex-col justify-start items-center h-screen w-screen">
            <div class="flex flex-col justify-center mt-[20rem] md:mt-[15rem] items-center bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] backdrop-filter backdrop-blur-[2px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)]
        dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)] p-10 md:p-20 lg:p-32">
              <h2 class="text-5xl text-white dark:text-white">Sample App</h2>
              <p class="text-white dark:text-white mt-5 mb-2">Build on this...</p>
              <button
                class="flex flex-row space-x-2 items-center justify-center bg-regal-blue-600 hover:bg-regal-blue-500 dark:bg-regal-blue-800 dark:hover:bg-regal-blue-900 w-full py-2 px-2 text-sm font-medium text-regal-blue-50 dark:text-regal-blue-50 border border-transparent rounded-lg focus:outline-none hover:outline hover:outline-1 hover:outline-offset-1 hover:outline-regal-blue-200">Learn
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
