import dayjs from "dayjs";
import { ExternalLinks } from "@/lib/constants";
import { ExternalLink } from "@/components/ui/external-link";
import { AsciiWave } from "@/components/ascii-wave";

export default function HomeComponent() {
  const yearsOfExperience = dayjs().year() - 2022;

  return (
    <div className="flex flex-col gap-16 md:gap-16">
      <div className="space-y-5 md:space-y-6">
        <h1 className="halftone-accent halftone-heading inline-block text-6xl md:text-7xl font-bold">
          Ahmad Jafarov
        </h1>
        <p>
          Hey there! I&apos;m Ahmad, a Software developer who&apos;s spent the
          last {yearsOfExperience} years getting unreasonably invested in web
          and mobile development with React.
        </p>

        <p>
          Currently, I&apos;m the Lead Frontend Developer at{" "}
          <ExternalLink href={ExternalLinks.FerrumCapital}>
            Ferrum Capital
          </ExternalLink>
          , working on internal systems like CRMs and ERP tools, and building
          public mobile apps for factoring and business operations, taking
          projects from architecture all the way through to delivery.
        </p>

        <p>
          In my spare time, I&apos;m usually hanging out with my cat,{" "}
          <ExternalLink href={ExternalLinks.TikTokGuitar}>
            playing guitar
          </ExternalLink>{" "}
          (my neighbors definitely love it), training Brazilian Jiu-Jitsu, and
          adding books to my{" "}
          <ExternalLink href={ExternalLinks.Goodreads}>Goodreads</ExternalLink>{" "}
          &quot;to-read&quot; list to pretend I&apos;m actually going to read
          them.
        </p>
      </div>

      <div className="flex flex-col gap-2 ">
        <AsciiWave />
        <p className=" text-xs text-muted-foreground text-center font-mono">
          (Here&apos;s a fun ASCII wave I made for you. You&apos;re welcome.)
        </p>
      </div>

      <div className="space-y-5 md:space-y-6">
        <h2 className="halftone-accent halftone-approach inline-block text-4xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8">
          Approach
        </h2>

        <p>
          I&apos;m lowkey obsessed with understanding how things work under the
          hood. It comes from a genuine curiosity to understand the background.
          In high school, I learned that grasping the intuition behind formulas
          (shoutout to{" "}
          <ExternalLink href={ExternalLinks.ThreeBlueOneBrown}>
            3Blue1Brown
          </ExternalLink>
          ) made me significantly better at implementation.
          <br />
          <br />
          However, I&apos;m realistic. I know I can&apos;t learn the backstage
          of everything. Sometimes I have to be satisfied with the abstraction,
          otherwise I&apos;d never deliver a project considering what a rabbit
          hole the software engineering is.
        </p>

        <p>
          I try to build tools that genuinely help people. I remember when I was
          an undergraduate student, I built a website that executed React code
          and let users take markdown notes (Jupyter Notebook–style). Seeing my
          friends actually use it to study and prepare for exams was one of my
          proudest moments at university. It showed me that technology is most
          meaningful when it makes someone’s life easier. Experiences like that
          also taught me how much perspective matters: it only takes one person
          struggling with an application to reveal the real-world importance of
          accessibility and usability. That’s why I invest deeply in building
          products that are both usable and inclusive, ensuring people of all
          abilities can benefit from the tools I create.
        </p>
      </div>
    </div>
  );
}
