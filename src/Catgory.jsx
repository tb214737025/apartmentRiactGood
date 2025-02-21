import { useEffect, useState } from "react"
import { getAllCatgory } from "./api"

export const Catgory =()=>{

 const [list,setList]=useState([])
useEffect(()=>{
    getAllCatgory().then(x=>{
        console.log(x.data);
     
        setList(x.data)
    })
},[])

    return <>
    <p>bbbbbbbbb</p>
        <div className='album'>
            {/* {list.map((item, i) => <Image key={i} src={item}></Image>)} */}
            {list.map(item => <AllCatgory nameCategory={item.nameCategory} apartments={item.apartments}></AllCatgory>
)}
        </div>

    </>
}

export const AllCatgory = props => {

    const {  nameCategory, apartments} = props
       
  
   

    return <>
        <div>
            {/* <p>nameCategory:{nameCategory}</p>
            <p>apartments:{apartments}</p> */}
            </div>
            </>
}