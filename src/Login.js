import LoginFrom from "./LoginFrom";
import React, { useState } from "react";

import axios from "axios";
function Login(){
    const [User, setUser] = useState({name:"",id:"",password:"",todo:[]})

    const [ele, setEle] = useState({todo:""})
    const LoginL = details=>{

        setUser({
            name: details.name,
            id: details.id,
            password: details.password,
            todo:details.todo
            
        })

        const test = document.getElementById("pap")
        details.todo.map((to)=>
            {if(to!==" ")(test.innerHTML+=`<option value='${to}'>${to}</option>`)}
        )
        //wyświetla elemet formularza 

    }
    /********************************************************
    * nazwa funkcji: LoginL
    *
    * parametry wejściowe: details - Przechowuje informacje o zalogowanym użytkowniku
    * opis funkcji: po poprawynm logowaniu przypisuje dane użytkownika do stanu User
    *
    * autor: Hubert fusiarz
    * ****************************************************/
    const submitHandler = a =>{
        a.preventDefault();
        if(document.getElementById("kapp").value!==""){  
        document.getElementById("kapp").value=""
        User.todo.push(ele.todo)
        axios.put(`http://localhost:3001/posts/${User.id}`,User)
        document.getElementById("jd").innerHTML=""
        wt()
        }
    }
    /********************************************************
    * nazwa funkcji: submitHandler
    *
    * parametry wejściowe: a - przechowuje informacje naciśniętym przycisku
    * opis funkcji: dopisuje element do listy
    *
    * autor: Hubert fusiarz
    * ****************************************************/
    const Deleting = ()=>{
        document.getElementById("kapp").value=""
        const xd = document.getElementById("pap").value
        const index = User.todo.indexOf(xd)
        const asd = User.todo
        if(index>=0)
        asd.splice(index,1)
        User.todo= asd
        axios.put(`http://localhost:3001/posts/${User.id}`,User)
        setEle("")
        wt()
    }
    /********************************************************
    * nazwa funkcji: Deleting
    *
    * parametry wejściowe: Brak
    * opis funkcji: usuwa element do listy
    *
    * autor: Hubert fusiarz
    * ****************************************************/
    const wt= ()=>{
        document.getElementById("jd").innerHTML="<table id='kd'>"
        User.todo.map((to)=>(
            document.getElementById("kd").innerHTML+=`<tbody><td>${to}</td></tbody>`
        ))
        document.getElementById("jd").innerHTML+="</table>"
        const test = document.getElementById("pap")
        test.innerHTML=""
        User.todo.map((to)=>{
            if(to!==" "){
                (test.innerHTML+=`<option value='${to}'>${to}</option>`)
            }
            
        }
            
            
        )
    }
    /********************************************************
    * nazwa funkcji: wt
    *
    * parametry wejściowe: Brak
    * opis funkcji: Odświerza elementy listy po wykonym działaniu
    *
    * autor: Hubert fusiarz
    * ****************************************************/
    const Logout= () =>{
        setUser({name:"",id:"",password:"",todo:[]})
    }
    /********************************************************
    * nazwa funkcji: Logout
    *
    * parametry wejściowe: Brak
    * opis funkcji: Wylogowuje użytkownika
    *
    * autor: Hubert fusiarz
    * ****************************************************/
    return(
        <div className="Omega">
            {(User.id!=="")?(
            <div className="witam"><h2 className="srodek">Witam {User.name}</h2>
            
                <div>
                    <div id="jd" className="srodek">
                        <table>
                            {User.todo.map((to)=>(
                                <tr>
                                    <td>{to}</td>
                                </tr>
                            ))}
                        </table>   
                    </div>
                    <div className="srodek">
                    <form onSubmit={submitHandler}>
                        <div className="srodek">Dodaj element: </div>
                        <input type="text" className="inp" id="kapp" minLength="3" maxLength={64} onChange={e=>setEle({...ele,todo: e.target.value})} value={ele.todo} />
                        <div className="srodek"><input type="submit" value="doddaj" className="buttons" /></div>
                    </form>
                    Usuń element</div>
                    <div>
                        
                        <form>
                            <div className="srodek">
                            <select id="pap" className="inp">
                            </select>
                            <br/><input type="button" value="Usuń" className="buttons"  onClick={Deleting}/></div>
                        </form>

                    </div>
                </div>
                <div className="srodek"><button onClick={Logout} className="buttons"  >Logout</button></div>
            </div>

            ):(<LoginFrom LoginL={LoginL}/>)}
            
        </div>
    )
}
export default Login;