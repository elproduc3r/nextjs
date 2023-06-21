import Link from 'next/link';
import { prisma } from '@/db';
import SaleRow from "./components/SaleRow";

const getSales =  async () => {
  return prisma.sales.findMany();
}

export default async function Home() {

  const sales = await getSales();

  return (
    <>
      <header
        className="flex justify-between items-center mb-4"
      >
        <h1 className="text-2x1">Sales</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded 
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Add Sale
        </Link>
      </header>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">

              <table className="bmin-w-full text-left text-sm font-light">
                <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr className="">
                    <th scope="col" className="px-6 py-4">Date</th>
                    <th scope="col" className="px-6 py-4">Product</th>
                    <th scope="col" className="px-6 py-4">Quantity</th>
                    <th scope="col" className="px-6 py-4">Price</th>
                    <th scope="col" className="px-6 py-4">Platform</th>
                    <th scope="col" className="px-6 py-4">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    sales.map( sale => (
                      <SaleRow key={sale.id} {...sale} />
                    ))
                  }
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}
