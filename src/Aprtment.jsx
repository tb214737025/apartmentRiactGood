// import advertiser from "../../../node/api/models/advertiser"
 //import getAllCategory from "../../../node/api/controllers/getAllCategory"
import { useDispatch } from 'react-redux';
//import { addApartment } from "../../../node/api/controllers/apartment";
import { getAllApartment } from "./api";
import { addAprtment } from './api';
import { useEffect, useState  } from "react"
import { getAllCatgory } from './api';
import { getAllCity } from './api';
import { getAll } from './api';
import swal from "sweetalert"
import { useSelector } from 'react-redux';
import { updateApartment } from './api';
import {useNavigate, useParams} from "react-router-dom"
const img = useSelector((store) => store.img);
//import { Catgory } from './Catgory';
//import{nameCategory} from "../catgory/models"
// import { getAllCatgory } from './api';
export const Aprtment = () => {
    const [list, setList] = useState([])
    // useEffect(() => {
    //     addAprtment().then(x => {

    //         setList(x.data)
    //         console.log(x.data);
    //     })
    // }, [])
  
    useEffect(() => {
        getAllApartment().then(x => {

            setList(x.data)
            console.log(x.data);
        })
    }, [])
//     return <>
//         <div className='album'>
//             {/* {list.map((item, i) => <Image key={i} src={item}></Image>)} */}
//             {list.map(item =>
//                 <AllAprtment nameApartment={item.nameApartment} description={item.description} category={item.category} city={item.city}
//                     advertist={item.advertiser} address={item.address} countBed={item.countBed} price={item.price} add={item.add} img={item.img}>
//                 </AllAprtment>)}
//         </div>

//     </>
// }

}
// export const AllAprtment = (props) => {

//     const { nameApartment, description, category, city, advertist, address, countBed, price, add, img } = props

//     return <>
//         <div>
//             <p>nameApartment:{nameApartment}</p>
//             <p>description:{description}</p>
//             <p>{category}</p>
//             <p>{city}</p>
//             <p>{advertist}</p>
//             <p>{address}</p>
//             <p>{countBed}</p>
//             <p>{price}</p>
//             <p>{add}</p>
//             <p>{img}</p>
//             {/* src עמ להציג תמונה יש לייבא את קובץ התמונה ולתת כארטריביוט של */}
//             {/* <img src={pic1} className='img'></img> */}
//             {/* ניתן לשמור את התמונות בתיקיית הקבצים הסטטיים של הפרויקט */}
//             {/* ואז לנתב לפי הניתוב הבא */}
//             {/* <img src={process.env.PUBLIC_URL + '/images/' + src + '.JPG'} alt={name} className="img"></img> */}
//             {/* <img src={`${process.env.PUBLIC_URL}/images/${src}.JPG`} alt={name} className="img"></img> */}
//         </div>
//     </>


//  export const AddApartment= () => {
// //     //useDispatch - משתנה שמשגר פעולות לחלל
//     const dispatch = useDispatch()
// // // //     const navigate = useNavigate()

// // // // //     const C1 = useSelector(store => store.Cars)
//     const [newAprtment, setnewAprtment] = useState({})
//     const Send = () => {
//          addAprtment(newAprtment).then(x=>
//                     {
//                         dispatch(setnewAprtment,newAprtment)
                   
                    
//                 })
// //         // setNewcar({ ...Newcar, idC: C1.length+1})
//         // dispatch(a(NewCity))

// //         navigate('/Cars/')
   
//             }

//     return <>
//     <p>,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</p>
//        <div className="car-form">
//             <h2>Add New Car</h2>
//             <br></br>
            
            
//             <input placeholder="input name:"
          
       
      
       
//        onBlur={(e) =>   
//     setnewAprtment({ ...newAprtment ,newAprtment: e.target.value }, console.log(e.data))}></input>
                 
                 
                

//             <br></br>

      
            
