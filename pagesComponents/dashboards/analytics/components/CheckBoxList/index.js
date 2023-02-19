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

export default function CheckboxList({goals}) {

	const [checked, setChecked] = React.useState(goals.filter(goal => goal.completed == true));

	// const {data, mutate} = useSWR(`/api/goal`, fetcher);

	React.useEffect(() => {
		setChecked(goals.filter(goal => goal.completed == true));
	}, [goals]);

	const handleToggle = (value) => async () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			await fetch(
				`/api/goal?id=${value._id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						completed: false,
					}),
				},
			)
		} else {
			newChecked.splice(currentIndex, 1);
			mutate({
				goal: {
					...value,
					completed: false
				}
			}, true, 'PATCH')
		}

		setChecked(newChecked);
	};

	const listItems = goals.map((goal) => {
		const labelId = `checkbox-list-label-${goal.goal}`;

		return (
			<ListItem
				key={goal._id}
				secondaryAction={
					<IconButton edge="end" aria-label="comments">
						<CommentIcon />
					</IconButton>
				}
				disablePadding
			>
				<ListItemButton role={undefined} onClick={handleToggle(goal)} dense>
					<ListItemIcon>
						<Checkbox
							edge="start"
							checked={checked.indexOf(goal) !== -1}
							tabIndex={-1}
							disableRipple
							inputProps={{ 'aria-labelledby': labelId }}
						/>
					</ListItemIcon>
					<ListItemText id={labelId} primary={goal.goal} />
				</ListItemButton>
			</ListItem>
		);
	})

	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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