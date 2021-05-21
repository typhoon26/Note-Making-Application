import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [input,setInput]=useState({title:"", content:""});
  const [items,setItems]=useState([]);

  function handleChange(event){
    const {name, value}=event.target;
    setInput(prevValue =>({...prevValue,[name]:value}));
  }
  function addItem(event){
    setItems((prevValue) => ([...prevValue,input]));
    setInput({title:"", content:""});
    event.preventDefault();
  }

  function deleteItem(value){
    setItems(prevValue =>
      (prevValue.filter((item,index) => value!=index)));
    }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} handleChange={handleChange} input={input}/>
      {items.map((item,index) => (<Note id={index} key={index} title={item.title} content={item.content} deleteItem={deleteItem}/>))}
      <Footer />
    </div>
  );
}

export default App;
