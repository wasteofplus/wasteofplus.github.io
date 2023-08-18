import React from "react";

// Import Layout and Navigation Components
import NavBar from "./components/NavBar";
import DocsSidebar from "./components/DocsSidebar";
import { getFolderFiles } from "./components/utils/getFolderFiles";

// Import Markdown/MDX and Style tools
import styles from "./page.module.css";

// Import Node.js Utils
import path from "path";

// Import MDX User Components
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


    let sidebarTabs: any = getFolderFiles(path.resolve("app/docs/content/"), []);

    // Setup Sidebar Toggle

    return (
      <div className="antialiased h-auto bg-gray-50 dark:bg-gray-900">
        <NavBar />

        <DocsSidebar selectedTab="/docs/getting-started" styles={styles} sidebarTabs={sidebarTabs} />

        <main className={`md:${styles.mainBar} p-4 md:ml-72 h-auto pt-20`}>
          <div className="border-gray-300 dark:border-gray-600 mb-4">

            {children}
          </div>
        </main>
      </div>
    );
  }

