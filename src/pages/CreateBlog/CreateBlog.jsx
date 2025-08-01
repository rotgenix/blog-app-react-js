import React from 'react'
import MyEditor from '../../components/Editor/Editor'
import AppNavigation from '../../components/Navigation/AppNavigation'

const CreateBlog = () => {
    return (
        <div className={`explore-page max-w-[1230px]`} style={{ margin: "auto" }}>
            <AppNavigation />
            <MyEditor />
        </div>
    )
}

export default CreateBlog
