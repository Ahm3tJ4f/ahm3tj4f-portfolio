import Link from "next/link";
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
          Currently, I&apos;m the Leading Frontend Developer at{" "}
          <ExternalLink href={ExternalLinks.FerrumCapital}>
            Ferrum Capital
          </ExternalLink>
          , where I oversee the maintenance and development of internal frontend
          projects.
          {/* TODO: Add more details about the projects */} I also led the
          development of two mobile applications focused on credit loans and
          business operations.
        </p>

        <p>
          In my spare time, I&apos;m usually hanging out with my cat,{" "}
          <ExternalLink href={ExternalLinks.TikTokGuitar}>
            playing guitar
          </ExternalLink>{" "}
          (my neighbors definitely love it), training Brazilian Jiu-Jitsu (blue
          belt btw), and adding books to my{" "}
          <ExternalLink href={ExternalLinks.Goodreads}>Goodreads</ExternalLink>{" "}
          &quot;to-read&quot; list to pretend I&apos;m actually going to read
          them.
        </p>
      </div>

      <div className="flex flex-col gap-2 ">
        <AsciiWave />
        <p className=" text-xs text-muted-foreground text-center font-mono">
          (Here&apos;s a fun ASCII wave I made for you. You&apos;re welcome.{" "}
          <Link
            href="/blogs"
            className="font-medium text-brand-orange hover:underline underline-offset-4 decoration-brand-orange transition-opacity"
          >
            Learn how I made it
          </Link>
          )
        </p>
      </div>

      <div className="space-y-5 md:space-y-6">
        <h2 className="halftone-accent halftone-approach inline-block text-4xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8">
          Approach
        </h2>

        <p>
          I&apos;m lowkey obsessed with understanding how things work under the
          hood. It comes from a genuine curiosity to understand the background.
          In high school, I found that when I took the time to learn the proof
          and intuition behind formulas, I became significantly better at
          implementing the solutions, not to mention acing the exams (thanks to{" "}
          <ExternalLink href={ExternalLinks.ThreeBlueOneBrown}>
            3Blue1Brown
          </ExternalLink>
          ).
          <br />
          <br />
          However, I&apos;m realistic. I know I can&apos;t learn the backstage
          of everything. Sometimes I have to be satisfied with the abstraction,
          otherwise I&apos;d never deliver a project considering what a rabbit
          hole the development ecosystem is.
        </p>

        <p>
          I really believe that I think differently when it comes to solving
          problems. I manage stress well and focus on dividing tasks effectively
          within the team. I always aim to follow best principles and never want
          to compromise on quality. Whether it&apos;s diving into a new
          technology or tackling a stubborn bug, I tend to get consumed by the
          challenge until I figure it out. I&apos;m not just looking for a quick
          fix - I want to understand the <em>why</em> behind it
        </p>

        <p>
          Once I have a working solution, I care a lot about how it lives on. I
          always try to refactor and simplify the code so that my teammates (and
          my future self) can work with it easily, without needing to dig into
          the complexity I wrestled with. For me, solving the problem is step
          one; making the solution maintainable is what actually counts. I
          believe this mindset is what makes me a truly effective problem
          solver.
        </p>
      </div>
    </div>
  );
}
