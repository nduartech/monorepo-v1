import { Show, For, createSignal } from "solid-js";

import NavButton from "./NavButton";

function Nav(props: any) {
  const [isClosed, setIsClosed] = createSignal(true);

  return (
    <div class="flex flex-row md:flex-col items-start justify-start w-full h-fit mt-1 ml-1 lg:mt-2 lg:ml-2 absolute">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv">
        <Show when={isClosed()}>
          <NavButton
            icon="menu"
            label="Menu"
            onClick={()=> {
              setIsClosed(false);
              let navClosed = new Event("navClosed");
              let navOpened = new Event("navOpened");
              if (!isClosed()) {
                document.dispatchEvent(navOpened);
              }
              if (isClosed()) {
                document.dispatchEvent(navClosed);
              }
            }}
          ></NavButton>
        </Show>
        <ul class="flex flex-row lg:flex-col items-start justify-start w-fit h-fit lg:space-y-1.5 list-none">
          <Show when={!isClosed()}>
            <NavButton
              icon="web-window-xmark"
              label="Close"
              onClick={()=> {
                setIsClosed(true);
                let navClosed = new Event("navClosed");
                let navOpened = new Event("navOpened");
                if (!isClosed()) {
                  document.dispatchEvent(navOpened);
                }
                if (isClosed()) {
                  document.dispatchEvent(navClosed);
                }
              }}
            ></NavButton>
            <For each={props.navItems}>
              {(item, _index) => {
                const index = _index();
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
