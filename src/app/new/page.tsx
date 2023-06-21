import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

const createTodo = async (data: FormData) => {
  "use server"

  const product = data.get("product")?.valueOf();
  const price = data.get("price")?.valueOf();
  const quantity = data.get("quantity")?.valueOf();
  const platform = data.get("platform")?.valueOf();
  const notes = data.get("notes")?.valueOf();

  if(typeof product !== "string") {
    throw new Error(`Invalid value for product: ${product}`);
  }

  if(typeof price !== "string") {
    throw new Error(`Invalid value for price : ${price}`);
  }

  if(typeof quantity !== "string") {
    throw new Error(`Invalid value for quantity : ${quantity}`);
  }

  if(typeof platform !== "string") {
    throw new Error(`Invalid value for platform : ${platform}`);
  }

  if(typeof notes !== "string") {
    throw new Error(`Invalid value for notes : ${notes}`);
  }

  await prisma.sales.create({data: {
    product,
    quantity: parseInt(quantity, 10),
    price: parseFloat(price),
    platform,
    notes
  }});

  redirect("/");

};

export default function New() {
  return (
    <>
      <header
        className="flex justify-between items-center mb-4"
      >
        <h1 className="text-2x1">New Sale</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <label htmlFor="product">Product</label>
        <input
          type="text"
          name="product"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="$0.00"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        />
        <label htmlFor="quantity">Quantity</label>
        <select
          name="quantity"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        >
          <option value="1">
            1
          </option>
          <option value="1">
            2
          </option>
          <option value="1">
            3
          </option>
          <option value="1">
            4
          </option>
          <option value="1">
            5
          </option>
        </select>
        <label htmlFor="platform">Platform</label>
        <select
          name="platform"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        >
          <option value="Facebook MarketPlace">
            Facebook Marketplace
          </option>
          <option
            value="Offerup"
          >
            Offerup
          </option>
          <option value="Nextdoor">
            Nextdoor
          </option>
        </select>
        <label htmlFor="hotes">Notes</label>
        <input
          type="text"
          name="notes"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link href=".." className="border border-slate-300 text-slate-300 px-2 py-1 rounded 
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded 
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Add It
          </button>
        </div>

      </form>
    </>
    
  )
}