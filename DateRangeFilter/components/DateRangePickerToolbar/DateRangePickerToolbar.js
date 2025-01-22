import { DateField } from '@mui/x-date-pickers-pro';
import { toDayjs } from 'utils/date';
import * as sc from './DateRangePickerToolbar.styles';
import { dateRangeShortcuts } from 'ui/DateRangeFilter/DateRangeFilter.config';

const dateFieldProps = {
    ...sc.dateFieldStyles,
    format: 'M/D/YYYY'
};

const DateRangePickerToolbar = (props) => {
    const setDateRangeByShortcut = ({ start, end }) => {
        props.setPickerStartDateObj(start);
        props.setPickerEndDateObj(end);
        props.onChange([start, end]);       
    };

    return (
        <sc.Container className={props.className}>
            <sc.DateFieldsContainer>
                <DateField
                    {...dateFieldProps}
                    className={props.rangePosition === 'start' ? 'active' : ''}
                    onBlur={e => {
                        if (!toDayjs(e.target.value).isSame(props.pickerStartDateObj)) {
                            props.setPickerStartDateObj(Object.create(props.pickerStartDateObj));
                        }
                    }}
                    onChange={value => {
                        if (value.isValid() && value.isBefore(props.pickerEndDateObj)) {
                            props.setPickerStartDateObj(value);
                            props.setShortcutKey('custom');
                        }
                    }}
                    onFocus={() => props.onRangePositionChange('start')}
                    value={props.pickerStartDateObj}
                />
                <sc.Dash>-</sc.Dash>
                <DateField
                    {...dateFieldProps}
                    className={props.rangePosition === 'end' ? 'active' : ''}
                    onBlur={e => {
                        if (!toDayjs(e.target.value).isSame(props.pickerEndDateObj)) {
                            props.setPickerEndDateObj(Object.create(props.pickerEndDateObj));
                        }
                    }}
                    onChange={value => {
                        if (
                            value.isValid() &&
                            value.isAfter(props.pickerStartDateObj) &&
                            !value.isAfter(toDayjs())
                        ) {
                            props.setPickerEndDateObj(value);
                            props.setShortcutKey('custom');
                        }
                    }}
                    onFocus={() => props.onRangePositionChange('end')}
                    value={props.pickerEndDateObj}
                />
            </sc.DateFieldsContainer>
            <sc.ShortcutsContainer>
                <label>
                    <sc.ShortcutsLabel>
                        Date Ranges:
                    </sc.ShortcutsLabel>
                    <sc.ShortcutSelect
                        inputProps={{
                            style: { padding: '4px 35px 4px 10px' }
                        }}
                        native
                        onChange={e => {
                            const scKey = e.target.value;
                            
                            props.setShortcutKey(scKey)
                            setDateRangeByShortcut(dateRangeShortcuts[scKey]);
                        }}
                        value={props.shortcutKey}
                    >
                        <option disabled value='custom' style={{ display: 'none' }}>
                            Custom
                        </option>
                        {Object.entries(dateRangeShortcuts)
                            .map(([key, { text }]) => (
                                <option key={key} value={key}>{text}</option>
                            ))
                        }
                    </sc.ShortcutSelect>
                </label>
            </sc.ShortcutsContainer>
        </sc.Container>
    );
};

export default DateRangePickerToolbar;