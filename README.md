# GraphQL Apollo Server Typescript - Federation - Local Gateway
An open source seed for GraphQL Apollo Server local-gateway using Typescript.

## Motivation
This seed is only meant for ones who meaning to/already using Apollo-Server with the Federation feature. 
In here you can find a good, concise, open-source seed which is written in Typescript (motivation for that you can find anywhere).
In this seed the gateway has a local schema (merging a gateway and an implementing service as a single service) because in my opinion it is very wasteful to deploy a whole service just for a gateway.

## How to use?
In order to use apollo federation's gateway and this example particularly you need in addition to the gateway an implementing service.
You can find this seed's implementing service (and an implementing service seed) [here](https://github.com/TalShperling/dynamic-federation-implement-service).


## Getting Started
### Install
**On both the implementing service and the gateway:**
```
npm install  
```
### Running the project
**On both the implementing service and the gateway:**

On dev environment using "nodemon": 
```
npm run start:dev
```
On prod environment: 
```
npm run start
```

## Tech/framework used
* NodeJS
* Apollo-Server
* Federation
* Typescript

## Tests
```
npm run test
```

## Contribute
As I said in the beginning this seed is an open source seed, you are more than welcome to add this seed some features, bugfixes (if exists) and to maintain the seed.

## License
MIT © [Tal Shperling]()