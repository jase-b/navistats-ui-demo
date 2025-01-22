import Button from '@mui/material/Button';
import * as sc from './DateRangePickerActionBar.styles';

const DateRangePickerActionBar = props => (
    <sc.ButtonContainer
        className={props.className}
    >
        <Button
            onClick={props.updateDateRange}
            sx={{
                fontSize: '12px',
                fontWeight: 400
            }}
            variant='contained'
        >
            Apply Date Range
        </Button>
    </sc.ButtonContainer>
);

export default DateRangePickerActionBar;