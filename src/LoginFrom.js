import React ,{useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
function LoginFrom({LoginL,error}){
    const [details,SetDetails] = useState({Name:"",Email:"",Password:""})
    const [login,setLogin] = useState(1)
    const submitHandler = a =>{
        a.preventDefault();
    }
    /********************************************************
    * nazwa funkcji: submitHandler
    *
    * parametry wejściowe: a - przechowuje informacje naciśniętym przycisku
    * opis funkcji: zapewnia pełną funkcjonalność aplikacji
    *
    * autor: Hubert Fusiarz
    * ****************************************************/
    const test = useNavigate()
    const reghandler = (event)=>{
        event.preventDefault();
        test("/register",{replace: true})
    }
    /********************************************************
    * nazwa funkcji: reghandler
    *
    * parametry wejściowe: event - przechowuje informacje naciśniętym przycisku
    * opis funkcji: po naciśniętym przycisku Zrajestruj przekierowuje na strone rejestracji
    *
    * autor: Hubert Fusiarz
    * ****************************************************/
    const handlerbutton = () =>{
        axios.get(`http://localhost:3001/posts/${login}`)
            .then(res=>{
                if(res.data.password===details.Password){

                    LoginL(res.data)
                }
                else{

                    document.getElementById("errors").innerHTML="błędne dane"
                }
            })
            .catch(err=>{

                document.getElementById("errors").innerHTML="błędne dane"
            })
    }
    /********************************************************
    * nazwa funkcji: handlerbutton
    *
    * parametry wejściowe: Brak
    * opis funkcji: Po naciśnieciu przycisku zaloguj odbywa się uwierzytelnianie
    *
    * autor: Hubert Fusiarz
    * ****************************************************/
    return(
        <form onSubmit={submitHandler}>
            <div className="Form">
                <h2>Zaloguj się</h2>
                {(error!=="")?(<div className="error">{error}</div>):""}
                <div className="Form-Group">
                    <label htmlFor="Email" className="labele">Email: </label><br/>
                    <input type="email" className="inp" onChange={e=>{SetDetails({...details,Email: e.target.value},setLogin(e.target.value))}}  />
                </div>
                <div className="Form-Group">
                    <label htmlFor="Password" className="labele">Hasło: </label><br/>
                    <input type="password" className="inp" onChange={e=>SetDetails({...details,Password: e.target.value})} />
                </div><br/>
                <div className="error" id="errors">

                </div>
                <div className="Form-Group">
                    <input type="submit" className="buttons" onClick={handlerbutton} value="Zaloguj się"/><input type="button" className="buttons" onClick={reghandler} value="Zarejestruj się"/>
                </div>
                
            </div>
        </form>
    )
}
export default LoginFrom;
