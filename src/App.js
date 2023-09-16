import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EmployeeForm from './EmployeeForm';
import TableData from "./TableData";



function App() {
  return (
    <div className="App">
      <EmployeeForm/>
      <TableData />
      {/* <FormData/> */}
    </div>
  );
}

export default App;
