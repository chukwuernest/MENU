import React, { useState } from 'react'
import Categories from './Categories'
import data from './data'
import Menu from './menu'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCatergories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const newItem = data.filter((item) => item.category === category)
    setMenuItems(newItem)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu data={menuItems} />
      </section>
    </main>
  )
}

export default App
