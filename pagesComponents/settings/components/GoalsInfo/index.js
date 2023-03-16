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

// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Settings page components
import FormField from "/pagesComponents/profile/components/FormField";


const firstName = "**first name**"
const lastName = "**last name**"
const role = "**role**"

function GoalsInfo() {
  return (
    <Card id="goals-info" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Year Goals</MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        *List*
      </MDBox>
    </Card>
  );
}

export default GoalsInfo;
