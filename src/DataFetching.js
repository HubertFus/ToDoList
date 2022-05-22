import React, {useState,useEffect}  from "react";
import axios from "axios";
function DataFetching(){
    const [posts,setPosts] = useState({})
    const [login,setLogin] = useState(1)
    const [idButtonClick, setIdButtonClick] = useState(1)
    const handlerbutton = () =>{
        setIdButtonClick(login)
    }
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/${login}`)
            .then(res=>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[idButtonClick])
    return(
        <div>
            <input type="text" value={login} onChange={e => setLogin(e.target.value)}/>
            <button type="button" onClick={handlerbutton}>Loguj</button>
            <div>{posts.name}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}
export default DataFetching;