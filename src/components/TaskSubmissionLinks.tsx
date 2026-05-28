"use client";

import { Github, ExternalLink, Link2, Check } from "lucide-react";
import { useProjectLinks, isValidUrl } from "@/hooks/useProjectLinks";

type TaskSubmissionLinksProps = {
  projectId: number;
  taskNumber: number;
};

function LinkField({
  id,
  label,
  placeholder,
  value,
  onChange,
  icon: Icon,
  accent = "neutral",
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: typeof Github;
  accent?: "github" | "vercel" | "neutral";
}) {
  const valid = isValidUrl(value);
  const accentStyles = {
    github: "focus:border-white/20 focus:ring-white/10",
    vercel: "focus:border-[#00838d]/50 focus:ring-[#00838d]/20",
    neutral: "focus:border-white/20 focus:ring-white/10",
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
        <Icon className="w-3.5 h-3.5 shrink-0" />
        {label}
      </label>
      <div className="flex gap-2">
        <div className="relative flex-1 min-w-0">
          <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
          <input
            id={id}
            type="url"
            inputMode="url"
            autoComplete="off"
            spellCheck={false}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full pl-9 pr-9 py-2.5 text-xs font-medium text-white placeholder:text-gray-600 bg-black/30 border border-white/10 rounded-xl outline-none transition-all focus:ring-2 ${accentStyles[accent]}`}
          />
          {valid && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#00f2fe]" aria-hidden />
          )}
        </div>
        <a
          href={valid ? value.trim() : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!valid}
          tabIndex={valid ? 0 : -1}
          onClick={(e) => !valid && e.preventDefault()}
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border transition-all ${
            valid
              ? "bg-[#00838d]/15 border-[#00838d]/30 text-[#00f2fe] hover:bg-[#00838d]/25 hover:scale-105"
              : "bg-white/[0.02] border-white/5 text-gray-600 cursor-not-allowed pointer-events-none"
          }`}
          title={valid ? "Open link" : "Enter a valid URL first"}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function TaskSubmissionLinks({ projectId, taskNumber }: TaskSubmissionLinksProps) {
  const { links, updateLinks, hydrated } = useProjectLinks(projectId);

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
    <div className="pt-6 border-t border-white/5 space-y-4 relative z-10">
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
        placeholder="https://github.com/username/your-repo"
        value={links.githubUrl}
        onChange={(githubUrl) => updateLinks({ githubUrl })}
        icon={Github}
        accent="github"
      />

      <LinkField
        id={`vercel-${projectId}`}
        label="Vercel Deploy"
        placeholder="https://your-project.vercel.app"
        value={links.vercelUrl}
        onChange={(vercelUrl) => updateLinks({ vercelUrl })}
        icon={ExternalLink}
        accent="vercel"
      />

      <p className="text-[9px] text-gray-600 font-medium leading-relaxed">
        Links save automatically in your browser. Paste your repo and live demo URLs when ready.
      </p>
    </div>
  );
}
