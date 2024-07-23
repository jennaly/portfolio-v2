import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto p-20 flex flex-col gap-20 border border-white">
      <Projects />
      <About />
    </main>
  );
}
