import ProductItems from '../ProductItem'
import './index.css'

const AllProduct = (props) => {
    const {productList} = props
    return <div className="all-product-container">
        <h1 className='all-product-heading'>All Products</h1>
        <div>
            <div className='product-category-container'>
                <div className='category-container'><label htmlFor="Filter">Filter</label>: <select className='products-category-list' name="Filter" id="Filter">
                    <option className='products-category' value="volvo">ALL products</option>
                </select> </div>
                <div><label htmlFor="Sort">Sort</label>: <select className='products-category-list' name="Sort" id="Sort">
                    <option className='products-category' value="volvo">Best Selling</option>
                </select> </div>
            </div>
            <div className='product-items-container'>
              {productList.map(productItem=><ProductItems product={productItem}/>)} 
            </div>
            <div className='view-all-container'>
                <button className='view-all'>View All</button>
            </div>
        </div>
    </div>
}

export default AllProduct 