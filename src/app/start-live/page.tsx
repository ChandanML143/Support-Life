import Link from "next/link";
import DashboardShell from "@/components/DashboardShell";

const sessions = [
  {
    title: "Basic Life Safety Support - 01",
    instructor: "Naros",
    status: "Joined peoples: 0",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fire Safety Support - 05",
    instructor: "Anusha",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Basic Life Safety Support - 03",
    instructor: "Arun",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Basic Life Safety Support - 02",
    instructor: "Arafa",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Basic Life Safety Support - 04",
    instructor: "Sujan",
    status: "Live not started",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function StartLivePage() {
  return (
    <DashboardShell active="start-live">
      <h1 className="auth-heading" style={{ marginBottom: 10 }}>
        Start Live
      </h1>
      <div className="live-grid">
        {sessions.map((session, idx) => (
          <div key={`${session.title}-${idx}`} className="live-card">
            <div
              className="bg"
              style={{ backgroundImage: `url(${session.image})` }}
              aria-hidden
            />
            <div className="overlay" aria-hidden />
            <div className="content">
              <h4>{session.title}</h4>
              <p>Instructor: {session.instructor}</p>
              <p>{session.status}</p>
            </div>
          </div>
        ))}

        <Link href="/create-live" className="create-card">
          Create New Live +
        </Link>
      </div>
    </DashboardShell>
  );
}

