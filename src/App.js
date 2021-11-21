import React , {useState} from 'react';

import Form from "./components/form";
import Header from "./components/header";
import Todoitems from './components/todoitems';

function App() {
  // here we have to create list for todo items 

  const [todo, setTodo] = useState([])



  return (
    <div className="App">
      {/* lets start : */}
      <Header/>
      {/* ......  */}
      <Form setTodo={setTodo} len={new Date().toDateString}/>
      {/* todo items list   */}
      <Todoitems todoitems={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
