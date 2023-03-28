import MDBox from "@/components/MDBox";
import MDTypography from "@/components/MDTypography";
import MDProgress from "@/components/MDProgress";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {Paper, TableCell, TableContainer, TableHead, useMediaQuery} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import GoalsTracker from "../../../shared/GoalsTracker";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useState} from "react";
import TabPanel from "./TabPanel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

function QuarterCard({daysLeft, user, mutate}) {
	const progress = Math.round((90 - daysLeft) / 90 * 100);
	const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	return (
		<Card sx={{height: "100%"}}>
			<MDBox padding="1rem">
				<MDBox px={1} pb={2}>
					<Box sx={{justifyContent: 'center', display: 'flex'}} width='100%'>
						<Tabs value={value} onChange={handleChange}
						      textColor="primary"
						      indicatorColor="primary"
						>
							<Tab label="Quarter Goals" {...a11yProps(0)} px={10}/>
							<Tab label="Leaderboard" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<Grid container px={6} mt={7.25}>
							<Grid item xl={6} xs={12}>
								<MDTypography
									display="block"
									variant="h2"
									fontWeight="medium"
									color="text"
									align={xl ? 'left' : 'center'}
								>
									Quarter One
								</MDTypography>
							</Grid>
							<Grid item xl={6} xs={12} mt={1.5}>
								<MDTypography
									height='100%'
									display='flex'
									variant="h4"
									textTransform="capitalize"
									color="text"
									justifyContent={xl ? 'right' : 'center'}
									alignItems="center"
								>
									{Math.ceil(daysLeft)} days left
								</MDTypography>

							</Grid>
							<Grid item xs={12} mt={2}>
								<MDBox mt={0.25}>
									<Tooltip title={`${progress}%`} arrow={false} followCursor={true}>
										<MDProgress variant="gradient" color='secondary' value={progress}/>
									</Tooltip>
								</MDBox>
							</Grid>
						</Grid>
						<GoalsTracker type='quarterly' user={user} mutate={mutate}/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<MDTypography my={3} display='flex' justifyContent='center' variant='h3'>
							Pig Ears
						</MDTypography>
						<TableContainer component={Paper}>
							<Table aria-label="simple table">
								<TableBody>
									{[
										['Trent', 2],
										['Danny', 0],
										['Max', 2],
										['Chris', 1]
									].map((row) => (
										<TableRow
											key={row[0]}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell>
												{row[0]}
											</TableCell>
											<TableCell align="right">{row[1]}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</TabPanel>
				</MDBox>
			</MDBox>
		</Card>
	);
}

export default QuarterCard;