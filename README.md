barebones setup for JavaScript / Node projects replace this with a one-liner phrase describing this project or app

[![Codacy Badge](https://img.shields.io/badge/Code%20Quality-D-red)](https://img.shields.io/badge/Code%20Quality-D-red)


## Description
Felt Teachers is a platform where schools source for qualified and approved Teachers in various sectors or courses. This platform aims to provide qualified Teachers for schools to improve the educational system of the community.

## About
This is a solution that will help substantially increase the supply of qualified teachers in your community. Included is a plan to integrate or collaborate with international cooperations for teachers to be trained in developing countries.


## Why

The aim of this project is to solve the problem faced in finding qualified teachers in our secondary schools. The youth they say are the leaders of tommorrow and as such the standard of education they receive is of utmost importance to the development of their community and country at large. Felt Teachers seeks to solve this problem by testing for qualified teachers, providing feedback and study material for teachers and exposing teachers to international standard trainings. The platform provides a one-stop shop for schools, parents, government agencies and international bodies looking for knowledgable teachers for their pupils, grading platform to ascertain their teacher knoweledge or as a data source to help during educational interventions.

## Usage
How will the community make use of this app?
- Comunity can make use of this app first  by registering, and only qualified teachers are allowed to apply.
- After successful registration they need to supply their credentials to prove that they are qualified to teach in any schools.
- After that they will need to be graded to prove if they are a good fit for schools in the community, that means they have too go through some tests which will prove if they are qualified to teach.
- If they show that they are qualified by passing the tests, they will be marked as approved. Then schools can now come to employe them without any verification because they have been verified by passing the tests.

How will a programmer make use of this app?
- Get started by cloning the repo 'git clone https://github.com/BuildForSDG/team-013-Backend.git'
- change into the directory: cd team-013-Backend
- Install yarn package manager installed (optional if you prefer npm)
- Start dev server: yarn dev
- Start liniting: yarn lint
- Once the server is started you can us Postman or any other testing tool to test the endpionts.
- Jest: For runnung tests. We strongly recommend that JavaScript projects use Jest.
- NPM: For installing nodejs packages.
- Eslint: For formating code to javascript standard.
- Babel-node: For testing the project locally

## Prerequisites
- [NodeJS](https://devdocs.io/node/)
- [MongoDB](https://docs.mongodb.com/)
- Yarn package manager installed in node (for uptimal performance)

## Technologies
- [ExpressJs](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/docs/api.html)
- [NodeJs](https://devdocs.io/node/)
- [MongoDB](https://docs.mongodb.com/)
- [Parcel-bundler](https://parceljs.org/getting_started.html)
- [Express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)

## Features
- User authentication `signup` and `signin`
- User authentication `Login` and `Logout`
- Admin `readAll` or `Get` all `Teachers`
- Admin `deleteAll` `Teachers`
- Admin and user `readOne` or GET one `Teacher`
- Admin and user `deleteOne` `Teacher`
- Admin, user `updateOne` `Teacher`
- Admin `getAllApprovedTeachers`


## Setup

Install `npm` or `yarn` if you dont have any of them already installed. We recommend Yarn though.

After clonning the repo to your local machine and moving into the cloned folder, Run `yarn install` to get started by installing dependencies. 

`src/index.js` is the entry to the project and source code should go into the `src` folder.

Run `yarn dev` or `npm run dev` to start the development server.

All tests should be written in the `__tests__' folder. There's a sample in there.

This starter uses [Parcel](https://parceljs.org/getting_started.html) as the bundler. It is much simpler that WebPack and the others.

A `docker-compose.yml` file is included which installs and configure mongodb with persistent storage to help speed up development process. Make sure you have docker installed on your system and running. Then navigate to the location of the docker-compose.yml file and run:

`docker-compose up`

When you are done developing/testing you can run:

`docker-compose down`

This would shutdown the system.

#### Hints

- Run `npm install` or `yarn install` to get started. We'll assume you are using Yarn.
- Install additional dependencies: `yarn add <dependency-name> [-D]`
- Run tests: `yarn test`
- Run tests with test coverage info: `yarn test:cover`
- Check the codebase for proper syntax and formatting compliance: `yarn lint`
- Run your app in local dev mode: `yarn dev`. This puts the bundled app in a `dist` folder, set up a local web server at __localhost:5000__ by default, and continues to watch for your code changes which it syncs with the local server. This means if you loaded the app in a browser, it will auto-refresh as you code along. Feel free to use whatever bundler best meets your needs. Parcel was only added as a sample and for those looking for a simple but effective solution to the hassle of bundlers. 
- You can access the REST API interface from [localhost:5000/api/](https://teachers-placement-backend.herokuapp.com)
- The paths are:
- `/health`
- `/teachers`
- `/teachers/me`
- `/teachers/approved`
- `/login`

## Authors

- Ifere Okibe [LinkedIn](https://www.linkedin.com/in/ifere-jo/) [Twitter](https://twitter.com/Iam_Ifere)
- Opysko
- Shedrack Ajaegbu [LinkedIn](https://www.linkedin.com/in/ajaegbu-shedrack/) [Twitter](https://twitter.com/theshedman_)
- Samuel Alexzender [linkedIn](https://www.linkedin.com/in/abiokorigho-samuel/) [Twitter](https://twitter.com/Alexzendersamu4)

## Contributing
If this project sounds interesting to you and you'd like to contribute, thank you!
First, you can send a mail to buildforsdg@andela.com to indicate your interest, why you'd like to support and what forms of support you can bring to the table, but here are areas we think we'd need the most help in this project :
1. Felt Teachers is poised at bridging the gap left by lack of qualified teacher. We are the bridge to providing quality teachers in your community
2.  We want people to opt-in and try using staging app at staging.project-name.com and report any bugs via a form.
3.  We are always pleased to hear your feedback and you can contact us by filling this form at [Felt Teacher](http://feltteacher.com/contactus)

## Acknowledgements

We would like to thank each team member for the sleepless night put into achieving this dream of eradicating unqualified teachers from our community. We also would like to thank Andela for the opportunity and support which have allowed us achieve this huge step in the history of nigeria.


## Documentation
A more robust documentation is under development, as for now feel free to use this README as a starting point.

## LICENSE
MIT