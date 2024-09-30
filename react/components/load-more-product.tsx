// fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// // .then(console.log);
"use client";

interface ProductInterface {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: { width: number; height: number; depth: number };
  discountPercentage: number;
  id: number;
  images: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}
[];

import React, { useEffect, useState } from "react";

export default function LoadMore() {
  const [Loading, setLoading] = useState(true);
  const [Product, setProduct] = useState<ProductInterface[]>([]);
  const [Count, setCount] = useState<number>(0);
  const [Error, setError] = useState<any>();
  const [Disabled,setDisabled] = useState<boolean>(false);

  async function FetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          Count === 0 ? 0 : Count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setProduct((prevData)=>[...prevData,...data.products]);
        setLoading(false);
        console.log(data.products);
      }
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    FetchProduct();
  }, [Count]);

  useEffect(()=>{
    if(Product && Product.length === 100) setDisabled(true)
  },[Product])

  if (Loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className="product">
        <div className="product__wrap">
          {Product && Product.length > 0
            ? Product.map((values) => (
                <>
                  <div key={values.id} className="product__item">
                    <img src={values.thumbnail} alt={values.title} />
                    <p className="text-center text-[20px] font-semibold">{values.title}</p>
                  </div>
                </>
              ))
            : Loading
            ? <span className="loading__text">Loading</span>
            : Error
            ? "Error"
            : "Something went to wrong please try latter"}
        </div>
        <div className={Disabled ? "product__btn--dis" : "product__btn"} onClick={()=>setCount(Count+1)}>
          <button disabled={Disabled}>Load More</button>
        </div>
        {Disabled && <span className="text-center inline-block text-[32px] font-semibold">Your reached </span>}
      </div>
    </>
  );
}
