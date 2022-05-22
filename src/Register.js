import React ,{useState} from "react";
import axios from "axios";
import "./LoginForm.css";
import {useNavigate } from "react-router-dom";
  
function LoginFrom({error}){
    const [details,SetDetails] = useState({name:"",id:"",password:"",todo:[" "]})
    const submitHandler = a =>{
        a.preventDefault();

    }
    const test = useNavigate()
    /********************************************************
    * nazwa funkcji: submitHandler
    *
    * parametry wejściowe: a - przechowuje informacje naciśniętym przycisku
    * opis funkcji: zapewnia pełną funkcjonalność aplikacji
    *
    * autor: Hubert Fusiarz
    * ****************************************************/

    const handlerbutton = () =>{
        if(details.id.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ){
            details.id=details.id.toLowerCase()
            if(details.name!==""&&details.password!==""){
                    axios.post(`http://localhost:3001/posts/`,details)
                        .then(res=>{
                            document.getElementById("errors").innerHTML="pomyślnie utworzono konto"
                            setTimeout(() => {
                                przekierowanie()
                            }, 2000);
                            
                        })
                        .catch(err=>{
                        })
                    
                    }else{
                        document.getElementById("errors").innerHTML="Pola nie mogą być puste"
                    }  
        }
        else{
            document.getElementById("errors").innerHTML="Nieprawidłowy adres email"
        }
        
        
    }
    /********************************************************
    * nazwa funkcji: handlerbutton
    *
    * parametry wejściowe: Brak
    * opis funkcji: Po naciśnieciu przycisku Zarejestruj odbywa się uwierzytelnianie
    *
    * autor: Hubert Fusiarz
    * ****************************************************/
    const przekierowanie = () =>{
        test("/",{replace: true})
    }
    /********************************************************
    * nazwa funkcji: przekierowanie
    *
    * parametry wejściowe: Brak
    * opis funkcji: Po naciśnieciu przycisku Mam już konto przekierowuje do podstrony z logowaniem
    *
    * autor: Hubert Fusiarz
    * ****************************************************/
        return(
        <form onSubmit={submitHandler}>
            <div className="Form">
                <h2>Zarejestruj się</h2>
                {(error!=="")?(<div className="error">{error}</div>):""}
                <div className="Form-Group">
                    <label htmlFor="Name">Imie: </label>
                    <input type="text" className="inp" onChange={e=>{SetDetails({...details,name: e.target.value})}}/>
                </div>
                <div className="Form-Group">
                    <label htmlFor="Email">Email: </label>
                    <input type="email"  className="inp" onChange={e=>{SetDetails({...details,id: e.target.value})}} />
                </div>
                <div className="Form-Group">
                    <label htmlFor="Password">Hasło: </label>
                    <input type="password"className="inp" onChange={e=>SetDetails({...details,password: e.target.value})} />
                </div><div className="error" id="errors">

                </div>
                <input type="submit" className="buttons" onClick={handlerbutton} value="Zarejestruj się"/><input type="button" className="buttons" onClick={przekierowanie} value="Mam już konto"/>
            </div>
        </form>
    )
}
export default LoginFrom;
