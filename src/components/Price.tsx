
const Price = ({ starCount, price }) => {
  return (
    <div className="mt-2">
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {Array.from({ length: starCount }, (_, i) => (
          <span key={i}>★</span>
        ))}
        <span className="ml-1 text-gray-500 text-xs">(123 reviews)</span>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span className="line-through text-gray-400 text-sm">$140.00</span>
        <span className="text-gray-800 font-semibold">{price}</span>
      </div>
    </div>
  )
}

export default Price
