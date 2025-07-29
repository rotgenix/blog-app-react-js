import React from 'react'
import "./popup.css"

const Popup = ({ children }) => {
    return (
        // <div className="app-pop-up">
        //     {children}
        // </div>
        <div className={`app-pop-up`}>
            <div id="clickbox" className="col-11 col-md-9 col-lg-6 app-popup-container overflow-y-auto mx-auto" data-tour='popup'>
                {children}
            </div>
        </div>
    )
}

export default Popup
