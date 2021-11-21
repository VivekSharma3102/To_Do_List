import React from 'react'

function Form({setTodo,Len}) {
    var itemtoAdd=""
    const formsubmit = (e)=>{
        e.preventDefault()
        itemtoAdd = e.target.firstChild.value
        if(itemtoAdd !== ""){
            setTodo(all=>[...all,{id:Len,todo:itemtoAdd}])
        }
        e.target.firstChild.value=""

    }

    return (
        <div className="form">
            <form onSubmit={formsubmit}>
                <input type="text" placeholder="Write a Task ..."/>
                <button className="btn" type="submit" >ADD</button>
            </form>
        </div>
    )
}

export default Form
