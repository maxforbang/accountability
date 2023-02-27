import MDBox from "../../../../../components/MDBox";
import MDTypography from "../../../../../components/MDTypography";
import MDProgress from "../../../../../components/MDProgress";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {useMediaQuery} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GoalsTracker from "../../../../shared/GoalsTracker";
import MDAvatar from "@/components/MDAvatar";
import breakpoints from "@/assets/theme/base/breakpoints";

function QuarterCard({daysLeft, user, mutate}) {
	const progress = Math.round((90 - daysLeft) / 90 * 100);
	const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

	return (
		<Card sx={{height: "100%"}}>
			<MDBox padding="1rem">
				<MDBox px={1} pb={2}>
					<Grid container px={6} mt={7.25}>
						<Grid item xl={6} xs={12}>
							<MDTypography
								display="block"
								variant="h2"
								fontWeight="medium"
								color="text"
								align={ xl ? 'left' : 'center' }
								verticalAlign='center'
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
								justifyContent={ xl ? 'right' : 'center' }
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
					<GoalsTracker type='quarterly' user={user} mutate={mutate} />
				</MDBox>
			</MDBox>
		</Card>
	);
}

export default QuarterCard;