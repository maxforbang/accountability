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

  const daysLeft = (new Date("04-01-2023") - new Date()) / (1000 * 60 * 60 * 24);
  console.log(daysLeft)
  const progress = Math.round((daysLeft / 90) * 100);
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
                  {Math.ceil(daysLeft)} Days Until End of Quarter 1
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
                              <li>10 new ASINS and/or 5 new replenishments</li>
                              <li>Start final round for VA{"'"}s / get through phone interviews</li>
                              <li>Get one Instagram post organized for Thailand</li>
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
                              <li>List first product if account gets cleared</li>
                              <li>Register LLC and immediately apply for card if it processes</li>
                              <li>Finish sports betting and collect income</li>
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
                            <li>Make thumbnails for 5 balcony reels</li>
                            <li>Send80 Magic Referral messages</li>
                            <li>Change YouTube banner</li>
                            <li>Add rest of testimonials to mobile view on site</li>
                            <li>Trade video testimonials with Luke</li>
                            <li>Put chapters into long and medium-form YT videos</li>
                            <li>Whatever Madison instructs</li>
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
                            <li>Upwork Profile + Services Descriptions</li>
                            <li>Functional Avengers Login</li>
                            <li>Close out sports betting intro offers</li>
                            <li>Job Search 1hr/day</li>
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
