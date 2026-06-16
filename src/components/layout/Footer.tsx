import { SITE_CONFIG } from "@/lib/constants";
import { Code2, Link, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#020010]">
      <div className="container-custom section-padding !py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-sm font-bold text-white">
                MK
              </div>
              <span className="font-semibold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "Projects", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-zinc-500 hover:text-violet-400 text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/30 transition-all" aria-label="LinkedIn">
                <Link size={18} />
              </a>
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/30 transition-all" aria-label="GitHub">
                <Code2 size={18} />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/30 transition-all" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/30 transition-all" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Built with Next.js, TypeScript & AI
          </p>
        </div>
      </div>
    </footer>
  );
}
