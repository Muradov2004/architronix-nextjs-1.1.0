import Link from "next/link";
import React from "react";
import insta from "@/assets/icons/instagram.png";
import fb from "@/assets/icons/facebook.png";
import wp from "@/assets/icons/whatsapp.png";
import yt from "@/assets/icons/youtube.png";
import Image from "next/image";

const SocialMediaList = () => {
  return (
    <ul className="flex items-center gap-5">
            <li>
        <Link href="https://wa.link/s173s7">
          <Image src={wp} alt="wp" height="30" width="30" />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/azali_mebel/">
          <Image src={insta} alt="insta" height="30" width="30" />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/azali.az.mebel/?locale=az_AZ">
          <Image src={fb} alt="fb" height="30" width="30" />
        </Link>
      </li>

      <li>
        <Link href="https://www.youtube.com/@AZAL%C4%B0MEBEL">
          <Image src={yt} alt="yt" height="30" width="30" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaList;
