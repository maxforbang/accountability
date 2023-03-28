import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import AccountabilityCard from "../pagesComponents/home/components/AccountabilityCard";
import SelfAccountabilityCard from "../pagesComponents/home/components/SelfAccountabilityCard";
import QuarterCard from "../pagesComponents/home/components/QuarterCard";
import {useCurrentUser, usePeers} from "@/lib/user";
import routes from "/routes";
import MDAvatar from "@/components/MDAvatar";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Loading from "../pagesComponents/home/loading";



function Home({ daysLeft}) {

	const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
	const { data: {peers = []} = {} } = usePeers(user?._id);
	const [type, setType] = useState('weekly')

	const router = useRouter();

	useEffect(() => {
		if (isValidating) return;
		if (!user) router.replace('/login');
	}, [user, router, isValidating]);

	if (!user) {
		return (
			<Loading />
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

	const cards = peers.map((peer) => (
			<Grid key={peer._id} item xs={12} md={6} lg={4}>
				<MDBox mb={3}>
					<AccountabilityCard
						user={peer}
						date='updated 4 min ago'
						type={type}
						setType={setType}
					/>
				</MDBox>
			</Grid>
		)
	);

	return (
		<DashboardLayout>
			{/*<DashboardNavbar/>*/}
			<MDBox py={3}>
				<MDBox id="self-accountability-card">
					<Grid container spacing={3} wrap='wrap-reverse'>
						<Grid item lg={7} xs={12}>
							<SelfAccountabilityCard user={user} date='just updated' mutate={mutate} />
						</Grid>
						<Grid item lg={5} xs={12}>
							<QuarterCard daysLeft={daysLeft} user={user} mutate={mutate}/>
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

export default Home;

export async function getServerSideProps(context) {
	const daysLeft = Math.max(0, (new Date("04-01-2023") - new Date()) / (1000 * 60 * 60 * 24));

	//const db = await getMongoDb();

	// const user = await fetcher('/api/user', {
	// 	method: 'GET',
	// 	headers: { 'Content-Type': 'application/json' },
	// });
	
	return { props: { daysLeft } };
}