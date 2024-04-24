import { Component, splitProps } from "solid-js";
import "./index.css";

const App: Component = (props: any) => {

  const [dark, restProps] = splitProps(props, ["dark"]);

  return (
      <div class="h-screen w-screen flex flex-col justify-center items-center dark:bg-black">
        <h2 class="text-5xl text-black dark:text-white">Sample App</h2>
        <p class="text-black dark:text-white">Build on this...</p>
        <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Learn More
        </button>
      </div>
  );
};

export default App;
