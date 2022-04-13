import {useState, useEffect} from "react"
import axios from 'axios'
function App() {
  const [students, setStudents] = useState(null)
  const [studentName, setName] = useState(null)
  useEffect(()=>{
    getData()
  }, [])
  const getData = ()=>{
    axios.get('http://localhost:5000/students').then(result=>{
      setStudents(result.data)
    })
  }
  const submitForm = (e)=>{
    e.preventDefault()
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: studentName,
      mode:"no-cors"
    }).then(response=>{
      getData()
    })
  }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2>Students list</h2>
                <ul className="list-group">
                    {students?
                    students.map(student=>{
                       return(
                       <li className="list-group-item">{student}</li>
                       ) 
                    })
                    :null
                    }
                </ul>
            </div>

            
                <div className="col-md-6">
                    <h2>Add student!!!</h2>
                    <form onSubmit={(e)=>submitForm(e)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Student name:</label>
                            <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
            </div>
        </div>
    </div>
  );
}

export default App;
