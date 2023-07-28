export default function Breadcrumbs(props: { slug: Array<string>, title: string, sidebarTabs: any }) {
  // console.log("props", props);
  const slugPath : Array<{title:string, url:string}> = [];
  console.log('props.slug', props.slug)
  console.log('props.sidebarTabs', props.sidebarTabs)
  let dirInPath = props.sidebarTabs.filter((tab: any) => {
    if (tab.id === props.slug[0] || (props.slug.length==1 && tab.id === props.slug[0])) {
      return tab;
    }
  });
  console.log('dirInPath', dirInPath)
  if (dirInPath.length != 0) {
  slugPath.push({title: dirInPath[0].title, url: dirInPath[0].slug});
  console.log('starting dirInPath', dirInPath[0])

  for (let i = 1; i < props.slug.length; i++) {
    dirInPath = dirInPath[0].children.filter((tab: any) => {
      if (tab.id === props.slug[i]) {
        slugPath.push({title: tab.title, url: tab.slug});
        console.log('dirInPath', dirInPath.title)
        console.log('slugPath', slugPath)
        return tab;
      }
    });
  }
}
  slugPath.push({title: props.title, url: "#"})
  console.log('full slug', slugPath)
  console.log(JSON.stringify(props.sidebarTabs));
  return (
    <>
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Docs
            </a>
          </li>
          {slugPath.map(function (slug: {title:string, url:string}) {
            return (
              <li key={slug.url}>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href={slug.url}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {slug.title}
                  </a>
                </div>
              </li>
            );
          })}

          {/* <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Flowbite
              </span>
            </div>
          </li> */}
        </ol>
      </nav>
    </>
  );
}
