// import React from 'react'

import Card from "./Card/Card"
import data from '../../data/data'

const Main = () => {
    const cards = data.map (item => {
        return (
            <Card key = {item.id}
            item={item}
        />)
    })
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20 pb-28 py-4 px-6 md:px-8 lg:px-20">
      <p className='bg-gradient-to-b from-orange-500 to-pink-500 rounded-lg text-2xl font-extrabold p-10 text-white text-left'>Check out our most popular courses!</p>
      {cards}
    </div>
  )
}

export default Main
