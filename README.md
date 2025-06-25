# Shambhavi's Task Manager

A full-stack CRUD (Create, Read, Update, Delete) application built using **React**, **Django**, and **MySQL**.

This app allows users to manage a list of tasks with title, description, and status (Pending/Completed). Users can add new tasks, view all tasks, edit existing tasks, and delete tasks.


# Features

- Create tasks with title and description
- View all tasks in a list format
- Update task details or mark them completed
- Delete tasks from the database
- Connects React frontend with Django REST API backend and MySQL database
  

# Tech Stack

- Frontend: React, Axios
- Backend: Django, Django REST Framework
- Database: MySQL
- Deployment: Netlify (Frontend), Render.com or Railway.app (Backend)


# Functionality Overview

# Frontend (React)

- `TaskForm.js`: Form to create or update tasks
- `TaskList.js`: Displays all tasks with Edit/Delete buttons
- Uses Axios to make API requests to Django backend
- Handles form validation and state updates

# Backend (Django)

- `models.py`: Defines the Task model
- `serializers.py`: Converts Task model to/from JSON
- `views.py`: CRUD API using Django REST Framework's ModelViewSet
- `urls.py`: Registers API routes using DRF Router


# Setup Instructions

# Backend (Django + MySQL)

1. Clone the repository and go to the `backend/` directory.

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install django djangorestframework mysqlclient django-cors-headers
   ```

4. Configure MySQL database in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'taskdb',
           'USER': 'root',
           'PASSWORD': 'yourpassword',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

5. Enable CORS in `settings.py`:
   ```python
   INSTALLED_APPS += ['corsheaders']
   MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')
   CORS_ALLOW_ALL_ORIGINS = True
   ```

6. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

7. Start the server:
   ```bash
   python manage.py runserver
   ```


# Frontend (React)

1. Go to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

> Make sure the Django server is running on `localhost:8000`.


# Deployment Guide

# Backend (Render or Railway)

1. Create an account on [render.com](https://render.com) or [railway.app](https://railway.app)
2. Connect your GitHub repo and select the `backend/` folder.
3. Set environment variables for database credentials.
4. Use a hosted MySQL database (e.g., Railway MySQL plugin).

# Frontend (Netlify or Vercel)

1. Push the `frontend/` folder to GitHub.
2. Login to [Netlify](https://netlify.com) or [Vercel](https://vercel.com).
3. Connect your GitHub repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Environment variable**: `REACT_APP_API_BASE_URL` = URL of your Django backend


#Folder Structure

```
project/
├── backend/
│   ├── taskmanager/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── tasks/
│   │       ├── models.py
│   │       ├── serializers.py
│   │       └── views.py
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   │       ├── TaskForm.js
│   │       └── TaskList.js
└── README.md
```


# Author

Shambhavi  
This project was built as part of a full-stack development module to demonstrate integration of frontend, backend, and database systems.
