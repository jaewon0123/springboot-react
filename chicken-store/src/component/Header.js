import React from "react";
import '../css/SearchResult.css';


const Header = () => {
  return (
    <div>
      <h1>치킨 가게 메뉴 관리</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="검색하고 싶은 치킨 메뉴를 작성해주세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={handle검색}>
          검색하기
        </button>
      </div>
    </div>
  );
};
export default Header;
