import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

import routes from "/routes";
import MDAvatar from "@/components/MDAvatar";

import AccountabilityCard from "./components/AccountabilityCard";
import SelfAccountabilityCard from "./components/SelfAccountabilityCard";
import QuarterCard from "./components/QuarterCard";
import Card from "@mui/material/Card";
import {Skeleton} from "@mui/material";



function Loading({ daysLeft}) {

	// routes[0].name = user.name;
	// routes[0].icon = <MDAvatar src={profile.src} alt="Avenger Avatar" size="sm" />

	const cards = [1,2,3].map((peer) => (
			<Grid key={peer._id} item xs={12} md={6} lg={4}>
				<MDBox mb={3}>
					<Skeleton variant='rounded' height={300} >

					</Skeleton>
				</MDBox>
			</Grid>
		)
	);

	return (
		<DashboardLayout>
			<MDBox py={3}>
				<MDBox id="self-accountability-card">
					<Grid container spacing={3} wrap='wrap-reverse'>
						<Grid item lg={7} xs={12}>
							<Skeleton variant='rounded'  height={400} />
						</Grid>
						<Grid item lg={5} xs={12}>
							<Skeleton variant='rounded'  height={400} />
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

export default Loading;
