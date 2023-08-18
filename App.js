import { useState } from "react";
import "./App.css";
import ContactDetails from "./component/contacts";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [array, setArray] = useState([]);
  const [num, setNum] = useState("+91 ");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");

  function newContact(e) {
    e.preventDefault();
    const id = uuidv4();
    const tempp = { id: id, name: name, num: num, mail: mail };
    setArray([...array, tempp]);
    setName("");
    setNum("+91 ");
    setMail("");
  }

  function EditDetails(id) {
    const t = array.find((it) => it.id === id);
    setName(t.name);
    setMail(t.mail);
    setNum(t.num);
    setIndex(t.id);
  }

  function UpdateDetails(id, num, mail, name) {
    const updated = array.map((it) =>
      it.id === id ? { ...it, name: name, num: num, mail: mail } : it
    );

    setArray(updated);
    setName("");
    setMail("");
    setNum("");
    setIndex("");
  }
  function DelDetails(id) {
    const temp = array.filter((item) => item.id !== id);
    console.log(temp);
    setArray(temp);
  }
  return (
    <div className="App">
      <h1 className="Title">Contact Manager</h1>
      <hr />
      <p className="heading"> Add Contact</p>
      <div className="cForm">
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        {index === "" ? (
          <button type="submit" onClick={newContact}>
            Add
          </button>
        ) : (
          <button onClick={() => UpdateDetails(index, num, mail, name)}>
            Edit
          </button>
        )}
      </div>

      <p>Contact List:</p>
      <div className="contact-list">
        <div className="header">
          <span>Name</span>
          <span>Number</span>
          <span>Email</span>
          <span>Actions</span>
        </div>

        {array.map((it) => {
          return (
            <ContactDetails
              id={it.id}
              name={it.name}
              num={it.num}
              mail={it.mail}
              array={array}
              setArray={setArray}
              EditDetails={() => EditDetails(it.id)}
              DelDetails={() => DelDetails(it.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
