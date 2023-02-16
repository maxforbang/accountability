import MDBox from "../../../../../components/MDBox";
import MDTypography from "../../../../../components/MDTypography";
import MDProgress from "../../../../../components/MDProgress";
import Card from "@mui/material/Card";

function CountdownCard ({progress}) {
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
						53 days
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

export async function getServerSideProps(context) {
	const db = await getMongoDb();

	return { props: { } };
}