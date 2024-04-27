import { For, Show } from "solid-js";
import SkillButton from "./SkillButton";

function SkillBar(props: any) {
  return (
    <div class="rounded-t-none w-[60vw] min-h-[5rem] h-fit bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)]
        backdrop-filter backdrop-blur-[2px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)]
        dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter
        dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)]
        hidden md:hidden lg:flex flex-row justify-start items-center px-0 md:px-5 lg:px-10">
      <div class="flex flex-row flex-wrap w-12/12 h-11/12  py-2 justify-center items-center"
        // no-scrollbar scroll-smooth
        // " onWheel={(event)=> {
        //   event.preventDefault();
        //   event.currentTarget.scroll(scrollPosition + event.deltaX > 0 ? event.deltaX : event.deltaY, 0);
        // }}
      >
        <For each={props.skills}>
          {(item, index) => (
            <SkillButton label={item.label} skill={item.skill} category={item.category}
                         link={item.link}></SkillButton>
          )}
        </For>
      </div>
    </div>
  );
}

export default SkillBar;
