import './App.css';
import Table from "./Table";
import {useState} from "react";


function App() {


  const [data, setData] = useState([
    {id: 1, name: 'John', age: 20, salary:200},
    {id: 2, name: 'Alice', age: 24, salary:158},
    {id: 3, name: 'Eugene', age: 21, salary:180},
    {id: 4, name: 'Chris', age: 25, salary:294},
    {id: 5, name: 'Zoe', age: 23, salary:300},
  ])

  const config = [
    {key: 'id', label: 'ID', render: (row) => <strong>{row.id}</strong>},
    {key: 'nameUp', label: 'Name Up', render: (row) => <>{row.name.toUpperCase()}</>},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age', render: (row) => <>{row.age +1} years</>},
    {key: 'salary', label: 'Salary', render: (row) => <>{row.salary}</>},
    {key: 'action', label: null, render: (row) => <><button onClick={() => onDelete(row.id)}>Delete</button></>},
  ]

  const onDelete = (id) => {
    const delRow = data.filter(el => el.id !== id)
    setData(delRow)
  }

  return (
   <div>
     <Table data={data} config={config} onDelet={onDelete}/>
   </div>
  );
}



export default App;
