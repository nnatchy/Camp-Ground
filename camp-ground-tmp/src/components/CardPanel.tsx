"use client";

import Link from "next/link";
import Card from "./Card";
import { useReducer } from "react";

export default function CardPanel() {
  const ratingReducer = (
    ratingList: Map<string, number>,
    action: { type: string; hospitalName: string; hospitalRating: number }
  ) => {
    switch (action.type) {
      case "add": {
        return new Map<string, number>(
          ratingList.set(action.hospitalName, action.hospitalRating)
        );
      }
      case "remove": {
        action.hospitalRating = 0;
        ratingList.delete(action.hospitalName);
        return new Map<string, number>(ratingList);
      }
      default:
        return ratingList;
    }
  };

  const [ratingList, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>()
  );

  // Mock Data
  const mockHospitalRepo = [
    {
      hid: "001",
      hospitalName: "Chulalongkorn Hospital",
      imgSrc: "/img/chula.jpg",
      hospitalSrc: "https://chulalongkornhospital.go.th/kcmh/",
    },
    {
      hid: "002",
      hospitalName: "Rajavithi Hospital",
      imgSrc: "/img/rajavithi.jpg",
      hospitalSrc: "https://www.rajavithi.go.th/",
    },
    {
      hid: "003",
      hospitalName: "Thammasat University Hospital",
      imgSrc: "/img/thammasat.jpg",
      hospitalSrc: "https://www.hospital.tu.ac.th/",
    },
  ];

  return (
    <div className="block">
      <div className="flex flex-row space-x-[50px] mt-[30px]">
        {mockHospitalRepo.map((hospital) => (
          <Link href={`/hospital/${hospital.hid}`} key={hospital.hid}>
            <Card
              hospitalName={hospital.hospitalName}
              imgSrc={hospital.imgSrc}
              hospitalSrc={hospital.hospitalSrc}
              onClickRating={(scoreRating: number, e: Event) => {
                e.stopPropagation();
                dispatchRating({
                  type: "add",
                  hospitalRating: scoreRating,
                  hospitalName: hospital.hospitalName,
                });
              }}
              ratingList={ratingList}
            />
          </Link>
        ))}
      </div>
      <div className="w-full bg-white shadow-md rounded-lg p-6 mt-10 text-black">
        <h2 className="text-3xl mb-4 text-center font-bold hover:scale-[1.055] transform transition-transform duration-300">
          Rating List
        </h2>
        <div className="divide-y divide-gray-200 text-[20px]">
          {Array.from(ratingList.entries()).map(([key, value]) => (
            <div
              key={key}
              onClick={() =>
                dispatchRating({
                  type: "remove",
                  hospitalName: key,
                  hospitalRating: 0,
                })
              }
              className="py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition duration-300"
            >
              <div>
                <strong className="text-xl">{key}:</strong> {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
