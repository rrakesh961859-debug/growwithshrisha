import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function LegalPage({ title, intro, items }: { title: string; intro: string; items: string[] }) {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to home</Link>
        <p className="eyebrow">SHIRISHA KARNATI</p>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        <div className="legal-copy">
          {items.map((item) => <p key={item}>{item}</p>)}
        </div>
        <p className="legal-note">For questions, please contact Shirisha through Instagram before joining.</p>
      </div>
    </main>
  );
}