import { useState } from 'react';
import { BgAnim } from "./background-animation";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="flex justify-center items-center w-full h-full">
      <BgAnim />
      <h1 className="font-bold">Portfolio Daniel</h1>
    </main>
  )
};

export default App;
