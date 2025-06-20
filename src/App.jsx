import "bootstrap/dist/css/bootstrap.min.css";
import Saludar from './components/Saludar'

function App() {
  const nombre = 'My Friend 👋'
  return (
    <main className="container mt-5 text-center">
      <Saludar nombreProps={nombre}></Saludar>
    </main>
  )
}

export default App
