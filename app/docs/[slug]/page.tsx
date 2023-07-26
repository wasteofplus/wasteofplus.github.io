import React from "react";

// Import Layout and Navigation Components
import NavBar from "../components/NavBar";
import SidebarDocsTab from "../components/SidebarDocsTab";
import { getFolderFiles } from "../components/SidebarDocsTab";

// Import Markdown/MDX and Style tools
import ReactMarkdown from "react-markdown";
import styles from "./page.module.css";
import matter from "gray-matter";

// Import Node.js Utils
import fs from "fs";
import path from "path";

// Import MDX User Components
import { CustomH1, CustomH2 } from "../components/user/CustomHeadings";
import { CustomImage } from "../components/user/CustomImage";
import { CustomDivider } from "../components/user/CustomLayout";

export default function Doc({ params }: { params: { slug: string } }) {
    // Get this page's markdown data
    const source = fs.readFileSync(
      path.resolve("app/docs/pages/", `${params.slug}.mdx`),
      "utf8"
    );

    const { data, content } = matter(source);
    const markdownBody = content;

    let sidebarTabs: any = getFolderFiles(path.resolve("app/docs/pages/"), []);
    console.log(JSON.stringify(sidebarTabs));

    // Setup Sidebar Toggle

    return (
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <NavBar />

        <aside
          id="default-sidebar"
          className={`${styles.sidebar} fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`}
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
              {sidebarTabs.map((item: any) => (
                <SidebarDocsTab key={item} item={item} styles={styles} />
              ))}
            </ul>

            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Docs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span className="ml-3">Components</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Help</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className={`md:${styles.mainBar} p-4 md:ml-72 h-auto pt-20`}>
          <div className="border-gray-300 dark:border-gray-600 h-96 mb-4">

            <ReactMarkdown
              components={{
                h1: CustomH1,
                h2: CustomH2,
                img: CustomImage,
                hr: CustomDivider,
              }}
            >
              {markdownBody}
            </ReactMarkdown>
          </div>
        </main>
      </div>
    );
  }

