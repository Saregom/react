import { ReactComponent as Logo } from './sources/logo-ochobits2.svg';
import { NavLink } from 'react-router-dom';

const Signin = (props) =>{
    return(
        <div className="cont cont-signin">
            <div className="div-logo">
                <Logo className="logo-login" alt='logo Ocho Bits'/>
            </div>
            <div className="div-index divSignin">
                <h3>New account</h3>
                <form /* action="{validations()} */ className="myForm">
                    <div className="row">
                        <div className="col-sm-7  form-floating">
                            <input id="name" className="form-control" type="text" placeholder="." required style={{height: '50px'}}/>
                            <label >First name</label>
                        </div>
                        <div className="col-sm form-floating">
                            <input id="identification" className="form-control" type="number" placeholder="." required style={{height: '50px'}}/>
                            <label className="l1">Identification</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-floating">
                            <input id="email" className="form-control" type="email" placeholder="." required style={{height: '50px'}}/>
                            <label>E-mail</label>
                            <p className="required style={{height: '50px'}}/ rEmail"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm form-floating">
                            <input id="pass" className="form-control" type="password" placeholder="." required style={{height: '50px'}}/>
                            <label>Password</label>
                            <p className="required style={{height: '50px'}}/ rPass"></p>
                        </div>
                        <div className="col-sm form-floating">
                            <input id="passConfirm" className="form-control" type="password" placeholder="." required style={{height: '50px'}}/>
                            <label>Confirm password</label>  
                            <p className="required style={{height: '50px'}}/ rConfirmPass"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm form-floating">
                            <input id="birthDay" className="form-control" type="date" placeholder="." required style={{height: '50px'}}/>
                            <label>Birth day</label>
                        </div>
                        <div className="col-sm form-floating">
                            <input id="mBirthDay" className="form-control" type="number" placeholder="." required style={{height: '50px'}}/>
                            <label>Month Birth day</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-floating">
                            <input id="address" className="form-control" type="text" placeholder="." required style={{height: '50px'}}/>
                            <label>Adress</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-floating">
                            <input id="cellPhone" className="form-control" type="number" placeholder="." required style={{height: '50px'}}/>
                            <label>CellPhone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm form-floating">
                            <input id="zone" className="form-control" type="text" placeholder="." required style={{height: '50px'}}/>
                            <label >Zone</label>
                        </div>
                        <div className="col-sm select-father">
                            <select id="type" name="Type" className="selected" required style={{height: '50px'}}>
                                <option value="" disabled defaultValue>Type</option>
                                <option value="COORD">COORD</option>
                                <option value="ASE">ASE</option>
                                <option value="ADM">ADM</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn-index btn-blue">Sign up</button>
                </form>
                <hr/>
                <NavLink className="haveAcount" exact="true" to="/login">I already have an account</NavLink>
            </div>
        </div>
    )
}

export default Signin;