"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "internship-project-links";

export type ProjectLinks = {
  githubUrl: string;
  vercelUrl: string;
  githubLocked?: boolean;
  vercelLocked?: boolean;
};

type AllProjectLinks = Record<number, ProjectLinks>;

function readAllLinks(): AllProjectLinks {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AllProjectLinks) : {};
  } catch {
    return {};
  }
}

function writeAllLinks(links: AllProjectLinks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function withAutoLock(links: ProjectLinks): ProjectLinks {
  const githubUrl = links.githubUrl.trim();
  const vercelUrl = links.vercelUrl.trim();
  return {
    ...links,
    githubUrl,
    vercelUrl,
    githubLocked: links.githubLocked || isValidUrl(githubUrl),
    vercelLocked: links.vercelLocked || isValidUrl(vercelUrl),
  };
}

export function useProjectLinks(projectId: number) {
  const [links, setLinks] = useState<ProjectLinks>({
    githubUrl: "",
    vercelUrl: "",
    githubLocked: false,
    vercelLocked: false,
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = readAllLinks()[projectId];
    if (!saved) {
      setHydrated(true);
      return;
    }

    const next = withAutoLock(saved);
    const all = readAllLinks();
    const changed =
      next.githubLocked !== saved.githubLocked ||
      next.vercelLocked !== saved.vercelLocked;

    if (changed) {
      all[projectId] = next;
      writeAllLinks(all);
    }

    setLinks(next);
    setHydrated(true);
  }, [projectId]);

  const updateLinks = useCallback(
    (partial: Partial<ProjectLinks>) => {
      setLinks((prev) => {
        const next: ProjectLinks = { ...prev };

        if (partial.githubUrl !== undefined && !prev.githubLocked) {
          next.githubUrl = partial.githubUrl;
        }
        if (partial.vercelUrl !== undefined && !prev.vercelLocked) {
          next.vercelUrl = partial.vercelUrl;
        }

        const locked = withAutoLock(next);
        const all = readAllLinks();
        all[projectId] = locked;
        writeAllLinks(all);
        return locked;
      });
    },
    [projectId]
  );

  return { links, updateLinks, hydrated };
}

/** Accepts URLs with or without https:// and returns a safe href, or null. */
export function normalizeUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.href;
  } catch {
    return null;
  }
}

export function isValidUrl(value: string): boolean {
  return normalizeUrl(value) !== null;
}

export function openExternalUrl(value: string) {
  const href = normalizeUrl(value);
  if (!href) return;
  const opened = window.open(href, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.assign(href);
  }
}
