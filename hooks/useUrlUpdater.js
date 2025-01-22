import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getActiveFipsForActiveApp } from "../ducks/selectors";

const buildFipsUrlParam = activeFips => activeFips.join('-');

const useUrlUpdater = () => {
    const location = useLocation();
    const [_, setSearchParams] = useSearchParams();
    const { activeApp, isLoading } = useSelector(state => state.app);
    const agentMapActiveView = useSelector(state => state.agentMap.activeView);
    const titleTrakActiveView = useSelector(state => state.titleTrak.activeView);
    const activeFips = useSelector(getActiveFipsForActiveApp);
    const { dateRange } = useSelector(state => state.app);

    const updateAgentMapUrl = () => {
        setSearchParams({
            app: activeApp.appSlug,
            view: agentMapActiveView.viewSlug,
            fips: buildFipsUrlParam(activeFips),
        });
    };

    const updateTitleTrakUrl = () => {
        setSearchParams({
            app: activeApp.appSlug,
            view: titleTrakActiveView.viewSlug,
            fips: buildFipsUrlParam(activeFips),
            start: dateRange.startDate,
            end: dateRange.endDate,
        });       
    };

    useEffect(() => {
        if (activeApp.appSlug && !isLoading) {
            location.search = '';

            switch (activeApp.appSlug) {
                case 'agent-map':
                    updateAgentMapUrl();
                    break;

                case 'title-trak':
                    updateTitleTrakUrl();
                    break;
                    
                default:
                    break;
            }
        }

    }, [activeApp, isLoading]);
};

export default useUrlUpdater;