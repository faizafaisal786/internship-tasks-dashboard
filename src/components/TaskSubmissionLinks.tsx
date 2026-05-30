"use client";

import { Github, ExternalLink, Link2, Check, Lock } from "lucide-react";
import {
  useProjectLinks,
  isValidUrl,
  normalizeUrl,
  openExternalUrl,
} from "@/hooks/useProjectLinks";

type TaskSubmissionLinksProps = {
  projectId: number;
  taskNumber: number;
};

function LinkField({
  id,
  label,
  value,
  locked,
  onChange,
  onOpen,
  icon: Icon,
  accent = "neutral",
}: {
  id: string;
  label: string;
  value: string;
  locked: boolean;
  onChange: (value: string) => void;
  onOpen: () => void;
  icon: typeof Github;
  accent?: "github" | "vercel" | "neutral";
}) {
  const href = normalizeUrl(value);
  const valid = href !== null;
  const accentStyles = {
    github: "focus:border-white/20 focus:ring-white/10",
    vercel: "focus:border-[#00838d]/50 focus:ring-[#00838d]/20",
    neutral: "focus:border-white/20 focus:ring-white/10",
  };

  const handleBlur = () => {
    if (locked || !href || href === value.trim()) return;
    onChange(href);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor={locked ? undefined : id}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"
        >
          <Icon className="w-3.5 h-3.5 shrink-0" />
          {label}
        </label>
        {locked && (
          <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#00f2fe]/80">
            <Lock className="w-3 h-3" />
            Locked
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <div className="relative flex-1 min-w-0">
          <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
          {locked ? (
            <div
              id={id}
              className="w-full pl-9 pr-9 py-2.5 text-xs font-medium text-gray-300 bg-black/20 border border-[#00838d]/20 rounded-xl truncate select-all"
              title={value}
            >
              {value}
            </div>
          ) : (
            <input
              id={id}
              type="text"
              inputMode="url"
              autoComplete="off"
              spellCheck={false}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter" && valid) {
                  e.preventDefault();
                  onOpen();
                }
              }}
              placeholder="Paste your link here..."
              className={`w-full pl-9 pr-9 py-2.5 text-xs font-medium text-white placeholder:text-gray-600 bg-black/30 border border-white/10 rounded-xl outline-none transition-all focus:ring-2 ${accentStyles[accent]}`}
            />
          )}
          {valid && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#00f2fe]" aria-hidden />
          )}
        </div>
        {valid && href ? (
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
        ) : (
          <span
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border bg-white/[0.02] border-white/5 text-gray-600 opacity-50 cursor-not-allowed"
            aria-hidden
          >
            <ExternalLink className="w-4 h-4" />
          </span>
        )}
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
    >
      <Icon className="w-4 h-4 shrink-0" />
      {label}
    </a>
  );
}

export default function TaskSubmissionLinks({ projectId, taskNumber }: TaskSubmissionLinksProps) {
  const { links, updateLinks, hydrated } = useProjectLinks(projectId);

  const githubHref = normalizeUrl(links.githubUrl);
  const vercelHref = normalizeUrl(links.vercelUrl);
  const allLocked = links.githubLocked && links.vercelLocked;

  if (!hydrated) {
    return (
      <div className="pt-6 border-t border-white/5 space-y-4">
        <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
        <div className="h-10 bg-white/5 rounded-xl animate-pulse" />
        <div className="h-10 bg-white/5 rounded-xl animate-pulse" />
      </div>
    );
  }

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

      <LinkField
        id={`github-${projectId}`}
        label="GitHub Repository"
        value={links.githubUrl}
        locked={!!links.githubLocked}
        onChange={(githubUrl) => updateLinks({ githubUrl })}
        onOpen={() => openExternalUrl(links.githubUrl)}
        icon={Github}
        accent="github"
      />

      <LinkField
        id={`vercel-${projectId}`}
        label="Vercel Deploy"
        value={links.vercelUrl}
        locked={!!links.vercelLocked}
        onChange={(vercelUrl) => updateLinks({ vercelUrl })}
        onOpen={() => openExternalUrl(links.vercelUrl)}
        icon={ExternalLink}
        accent="vercel"
      />

      <div className="grid grid-cols-2 gap-3 pt-1">
        {githubHref ? (
          <OpenButton href={githubHref} label="GitHub" icon={Github} variant="github" />
        ) : (
          <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 text-gray-600 opacity-50 cursor-not-allowed">
            <Github className="w-4 h-4" />
            GitHub
          </span>
        )}
        {vercelHref ? (
          <OpenButton href={vercelHref} label="Vercel" icon={ExternalLink} variant="vercel" />
        ) : (
          <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest bg-[#00838d]/20 text-gray-500 opacity-50 cursor-not-allowed">
            <ExternalLink className="w-4 h-4" />
            Vercel
          </span>
        )}
      </div>

      <p className="text-[9px] text-gray-600 font-medium leading-relaxed">
        {allLocked
          ? "Links are locked. Click GitHub or Vercel to open in a new tab."
          : "Valid links lock automatically and cannot be removed."}
      </p>
    </div>
  );
}
