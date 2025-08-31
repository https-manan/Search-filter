import Image from './Image'
import Price from './Price'


const Card = ({ image, name, starCount, price }) => {
return (
<div className="bg-white border rounded-lg shadow hover:shadow-lg p-4 flex flex-col">
<Image image={image} name={name} />
<Price starCount={starCount} price={price} />
</div>
)
}


export default Card