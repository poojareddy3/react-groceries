import { useState } from "react"
import { findRenderedComponentWithType } from "react-dom/test-utils"
import List from '../Data'
import GroceryList from "./GroceryList"

function Groceries() {
 const [groceryList, setGroceryList] = useState(List)

 const [item, setItem] = useState("")
 const [brand, setBrand] = useState("")
 const [units, setUnits] = useState("")
 const [quantity, setQuantity] = useState("")
 const [isPurchased, setIsPurchased] = useState(false)

 const getItem = (e) => {
     setItem(e.target.value)
 }

 const getBrand = (e) => {
     setBrand(e.target.value)
 }

 const getUnits = (e) => {
    setUnits(e.target.value)
 }

 const getQuantity = (e) => {
    setQuantity(e.target.value)
 }

 const getIsPurchased = (e) => {
    setIsPurchased(e.target.value)
    //setIsPurchased(!isPurchased)
    // if(e.target.value === 'true'){
    //     setIsPurchased(isPurchased === true)
    // } else if(e.target.value === 'false'){
    //     setIsPurchased(isPurchased === false)
    // }
      // const target = e.target;
    // const value = target.name === 'true' ? target.checked : target.value
    // const isPurchased = target.name 
 }

 const handleAddButton = () =>{
    const addItem = {
         item: item,
         brand: brand,
         units: units,
         quantity: quantity,
         isPurchased: isPurchased,
     }
     const newList = [...groceryList, addItem];
     setGroceryList(newList)

     setItem(" ")
     setBrand(" ")
     setUnits(" ")
     setQuantity(" ")
     setIsPurchased(false)
 }

 const handleRemoveButton = (index) => {
    //  console.log(index)
    //  console.log(ele)
    //const newListAfterRemove = [...groceryList.filter((item) => item !== ele)]
    //const newListAfterRemove = groceryList.filter((item) => item !== ele)
    //  const newListAfterRemove = groceryList.splice(index, 1);
    // console.log(newListAfterRemove)
    // setGroceryList(newListAfterRemove)
    // setGroceryList(groceryList.filter((item) => item !== ele))
    // setGroceryList(groceryList => {
    //     groceryList.splice(index, 1)
    //     return groceryList
    // })
    const newListAfterRemove = [...groceryList]
    newListAfterRemove.splice(index, 1)
    setGroceryList(newListAfterRemove)
 }

    return(
        <div>
            <h1> Grocery List</h1>
           <div className="mainDisplay">
               
               <label>item</label>
               <input id="item" type="text" onChange={getItem} value={item}></input>
               <label>brand</label>
               <input id="brand" type="text" onChange={getBrand} value={brand}></input>
               <label>units</label>
               <input id="units" type="text" onChange={getUnits} value={units}></input>
               <label>quantity</label>
               <input id="quantity" type="text" onChange={getQuantity} value={quantity}></input>
               <label>isPurchased</label>
                            
               {/* <div className="check">
                    <input type="checkbox"  onChange={getIsPurchased} value={true} />True
                    <input type="checkbox"  onChange={getIsPurchased} value={false}/>False
               </div>  */}
               {/* <div id="isPurchased"> 
                    <input type="radio" name="isPurchased" value={true} onChange={getIsPurchased} />True
                </div>
                <div id="isPurchased">
                    <input type="radio" name="isPurchased" value={false} onChange={getIsPurchased} />False
                </div> */}
                <select id="isPurchased" onChange={getIsPurchased} value={isPurchased}>
                    <option value={true}>true</option>
                    <option value={false}>false</option>
                </select>
              
                <button onClick={handleAddButton}> Add</button>
           </div>

           {
             groceryList.map((ele, index) => {
                return(
               <div>
               <GroceryList item={ele.item}
               brand={ele.brand}
               units={ele.units}
               quantity={ele.quantity}
               isPurchased={ele.isPurchased}
               remove= {handleRemoveButton.bind(index)}
               key={index}/>
               </div>
           )
        })
    }
        </div>

  
    )
}

export default Groceries