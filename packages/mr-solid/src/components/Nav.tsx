import { createSignal, For, Show } from "solid-js";
import NavButton from "./NavButton";

function Nav(props: any) {

  const [closed, setClosed] = createSignal(true);

  const emitClosedState = () => {
    let navClosed = new Event("navClosed");
    let navOpened = new Event("navOpened");

    if(!closed()) {
      document.dispatchEvent(navOpened);
    }
    if(closed()){
      document.dispatchEvent(navClosed);
    }
  }

  return (
    <div class="flex flex-row items-start justify-start w-fit h-fit fixed float-start mt-2 ml-2">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv">
        <Show when={closed()}>
          <NavButton icon="menu" label="Menu" onClick={()=>{
            setClosed(false);
            emitClosedState();
          }}></NavButton>
        </Show>
        <ul class="flex flex-col items-start justify-start w-fit h-fit space-y-1.5 list-none">
          <Show when={!closed()}>
            <NavButton icon="web-window-xmark" label="Close" onClick={()=>{
              setClosed(true);
              emitClosedState();
            }}></NavButton>
            <For each={props.navItems}>
              {(item: any, index) => {
                return (
                  <NavButton
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                  ></NavButton>
                );
              }}
            </For>
          </Show>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
