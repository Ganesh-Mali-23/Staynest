# WanderlNest

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport-34E27A?style=flat&logo=passport&logoColor=white)

WanderlNest is a full-stack web application for discovering, listing, and reviewing vacation rentals and travel accommodations.

## Features

- **Listings**: Browse stays, create listings, and edit or delete owned properties.
- **Reviews**: Add 1–5 star ratings with comments, and manage created reviews.
- **Authentication**: User sign up, log in, and log out with secure password hashing.
- **Authorization**: Restricts listing and review modifications to their original creators.
- **Validation**: Schema-based request validation using Joi.
- **Flash Messages**: Interactive alerts for user actions and error feedback.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Views**: EJS, ejs-mate
- **Auth & Session**: Passport.js, express-session, connect-mongo, connect-flash
- **Validation**: Joi
- **Frontend**: Bootstrap 5, Font Awesome, custom CSS

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local instance or MongoDB Atlas)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ganesh-Mali-23/Staynest.git
   cd WanderlNest
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory:
   ```env
   MongoDB_Atlas=<your_mongodb_connection_string>
   SECRET=<your_session_secret>
   ```

4. **Seed database** *(optional)*:
   ```bash
   node init/index.js
   ```

5. **Run the server**:
   ```bash
   node app.js
   ```

6. **Access the application**:
   Open [http://localhost:3000/listings](http://localhost:3000/listings) in your browser.

## Author

- **Ganesh Mali** - [@Ganesh-Mali-23](https://github.com/Ganesh-Mali-23)
