import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/UserContextProvider"
import './App.css'

function App() {
 

  return (
    <UserContextProvider>
     <h1>React Learn with Me</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App