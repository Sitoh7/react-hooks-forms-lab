import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchName,setSearchName] = useState("")
  const [list,setList] = useState(items)
  
  
  
  const [formName,setFormName] = useState("")
  const [itemCategory,setitemCategory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e){
    setSearchName(e.target.value)

  }

  function handleitemCategory(e){
    setitemCategory(e.target.value)
    

}

  function onItemFormSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formName,
      category: itemCategory,
    };
    

    let newarr=[...list,newItem]
  
    setList(newarr)

  }

  function handleFormNameChange(e){
    setFormName(e.target.value)
  }
  const itemsToDisplay = list.filter((item) => {
    if (selectedCategory === "All" ){ return true};

    // if(item.name.includes(searchName)){
    //   return true
    // }

    return item.category === selectedCategory ;
  }).filter(
    (item)=> {return item.name.includes(searchName)}
  )

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} formName={formName} handleFormNameChange={handleFormNameChange} handleitemCategory={handleitemCategory}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchName} />
      <ul className="Items" >
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
