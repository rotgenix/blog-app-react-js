import { useSelector } from 'react-redux';

import "./loader.css"

const Loader = () => {
    const { showLoader } = useSelector(state => state.loader);

    return (
        <>
            {showLoader && <div className={`app-loader`}>
                <div id="clickbox" className="col-11 col-md-9 col-lg-6 loader-container overflow-y-auto mx-auto" data-tour='popup'>
                    <div className="loader"></div>
                </div>
            </div>}
        </>
    )
}

export default Loader
