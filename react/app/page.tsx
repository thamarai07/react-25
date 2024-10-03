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
import TabMain from "@/components/tab";
import Modal from "@/components/modal";
import GitProfileFilter from "@/components/git-profile-filter";
import SearchAutoComplete from "@/components/search-auto-complet";

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
        <TabMain/>
        <Modal/>
        <GitProfileFilter/>
        <SearchAutoComplete/>
      </Provider>
    </>
  );
}

export default Home;
