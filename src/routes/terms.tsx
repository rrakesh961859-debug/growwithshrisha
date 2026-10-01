import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | Shirisha Karnati" },
    { name: "description", content: "Terms for Shirisha Karnati's live 1-on-1 mentorship programs." },
    { property: "og:title", content: "Terms & Conditions | Shirisha Karnati" },
    { property: "og:description", content: "Terms for Shirisha Karnati's live 1-on-1 mentorship programs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <LegalPage title="Terms & Conditions" intro="Please review these terms before joining a mentorship program." items={[
    "The Basic and Pro offers are live 1-on-1 mentorship programs, not pre-recorded courses.",
    "Mentorship provides education and guidance. Results are not guaranteed and depend on individual effort, skills, consistency, market conditions and other factors.",
    "Program details, scheduling and payment instructions should be confirmed directly through the official Instagram account before payment.",
  ]} />,
});