import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  let [std1, setname] = useState(''); 
  var [std2, setstd2] = useState('');
  let [std3, setstd3] = useState('');
  let [std4, setstd4] = useState('');
  let [std5, setstd5] = useState('');
  let [std6, setstd6] = useState('');
  let [std7, setstd7] = useState('');
  let [Task, setTask] = useState([]);
  let [Task1, setTask1] = useState([]);


  let name = () => {
    var total1, min, max, per, cmt, temp, temp1;
    total1 = (parseFloat(std3) + parseFloat(std4) + parseFloat(std5) + parseFloat(std6) + parseFloat(std7));
    min = Math.min(std3, std4, std5, std6, std7);
    max = Math.max(std3, std4, std5, std6, std7);
    per = total1 / 5;
    cmt = 1;
    if (parseFloat(std3) < 35) {
      cmt++
    } if (parseFloat(std4) < 35) {
      cmt++
    } if (parseFloat(std5) < 35) {
      cmt++;
    } if (parseFloat(std6) < 35) {
      cmt++
    } if (parseFloat(std7) < 35) {
      cmt++;
    }
    if (cmt == 1) {
      temp = "PASS";
    } else if (cmt == 1 || cmt == 2 || cmt == 3) {
      temp = "ATKT";
    } else {
      temp = "FAIL";
    }
    if (per > 90) {
      var grade = "A+";
    } else if (per >= 80) {
      grade = "A";
    } else if (per >= 70) {
      grade = "B+";
    } else if (per >= 60) {
      grade = "B";
    } else if (per >= 50) {
      grade = "C";
    } else if (per >= 40) {
      grade = "D"
    } else if (per >= 35) {
      grade = "*";
    }


    setTask([...Task, { name: std1, rollno: std2, stu1: std3, stu2: std4, stu3: std5, stu4: std6, stu5: std7, total: total1, Min: min, Max: max, Per: per, result: temp, grade: grade }]);

    setTask1([...Task, { name: std1, rollno: std2, stu1: std3, stu2: std4, stu3: std5, stu4: std6, stu5: std7, total: total1, Min: min, Max: max, Per: per, result: temp, grade: grade }]);
  }
  let no = (p) => {
    console.log(p);
    var data = Task1.filter((e, i) => {
      return e.Per >= parseFloat(p) && e.Per <= parseFloat(p) + 10
    })
    console.log(data);
    setTask(data);
  }
  let res = (x) => {
    console.log(x);
    var data1 = Task1.filter((e1, i1) => {
      return e1.result == x
    })
    // console.log(data);
    setTask(data1);
  }
  let gra = (y) => {
    console.log(y);
    var data2 = Task1.filter((e1, i1) => {
      return e1.grade == y
    })
    setTask(data2)
  }



  return (
    <div className="App">
      Enter name :<input type='text' onChange={(e) => setname(e.target.value)}></input><br></br>
      Enter Rollno : <input type='text' onChange={(e) => setstd2(e.target.value)}></input><br></br>
      Student 1 : <input type='text' onChange={(e) => setstd3(e.target.value)}></input><br></br>
      Student 2 : <input type='text' onChange={(e) => setstd4(e.target.value)}></input><br></br>
      Student 3 : <input type='text' onChange={(e) => setstd5(e.target.value)}></input><br></br>
      Student 4 : <input type='text' onChange={(e) => setstd6(e.target.value)}></input><br></br>
      Student 5 : <input type='text' onChange={(e) => setstd7(e.target.value)}></input><br></br>
      <input type='button' value={"Submit"} style={{ cursor: 'pointer' }} onClick={() => name()}></input><br></br>
      <select onChange={(e) => { no(e.target.value) }}>
        <option>percentage</option>
        <option value="90">90</option>
        <option value="80">80</option>
        <option value="70">70</option>
        <option value="60">60</option>
        <option value="50">50</option>
        <option value="40">40</option>
      </select>
      <select onChange={(e) => { gra(e.target.value) }}>
        <option>grade</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B</option>
        <option value="B">B+</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="fail">FAIL</option>
      </select>
      <select onChange={(e) => { res(e.target.value) }}>
        <option>result</option>
        <option value="FAIL">FAIL</option>
        <option value="PASS">PASS</option>
        <option value="ATKT">ATKT</option>
      </select>
      <input type='button' value={"all"} onClick={(e) => { setTask(Task1) }}></input>
      <br></br>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Rollno</th>
          <th>Maths</th>
          <th>Science</th>
          <th>Hindi</th>
          <th>Account</th>
          <th>Static</th>
          <th>Total</th>
          <th>Min</th>
          <th>Max</th>
          <th>Percentage</th>
          <th>Grade</th>
          <th>Result</th>
        </tr>


        {
          Task.map((ele, ind) => {
            return (
              <tr style={{ color: ele.result == "PASS" ? "green" : ele.result == "ATKT" ? "blue" : "red" }}>
                <td>{ele.name}</td>
                <td>{ele.rollno}</td>
                <td>{ele.stu1}</td>
                <td>{ele.stu2}</td>
                <td>{ele.stu3}</td>
                <td>{ele.stu4}</td>
                <td>{ele.stu5}</td>
                <td>{ele.total}</td>
                <td>{ele.Min}</td>
                <td>{ele.Max}</td>
                <td>{ele.Per}</td>
                <td>{ele.grade}</td>
                <td>{ele.result}</td>
              </tr>
            )
          })
        }


      </table>
    </div>
  );
}

export default App;
