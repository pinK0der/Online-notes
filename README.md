
# 📝 Online notes with TTL

A simple web application for creating temporary notes that automatically become unavailable after a specified time-to-live (TTL).

---

## 🚀 Features

- Creation of anonymous notes
- Automatic deletion after TTL (Time To Live)
- Simple interface for fast operation
- Ready to run via Docker

---

## 🛠️ Technologies used

- Backend: FastAPI(Python)
- Frontend: Next.js, Tailwind CSS, Typescript
- Docker
- PostgreSQL

---

## ⚙️ Quick start (recommended via Docker Compose)

> You need to have installed: [Docker](https://www.docker.com/products/docker-desktop)

# Clone repository
```bash
git clone https://github.com/pinK0der/Online-notes.git
cd Online-notes
```
# 📁 In the project's main directory (next to docker-compose.yml), create a file .env
```
POSTGRES_USER=your_db_username
POSTGRES_PASSWORD=your_db_password
POSTGRES_DB=your_db_name
DATABASE_URL=postgresql://your_db_username:your_db_password@db:5432/your_db_name
NEXT_PUBLIC_API_URL=http://backend:8000
```
Explanation:

- POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB — parameters for creating a container with a database
- DATABASE_URL — standard connection string to PostgreSQL for the application
- NEXT_PUBLIC_API_URL — your API address (for the frontend, e.g. Next.js)

# 📁 In the /back directory, you also need to create a .env file
```
DATABASE_URL=postgresql://your_db_username:your_db_password@db:5432/your_db_name
```
Important:
- ✅ DATABASE_URL in the backend is used to connect to the database.
- ✅ The backend will automatically create the necessary tables during the first launch; you only need to specify the database connection correctly.


# Creating containers
```
docker-compose --env-file .env up
```

---

# After launch, the application will be available at:
```
http://localhost:3000
```

# 📝 Note
- The database container is automatically created via docker-compose.
- There is no need to manually create tables or a database — the backend will do it itself.
- If you want to change the port or API URL, edit the .env files.

---

## 🧑‍💻 Author

Created with coffee and keyboard: [@pinK0der](https://github.com/pinK0der)

---

## 🙌 Feedback

I welcome your suggestions and bug reports. Create an issue or send a pull request.

---

## ☕ Want to say thanks?

The best way to say thanks is with a star on GitHub 😉
