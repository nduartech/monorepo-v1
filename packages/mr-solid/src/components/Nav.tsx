import { For} from "solid-js";
import NavButton from "./NavButton";

function Nav(props: any) {
  // console.log(props.navItems);

  return (
    <div class="flex flex-row items-start justify-start w-fit h-fit">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv">
        <ul class="flex flex-col items-start justify-start w-fit h-fit space-y-5 list-none">
          <For each={props.navItems}>
            {(item: any, index) => {
              console.log(item);
              return (
                <NavButton
                  icon={item.icon}
                  label={item.label}
                ></NavButton>
              );
            }}
          </For>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
