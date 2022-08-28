import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const ScrollToTop = () => {
    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]); // Everytime our pathname changes, we scroll to the top.

    return (
        <div>

        </div>
    );
};

export default ScrollToTop;