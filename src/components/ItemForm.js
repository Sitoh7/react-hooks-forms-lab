import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({props,onItemFormSubmit,formName,handleFormNameChange,handleitemCategory}) {


  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formName} onChange={handleFormNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleitemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
