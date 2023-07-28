import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getFolderFiles(folderPath: string, structure: any[]) {
  const rawFileStructure = fs.readdirSync(path.resolve(folderPath), {
    withFileTypes: true,
  });
  const mutatedStrtucture = structure;
  for (const file of rawFileStructure) {
    if (file.isDirectory()) {
      console.log("recursing through", file);
      let slug = null;
      if (folderPath.includes("\\")) {
        slug =
          "/docs/section" +
          folderPath.split("docs\\content")[1].replace(/\\/g, "/") +
          "/" +
          file.name.replace(".mdx", "");
      } else if (folderPath.slice(-1) == "/") {
        slug =
          "/docs/section" +
          folderPath.split("docs/content")[1].replace(/\\/g, "/") +
          "/" +
          file.name.replace(".mdx", "");
      } else {
        console.log("folderpath1", folderPath);

        if (folderPath.split("docs/content/").length == 1) {
          slug =
          "/docs/section"
          +"/" +
          file.name.replace(".mdx", "");
        console.log("section slug", slug);
        } else {
        slug =
          "/docs/section" +
          folderPath.split("docs/content")[1] +
          +"/" +
          file.name.replace(".mdx", "");
        console.log("section slug", slug);
        }
      }

      try {
        console.log(
          "reading json",
          path.resolve(folderPath, file.name, "section.json")
        );
        const rawJSON = fs.readFileSync(
          path.resolve(folderPath, file.name, "section.json"),
          "utf-8"
        );
        const json = JSON.parse(rawJSON);
        mutatedStrtucture.push({
          id: file.name,
          title: json.title,
          children: getFolderFiles(path.join(folderPath, file.name), []),
          slug: slug,
        });
      } catch (e) {
        console.log("error parsing json", e);
        mutatedStrtucture.push({
          id: file.name,
          title: file.name,
          children: getFolderFiles(path.join(folderPath, file.name), []),
          slug: slug,
        });
      }
    } else if (file.name == "section.json") {
      console.log("skipping section.json");
    } else {
      const markdownWithMeta = fs.readFileSync(
        path.resolve(folderPath, file.name),
        "utf-8"
      );
      console.log("front matter", matter(markdownWithMeta));
      const { data: frontMatter } = matter(markdownWithMeta);
      console.log(frontMatter.title);
      console.log("folderPath", folderPath);
      let slug = null;
      if (folderPath.includes("\\")) {
        console.log("evaluating backslash env");
        console.log("middle bit", folderPath.split("docs\\content\\")[1]);
        console.log(
          "modified",
          folderPath.split("docs\\content")[1].replace(/\\/g, "/")
        );
        console.log(
          "new folder path",
          "/docs" +
            folderPath.split("docs\\content")[1].replace(/\\/g, "/") +
            "/" +
            file.name.replace(".mdx", "")
        );
        slug =
          "/docs" +
          folderPath.split("docs\\content")[1].replace(/\\/g, "/") +
          "/" +
          file.name.replace(".mdx", "");
      } else if (folderPath.slice(-1) == "/") {
        console.log("evaluating forward slash env");
        console.log("middle bits", folderPath.split("docs/content/"));
        console.log(
          "modified",
          folderPath.split("docs/content/")[1].replace(/\\/g, "/")
        );
        console.log("filename", file.name);
        console.log("modified filename", file.name.replace(".mdx", ""));
        slug =
          "/docs" +
          folderPath.split("docs/content")[1].replace(/\\/g, "/") +
          "/" +
          file.name.replace(".mdx", "");
      } else {
        console.log("evaluating no slash env");
        console.log("folderpath2", folderPath);
        console.log("filename2", file.name);
        console.log("modified filename2", file.name.split("docs/content/"));
        console.log("split folder name", folderPath.split("docs/content/"));
        console.log(
          "split folder name length",
          folderPath.split("docs/content/").length
        );
        if (folderPath.split("docs/content/").length == 1) {
          console.log("first if");
          slug = "/docs/"  + file.name.replace(".mdx", "");
          console.log("slug", slug);
        } else {
          console.log("second if");
          slug =
            "/docs/" +
            folderPath.split("docs/content/")[1] +
            "/" +
            file.name.replace(".mdx", "");
          console.log("slug", slug);
        }
      }

      mutatedStrtucture.push({
        id: file.name,
        title: frontMatter.title,
        children: [],
        slug: slug,
      });
    }
  }
  return mutatedStrtucture;
}

export { getFolderFiles };
