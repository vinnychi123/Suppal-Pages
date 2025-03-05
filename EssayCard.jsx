import React from 'react'

const EssayCard = ({ essay }) => {
  return (
    <div className="flex p-7">
      <div className="w-150 h-full bg-white-100 rounded-lg p-12 overflow-y-auto shadow-xl mx-auto outline-1 outline-gray-300">
        <h1 className="text-lg text-black text-left whitespace-pre-wrap">
          {essay.content}
        </h1>
      </div>
    </div>
  )
}

export default EssayCard
