
# JobTrak

![JobTrak Logo](JobTrak.png)

## Overview

The JobTrak is a web-based application that helps users easily manage and track their job search process. It provides one location for tracking information such as job applications, interview dates, application status, links to job offers, and more. The software reduces the stress of job hunting by providing a configurable and organized platform, allowing users to input and follow the status of each application, interview, and offer in one handy location.

## How to Use

# 1. Create an Account

To start using the website, you first need to create an account.

1. Click on the **Register** button.
2. Provide your details, such as:
   - **Username**
   - **Password**
3. After submitting the information, you will be registered and automatically logged in.

# 2. Login

Once you have created an account, you can log in by entering your **username** and **password** on the **Login** page.

- After a successful login, you will be redirected to the **Dashboard** page.

# 3. Dashboard - Manage Job Applications

On the **Dashboard** page, you can manage your job applications.

The page contains the following input fields:

- **Company Name** (Required)
- **Interview Date** (Required)
- **Status** (Required)
- **Application Link** (Optional)
- **Notes** (Optional)

### How to Add a Job Application

1. Fill in the required fields: **Company Name**, **Interview Date**, and **Status**.
2. Optionally, you can also provide the **Application Link** and **Notes**.
3. Click the **"Add Application"** button to add your job application to the list.
4. The added application will be displayed below the input fields with the information you just provided.

### Remove an Application

- Each application listed below has an **X** button next to it.
- Click the **X** to remove the application from your list.

## Interview Page

The next page is the **Interview Page**, which contains common interview questions to help you prepare.

The questions are divided into three categories:

- **Technical**
- **Coding**
- **Behavioral**

Each question is listed with its corresponding answer to help you prepare for interviews.

# Core Features

- **Job Application Tracking:** Keep track of all job applications, including company names, interview dates, application links, statuses, and important notes.
- **Interview Management:** Access a comprehensive list of common interview questions.
- **Configurable Dashboard:** A user-friendly dashboard that allows users to customize their views and access important information at a glance.
- **User Authentication:** Secure user authentication with JWT to protect personal data and application details.

## Audience
 - **Job Seekers** Individuals applying for positions who want to manage their applications, track progress, and stay organized.

 - **Students and Recent Graduates** Those entering the workforce for the first time, applying for internships, or searching for entry-level positions.

 - **Career Switchers** Professionals transitioning into new industries who need to manage multiple applications and prepare for interviews.

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

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) [2024] [Natalia Rumbuc]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.