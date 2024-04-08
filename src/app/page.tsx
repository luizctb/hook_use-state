"use client"

import Status from "@/components/Status";


export default function Home() {
  return (
    <main className="bg-gray-400 text-black">
      <div className="flex justify-center items-center h-screen">
        <Status />
      </div>      
    </main>
  );
}