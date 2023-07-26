import React from "react";
import Image from "next/image";

const CustomImage = (props: any) => {
  return (
    <figure className="my-6 w-fit text-center text-slate-500 text-sm">
      <Image src={props.src} alt="" width={640} height={360} />
      <figcaption className="mt-3"> Digital art by Anonymous</figcaption>
    </figure>
  );
};

export { CustomImage };