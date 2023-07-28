import React from "react";

// Import MDX Modules
import matter from "gray-matter";

// Import Node.js Modules
import fs from "fs";
import path from "path";

// Next.js Components
import Link from "next/link";
import Image from "next/image";

// Components
import ArticleCard from "./components/ArticleCard";
import { isRouteMatch } from "next/dist/server/future/route-matches/route-match";

export default function Section({
  params,
}: {
  params: { slug: Array<string> };
}) {
  const files = fs.readdirSync(
    path.resolve("app/docs/content/", params.slug.join("/")),
    {
      withFileTypes: true,
    }
  );
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
      console.log(file.name, 'json.thumbnail', json.thumbnailUrl)
      const frontMatter = {
        title: json.title,
        description: json.description,
        thumbnailUrl: json.thumbnailUrl,
        date: json.date,
        tags: json.tags
      };
      return {
        frontMatter,
        slug: file.name.split(".")[0],
      };
    } else if (file.name === "section.json") {
      console.log('skipping section.json')
      return {
        slug: undefined,
        frontMatter: undefined
      }
    } else {

      const markdownWithMeta = fs.readFileSync(
        path.resolve("app/docs/content", params.slug.join("/"), file.name),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
      console.log(file.name, 'matter.thumbnail', frontMatter.thumbnailUrl)


      return {
        frontMatter,
        slug: file.name.split(".")[0],
      };
    }
  });

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2">
        {posts.map(
          (post, index) => (
            (post.slug != undefined && post.frontMatter !=undefined) ? (
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
          )
          // ) : null
        )}
      </div>
    </>
  );
}
