import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {


  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy]=useState("All")
    function handleFilterChange(e){
    setFilterBy(e.target.value);
  }
  return(
    <select name="filter" onChange={handleFilterChange} >
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>

    </select>
  )
  
  const foodToDisplay= foods.filter((food)=>{
    if (filterBy==="All"){
      return true;
    }else{
      return food.cuisine===filterBy
    }
  
  })

 

  // function handleAddFood() {
  //   const newFood = getNewRandomSpicyFood();
  //   console.log(newFood);
  // }

  // const foodList = foods.map((food) => (
  //   <li key={food.id}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  // return (
  //   <div>
  //     <button onClick={handleAddFood}>Add New Food</button>
  //     <ul>{foodList}</ul>
  //   </div>
  // );if
function handleLiClick(id){
  const NewFoodArray= foods.map((food)=>{
    if(food.id ===id){
      return {
        ...food,
        heatLevel: food.heatLevel+1,
      }
    }else{
      return food
    }
  })
  setFoods(NewFoodArray)
}

  function handleAddFood(){
    const newFood= getNewRandomSpicyFood();
    const NewFoodArray=[...foods, newFood]
  }

  const foodList= foods.map((food)=>(
    <li key={food.id} onClick={()=> handleLiClick(food.id)}>
      <span>{food.name}</span> <br/>| <button>Heat: {food.heatLevel} </button> <br/>| Cuisine: {food.cuisine}
    </li>

  ))
  return(
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  )
   

}


export default SpicyFoodList;
