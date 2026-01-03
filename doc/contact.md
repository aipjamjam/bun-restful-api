# CONTACT API SPEC

## Create Contact

Endpoint : POST /api/contact

Request Header :

- Authorization: token

Request Body :

```json
{
  "first_name": "Nama Depan",
  "last_name": "Nama Belakang",
  "email": "jemy@mail.com",
  "phone": "08999678678687"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Nama Depan",
    "last_name": "Nama Belakang",
    "email": "jemy@mail.com",
    "phone": "08999678678687"
  }
}
```

## Get Contact

Endpoint : GET /api/contact/{idContact}

Request Header :

- Authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Nama Depan",
    "last_name": "Nama Belakang",
    "email": "jemy@mail.com",
    "phone": "08999678678687"
  }
}
```

## Update Contact

Endpoint : PUT /api/contact/{idContact}

Request Header :

- Authorization: token

Request Body :

```json
{
  "first_name": "Nama Depan",
  "last_name": "Nama Belakang",
  "email": "jemy@mail.com",
  "phone": "08999678678687"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Nama Depan",
    "last_name": "Nama Belakang",
    "email": "jemy@mail.com",
    "phone": "08999678678687"
  }
}
```

## Remove Contact

Endpoint : DELETE /api/contact/{idContact}

Request Header :

- Authorization: token

Response Body (Success) :

```json
{
  "data": true
}
```

## Search Contact

Endpoint : GET /api/contact

Request Header :

- Authorization: token

Query Parameter:

- name : string, search ke first_name atau last_name
- email : string, search ke email
- phone : string, search ke phone
- page : number, default 1
- size : number, default 10

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Nama Depan",
      "last_name": "Nama Belakang",
      "email": "jemy@mail.com",
      "phone": "08999678678687"
    },
    {
      "id": 2,
      "first_name": "Nama Depan",
      "last_name": "Nama Belakang",
      "email": "jemy@mail.com",
      "phone": "08999678678687"
    },
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10,
  }
}
```
