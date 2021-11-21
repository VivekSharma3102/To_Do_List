import React from 'react'

function Todoitems({todoitems,setTodo}) {

    const displayLitems= () => {
        
        return(
            <>
                {
                    todoitems.map(item => {
                        return(
                        <div className="list-items">
                            <li>{item.todo}<button onClick={()=>{setTodo(todoitems.filter(e=>e.id !==item.id))}}>Remove</button></li>
                
                        </div>
                        )   
                    })
                     
                }
            </>
        )

    }
    return (
        <div className="itemscontainer">
            <div>
                {displayLitems()}
            </div>
        </div>
    )
}

export default Todoitems
