import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  function onChange(event){
    setSearchFilter(event.target.value);
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    const nameItem = item.name.toLowerCase();
    const searchTerm = searchFilter.toLowerCase();
  
    if (selectedCategory === "All") {
      return nameItem.includes(searchTerm);
    }
   

    return (
      item.category === selectedCategory && nameItem.includes(searchTerm)
    );
  
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
    <Filter onCategoryChange={handleCategoryChange} search ={searchFilter}onSearchChange={onChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
