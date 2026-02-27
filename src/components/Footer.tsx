import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-display)] text-gold text-lg tracking-[3px]">
              CAROLINE EDUARDO
            </p>
            <p className="text-text-muted text-sm italic mt-1">
              AI-Augmented Virtual Assistant
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-text-dim text-sm">
              &copy; {new Date().getFullYear()} Caroline Eduardo
            </p>
            <a
              href="#"
              className="w-10 h-10 border border-border flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
