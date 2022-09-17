import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="text-center p-2">
      <Link href="/"> Home</Link>
      <Link href="/exp">{/* <span> Experience </span> */} Experience</Link>
      <Link href="/contact">{/* <span> Contact </span> */} Contact</Link>
      <Link href={"lab-07"}>{/**/} Lab-07</Link>
    </div>
  );
}
