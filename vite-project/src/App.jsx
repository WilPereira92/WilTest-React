import './App.css'
import ToDoMain from './components/ToDoMain'
import NavBar from './components/NavBar'
import Form from './components/Form'
function App() {

  return (
    <>
      <NavBar/>
      <Form/>
      <hr style={{margin: 36}}/>
      <ToDoMain/>
    </>
  )
}

export default App
