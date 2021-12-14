import { ReactComponent as Logo } from './sources/logo-ochobits2.svg';
import { NavLink } from 'react-router-dom';

const Login = (props) =>{



    return(
        <div className="cont cont-login">
            <div className="div-logo">
                <Logo className="logo-login" alt='logo Ocho Bits'/>
            </div>
            <div className="div-index divLogin">
                <h3>Log in</h3>
                <form /* action={verifyUser()} */>
                    <div className="row">
                        <div className="col form-floating">
                            <input id="email1" className="form-control" type="email" placeholder="." required style={{height: '50px'}}/>
                            <label>E-mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-floating">
                            <input id="pass1" className="form-control" type="password" placeholder="." required style={{height: '50px'}}/>
                            <label>Password</label>
                        </div>
                    </div>
                    <button className="btn-index btn-blue">Log in</button>
                </form>
                <hr/>
                <button className="btn-index btn-green"><NavLink className="txt" exact="true" to="/signin">Create account</NavLink></button>
                
            </div>
        </div>
    )
}

export default Login;