import { Github, ExternalLink, Link2, Lock } from "lucide-react";
import { normalizeUrl } from "@/lib/urls";

type TaskSubmissionLinksProps = {
  taskNumber: number;
  githubUrl: string;
  vercelUrl: string;
};

function LinkDisplay({
  id,
  label,
  url,
  icon: Icon,
}: {
  id: string;
  label: string;
  url: string;
  icon: typeof Github;
}) {
  const href = normalizeUrl(url);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <Icon className="w-3.5 h-3.5 shrink-0" />
          {label}
        </span>
        <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#00f2fe]/80">
          <Lock className="w-3 h-3" />
          Live
        </span>
      </div>
      <div className="flex gap-2">
        <div className="relative flex-1 min-w-0">
          <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
          <div
            id={id}
            className="w-full pl-9 pr-3 py-2.5 text-xs font-medium text-gray-300 bg-black/20 border border-[#00838d]/20 rounded-xl truncate"
            title={url}
          >
            {url.replace(/^https?:\/\//, "")}
          </div>
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border bg-[#00838d]/15 border-[#00838d]/30 text-[#00f2fe] hover:bg-[#00838d]/25 hover:scale-105 transition-all"
            title={`Open ${label}`}
            aria-label={`Open ${label}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function OpenButton({
  href,
  label,
  icon: Icon,
  variant,
}: {
  href: string;
  label: string;
  icon: typeof Github;
  variant: "github" | "vercel";
}) {
  const base =
    "flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all";
  const styles =
    variant === "github"
      ? `${base} glass border-white/10 text-gray-300 hover:text-white hover:bg-white/5`
      : `${base} bg-[#00838d] text-white shadow-lg shadow-[#00838d]/20 hover:bg-[#007b85]`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
      <Icon className="w-4 h-4 shrink-0" />
      {label}
    </a>
  );
}

export default function TaskSubmissionLinks({
  taskNumber,
  githubUrl,
  vercelUrl,
}: TaskSubmissionLinksProps) {
  const githubHref = normalizeUrl(githubUrl);
  const vercelHref = normalizeUrl(vercelUrl);

  return (
    <div className="pt-6 border-t border-white/5 space-y-4 relative z-20">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00838d]">
          Submission Links
        </p>
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-white/5 text-gray-500 border border-white/5">
          Task {taskNumber}
        </span>
      </div>

      <LinkDisplay
        id={`github-${taskNumber}`}
        label="GitHub Repository"
        url={githubUrl}
        icon={Github}
      />

      <LinkDisplay
        id={`vercel-${taskNumber}`}
        label="Vercel Deploy"
        url={vercelUrl}
        icon={ExternalLink}
      />

      <div className="grid grid-cols-2 gap-3 pt-1">
        {githubHref ? (
          <OpenButton href={githubHref} label="GitHub" icon={Github} variant="github" />
        ) : (
          <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 text-gray-600 opacity-50">
            <Github className="w-4 h-4" />
            GitHub
          </span>
        )}
        {vercelHref ? (
          <OpenButton href={vercelHref} label="Vercel" icon={ExternalLink} variant="vercel" />
        ) : (
          <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest bg-[#00838d]/20 text-gray-500 opacity-50">
            <ExternalLink className="w-4 h-4" />
            Vercel
          </span>
        )}
      </div>

      <p className="text-[9px] text-gray-600 font-medium leading-relaxed">
        Links are saved in the project and work for all visitors. Click GitHub or Vercel to open.
      </p>
    </div>
  );
}
