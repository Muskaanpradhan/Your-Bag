import React from 'react'

//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    const { cartItem } = useContext(context)
  return (
    <>
    <div className="header">
    <header>
        <h2>UseReducer</h2>
        <span>
          <a href="/cart"> <ShoppingCartIcon />   </a>
        </span>

    </header>
    </div>
<header />
    </>
  )
}

export default Header