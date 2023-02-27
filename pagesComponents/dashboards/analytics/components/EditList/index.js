import * as React from 'react';
import {useCurrentUser, useWeeklyAccountability} from "@/lib/user";
import Kanban from "../../../../../pages/applications/kanban";
import {v4 as uuidv4} from "uuid";
import MDTypography from "@/components/MDTypography";
import MDBox from "@/components/MDBox";
import Grid from "@mui/material/Grid";
import MDButton from "@/components/MDButton";
import {useEffect, useRef, useState} from "react";


export default function EditList({goals, save}) {

	const {data: { user }, mutate} = useCurrentUser();


	const goalCards = goals.map((goal) => {
		return {
			id: uuidv4(),
			goal: goal.goal,
			completed: goal.completed,
			description: goal.description
		}
	})

	const [board, setBoard] = useState({
			columns: [
				{
					id: uuidv4(),
					title: "Edit Goals",
					cards: goalCards,
				},
			],
		}
	)

	const removeCard = (id) => {
		const cardIndex = findIndexById(board.columns[0].cards, id)
		board.columns[0].cards.splice( cardIndex,1)
		setBoard({...board});
	}

	const addCard = (card) => {
		board.columns[0].cards.push(card)
		setBoard({...board});
	}

	const clearAll = () => {
		board.columns[0].cards = []
		setBoard({...board});
	}

	function findIndexById(objects, id) {
		for (let i = 0; i < objects.length; i++) {
			if (objects[i].id === id) {
				return i;
			}
		}
		return -1; // Return -1 if the object is not found
	}

	useEffect(() => {
		save(board.columns[0].cards.map((item) => {
				return {
					goal: item.goal,
					completed: item.completed,
					description: item.description
				};
			})
		)
	}, [board])

	return (
		<Grid container my={1}>
			<Grid item lg={6} xs={12}>
			<Kanban goals={goals} board={board} removeCard={removeCard} addCard={addCard} />
			</Grid>
			<Grid item lg={6} xs={12} display='flex' justifyContent='center' alignItems='flex-end' mb={2} mt={4}>
				<MDBox display='flex' flexDirection='column' px={10} width='100%'>
					<MDButton color='error' variant='outlined' onClick={clearAll}>
						Clear All
					</MDButton>
				</MDBox>
			</Grid>
		</Grid>
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