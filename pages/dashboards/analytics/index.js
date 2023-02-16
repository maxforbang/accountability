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
import AccountabilityCard from "../../../pagesComponents/dashboards/analytics/components/AccountabilityCard";
import SelfAccountabilityCard from "../../../pagesComponents/dashboards/analytics/components/SelfAccountabilityCard";
import CountdownCard from "../../../pagesComponents/dashboards/analytics/components/CountdownCard";
import {useCurrentUser} from "@/lib/user";

function Analytics({daysLeft}) {
	const { data: { user } = {} } = useCurrentUser()

	console.log(user);

	const role = '**role**'
	const names = ['Danny', 'Trent', 'Chris'];
	const cards = names.map((item) => (
			<Grid key={item} item xs={12} md={6} lg={4}>
				<MDBox mb={3}>
					<AccountabilityCard
						name={item}
						role={role}
						description={
							<>
								<li>Hire a VA / get to final round</li>
								<li>Sending private label product into Amazon</li>
								<li>Source 2 hours/day</li>
							</>
						}
						date='updated 4 min ago'
					/>
				</MDBox>
			</Grid>
		)
	);

	return (
		<DashboardLayout>
			<DashboardNavbar/>
			<MDBox py={3}>
				<MDBox id="self-accountability-card">
					<Grid container spacing={3} wrap='wrap-reverse'>
						<Grid item lg={7}>
							<SelfAccountabilityCard date='just updated' name="**users name**" role='**users role**'/>
						</Grid>
						<Grid item lg={5}>
							<CountdownCard daysLeft={daysLeft} />
						</Grid>
					</Grid>
				</MDBox>

				<MDBox id="others-accountability-box" mt={6}>
					<Grid container spacing={3}>
						{cards}
					</Grid>
				</MDBox>
			</MDBox>
		</DashboardLayout>
	)
		;
}

export default Analytics;

export async function getServerSideProps() {
	//const db = await getMongoDb();

	const daysLeft = (new Date("04-01-2023") - new Date()) / (1000 * 60 * 60 * 24);

	return { props: { daysLeft } };
}