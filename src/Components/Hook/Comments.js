import { useEffect, useState } from "react"

const Comments =()=>{
    const [comments,setComments] = useState([])


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((res) => res.json())
        .then((data) => setComments(data));
    }, []);

return [comments, setComments]
}
export default Comments