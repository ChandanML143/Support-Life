import type { ReactNode } from "react";
import Sidebar, { type SidebarKey } from "./Sidebar";

type DashboardShellProps = {
  active: SidebarKey;
  children: ReactNode;
};

export default function DashboardShell({ active, children }: DashboardShellProps) {
  return (
    <div className="page-shell">
      <div className="dashboard-shell">
        <Sidebar active={active} />
        <div className="dashboard-main">
          <div className="topbar">
            <div className="user-badge">
              <div className="avatar">DN</div>
              <div>
                <div className="user-name">Dr. Mamadhan Naros</div>
                <div className="user-role">Doctor</div>
              </div>
              <span className="verified" aria-label="verified" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

