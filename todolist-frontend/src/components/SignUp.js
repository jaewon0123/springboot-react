import React, {useState} from "react";

const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');

    const [result, setResult] = useState('');

    const [idValidation, setIdvalidation] = useState(false);

    const 아이디중복검사 = (eventId) => {
        setId(eventId);

        if(eventId.trim().length < 5) {
            setIdvalidation(false);
            return;
        }

        fetch("/idCheck?id=" + eventId)
        .then(response => response.text())
        .then(result => {

            if(Number(result) === 0) {
                setIdvalidation(true);
            } else {
                setIdvalidation(false);
            }
        })
    }

    const signup = () => {

        if(!idValidation) {
            alert('아이디가 유효하지 않습니다.');
            return;
        }

        if(pw !== pwCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const inputValues = {};
        inputValues.id = id;
        inputValues.pw = pw;
        inputValues.name = name;

        fetch("/signup", {

            method : "POST",

            headers : {"Content-Type" : "application/json"},

            body : JSON.stringify(inputValues)
        })

        .then(response => response.text())
        .then(result => {
            if(Number(result) > 0) {
                setResult('회원가입 성공하셨습니다.');
                setId('');
                setPw('');
                setPwCheck('');
                setName('');
            } else {
                setResult('회원가입 실패하셨습니다.');
            }
        })
    }


    return (
        <div className="signup-container">
            <label> ID :
                <input type="text"
                    onChange={e => 아이디중복검사(e.target.value)}
                    value={id}
                    className={idValidation ? '' : 'id-err'}
                    />
            </label>
            <label> PW :
                <input type="password"
                    onChange={e => {setPw(e.target.value)}}
                    value={pw}
                    />
            </label>
            <label> PWCHECK : 
                <input type="password"
                    onChange={e => {setPwCheck(e.target.value)}}
                    value={pwCheck}
                    />
            </label>

            <label> NAME :
                <input type="text"
                    onChange={e => {setName(e.target.value)}}
                    value={name}
                    />
            </label>
            <button onClick={signup}>가입하기</button>
            <hr/>
            <h3>{result}</h3>
        </div>
    )
}
export default Signup;