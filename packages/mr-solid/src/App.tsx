import type { Component } from 'solid-js';
import './index.css'

const App: Component = () => {
  return (
    <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <h2 class="text-5xl mb-3 text-black">Sample App</h2>
      <p class="text-black">Build on this...</p>
      <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Learn More
      </button>
    </div>
  );
};

export default App;
