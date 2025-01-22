import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import theme from 'theme';

export const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    }
}));

export const PanelColumn = styled(Box)(({ theme }) => ({
    '&:not(:first-of-type)': {
        marginTop: '40px'
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: 360,
        padding: '0 30px',
        '&:first-of-type': {
            paddingLeft: '0'
        },
        '&:not(:first-of-type)': {
            borderLeft: theme.cssProps.border,
            marginTop: 'unset',
        },
        '&:last-of-type': {
            paddingRight: '0'
        }
    }
}));

export const PanelSection = styled(Box)({
    // border: '1px solid red'
    '&:not(:first-of-type)': {
        marginTop: '40px'
    }
});

export const PanelSectionHeading = styled(Typography)({
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 14
});

export const SubmitButtonContainer = styled(Box)({
    marginBottom: '16px',
    marginTop: '20px',
    padding: '0 20px'
});

export const SubmitButton = styled(Button)(() => ({
    display: 'flex',
    fontSize: '13px',
    fontWeight: 500,
    margin: '0 auto',
    width: '100%',
    '&.Mui-disabled': {
        color: 'white'
    },
    '& .MuiSvgIcon-root': {
        fontSize: '18px',
        marginLeft: '6px'
    }
}));

export const SearchFilterLabel = styled(FormControlLabel)({
    alignItems: 'stretch',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '22px',
    width: '100%',
    '&:first-of-type': {
        marginTop: '0px'
    },
    '& .MuiFormControlLabel-label': {
        fontSize: '13px',
        fontWeight: 700,
        marginBottom: '8px',

    }
});

export const searchFilterFieldBaseStyles = {
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.primary.slate.medium}`,
    borderRadius: '3px',
    padding: '8px 16px'
};

export const SearchFilterTextField = styled(Input)(({ theme }) => ({
    ...searchFilterFieldBaseStyles,
    [theme.breakpoints.up('sm')]: {
        fontSize: '14px'
    }
}));

export const RangeInputContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
});

export const InputSpacer = styled(Box)({
    width: 30
});

export const DollarSign = styled(Box)({
    fontSize: '13px',
    fontWeight: 500,
    marginRight: '2px',
});

export const CalendarIcon = styled(CalendarMonthIcon)({
    fontSize: '18px',
    opacity: .2
});