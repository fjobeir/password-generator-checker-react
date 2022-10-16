import { useRef } from 'react'

import './Check.css'

const Check = props => {

    const passwordField = useRef()
    const capitalRule = useRef()
    const smallRule = useRef()
    const numbersRule = useRef()
    const charactersRule = useRef()
    const lengthRule = useRef()

    const checkPassword = () => {
        const passwordValue = passwordField.current.value
        const capitalRegEx = /[A-Z]/
        const smallRegEx = /[a-z]/
        const numberRegEx = /[0-9]/
        const characterRegEx = /[!@#$%^&*(),.?":{}|<>_+=/]+/
    
        if (passwordValue.match(capitalRegEx)) {
            capitalRule.current.classList.add('matched')
        } else {
            capitalRule.current.classList.remove('matched')
        }
        if (passwordValue.match(smallRegEx)) {
            smallRule.current.classList.add('matched')
        } else {
            smallRule.current.classList.remove('matched')
        }
        if (passwordValue.match(numberRegEx)) {
            numbersRule.current.classList.add('matched')
        } else {
            numbersRule.current.classList.remove('matched')
        }
        if (passwordValue.match(characterRegEx)) {
            charactersRule.current.classList.add('matched')
        } else {
            charactersRule.current.classList.remove('matched')
        }
        if (passwordValue.length > 8) {
            lengthRule.current.classList.add('matched')
        } else {
            lengthRule.current.classList.remove('matched')
        }
    }

    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Password Checker</h1>
                    <p>Check your password against several critiria, type your password in the field below</p>
                    <form className="row g-3 align-items-center mb-5">
                        <div className="col-12">
                            <label className="visually-hidden" for="passwordField">Username</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="passwordField" ref={passwordField}
                                    placeholder="Start typing your password" onKeyUp={checkPassword} />
                            </div>
                        </div>
                    </form>
                    <ul className="list-group">
                        <li className="list-group-item" id="capitalRule" ref={capitalRule}>
                            <span>
                                <i className="bi bi-x-circle"></i>
                                <i className="bi bi-check-square"></i>
                            </span>
                            <span>Password has capital letters</span>
                        </li>
                        <li className="list-group-item" id="smallRule" ref={smallRule}>
                            <span>
                                <i className="bi bi-x-circle"></i>
                                <i className="bi bi-check-square"></i>
                            </span>
                            <span>Password has small letters</span>
                        </li>
                        <li className="list-group-item" id="numbersRule" ref={numbersRule}>
                            <span>
                                <i className="bi bi-x-circle"></i>
                                <i className="bi bi-check-square"></i>
                            </span>
                            <span>Password has numbers</span>
                        </li>
                        <li className="list-group-item" id="charactersRule" ref={charactersRule}>
                            <span>
                                <i className="bi bi-x-circle"></i>
                                <i className="bi bi-check-square"></i>
                            </span>
                            <span>Password has special characters</span>
                        </li>
                        <li className="list-group-item" id="lengthRule" ref={lengthRule}>
                            <span>
                                <i className="bi bi-x-circle"></i>
                                <i className="bi bi-check-square"></i>
                            </span>
                            <span>Password length is larger than 8</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Check