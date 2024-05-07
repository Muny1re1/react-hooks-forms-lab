import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    addItem: "",
    changeValue: "Produce"
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formData.addItem,
      category: formData.changeValue
    };
    onItemFormSubmit(newItem);
    setFormData({
      addItem: "",
      changeValue: "Produce"
    });
  }
  console.log(formData)

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="addItem"
          value={formData.addItem}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="changeValue"
          value={formData.changeValue}
          onChange={handleChange}
        >
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