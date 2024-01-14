import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function StudentCourse() {

const [id, setId] = useState("");
const [studentname, setName] = useState("");
const [course, setCourse] = useState("");
const [students, setUsers] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    
    const result = await axios.get("https://localhost:7159/api/Student/GetStudent");
    setUsers(result.data);
    console.log(result.data);
  }
 
  async function save(event) {
   
    event.preventDefault();
    try {
      await axios.post("https://localhost:7159/api/Student/AddStudent", {
        
      studentname: studentname,
      course: course,
       
      });
      alert("Student Registration Successfull");
          setId("");
          setName("");
          setCourse("");
       
     
      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(students) {
    setName(students.studentname);
    setCourse(students.course);
   
 
    setId(students.id);
  }
 

  async function DeleteStudent(id) {
  await axios.delete("https://localhost:7159/api/Student/DeleteStudent/" + id);
   alert("Student deleted Successfully");
   setId("");
   setName("");
   setCourse("");
   Load();
  }
 

  async function update(event) {
    event.preventDefault();
    try {

  await axios.patch("https://localhost:7159/api/Student/UpdateStudent/"+ students.find((u) => u.id === id).id || id,
        {
        id: id,
        studentname: studentname,
        course: course,

        }
      );
      alert("State updated");
      setId("");
      setName("");
      setCourse("");
     
      Load();
    } catch (err) {
      alert(err);
    }
  }

    return (
      <div>
        <h1>Student_details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
           
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>Student_name</label>
            <input
              type="text"
              class="form-control"
              id="stname"
              value={studentname}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Course</label>
            <input
              type="text"
              class="form-control"
              id="course"
              value={course}
              onChange={(event) => {
                setCourse(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Add_New_Student_Course
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              State_Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student_id</th>
            <th scope="col">Student_name</th>
            <th scope="col">Courses</th>
         
 
            <th scope="col">Options</th>
          </tr>
        </thead>
        {students.map(function fn(student) {
          return (
            <tbody>
              <tr>
                <th scope="row">{student.id} </th>
                <td>{student.studentname}</td>
                <td>{student.course}</td>
                
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
        
      </div>
    );
  }
  
  export default StudentCourse;