import { getByCatgeory,getAllCatgory } from "./api"
import { useEffect, useState } from 'react'
//import { CardApartment } from "./CardApartment"


export const SelectCategory=({id})=>{

    const [listApbyCat,setListApByCat]=useState([])  
// console.log(type);

    useEffect(()=>{
        getByCatgeory(id)
        .then(x=>{
            console.log(x.data);
            setListApByCat(x.data)
        });
    
    })


}

    let arr={}
    if(type=="category"){
        arr=listApbyCat
    }
    else if(type=="city"){
        arr=listApbyCity
    }
const [listCat, setListCat] = useState([])

useEffect(() => {
     getAllCatgory()
         .then(x => {
             console.log(x.data);
             setListCat(x.data)
             
         })
 }, [])
 console.log(listCat);

const selectOk=(event)=>{
    debugger
console.log(event);




}
const [arr,setArr]=useState()
return <>
// <div>
// <CardApartment arr={listApbyCat}></CardApartment>
//  {type&&type=="category" && <CardApartment arr={listApbyCity}></CardApartment>} 
// {type&&type=="city" && <CardApartment arr={listApbyCity}></CardApartment>} 

// <div> 
 <select onChange={(e)=>selectOk(e.target.value)}> 
 <select>
    <option disabled selected>סנן לפי</option>
    {listCat && listCat.map((item, i) =>
                <option key={i} value={item._id}>{item.nameCategory}</option>
            )}
            </select>
            </div> 
     </select> 
     <div>
        <p>🙂🙂🙂🙂🙂🙂</p>


            {arr.map(item =>
       
          <div>
            <p>name apartment: {item.nameApartment}</p>
            <p>description: {item.description}</p>
            <p>category{item.nameCategory}</p>
            {item.city&& <p>city:{item.city.nameCity}</p>} 
             <p>address: {item.address}</p>
            <p>countBed: {item.countBed}</p>
            <p> add:{item.add}</p> 
             {item.advertist&&<p>phon: {item.advertist.phon}</p>}
            {item.advertist&&<p>phonauther: {item.advertist.anotherPhon}</p>}
            {item.advertist&&<p>email: {item.advertist.email}</p>} 
             </div>
            )
        }
       
       
        </div>  
      // </div> 
</>

    }
