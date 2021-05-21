import React,{useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  let [noting,setNoting]= useState(false);
  function handleClick(event){
    setNoting(true);
  }
function Input(){
  if(noting===true){
    return(<input name="title" placeholder="Title" onChange={props.handleChange} value={props.input.title} />)
  }
  else{
    return null;
  }
}
  return (
    <div>
      <form className="create-note">
        <Input />
        <textarea name="content" placeholder="Take a note..." rows={noting?"3":"1"} onChange={props.handleChange} value={props.input.content} onClick={handleClick}/>
        <Zoom in={noting}>
        <Fab onClick={props.addItem}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
