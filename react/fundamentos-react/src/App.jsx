import { Post } from "./Post"
import './assets/style/global.css'
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <h1>Postagens</h1>
      <Post author="Oberdan" 
        content="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, cupiditate harum illum ullam neque fuga, expedita voluptate nulla velit distinctio totam aperiam eum pariatur magni consequatur incidunt, voluptas ea quibusdam."/>
         <Post author="Sacanagem" 
        content="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, cupiditate harum illum ullam neque fuga, expedita voluptate nulla velit distinctio totam aperiam eum pariatur magni consequatur incidunt, voluptas ea quibusdam."/>
    </div>
  )
}

export default App
