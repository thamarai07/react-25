import React from 'react'
import Accordion from "../components/accordion";
import RandomColor from '@/components/randomColor';
import StarRating from "@/components/starRating";
import SliderImage from '@/components/sliderImage';
import LoadMoreProduct from "@/components/load-more-product";
import TreeView from '@/components/tree-view';

function Home() {

  const url ="https://picsum.photos/v2/list";

  return (
    <>
        <Accordion/>
        <RandomColor/>
        <StarRating/>
        <SliderImage url={url} page={1} limit={10}/>
        <LoadMoreProduct/>
        <TreeView/>
    </>
  )
}

export default Home