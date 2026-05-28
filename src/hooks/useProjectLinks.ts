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

export function isValidUrl(value: string): boolean {
  if (!value.trim()) return false;
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
