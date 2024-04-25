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
    <div class="">
      <div class="h-screen w-screen bg-regal-blue-400 dark:bg-regal-blue-950">
        <Nav navItems={nav()}></Nav>
        <div class="page flex flex-col justify-center items-center h-screen w-screen">
          <h2 class="text-5xl text-black dark:text-white">Sample App</h2>
          <p class="text-black dark:text-white mt-5 mb-2">Build on this...</p>
          <button class="bg-regal-blue-800 text-white text-sm hover:bg-regal-blue-500 py-2 px-4 mt-3 rounded">Learn
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
