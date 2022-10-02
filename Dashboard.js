import React from 'react';

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { CChartLine } from '@coreui/react-chartjs';
import { getStyle, hexToRgba } from '@coreui/utils';
import CIcon from '@coreui/icons-react';
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cifIn,
  cifPl,
  cilUserFemale,
} from '@coreui/icons';

import WidgetsBrand from '../widgets/WidgetsBrand';
import WidgetsDropdown from '../widgets/WidgetsDropdown';

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand withCharts />
    </>
  );
};

export default Dashboard;
