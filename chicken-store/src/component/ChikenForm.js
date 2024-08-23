import React, {useState, useEffect} from "react";
import axios from "axios";
import '../css/ChickenForm.css';
import { useNavigate } from "react-router-dom";

const ChickenForm = () => {
    const [chickenName, setChickenName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();
    const 전달데이터 = {
        chickenName,
        description,
        price
    }
    // 스프링부트 연결 후 전달
    const 제출버튼 = () => {
        axios.post('http://localhost:9090/api/chicken',전달데이터)
        .then(response => {
            // 데이터 무사히 전달했을 경우
            alert('등록이 완료되었습니다.');
            navigate("/");
        })
        .catch(e => {
            alert('메뉴 등록에 실패하였습니다.')
            console.error('error : ' , e)
        });
    }
    return (
        <div className="chickenform-container">
            <label>
                메뉴 이름 :
                <input type="text" onChange={e => setChickenName(e.target.value)} value={chickenName}/>
            </label>
            <label>
                메뉴 설명 :
                <textarea onChange={e => setDescription(e.target.value)} value={description}/>
            </label>
            <label>
                가격 :
                <input type="number" onChange={e => setPrice(e.target.value)} value={price}/>
            </label>
            <button onClick={제출버튼}>등록하기</button>
        </div>
    )
}

export default ChickenForm;