//             {/* <br></br>
//             {getAllCatgory.map((item, index) =>
//             <div key={index}>
//                 <p>{item.name}</p>
//                 </div>
//             )}
//             <br></br> */}

 
               
//                  <button 
//                  className="submit-button"
//                  onClick={Send}
//                  >send</button> 
               
//          </div>
//     </> 

//  }
 

export const AddApartment1 = () => {

    const cUser=useSelector(data=>data.currentUser)
    const [listAdvertiser, setListAdvertiser] = useState([])

    // useEffect(()=>{
    //  getAllAdvertiser().then(x=>{
    //      console.log(x.data);
    //      setListAdvertiser(x.data)
    //  }
    //      )
    // },[])
    useEffect(() => {
        getAll()
            .then(x => {
                console.log(x.data);
                setListAdvertiser(x.data)
            })
    }, [])
 console.log(listAdvertiser);
    // שליפת כל הקטגוריות
    const [listCat, setListCat] = useState([])

    useEffect(() => {
        getAllCatgory()
            .then(x => {
                console.log(x.data);
                setListCat(x.data)
            })
    }, [])
    console.log(listCat);

    // שליפת כל הערים
    const [listCity, setListCity] = useState([])

    useEffect(() => {
        getAllCity().then(x => {
            console.log(x.data);
            setListCity(x.data)
        })
    }, [])
    console.log(listCity);

 

    // const l = ["a", "b", "c"]
    const [newAp, setNewAp] = useState()

    const add = () => {
        // c= cars.indexOf(cars.find(x=>x.id==e.target.value))
console.log(cUser);
console.log(cUser.user._id);
//   const c= listAdvertiser.find(x=>x.password==cUser.password)
    // console.log(cUser.password);
    // console.log(c.data);
    // if(c)
    // {
        setNewAp({...newAp,advertist:cUser.user._id})
    // }
    // else{
    //     setNewAp({...newAp,advertist:"555"})
    // }
        console.log(newAp);

        addAprtment(newAp).then(x => {
            // console.log(x)
            swal(`Hello `, 'login successfully!', 'success')
        })
    }


    return <>
        <label>name apartment:</label><br></br>
        <input placeholder="input name apartment"
            onBlur={(e) => setNewAp({ ...newAp, nameApartment: e.target.value })}>
        </input><br></br>


        <label>descraption:</label><br></br>
        <input placeholder="input descraption"
            onBlur={(e) => setNewAp({ ...newAp, description: e.target.value })}>
        </input><br></br>

        <label>address of apartment:</label><br></br>
        <input placeholder="input address of apartment"
            onBlur={(e) => setNewAp({ ...newAp, address: e.target.value })}>
        </input><br></br>

        <label>countBed:</label><br></br>
        <input type="number" placeholder="input countBed"
            onBlur={(e) => setNewAp({ ...newAp, countBed: e.target.value })}>
        </input><br></br>

        <label>price:</label><br></br>
        <input placeholder="input price"
            onBlur={(e) => setNewAp({ ...newAp, price: e.target.value })}>
        </input><br></br>

        <label>add:</label><br></br>
        <input placeholder="add"
            onBlur={(e) => setNewAp({ ...newAp, add: e.target.value })}>
        </input><br></br>

        <img src={`${process.env.PUBLIC_URL}${item.img}.jpg`} style={{ width: '150px', height: '150px' }}></img>

        <select onChange={(e) => setNewAp({ ...newAp, category: e.target.value })}>
            <option disabled selected>choose category</option>
            {listCat && listCat.map((item, i) =>
                <option key={i} value={item._id}>{item.nameCategory}</option>
            )}

        </select>
        <br></br><br></br>

        <select onChange={(e) => setNewAp({ ...newAp, city: e.target.value })}>
            <option disabled selected>choose city</option>
            {listCity && listCity.map((item, i) =>
                <option key={i} value={item._id}>{item.nameCity}</option>
            )}


        </select>


        <button onClick={add}>ok</button>
    </>
}




