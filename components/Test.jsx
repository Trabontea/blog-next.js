import React from "react";
import Link from 'next/link';

export default function About({slug, title}) {
  return (
    <Link href={`/blogs/${slug}`}>
          <span className="cursor-pointer block lead"> {title} </span>
    </Link>
  )
}