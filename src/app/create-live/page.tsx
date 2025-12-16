import DashboardShell from "@/components/DashboardShell";

export default function CreateLivePage() {
  return (
    <DashboardShell active="start-live">
      <div className="create-live-backdrop" />

      <div className="create-live-modal">
        <div className="create-form-card">
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
                defaultValue="Basic Life Support"
              />
            </div>
            <div className="form-field">
              <label htmlFor="instructor">Instructor</label>
              <input
                id="instructor"
                type="text"
                className="text-input"
                placeholder="Manamadhan"
                defaultValue="Manamadhan"
              />
            </div>
            <div className="form-field">
              <label htmlFor="startTime">Live Start Time</label>
              <input
                id="startTime"
                type="text"
                className="text-input"
                placeholder="10:00:00 AM"
                defaultValue="10:00:00 AM"
              />
            </div>
            <div className="form-field">
              <label htmlFor="endTime">Live End Time</label>
              <input
                id="endTime"
                type="text"
                className="text-input"
                placeholder="11:30:00 AM"
                defaultValue="11:30:00 AM"
              />
            </div>
          </div>

          <div className="form-field">
            <label>Upload Image</label>
            <div className="upload-box">Upload Image</div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="primary-btn" style={{ width: 220 }} type="button">
              Start the live
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

