import Link from "next/link";
import React from "react";
import insta from "@/assets/icons/instagram.png";
import fb from "@/assets/icons/facebook.png";
import tw from "@/assets/icons/twitter.png";
import ln from "@/assets/icons/linkedin.png";
import Image from "next/image";

const SocialMediaList = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link href="">
          <Image src={fb} alt="fb" height="25" width="25" />
        </Link>
      </li>
      <li>
        <Link href="">
          <Image src={insta} alt="insta" height="25" width="25" />
        </Link>
      </li>
      <li>
        <Link href="">
          <Image src={tw} alt="tw" height="25" width="25" />
        </Link>
      </li>
      <li>
        <Link href="">
          <Image src={ln} alt="ln" height="25" width="25" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaList;
