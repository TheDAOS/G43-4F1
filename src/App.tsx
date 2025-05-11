import './App.css'
import AddTask from './components/AddTask'
import ShowTodoList from './components/ShowTodoLIst'

function App() {

  return (
    <div className='h-screen p-10 bg-stone-100 text-stone-800'>
      <div className='text-4xl font-semibold tracking-wider mb-1'>Todo List</div>
      <AddTask />
      <ShowTodoList />
    </div>
  )
}

export default App
