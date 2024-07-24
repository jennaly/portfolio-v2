import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Work from "./components/Sections/Work";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto p-10 flex flex-col gap-20">
      <Work />
      <About />
      <Experience />
    </main>
  );
}
