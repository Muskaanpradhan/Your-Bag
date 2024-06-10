import { useEffect, useState } from 'react'
import data from './Data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import './index.css'

function App() {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(null);
  
  let total = 0
  products.map(product => {
    total += product.amount * product.price;
  })


  useEffect(() => {
    setProducts(data);

  }, [])
  
  console.log(products)


  function clearCart() {
    setProducts([]);
  }

  function handleRemove(productToRemove) {
    
    const newProducts = products.filter((product) => {
      return productToRemove !== product
    })

    setProducts(newProducts);
  }

  useEffect(() => {
    let quantity = 0;
    products.forEach(product => {
      quantity += product.amount;
    })
    setCartCount(quantity)

  }, [products])



  function handleDecrement(decrement) {
    if (decrement.amount != 1) {
      let obj = products.find(product => {
        return decrement == product
      })
      obj.amount -= 1
      let quantity = 0;
      products.forEach(product => {
        quantity += product.amount;
      })
      setCartCount(quantity)
    }
  }

  function handleIncrement(Increment) {
    
    let obj = products.find(product => {
      return Increment == product
    })
    obj.amount += 1;
    let quantity = 0;
    products.forEach(product => {
      quantity += product.amount;
    })
    setCartCount(quantity)
  }

  return (
    <>
      <header>
        <h1>UseReducer</h1>
       <p> <FontAwesomeIcon 
                icon={faCartShopping}
               className='Icon' />
        ({cartCount})</p>
      </header>
      {
        products.length == 0 ? 
        <div className='empty'>
          <h1>Cart is Empty</h1>
        </div>
        :
        <>
        <div className="products">
        {products.map((product, index) => {
          return (<>

            <div className="wrapper" key={index}>

              <img src={product.img}></img>

              <div className='detail'>
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                <button className='remove' onClick={() => { handleRemove(product) }}>remove</button>
              </div>
              <div>
                <span onClick={() => { handleDecrement(product) }}>&lt;</span>&nbsp;
                ({product.amount})
                &nbsp;<span onClick={() => { handleIncrement(product) }}>&gt;</span>
              </div>

            </div>
          </>)
        })
        }
      </div>
      <footer>
        <div className='first'>
          <h3>Total</h3>
          <p>&nbsp;&nbsp;
            {Math.round(total)}
          </p>
        </div>
        <div className='second'>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </footer>
      </>

      }
      
    </>
  )
}

export default App