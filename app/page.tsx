import Image from "next/image";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto p-20 border border-white">
      <section className="flex flex-col gap-10">
        <h2 className="text-4xl">View My Work</h2>
        <Projects />
      </section>
    </main>
  );
}
