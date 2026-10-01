import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | Shirisha Karnati" },
    { name: "description", content: "Privacy information for Shirisha Karnati's mentorship website." },
    { property: "og:title", content: "Privacy Policy | Shirisha Karnati" },
    { property: "og:description", content: "Privacy information for Shirisha Karnati's mentorship website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <LegalPage title="Privacy Policy" intro="This page explains the limited information involved when you contact Shirisha." items={[
    "This website does not include an account system or collect payment details directly.",
    "When you choose to contact Shirisha through Instagram, your communication is also subject to Instagram's privacy terms.",
    "Do not send sensitive personal or financial information through direct messages unless it is clearly required and you trust the recipient.",
  ]} />,
});