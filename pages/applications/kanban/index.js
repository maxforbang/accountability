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

import {useRef, useState} from "react";

import dynamic from "next/dynamic";

// @asseinfo/react-kanban components
const Board = dynamic(() => import("@asseinfo/react-kanban"), {ssr: false});
//import { addCard, addColumn, onCardDragEnd } from '@asseinfo/react-kanban'

// react-html-parser components
import parse from "html-react-parser";

// uuid is a library for generating unique id
import {v4 as uuidv4} from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";

// Kanban application components
import Header from "/pagesComponents/applications/kanban/components/Header";

// Data
import boards from "/pagesComponents/applications/kanban/data";

// NextJS Material Dashboard 2 PRO context
import {useMaterialUIController} from "/context";
import IconButton from "@mui/material/IconButton";

function Kanban({goals, board, removeCard, addCard, ref}) {
	const [controller] = useMaterialUIController();
	const {darkMode} = controller;

	const [newCardForm, setNewCardForm] = useState(false);
	const [formValue, setFormValue] = useState("");

	const openNewCardForm = (event, id) => setNewCardForm(id);
	const closeNewCardForm = () => setNewCardForm(false);
	const handeSetFormValue = ({currentTarget}) => {
		setFormValue(currentTarget.value);
	}

	return (
			<MDBox
				width='100%'
				position="relative"
				my={0}
				sx={({
					     palette: {light, background},
					     functions: {pxToRem},
					     borders: {borderRadius},
				     }) => ({
					"& .react-kanban-column": {
						backgroundColor: darkMode ? background.card : light.main,
						width: '100%',
						margin: `0 ${pxToRem(10)}`,
						padding: pxToRem(20),
						borderRadius: borderRadius.lg,
					},
				})}
			>
				{goals ?
					<Board
						disableColumnDrag
						disableCardDrag
						allowAddColumn
						renderColumnHeader={({id, title} ) => (
							<>
								<MDBox
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									mb={0}
									px={1}
								>
									<MDTypography variant="h5">{title}</MDTypography>
									<MDButton
										size="medium"
										iconOnly
										onClick={(event) => openNewCardForm(event, id)}
									>
										<Icon
											sx={{
												fontWeight: "bold",
												color: ({palette: {dark}}) => dark.main,
											}}
										>
											add
										</Icon>
									</MDButton>
								</MDBox>
								{newCardForm === id ? (
									<MDBox my={2.5}>
										<MDInput
											value={formValue}
											rows="4"
											onChange={handeSetFormValue}
											fullWidth
										/>
										<MDBox display="flex" mt={2}>
											<MDBox mr={1}>
												<MDButton
													variant="gradient"
													color="light"
													size="small"
													onClick={closeNewCardForm}
												>
													cancel
												</MDButton>
											</MDBox>

											<MDButton
												variant="gradient"
												color="success"
												size="small"
												onClick={() => {
													if (formValue == '') return
													addCard({
														id: uuidv4(),
														goal: formValue,
														completed: false,
														description: ''
													});
													setFormValue("");
												}}
											>
												add
											</MDButton>
										</MDBox>
									</MDBox>
								) : null}
							</>
						)}
						renderCard={({id, goal}, {dragging}) => {
							return (
							<MDBox
								key={id}
								dragging={dragging.toString() || undefined}
								display="flex"
								width="100%"
								bgColor={darkMode ? "transparent" : "white"}
								alignItems='center'
								color="text"
								borderRadius="xl"
								mt={2.5}
								py={1.875}
								px={1.875}
								lineHeight={1.5}
								sx={{
									border: ({borders: {borderWidth}, palette: {white}}) =>
										darkMode ? `${borderWidth[1]} solid ${white.main}` : 0,
									fontSize: ({typography: {size}}) => size.md,
								}}
							>
								{typeof goal === "string" ? parse(goal) : goal}
								<MDBox ml={3}>
									<IconButton
										size="small"
										color='error'
										onClick={() => removeCard(id)}
									>
										<Icon fontSize='small'>
											clear
										</Icon>
									</IconButton>
								</MDBox>
							</MDBox>
						)}
					}
						onCardNew={(e) => console.log(e)}
					>
						{board}
					</Board>
					: null}
			</MDBox>

	);
}

export default Kanban;
