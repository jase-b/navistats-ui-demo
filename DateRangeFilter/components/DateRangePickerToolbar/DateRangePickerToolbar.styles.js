import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import theme from 'theme';

export const dateFieldStyles = {
    InputProps: {
        sx: {
            border: theme.cssProps.border,
            borderRadius: '4px',
            fontSize: '14px',
            maxWidth: '110px',
            padding: '4px 8px',
            '.active > &': {
                borderColor: theme.palette.primary.main,
                borderWidth: '2px'
            }
        }
    },
    inputProps: {
        style: {
            padding: 0,
            textAlign: 'center'
        }
    }
};

export const Container = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0 0',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '12px'
    }
}));

export const DateFieldsContainer = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    marginBottom: '12px',
    [theme.breakpoints.up('sm')]: {
        marginBottom: 'unset',
        marginLeft: '20px',
    }
}));

export const Dash = styled('span')({
    margin: '0 6px'
});

export const ShortcutsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        marginRight: '20px',
    }
}));

export const ShortcutsLabel = styled('span')({
    fontSize: '13px',
    fontWeight: 600,
    marginRight: '10px'
});

export const ShortcutSelect = styled(Select)({
    border: '1px solid gray',
    fontSize: '14px',
});