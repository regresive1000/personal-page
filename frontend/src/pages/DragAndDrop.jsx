import styles from '../public/styles/DragAndDrop.module.scss';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "1",
    text: "React.js" 
  },
  {
    id: "2",
    text: "Next.js" 
  },
  {
    id: "3",
    text: "Remix.js" 
  },
  {
    id: "4",
    text: "Redux.js" 
  },
]

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const DragAndDrop = () => {

  

  const [tasks, setTasks] = useState(initialTasks);


  return (

    <DragDropContext onDragEnd={(result) => {
      const {source, destination} = result;
      if(!destination) {
        return;
      }
      if(source.index === destination.index && source.droppableId === destination.droppableId) {
        return;
      }

      setTasks(prevTasks => reorder(prevTasks, source.index, destination.index))

    }}>
    

      <div className='d-flex justify-content-center'>

        
        <div className={styles.cards}>

          <Droppable droppableId='tasks'>

            { (droppableProvided) => 
              ( /* droppableprops le pasa todas las funciones del droppable - el ref es la conexión del componente a mi ul para convertirlo en Droppable - el placeholder guarda el espacio en el ul */
                <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className={styles.tasksContainer}>
                  {
                    tasks.map( (task, index) => ( 
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        { (draggableProvided) => (
                            <li
                              {...draggableProvided.draggableProps}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.dragHandleProps} /* permite agarrar al elemento que quiero que sea solo agarrable */
                              className={styles.taskItem}
                              >
                              {task.text}
                            </li>
                          )
                        }
                      </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </ul>
              )
            }
            
          </Droppable>

        </div>
        





        <div className={styles.cards}>


        </div>


        <div className={styles.cards}>


        </div>



      </div>




    
    </DragDropContext>
  )
}

export default DragAndDrop