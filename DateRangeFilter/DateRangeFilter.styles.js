import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const calendarDaySize = '26px';

export const Container = styled(Box)({
    alignItems: 'center',
    display: 'flex'
});

export const layoutStyleOverrides = {
    sx: {
        '& .MuiDateRangeCalendar-root': {
            justifyContent: 'center', 
            padding: '0 8px'
        },
        '& .MuiDateRangeCalendar-monthContainer ': {
            borderRight: 'none !important'
        },
        '& .MuiPickersCalendarHeader-labelContainer': {
            minWidth: '140px'
        },
        '& .MuiPickersArrowSwitcher-root': {
            padding: '0 10px'
        },
        '& .MuiDayCalendar-monthContainer': {
            minHeight: '210px'
        },
        '& .MuiDayCalendar-slideTransition': {
            minHeight: '210px',
            minWidth: '235px',
            paddingBottom: '12px'
        },
        '& .MuiDayCalendar-weekContainer': {
            marginBottom: '4px',
            marginTop: '4px',
        },
        '& .MuiDayCalendar-weekDayLabel': {
            height: calendarDaySize,
            width: calendarDaySize 
        },
        '& .MuiDateRangePickerDay-day': {
            height: calendarDaySize,
            width: calendarDaySize,
            fontSize: '11px',
            fontWeight: 500              
        }
    }        
};

export const ShortcutButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.slate.extraLight,
    color: theme.palette.primary.slate.medium,
    fontSize: '12px',
    '&:not(:first-of-type)': {
        marginLeft: '10px'
    },
    '&:hover': {
        backgroundColor: theme.palette.primary.slate.extraLight, 
    }
}));