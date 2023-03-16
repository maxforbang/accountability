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

import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import {fetcher} from "@/lib/fetch";
import toast from "react-hot-toast";
import EditList from "../../home/components/EditList";
import CheckboxList from "../../home/components/CheckBoxList";


function GoalsTracker({user, date, mutate, type}) {

	const {_id, name, role, [type]: goals} = user;
	const [editing, setEditing] = useState(false);
	const [newGoals, setNewGoals] = useState(null);



	const goalsCompleted = goals.filter(goal => goal.completed === true)
	const goalsColor = goalsCompleted.length === goals.length ? 'rgb(72,168,68)' : 'secondary'

	const toggleEditing = () => {
		setEditing(!editing)
	}

	const saveGoals = async () => {
		try {
			const response = await fetcher('/api/user', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					[type]: newGoals
				}),
			});
			mutate({ user: response.user }, false);
			toast.success('Goals saved!');
			toggleEditing()
		} catch (e) {
			console.log(e)
			//toast.error('Incorrect email or password.');
		}
	}

	return (
		<>
			<MDBox display='flex' flexDirection='column' justifyContent='space-between'>
			<MDBox mt={2.5}>
				{editing ? <EditList goals={goals} save={setNewGoals}/>
					: <CheckboxList goals={goals} mutate={mutate}/>
				}
			</MDBox>
			{/*<Divider />*/}
			<MDBox display="flex" alignItems="center" mt={3}>
				{/*<MDTypography*/}
				{/*	variant="button"*/}
				{/*	color="text"*/}
				{/*	lineHeight={1}*/}
				{/*	sx={{mt: 0.15, mr: 0.75}}*/}
				{/*>*/}
				{/*	/!*<Icon>schedule</Icon>*!/*/}
				{/*</MDTypography>*/}
				{/*<MDTypography variant="button" color="text" fontWeight="light">*/}
				{/*	{date}*/}
				{/*</MDTypography>*/}
				<MDBox ml={'auto'} my={-5} display='flex'>
					{editing ?
						<MDBox mr={2.5}>
							<IconButton
								size="small"
								color='secondary'
								onClick={toggleEditing}
							>
								Cancel&nbsp;
								<Icon fontSize='large'>
									clear
								</Icon>
							</IconButton>
						</MDBox>
						: null
					}
					<IconButton
						size="small"
						disableRipple
						color={editing ? "success" : "secondary"}
						onClick={editing ? saveGoals : toggleEditing}

					>
						{editing ? "Save" : "Edit"}&nbsp;
						<Icon fontSize={editing ? "large" : "medium"}>
							{editing ? "check" : "edit"}
						</Icon>
					</IconButton>
				</MDBox>
			</MDBox>
			</MDBox>
		</>
	);

}
export default GoalsTracker;
