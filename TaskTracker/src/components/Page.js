import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children , ...other }, ref) => (
  <>
    {/* <Head>
      <title>{`${title} | Minimal-UI`}</title>
      {meta}
    </Head> */}

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;