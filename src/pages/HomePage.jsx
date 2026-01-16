import Header from '../components/Header'
import './HomePage.css'
import { products } from '../products/products'
import Product from './Product'
const HomePage = () => {
    return (
        <>
            <title>Ecommerce Project</title>

            <Header />
            <div className="home-page">
                <div className="products-grid">

                    {
                        products.map((item) => 
                           <Product
                            key={item.id} 
                            image={item.image} 
                            name={item.name} 
                            ImageRating={`images/ratings/rating-${(item.rating.stars*10)}.png`} 
                            count={item.rating.count} 
                            price={item.priceCents}
                           />
                        )
                    }      

                    
                </div>
            </div>

        </>
    )
}

export default HomePage