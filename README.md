<div align="center">
<img src="https://i.pinimg.com/originals/66/1b/2a/661b2a417570e9dbb7878ed2844ab124.gif" >  
</div>

<br>

# BACKEND FRIENDEASE

## Technology Used :

- Javascript & Typescript
- NodeJS & NodeTS
- PostgreSQL

## Installed Packages

- express
- winston
- sequelize
- joi
- uuid
- jsonwebtoken
- bcryptjs
- firebase-admin
- midtrans-client
- multer
- dotenv

## Architecture
Domain -> Repository -> Service -> Controller -> Router
 
## How To Run / Install On Your Local Machine

Clone this repository
```bash
git clone https://github.com/heptavators/friendease-backend.git
```

Open this project 
```bash
cd friendease-backend
```

Containerization this project using Docker
```bash
docker build -t friendease-backend --no-cache -f deploy/Dockerfile .
```

Open the deploy directory 
```bash
cd deploy
```

Running this project
```bash
docker compose up -d
```

if you want to stop this project
```bash
docker compose down
```

#

**Note:** If you intend to initiate this project after pulling from the main branch, kindly remove the existing Docker image and build a new one using the `docker build` command. If not, you can simply run the project using the `docker compose up -d` command.