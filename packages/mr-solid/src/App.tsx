import { Component } from "solid-js";
import "./index.css";
import Nav from "./components/Nav";

const App: Component = (props: any) => {


  const nav = () => [
    {
      icon: "home",
      label: "Home",
      path: "home"
    }
  ];


  return (
    <div class={String(window.localStorage && window.localStorage.getItem("theme")?window.localStorage.getItem("theme"):document.documentElement.dataset.theme)}>
      <div class="h-screen w-screen bg-regal-blue-400 dark:bg-regal-blue-950">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-col justify-center items-center h-screen w-screen">
          <div class="flex flex-col justify-center items-center">
          <h2 class="text-5xl text-white dark:text-white">Sample App</h2>
          <p class="text-white dark:text-white mt-5 mb-2">Build on this...</p>
          <button class="flex flex-row space-x-2 items-center justify-center bg-regal-blue-600 hover:bg-regal-blue-500 dark:bg-regal-blue-800 dark:hover:bg-regal-blue-900 w-full py-2 px-2 text-sm font-medium text-regal-blue-50 dark:text-regal-blue-50 border border-transparent rounded-lg focus:outline-none hover:outline hover:outline-1 hover:outline-offset-1 hover:outline-regal-blue-200">Learn
            More
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
