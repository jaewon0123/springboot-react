import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
    const [postsList, setPostsList] = useState([]);

    const posts = async () => {
        const response = await axios.get("/posts");
        setPostsList(response.data);
    }

    useEffect(() => {
        posts();
    },[postsList])

  return (
    <div>
      
        <h1>게시글 목록</h1>
      
        {postsList.map(list => (
        <div key={list.id}>
            <p>제목 : {list.title}</p>
            <p>내용 : {list.content}</p>
            <img src={list.imageUrl}/>
        </div>
        ))}
      
    </div>
  );
};

export default Posts;
