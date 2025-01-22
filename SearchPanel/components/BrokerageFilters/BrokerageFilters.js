import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import * as sc from '../../SearchPanel.styles';

const textFieldMaxLength = { maxLength: 80 };

const BrokerageFilters = () => {
    const { register } = useFormContext();

    const { searchFilters } = useSelector(state => state.agentMap);

    return (
        <sc.PanelSection>
            <sc.PanelSectionHeading>Brokerage</sc.PanelSectionHeading>
            <sc.SearchFilterLabel
                control={
                    <sc.SearchFilterTextField
                        {...register('brokerageName')}
                        defaultValue={searchFilters.brokerageName}
                        inputProps={{ ...textFieldMaxLength }}
                        placeholder='Search for a brokerage...'
                    />
                }
                label='Brokerage Name'
                labelPlacement='top'
            />
        </sc.PanelSection>
    );
};

export default BrokerageFilters;