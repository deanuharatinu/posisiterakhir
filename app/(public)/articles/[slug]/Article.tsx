'use client'

import dynamic from "next/dynamic"
import data from "./data.json"

const Editor = dynamic(() => import("../../../utils/Editor").then((mod) => mod.default), { ssr: false });

export default function Article() {
  return (
    <div className="flex justify-center">
      <div className="flex-auto px-6 lg:max-w-3xl">
        <Editor data={data} readOnly={true} />
      </div>
    </div>
  )
}

