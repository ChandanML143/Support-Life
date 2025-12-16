import Image from "next/image";
import Link from "next/link";
import DashboardShell from "@/components/DashboardShell";

const lessons = [
  {
    title: "Pediatrics & Child Health",
    description:
      "Cover newborn care, childhood illnesses, growth monitoring, and pediatric emergency management.",
  },
  {
    title: "Clinical Research & Medical Ethics",
    description:
      "Explore principles of clinical trials, research methodologies, and ethical considerations in medicine.",
  },
  {
    title: "Emergency & Critical Care Medicine",
    description:
      "Master life-saving procedures, trauma management, and emergency protocols for cardiac arrest, stroke, and sepsis.",
  },
  {
    title: "Radiology & Imaging Techniques",
    description:
      "Learn the principles of X-ray, CT scans, MRIs, and ultrasound in disease diagnosis.",
  },
];

export default function DashboardPage() {
  return (
    <DashboardShell active="dashboard">
      <div className="hero-card">
        <div className="hero-text">
          <span className="hero-kicker">Upcoming Live Class</span>
          <h2 className="hero-title">
            Real-Time Surgical Annotations Heart Surgery
          </h2>
          <p className="hero-sub">
            Join this crucial heart surgery class and take a significant step in
            your medical career. Gain invaluable insights from experts—don’t miss
            this opportunity.
          </p>
          <div className="hero-actions">
            <Link href="/start-live">
              <button className="primary-btn" type="button">
                Start the class
              </button>
            </Link>
            <button className="secondary-btn" type="button">
              Schedule the class
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
            alt="Surgeon illustration"
            width={435}
            height={303}
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      <div className="grid-panels">
        <section className="lessons-card">
          <h3 className="section-title">Active Lesson</h3>
          {lessons.map((lesson) => (
            <div key={lesson.title} className="lesson-item">
              <h4>{lesson.title}</h4>
              <p>{lesson.description}</p>
            </div>
          ))}
        </section>

        <section className="analytics-card">
          <h3 className="section-title">Student Analytics</h3>
          <div className="pie" aria-hidden />
          <div className="stat-value">250 Peoples</div>
          <div className="stats-row">
            <div className="stat male">
              <div className="stat-value">100</div>
              <span>Male</span>
            </div>
            <div className="stat female">
              <div className="stat-value">150</div>
              <span>Female</span>
            </div>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}

