import { useEffect, useState } from "react"

const Comments =()=>{
    const [comment,setComment] = useState([])


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((res) => res.json())
        .then((data) => setComment(data));
    }, []);

return [comment, setComment]
}
export default Comments