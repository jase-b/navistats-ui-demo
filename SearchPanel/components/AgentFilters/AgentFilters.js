import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import * as sc from '../../SearchPanel.styles';

const textFieldMaxLength = { maxLength: 80 };

const AgentFilters = () => {
    const { register } = useFormContext();

    const { searchFilters } = useSelector(state => state.agentMap);

    return (
        <sc.PanelSection>
            <sc.PanelSectionHeading>Agent</sc.PanelSectionHeading>
            <sc.SearchFilterLabel
                control={
                    <sc.SearchFilterTextField
                        {...register('agentName')}
                        defaultValue={searchFilters.agentName}
                        inputProps={{ ...textFieldMaxLength }}
                        placeholder='Search for an agent...'
                    />
                }
                label='Agent Name'
                labelPlacement='top'
            />
        </sc.PanelSection>
    );
};

export default AgentFilters;