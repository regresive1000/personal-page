import styles from '../public/styles/DragAndDrop.module.scss';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";



const DragAndDrop = () => {



 const moveElmColumn = (lists, source, destination) => {
  let removedElm;
  const startIndexSource = source.index;
  const endIndexDestination = destination.index;
  const sourceColumn = source.droppableId;
  const destinationColumn = destination.droppableId;
  const removedResult = lists.filter( elm => { //Verifica de donde sale el elemento
    
    if(elm.name === sourceColumn) {
      //Quita el elemento de la columna source
      const result = [...elm.list];
      [removedElm] = result.splice(startIndexSource, 1);
      
      //Devuelve la columna editada
      elm.list = result;
      return elm;
      
    }
    //Devuelve el listado por defecto
    return elm;

  })
  const resultadoListados = removedResult.filter(elm => {
    if(elm.name === destinationColumn) {
      const result = [...elm.list];
      result.splice(endIndexDestination, 0, removedElm);
      //Devuelve la columna editada
      elm.list = result;
      return elm;
    }
    return elm;
  })
  return resultadoListados;
 }

  
  const initialTasks = { name: "initialTasks", title: "To do:", list:[] }
  const inprocess = { name: "inprocess", title: "In Process:", list:[] }
  const done = { name: "done", title: "Done:", list:[] }
  const [tasks, setTasks] = useState([ initialTasks, inprocess, done ]);
  const [task, setTask] = useState('')

  useEffect( () => {
    try {
      const resultado = JSON.parse(localStorage.getItem( 'tasks' ));
      if(resultado === null) {
        return;
      }
      if(!resultado) {
        return;
      }
      setTasks(JSON.parse(localStorage.getItem( 'tasks' )));
    } catch (error) {
      console.log(error)
      return;
    }
    
    
    
  }, [])

  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  function handleTaskSubmit(e) {
    e.preventDefault();
    if(task === "") {
      alert('Debes completar el campo para añadir una tarea')
      return;
    }
    setTasks((prevState) => {
      const taskObj = { id: Date.now().toString(), text: task}
      const updatedTasks = [...prevState];
      updatedTasks[0].list.push(taskObj);
      console.log(updatedTasks)
      return updatedTasks;
    });
    setTask("");
  }

  function handleDeleteElement(e, id) {
    
    setTasks( prevTasks => { // Prevtasks trae los elementos del estado
      const resultado = prevTasks.filter( elm => {

        const nuevoList = elm.list.filter( e => {
          if(e.id === id) { //Elimina al elemento del listado
            return;
          }
          return elm;
        })
        
        elm.list = [...nuevoList];
        return elm;
      })

      return resultado; //El resultado devuelto actualiza el estado
    })
  }

  return (
    
    
    <DragDropContext onDragEnd={(result) => {
      const {source, destination} = result;
      if(!destination) {
        return;
      }
      if(source.index === destination.index && source.droppableId === destination.droppableId) {
        return;
      }
      
      setTasks(prevTasks => moveElmColumn(prevTasks, source, destination))
      console.log(tasks)
    }}>
    
    
    

      <div className={styles.main}>

        <form className={styles.formAddElm} onSubmit={ e => {handleTaskSubmit(e)} }>
          <h2>Añade Elementos a la Lista:</h2>
          <input className={styles.inputText} type="text" value={task} onChange={e => {setTask(e.target.value)}} />
          <input className={styles.inputButton} type='submit' value="Añadir Tarea" />
        </form>

        <div className={styles.cards}>

          { 
            tasks.map(( taskCol, indexCol ) => (

              <div className={styles.cardTasks} key={indexCol}>
                <h3>{taskCol.title}</h3>

                <Droppable droppableId={taskCol.name}>
                  { (droppableProvided) => 
                    ( /* droppableprops le pasa todas las funciones del droppable - el ref es la conexión del componente a mi ul para convertirlo en Droppable - el placeholder guarda el espacio en el ul */
                      <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className={styles.tasksContainer}>
                        {
                          tasks[indexCol].list.length ?                  
                            tasks[indexCol].list.map( (task, index) => ( 
                              <Draggable key={task.id} draggableId={task.id} index={index}>
                                { (draggableProvided) => (
                                    <li
                                      {...draggableProvided.draggableProps}
                                      ref={draggableProvided.innerRef}
                                      {...draggableProvided.dragHandleProps} /* permite agarrar al elemento que quiero que sea solo agarrable */
                                      className={styles.taskItem}
                                      >
                                      {task.text}
                                      <button className={styles.buttonDeleteElement} onClick={e => handleDeleteElement(e, task.id)}>&#128473;</button>
                                    </li>
                                  )
                                }
                              </Draggable>
                            ))
                            :
                            ""
                        }
                        {droppableProvided.placeholder}
                      </ul>
                    )
                  }
                </Droppable>

              </div>

          ))
          }

        </div>

        
        

       


      </div>
   
    
    </DragDropContext>
    
    
  )
}

export default DragAndDrop