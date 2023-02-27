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
import Footer from "/examples/Footer";
import ProfileInfoCard from "/examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "/examples/Lists/ProfilesList";
import DefaultProjectCard from "/examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "/pagesComponents/pages/profile/components/Header";
import PlatformSettings from "/pagesComponents/pages/profile/profile-overview/components/PlatformSettings";

// Data
import profilesListData from "/pagesComponents/pages/profile/profile-overview/data/profilesListData";

// Images
import homeDecor1 from "/assets/images/home-decor-1.jpg";
import homeDecor2 from "/assets/images/home-decor-2.jpg";
import homeDecor3 from "/assets/images/home-decor-3.jpg";
import homeDecor4 from "/assets/images/home-decor-4.jpeg";
import team1 from "/assets/images/team-1.jpg";
import team2 from "/assets/images/team-2.jpg";
import team3 from "/assets/images/team-3.jpg";
import team4 from "/assets/images/team-4.jpg";
import ProfileDescriptionCard from "../../../examples/Cards/ProfileDescriptionCard";
import YearlyGoalsCard from "../../../examples/Cards/InfoCards/YearlyGoalsCard";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";
import {useCurrentUser} from "@/lib/user";
import {useState} from "react";

function Overview() {
    const {data: { user }, mutate} = useCurrentUser();

    const [editing, setEditing] = useState(false);
    const [newGoals, setNewGoals] = useState(null);

    if (!user) {
        return (
            <div>Loading...</div>
        )
    }

    // Change to dynamic Profile Pic CRUD
    let profile;
    switch (user.name) {
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
      <Header name={user.name} role={user.role} profile={profile}>
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
