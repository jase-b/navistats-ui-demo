import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import * as sc from '../../SearchPanel.styles';

const textFieldMaxLength = { maxLength: 80 };

const PropertyFilters = () => {
    const { register } = useFormContext();

    const { searchFilters } = useSelector(state => state.agentMap);

    return (
        <sc.PanelSection>
            <sc.PanelSectionHeading>Property</sc.PanelSectionHeading>
        </sc.PanelSection>
    );
};

export default PropertyFilters;