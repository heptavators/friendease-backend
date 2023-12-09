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
docker build -t haradakumiko/friendease-backend --no-cache -f deploy/Dockerfile .
```

Open the deploy directory 
```bash
cd deploy
```

Running this project
```bash
docker compose up -d
```