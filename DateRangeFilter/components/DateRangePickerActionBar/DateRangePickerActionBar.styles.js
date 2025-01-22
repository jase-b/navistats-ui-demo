import styled from "@emotion/styled";
import DialogActions from '@mui/material/DialogActions';

export const ButtonContainer = styled(DialogActions)(({ theme }) => ({
    justifyContent: 'center',
    padding: '0 20px 20px',
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-end',
        marginRight: '20px',
    }
}));