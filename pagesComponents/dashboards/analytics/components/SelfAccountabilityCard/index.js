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

import {useMemo} from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import {Line} from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import Grid from "@mui/material/Grid";
import MDAvatar from "../../../../../components/MDAvatar";
import burceMars from "../../../../../assets/images/bruce-mars.jpg";
import MDProgress from "../../../../../components/MDProgress";
import CheckboxList from "../CheckBoxList";
import {useGetWeeklyAccountabilityQuery} from "@/lib/accountability";
import {useGetAccountabilityGoalsQuery} from "@/lib/goals";
import Danny from "@/assets/images/profile-pics/Danny.png";
import Trent from "@/assets/images/profile-pics/Trent.png";
import Chris from "@/assets/images/profile-pics/Chris.png";
import Max from "@/assets/images/profile-pics/Max.png";

// SelfAccountabilityCard configurations

function SelfAccountabilityCard({user, description, date}) {

	const { data: { accountability } = {}, mutate, isValidating } =  useGetWeeklyAccountabilityQuery(user.weekly)
	const { data: { goals = [] } = {}, mutateGoals, isValidatingGoals } =  useGetAccountabilityGoalsQuery(accountability?._id)

	const {name, role} = user;

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

	return (
		<Card sx={{height: "100%"}} shadow={false}>
              <MDBox padding="1rem">
				<MDBox pt={3} pb={1} px={1}>
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
							<MDTypography variant="h3" color="text" fontWeight="regular" textTransform="capitalize"
							              m='auto'>
								{/*{'3/6'}*/}
							</MDTypography>
						</MDBox>
					</MDBox>
                    <MDProgress variant="gradient" color='dark' value={0} />
					<MDBox mt={2.5}>
					<CheckboxList goals={goals} />
					</MDBox>
					<Divider/>
					<MDBox display="flex" alignItems="center">
						<MDTypography
							variant="button"
							color="text"
							lineHeight={1}
							sx={{mt: 0.15, mr: 0.5}}
						>
							<Icon>schedule</Icon>
						</MDTypography>
						<MDTypography variant="button" color="text" fontWeight="light">
							{date}
						</MDTypography>
					</MDBox>
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
	name: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	date: PropTypes.string.isRequired,
};

export default SelfAccountabilityCard;
