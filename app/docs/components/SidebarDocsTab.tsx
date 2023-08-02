export default function SidebarDocsTab(props: any) {
  console.log("props.thisTabSelected", props.thisTabSelected);
  return (
    <>
      <a href={props.item.slug}>
        <li key={props.item.id}>
          <button
            type="button"
            className={`flex items-center p-2 pr-0 w-full text-base font-normal rounded-lg transition duration-75 group ${(props.thisTabSelected ? "dark:bg-gray-700 bg-gray-200 text-blue-600 dark:text-blue-400" : "dark:hover:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100")}`}
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages"
          >
            {props.item.children.length == 0 ? (
              <svg
                aria-hidden="true"
                className={`flex-shrink-0 w-6 h-6 transition duration-75 ${(props.thisTabSelected ? "text-blue-500 dark:text-blue-300" : "group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white text-gray-400")}`}
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
                className={`flex-shrink-0 w-6 h-6 transition duration-75  ${(props.thisTabSelected ? "text-blue-500 dark:text-blue-300" : "group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white text-gray-400")}`}
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
            {props.item.children.length != 0 ? (
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
            ) : null}
          </button>
          <ul
            id="dropdown-pages"
            className={`${props.styles.indent} py-2 space-y-2`}
          >
            {props.item.children.length > 0
              ? props.item.children.map((item: any) => (
                  <SidebarDocsTab
                  selectedTab={props.selectedTab}
                    thisTabSelected={props.selectedTab==item.slug}
                    styles={props.styles}
                    key={item.id}
                    item={item}
                  />
                ))
              : null}
          </ul>
        </li>
      </a>
    </>
  );
}