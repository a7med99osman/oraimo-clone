import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Contact } from "./pages/Contact/Contact"
import { About } from "./pages/About/About"
import { WishList } from "./pages/WishList/WishList"
import { Cart } from "./pages/Cart/Cart"
import { Shop } from "./pages/Shop/Shop"
import { Home } from "./pages/Home/Home"
import { ProductDetails } from "./pages/productDetails/ProductDetails"
import { Category } from "./pages/category/Category"
import Layout from './components/layout/Layout'
import Error from "./pages/error/Error"


const App = () => {

  const Routing = createBrowserRouter([
    {
      path : "/" ,
      element : <Layout /> ,
      children : [
        { index : true , element : <Home /> },
        {path : "/about" , element : <About />},
        {path : "/shop" , element : <Shop />},
        {path : "/contact" , element : <Contact />},
        {path : "/productDetails/:slug", element : <ProductDetails />},
        {path : "/Category/:slug", element : <Category />},
        {path : "/wishList" , element : <WishList />},
        {path : "/cart" , element : <Cart />},
        {path : "*" , element : <Error />},
      ]
    }
  ])
  return (
    <RouterProvider router={Routing} />
  )
}

export default App