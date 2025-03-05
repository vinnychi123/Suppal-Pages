import React from 'react'

const Header = ({ title = "Essay", essay }) => {
  return (
    <div className={"py-7 w-full "}>
      <div className="bg-blue-50 p-6 rounded-3xl shadow-xl w-2/3 mx-auto outline-1 outline-gray-300">
        <h1 className="text-sky-900 text-3xl font-bold text-center">{title}</h1>
        <div className="flex justify-between mt-4">
          <h3 className="text-sky-900 text-md font-bold">
            College: {essay.college}
          </h3>
          <h4 className="text-sky-900 text-md font-bold">
            Essay Type: {essay.title}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Header
