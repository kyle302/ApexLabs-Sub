// app/dashboard/dashboardLayout.tsx
import s from './dashboard.module.css'; // Assuming you'll use CSS modules

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className={s.container}>
            <div className={s.sidebar}>
                {/* Your sidenav goes here */}
            </div>
            <div className={s.content}>
                {children}
            </div>
        </div>
    );
}
