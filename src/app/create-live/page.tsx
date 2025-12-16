"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import DashboardShell from "@/components/DashboardShell";

const STORAGE_KEY = "lsl-live-sessions";

export default function CreateLivePage() {
  const router = useRouter();
  const [liveName, setLiveName] = useState("Basic Life Support");
  const [instructor, setInstructor] = useState("Manamadhan");
  const [startTime, setStartTime] = useState("10:00:00 AM");
  const [endTime, setEndTime] = useState("11:30:00 AM");
  const [imageData, setImageData] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextLive = {
      id: `custom-${Date.now()}`,
      title: liveName || "Untitled Live",
      instructor: instructor || "Instructor",
      status: "Live not started",
      image: imageData || "",
      startTime,
      endTime,
    };

    const stored =
      typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    const current = stored ? (JSON.parse(stored) as typeof nextLive[]) : [];
    const updated = [...current, nextLive];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    router.push("/start-live");
  };

  return (
    <DashboardShell active="start-live">
      <div className="create-live-backdrop" />

      <div className="create-live-modal">
        <form className="create-form-card" onSubmit={handleSubmit}>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Create New Live
          </h2>

          <div className="two-column-grid">
            <div className="form-field">
              <label htmlFor="liveName">Live Name</label>
              <input
                id="liveName"
                type="text"
                className="text-input"
                placeholder="Basic Life Support"
                value={liveName}
                onChange={(e) => setLiveName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="instructor">Instructor</label>
              <input
                id="instructor"
                type="text"
                className="text-input"
                placeholder="Manamadhan"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="startTime">Live Start Time</label>
              <input
                id="startTime"
                type="text"
                className="text-input"
                placeholder="10:00:00 AM"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="endTime">Live End Time</label>
              <input
                id="endTime"
                type="text"
                className="text-input"
                placeholder="11:30:00 AM"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="imageUpload">Upload Image</label>
            <label className="upload-box interactive" htmlFor="imageUpload">
              {imageData ? "Image selected" : "Click to upload"}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onloadend = () => {
                  const result = reader.result?.toString() || null;
                  setImageData(result);
                };
                reader.readAsDataURL(file);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="primary-btn" style={{ width: 220 }} type="submit">
              Start the live
            </button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}

