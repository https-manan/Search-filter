import React from 'react'

const Sidebar = ({setSelectedCategory,setSelectedPrice,setSelectedRating}) => {
  return (
    <div className="w-64 bg-white border-r p-4 text-sm">
      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-700">Category</h3>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="category" value="All" onChange={(e)=>{setSelectedCategory(e.target.value)}} /> All
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" value="Sneakers" onChange={(e)=>{setSelectedCategory(e.target.value)}}/> Sneakers
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" value="Flats" onChange={(e)=>{setSelectedCategory(e.target.value)}}/> Flats
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" value="Sandals" onChange={(e)=>{setSelectedCategory(e.target.value)}}/> Sandals
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" value="Heels" onChange={(e)=>{setSelectedCategory(e.target.value)}}/> Heels
          </label>
        </div>
      </div>



      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-700">Price</h3>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" value="All" onChange={(e)=>{setSelectedPrice(e.target.value)}}/> All
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" value="5000" onChange={(e)=>{setSelectedPrice(e.target.value)}} /> Below ₹5,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" value="10000" onChange={(e)=>{setSelectedPrice(e.target.value)}} /> Below ₹10,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" value="20000" onChange={(e)=>{setSelectedPrice(e.target.value)}} /> Below ₹20,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" value="30000" onChange={(e)=>{setSelectedPrice(e.target.value)}} /> Above ₹20,000
          </label>
        </div>
      </div>

      
      
      <div>
        <h3 className="font-semibold mb-2 text-gray-700">Rating</h3>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" value="All" onChange={(e)=>{setSelectedRating(e.target.value)}} /> All
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" value="★" onChange={(e)=>{setSelectedRating(e.target.value)}}/> ★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" value="★★" onChange={(e)=>{setSelectedRating(e.target.value)}}/> ★★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" value="★★★" onChange={(e)=>{setSelectedRating(e.target.value)}}/> ★★★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" value="★★★★" onChange={(e)=>{setSelectedRating(e.target.value)}}/> ★★★★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" value="★★★★★" onChange={(e)=>{setSelectedRating(e.target.value)}}/> ★★★★★
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
