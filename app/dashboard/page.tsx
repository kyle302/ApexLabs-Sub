// app/dashboard/page.tsx
'use client'; // Remember this directive from earlier to use useState

import DashboardLayout from './dashboardLayout';
import { useState } from 'react'; 


export default function DashboardComponent() { // Treat this like your DashboardPage
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  return (
    <DashboardLayout> {/* Here's where we utilize the layout */}
      <div className="dashboard-container"> 
        <div className={`sidenav ${isSidenavOpen ? 'open' : ''}`}>
          <button onClick={() => setIsSidenavOpen(false)}>Close</button>
          <ul>
            <li>Dashboard</li> 
            <li>Computers</li>
            <li>Settings</li>
          </ul>
        </div>

        <div className="main-content">
          <button onClick={() => setIsSidenavOpen(true)}>Open Sidenav</button>
          <h1>Dashboard Content</h1> 
        </div>
      </div>
    </DashboardLayout>
  );
}
