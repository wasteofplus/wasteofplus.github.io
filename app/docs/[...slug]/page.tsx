import React from "react";

// Import Layout and Navigation Components
import NavBar from "../components/NavBar";
import SidebarDocsTab from "../components/SidebarDocsTab";
import { getFolderFiles } from "../components/SidebarDocsTab";

// Import Markdown/MDX and Style tools
import ReactMarkdown from "react-markdown";
import styles from "../page.module.css";
import matter from "gray-matter";

// Import Node.js Utils
import fs from "fs";
import path from "path";

// Import MDX User Components
import { CustomH1, CustomH2 } from "../components/user/CustomHeadings";
import { CustomImage } from "../components/user/CustomImage";
import { CustomDivider } from "../components/user/CustomLayout";

export default function Doc({ params }: { params: { slug: Array<string> } }) {
  // Get this page's markdown data
  let source = null;
  console.log("params.slug", params.slug);
  source = fs.readFileSync(
    path.resolve("app/docs/content/", `${params.slug.join("/")}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);
  const markdownBody = content;

  let sidebarTabs: any = getFolderFiles(path.resolve("app/docs/content/"), []);
  console.log(JSON.stringify(sidebarTabs));

  // Setup Sidebar Toggle

  return (
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
  );
}
