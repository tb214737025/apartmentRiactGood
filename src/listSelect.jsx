import { SelectCategory } from "./Slelect" 
import {getAllCategory ,getAllCity} from "../api"
import { useEffect, useState } from 'react'

export const ListSelect=()=>{

    const [listCat, setLis tCat] = useState([])
    const [idCategory,setIdCategory]=useState()
    useEffect(() => {
         getAllCategory()
             .then(x => {
                 console.log(x.data);
                 setListCat(x.data)
             })
     }, [])
     console.log(listCat);

     
     const [listCity,setListCity]=useState()
     useEffect(() => {
        getAllCity()
              .then(x => {
                  console.log(x.data);
                  setListCity(x.data)
              })
      }, [])
      console.log(listCity);


return<>



<div>
{/* <select onChange={(e)=><SelectCategory id={e.target.value}></SelectCategory>}> */}
{idCategory&&<SelectCategory id={idCategory} type={"category"}></SelectCategory>}
{idCategory&&<SelectCategory id={idCategory} type={"city"}></SelectCategory>}

<select onChange={(e)=>setIdCategory(e.target.value)}>
  
    <option disabled selected>סנן לפי</option>
    {listCat && listCat.map((item, i) =>
                <option key={i} value={item._id}>{item.nameCategory}</option>
            )}
            </select>


            <select onChange={(e)=>setIdCategory(e.target.value)}>
  
    <option disabled selected>סנן לפי</option>
    {listCity && listCity.map((item, i) =>
                <option key={i} value={item._id}>{item.nameCity}</option>
            )}
            </select>
            </div>

</>
}