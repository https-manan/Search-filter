const Image = ({ image, name }) => {
return (
<div>
<img src={image} alt={name} className="w-full h-40 object-contain" />
<h2 className="mt-2 font-semibold text-gray-700 text-sm">{name}</h2>
</div>
)
}

export default Image