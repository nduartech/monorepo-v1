import { Show, For, createSignal, createEffect } from "solid-js";
import '../../index.css';
import NavButton from "./NavButton";

function Nav(props: any) {
  const [isClosed, setIsClosed] = createSignal(true);
  createEffect(()=>{
    if(isClosed()||!isClosed()){
      setTimeout(function() {document.querySelectorAll("svg.nav").forEach(svg=>svg.classList.add("active"));},100);
    }
  });
  return (
    <div class="flex flex-row md:flex-col items-start justify-start w-full h-fit absolute">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv mt-0.5 ml-0.5 lg:mt-2 lg:ml-2">
        <Show when={isClosed()}>
          <NavButton
            icon='<svg class="nav w-6 h-6" width="100%" height="100%" stroke-width="0.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf2ff"><path d="M3 5H21" stroke="#ddf2ff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-1"></path><path d="M3 12H21" stroke="#ddf2ff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-2"></path><path d="M3 19H21" stroke="#ddf2ff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-3"></path></svg>'
            label="Menu"
            onClick={() => {
              document.querySelectorAll("svg.nav").forEach(svg=>svg.classList.remove("active"));
              setTimeout(function() {
                setIsClosed(false);
              },100);
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
              icon='<svg class="nav w-6 h-6" width="100%" height="100%" stroke-width="0.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf2ff"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#ddf2ff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-4"></path></svg>'
              label="Close"
              onClick={() => {
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
