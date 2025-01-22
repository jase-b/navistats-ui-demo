import { useDispatch, useSelector } from "react-redux";
import { LoadTitleTrackView } from 'ui/TitleTrackView/ducks/actions'; 
import { GetAgentMapSearchResults } from 'ui/AgentMapView';

const useRefreshApp = () => {
    const dispatch = useDispatch();

    const { activeApp } = useSelector(state => state.app);

    const refreshApp = () => {
        switch (activeApp.appSlug) {
            case 'title-trak':
                return dispatch(LoadTitleTrackView());

            case 'agent-map':
                return dispatch(GetAgentMapSearchResults());
        
            default:
                return;
        }
    };

    return refreshApp;
};

export default useRefreshApp;