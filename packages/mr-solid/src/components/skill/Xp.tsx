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
      blob: "This site was created not only to serve as the homepage for all things Nathan, it is also effectively a SPA (courtesy of Astro's View Transitions) that includes a micro-frontend written in SolidJS (this page), with more to come. The inspiration for this site came from this <a class='text-regal-blue-300 underline' href='https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520' target='_blank'>excellent Medium post by Sergio A. Arevalo Soria.</a>",
    },
    {
      context: "While working as a Full Stack Software Engineer at BNY Mellon as part of the SETUP Program...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","kafka"],
      title: "Account Validation Services",
      blob: "During my initial tenure at the bank, I spearheaded the development of the backend infrastructure for a novel application facilitating ASV, AOA, and AOV requests to Early Warning Systems via an internal service. Under the mentorship of my manager and colleagues, I engineered the Spring Boot API from inception, while contributing to the Angular frontend as required. Our efforts culminated in the successful testing and deployment of the application within 7 months, swiftly garnering client adoption."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","spring-cloud,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Early Days",
      blob: "Following the completion of AVS, I transitioned to a newly established team where I assumed responsibility for architecting the initial framework and structure of our APIs, including the establishment of our API gateway and implementation of new certificates. Additionally, I played a pivotal role in formulating a substantial portion of the enduring business logic. Leveraging the foundational knowledge acquired from prior projects, I predominantly focused on backend development during this phase, albeit occasionally addressing frontend requirements as needed."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java"],
      title: "Treasury Services Online Banking: Challenges",
      blob: "As the product continued to mature, my role evolved to include more responsibility. During this phase, my tasks predominantly entailed resolving complex, often uncharted issues that demanded innovative solutions. One such challenge involved integrating RSA SecurId prompts for specific actions based on entitlements. Despite initial complexities, adept coordination with the RSA Service team facilitated access to a new REST API, streamlining subsequent implementation through the utilization of interceptors and thread-scoped classes."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: `While the integration of RSA SecurId presented its own set of challenges, it merely scratched the surface of the complexities we encountered. Subsequently, I led the development of a demo API environment mirroring application functionalities, while remaining entirely detached from client data repositories. Collaborating with assigned interns, we expedited the development process, leveraging Hazelcast cache as a surrogate database for non-retrieval operations, thereby facilitating comprehensive product modeling for both existing and prospective clients.`
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java","spring-integration,java","yavi,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "Among the array of challenges faced, the creation of a file import service emerged as notably difficult. This service required efficient processing of large data files containing complex payment information in diverse formats inherited from the legacy system. To tackle this challenge, I carefully designed a solution using the Spring Integration framework alongside the YAVI validation framework. This strategy entailed detailed, asynchronous validation of each line in the file, covering both formatting and business logic, before aggregating the outcomes. Importantly, this service plays a crucial role in facilitating the transition of clients from the old platform to TS Online Banking."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","sql","spring-boot,java","spring-integration,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "If not for imports, implementing migration would have been easily my most troublesome task. Initially, our process relied on the periodic provision of client data extracts by the legacy system management and development team, and subsequent manual import of said files into our Mongo database. With that in mind, we leveraged the pre-existing imports service for our initial implementation. However, the focus subsequently shifted to autonomously obtaining these extracts, requiring direct connections to the legacy MSSQL and DB2 databases. This transition at first involved the creation and manipulation of intermediary files before the actual ingestion to our Mongo instance, an evidently inefficient approach. Therefore, I undertook a redevelopment initiative to bypass file generation entirely. Despite encountering obstacles, we successfully accomplished the task, once again easing client transition from the legacy platform to TS Online Banking."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "Although not a direct personal challenge, our team faced the task of entirely revamping our application website to align with specifications devised by a newly established, specialized design team. To facilitate this transition, I made key contributions to our new search page, ensuring seamless functionality from end to end, encompassing both UI and API development. Subsequently, several features I pioneered were integrated as components within the framework of the new design system."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","angularjs,ts"],
      title: "AI Hub",
      blob: "Presently, alongside my ongoing contributions to Treasury Services, I am providing assistance to the AI Hub team in the development of their micro-frontend site using Angular and the single-spa library."
    },
    {
      context: "Personal Project",
      skillList: ["golang"],
      title: "FIX API",
      blob: "Developed a comprehensive API wrapper leveraging the QuickFixGo library, employed to interface with the IBM FIX Gateway, facilitating seamless execution of requests."
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
      <div class="flex flex-col justify-center items-center h-2/6 min-h-fit w-full md:h-full md:w-4/12 lg:w-3/12 overflow-y-auto">
        <div class="w-11/12 min-h-fit">
          <Show when={page() === 0}>
            <div class="w-full h-fit flex flex-row md:flex-col justify-center items-center md:items-end top space-x-10 min-h-fit">
              <a href="https://www.linkedin.com/in/nathanduarte" class="cursor-pointer">
                <div class="flex flex-row justify-center items-center">
                  <p class="hidden md:flex text-regal-blue-100 text-xs lg:text-sm font-light">LinkedIn</p>
                  <i class="iconoir-linkedin before:size-7 lg:before:size-8 before:text-regal-blue-100 m-2">
                  </i>
                  <p class="flex md:hidden text-regal-blue-100 text-xs font-light">LinkedIn</p>
                </div>
              </a>
              <div class="flex flex-row justify-center items-center cursor-pointer"
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
                <p class="text-regal-blue-100 text-xs lg:text-sm font-light">Resume PDF</p>
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
        class="flex flex-col justify-center items-center h-4/6 w-full md:h-full md:w-8/12 lg:w-9/12 bg-gradient-to-br from-regal-blue-400 to-regal-blue-700 dark:from-gray-900 dark:to-gray-950  overflow-y-hidden">
        <Show when={page() === 0}>
          <div class="w-9/12 h-full flex flex-col items-center justify-start lg:justify-center space-y-3 overflow-y-auto no-scrollbar">
            <p class="text-white text-xs md:text-sm lg:text-xl text-center pt-5 pb-5">As a Full Stack Software Engineer, I've had
              the opportunity to tackle some unique problems. Here I examine the methodologies and skills I've employed over the course of my
              career
              and personal projects <i class="font-serif">(Interactive Resume)</i>.</p>
            <p class="text-regal-blue-100 text-xs text-center">To move forward, hit next. To go back, hit back. Also
              included on this page
              are shortcuts to my LinkedIn profile as well as my resume.</p>
          </div>
        </Show>
        <Show when={page() !== 0}>
          <div
            class="w-9/12 h-full flex flex-col items-center justify-start lg:justify-center space-y-0 overflow-y-auto no-scrollbar">
            <p class="text-white text-xs md:text-lg lg:text-xl text-center pt-5 pb-5">{pages[page()].title}</p>
            <p class="text-regal-blue-100 text-xs md:text-sm text-center leading-normal md:leading-loose" innerHTML={pages[page()].blob}></p>
          </div>
        </Show>
        <div class="w-1/2 h-fit flex flex-row justify-center items-center space-x-10">
          <div class="flex flex-row justify-center items-center cursor-pointer"
               onClick={() => getPrevPage()}>
            <i class={"iconoir-arrow-left-tag before:size-8 " + (page() > 0 ? "before:text-regal-blue-100" : "before:text-gray-700") + " m-2"}>
            </i>
            <p class={(page() > 0 ? "text-regal-blue-100" : "text-gray-700") + " text-xs font-light"}>Back</p>
          </div>
          <div class="flex flex-row justify-center items-center cursor-pointer"
               onClick={() => getNextPage()}>
            <p class={(page() < pages.length - 1 ? "text-regal-blue-100" : "text-gray-700") + " text-xs font-light"}>Next</p>
            <i class={"iconoir-arrow-right-tag before:size-8 "+(page()<pages.length-1?"before:text-regal-blue-100":"before:text-gray-700")+" m-2"}>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xp;
