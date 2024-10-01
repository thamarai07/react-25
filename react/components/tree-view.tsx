"use client";
import React, { useState } from "react";
import { dynamicnav } from "@/src/lib/dummydata";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function TreeView() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="text-center text-[32px] font-semibold mt-10 mb-10">
        Tree View NavBar
      </h2>

      <MenuList dynamicnav={dynamicnav} />
    </div>
  );
}

function MenuList({ dynamicnav }: { dynamicnav: any[] }) {
  return (
    <ul className="menu__list__wrap list-disc pl-6 space-y-2">
      {dynamicnav && dynamicnav.length > 0
        ? dynamicnav.map((values: any, index: number) => (
            <MenuItem key={index} values={values} />
          ))
        : null}
    </ul>
  );
}

function MenuItem({ values }: { values: any }) {
  const [displayCurrentChildren, setdisplayCurrentChildren] = useState<any>({});
  function handleToggle(currentChildren: string) {
    setdisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentChildren]: !displayCurrentChildren[currentChildren],
    });
  }


  return (
    <li className="relative cursor-pointer p-2">
      <div
        className="flex gap-4 items-center"
        onClick={() => handleToggle(values.label)}
      >
        {values.label && (
          <span
            className={`font-semibold  ${
              displayCurrentChildren[values.label]
                ? "text-orange-300"
                : "text-white"
            }`}
          >
            {values.label}
          </span>
        )}
        {values && values.children && values.children.length > 0 && (
          <span
            className={`treetoggle__wrap ${
              displayCurrentChildren[values.label] && "active"
            } `}
          ></span>
        )}
      </div>
      {values.children &&
        values.children.length > 0 &&
        displayCurrentChildren[values.label] && (
          <ul className="menu__children list-disc pl-6 mt-2 space-y-2">
            {values.children.map((child: any, index: number) => (
              <MenuItem key={index} values={child} />
            ))}
          </ul>
        )}
    </li>
  );
}
