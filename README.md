# Track your progress API

This is the API created for the Track Your Progress project.

## Install
    npm install
    
## Run
    npm run dev
  
# Spec
## URL
`http://localhost:3001`
## Supported methods
`GET`
## Get list of universities
#### Request
`GET /universidades`
#### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Connection: close

    [
      {
        "carreras": [
          {
            "nombre": "Tecnicatura en Programación Informática",
            "codigo": "unq-tpi",
            "habilitado": true
          },
          {
            "nombre": "Licenciatura en Informática",
            "codigo": "unq-li",
            "habilitado": true
          },
          {
            "nombre": "Ingeniería en Automatización y Control Industrial",
            "codigo": "unq-iaci",
            "habilitado": false
          }
        ],
        "_id": "60674ffb169b253329a65719",
        "nombre": "Universidad Nacional de Quilmes",
        "codigo": "unq",
        "habilitado": true
      },
      ...
      {
        "carreras": [],
        "_id": "60675079169b253329a662cd",
        "nombre": "Universidad Torcuato Di Tella",
        "codigo": "utdt",
        "habilitado": false
      }
    ]
## Get a single university
#### Request
`GET /universidades/:codigo`
#### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Connection: close

    {
      "carreras": [
        {
          "nombre": "Tecnicatura en Programación Informática",
          "codigo": "unq-tpi",
          "habilitado": true
        },
        {
          "nombre": "Licenciatura en Informática",
          "codigo": "unq-li",
          "habilitado": true
        },
        {
          "nombre": "Ingeniería en Automatización y Control Industrial",
          "codigo": "unq-iaci",
          "habilitado": false
        }
      ],
      "nombre": "Universidad Nacional de Quilmes",
      "codigo": "unq",
      "habilitado": true
    }
## Requests shorcuts
You can run the requests defined at the `requests` folder by installing the `REST CLIENT` vscode extension

# TO DO
## API
- [x] GET list of universities
- [x] GET single university by university code
- [ ] GET list of courses per university degree
- [ ] POST approved courses per university degree per student
## Infrastructure
- [ ] Create test's battery
- [ ] Deploy
