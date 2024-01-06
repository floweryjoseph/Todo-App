import { useState } from 'react'
import Input from '../components/input'
import styles from '../modules/main.module.css'
import ToDos from '../components/todos'
const Main = () => {
  const[inputValue, setInputValue]= useState('')
  const[toDos, setToDos] = useState([])
  console.log(inputValue)
  console.log(toDos)

  return (
    <div className={styles.main}>
        <Input inputValue={inputValue} setToDos={setToDos} setInputValue={setInputValue}/>
        <ToDos toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default Main