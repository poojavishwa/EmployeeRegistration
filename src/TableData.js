import { useEffect, useState } from "react";
import { GET_URL } from "./utils/constants";

function TableData() {
  const [empData,setEmpData]=useState([]);
  useEffect(()=>{
    fetchData();
  })
  
  const fetchData = async() =>{
    const data = await fetch(GET_URL);
    const json = await data.json();
    setEmpData(json)
  }
  


    return (
      <table className="table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>

          {empData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.FirstName}{data.FastName}</td>
                <td>{data.DOB}</td>
                <td>{data.StartDate}</td>
                <td>{data.EndDate}</td>
                <td>{data.Description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default TableData;