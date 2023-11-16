"use client";

import Image from "next/image";
import { FaCalendarAlt, FaSearchLocation } from "react-icons/fa";
import styles from "./banner.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/background.jpg",
    "/img/background2.jpg",
    "/img/background3.jpg",
    "/img/background4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const {data: session} = useSession();
  console.log(session?.user.token);

  return (
    <div className={styles.banner}>
      <Image
        src={covers[index % 4]}
        alt="background"
        fill={true}
        priority
        objectFit="cover"
        onClick={() => {
          setIndex(index + 1);
        }}
        className={styles.image}
      />
      <div className={styles.bannerText}>
        <div className="absolute mt-[30px] pt-[50px] right-0 pr-[25px] text-[20px]">
          {
            session ? <span className="text-white font-bold">Welcome {session.user?.name} !</span> : ''
          }
        </div>
        <h4 className="flex pl-12">
          {" "}
          <FaCalendarAlt />{" "}
          <span className="ml-[-45px]">10-12 ธันวาคม 2566</span>
          <span className="flex">
            <FaSearchLocation />{" "}
            <span className="ml-[-45px]">ABC Tower ชั้น G ห้อง KING</span>
          </span>
        </h4>
        <h1 className="font-bold">
          บริการฉีดวัคซีนโควิด
          <span>ฟรี</span>
        </h1>
        <h3>
          วัคซีนป้องกันโรคโควิด
          <span className={styles.pfizer}>
            <a href="https://www.pfizer.co.th/" target="_blank">
              Pfizer
            </a>
          </span>
          ให้คนไทยได้รับการฉีดอย่างทั่วถึง
        </h3>
        <p>
          เปิดให้เข้ารับการฉีดตั้งเเต่
          <span>08.00 - 17.30 น.</span>
        </p>
      </div>
      <div>
        <button
          className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-2 rounded-lg z-3 absolute bottom-2 right-2
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent"
          onClick={(e) => {
            e.stopPropagation();
            router.push("/campground");
          }}
        >
          คลิ๊กเพื่อดูโรงพยาบาลที่เข้าร่วมโครงการ !
        </button>
      </div>
    </div>
  );
}
