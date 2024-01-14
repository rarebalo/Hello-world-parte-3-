import 'bootstrap/dist/css/bootstrap.min.css'
import Saludo from './components/Saludo'
import Contador from './components/Contador';
function App() {

  return (
    <>
      <Saludo saludoAmigo="hello my friend!"/>
      <Contador/>

    </>
  )
}
export default App
