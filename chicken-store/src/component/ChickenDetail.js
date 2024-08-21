import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../css/ChickenDetail.css';

const ChickenDetail = () => {
    const [chicken, setChicken] = useState(null);

    const {id} = useParams();
    console.log("id : " ,id);
    // 만약에 치킨 데이터가 없으면 로딩중

    useEffect(() => {
        axios.get(`/api/chicken/${id}`)
        .then((response) => {
            setChicken(response.data);
        })
        .catch((e) => alert("불러오는데 실패용"));
    },[])
    if(!chicken) {
        return (
            <div>
                로딩중 ...
            </div>
        )
    }
    return (
        <div className="chicken-detail-container">
        <h1>{chicken.chickenName}</h1>
        <p>{chicken.description}</p>
        <p>{chicken.price}원</p>
        </div>
    )
}

export default ChickenDetail;