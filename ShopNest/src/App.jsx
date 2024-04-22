import style from './App.module.css'
import { Button } from './components/buttonComponent/Button'
import { NavBar } from "./components/navBar/NavBar"
function App() {


  return (
    <main className={style["wrap-all"]}>
      <h1 className={style["text-ex"]}>Teste</h1>
      <Button>dsfdsfsdfsdfsdfdsfa</Button>
      <NavBar></NavBar>
    </main>
  )
}

export default App
