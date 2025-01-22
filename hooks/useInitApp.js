import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import * as appActions from '../ducks/actions';
import { appNameConfigs } from 'App/App.config';

const useInitApp = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { activeApp, counties } = useSelector(state => state.app);

    const getAllUrlSearchParams = () => ({ 
        appParam: searchParams.get('app'),
        viewParam: searchParams.get('view'),
        fipsParam: searchParams.get('fips'),
        startParam: searchParams.get('start'),
        endParam: searchParams.get('end'),        
    });

    const getDefaultAppSlug = () => {
        const defaultAppName = counties.availableCounties[0].name;

        return appNameConfigs
            .find(n => n.appName === defaultAppName)
            .appSlug;
    };

    useEffect(() => {
        const { appParam, viewParam, ...restParams } = getAllUrlSearchParams();

        if (counties.hasCountySubscription) {  
            const appSlug = appParam || getDefaultAppSlug();

            dispatch(appActions.ValidateAppSubscription(appSlug))
                .then(() => dispatch(appActions.SetActiveApp(appSlug)))
                .then(() => dispatch(appActions.InitializeAppBarFilters(restParams)))
                .then(() => dispatch(appActions.LoadActiveApp({
                    activeAppSlug: appSlug,
                    titleTrackViewSlug: viewParam
                })))
                .catch(err => console.error(err));
        }
    }, []);

    return { activeApp };
};

export default useInitApp;