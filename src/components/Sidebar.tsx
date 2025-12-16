import Link from "next/link";

type SidebarKey =
  | "dashboard"
  | "start-live"
  | "monetization"
  | "reviews"
  | "notification"
  | "settings";

type SidebarProps = {
  active: SidebarKey;
};

const navItems: { key: SidebarKey; label: string; href: string }[] = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  { key: "start-live", label: "Start Live", href: "/start-live" },
  { key: "monetization", label: "Monetization", href: "#" },
  { key: "reviews", label: "Reviews", href: "#" },
  { key: "notification", label: "Notification", href: "#" },
  { key: "settings", label: "Settings", href: "#" },
];

export default function Sidebar({ active }: SidebarProps) {
  return (
    <aside className="sidebar-card">
      <div className="sidebar-main">
        <div className="sidebar-title">Dashboard</div>
        <nav className="nav-list">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href}>
              <div
                className={`nav-item ${active === item.key ? "active" : ""}`}
                aria-current={active === item.key ? "page" : undefined}
              >
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div className="upgrade-card">
        <div>Upgrade to make as many videos as you like.</div>
        <button className="upgrade-btn">Upgrade now</button>
      </div>

      <div className="theme-toggle">
        <span>Dark / Light</span>
        <div className="theme-icons" aria-hidden>
          <div className="theme-dot" />
          <div className="theme-dot light" />
        </div>
      </div>
    </aside>
  );
}

export type { SidebarKey };

