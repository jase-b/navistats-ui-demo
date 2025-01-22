import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actionTypes from '../ducks/actionTypes';

const THROTTLE_TIMER = 200;

const useScreenResizeListener = () => {
    const dispatch = useDispatch();
    let throttleOn = false;

    const onResize = () => {
        if (throttleOn) return;

        throttleOn = true;

        return setTimeout(() => {
            dispatch({
                type: actionTypes.SCREEN_RESIZED,
                payload: window.visualViewport.width
            });
            throttleOn = false;
        }, THROTTLE_TIMER);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, []);
};

export default useScreenResizeListener;