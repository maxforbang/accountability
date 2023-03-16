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

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";

// Settings page components
import BaseLayout from "/pagesComponents/profile/components/BaseLayout";
import Sidenav from "/pagesComponents/settings/components/Sidenav";
import Header from "/pagesComponents/settings/components/Header";
import BasicInfo from "/pagesComponents/settings/components/BasicInfo";
import ChangePassword from "/pagesComponents/settings/components/ChangePassword";
import GoalsInfo from "../../pagesComponents/settings/components/GoalsInfo";

const name = "**name**"
const role = "**role**"
function Settings() {
  return (
    <BaseLayout>
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Header name={name} role={role}/>
                </Grid>
                <Grid item xs={12}>
                  <BasicInfo />
                </Grid>
                <Grid item xs={12}>
                  <GoalsInfo />
                </Grid>
                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default Settings;
