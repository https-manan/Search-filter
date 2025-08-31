import './App.css'
import Card from './components/Card'


import shoe1 from './assets/shoe1.png'
import shoe2 from './assets/shoe2.png'
import shoe3 from './assets/shoe3.png'
import shoe4 from './assets/shoe4.png'
import shoe5 from './assets/shoe5.png'
import shoe6 from './assets/shoe6.png'
import shoe7 from './assets/shoe7.png'
import shoe8 from './assets/shoe8.png'
import shoe9 from './assets/shoe9.png'
import shoe10 from './assets/shoe10.png'
import shoe11 from './assets/shoe11.png'
import shoe12 from './assets/shoe12.png'
import shoe13 from './assets/shoe13.png'
import shoe14 from './assets/shoe14.png'
import shoe15 from './assets/shoe15.png'


function App() {
return (
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
<Card image={shoe1} name={'Nike Air Monarch IV'} starCount={4} price={200} />
<Card image={shoe2} name={'Nike Air Vapormax Plus'} starCount={5} price={200} />
<Card image={shoe3} name={'Nike Waffle One Sneaker'} starCount={4} price={200} />
<Card image={shoe4} name={'Nike Running Shoe'} starCount={4} price={200} />
<Card image={shoe5} name={'Flat Slip On Pumps'} starCount={3} price={200} />
<Card image={shoe6} name={'Knit Ballet Flat'} starCount={4} price={50} />
<Card image={shoe7} name={'Loafer Flats'} starCount={3} price={50} />
<Card image={shoe8} name={'Nike Zoom Freak'} starCount={5} price={200} />
<Card image={shoe9} name={"Nike Men's Sneaker"} starCount={4} price={200} />
<Card image={shoe10} name={'Puma Black-Oce'} starCount={3} price={150} />
<Card image={shoe11} name={'Prada'} starCount={4} price={200} />
<Card image={shoe12} name={'Zara'} starCount={4} price={200} />
<Card image={shoe13} name={'Puma'} starCount={4} price={200} />
<Card image={shoe14} name={'Nike'} starCount={3} price={200} />
<Card image={shoe15} name={'Nike'} starCount={4} price={200} />
</div>
)
}


export default App