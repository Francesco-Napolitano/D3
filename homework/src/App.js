import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import BookList from './components/BookList'
import libri from './data/fantasy.json'

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <BookList ArrayLibri={libri} />
      </main>
    </div>
  )
}

export default App
