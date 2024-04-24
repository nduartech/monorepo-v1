import { Component, splitProps } from "solid-js";
import "./index.css";
import Nav from "./components/Nav";

const App: Component = (props: any) => {

  const [dark, restProps] = splitProps(props, ["dark"]);

  const nav = () => [
    {
      icon: "home",
      label: "Home"
    }
  ];

  // console.log(nav);

  return (
    <div>
      <Nav navItems={nav()}></Nav>
      <div class="h-screen w-screen flex flex-col justify-center items-center bg-regal-blue-200 dark:bg-regal-blue-950">
        <h2 class="text-5xl text-black dark:text-white">Sample App</h2>
        <p class="text-black dark:text-white mt-5 mb-2">Build on this...</p>
        <button class="bg-regal-blue-800 text-white hover:bg-regal-blue-500 font-bold py-2 px-4 mt-3 rounded">Learn More
        </button>
      </div>
    </div>
  );
};

export default App;
