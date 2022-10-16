import { useRef } from "react"

const Generate = props => {

    const passwordField = useRef(null)
    const hasCapital = useRef(null)
    const hasSmall = useRef(null)
    const hasNumbers = useRef(null)
    const hasSpecial = useRef(null)

    const generatePassword = () => {
        let chars = ''
        if (hasCapital.current.checked) {
            chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if (hasSmall.current.checked) {
            chars += 'abcdefghijklmnopqrstuvwxyz'
        }
        if (hasNumbers.current.checked) {
            chars += '0123456789'
        }
        if (hasSpecial.current.checked) {
            chars += '!@#$%^&*()/<>.\{}'
        }
        if (chars.length < 10) {
            alert('Please check the characters that you want to include')
            return
        }
        var password = "";
        for (var i = 0; i <= 12; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        passwordField.current.value = password
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Password Generating Tool</h1>
                    <p>With password generating tool, I will help you to generate a new password. Click the generate button
                        then copy your password</p>
                    <form className="">
                        <div className="row g-3 align-items-center">
                            <div className="col-9">
                                <div className="input-group">
                                    <input ref={passwordField} type="text" className="form-control" placeholder="Password will appear here" />
                                </div>
                            </div>
                            <div className="col-3">
                                <button type="button" className="btn btn-primary w-100" onClick={generatePassword}>Generate Password</button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hasCapital" ref={hasCapital} />
                                            <label className="form-check-label" htmlFor="hasCapital">
                                            Has capital letters
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hasSmall" ref={hasSmall} />
                                            <label className="form-check-label" htmlFor="hasSmall">
                                            Has small letters
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hasNumbers" ref={hasNumbers} />
                                            <label className="form-check-label" htmlFor="hasNumbers">
                                            Has Numbers
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="hasSpecial" ref={hasSpecial} />
                                            <label className="form-check-label" htmlFor="hasSpecial">
                                            Has special characters
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    )
}

export default Generate