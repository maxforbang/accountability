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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";
import ReportsBarChart from "/examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "/examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "/examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "/examples/Cards/BookingCard";

// Anaytics dashboard components
import SalesByCountry from "/pagesComponents/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "/pagesComponents/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "/pagesComponents/dashboards/analytics/data/reportsLineChartData";

// Images
import booking1 from "/assets/images/products/product-1-min.jpg";
import booking2 from "/assets/images/products/product-2-min.jpg";
import booking3 from "/assets/images/products/product-3-min.jpg";
import MDProgress from "../../../components/MDProgress";
import Card from "@mui/material/Card";
import {useMemo} from "react";
import {Line} from "react-chartjs-2";

function Analytics() {
  const { sales, tasks } = reportsLineChartData;

  const color = "#000000";
  const progress = 39;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card>
          <MDBox display="flex" alignItems="center" p={4}>
            <MDBox ml={2} lineHeight={1}>
              <MDTypography
                  variant="button"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color="text"
              >
                55 Days Until End of Quarter 1
              </MDTypography>
            </MDBox>
            <MDBox width="25%" ml="auto">
              <MDTypography
                  display="block"
                  variant="caption"
                  fontWeight="medium"
                  color="text"
              >
                {progress}%
              </MDTypography>
              <MDBox mt={0.25}>
                <MDProgress variant="gradient" color={color} value={progress} />
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
        <MDBox mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsLineChart
                    color="success"
                    title="Danny"
                    description={
                      <>
                        <ul> - Private label one product</ul>
                        <ul> - Hire a VA or be narrowed down to the final round</ul>
                      </>
                    }
                    date="just updated"
                    chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsLineChart
                    color="success"
                    title="Trent"
                    description={
                      <>
                        <ul> - Buy Miles course</ul>
                        <ul> - Buy first product</ul>
                        <ul> - Register LLC</ul>
                        <ul> - Source 2 hours a day</ul>
                        <ul> - Read 30 min/day</ul>
                      </>
                    }
                    date="just updated"
                    chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsLineChart
                    color="success"
                    title="Chris"
                    description={
                      <>
                        <ul> - Post 10 reels</ul>
                        <ul> - Script 10 reels</ul>
                        <ul> - Film candid with Max</ul>
                        <ul> - Take action from Madisons Call</ul>
                        <ul> - Story highlights</ul>
                        <ul> - Limit technology to 20 min/day</ul>
                      </>
                    }
                    date="just updated"
                    chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <ReportsLineChart
                    color="success"
                    title="Max"
                    description={
                      <>
                        <ul> - Create Basic Avengers Site</ul>
                        <ul> - Next.js blog for Mastela</ul>
                      </>
                    }
                    date="just updated"
                    chart={sales}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );

  return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3}>
          <Grid container>
            <SalesByCountry />
          </Grid>
          <MDBox mt={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsBarChart
                      color="dark"
                      title="website views"
                      description="Last Campaign Performance"
                      date="campaign sent 2 days ago"
                      chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                      color="success"
                      title="daily sales"
                      description={
                        <>
                          (<strong>+15%</strong>) increase in today sales.
                        </>
                      }
                      date="updated 4 min ago"
                      chart={sales}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                      color="info"
                      title="completed tasks"
                      description="Last Campaign Performance"
                      date="just updated"
                      chart={tasks}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={1.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                      color="dark"
                      icon="weekend"
                      title="Bookings"
                      count={281}
                      percentage={{
                        color: "success",
                        amount: "+55%",
                        label: "than lask week",
                      }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                      color="info"
                      icon="leaderboard"
                      title="Today's Users"
                      count="2,300"
                      percentage={{
                        color: "success",
                        amount: "+3%",
                        label: "than last month",
                      }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                      color="success"
                      icon="store"
                      title="Revenue"
                      count="34k"
                      percentage={{
                        color: "success",
                        amount: "+1%",
                        label: "than yesterday",
                      }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                      color="primary"
                      icon="person_add"
                      title="Followers"
                      count="+91"
                      percentage={{
                        color: "success",
                        amount: "",
                        label: "Just updated",
                      }}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mt={3}>
                  <BookingCard
                      image={booking1}
                      title="Cozy 5 Stars Apartment"
                      description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
                      price="$899/night"
                      location="Barcelona, Spain"
                      action={actionButtons}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mt={3}>
                  <BookingCard
                      image={booking2}
                      title="Office Studio"
                      description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.'
                      price="$1.119/night"
                      location="London, UK"
                      action={actionButtons}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mt={3}>
                  <BookingCard
                      image={booking3}
                      title="Beautiful Castle"
                      description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.'
                      price="$459/night"
                      location="Milan, Italy"
                      action={actionButtons}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <Footer />
      </DashboardLayout>
  );
}

export default Analytics;
