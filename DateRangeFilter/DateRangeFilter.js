import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { dateFormat, today, toDayjs } from 'utils/date';
import { appActions, useRefreshApp } from 'App';
import * as sc from './DateRangeFilter.styles';
import { dateRangeShortcuts } from './DateRangeFilter.config';
import DateRangePickerToolbar from './components/DateRangePickerToolbar';
import DateRangePickerField from './components/DateRangePickerField';
import DateRangePickerActionBar from './components/DateRangePickerActionBar/DateRangePickerActionBar';

const getDateRangeShortcutKey = ({ endDate, startDate }) => {
    const shortcut = Object.entries(dateRangeShortcuts)
        .find(([_, dateRangeShorcutValues]) => {
            return dateRangeShorcutValues.start.isSame(startDate, 'day')
                && dateRangeShorcutValues.end.isSame(endDate, 'day');
        });

    return shortcut?.[0] || 'custom';
};

const getShortCutLabelText = shortcutKey =>
    dateRangeShortcuts[shortcutKey]?.text || 'Custom';

const DateRangeFilter = () => {
    const dispatch = useDispatch();
    const refreshApp = useRefreshApp();

    const { isLoading } = useSelector(state => state.app);
    const { startDate, endDate } = useSelector(
        state => state.app.dateRange
    );

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [shortcutKey, setShortcutKey] = useState(
        getDateRangeShortcutKey({ endDate, startDate })
    );
    const [shortcutLabel, setShortcutLabel] = useState(getShortCutLabelText(shortcutKey));
    const [pickerStartDateObj, setPickerStartDateObj] = useState(toDayjs(startDate));
    const [pickerEndDateObj, setPickerEndDateObj] = useState(toDayjs(endDate));

    const closeDateRangePicker = () => setIsOpen(false);

    const updateDateRange = () =>
        dispatch(appActions.SelectDateRange({
            startDate: pickerStartDateObj.format(dateFormat),
            endDate: pickerEndDateObj.format(dateFormat)
        }))
        .then(() => {
            refreshApp();
            closeDateRangePicker();
            setShortcutLabel(getShortCutLabelText(shortcutKey));
        });

    return (
        <sc.Container>
            <DateRangePicker
                calendars={3}
                closeOnSelect={false}
                value={[pickerStartDateObj, pickerEndDateObj]}
                disabled={isLoading}
                maxDate={today}
                name="date-range-picker"
                onChange={([startObj, endObj]) => {
                    setPickerStartDateObj(startObj);
                    setPickerEndDateObj(endObj);
                }}
                onClose={closeDateRangePicker}
                open={isOpen}
                slots={{
                    actionBar: DateRangePickerActionBar,
                    field: DateRangePickerField,
                    toolbar: DateRangePickerToolbar
                }}
                slotProps={{
                    actionBar: { updateDateRange },
                    day: {
                        onClick: () => {
                            if (shortcutKey !== 'custom') {
                                setShortcutKey('custom');
                            }
                        }
                    },
                    field: {
                        anchorEl,
                        isOpen,
                        setIsOpen,
                        setAnchorEl,
                        shortcutLabel
                    },
                    layout: sc.layoutStyleOverrides,
                    popper: { anchorEl },
                    toolbar: {
                        pickerEndDateObj,
                        pickerStartDateObj,
                        shortcutKey,
                        setPickerEndDateObj,
                        setPickerStartDateObj,
                        setShortcutKey,
                    }
                }}
            />
        </sc.Container>
    );
};

export default DateRangeFilter;