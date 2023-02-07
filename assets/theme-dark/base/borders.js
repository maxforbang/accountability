/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base border styles for the NextJS Material Dashboard 2 PRO.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire NextJS Material Dashboard 2 PRO using thie file.
 */

// NextJS Material Dashboard 2 PRO Base Styles
import colors from "/assets/theme-dark/base/colors";

// NextJS Material Dashboard 2 PRO Helper Functions
import pxToRem from "/assets/theme-dark/functions/pxToRem";
import rgba from "/assets/theme-dark/functions/rgba";

const { white } = colors;

const borders = {
  borderColor: rgba(white.main, 0.4),

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};

export default borders;
