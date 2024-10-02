"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import Accordion from "../components/accordion";
import RandomColor from "@/components/randomColor";
import StarRating from "@/components/starRating";
import SliderImage from "@/components/sliderImage";
import LoadMoreProduct from "@/components/load-more-product";
import TreeView from "@/components/tree-view";
import QRGenerator from "@/components/qr-code-generator";
import LightAndDark from "@/components/light-dark";
import ScrollIndicator from "@/components/scroll-indicator";
function Home() {
  const url = "https://picsum.photos/v2/list";

  return (
    <>
      <Provider store={store}>
        <Accordion />
        <RandomColor />
        <StarRating />
        <SliderImage url={url} page={1} limit={10} />
        <LoadMoreProduct />
        <TreeView />
        <QRGenerator />
        <LightAndDark />
        <ScrollIndicator/>
      </Provider>
    </>
  );
}

export default Home;
