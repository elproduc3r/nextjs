import { prisma } from "@/db";

export const getTodos = () => {
  return prisma.sales.findMany;
}