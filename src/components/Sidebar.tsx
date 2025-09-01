import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r p-4 text-sm">
      {/* Category */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-700">Category</h3>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="category" /> All
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" /> Sneakers
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" /> Flats
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" /> Sandals
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="category" /> Heels
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-700">Price</h3>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" /> All
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" /> Below ₹5,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" /> Below ₹10,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" /> Below ₹20,000
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" /> Above ₹20,000
          </label>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-700">Rating</h3>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" /> All
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" /> ★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" /> ★★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" /> ★★★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" /> ★★★★
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" /> ★★★★★
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
