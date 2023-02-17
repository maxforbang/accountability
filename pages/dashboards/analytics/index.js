import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import AccountabilityCard from "../../../pagesComponents/dashboards/analytics/components/AccountabilityCard";
import SelfAccountabilityCard from "../../../pagesComponents/dashboards/analytics/components/SelfAccountabilityCard";
import CountdownCard from "../../../pagesComponents/dashboards/analytics/components/CountdownCard";
import {useCurrentUser} from "@/lib/user";

function Analytics({ daysLeft}) {
	const { data: { user, peers } = {}, mutate, isValidating } = useCurrentUser();

	if (!user) {
		return (
			<div>Loading...</div>
		)
	}

	console.log(peers)

	const role = '**role**'
	const names = ['Danny', 'Trent', 'Chris'];
	const cards = peers.map((peer) => (
			<Grid key={peer._id} item xs={12} md={6} lg={4}>
				<MDBox mb={3}>
					<AccountabilityCard
						user={peer}
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
							<SelfAccountabilityCard user={user} date='just updated' />
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

export async function getServerSideProps(context) {
	const daysLeft = (new Date("04-01-2023") - new Date()) / (1000 * 60 * 60 * 24);

	return { props: { daysLeft } };
}