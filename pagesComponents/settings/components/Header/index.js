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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDAvatar from "/components/MDAvatar";

// Images
import burceMars from "/assets/images/bruce-mars.jpg";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Link from "next/link";

function Header({name, role}) {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <MDBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar
              src={burceMars.src}
              alt="profile-image"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize">
                {name}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="medium" textTransform="capitalize">
                {role}
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <MDBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              {/*<Link href={action.route}>*/}
              {/*  <a>*/}
              {/*    <MDTypography variant="body2" color="secondary">*/}
              {/*      <Tooltip title={action.tooltip} placement="top">*/}
              {/*        <Icon>edit</Icon>*/}
              {/*      </Tooltip>*/}
              {/*    </MDTypography>*/}
              {/*  </a>*/}
              {/*</Link>*/}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Header;
