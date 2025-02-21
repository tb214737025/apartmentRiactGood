import { useEffect, useState } from "react"
import { getAllCity } from "./api"
// import { useState } from "react";
// npm i sweetalert
//import './style.css'
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

export const City =()=>{

const [list,setList]=useState([])
useEffect(()=>{
    getAllCity().then(x=>{
        console.log(x.data);
        
        setList(x.data)
    })
},[])

    return <>
    <p>bbbbbbbbb</p>
        <div className='album'>
            {/* {list.map((item, i) => <Image key={i} src={item}></Image>)} */}
            {list.map(item => <AllCity nameCity={item.nameCity} apartments={item.apartments}></AllCity>)}
        </div>

    </>
}

export const AllCity = props => {

    const {  nameCity, apartments} = props
       
  
   

    return <>
        <div>
            <p>nameCity:{nameCity}</p>
            <p>apartments:{apartments}</p>
            </div>
        {/* ניתן לשמור את התמונות בתיקיית הקבצים הסטטיים של הפרויקט */}
        {/* ואז לנתב לפי הניתוב הבא */}
        {/* <img src={process.env.PUBLIC_URL + '/images/' + src + '.JPG'} alt={name} className="img"></img> */}
        {/* <img src={`${process.env.PUBLIC_URL}/images/${src}.JPG`} alt={name} className="img"></img> */}
    </>

}
// export const AddCity= () => {





  
//     //useDispatch - משתנה שמשגר פעולות לחלל
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     const C1 = useSelector(store => store.Cars)
//     const [NewCity, setNewCity] = useState({})
//     const Send = () => {
//         // setNewcar({ ...Newcar, idC: C1.length+1})
//         dispatch(addCar(NewCity))

//         navigate('/Cars/')
//     }


//     return <>
//         <div className="car-form">
//             <h2>Add New Car</h2>
//             <br></br>
//             <input placeholder="input reshoy:"
//                 onBlur={(e) => setNewCity({ ...Newcar, reshoy: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input Dcar:"
//                 onBlur={(e) => setNewCity({ ...Newcar, DCar: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input countSeat:"
//                 onBlur={(e) => setNewcar({ ...Newcar, countSeat: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input gir:"
//                 onBlur={(e) => setNewcar({ ...Newcar, gir: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input dateProduct:"

//                 onBlur={(e) => setNewcar({ ...Newcar, dateProduct: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input TypeTravel:"
//                 onBlur={(e) => setNewcar({ ...Newcar, TypeTravel: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input costOfHouer:"
//                 onBlur={(e) => setNewcar({ ...Newcar, costOfHouer: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input need:"
//                 onBlur={(e) => setNewcar({ ...Newcar, need: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input yetra:"
//                 onBlur={(e) => setNewcar({ ...Newcar, yetra: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input street:"
//                 onBlur={(e) => setNewcar({ ...Newcar, street: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input city:"
//                 onBlur={(e) => setNewcar({ ...Newcar, city: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input panoy:"
//                 onBlur={(e) => setNewcar({ ...Newcar, panoy: e.target.value })}></input>
//             <br></br>
//             <input placeholder="input imag:"
//                 onBlur={(e) => setNewcar({ ...Newcar, imag: e.target.value })}></input>
//             <br></br>

//             {/* <button className="submit-button" onClick={Send}>send</button> */}

//             <button
//                 className="submit-button"
//                 onClick={Send}
//                 disabled={!Newcar.TypeTravel || !Newcar.DCar} >send</button>
//         </div>
//     </>

// }

