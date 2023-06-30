"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import createTodo from "./createTodo"

export default function New() {

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("0");
  const [quantity, setQuantity] = useState("1");
  const [platform, setPlatform] = useState("Facebook MarketPlace");
  const [notes, setNotes] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const validate = (e: React.FormEvent) => {
    let isAllValid = true;
    if(product === "" || price === "0" || notes === "") {
      isAllValid = false;
    }
    setIsFormValid(isAllValid);
    if (!isAllValid) {
      e.preventDefault();
    }
    return isAllValid;

  }


  const [a, change_a] = useState(1);

  useEffect(() => {

    setTimeout(() => {

      change_a((a) => a + 1); },

    1000);

    if(a>10){

      change_a((a) => 1);

    }

  } );

  console.log({a})

  return (
    <>
      <header
        className="flex justify-between items-center mb-4"
      >
        <h1 className="text-2x1">New Sale</h1>
      </header>

      {
        !isFormValid ? (
          <div style={{backgroundColor: "red"}} className="flex h-5 items-center justify-center py-4 mb-4 w-full rounded-lg bg-danger">
            <p className="text-neutral-50">Please check all form fields</p>
          </div>
        ) : null
      }
      
      <form action={createTodo} onSubmit={validate} className="flex gap-2 flex-col">
        <label htmlFor="product">Product</label>
        <input
          type="text"
          name="product"
          onChange={e => {setProduct(e.target.value)}}
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="$0.00"
          onChange={e => {setPrice(e.target.value)}}
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
        />
        <label htmlFor="quantity">Quantity</label>
        <select
          name="quantity"
          onChange={e => {setQuantity(e.target.options[e.target.selectedIndex].value)}}
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
          onChange={e => {setPlatform(e.target.options[e.target.selectedIndex].value)}}
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
          onChange={e => {setNotes(e.target.value)}}
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
      <footer className="pt-20 sm:pt-32 text-center pb-16">
        <div className="text-center">
          <p className="mt-4 text-sm leading-6 text-slate-500">NodeJS Prisma SQLite NextJS ReactJS TailwindCSS</p>
        </div>
      </footer>
    </>
  )
};
