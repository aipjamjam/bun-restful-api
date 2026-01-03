# ADDRESS API SPEC

## Create Address

Endpoint : POST /api/contacts/{idContact}/addresses

Request Header :

- Authorization: token

Request Body :

```json
{
  "street": "Jalan",
  "city": "Kota",
  "province": "Provinsi",
  "country": "Negara",
  "postal_code": "Kode Pos"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "Kode Pos"
  }
}
```

## Get Address

Endpoint : GET /api/contacts/{idContact}/addresses/{idAddress}

Request Header :

- Authorization: token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "Kode Pos"
  }
}
```

## Update Address

Endpoint : PUT /api/contacts/{idContact}/addresses/{idAddress}

Request Header :

- Authorization: token

Request Body :

```json
{
  "street": "Jalan",
  "city": "Kota",
  "province": "Provinsi",
  "country": "Negara",
  "postal_code": "Kode Pos"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "Kode Pos"
  }
}
```

## Remove Address

Endpoint : DELETE /api/contacts/{idContact}/addresses/{idAddress}

Request Header :

- Authorization: token

Response Body (Success) :

```json
{
  "data": true
}
```

## List Address

Endpoint : GET /api/contacts/{idContact}/addresses

Request Header :

- Authorization: token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan",
      "city": "Kota",
      "province": "Provinsi",
      "country": "Negara",
      "postal_code": "Kode Pos"
    },
    {
      "id": 2,
      "street": "Jalan",
      "city": "Kota",
      "province": "Provinsi",
      "country": "Negara",
      "postal_code": "Kode Pos"
    },
  ],
}
```
