import { useSelector } from 'react-redux';

const useSetNavLinkCssClasses = () => {
    const { appKeyName } = useSelector(state => state.app.activeApp);
    const { activeView } = useSelector(state => state[appKeyName]);

    const setNavLinkCssClasses = viewConfig => {
        const activeClass = activeView.viewSlug === viewConfig.viewSlug ? 'active' : '';
        const disabledClass = viewConfig.disabled ? 'disabled' : '';
    
        return [activeClass, disabledClass].join(' ');
    };

    return setNavLinkCssClasses;
};

export default useSetNavLinkCssClasses;