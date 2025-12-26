# USER API SPEC

## Register User
Endpoint : POST /api/users

Request Body :
```json
{
    "username": "jemycode",
    "password": "rahasia",
    "name": "Jemy Code"
}
```

Response Body (Success) :
```json
{
    "data": {
        "username": "jemycode",
        "name": "Jemy Code",
    }
}
```

Response Body (Failed) :
```json
{
    "errors": "Username must not blank ..." 
}
```

## Login User
Endpoint : POST /api/users/login

Request Body :
```json
{
    "username": "jemycode",
    "password": "rahasia",
}
```

Response Body (Success) :
```json
{
    "data" : {
        "username": "jemycode",
        "name": "Jemy Code",
        "token": "token"
    },
}
```

## Get User
Endpoint : GET /api/users/current

Request Header :
- Authorization: token

Response Body (Success) :
```json
{
    "data" : {
        "username": "jemycode",
        "name": "Jemy Code",
    },
}
```

## Update User
Endpoint : PATCH /api/users/current

Request Header :
- Authorization: token

Request Body :
```json
{
    "username": "jemycode",
    "password": "rahasia",
}
```

Response Body (Success) :
```json
{
    "data" : {
        "username": "jemycode",
        "name": "Jemy Code",
    },
}
```

## Logout User
Endpoint : DELETE /api/users/current

Request Header :
- Authorization: token

Response Body (Success) :
```json
{
    "data" : true,
}
```