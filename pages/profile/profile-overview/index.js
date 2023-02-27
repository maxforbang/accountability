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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";



import YearlyGoalsCard from "../../../examples/Cards/InfoCards/YearlyGoalsCard";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";
import {useCurrentUser} from "@/lib/user";
import {useState} from "react";
import Header from "../../../pagesComponents/pages/profile/components/Header";

function Overview() {
    const {data, mutate} = useCurrentUser();

    const [editing, setEditing] = useState(false);
    const [newGoals, setNewGoals] = useState(null);

    if (!data?.user) {
        return (
            <div>Loading...</div>
        )
    }

    const {user} = data;
    const {name, role} = user;

    // Change to dynamic Profile Pic CRUD
    let profile;
    switch (name) {
        case 'Danny':
            profile = Danny;
            break;
        case 'Trent':
            profile = Trent;
            break;
        case 'Chris':
            profile = Chris;
            break;
        case 'Max':
            profile = Max;
    }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header name={name} role={role} profile={profile}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
              {/*<Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
                  <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
                  <ProfileDescriptionCard
                      title="profile information"
                      description="Unfinished profile page. Boutta be fookin' sick doe"
                      action={{
                          route: "/pages/profile/profile-overview",
                          tooltip: "Edit Profile",
                      }}
                      shadow={false}
                  />
                  <Divider orientation="vertical" sx={{ mx: 0 }} />
              </Grid>*/}
              <Grid item xs={12} md={6} xl={6}>
                <YearlyGoalsCard title="Yearly Goals" shadow={false} user={user} mutate={mutate}/>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
