import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'
import Menu,{loader as menuLoader} from "./features/menu/Menu"
import Cart from './features/cart/Cart'
import CreateOrder ,{action as createOrderAction} from "./features/order/CreateOrder"
import Order,{loader as orderLoader} from "./features/order/Order"
import AppLayout from './ui/AppLayout'
import NotFound from "./ui/Error"
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<NotFound/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/cart",element:<Cart/>,errorElement:<NotFound/>},
      {path:"/menu",element:<Menu/>,loader:menuLoader},
      {path:"/order/new",element:<CreateOrder/>,errorElement:<NotFound/>,action:createOrderAction},
      {path:"/order/:orderId",element:<Order/>,loader:orderLoader,errorElement:<NotFound/>}
    ]
  } 
  ])
function App() {
  return <RouterProvider router={router}/>
}
export default App
