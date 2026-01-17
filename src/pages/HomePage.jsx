import Header from '../components/Header'
import './HomePage.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Product from './Product'
const HomePage = () => {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
          .then((response)=>{
              setproducts(response.data)
          })
    },[])
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