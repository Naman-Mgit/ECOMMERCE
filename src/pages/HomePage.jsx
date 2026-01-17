import Header from '../components/Header'
import './HomePage.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Product from './Product'
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [cartItem,setCartItem]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
          .then((response)=>{
              setProducts(response.data)
          })
        axios.get('http://localhost:3000/api/cart-items')
          .then((response)=>{
               setCartItem(response.data)
          })
    },[])
    return (
        <>
            <title>Ecommerce Project</title>

            <Header cartItem={cartItem}/>
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