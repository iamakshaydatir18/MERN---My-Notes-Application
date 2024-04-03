[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/g07vwLwr)


# My Notes - MERN Stack Application

## Description
My Notes is a MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to manage their notes efficiently. Users can create, edit, and delete notes along with action items associated with each note.

## Features
- Create new notes with titles and descriptions
- Edit existing notes
- Delete notes
- Add action items to each note
- Mark action items as completed
- User-friendly interface with Material UI and Tailwind CSS

## Technologies Used
- **Frontend**:
  - React with Vite application
  - Material UI for UI components
  - Tailwind CSS for styling
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for ODM (Object Data Modeling)

## Setup Instructions
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd My-Notes`
3. Install dependencies for frontend:
   ```
   cd frontend
   npm install
   ```
4. Install dependencies for backend:
   ```
   cd ../backend
   npm install
   ```
5. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```
6. Start the backend server:
   ```
   npm start
   ```
7. Start the frontend development server:
   ```
   cd ../frontend
   npm run dev
   ```
8. Open your web browser and navigate to `http://localhost:3000` to use My Notes.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or find any issues, please open an issue or create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any inquiries or feedback, feel free to contact us at [datir.a@northeastern.edu](mailto:datir.a@northeastern.edu).

---