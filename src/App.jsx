import { useState } from 'react';
import { BgAnim } from "./background-animation";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="flex justify-center items-center w-full h-full">
      <BgAnim />
      <Button className="font-bold">Portfolio Daniel</Button>
    </main>
  )
};

export default App;
