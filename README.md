# HR Net Application

HR Net is a web application designed to manage employee information, featuring two main pages: "Create Employee" and "Display Employees".

This document provides an overview of the application's main functionalities.

_This project was completed as part of my "Software Developer - React" training program._

## Features

The main goal of this project was to upgrade from [an old JQuery-based](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) version to a modern React-based application. Additionally, the project aimed to develop modular components that could be reused in other applications. One significant component developed is a paginated table, which includes features for pagination, filtering, and sorting data. You can find the standalone version of this component here:

- [GitHub](https://github.com/Jivadio/react-datatable)
- [NPM](https://www.npmjs.com/package/@jivadio/react-datatable)

The repository also includes a performance comparison between the JQuery and React versions of the application using Lighthouse.

### Create Employee

The "Create Employee" page includes a form with data validation powered by react-hook-forms and zod. When the form is successfully submitted, the new employee data is stored in the user's localStorage to prevent data loss upon page refresh or closure. This page utilizes two custom-built components:
- A date picker with validation to prevent future dates.
- A modal component.

### Display Employees

The "Display Employees" page fetches all employee records stored in localStorage and displays them using a custom table component. This table offers several features:
- Pagination to control the number of records displayed per page.
- Sorting to arrange records in ascending or descending order based on any field.
- Filtering to search for records based on user-input text.
- An action section to enable the deletion of employee records from localStorage.

## Run Locally

To run the application locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/Jivadio/HRNet
```

Navigate to the project directory:

```bash
cd HRNet
```

Install the required dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```
