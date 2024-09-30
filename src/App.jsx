import './App.css'
import AllProduct from './components/AllProduct'
import Home from './components/Home'
import PricingSection from './components/PricingSection'

const productList = [
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  },
  {
    productImage:"/product.png",
    name:"Crystal Agate Phone Grip",
    price:"18.99$"
  }
]

function App() {
  
  return (<>
    <Home/>
    <AllProduct productList={productList}/>
    <PricingSection/>

  </>
  )
}

export default App
