'use client'
import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({
  campgroundName,
  imgSrc,
  campgroundSrc,
  onClickRating,
  ratingList,
}: {
  campgroundName: string;
  imgSrc: string;
  campgroundSrc: string;
  onClickRating?: Function;
  ratingList?: Map<string, number>;
}) {
  return (
    <InteractiveCard contentName={campgroundName}>
      <div className={`${styles.card} w-[420px] h-[600px] mx-0`}>
        <div className="relative h-[75%] w-[100%]">
          <Image
            src={imgSrc}
            alt="Product Picture"
            fill={true}
            className="object-cover rounded-t-lg hover:opacity-[0.7]"
          />
        </div>
        <div className={`${styles.cardText} h-[15%]`}>
          <div
            className={`indent-0 font-bold text-[25px] pt-[10px] text-center`}
          >
            {campgroundName}
          </div>
          <div className="flex justify-center">{campgroundSrc}</div>
        </div>
        <div className="flex justify-center">
          {
            onClickRating && ratingList ?
              <Rating
                name="rating-controlled"
                defaultValue={0}
                value={ratingList.get(campgroundName) || 0}
                precision={0.5}
                size="large"
                onChange={(e, newVal) => {
                  e.stopPropagation();
                  onClickRating(newVal, e);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
              : ''
          }
        </div>
      </div>
    </InteractiveCard>
  );
}
