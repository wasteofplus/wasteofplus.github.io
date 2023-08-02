import React from "react";

// Import MDX Modules
import matter from "gray-matter";

// Import Node.js Modules
import fs from "fs";
import path from "path";

// Next.js Components
import Link from "next/link";

// Components
import ArticleCard from "./components/ArticleCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getFolderFiles } from "../../components/utils/getFolderFiles";

export default function Section({
  params,
}: {
  params: { slug: Array<string> };
}) {
  let sidebarTabs: any = getFolderFiles(path.resolve("app/docs/content/"), []);
  console.log('slug', params.slug)
  console.log('sidebarTabs', sidebarTabs)
  const files = fs.readdirSync(
    path.resolve("app/docs/content/", params.slug.join("/")),
    {
      withFileTypes: true,
    }
  );
  let thisfolder = {
    title: "Can't find section.json",
    description: "Can't find section.json",
  };
  const posts = files.map((file: any) => {
    if (file.isDirectory()) {
      const rawJSON = fs.readFileSync(
        path.resolve(
          "app/docs/content",
          params.slug.join("/"),
          file.name,
          "section.json"
        ),
        "utf-8"
      );
      const json = JSON.parse(rawJSON);
      console.log(file.name, "json.thumbnail", json.thumbnailUrl);
      const frontMatter = {
        title: json.title,
        description: json.description,
        thumbnailUrl: json.thumbnailUrl,
        date: json.date,
        tags: json.tags,
      };
      return {
        frontMatter,
        slug:
          "section/" + params.slug.join("/") + "/" + file.name.split(".")[0],
      };
    } else if (file.name === "section.json") {
      console.log("skipping section.json");
      thisfolder = JSON.parse(
        fs.readFileSync(
          path.resolve(
            "app/docs/content",
            params.slug.join("/"),
            "section.json"
          ),
          "utf-8"
        )
      );
      return {
        slug: undefined,
        frontMatter: undefined,
      };
    } else {
      const markdownWithMeta = fs.readFileSync(
        path.resolve("app/docs/content", params.slug.join("/"), file.name),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
      console.log(file.name, "matter.thumbnail", frontMatter.thumbnailUrl);

      return {
        frontMatter,
        slug: params.slug.join("/") + "/" + file.name.split(".")[0],
      };
    }
  });

  return (
    <>
      <Breadcrumbs title={"Section"} sidebarTabs={sidebarTabs} slug={params.slug}/>

      <h1 className="text-3xl font-extrabold leading-tight text-gray-900 mb-3 lg:text-4xl dark:text-white">
        {thisfolder.title}
      </h1>
      <p className="mb-4">{thisfolder.description}</p>
      <div className="grid gap-8 lg:grid-cols-2">
        {posts.map(
          (post, index) =>
            post.slug != undefined && post.frontMatter != undefined ? (
              <Link href={"/docs/" + post.slug} passHref key={index}>
                <ArticleCard
                  thumbnailUrl={post.frontMatter.thumbnailUrl}
                  title={post.frontMatter.title}
                  description={post.frontMatter.description}
                  tags={post.frontMatter.tags}
                  key={post.slug}
                />
              </Link>
            ) : null
          // ) : null
        )}
      </div>
    </>
  );
}
