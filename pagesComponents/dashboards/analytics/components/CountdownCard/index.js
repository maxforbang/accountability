import MDBox from "../../../../../components/MDBox";
import MDTypography from "../../../../../components/MDTypography";
import MDProgress from "../../../../../components/MDProgress";
import Card from "@mui/material/Card";

function CountdownCard ({daysLeft}) {
	const progress = Math.round((daysLeft / 90) * 100);

	return (
		<Card >
			<MDBox display="flex" alignItems="center" p={4}>
				<MDBox ml={2} lineHeight={1}>
					<MDTypography
						variant="h4"
						fontWeight="bold"
						textTransform="capitalize"
						color="text"
					>
						{Math.ceil(daysLeft)} days
					</MDTypography>
					<MDTypography
						variant="button"
						fontWeight="bold"
						textTransform="capitalize"
						color="text"
					>
						Until End of Quarter 1
					</MDTypography>
				</MDBox>
				<MDBox width="25%" ml="auto">
					<MDTypography
						display="block"
						variant="caption"
						fontWeight="medium"
						color="text"
					>
						{progress}%
					</MDTypography>
					<MDBox mt={0.25}>
						<MDProgress variant="gradient" color='dark' value={progress}/>
					</MDBox>
				</MDBox>
			</MDBox>
		</Card>
	)
}

export default CountdownCard;