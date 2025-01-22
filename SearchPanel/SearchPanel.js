import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { toNumber } from "utils/numbers";
import EastIcon from '@mui/icons-material/East';
import * as agentMapActions from "ui/AgentMapView/ducks/actions";
import { searchFilterDefaults } from "ui/AgentMapView/ducks/reducer";
import AgentFilters from "./components/AgentFilters";
import TransactionFilters from "./components/TransactionFilters";
import BrokerageFilters from "./components/BrokerageFilters";
import DateRangeFilter from "ui/DateRangeFilter";
import CountiesFilter from 'ui/CountiesFilter';
// import PropertyFilters from "./components/PropertyFilters";
import * as sc from './SearchPanel.styles';

const SearchPanel = () => {
    const dispatch = useDispatch();
    
    const formProps = useForm();

    const onSubmit = formData => {
        const filterValues = {
            agentName: formData.agentName,
            brokerageName: formData.brokerageName,
            totalSalesMax: toNumber(formData.totalSalesMax)
                || searchFilterDefaults.totalSalesMax,
            totalSalesMin: toNumber(formData.totalSalesMin)
                || searchFilterDefaults.totalSalesMin,
            transactionsMax: toNumber(formData.transactionsMax)
                || searchFilterDefaults.transactionsMax,
            transactionsMin: toNumber(formData.transactionsMin)
                || searchFilterDefaults.transactionsMin
        };
        
        dispatch(agentMapActions.UpdateSearchFilters(filterValues))
            .then(() =>
                dispatch(agentMapActions.GetAgentMapSearchResults())
            );
    };

    return (
        <FormProvider {...formProps}>
            <sc.Form onSubmit={formProps.handleSubmit(onSubmit)}>
                <sc.PanelColumn>
                    <sc.PanelSection>
                        <sc.SearchFilterLabel
                            control={<DateRangeFilter />}
                            label='Transaction Dates'
                            labelPlacement='top'
                        />
                        <sc.SearchFilterLabel
                            control={<CountiesFilter />}
                            label='Location'
                            labelPlacement='top'
                        />
                    </sc.PanelSection>
                    <AgentFilters />
                    <BrokerageFilters />
                    <TransactionFilters />
                </sc.PanelColumn>
                <sc.PanelColumn>
                    <sc.SubmitButtonContainer>
                        {/* <PropertyFilters /> */}
                        <sc.SubmitButton
                            type='submit'
                            variant='contained'
                        >
                            Submit <EastIcon />
                        </sc.SubmitButton>
                    </sc.SubmitButtonContainer>
                </sc.PanelColumn>
            </sc.Form>
        </FormProvider>
    );
};

export default SearchPanel;