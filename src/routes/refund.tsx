import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({ meta: [
    { title: "Refund Policy | Shirisha Karnati" },
    { name: "description", content: "Refund information for Shirisha Karnati's mentorship programs." },
    { property: "og:title", content: "Refund Policy | Shirisha Karnati" },
    { property: "og:description", content: "Refund information for Shirisha Karnati's mentorship programs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <LegalPage title="Refund Policy" intro="Please confirm the applicable refund terms before making any payment." items={[
    "Refund eligibility and timelines must be confirmed directly with Shirisha before joining.",
    "Ask any questions about scheduling, program fit and what is included before you make a payment.",
    "Keep your payment confirmation and written program details for your records.",
  ]} />,
});