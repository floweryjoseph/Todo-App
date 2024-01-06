import styles from '../modules/input.module.css'

const Input = (props) => {

const saveTodo=()=>{
  if(props.inputValue.length>3){
  props.setToDos((prev)=>([...prev,{content : props.inputValue, isCompleted : false}]))  
  props.setInputValue("");
  }
}

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>TODO List</h2>  
      <div className={styles.box}>
       
        <input onChange={(e)=>props.setInputValue(e.target.value)}  value={props.inputValue} id = "input" className={styles.inp} type="text"/>  
        <button onClick={saveTodo} className={styles.saveBtn}>Save</button> 
     
        </div>
      
    </div>
  )
}

export default Input