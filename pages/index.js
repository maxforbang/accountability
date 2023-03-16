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
import {useEffect} from "react";
import {useRouter} from "next/router";
import {getMongoDb} from "@/api-lib/mongodb";



function Home({ daysLeft}) {

	const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
	const { data: {peers = []} = {} } = usePeers(user?._id);

	const router = useRouter();

	useEffect(() => {
		if (isValidating) return;
		if (!user) router.replace('/login');
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
	const daysLeft = (new Date("04-01-2023") - new Date()) / (1000 * 60 * 60 * 24);
	console.log(context)

	const db = await getMongoDb();
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



// 	const {insertedIds} = await db.collection('goals').insertMany([
// 		{
// 			goal: "Strukter Site MVP",
// 			description: "",
// 			completed: false
// 		},
// 		{
// 			goal: "Grind 75 1 hr/day",
// 			description: "",
// 			completed: false
// 		},
// 		{
// 			goal: "Avengers - Self-Managed Task Lists",
// 			description: "",
// 			completed: false
// 		}
// 	])
//
// 	const goalsList = Object.values(insertedIds);
//
// 	console.log(goalsList)
//
// 	db.collection('users').updateOne({name: 'Max'},
// 		{
// 			$set: {
// 				weekly: db.collection('accountability').insertOne({
// 					user_id: db.collection('users').findOne({name: 'Max'}, {_id: 1}),
// 					goals: goalsList
// 				}).insertedId
// 			}
// 		});
//
// console.log('updated!')
//
//

	return { props: { daysLeft } };
}