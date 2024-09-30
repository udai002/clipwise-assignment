import './index.css'

const PricingSection = ()=>{
    
    return <div className="wave-section">
        <div className='wave2'>
           <div className='deal-details-container'>

            <h1 className='deal-heading'>Best Price <br /> <span className='deal-main-heading'> Agate Phone Grip</span></h1>
            <div className='deal-price-container'>
                <p className='original-price'>44.50$</p><h1 className='deal-price'>19.50$</h1>   
            </div>
            <p>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!</p>
            <button className='deal-buy-now'>Buy Now</button>
           </div>
           <div className='deal-product-outer-container'>
            <div className='deal-product-inner-container'>
                <img src="/product.png" alt="product" />
            </div>
           </div>
        </div>
    </div>
}

export default PricingSection