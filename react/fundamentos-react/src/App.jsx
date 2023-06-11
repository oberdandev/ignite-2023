import './assets/style/global.css'
import { Header } from './components/Header';
import { Postagens } from "./scenes/Postagens";

function App() {
  return (
    <div>
      <Header title="Ignite Feed" />
      <h1>Postagens</h1>
      <Postagens />
    </div>
  )
}

export default App
