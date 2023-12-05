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
- prisma

## Architecture
Domain -> Repository -> Service -> Controller -> Router
 
## How To Run / Install 

Clone this repository
```bash
git clone https://github.com/heptavators/friendease-backend.git
```

Open this project 
```bash
cd friendease-backend
```

npx prisma migrate dev
npx prisma db seed

docker build -t haradakumiko/friendease-backend --no-cache -f deploy/Dockerfile .


npx prisma format -> after write in schema.prisma
