# [Accountability Dashboard](app.avengersassembly.tech)

![Image](https://s3.amazonaws.com/creativetim_bucket/products/343/original/nextjs-material-dashboard-pro.jpg)


NextJS Dashboard sourced from [Creative Tim](https://www.creative-tim.com/product/nextjs-material-dashboard-pro) which comes with pre-built sections and components.
You can read more about the [documentation here](https://www.creative-tim.com/learning-lab/nextjs/overview/material-dashboard/).

## Table of Contents

- [Instructions](#instructions)
- [Open Source Tools](#open-source-tools)
- [File Structure](#file-structure)


## Instructions

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this Git Repository into a local folder on your computer.
2. Make sure you have [Node](https://nodejs.org/en/download/) installed. This build requires Node v16, 15 or 14.
   2. If you have a different version of node installed, you can install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and run `nvm use 16`
2. Navigate to the root ./ directory and run `npm install --legacy-peer-deps` to install all the dependencies. 
3. Run `npm run dev` and go to [http://localhost:3000](http://localhost:3000) to see the app running.


## Open Source Tools

- [MUI](https://mui.com/) - The React UI library for faster and easier web development.
- [React Table](https://react-table.tanstack.com/) - Lightweight and extensible data tables for React.
- [React Flatpickr](https://github.com/haoxins/react-flatpickr) - Useful library used to select date.
- [React ChartJS 2](http://reactchartjs.github.io/react-chartjs-2/#/) - Simple yet flexible React charting for designers & developers.
- [Full Calendar](https://fullcalendar.io/) - Full-sized drag & drop event calendar.
- [Dropzone](https://www.dropzonejs.com/) - An open source library that provides drag & drop file uploads with image previews.
- [React Kanban](https://github.com/asseinfo/react-kanban) - Kanban/Trello board lib for React.
- [React Images Viewer](https://guonanci.github.io/react-images-viewer/) - A simple, responsive images viewer component for ReactJS.
- [React Quill](https://github.com/zenoamaro/react-quill) - A free, open source WYSIWYG editor built for the modern web.
- [Formik](https://formik.org/) - Formik is the world's most popular open source form library for React and React Native.
- [ChromaJS](https://gka.github.io/chroma.js/) - A small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
- [UUID](https://github.com/uuidjs/uuid) - JavaScript library for generating random id numbers.
- [HTML React Parser](https://github.com/remarkablemark/html-react-parser) - A utility for converting HTML strings into React components.


## File Structure

```
nextjs-material-dashboard-2-pro
    ├── assets
    │   ├── images
    │   ├── theme
    │   │   ├── base
    │   │   ├── components
    │   │   ├── functions
    │   │   ├── index.js
    │   │   └── theme-rtl.js
    │   └── theme-dark
    │   │   ├── base
    │   │   ├── components
    │   │   ├── functions
    │   │   ├── index.js
    │   │   └── theme-rtl.js
    ├── components
    │   ├── MDAlert
    │   ├── MDAvatar
    │   ├── MDBadge
    │   ├── MDBadgeDot
    │   ├── MDBox
    │   ├── MDButton
    │   ├── MDDatePicker
    │   ├── MDDropzone
    │   ├── MDEditor
    │   ├── MDInput
    │   ├── MDPagination
    │   ├── nmd2pogress
    │   ├── MDSnackbar
    │   ├── MDSocialButton
    │   └── MDTypography
    ├── context
    ├── examples
    │   ├── Breadcrumbs
    │   ├── Calendar
    │   ├── Cards
    │   ├── Charts
    │   ├── Configurator
    │   ├── Footer
    │   ├── Items
    │   ├── LayoutContainers
    │   ├── Lists
    │   ├── Navbars
    │   ├── Sidenav
    │   ├── Tables
    │   └── Timeline
    ├── pages
    │   ├── applications
    │   │    ├── calendar
    │   │    ├── data-tables
    │   │    ├── kanban
    │   │    └── wizard
    │   ├── authentication
    │   │    ├── reset-password
    │   │    ├── sign-in
    │   │    └── sign-up
    │   ├── dashboards
    │   │    ├── analytics
    │   │    └── sales
    │   ├── ecommerce
    │   │    ├── orders
    │   │    └── products
    │   └── pages
    │   │    ├── account
    │   │    ├── charts
    │   │    ├── notifications
    │   │    ├── pricing-page
    │   │    ├── profile
    │   │    ├── projects
    │   │    ├── rtl
    │   │    ├── users
    │   │    └── widgets
    │   ├── _app.js
    │   └── _document.js
    ├── pagesComponents
    │   ├── applications
    │   ├── authentication
    │   ├── dashboards
    │   ├── ecommerce
    │   └── pages
    ├── routes
    │   ├── index.js
    │   └── page.routes.js
    ├── .eslintrc.json
    ├── .gitignore
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── .gitignore
    ├── next.config.js
    ├── package.json
    └── README.md
```

