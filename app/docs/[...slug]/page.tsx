import React from "react";

// Import Layout and Navigation Components
import { getFolderFiles } from "../components/utils/getFolderFiles";

// Import Markdown/MDX and Style tools
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

// Import Node.js Utils
import fs from "fs";
import path from "path";

// Import MDX User Components
import { CustomH1, CustomH2, CustomParagraph } from "../components/user/CustomHeadings";
import { CustomImage } from "../components/user/CustomImage";
import { CustomDivider } from "../components/user/CustomLayout";

// Import Components
import Breadcrumbs from "../components/Breadcrumbs";

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

  // Setup Sidebar Toggle

  return (
    <>
    <Breadcrumbs slug={params.slug} title={data.title} sidebarTabs={sidebarTabs}/>

    <ReactMarkdown
      components={{
        h1: CustomH1,
        h2: CustomH2,
        img: CustomImage,
        hr: CustomDivider,
        p: CustomParagraph,
      }}
    >
      {markdownBody}
    </ReactMarkdown>
    </>
  );
}
