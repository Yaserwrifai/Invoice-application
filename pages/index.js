import Link from "next/link";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import StartingPageContent from '../components/starting-page/starting-page';



export default function Home(props) {

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current })
  

  const router = useRouter();
  const { data } = props;

  const navigatePage = () => router.push("/add-new");

  return (
 
    <div className="main__container">
      <div className="invoice__header">
        <div className="invoice__header-logo">
     <StartingPageContent />
          <h3>Invoices</h3>
          <p>There are total {data.length} invoices</p>
        </div>

        <button className="btn" onClick={navigatePage}>
          Add New
        </button>
        <button className="btn" onClick={handlePrint}>Print this out!</button>
        {/* <button className="btn" onClick={() => { window.print() }}> Print All</button>
            //not work with safari */}
      </div>

      <div className="invoice__container" ref={componentRef}>{/* // for print ref={componentRef} */}
        {/* ======= invoice item =========== */}
        {data?.map((invoice) => (
          <Link href={`/invoices/${invoice.id}`} passRef key={invoice.id}>
            <div className="invoice__item">
              <div>
                <h5 className="invoice__id">
                  {invoice.id}
                  {/* {invoice.id.substr(0, 6).toUpperCase()} */}
                </h5>
              </div>

              <div>
                <h6 className="invoice__client">{invoice.clientName}</h6>
              </div>

              <div>
                <p className="invoice__created">{invoice.createdAt}</p>
              </div>

              <div>
                <h3 className="invoice__total">${invoice.total}</h3>
              </div>

              <div>
                <button
                  className={`${invoice.status === "paid"
                      ? "paid__status"
                      : invoice.status === "pending"
                        ? "pending__status"
                        : "draft__status"
                    }`}
                >
                  {invoice.status}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
   
  );
}
//----------------------------------------------------------
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  const db = client.db();
  const collection = db.collection("allInvoices");

  const invoices = await collection.find({}).toArray();
console.log('invoices', invoices)
  return {
    props: {
      data: invoices.map((invoice) => {
        return {
          id: invoice._id.toString(),
          clientName: invoice.clientName,
          createdAt: invoice.createdAt,
          total: invoice.total,
          status: invoice.status,
        };
      }),
    },
    revalidate: 1,
  };
}
 