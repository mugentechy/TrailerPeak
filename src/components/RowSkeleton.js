import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const RowSkeleton = ({ itemCount = 6, isLargeRow = false }) => {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      <Grid container spacing={2} sx={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
        {[...Array(itemCount)].map((_, index) => (
          <Grid item key={index} xs={3} sx={{  minWidth: isLargeRow ? 180 : 120 }}>
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={isLargeRow ? 250 : 150} 
              sx={{ backgroundColor: '#111',borderRadius: '10px' }} 
            />
            <Box mt={1}>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RowSkeleton;
