// התקנה של ספריות הניתובים
// npm i react-router
// npm i react-router-dom

import { Route, Routes } from "react-router"
import { Home } from "./home"
import { City } from "./City"
import { Aprtment}from "./Aprtment"
import {Catgory} from "./Catgory"


// יצירת קומפוננטה שמכילה הגדרות של הניתובים
// טען קומפוננטה מסוימת url הצהרה עבור ניתוב מסוים 
export const Routing = () => {
    return <>
        {/* Routes - תגית שמכילה את כל ההגדרות של ניתובים */}
        <Routes>
            {/* Route - הגדרה של ניתוב בודד */}
            {/* path = url ניתוב שנכתוב ב */}
            {/* element = קומפוננטה שנטען */}
            <Route path="Home" element={<Home></Home>}></Route>
           <Route path="City" element={<City></City>}></Route>
            {/* <Route path="Aprtment" element={<AllAprtment></AllAprtment>}></Route>  */}
            <Route path="Catgory" element={<Catgory></Catgory>}></Route>
            <Route path="Aprtment" element={<Aprtment></Aprtment>}></Route>
                {/* הגדרה של ניתוב כילד */}
                {/* <Route path="details/:name/:amount" element={<Details></Details>}></Route> */} 
             

            {/* שליחת פרמטרים בניתוב */}
            {/* סלש נקודתיים שם_הפרמטר */}
            {/* <Route path="welcome/:name/:password" element={<Welcome></Welcome>}></Route> */}

            {/* ניתוב ברירת מחדל */}
            <Route path="" element={<Home></Home>}></Route>

        </Routes>
    </>
}