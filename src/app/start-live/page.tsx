"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import DashboardShell from "@/components/DashboardShell";

type LiveSession = {
  id: string;
  title: string;
  instructor: string;
  status: string;
  image: string;
};

const defaultSessions: LiveSession[] = [
  {
    id: "default-1",
    title: "Basic Life Safety Support - 01",
    instructor: "Naros",
    status: "Joined peoples: 0",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "default-2",
    title: "Fire Safety Support - 05",
    instructor: "Anusha",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "default-3",
    title: "Basic Life Safety Support - 03",
    instructor: "Arun",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "default-4",
    title: "Basic Life Safety Support - 02",
    instructor: "Arafa",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "default-5",
    title: "Basic Life Safety Support - 04",
    instructor: "Sujan",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

const STORAGE_KEY = "lsl-live-sessions";

export default function StartLivePage() {
  const [customSessions, setCustomSessions] = useState<LiveSession[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Partial<LiveSession>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCustomSessions(JSON.parse(stored) as LiveSession[]);
      } catch (e) {
        console.error("Failed to parse sessions", e);
      }
    }
  }, []);

  const sessions = useMemo(
    () => [...defaultSessions, ...customSessions],
    [customSessions],
  );

  const persist = (next: LiveSession[]) =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

  const handleDelete = (id: string) => {
    const next = customSessions.filter((s) => s.id !== id);
    setCustomSessions(next);
    persist(next);
  };

  const handleStart = (id: string) => {
    const updateStatus = (list: LiveSession[]) =>
      list.map((s) => (s.id === id ? { ...s, status: "Live started" } : s));

    defaultSessions.splice(0, defaultSessions.length, ...updateStatus(defaultSessions));
    const updatedCustom = updateStatus(customSessions);
    setCustomSessions(updatedCustom);
    persist(updatedCustom);
  };

  const handleEdit = (session: LiveSession) => {
    if (!session.id.startsWith("custom-")) return;
    setEditingId(session.id);
    setDraft({
      title: session.title,
      instructor: session.instructor,
      status: session.status,
      image: session.image,
    });
  };

  const handleEditChange = (key: keyof LiveSession, value: string) => {
    setDraft((d) => ({ ...d, [key]: value }));
  };

  const handleSave = () => {
    if (!editingId) return;
    const next = customSessions.map((s) =>
      s.id === editingId
        ? {
            ...s,
            title: draft.title || s.title,
            instructor: draft.instructor || s.instructor,
            status: draft.status || s.status,
            image: draft.image || s.image,
          }
        : s,
    );
    setCustomSessions(next);
    persist(next);
    setEditingId(null);
    setDraft({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setDraft({});
  };

  return (
    <DashboardShell active="start-live">
      <h1 className="auth-heading" style={{ marginBottom: 10 }}>
        Start Live
      </h1>
      <div className="live-grid">
        {sessions.map((session) => {
          const isCustom = session.id.startsWith("custom-");
          const isEditing = editingId === session.id;
          return (
            <div key={session.id} className="live-card">
              <div
                className="bg"
                style={{ backgroundImage: `url(${session.image})` }}
                aria-hidden
              />
              <div className="content">
                {isEditing ? (
                  <div className="live-edit">
                    <input
                      className="text-input compact"
                      value={draft.title ?? ""}
                      onChange={(e) => handleEditChange("title", e.target.value)}
                      placeholder="Title"
                    />
                    <input
                      className="text-input compact"
                      value={draft.instructor ?? ""}
                      onChange={(e) => handleEditChange("instructor", e.target.value)}
                      placeholder="Instructor"
                    />
                    <input
                      className="text-input compact"
                      value={draft.status ?? ""}
                      onChange={(e) => handleEditChange("status", e.target.value)}
                      placeholder="Status"
                    />
                    <input
                      className="text-input compact"
                      value={draft.image ?? ""}
                      onChange={(e) => handleEditChange("image", e.target.value)}
                      placeholder="Image URL"
                    />
                    <div className="live-actions">
                      <button
                        className="secondary-btn live-chip"
                        type="button"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="ghost-btn live-chip"
                        type="button"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4>{session.title}</h4>
                    <p>Instructor: {session.instructor}</p>
                    <p>{session.status}</p>
                    <div className="live-actions">
                      <button
                        className="secondary-btn live-chip"
                        type="button"
                        onClick={() => handleStart(session.id)}
                      >
                        Start
                      </button>
                      <button
                        className="ghost-btn live-chip"
                        type="button"
                        onClick={() => handleEdit(session)}
                        disabled={!isCustom}
                        title={
                          isCustom
                            ? "Edit this live"
                            : "Default lives cannot be edited"
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="ghost-btn live-chip danger"
                        type="button"
                        onClick={() => handleDelete(session.id)}
                        disabled={!isCustom}
                        title={
                          isCustom
                            ? "Delete this live"
                            : "Default lives cannot be deleted"
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <Link href="/create-live" className="create-card">
          Create New Live +
        </Link>
      </div>
    </DashboardShell>
  );
}

