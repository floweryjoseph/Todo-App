import styles from "../modules/todos.module.css";
const ToDos = (props) => {
  const changeStatus = (index) => {
    const newArr = [...props.toDos];
    newArr[index].isCompleted = !newArr[index].isCompleted;
    props.setToDos(newArr);
  };

  const deleteTodo = (index) => {
    var updatedArray=props.toDos.filter((item, i)=> i !== index);
    props.setToDos(updatedArray);
  }

  return (
    <div className={styles.toDoContainer}>
      {props.toDos.map((toDo, index) => {
        return (
          <div key={index} className={styles.listItems}>
            <input
              onChange={() => changeStatus(index)}
              type="checkbox"
              checked={toDo.isCompleted}
            />
            <p
              className={
                toDo.isCompleted === true
                  ? styles.todoComplete
                  : styles.todoInComplete
              }
            >
              {toDo.content}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDos;
