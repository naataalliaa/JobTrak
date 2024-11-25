
# JobTrak

![JobTrak Logo](JobTrak.png)

## Overview

The JobTrak is a web-based application that helps users easily manage and track their job search process. It provides one location for tracking information such as job applications, interview dates, application status, links to job offers, and more. The software reduces the stress of job hunting by providing a configurable and organized platform, allowing users to input and follow the status of each application, interview, and offer in one handy location.

## Core Features
- **Job Application Tracking:** Keep track of all job applications, including company names, interview dates, application links, statuses, and important notes.
- **Interview Management:** Access a comprehensive list of common interview questions.
- **Configurable Dashboard:** A user-friendly dashboard that allows users to customize their views and access important information at a glance.
- **User Authentication:** Secure user authentication with JWT to protect personal data and application details.

## Usage

JobTrak simplifies your job search process by providing an intuitive platform to manage and track your job applications. Here's how you can use it:

1. **Sign Up or Log In**  
   Create an account or log in to start using JobTrak. Your data will be securely stored and encrypted. 

2. **Add a Job Application**   
   - Fill out details like:
     - Company name
     - Interview date
     - Job posting link
     - Status (e.g., Applied, Pending, Rejected)  
     - Important information  

3. **Track Your Progress**  
   View all your applications in an organized dashboard:  
   - Update statuses as you progress through interviews and negotiations.

4. **Common Interview Questions**  
    JobTrak helps you prepare for interviews by suggesting questions in the following categories:
     - Behavioral Questions
     - Technical Questions
     - Coding Questions 

5. **Keep Everything in One Place**  
   - Store links to job descriptions and postings.
   - Add notes for interviews, tasks, and follow-ups.

Start taking control of your job search with JobTrak, making the process organized, stress-free, and efficient!

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