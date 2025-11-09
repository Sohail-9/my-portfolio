import { about } from "@/lib/content";
import { Section } from "./section";

export function About() {
  return <Section id="about" title="About Me" intro={about.body} />;
}
