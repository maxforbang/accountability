import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import AccountabilityCard from "../../../pagesComponents/dashboards/analytics/components/AccountabilityCard";
import SelfAccountabilityCard from "../../../pagesComponents/dashboards/analytics/components/SelfAccountabilityCard";
import CountdownCard from "../../../pagesComponents/dashboards/analytics/components/CountdownCard";
import {useCurrentUser} from "@/lib/user";
import routes from "/routes";
import profilePicture from "@/assets/images/team-3.jpg";
import MDAvatar from "@/components/MDAvatar";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";
import {useEffect} from "react";
import {useRouter} from "next/router";



function Analytics({ daysLeft}) {
	const { data: { user, peers = [] } = {}, mutate, isValidating } = useCurrentUser();
	const router = useRouter();

	useEffect(() => {
		if (isValidating) return;
		if (!user) router.replace('/authentication/sign-in/basic');
	}, [user, router, isValidating]);

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

	routes[0].name = user.name;
	routes[0].icon = <MDAvatar src={profile.src} alt="Avenger Avatar" size="sm" />


	const role = '**role**'
	const names = ['Danny', 'Trent', 'Chris'];
	const cards = peers.map((peer) => (
			<Grid key={peer._id} item xs={12} md={6} lg={4}>
				<MDBox mb={3}>
					<AccountabilityCard
						user={peer}
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

	//const db = await getMongoDb();
	// const response = await updateGoalById(db, '63e5c0fe5aa1737bc18d5567', {completed: true});
	// console.log(response)

	// const params = new URLSearchParams({ id: '63e5c0fe5aa1737bc18d5567' });
	// const response = await fetch(`/api/goal?${params}`, {
	// 	method: 'POST',
	// 	body: JSON.stringify({ completed: false }),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });
	// const data = await response.json();
	// console.log(data);


	return { props: { daysLeft } };
}