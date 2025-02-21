import { BrowserRouter } from "react-router"
import { City } from "./City"
import { Home } from "./home"
import { Nav } from "./Nav"
import { Routing } from "./Routing"
import {Catgory} from "./Catgory"
import { AddApartment1, Aprtment, UpdateApartment } from "./Aprtment"
import { Login } from "./Login"
import { Provider } from "react-redux"
import myStore from "./store"
import { Register } from "./Register"


export const Main = () => {
     return<>
    <Provider store={myStore}>
    {/* <BrowserRouter> */}
    {/* <Home></Home> */}
  {/* <Catgory></Catgory> */}
    {/* <City></City>  */}
{/* <Aprtment></Aprtment> */}

<UpdateApartment></UpdateApartment>

{/* <AddApartment1></AddApartment1> */}
{/* <AddApartment></AddApartment> */}
   {/* <Nav></Nav>
   <Routing></Routing> */}
   {/* </BrowserRouter> */} 
{/* <Aprtment></Aprtment> */}
   {/* <Login></Login> */}
   {/* <Register></Register> */}
   </Provider>
  
   </>
        
    
}