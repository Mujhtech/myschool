import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { unlockUser } from "../../services/auth";
import { unlockUser as unlockUserAction } from "../../actions/user";
import { useToasts } from 'react-toast-notifications';

function Locked(props) {

    const user = useSelector((state) => state.user);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const errorsMessage = (errors) => {
        for (const key in errors) {
            addToast(errors[key][0], { appearance: 'error' });
        }
    }

    const unlockMe = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await unlockUser({password: password});
            console.log(response);
            dispatch(unlockUserAction(response.data));
            setLoading(false);
            addToast("Welcome back", { appearance: 'success' });
            props.history.push('/');
        } catch (err) {
            setLoading(false);
            if(!err.response) return;
            switch (err.response.status) {
              case 422:
                errorsMessage(err.response.data.errors);
                break
              case 401:
                addToast(err.response.data.message, { appearance: 'error' });
                break
              case 500:
                addToast(err.response.data.message, { appearance: 'error' });
                break
              default:
                break
            }
        }
    };


    return (
        <div>
            <div className="app">
                <div className="app-wrap">
                    <div className="app-contant">
                        <div className="bg-white">
                            <div className="container-fluid p-0">
                                <div className="row no-gutters">
                                    <div className="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                                        <div className="d-flex align-items-center h-100-vh">
                                            <div className="login p-50">
                                                <h1 className="mb-2">We Are </h1>
                                                <h4 className="mt-4">{user.user.fullname}</h4>
                                                <span className="mt-1"><i className="fa fa-lock"></i> Locked</span>
                                                <p className="mt-4 mb-0">You must enter your password to access</p>
                                                <form className="mt-2 mt-sm-5" onSubmit={(e) => unlockMe(e)}>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-group my-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Enter Password" aria-label=""
                                                                       aria-describedby="basic-addon2"
                                                                       disabled={loading}
                                                                       onChange={(e) => setPassword(e.target.value)}
                                                                       />
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text"
                                                                              id="basic-addon2"><i
                                                                            className="fa fa-unlock"></i></span>
                                                                    </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 mt-3">
                                                            <button disabled={loading} type="submit"
                                                                    className="btn btn-primary text-uppercase">{ loading ? 'Loading..' : 'Unlock' }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                                        <div className="row align-items-center h-100">
                                            <div className="col-7 mx-auto ">
                                                <img className="img-fluid" src="../assets/img/bg/login.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Locked;
