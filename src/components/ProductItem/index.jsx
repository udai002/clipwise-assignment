import './index.css'

const ProductItems = (props)=>{
    const {} = props
    return <div>
        <div className="product-item-card">
            <img className='diplay-product' src="/product.png" alt="product" />
            <div className='product-items-details-container'>
                <p className='product-name'>Crystal Agate Phone Grip </p>
                <p className='product-price'>18.99$</p>
                <button className='product-item-buy-now'>Buy Now</button>
            </div>
        </div>
    </div>
}

export default ProductItems