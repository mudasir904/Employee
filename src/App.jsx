import EmployeeForm from "./Components/EmployeeForm"
import EmployeeProfile from "./Components/EmployeeProfile"
import EmployeeCard from "./Components/EmployeeCard"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeProfile />} />
        <Route path="/employeeform" element={<EmployeeForm />} />
      </Routes>
    </>
  )
}

export default App