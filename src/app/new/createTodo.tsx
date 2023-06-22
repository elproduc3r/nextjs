"use server"

import { prisma } from "@/db";
import { redirect } from "next/navigation";

const createTodo = async (data: FormData) => {

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

export default createTodo;