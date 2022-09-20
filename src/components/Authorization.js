import React from 'react';
import { Link } from 'react-router-dom'
import { BiLockAlt } from 'react-icons/bi'
import { MdOutlineMail } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {TOKEN, DATA} from '../ulils/api-client'

const EMAIL_REGEX =/^([A-Za-z0-9]{1,}[\\.-]{0,1}[A-Za-z0-9]{1,})+@([A-Za-z0-9]{1,}[\\.-]{0,1}[A-Za-z0-9]{1,})+[\\.]{1}[a-z]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,14}$/; 

const Authorization = () => {    

    const [email, setEmail] = useState(''); 
    const [validEmail, setValidEmail] = useState(false) 
    const [emailFocus, setEmailFocus] = useState(false);
    
    const [password, setPassword] = useState(''); 
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password])

    const [Send] = useState(false);
    const [setIncorrectData] = useState(false);
    const handleSubmit = () => {
        //e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(password);
        Send(true);
        if (!v1 || !v2) {
            return (
                DATA(v1.toString(), v2.toString(), Send, true)
                .catch((response) => {
                    alert("Code " + response.code.toString() + '\n' + "Description: " + response.description.toString());
                    setIncorrectData(true);
                })
            )
        } else {
            DATA(v1.toString(), v2.toString(), Send, true)
            .then((response) => {
                TOKEN(response);
                alert("Token: " + response.token.toString() + '\n' + "Expires: " + response.expires.toString());
                setIncorrectData(false)
            })
        }
    }
    return (
    <section>
        <div id='app' class='app'>
            <div className='Authorization'>
                <div className="Window">
                    <form onSubmit={handleSubmit}>
                        <span className="Login">Log in</span>
                        <div className="Input Input-confirmation" data-validate="Enter Email">
                            <MdOutlineMail/>
                            <input 
                                className="Input-field" 
                                name="email" 
                                placeholder="Email address" 
                                required
                                autoComplete = "off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setEmailFocus(true)}                                    
                            />
                            <button className="Button-radio" type="submit"></button>
                            <label>
                                <FontAwesomeIcon icon={faCheck} className={validEmail ? "Valid" : "Hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "Hide" : "Novalid"} />
                            </label>                                    
                        </div>    
                            <p id="uidnote" className={emailFocus && email && !validEmail ? "Help" : "off"}>
                                <FontAwesomeIcon icon={faInfoCircle}/>Введите свою почту.
                            </p>
                        <div className="Input1 Input-confirmation" data-validate="Enter password">
                            <BiLockAlt/>
                            <input 
                                className="Input-field1" 
                                type="password" 
                                name="pass" 
                                placeholder="Password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-invalid={validPassword ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPasswordFocus(true)}
                            />
                           <Link to="/recovery" className='Recovery'><i>Forgot?</i></Link>
                            <button className="Button-radio1" type="submit"></button>
                            <label>
                                <FontAwesomeIcon icon={faCheck} className={validPassword ? "Valid1" : "Hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "Hide" : "Novalid1"} />
                            </label>
                        </div>
                            <p id="pwdnote" className={passwordFocus && !validPassword ? "Help" : "off"}>
                                <FontAwesomeIcon icon={faInfoCircle}/> от 8 до 14 символов. Должны быть заглавные и строчные буквы, цифры и специальные символы.<br />
                                Разрешено: <span>!</span> <span>@</span> <span>#</span> <span>$</span> <span>%</span>
                            </p>
                        <div className="Button">
                            <Link to='/authorized'>
                                <button className="Input-button"
                                disabled={!validEmail || !validPassword ? true : false}>
                                Login to your account</button>
                            </Link>
                        </div>
                        <div className="Radio">
                            <label className="Label-radio">
                                <input className="Input-radio" type="checkbox" name="remember-me"/>&ensp;
                                Remember me &emsp;&emsp;&emsp;New here?&ensp;
                                <Link to="/authorized" className="txt1">Sign In</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    </section>
    );
};

export default Authorization;