export const UpdateApartment=()=>{

    const cUser=useSelector(data=>data.currentUser)


    const params=useParams()
    const {id}=params
    console.log(id);


const [newAp, setNewAp]=useState()
const send=(event)=>{
    updateApartment(event,newAp._id,cUser._id).then(x=>{
        swal("success", 'update apartment', 'success')

    })
}
return<>

<p>ooooooooooooooooo</p>
 {/* if(t==m)
 <div>
 <form onSubmit={send()}>
            
       
         <label htmlFor="nameApartment">nameApartment</label>
         <br></br>
         <textarea
              onBlur={(e) => setNewAp({ ...newAp, nameApartment: e.target.value })}>{r.nameApartment}</textarea>
          <br></br>
    
         <label htmlFor="address">address:</label>
         <br></br>
         <textarea placeholder="input address"
             onBlur={(e) => setNewAp({ ...newAp, address: e.target.value })}>{apId.address}</textarea>
         <br></br>
    
         <label htmlFor="countBed">countBed:</label>
         <br></br>
         <textarea placeholder="input countBed"
             onBlur={(e) => setNewAp({ ...newAp, countBed: e.target.value })}>{apId.countBed}</textarea>
         <br></br>

         <label htmlFor="price">price:</label>
         <br></br>
         <textarea placeholder="input price"
             onBlur={(e) => setNewAp({ ...newAp, price: e.target.value })}>{apId.price}</textarea>
         <br></br>

         <label htmlFor="add">add:</label>
         <br></br>
         <textarea placeholder="input add"
             onBlur={(e) => setNewAp({ ...newAp, add: e.target.value })}>{apId.add}</textarea>
         <br></br>

       
            <input type={"submit"}></input>
    </form>
</div> */}
</>
}





// export const SelectCategory = (props) => {

//     // types - מערך סוגי האטרקציות
//     // setType - פונקציית עריכת הסוג הנבחר
//     const { typeCategory, setCagegory } = props

//     return <>
//         <h4>choose category</h4>
//         {/* בעת בחירת סוג נשמור את הסוג הנבחר */}
//         <select onChange={(e) => setCagegory(e.target.value)}>
//             <option disabled selected>choose category</option>
//             {/* מעבר על מערך הסוגים */}
//             {/* עבור כל סוג נטען אלמנט בחירה */}
//             {typeCategory.map((x, i) =>
//                 <option
//                     // מפתח ייחודי לכל אלמנט שנוצר ממערך באמצעות מאפ
//                     key={i}
//                     // ערך של הבחירה
//                     value={x}>
//                     {/* מה שכתוב בין שתי התגיות - התצוגה */}
//                     {x}
//                 </option>)}
//         </select>
//     </>
// }



// export const GetallCategory1 = () => {
//     const [listCat, setListCat] = useState([])

//     useEffect(() => {
//         getAllCategory().then(x => {
//             console.log(x.data);
//             setListCat(x.data)
//         })
//     }, [])

//     return <>
//     </>
// }


// export const OneApartment = props => {
//     const { nameApartment, description, category, city, 
//          advertist, 
//         address, countBed, price, add } = props
//     const cUser=useSelector(data=>data.currentUser)
//     console.log(cUser);
// console.log(category);
// console.log(city);
//     return <>
//         <div>
//             <p>{nameApartment}</p>
//             <p>description: {description}</p>
//             <p>category: {category}</p>
//             <p>city: {city}</p>
//             {/* <p>advertist: {advertist}</p> */}
//             <p>address: {address}</p>
//             <p>countBed: {countBed}</p>
//             <p>price: {price}</p>
//             <p>add: {add}</p>
            
//             {/* <p>advertiser:{advertist}</p> */}
//            {/* { cUser&&<p>phon:{cUser.user.phon}</p>}
//             {cUser&&<p>phona:{cUser.user.anotherPhon}</p>} */}

//         </div>
//     </>
// }




