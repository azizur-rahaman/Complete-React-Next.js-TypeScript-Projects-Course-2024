import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  
const clearAllItems = () => {
  setPeople([]);
}

const clearItem = (id) => {
  const newPeople = people.filter((person) => person.id != id);
  setPeople(newPeople);
}
  

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => clearItem(id)} >Clear Item</button>
          </div>
        );
      })}

      <button onClick={clearAllItems}>Clear All Items</button>
    </>
  );
};

export default UseStateArray;
