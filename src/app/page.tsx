import { api, HydrateClient } from "~/trpc/server";
import {
  AboutMe,
  Contact,
  Experience,
  Introduction,
  Services,
} from "./_components";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <Introduction />
        <div className="container">
          <AboutMe />
          <Experience />
          <Services />
          <Contact />
        </div>
      </main>
    </HydrateClient>
  );
}
