import React from "react";

const FeatureSection = () => {
  const objects = [
    {
      id: "addons",
      title: "Customizable Addons",
      description:
        "Enable or disable addons to improve wasteof.money. With addon options, including sound effects, color themes, and more.",
    },
    {
        "id": "features",
        "title": "Awesome Features",
        "description": "With features such as desktop notifications, chat presence notifiers, and post read indicators, using wasteof.money just got better."
    },
    {
        "id": "open-source",
        "title": "Open Source",
        "description": "Created and Contrubuted to by the wasteof.money community."
    }
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Features
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Waste Money in style with a browser extension that adds helpful, customizable addons to the wasteof.money social media.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {objects.map(function (item) {
            return (
              <div key={item.id}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {(item.id === "addons") ? (
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                
          ) : (
                    (item.id === "features") ? (
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
          ) : (
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>

          )

                )}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
          {/* Add the other two divs for "Legal" and "Business Automation" similarly */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
