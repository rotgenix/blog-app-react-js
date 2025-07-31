import React from 'react'
import AppNavigation from '../../components/Navigation/AppNavigation'

const Explore = () => {
    return (
        <div className={`explore-page max-w-[1230px]`} style={{ margin: "auto" }}>
            <AppNavigation />

            <div
                className={`explore-page-container flex justify-center items-center`} style={{
                    marginTop: "24px",
                }}
            >
                {/* Main Image Container */}
                <div className={`w-full h-[600px] max-h-[600px] relative`}>
                    <div className={`explore-page-img-cont flex justify-center items-center w-full h-full`} style={{
                        overflow: "hidden",
                        // padding: "20px",
                        objectPosition: "center",
                        borderRadius: "12px",
                    }}>
                        <img src={"https://cdn.pixabay.com/photo/2025/07/21/15/20/eve-9726477_960_720.jpg"} alt="" className={``}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>

                    <div
                        className={`bg-white absolute bottom-[-64px] left-[64px] rounded-[12px]`}
                        style={{
                            padding: "40px",
                            boxShadow: "4px 4px 10px #4848482d, -4px 4px 10px #4848482d"
                        }}
                    >
                        <div
                            className={`bg-[#4B6BFB] inline-block text-[14px] text-[#FFFFFF] rounded-[6px]`}
                            style={{
                                padding: "4px 10px",
                                marginBottom: "16px",
                                fontWeight: "500",
                            }}
                        >Technology</div>

                        <h1
                            className={`max-w-[600px] leading-[50px]`}
                            style={{
                                fontSize: "36px",
                                fontWeight: "600",
                                lineHeight: "40px",
                                marginBottom: "24px",
                            }}
                        >The Impact of Technology on the Workplace: How Technology is Changing</h1>

                        <div className={`flex justify-start items-center gap-[20px]`}>
                            <div className={`flex justify-center items-center gap-[12px]`}>
                                {/* <img src="" alt="" /> */}
                                <p className={''} style={{
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    color: "#676767"
                                }}>Rot Genix</p>
                            </div>

                            <p style={{
                                // fontWeight: "500",
                                fontSize: "16px",
                                color: "#676767"
                            }}>August 20, 2022</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Explore
