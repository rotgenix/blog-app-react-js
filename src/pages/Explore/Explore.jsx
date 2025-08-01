import React, { useState } from 'react'
import AppNavigation from '../../components/Navigation/AppNavigation'
import BusinessIcon from "../../assets/BusinessIcon.svg"

const Explore = () => {
    const [cardIndex, setCardIndex] = useState(-1);

    return (
        <div className={`explore-page max-w-[1230px]`} style={{ margin: "auto" }}>
            <AppNavigation />

            {/* Main Image Container */}
            <div
                className={`explore-page-container flex justify-center items-center`} style={{
                    marginTop: "24px",
                    marginBottom: "184px",
                }}
            >
                <div className={`w-full h-[600px] max-h-[600px] relative`}>
                    <div className={`explore-page-img-cont flex justify-center items-center w-full h-full`} style={{
                        overflow: "hidden",
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
                                <div className={`h-[36px] w-[36px] flex justify-center items-center rounded-[50%] overflow-hidden`}>
                                    <img src={"https://cdn.pixabay.com/photo/2025/07/10/11/33/sat-9706519_1280.jpg"} alt="" />
                                </div>
                                <p className={''} style={{
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    color: "#676767"
                                }}>Rot Genix</p>
                            </div>

                            <p style={{
                                fontSize: "16px",
                                color: "#676767"
                            }}>August 20, 2022</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Featured Posts  */}
            <div className={`explore-featured-posts flex justify-between gap-[32px]`}>
                <div className={`flex flex-col items-start gap-[32px] w-1/2`}>
                    <p
                        className={`text-[36px]`}
                        style={{
                            fontWeight: "bold",
                            lineHeight: "48px",
                            letterSpacing: "-2px",
                        }}
                    >Featured Posts</p>

                    <div
                        className={`w-full border border-[#4848482d] flex flex-col gap-[32px]`}
                        style={{
                            padding: "32px"
                        }}
                    >
                        <div className={`w-full h-full overflow-hidden`}>
                            <img src={"https://cdn.pixabay.com/photo/2025/07/17/14/14/sparrow-9719599_960_720.jpg"} alt="" className={`h-[352px] w-[669px]`} />
                        </div>

                        <div
                            className={`flex flex-col gap-[16px]`}
                        >
                            <p style={{
                                fontSize: "14px",
                                // fontWeight: "bold",
                                lineHeight: "20px",
                                letterSpacing: "0px",
                                color: "#4C4C4C"
                            }}>By <span style={{ color: "#592EA9" }}>John Doe</span> | May 23, 2025</p>

                            <h1 className={`''`} style={{
                                fontSize: "28px",
                                fontWeight: "bold",
                                lineHeight: "40px",
                                letterSpacing: "-1px",
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>

                            <p style={{
                                fontSize: "16px",
                                // fontWeight: "bold",
                                lineHeight: "28px",
                                letterSpacing: "0px",
                                color: "#6D6E76"
                            }}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>

                        <div>
                            <button className={`primary-button flex justify-center items-center`} style={{
                                padding: "16px 48px",
                                borderRadius: "0px",
                            }}> Read More <span className="css-arrow"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col items-start gap-[32px] w-1/2`}>
                    <div className={`w-full flex justify-between items-center`}>
                        <p
                            className={`text-[36px]`}
                            style={{
                                fontWeight: "bold",
                                lineHeight: "48px",
                                letterSpacing: "-2px",
                            }}
                        >All Posts</p>

                        <p className={`text-[#592EA9] cursor-pointer`}>View All</p>
                    </div>

                    <div className={`w-full`}>
                        {
                            Array.from({ length: 4 }, (_, i) => i).map((value, index) => {
                                return (
                                    <div
                                        className={`flex flex-col gap-[8px] cursor-pointer`}
                                        style={{
                                            padding: "32px",
                                            background: cardIndex === index ? "#FBF6EA" : ""
                                        }}
                                        onMouseEnter={() => { setCardIndex(index); }}
                                        onMouseLeave={() => { setCardIndex(-1); }}
                                    >
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                lineHeight: "20px",
                                                letterSpacing: "0px",
                                                color: "#4C4C4C",
                                            }}
                                        >By <span style={{ color: "#592EA9" }}>John Doe</span> | May 23, 2025
                                        </p>
                                        <h1
                                            style={{
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                lineHeight: "32px",
                                                letterSpacing: "0px",
                                            }}
                                        >
                                            8 Figma design systems that you can download for free today.
                                        </h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Latest Posts  */}
            <div
                className={`explore-latest-posts flex flex-col justify-center items-center gap-[32px]`} style={{
                    marginTop: "120px",
                }}
            >
                <p
                    className={`text-[36px]`}
                    style={{
                        fontWeight: "bold",
                        lineHeight: "48px",
                        letterSpacing: "-2px",
                        alignSelf: "start"
                    }}
                >Latest Posts</p>

                <div className={`flex justify-center items-center gap-[20px]`} style={{
                    flexWrap: "wrap"
                }}>
                    {
                        Array.from({ length: 3 }, (_, i) => i).map((value, index) => {
                            return (
                                <div className={`latest-post-card border border-[#E8E8EA] rounded-[12px] flex flex-col justify-center items-center gap-[16px] max-w-[392px] cursor-pointer`}
                                    style={{
                                        padding: "16px",
                                        boxShadow: "1px 1px 5px #4848482d, -1px 1px 5px #4848482d",
                                    }}
                                >
                                    <div className={`rounded-[6px] overflow-hidden`}>
                                        <img src={"https://cdn.pixabay.com/photo/2024/11/17/04/52/chilli-9202873_960_720.jpg"} alt="" />
                                    </div>

                                    <div
                                        className={`w-full flex flex-col gap-[20px]`}
                                        style={{
                                            padding: "8px",
                                        }}
                                    >
                                        <div className={`flex flex-col items-start gap-[16px]`}>
                                            <span className={`text-[#4B6BFB] rounded-[6px]`} style={{
                                                padding: "4px 10px",
                                                background: "rgba(75, 107, 251, 0.05)",
                                                // width:"ob"
                                            }}>Technology</span>
                                            <h3 className={`text-[24px]`}
                                                style={{
                                                    fontWeight: "600",
                                                    lineHeight: "28px",
                                                    letterSpacing: "0px",
                                                    alignSelf: "start",
                                                }}
                                            >The Impact of Technology on the Workplace: How Technology is Changing</h3>
                                        </div>

                                        <div className={`flex justify-start items-center gap-[20px]`}>
                                            <div className={`flex justify-center items-center gap-[12px]`}>
                                                <div className={`h-[36px] w-[36px] flex justify-center items-center rounded-[50%] overflow-hidden`}>
                                                    <img src={"https://cdn.pixabay.com/photo/2025/07/10/11/33/sat-9706519_1280.jpg"} alt="" />
                                                </div>

                                                <div>
                                                    <p
                                                        className={`h-full text-[16px] text-[#97989F]`}
                                                        style={{
                                                            fontWeight: "500",
                                                            lineHeight: "24px",
                                                            letterSpacing: "0px",
                                                            alignSelf: "start",
                                                        }}
                                                    >Tracey Wilson</p>
                                                </div>
                                            </div>

                                            <div>
                                                <p
                                                    className={`text-[16px] text-[#97989F]`}
                                                    style={{
                                                        fontWeight: "400",
                                                        lineHeight: "24px",
                                                        letterSpacing: "0px",
                                                        alignSelf: "start",
                                                    }}
                                                >August 20, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div
                    className={`border cursor-pointer`}
                    style={{
                        padding: "12px 20px",
                        borderRadius: "6px",
                        border: "1px solid rgba(105, 106, 117, 0.5)"
                    }}
                >
                    <p
                        className={`text-[#696A75]`}

                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "24px",
                            letterSpacing: "0px",
                        }}>View All Post</p>
                </div>
            </div>

            <div className={`h-[1px] bg-[#696A75]`} style={{
                marginTop: "40px",
            }}></div>

            {/* ABOUT AND MISSION */}
            <div
                className={`flex flex-col justify-center items-center`} style={{
                    marginTop: "80px",
                }}
            >
                <div className={`flex justify-center items-center w-full`}>
                    <div className={`h-[23px] w-[20%]`}></div>
                    <div className={`bg-[#FFD050] h-[23px] w-[50%]`}></div>
                    <div className={`bg-[#592EA9] h-[23px] w-[30%]`}></div>
                </div>

                <div className={`bg-[#F4F0F8] w-full flex justify-center items-center gap-[60px]`} style={{
                    padding: "96px 80px"
                }}>
                    <div
                        className={`flex flex-col items-start gap-[24px] w-[45%]`}
                        style={{

                        }}
                    >
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "20px",
                                letterSpacing: "3px",
                            }}
                        >ABOUT US</p>

                        <div className={`flex flex-col gap-[16px]`}>
                            <h3
                                style={{
                                    fontSize: "36px",
                                    fontWeight: "bold",
                                    lineHeight: "48px",
                                    letterSpacing: "0px",
                                }}
                            >
                                We are a community of content writers who share their learnings
                            </h3>

                            <div>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        lineHeight: "28px",
                                        letterSpacing: "0px",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div
                                    className={`flex justify-start items-center`}
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        lineHeight: "32px",
                                        letterSpacing: "0px",
                                        color: "#592EA9"
                                    }}
                                >
                                    Read More <span class="css-arrow-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`flex flex-col items-start gap-[24px] w-[55%]`}
                        style={{

                        }}
                    >
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "20px",
                                letterSpacing: "3px",
                                // alignSelf: "start"
                            }}
                        >OUR MISSION</p>

                        <div className={`flex flex-col gap-[16px]`}>
                            <h3
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    lineHeight: "40px",
                                    letterSpacing: "-1px",
                                }}
                            >
                                We are a community of content writers who share their learnings
                            </h3>

                            <div>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        lineHeight: "28px",
                                        letterSpacing: "0px",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`flex flex-col justify-center items-center gap-[48px]`} style={{
                    marginTop: "128px",
                }}
            >
                <p style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    lineHeight: "48px",
                    letterSpacing: "-2px",
                }}>Choose A Catagory</p>

                <div className={`flex justify-center items-center gap-[32px]`} >

                    {/* Card 1  */}
                    <div className={`w-[296] h-[228px] border border-[#4848482d] flex flex-col items-start gap-[16px]`} style={{
                        padding: "32px",
                    }}>
                        <div className={`bg-[#FBF6EA] rounded-[6px] overflow-hidden`}>
                            <img src={BusinessIcon} alt="" />
                        </div>

                        <div className={`flex flex-col gap-[4px]`}>
                            <h4 style={{
                                fontFamily: `"Sen", sans-serif`,
                                fontSize: "28px",
                                fontWeight: "bold",
                                lineHeight: "40px",
                                letterSpacing: "-1px",
                            }}>Business</h4>
                            <p style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "28px",
                                letterSpacing: "0px",
                                color: "#6D6E76",
                            }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={`w-[296] h-[228px] flex flex-col items-start gap-[16px] bg-[#FFD050]`} style={{
                        padding: "32px",
                    }}>
                        <div className={`bg-[#FBF6EA] rounded-[6px] overflow-hidden`}>
                            <img src={BusinessIcon} alt="" />
                        </div>

                        <div className={`flex flex-col gap-[4px]`}>
                            <h4 style={{
                                fontFamily: `"Sen", sans-serif`,
                                fontSize: "28px",
                                fontWeight: "bold",
                                lineHeight: "40px",
                                letterSpacing: "-1px",
                            }}>Business</h4>
                            <p style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "28px",
                                letterSpacing: "0px",
                                color: "#6D6E76",
                            }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={`w-[296] h-[228px] border border-[#4848482d] flex flex-col items-start gap-[16px]`} style={{
                        padding: "32px",
                    }}>
                        <div className={`bg-[#FBF6EA] rounded-[6px] overflow-hidden`}>
                            <img src={BusinessIcon} alt="" />
                        </div>

                        <div className={`flex flex-col gap-[4px]`}>
                            <h4 style={{
                                fontFamily: `"Sen", sans-serif`,
                                fontSize: "28px",
                                fontWeight: "bold",
                                lineHeight: "40px",
                                letterSpacing: "-1px",
                            }}>Business</h4>
                            <p style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "28px",
                                letterSpacing: "0px",
                                color: "#6D6E76",
                            }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className={`w-[296] h-[228px] flex flex-col items-start gap-[16px] bg-[#FFD050]`} style={{
                        padding: "32px",
                    }}>
                        <div className={`bg-[#FBF6EA] rounded-[6px] overflow-hidden`}>
                            <img src={BusinessIcon} alt="" />
                        </div>

                        <div className={`flex flex-col gap-[4px]`}>
                            <h4 style={{
                                fontFamily: `"Sen", sans-serif`,
                                fontSize: "28px",
                                fontWeight: "bold",
                                lineHeight: "40px",
                                letterSpacing: "-1px",
                            }}>Business</h4>
                            <p style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "28px",
                                letterSpacing: "0px",
                                color: "#6D6E76",
                            }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
