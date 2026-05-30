"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "internship-project-links";

export type ProjectLinks = {
  githubUrl: string;
  vercelUrl: string;
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

export function useProjectLinks(projectId: number) {
  const [links, setLinks] = useState<ProjectLinks>({ githubUrl: "", vercelUrl: "" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = readAllLinks()[projectId];
    setLinks({
      githubUrl: saved?.githubUrl ?? "",
      vercelUrl: saved?.vercelUrl ?? "",
    });
    setHydrated(true);
  }, [projectId]);

  const updateLinks = useCallback(
    (partial: Partial<ProjectLinks>) => {
      setLinks((prev) => {
        const next = { ...prev, ...partial };
        const all = readAllLinks();
        all[projectId] = next;
        writeAllLinks(all);
        return next;
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
  window.open(href, "_blank", "noopener,noreferrer");
}
