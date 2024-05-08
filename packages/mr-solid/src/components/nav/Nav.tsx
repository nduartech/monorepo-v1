import {
  Show,
  For,
  on,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import '../../index.css';
import NavButton from "./NavButton";

function Nav(props:any) {
  const [isClosed, setIsClosed] = createSignal(true);

  const onUpdateFn_0_isClosed__ = createMemo(() => isClosed());
  function onUpdateFn_0() {
    if (isClosed() || !isClosed()) {
      setTimeout(() => {
        document
          .querySelectorAll("svg.nav")
          .forEach((svg) => svg.classList.add("active"));
      }, 300);
      setTimeout(() => {
        document
          .querySelectorAll("p.navIconLabel")
          .forEach((svg) => svg.classList.add("active"));
      }, 300);
    }
  }
  createEffect(on(() => [onUpdateFn_0_isClosed__()], onUpdateFn_0));

  return (
    <div class="flex flex-row md:flex-col items-start justify-start w-full h-fit absolute p-1.5">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv mt-0.5 ml-0.5 lg:mt-2 lg:ml-2">
        <Show when={isClosed()}>
          <NavButton
            icon="<svg class='nav w-6 h-6' stroke-width='1.2' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='2.55 4.55 18.9 14.9'><path d='M3 5H21' stroke='#ddf2ff' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-1'></path><path d='M3 12H21' stroke='#ddf2ff' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-2'></path><path d='M3 19H21' stroke='#ddf2ff' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-3'></path></svg>"
            label="Menu"
            onClick={() => {
              document
                .querySelectorAll("svg.nav")
                .forEach((svg) => svg.classList.remove("active"));
              document
                .querySelectorAll("p.navIconLabel")
                .forEach((svg) => svg.classList.remove("active"));
              setTimeout(function () {
                setIsClosed(false);
                let navClosed = new Event("navClosed");
                let navOpened = new Event("navOpened");
                if (!isClosed()) {
                  document.dispatchEvent(navOpened);
                }
                if (isClosed()) {
                  document.dispatchEvent(navClosed);
                }
              }, 300);
            }}
          ></NavButton>
        </Show>
        <ul class="flex flex-row lg:flex-col items-center justify-center w-fit h-fit space-y-0 md:landscape:space-y-4 lg:space-y-4 space-x-5 md:landscape:space-x-0 lg:space-x-0 list-none">
          <Show when={!isClosed()}>
            <NavButton
              icon="<svg class='nav w-4 h-4 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'><path d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426' stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-4'></path></svg>"
              label="Close"
              onClick={() => {
                document
                  .querySelectorAll("svg.nav")
                  .forEach((svg) => svg.classList.remove("active"));
                document
                  .querySelectorAll("p.navIconLabel")
                  .forEach((svg) => svg.classList.remove("active"));
                setTimeout(function () {
                  setIsClosed(true);
                  let navClosed = new Event("navClosed");
                  let navOpened = new Event("navOpened");
                  if (!isClosed()) {
                    document.dispatchEvent(navOpened);
                  }
                  if (isClosed()) {
                    document.dispatchEvent(navClosed);
                  }
                }, 300);
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
