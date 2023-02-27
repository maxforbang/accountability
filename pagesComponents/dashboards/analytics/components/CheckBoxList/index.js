import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {useGoal} from "@/lib/goal";
import {useEffect} from "react";
import useSWR, {mutate} from "swr";
import {fetcher} from "@/lib/fetch";
import { useSWRConfig } from "swr"
import {useCurrentUser, useWeeklyAccountability} from "@/lib/user";
import toast from 'react-hot-toast';

export default function CheckboxList({goals}) {

	const [checked, setChecked] = React.useState(goals.filter(goal => goal.completed === true));

	const {data: { user }, mutate} = useCurrentUser();

	React.useEffect(() => {
		setChecked(goals.filter(goal => goal.completed == true));
	}, [goals]);

	const handleToggle = (value) => async () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		const newWeekly = [...user.weekly];
		let newGoal;

		console.log(newWeekly)

		if (currentIndex === -1) {
			newGoal = {...value, completed: true}
			newChecked.push(value);
		} else {
			newGoal = {...value, completed: false}
			newChecked.splice(currentIndex, 1);
		}

		newWeekly[newWeekly.indexOf(value)] = newGoal

		setChecked(newChecked);

		try {
			const response = await fetcher('/api/user', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					weekly: newWeekly
				}),
			});
			mutate({ user: response.user }, false);
			toast.success('Goal set!');
		} catch (e) {
			console.log(e)
			//toast.error('Incorrect email or password.');
		} finally {
		}
		//mutate({...user, weekly: newWeekly})
	};

	const listItems = goals.map((goal, index) => {
		const labelId = `checkbox-list-label-${goal.goal}`;

		return (
			<ListItem
				key={index}
				// secondaryAction={
				// 	<IconButton edge="end" aria-label="comments">
				// 		<CommentIcon />
				// 	</IconButton>
				// }
				disablePadding
			>
				<ListItemButton role={undefined} onClick={handleToggle(goal)} >
					<ListItemIcon>
						<Checkbox
							edge="start"
							checked={checked.indexOf(goal) !== -1}
							tabIndex={-1}
							disableRipple
							inputProps={{ 'aria-labelledby': labelId }}
						/>
					</ListItemIcon>
					<ListItemText id={labelId} primary={goal.goal} style={goal.completed ? {color: 'rgb(72,168,68)'}  : {color: 'gray'}}/>
				</ListItemButton>
			</ListItem>
		);
	})

	return (
		<List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
			{listItems}
		</List>
	);
}


// mutate({
// 	body: {
// 		goal: {
// 			...value,
// 			completed: true
// 		}
// 	},
// 	method: 'PATCH'
// })