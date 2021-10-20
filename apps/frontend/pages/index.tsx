import { AbstractioLogo } from '@mirowsky/frontend-svg';
import { Box } from '@mui/material';

export function Index() {
  return (
    <Box
      sx={{
        bgcolor: '#F1F6FA',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AbstractioLogo sx={{ width: '50%', height: '50%' }} />
    </Box>
  );
}

export default Index;
