import { useEffect, useState , createContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import './App.css'

//import Header from './Header.jsx'

export const context = createContext()

function App() {


  const [products, setProduct] = useState([])



  useEffect(() => {
    fetch("https://www.course-api.com/react-useReducer-cart-project").then((response) => response.json())
    .then(result => {
      setProduct(result);
     // console.log(result);
    })
  },[])

  function clear(){
    setProduct([])

  }

  const truncate = (title) => {
    if (title.length > 5) {
        title = title.slice(0, 5) + "..."
    }
    return title
}
  return(
    <>
  <header>
    <div className="header">
    <h2>UseReducer
   <span><FontAwesomeIcon
                icon={faCartShopping}
               className='Icon'/></span>
               </h2>
               
  </div>
  </header>
    <div className="mainDiv">
     <h1>Your Bag</h1>
     
     <main>
        {
          products.map((product, index) => {
            return (<div className='wrapper' key={index}>
                {/* <Link to={`/product/${product.id}`}> */}
                    <img src={product.img} width={"300px"} height={"300px"} alt="" className='wrapperimage' />
                {/* </Link> */}
                <h2>{truncate(product.title)}</h2>
                <h3>Price : {product.price} <br></br>
                <a href='removeItem' >removeItem</a>
                </h3>
              
              
               

            </div>)
        })
        }
      <button onClick={()=> clear()}>clearAll</button>
     </main>
    </div>
    </>
  )
  }

export default App
