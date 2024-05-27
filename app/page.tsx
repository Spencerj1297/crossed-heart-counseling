import { Intro } from "./components/Intro";
import { MeetLaura } from "./components/MeetLaura";
import { Testimonials } from "./components/Testimonials";
import { Articles } from "./components/Articles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
      <MeetLaura />
      <Testimonials />
      <Articles />
    </main>
  );
}
