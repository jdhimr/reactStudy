import React, {useEffect, useState} from 'react';
import axios from "axios";

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    
    useEffect(() => {
        const getBoardList = async() => {
            const result = axios.get('http://localhost:8080/test');
            return result;
            }

            getBoardList().then(res => setBoardList(res.data)); // 3) boardList 변수에 할당)
      }, []);
  return (
      <table>
        <button onClick={BoardList}>API 호출</button>
        <thead>
            <tr>
            <th>회원번호</th>
            <th>아이디</th>
            <th>이름</th>
            </tr>
        </thead>
        <tbody>
        {boardList && boardList.map((board) => (
            // 4) map 함수로 데이터 출력
            <tr key={board.user_no}>
                <td><span>{board.user_no}</span></td>
                <td><span>{board.user_nm}</span></td>
                <td><span>{board.user_id}</span></td>
            </tr>
        ))}
        </tbody>
    </table>
  );
};

export default BoardList;