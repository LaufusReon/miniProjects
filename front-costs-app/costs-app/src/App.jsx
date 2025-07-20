import Navbar from "./components/navBar"
import SideBar from "./components/sideBar"
import MainLayout from "./layouts/MainLayout"
import Tables from './tableBuilds'

function App() {
  

  return (
    <>
      <Navbar/>
      <SideBar/>
      <MainLayout>
        <Tables/>
      </MainLayout>
    </>
  )
}

export default App
