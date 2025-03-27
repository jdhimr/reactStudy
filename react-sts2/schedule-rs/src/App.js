import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardList from "./BoardList";

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="Lnk">Home</Link>
          </li>
          <li>
            <Link to="/mypage" className="Lnk">MyPage</Link>
          </li>
          <li>
            <Link to="/dashboard" className="Lnk">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypage" element={<BoardList/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    )
}

export default App;

//Home 컴포넌트
function Home() {
   
    return (
      
      <div className="Body">
        <h1>홈</h1>
        <table>
          <thead>
            <tr>
              <th>회원번호</th>
              <th>아이디</th>
              <th>이름</th>
            </tr>
          </thead>
      
          <tbody>
          {/*       
            <tr th:each="member : ${memberList}">
              <td><span th:text="${member.user_no}"></span></td>

              <td><span th:text="${member.user_id}"></span></td>
              <td><span th:text="${member.user_nm}"></span></td>
            </tr>
          */}
          </tbody>
        </table>
      </div>
    )
  }

//MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>;
}
//Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}
