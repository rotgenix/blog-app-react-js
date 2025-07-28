import MainImage from "../../assets/HomePage.svg"
import Aero from "../../assets/Aero.svg"

import "./home.css"

const Home = () => {
    return (
        <div className={`home-page flex flex-col justify-between items-center h-screen max-w-[2000px] m-auto`} style={{ margin: "auto" }}>
            <div
                className={`w-full home-page-navbar border-b border-b-[#DBDBDB] flex justify-between items-center h-[130px]`}
                style={{
                    padding: "0px 72px"
                }}
            >
                <p className={`spirax-regular font-light text-[56px]`}>Blogsee</p>

                <div className={`flex justify-center items-center gap-[50px]`}>
                    <p className={`font-light text-[24px]`}>Features</p>
                    <p className={`font-light text-[24px]`}>Contact Team</p>
                    <p className={`font-light text-[24px]`}>Write</p>
                    <button className={`w-[207px] h-[61px] primary-button font-medium text-[24px]`}>Sign in</button>
                </div>
            </div>

            <div className={`home-page-main-container w-full flex justify-center items-center gap-[12px]`}
                style={{
                    padding: "0px 72px"
                }}
            >
                <div className={`w-1/2`}>
                    <img src={MainImage} alt="" />
                </div>

                <div className={`home-page-main-text-container w-1/2 flex justify-center items-center flex-col gap-[30px]`}>
                    <div className={`home-page-special-text w-full max-w-[540px] flex flex-col`} style={{
                        alignSelf: "end"
                    }}>
                        <span className={`whitespace-nowrap`}>Unveil Thoughts </span>
                        <span className={`border-b-[4px]`}
                            style={{
                                alignSelf: "end"
                            }}
                        >Voice Yours</span>
                    </div>

                    <div style={{
                        alignSelf: "end"
                    }}>
                        <p className={`text-[24px] font-[300] whitespace-nowrap`}>Place Where Your Stories Meet Others' Emotions.</p>
                    </div>

                    <div className={`flex justify-center items-center primary-button font-medium text-[30px] gap-[16px] w-[306px]`} style={{
                        alignSelf: "end"
                    }}>
                        Get Started <img src={Aero} alt="" />
                    </div>
                </div>
            </div>

            <div
                className={`home-page-footer w-full border-t border-t-[#DBDBDB] flex justify-between items-center h-[120px]`}
                style={{
                    padding: "0px 72px"
                }}
            >
                <p className={`spirax-regular font-normal text-[40px]`}>Blogsee</p>

                <div className={`flex justify-center items-center gap-[50px]`}>
                    <p className={`font-light text-[20px]`}>Team Blogsee</p>
                    <p className={`font-light text-[20px]`}>Contact</p>
                    <p className={`font-light text-[20px]`}>About</p>
                    <p className={`font-light text-[20px]`}>Terms</p>
                    <p className={`font-light text-[20px]`}>Help</p>
                </div>
            </div>
        </div >
    )
}

export default Home


