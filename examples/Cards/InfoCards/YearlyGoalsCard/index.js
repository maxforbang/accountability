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

import Link from "next/link";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO base styles
import colors from "/assets/theme/base/colors";
import typography from "/assets/theme/base/typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import GoalsTracker from "../../../../pagesComponents/shared/GoalsTracker";

function YearlyGoalsCard({ title, description, action, shadow, user, mutate }) {
  const labels = [];
  const values = [];

    const goalsList = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
    ];

  const goals = goalsList.map((item) => (
      <ListItem key={item.id}>
          <MDTypography variant="body1" color="text" fontWeight="light">
              {item.text}
          </MDTypography>
      </ListItem>
  ));


  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={15}
      >
        <MDTypography
          variant="h3"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {title}
        </MDTypography>
        {/*<Link href={action.route}>*/}
        {/*  <a>*/}
        {/*    <MDTypography variant="body2" color="secondary">*/}
        {/*      <Tooltip title={action.tooltip} placement="top">*/}
        {/*        <Icon>edit</Icon>*/}
        {/*      </Tooltip>*/}
        {/*    </MDTypography>*/}
        {/*  </a>*/}
        {/*</Link>*/}
      </MDBox>
      <MDBox p={2}>
        <MDBox mb={2} lineHeight={1}>
          <MDTypography variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox opacity={0.3}>
          <Divider />
        </MDBox>
        <MDBox>
            <GoalsTracker type='yearly' user={user} mutate={mutate} />
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the YearlyGoalsCard
YearlyGoalsCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the YearlyGoalsCard
YearlyGoalsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default YearlyGoalsCard;
