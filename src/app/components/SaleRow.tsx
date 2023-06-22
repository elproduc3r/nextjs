"use client"

import Image from "next/image";

interface SaleRowProps {
  id: string;
  createdAt: Date;
  product: string;
  price: number;
  quantity: number;
  platform: string;
  notes: string;
}

interface IconPathMap { 
  [key: string]: string 
};

const SaleRow = (props: SaleRowProps) => {

  const {id, createdAt, product, price, quantity, platform, notes} = props;
  const dateArr = createdAt.toLocaleDateString().split("/");
  const displayDate = `${dateArr[0]}/${dateArr[1]}`;
  const iconPaths: IconPathMap = {
    "Facebook MarketPlace": "/icon-fb.png",
    "Nextdoor": "/icon-nextdoor.png",
    "Offerup": "/icon-offerup.png"
  };

  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <span>
          {displayDate}
        </span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <span>
          {product}
        </span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <span>
          {quantity}
        </span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <span>
          {`$${price}`}
        </span>
      </td>
      <td className="flex flex-row whitespace-nowrap px-6 py-4 font-medium items-center">
        <Image className="px-6" src={iconPaths[platform]} alt={`icon - ${platform}`} width="28" height="28"/>
        <span>
          {platform}
        </span>
        
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <span>
          {notes}
        </span>
      </td>
    </tr>
  );

};

export default SaleRow;