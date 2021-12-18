import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const BankWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const BankContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  height: '90%',
  backgroundColor: theme.palette.background.default,
}));
