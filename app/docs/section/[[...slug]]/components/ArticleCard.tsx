import Image from "next/image";

export default function ArticleCard(props: {
  title: string;
  thumbnailUrl: string;
  description: string;
  tags: Array<string>;
}) {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={props.thumbnailUrl}
        // className="img-fluid mt-1 rounded-lg"
        alt="thumbnail"
        width="0"
        height="100"
        sizes="100vw"
        style={{objectFit:"cover"}}

        className="w-full h-32"
        // objectFit="cover"
      />
      <div className="flex justify-between items-center mb-4 mt-3 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          <Image
            src="/icons/article.svg"
            alt="article icon"
            width={16}

            height={16}

          />
          {props.tags[0]}
        </span>
        <span className="text-sm"></span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{props.title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {props.description}
      </p>
    </article>
  );
}
