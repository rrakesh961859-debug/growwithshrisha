import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({ meta: [
    { title: "Refund Policy | Shirisha Karnati" },
    { name: "description", content: "No-refunds policy for Shirisha Karnati's mentorship programs." },
    { property: "og:title", content: "Refund Policy | Shirisha Karnati" },
    { property: "og:description", content: "No-refunds policy for Shirisha Karnati's mentorship programs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <LegalPage title="Refund Policy" intro="All mentorship plan purchases are final and non-refundable." items={[
    "We do not offer refunds on any mentorship plan after a purchase has been made.",
    "This no-refunds policy applies to every plan, including Basic Mentorship and Pro Mentorship.",
    "Please review the plan details carefully and ask any questions about the program, scheduling or suitability before making your payment.",
    "By purchasing a mentorship plan, you acknowledge and agree that the payment is final and cannot be refunded.",
  ]} />,
});