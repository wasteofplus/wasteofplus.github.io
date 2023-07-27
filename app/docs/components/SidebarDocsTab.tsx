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
        const slug = "/docs/section" + folderPath.split("docs\\content")[1].replace(/\\/g, "/") + "/" + file.name.replace(".mdx", "");

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
        console.log('folderPath', folderPath)
        console.log('middle bit', typeof folderPath.split("docs\\content\\")[1])
        console.log('modified', folderPath.split("docs\\content")[1].replace(/\\/g, "/"));
        console.log("new folder path", "/docs" + folderPath.split("docs\\content")[1].replace(/\\/g, "/") + "/" + file.name.replace(".mdx", ""));
        const slug = "/docs" + folderPath.split("docs\\content")[1].replace(/\\/g, "/") + "/" + file.name.replace(".mdx", "");
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

export default function SidebarDocsTab(props:any) {
    console.log('props', props)
    return (
      <>
      <a href={props.item.slug}>
        <li key={props.item.id}>
          <button
            type="button"
            className="flex items-center p-2 pr-0 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages"
          >
            {(props.item.children.length == 0) ? (
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              ></path>
            </svg>
            ) : (
              <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
            </svg>
            )}
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              {props.item.title}
            </span>
            {(props.item.children.length != 0) ? (
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            ) : (null)}
          </button>
          <ul id="dropdown-pages" className={`${props.styles.indent} py-2 space-y-2`}>
            {props.item.children.length > 0
              ? props.item.children.map((item: any) => (
                  <SidebarDocsTab styles={props.styles} key={item.id} item={item} />
                ))
              : (null)}

          </ul>
        </li>
        </a>
      </>
    );
  };

  export { getFolderFiles }