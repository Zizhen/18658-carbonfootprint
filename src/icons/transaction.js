import { createSvgIcon } from '@mui/material/utils';
import React from 'react';

const TransactionIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0H3C1.34315 0 0 1.34315 0 3V17ZM18 17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V3C2 2.44772 2.44772 2 3 2H8V10.0111L10.395 10.0112L12.0001 7.86419L13.6051 10.0112H16.0001L16 2H17C17.5523 2 18 2.44772 18 3V17ZM14 2H10V7.33585L12.0001 4.66046L14 7.33571V2Z"
      fill="#818181"
    />
  </svg>,
  'transaction',
);

export default TransactionIcon;
