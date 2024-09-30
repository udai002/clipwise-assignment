import './index.css'

const Home = ()=>{

    return <div className='section1'>
    <div className='home-container'>
      <nav className="navbar">
        <img src="/logo.png" alt="Logo" />
        <div className='nav-list-container'>
          <div>
            <ul className="menu-list">
              <li className='menu-list-items'>Home</li>
              <li className='menu-list-items'>Shop</li>
              <li className='menu-list-items'>About Us</li>
              <li className='menu-list-items'>Help</li>
            </ul>
          </div>
          <div>
            <img src="/cart.png" alt="cart" />
          </div>
        </div>
      </nav>
      <div className='home-content'>
        <div className='home-para-head'>
        <h1 className='home-heading'>Welcome to  <br /> <span className='heading'>Pop Rock Crystal Shop</span></h1>
        <p className='home-paragraph'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
      <div className='home-btn-container'>
        <button className='shop-now'>Shop Now</button>
        <button className='about-us'>About us</button>
      </div>
        </div>
        <div className='home-product-container'>
          <img src="/product.png" alt="product" />
          <p className='product-home-details'>Crystal Agate Phone Grip - 18.99$</p>
        </div>
      </div>
      <div className='scroll-down'><img src="/scolldown.png" className='scroll-img' alt="scrolldown" /><p className='scroll-para'>scroll down</p></div>
    </div>
    <div className='wave'>
    
    </div>
</div>
}

export default Home 