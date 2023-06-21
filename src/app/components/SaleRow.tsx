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

const SaleRow = (props: SaleRowProps) => {

  const {id, createdAt, product, price, quantity, platform, notes} = props;
  const dateArr = createdAt.toLocaleDateString().split("/");
  const displayDate = `${dateArr[0]}/${dateArr[1]}`;
  const iconPaths = {
    ["Facebook MarketPlace"]: "/icon-fb.png",
    ["Nextdoor"]: "/icon-nextdoor.png",
    ["Offerup"]: "/icon-offerup.png"
  };

  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <label
          htmlFor={`${id}`}
        >
          {displayDate}
        </label>
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <label
          htmlFor={`${id}`}
        >
          {product}
        </label>
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <label
          htmlFor={`${id}`}
        >
          {quantity}
        </label>
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <label
          htmlFor={`${id}`}
        >
          {`$${price}`}
        </label>
      </td>
      <td className="flex flex-row whitespace-nowrap px-6 py-4 font-medium">
        <Image src={iconPaths[platform]} alt={`icon - ${platform}`} width="20" height="20"/>
        <label
          htmlFor={`${id}`}
        >
          {platform}
        </label>
        
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <label
          htmlFor={`${id}`}
        >
          {notes}
        </label>
      </td>
    </tr>
  );

};

export default SaleRow;