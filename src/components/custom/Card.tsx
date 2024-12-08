import Image from "next/image";
import React from "react";

// Define the props type
interface CardProps {
  imageUrl: string;
  name: string;
  price: string;
}

// Use defaultProps or a default argument
export default function Card({
  imageUrl = "/Frame32.png",
  name = "T-shirt Tape details",
  price = "199",
}: CardProps) {
  return (
    <div className="p-4  ">
      <Image src={imageUrl} alt={name} width={270} height={400} />
      <div className="p-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h1>⭐⭐⭐⭐</h1>
        <h3 className="font-bold">${price}</h3>
      </div>
    </div>
  );
}
