import resume from '../../../resume.pdf';
import skillFilters from "./SkillFilters";
import { createSignal, For, Show } from "solid-js";
import skillsDict from "./skillsDict";
import SkillButtonThin from "./SkillButtonThin";

  const pages = [
    {
      context: "Main Page",
      skillList: []
    },
    {
      context: "This Website :)",
      skillList: ['css','js','ts','tailwindcss','solidjs,ts','astrojs,ts','mitosisjs,ts'],
      title: "Not Your Average Personal Website",
      blob: "This site was created not only to serve as the homepage for all things Nathan, it is also a SPA that includes a micro-frontend written in SolidJS (this page), with more to come. The homepage/outer host website was written in Astro, inspired by this <a href='https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520' target='_blank'>excellent Medium post by Sergio A. Arevalo Soria.</a>",
    },
    {
      context: "While working as a Full Stack Software Engineer at BNY Mellon as part of the SETUP Program...",
      skillList: ["js","ts","java","angularjs,ts","spring-boot,java","spring-cloud,java","mongo"],
      title: "",
      blob: ""
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["js","ts","java","angularjs,ts","spring-boot,java","spring-cloud,java","spring-integration,java","spring-security,java","yavi,java","mongo"],
      title: "",
      blob: ""
    },
    {
      context: "Personal Project",
      skillList: [],
      title: "",
      blob: ""
    },
  ];

  const [filters, setFilters] = skillFilters;

  const [page, setPage] = createSignal(0);

  const getPrevPage = () => {
    if(page()>0) {
      setPage(page()-1);
    }
  };


  const getNextPage = () => {
    if(page()<pages.length-1) {
      setPage(page()+1);
    }
  };


function Xp(props: any) {
  return (
    <div class="w-full h-full flex flex-col md:flex-row"
     onMouseOver={()=>{
       if (page() !== 0 && filters().length === 0) {
         setFilters(pages[page()].skillList);
       }
     }}
     onMouseOut={()=>{
       setFilters([]);
     }}>
      <div class="flex flex-col justify-center items-center h-3/6 min-h-fit w-full md:h-full md:w-4/12 lg:w-3/12 bg-gray-800 overflow-y-auto">
        <div class="w-11/12 min-h-fit">
          <Show when={page() === 0}>
            <div class="w-full h-fit flex flex-row md:flex-col justify-center items-center md:items-end top space-x-10 min-h-fit">
              <div class="flex flex-row justify-center items-center"
                   onClick={() => window.open("https://www.linkedin.com/in/nathanduarte")}>
                <p class="hidden md:flex text-regal-blue-100 text-xs lg:text-sm font-light">LinkedIn</p>
                <i class="iconoir-linkedin before:size-7 lg:before:size-8 before:text-regal-blue-100 m-2">
                </i>
                <p class="flex md:hidden text-regal-blue-100 text-xs font-light">LinkedIn</p>
              </div>
              <div class="flex flex-row justify-center items-center"
                   onClick={() => fetch(resume).then(resp => resp.blob()).then(blob => {
                     const url = window.URL.createObjectURL(blob);
                     const a = document.createElement("a");
                     a.style.display = "none";
                     a.href = url;
                     a.download = "NathanDuarteResume.pdf";
                     document.body.appendChild(a);
                     a.click();
                     window.URL.revokeObjectURL(url);
                   }).catch(() => alert("Download failed"))}>
                <p class="text-regal-blue-100 text-xs lg:text-sm font-light">Resume</p>
                <i class="iconoir-page before:size-6 lg:before:size-7 before:text-regal-blue-100 m-2">
                </i>
              </div>
            </div>
          </Show>
          <Show when={page() !== 0}>
            <div
              class="w-full h-fit flex flex-col justify-center items-center top space-x-2 min-h-fit">
              <p class="text-regal-blue-100 text-sm font-light text-center">Context: {pages[page()].context}</p>
              <div class="flex flex-row flex-wrap lg:hidden w-full h-full justify-center items-center mt-1 md:mt-2">
                <p class="text-regal-blue-100 text-sm font-light text-center inline-flex">Tags: </p>
                <For each={pages[page()].skillList}>
                  {(item) => (
                    <SkillButtonThin label={skillsDict()[item].label} skill={item} category={skillsDict()[item].category}
                                 link={skillsDict()[item].link}></SkillButtonThin>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-center h-4/6 min-h-fit w-full md:h-full md:w-8/12 lg:w-9/12 bg-gray-900 pt-5 overflow-y-auto">
        <Show when={page() === 0}>
          <div class="w-9/12 h-full flex flex-col items-center justify-start space-y-3 md:space-y-2 md:justify-center min-h-fit overflow-y-auto no-scrollbar">
            <p class="text-white text-xs md:text-sm lg:text-xl text-center">As a fullstack software engineer, I've had
              the opportunity to
              work with some
              diverse technology stacks. Here I examine the methodologies and skills I've employed over the course of my
              career
              and personal projects.</p>
            <p class="text-gray-600 text-xs text-center">To move forward, hit next. To go back, hit back. Also
              included on this page
              are shortcuts to my LinkedIn profile as well as my resume.</p>
          </div>
        </Show>
        <Show when={page() !== 0}>
          <div
            class="w-9/12 h-full flex flex-col items-center justify-start space-y-3 md:space-y-2 md:justify-center min-h-fit overflow-y-auto no-scrollbar">
            <p class="text-white text-xs md:text-lg lg:text-xl text-center">{pages[page()].title}</p>
            <p class="text-regal-blue-100 text-xs md:text-sm text-center" innerHTML={pages[page()].blob}></p>
          </div>
        </Show>
        <div class="w-1/2 h-fit flex flex-row justify-center items-center bottom space-x-10 min-h-fit bottom-5">
          <div class="flex flex-row justify-center items-center"
               onClick={() => getPrevPage()}>
            <i
              class={"iconoir-arrow-left-tag before:size-8 " + (page() > 0 ? "before:text-regal-blue-100" : "before:text-gray-600") + " m-2"}>
            </i>
            <p class={(page() > 0 ? "text-regal-blue-100" : "text-gray-600") + " text-xs font-light"}>Back</p>
          </div>
          <div class="flex flex-row justify-center items-center"
               onClick={() => getNextPage()}>
            <p
              class={(page() < pages.length - 1 ? "text-regal-blue-100" : "text-gray-600") + " text-xs font-light"}>Next</p>
            <i class={"iconoir-arrow-right-tag before:size-8 "+(page()<pages.length-1?"before:text-regal-blue-100":"before:text-gray-600")+" m-2"}>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xp;
