import React from 'react'
import Search from "../../assets/Search.svg"

const AppNavigation = () => {
    return (
        <div className={`h-[100px] flex justify-between items-center`}>
            <div>
                <p className={`spirax-regular text-[40px]`}>Blogsee</p>
            </div>

            <div className={`flex justify-center items-center gap-[40px] text-[18px]`} style={{
                fontWeight: "300"
            }}>
                <p>Explore</p>
                <p>Blog</p>
                <p>Single Post</p>
                <p>Pages</p>
                <p>Contact</p>
                <p>Profile</p>
            </div>

            <div className={`flex items-center gap-[40px]`}>
                <div className={`h-[36px] flex justify-center items-center gap-[12px] rounded-[5px] bg-[#F4F4F5] cursor-pointer`} style={{
                    padding: "8px 16px"
                }}>
                    <input type="text" name="" id="" />

                    <img src={Search} alt="" />
                </div>

                <div>BTN</div>
            </div>
        </div>
    )
}

export default AppNavigation
