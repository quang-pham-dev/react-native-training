# JSONServer + JWT Auth

A Fake REST API using json-server with JWT authentication.

Implemented End-points: login,register

## Install

```bash
$ npm install
$ npm run start-auth
```

Might need to run

```
npm audit fix
```

## How to login/register?

You can login/register by sending a POST request to

```
POST http://localhost:8080/api/auth/login
POST http://localhost:8080/api/auth/register
```

with the following data

```
{
  "email": "admin@admin.com",
  "password":"admin"
}
```

You should receive an access token with the following format

```
{
   "access_token": "<ACCESS_TOKEN>"
   "data": {
      id: user.id,
      avatar: user.avatar,
      name: user.name,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
   }
}
```

You should send this authorization with any request to the protected endpoints

```
Authorization: Bearer <ACCESS_TOKEN>
```
