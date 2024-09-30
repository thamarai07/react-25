import React from 'react'
import { dynamicnav } from '@/src/lib/dummydata'

export default function TreeView() {
  console.log(dynamicnav)
  return (
    <div className="p-4">
      <MenuList dynamicnav={dynamicnav} />
    </div>
  )
}

function MenuList({ dynamicnav }: { dynamicnav: any[] }) {
  return (
    <ul className="menu__list__wrap list-disc pl-6 space-y-2">
      {dynamicnav && dynamicnav.length > 0 ? (
        dynamicnav.map((values: any, index: number) => (
          <MenuItem key={index} values={values} />
        ))
      ) : null}
    </ul>
  )
}

function MenuItem({ values }: { values: any }) {
  return (
    <li className="relative cursor-pointer hover:bg-gray-100 rounded-md p-2">
      {/* Render the label if available */}
      {values.label && <span className="font-semibold">{values.label}</span>}

      {/* Recursively render children if they exist */}
      {values.children && values.children.length > 0 && (
        <ul className="menu__children list-disc pl-6 mt-2 space-y-2">
          {values.children.map((child: any, index: number) => (
            <MenuItem key={index} values={child} />
          ))}
        </ul>
      )}
    </li>
  )
}
