# RentIQ - Property Viewing Application

Take-home project for building a property viewing application with Rails API backend and React frontend.

## Project Status

### Backend Tasks
- [x] Initialize Rails API-only application
- [x] Configure sqlite database
- [x] Create Property model (name, address, year_built, website_url)
  - [x] Bonus: Added DB seeds for 10 properties.
- [ ] Implement API endpoint: List all properties
- [ ] Implement API endpoint: View single property
- [ ] Configure CORS for frontend communication
- [ ] Seed database with sample properties

### Frontend Tasks
- [ ] Initialize React application with Vite
- [ ] Set up Tailwind CSS
- [ ] Install API call dependencies (axios/fetch)
- [ ] Create properties list view
- [ ] Display property details (name, address, year built, website link)
- [ ] Configure API connection to localhost:3000
- [ ] Optional: Create detail view for individual properties

### Bonus Tasks (If Time Permits)
- [ ] Backend: Create Units model (unit_name, bedroom_count, bathroom_count, unit_size)
- [ ] Backend: Add relationship between Property and Units
- [ ] Backend: Update API endpoints to include units
- [ ] Frontend: Display units associated with properties

## Running the Applications

### Backend (Rails API)
```bash
cd backend
# Commands will be added after setup
```

### Frontend (React + Vite)
```bash
cd frontend
# Commands will be added after setup
```

## Notes for Interviewing Team

### Architecture Decisions
-

### Styling Choices
-

### API Design
-

### Trade-offs and Future Improvements
- properties
  - single address line is good enough for this project but I'd probably implement a more robust address line 1, etc for production.
- units

### Known Issues or Limitations
-

### AI Usage
- All code was written by me. Claude was pulled in to generate the following items that were above and beyond specs:
- App:
  - Building out supporting files like Readme.
- Backend:
  - Generate db seeds

---

## Take-Home Project Requirements

### Overview

You will be building a property viewing application consisting of two separate applications that communicate via API:

1. A Rails API backend
2. A React frontend using Vite

### AI Usage

You should not use AI tools to write any of the code for this. The goal of this project is to ensure you understand and feel confident building upon this code as in the next set of interviews, you will be making improvements on it with the team. You may use AI tools for questions about topics, acting as a replacement for a Google search.

### Backend Requirements (Rails API)

#### Application Setup

- Initialize a new Rails application in API-only mode
- Use sqlite as your database

#### Data Model

Create a data model for properties with the following attributes:

- Property Name
- Address
- Year Built
- Website URL

#### API Endpoints

Implement endpoints for:

- Listing all properties
- Viewing a single property

### Frontend Requirements (React + Vite)

#### Application Setup

- Initialize a new React application using Vite
- Set up Tailwind CSS for styling
- Install necessary dependencies for making API calls

#### Core Functionality

Build a user interface that:

- Displays a list of all properties showing:
  - Property Name
  - Address
  - Year Built
  - Hyperlink to website URL
- Optionally includes a detail view for individual properties

#### Technical Requirements

- Use modern React patterns (hooks, functional components)
- Connect to the Rails API running on port 3000
- Style the interface using Tailwind CSS

### Connection Between Applications

- The Rails API should run on port 3000
- The React application should run on port 5173 (Vite's default)
- All API calls from React should be made to the Rails backend

### Getting Started Tips

- Use Rails generators to quickly scaffold models and controllers
- Use Vite's React template to bootstrap the frontend
- Remember to handle CORS configuration in Rails
- Consider using a library like axios or fetch for API calls in React
- Host the code on a publicly available github repository

### Bonus Section

If time permits, extend the Property model to include:

- A relationship to units
- Units model with unit name, bedroom count, bathroom count, unit size
- Update the API and frontend to display units associated with properties
