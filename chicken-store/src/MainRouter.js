import logo from "./logo.svg";
import "./App.css";
import ChickenList from "./component/ChickenList";
import ChickenForm from "./component/ChikenForm";
import Modal from "./component/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainRouter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 사용자가 보고싶을 때 볼 수 있도록 처음에는 false 보이지 않음 설정

  // 검색어 상태 추가 초기 검색값이 없기 때문에 공란
  const [searchTerm, setSearchTerm] = useState("");

  // 오픈 true 닫음 false
  // const에서 동작하는 기분이 1개일 때 {} 중괄호 생략 가능
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const handle검색 = () => {
    navigate(`/search?query=${searchTerm}`); // 검색 페이지로 이동하면서 검색어 전달
  }

  return (
    <div className="app-container">
      <button className="chicken-register-button" onClick={openModal}>
        메뉴등록하기
      </button>
      <ChickenList />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChickenForm />
      </Modal>
    </div>
  );
}

export default MainRouter;
