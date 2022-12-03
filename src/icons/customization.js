import { createSvgIcon } from '@mui/material/utils';
import React from 'react';

const CustomizationIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 0C5.86384 0 7.42994 1.27477 7.87398 3H16V5H7.87398C7.42994 6.72523 5.86384 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
      fill="#818181"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 17C12.1362 17 10.5701 15.7252 10.126 14H2V12H10.126C10.5701 10.2748 12.1362 9 14 9C16.2091 9 18 10.7909 18 13C18 15.2091 16.2091 17 14 17ZM14 15C15.1046 15 16 14.1046 16 13C16 11.8954 15.1046 11 14 11C12.8954 11 12 11.8954 12 13C12 14.1046 12.8954 15 14 15Z"
      fill="#818181"
    />
  </svg>,
  'customization',
);

export default CustomizationIcon;
