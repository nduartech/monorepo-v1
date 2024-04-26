import { JSX, Show } from "solid-js";
import skillFilters from "./SkillFilters";


function SkillButton(props: { category: string; skill: string; link: string | URL | undefined; label: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {

  const filterButton = (filters: String[], skill: string) => {
    return filters.length !== 0 && (filters.includes(skill) || filters.map((s)=>s.includes(skill)).reduce((prev,curr)=>prev&&curr));
  }

  const [filters, setFilters] = skillFilters;

  return (
    <>
      <div
        class={"skillButton min-w-fit flex flex-row space-x-1.5 items-center justify-center" +
          " py-2 mx-2 my-1 px-1 text-sm font-medium text-regal-blue-50 dark:text-regal-blue-50 border border-transparent " +
          "rounded-lg "+(props.category==="front-end"?
            filterButton(filters(),props.skill)?"bg-green-600 dark:bg-green-700":"bg-green-800 dark:bg-green-900"
            :"")}
        data-skill={props.skill}
        onMouseOver={()=>{
          if(filters().length === 0) {
            setFilters([props.skill]);
          }
        }}
        onMouseOut={()=>{
          if(filters().length === 1) {
            setFilters([]);
          }
        }}
        onClick={()=>{
          if (props.link && props.link !== "") {
            window.open(props.link)
          }
        }}
      >
        <p class="skillIconLabel">{props.label}</p>
      </div>
    </>
  );
}

export default SkillButton;
