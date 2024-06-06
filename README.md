Centralized Learning Platform
Project Overview

This project is a centralized learning platform designed to enhance communication between educational institutions and students. The platform enables institutions to share announcements, fosters academic discussions, and supports various user roles, including students, institutions, and tutors. Key features include user authentication, role-based access control, announcement sharing, discussion forums, content sharing, a commenting system, and a Tutor Finder for academic assistance.
Goals

    Improve Communication: Facilitate seamless communication between institutions and students.
    Foster Academic Discussions: Provide a platform for students to engage in academic discussions and content sharing.
    User Authentication: Implement secure authentication with multiple user types.
    Role-Based Access Control: Ensure users have appropriate access levels based on their roles.
    Announcement Sharing: Allow institutions to share important announcements.
    Tutor Finder: Help students find tutors for academic assistance.

Key Features

    User Authentication: Secure login and registration system with support for multiple user types (Student, Institution, Tutor).
    Role-Based Access Control: Different permissions and access levels for students, institutions, and tutors.
    Announcement Sharing: Institutions can post announcements visible to students.
    Forums: Discussion forums for academic topics, content sharing, and commenting.
    Commenting System: Users can comment on announcements and forum posts.
    Tutor Finder: Feature to connect students with tutors for academic help.

Tools and Technologies

    Frontend: Angular
    Backend: Django
    Database: MySQL
    Version Control: Git
    Deployment: Docker (optional)
    Project Management: Trello or Jira (optional)

Users

    Students
        View and comment on announcements.
        Participate in forums and discussions.
        Use Tutor Finder to connect with tutors.
    Institutions
        Post announcements.
        Moderate forums and discussions.
        Manage student and tutor interactions.
    Tutors
        Participate in forums and discussions.
        Offer academic assistance through Tutor Finder.
Backend Setup


Activate the virtual environment:

bash

source env/bin/activate  # On Windows, use `env\Scripts\activate`

Install backend dependencies:

bash

pip install -r requirements.txt

Run database migrations:

bash

python manage.py migrate

Start the Django development server:

bash

    python manage.py runserver

Frontend Setup

    Navigate to the frontend directory:

    bash

cd frontend

Install frontend dependencies:

bash

npm install

Start the Angular development server:

bash

    ng serve

Access the Application

    Open a web browser and navigate to http://localhost:4200 for the frontend.
    The backend API is accessible at http://localhost:8000.

![screencapture-localhost-4200-MY-SCHOOl-2024-04-17-19_01_45](https://github.com/Fadiman741/SCHOOL_PROJECT/assets/63578113/9a2edcd6-14eb-4bc3-b967-da521f909417)
![screencapture-localhost-4200-MY-SCHOOl-view-post-2-2024-04-17-19_02_32](https://github.com/Fadiman741/SCHOOL_PROJECT/assets/63578113/bbe1fa68-f0e3-4763-9e3d-8c7292fa3ca7)
![screencapture-localhost-4200-MY-SCHOOl-forum-2024-04-17-19_02_09](https://github.com/Fadiman741/SCHOOL_PROJECT/assets/63578113/92245553-a042-4e00-9c28-69daef0ace9e)




This is a combined repo

cd Django/MySchool/src && python manage.py runserver

 cd Angular/myschool && ng serve
