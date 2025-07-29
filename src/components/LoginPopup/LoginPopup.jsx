import React, { useState } from 'react'
import "./loginPopup.css"
import PasswordEye from "../../assets/PasswordEye.svg"
import Close from "../../assets/Close.svg"
import { toast } from 'react-toastify'

const LoginPopup = ({ setLoginPopUp }) => {
    const [signUp, setSignUp] = useState(false);

    const notify = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            progressClassName: "bg-red-400",
            theme: "colored",
            type: "success",
        });
    }

    return (
        <div className={`login-popup flex flex-col gap-[30px]`}>
            <div className={`flex justify-between items-center`}>
                <div className={`login-pop-up-text-container`}>
                    <h1
                        className={`spirax-regular`}
                        style={{
                            fontSize: "56px",
                            fontWeight: "400"
                        }}
                    >Blogsee</h1>
                    <p
                        className={`text-[#676767]`}
                        style={{
                            marginTop: "-10px"
                        }}
                    >Inspire Someone by your Stories and Writing.</p>
                </div>

                <div
                    className={`cursor-pointer self-start`}
                    onClick={() => { setLoginPopUp(prev => !prev) }}
                    style={{
                        marginTop: "-5px",
                        marginRight: "-26px",
                    }}
                >
                    <img src={Close} alt="" className={`cursor-pointer`} />
                </div>
            </div>

            <div className={`login-pop-up-inputs-btn-container`}>
                <div className={`flex flex-col gap-[18px]`}>
                    {signUp && <div className={`input-label-container w-full flex flex-col gap-[8px]`}>
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "400",
                            }}
                        >Your full name</p>
                        <div className={`input-container`}>
                            <input type="text" placeholder='Enter your full name' />
                        </div>
                    </div>}

                    <div className={`input-label-container`}>
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "400",
                            }}
                        >Email Address</p>
                        <div className={`input-container`}>
                            <input type="text" placeholder='abc@xyz.com' />
                        </div>
                    </div>

                    {signUp && <div className={`input-label-container`}>
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "400",
                            }}
                        >Mobile no.</p>
                        <div className={`input-container`}>
                            <input type="text" placeholder='Enter your mobile no.' />
                        </div>
                    </div>}

                    <div className={`input-label-container`}>
                        <p>Password</p>
                        <div className={`input-container flex justify-center items-center gap-[12px]`}>
                            <input type="text" placeholder='******' />
                            <img src={PasswordEye} alt="" className={`cursor-pointer`} />
                        </div>
                        {!signUp && <p
                            className={`self-end`}
                            style={{
                                // marginTop: "-5px",
                            }}
                        >Forgot Password?</p>}
                    </div>

                    <div className={`flex flex-col gap-[24px] items-center`}>
                        <button
                            className={`primary-button w-full`}
                            style={{
                                borderRadius: "5px",
                                background: "#484848",
                                fontSize: "16px",
                                fontWeight: "400",
                                color: "#FFFFFF"
                            }}
                        >Sign in</button>
                        <p className={`cursor-pointer`} onClick={() => {
                            setSignUp(prev => !prev);
                            notify();
                        }}>{signUp ? "Already Have An Account? Log in!" : "Don’t Have An Account? Sign up!"}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPopup
