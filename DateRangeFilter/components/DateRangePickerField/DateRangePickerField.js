import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { toDayjs } from 'utils/date';
import FilterButton from 'ui/FilterButton';
import { ShortcutButton } from '../../DateRangeFilter.styles';

const formatButtonText = dateStr =>
    toDayjs(dateStr).format('M/D/YYYY');

const DateRangePickerField = forwardRef((props, ref) => {
    const { startDate, endDate } = useSelector(
        state => state.app.dateRange
    );

    return (
        <>
            <ShortcutButton
                color='info'
                disableElevation
                onClick={e => {
                    !props.anchorEl && props.setAnchorEl(e.target);
                    props.setIsOpen(!props.isOpen);
                }}
                size='small'
                variant='contained'
            >
                {props.shortcutLabel}
            </ShortcutButton>
            <FilterButton
                onClick={e => {
                    !props.anchorEl && props.setAnchorEl(e.target);
                    props.setIsOpen(!props.isOpen);
                }}
                ref={ref}
                sx={{ minWidth: '180px' }}
            >
                {`${formatButtonText(startDate)} - ${formatButtonText(endDate)}`}
            </FilterButton>
        </>
    );
});

export default DateRangePickerField;