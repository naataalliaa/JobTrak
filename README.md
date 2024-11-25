# JobTrak

## Overview

The JobTrak is a web-based application that helps users easily manage and track their job search process. It provides one location for tracking information such as job applications, interview dates, application status, links to job offers, and more. The software reduces the stress of job hunting by providing a configurable and organized platform, allowing users to input and follow the status of each application, interview, and offer in one handy location.

## Core Features
- **Job Application Tracking:** Keep track of all job applications, including company names, interview dates, application links, statuses, and important notes.
- **Interview Management:** Access a comprehensive list of common interview questions.
- **Configurable Dashboard:** A user-friendly dashboard that allows users to customize their views and access important information at a glance.
- **User Authentication:** Secure user authentication with JWT to protect personal data and application details.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

## Technology Stack

### Frontend
- **React.js** (with TypeScript): For building the user interface.
- **React Router:** For seamless navigation between different pages.
- **Axios:** For making HTTP requests to the backend.

### Backend
- **Node.js** + **Express.js** (with TypeScript): For building the server-side application.
- **MongoDB** + **Mongoose** (with TypeScript): For database management and data modeling.
- **JWT (JSON Web Token):** For secure user authentication.

## Installation Guide
- **Step 1:** Install [Visual Studio Code](https://code.visualstudio.com/)

- **Step 2:** Install [Node.js](https://nodejs.org/en) and make sure to check the box to install Chocolatey

- **Step 3:** Install [MongoDB Community Server](https://www.mongodb.com/try/download/community)

- **Step 4:** Open Visual Studio Code. Go to the toolbar and select File – Open Folder, then click on JobTrak folder.

- **Step 5:** Go to the toolbar and select Terminal – New Terminal.

- **Step 6:** In the Terminal, type **“npm -f install”** in the terminal which will install all the
dependencies you need to start the website.

    - **Tip:** if you run into this error that it cannot be loaded because running scripts is disable on this system.

        - Run Powershell as administrator and run the following: **PS C:\> Set-ExecutionPolicy RemoteSigned** and Yes to all with **“A”**.

- **Step 7:** after installing all the dependencies, type **“npm start”** in the terminal to start to website.

        