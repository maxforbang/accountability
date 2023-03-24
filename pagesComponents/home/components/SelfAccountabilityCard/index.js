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

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";


// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDAvatar from '@/components/MDAvatar';
import MDProgress from "@/components/MDProgress";
import CheckboxList from "../CheckBoxList";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";
import breakpoints from "@/assets/theme/base/breakpoints";
import IconButton from "@mui/material/IconButton";
import {navbarMobileMenu} from "../../../../examples/Navbars/DashboardNavbar/styles";
import {useState} from "react";
import EditList from "../EditList";
import {fetcher} from "@/lib/fetch";
import toast from "react-hot-toast";
import GoalsTracker from "../../../shared/GoalsTracker";


function SelfAccountabilityCard({user, date, mutate}) {

	const {_id, name, role, weekly: goals} = user;
	const [editing, setEditing] = useState(false);
	const [newGoals, setNewGoals] = useState(null);

	// Change to dynamic Profile Pic CRUD
	let profile;
	switch (name) {
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

	const goalsCompleted = goals.filter(goal => goal.completed === true)
	const goalsColor = goalsCompleted.length === goals.length ? 'rgb(72,168,68)' : 'secondary'

	return (
		<Card sx={{height: "100%"}}>
			<MDBox padding="1rem">
				<MDBox pt={3} pb={2} px={1}>
					<MDBox display='flex' mb={3}>
						<MDAvatar
							src={profile.src}
							alt="profile-image"
							size="xl"
							shadow="sm"
						/>
						<MDBox display='flex' justifyContent='space-between' width='100%'>
							<MDBox lineHeight={1} my='auto' ml={2.5}>
								<MDTypography variant="h5" fontWeight="medium" textTransform="capitalize">
									{name}
								</MDTypography>
								<MDTypography variant="button" color="text" fontWeight="regular"
								              textTransform="capitalize">
									{role}
								</MDTypography>
							</MDBox>
							<MDTypography variant="h3" color={goalsColor} fontWeight="regular" textTransform="capitalize"
							              fontSize={window.innerWidth < breakpoints.values.lg ? 'fontSizeRegular' : '2em'}
							              m='auto' >
								{`${goalsCompleted.length}/${goals.length}`}
							</MDTypography>
						</MDBox>
					</MDBox>
					<MDProgress  color={goalsColor} value={goalsCompleted.length / goals.length * 100}/>
					<GoalsTracker type='weekly' user={user} mutate={mutate} />
				</MDBox>
			</MDBox>
		</Card>
	);
}

// Setting default values for the props of SelfAccountabilityCard
SelfAccountabilityCard.defaultProps = {
	color: "dark",
	description: "",
};

// Typechecking props for the SelfAccountabilityCard
SelfAccountabilityCard.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
	]),
	name: PropTypes.string,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	date: PropTypes.string,
};

export default SelfAccountabilityCard;
