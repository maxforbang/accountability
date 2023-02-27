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

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// Kanban application components
import Card from "/pagesComponents/applications/kanban/components/Card";

// Images
import officeDark from "/assets/images/office-dark.jpg";
import meeting from "/assets/images/meeting.jpg";
import homeDecore from "/assets/images/home-decor-1.jpg";
import team1 from "/assets/images/team-1.jpg";
import team2 from "/assets/images/team-2.jpg";
import team3 from "/assets/images/team-3.jpg";
import team4 from "/assets/images/team-4.jpg";
import team5 from "/assets/images/team-5.jpg";

const boards = {
  columns: [
    {
      id: uuidv4(),
      title: "Backlog",
      cards: [
        {
          id: uuidv4(),
          template: "Change me to change title",
        },
        {
          id: uuidv4(),
          template: "Drag me to 'In progress' section",
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={officeDark}
              badge={{ color: "dark", label: "pending" }}
              content="Website Design: New cards for blog section and profile details"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
  ],
};

export default boards;
