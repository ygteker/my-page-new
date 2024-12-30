"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

interface MyLinkProps {
  text: string,
  link: string
}

const MyLink = (props: MyLinkProps) => {
  const path = usePathname();
  console.log(path);
  console.log(path === props.link)
  return (
    <Link href={props.link} passHref>
      <p className={`${path === props.link ? "text-purple-600" : "text-gray-600"} hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium`}>
        {props.text}
      </p>
    </Link>
  )
}

export default MyLink;
