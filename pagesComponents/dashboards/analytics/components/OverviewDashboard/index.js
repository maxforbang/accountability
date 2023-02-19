import Grid from "@mui/material/Grid";
import MDBox from "@/components/MDBox";
import AccountabilityCard from "../AccountabilityCard";
import DashboardLayout from "../../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../../examples/Navbars/DashboardNavbar";
import SelfAccountabilityCard from "../SelfAccountabilityCard";
import CountdownCard from "../CountdownCard";

function OverviewDashboard({user, daysLeft}) {

	if (!user) {
		return <div>Loading...</div>;
	}

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
							<SelfAccountabilityCard user={user} date='just updated'/>
						</Grid>
						<Grid item lg={5}>
							<CountdownCard daysLeft={daysLeft}/>
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
	);
}

export default OverviewDashboard;