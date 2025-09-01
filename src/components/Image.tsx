type data ={
    image:string,
    name:string
}

const Image = ({ image, name }:data) => {
return (
<div>
<img src={image} alt={name} className="w-full h-40 object-contain" />
<h2 className="mt-2 font-semibold text-gray-700 text-sm">{name}</h2>
</div>
)
}

export default Image