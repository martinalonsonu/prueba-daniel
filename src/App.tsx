import './App.scss'
import { useFetch } from './useFetch'

function App() {
  const { notes } = useFetch()
  return (
    <div className='all-container'>
      <div className='container'>
        <div className='container__title'>
          <h1>ÚLTIMAS NOTICIAS</h1>
        </div>
        <div>
          {notes.map((element) => (
            <p key={element.id}>{element.title}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
