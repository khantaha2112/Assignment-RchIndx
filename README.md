# ReachInbox - Frontend Application
This project is a frontend web application built with React.js, designed to replicate the UI and functionalities of a cold outreach management tool.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#Usage)
- [API Endpoints](#api-endpoints)


## Introduction
   Developed a web application using Java for the backend and JavaScript for the frontend to display real-time weather and air quality information, integrating Google Maps API and AirVisual API. 

## Project Structure 
```sh
src/
│
├── assets/                   # Static assets like images, fonts, etc.
│
├── components/               # Reusable UI components
│   ├── AllInbox.jsx          # Component for displaying all inboxes
│   ├── AppBar.jsx            # Component for the top application bar with search and toggle button
│   ├── CenterPage.jsx        # Central component for the main content
│   ├── CustomMail.jsx        # Component for the custom mail editor
│   ├── Footer.jsx            # Footer component
│   ├── InsideTopBar.jsx      # Component inside the main page for additional navigation or actions
│   ├── LeftBar.jsx           # Sidebar navigation component (Home, Dashboard, Contacts)
│   ├── MailInsideMainPage.jsx# Component for displaying the mail content inside the main page
│   ├── MainView.jsx          # Component that combines the main sections (LeftBar, CenterPage, RightSection)
│   ├── RightSection.jsx      # Component for displaying additional details like lead info and activities
│   ├── Theme.jsx             # Theme toggle component (Light/Dark mode)
│
├── pages/                    # Page components for different routes
│
├── App.css                   # Main CSS file for global styles
├── App.jsx                   # Root component that renders all other components
├── index.css                 # Global CSS for resetting and styling
├── main.jsx                  # Main entry point for the React application
│
├── .gitignore                # Git ignore file
├── eslint.config.js          # ESLint configuration for code linting
├── index.html                # Main HTML file
└── package-lock.json         # Dependency lock file for npm
```


## Features

- **Responsive UI :** A responsive and intuitive user interface that adapts to various screen sizes.
- **Inbox Management:** Displays a list of inboxes and allows users to view detailed messages.
- **API Integration**: Fetches, displays, and manipulates data using RESTful APIs.
- **Keyboard Shortcuts:** Keyboard shortcuts for quick actions like deleting or replying to messages.
- **Dark/Light Mode:** Toggle between dark and light themes using the toggle button.
- **Navigation Bar**: Sidebar navigation with links to Home, Dashboard, and Contacts.
- **Search Functionality:** Integrated search bar for finding specific messages or contacts.

## Tech Stack

- **React.js:** JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for making API requests.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Getting Started 
- **Make sure you have the following installed**
-   **Node.js (v14 or later)**

## Installation


1. **Clone the Repository:**
 
   ```sh
   git clone https://github.com/khantaha2112/breathe-easy.git
2. **Navigate to the project directory:**
       
         cd reachinbox-frontend

3. **Install dependencies:**
      
       npm install


4.  **Start the application in development mode, run:**
    
        npm run dev/start


## Usage 
- Sidebar (LeftBar.jsx): Use the sidebar to navigate between different sections like Home, Dashboard, and Contacts.
- Inbox List: Click on any email in the list to view its details.
- Message View: View the full content of an email, delete it, or reply using the custom editor.
- Theme Toggle: Switch between dark and light themes using the toggle button in the header.

## API Integration
This project integrates with a set of APIs to fetch, display, and manipulate inbox data. The following endpoints are used:

- GET /onebox/list: Fetch the list of messages.
- GET /onebox/:thread_id: Fetch details of a specific message.
- DELETE /onebox/:thread_id: Delete a specific message.
- POST /reply/:thread_id: Send a reply to a specific message.

## Customization
**Custom Text Editor**
The text editor allows adding custom buttons like "SAVE" and "Variables." This can be achieved by extending the editor's toolbar in the MessageView.js component.

**Dark/Light Mode**
The dark/light mode toggle is implemented in the header component. You can further customize the themes by updating the CSS classes

**Keyboard Shortcuts**
- **D:** Delete the currently viewed message.
- **R:** Open the reply editor for the currently viewed message.

These shortcuts are designed to improve productivity by allowing quick actions without relying on the mouse.



  








