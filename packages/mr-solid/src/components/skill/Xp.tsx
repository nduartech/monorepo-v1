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
      blob: "This site was created not only to serve as the homepage for all things Nathan, it is also a SPA that includes a micro-frontend written in SolidJS (this page), with more to come. The homepage/outer host website was written in Astro, inspired by this <a class='text-blue-700 underline' href='https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520' target='_blank'>excellent Medium post by Sergio A. Arevalo Soria.</a>",
    },
    {
      context: "While working as a Full Stack Software Engineer at BNY Mellon as part of the SETUP Program...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","kafka"],
      title: "Account Validation Services",
      blob: "During my initial period at the bank, I was responsible for building the back-end of a new app for sending ASV, AOA, and AOV requests to Early Warning Systems via an internal service. With the patient guidance of my manager and other team members, I wrote the Spring Boot API from scratch, and contributed to the Angular front-end when needed. We successfully tested and launched the app in production within 7 months, gaining immediate client adoption."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","spring-cloud,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Early Days",
      blob: "Following AVS, I was assigned to my current team, also newly formed at the time. As such, I was personally responsible for the initial setup and structure of our APIs, creating our API gateway, new certificates, as well as quite a bit of the business logic which is still in use today. Our previous work proved crucial, as through it I found I had gained the fundamental knowledge I now needed. During this period I mainly worked on the back end, though did pick up the occasional UI ticket as needed."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java"],
      title: "Treasury Services Online Banking: Challenges",
      blob: "As the product continued to mature, my role evolved to include more responsibility. During this time, my work was largely open-ended, consisting of solving problems no one else could (nor would be willing to, in some cases) tackle. The first of these was adding RSA SecurId prompts for certain actions based on entitlements. While at first this may not sound too cumbersome, note that the initial spec required the use of a specific jar file (built years prior by another team) in order to access an old SOAP api to make requests.. After some digging however I found that the team that managed the RSA Service was working on a new REST api, though till then they had only granted access to the new version to a select number of applications. After reaching out, we were able to get the access we needed, and from there the implementation became more straightforward—using interceptors and thread-scoped classes to manage the interaction with the service."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: `While adding RSA was not "simple", it was the simplest of the problems I'll cover here. My next challenge—that of building a demo api experience that completely mimicked application functionality while being simultaneously completely separate from the database (i.e. not touching client data)—was more involved. Fortunately, I wasn't alone, as that summer I was assigned two interns to mentor. Together, we built out the demo environment in record time, putting together endpoints which returned static and mock data, while using Hazelcast cache as a mock database for non-retrieval actions <i>(create, update, delete)</i>. The feature is vital to our product team, allowing them to model the application for both transitioning and prospective clients.`
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java","spring-integration,java","yavi,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "Perhaps the most daunting of the challenges I tackled though was that of writing a file import service. The service had to able to process large files containing payment data asynchronously, without overwhelming existing services with requests. Said files could be in any of 11 complex csv or fixed-length formats (inherited as a requirement from the legacy system we were aiming to replace), each with their own respective specifications and rules. In order to accomplish this, I used Spring Integrations along with the YAVI validation framework to meticulously build out the service from the ground up—splitting each file into its respective lines, validating each of those lines in their own thread (including both formatting and business logic), and then aggregating the results. The service is a key part of TS Online Banking's ability to transition clients from the previous platform."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","sql","spring-boot,java","spring-integration,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "If not for imports, migration would easily have been my greatest challenge. At first, we were given extracts of client data regularly by the team that managed and developed the legacy system, which we, in turn, had to import into our own Mongo database. Thus, our initial implementation repurposed the imports service I had previously developed. However, the goal soon shifted to taking the extracts ourself, which meant connecting to the legacy MSSQL and DB2 (running on mainframe) directly. Now, however, we were creating files, which we would then save and read in a separate process before writing to the database.. Not the most efficient, obviously. So once again, I had to rewrite the code to skip the file generation entirely. Despite the hurdles, we got it done in the end."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "While not a personal challenge per se, after almost 3 years with one UI system our team was asked to completely overhaul our application website to match the spec created by a newly formed, dedicated design team. In order to support this change, I personally wrote our new search page, completing the functionality end-to-end (both UI and API code). Some of the features I developed were later added as components in the new design system."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","angularjs,ts"],
      title: "AI Hub",
      blob: "Currently, while continuing to contribute to Treasury Services, I am also aiding members of the AI Hub team in the development of their micro-frontend site."
    },
    {
      context: "Personal Project",
      skillList: ["golang"],
      title: "FIX API",
      blob: "Built an API wrapper around the QuickFixGo library, which in turn was used to access the IBM FIX Gateway to place requests."
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
      <div class="flex flex-col justify-center items-center h-3/6 min-h-fit w-full md:h-full md:w-4/12 lg:w-3/12 bg-slate-800 overflow-y-auto">
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
        class="flex flex-col justify-start items-center h-4/6 min-h-fit w-full md:h-full md:w-8/12 lg:w-9/12 bg-gray-900 pt-5 overflow-y-auto">
        <Show when={page() === 0}>
          <div class="w-9/12 h-full flex flex-col items-center justify-start space-y-3 md:space-y-2 md:justify-center min-h-fit overflow-y-auto no-scrollbar">
            <p class="text-white text-xs md:text-sm lg:text-xl text-center">As a Full Stack Software Engineer, I've had
              the opportunity to tackle some unique problems. Here I examine the methodologies and skills I've employed over the course of my
              career
              and personal projects <i class="font-serif">(Interactive Resume)</i>.</p>
            <p class="text-gray-600 text-xs text-center">To move forward, hit next. To go back, hit back. Also
              included on this page
              are shortcuts to my LinkedIn profile as well as my resume.</p>
          </div>
        </Show>
        <Show when={page() !== 0}>
          <div
            class="w-9/12 h-full flex flex-col items-center justify-start space-y-3 md:space-y-2 md:justify-center min-h-fit overflow-y-auto no-scrollbar">
            <p class="text-white text-xs md:text-lg lg:text-xl text-center">{pages[page()].title}</p>
            <p class="text-regal-blue-100 text-xs md:text-sm text-center leading-normal md:leading-loose" innerHTML={pages[page()].blob}></p>
          </div>
        </Show>
        <div class="w-1/2 h-fit flex flex-row justify-center items-center bottom space-x-10 min-h-fit bottom-5">
          <div class="flex flex-row justify-center items-center"
               onClick={() => getPrevPage()}>
            <i class={"iconoir-arrow-left-tag before:size-8 " + (page() > 0 ? "before:text-regal-blue-100" : "before:text-gray-700") + " m-2"}>
            </i>
            <p class={(page() > 0 ? "text-regal-blue-100" : "text-gray-700") + " text-xs font-light"}>Back</p>
          </div>
          <div class="flex flex-row justify-center items-center"
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
