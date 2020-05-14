barebones setup for JavaScript / Node projects replace this with a one-liner phrase describing this project or app

[![Codacy Badge](https://img.shields.io/badge/Code%20Quality-D-red)](https://img.shields.io/badge/Code%20Quality-D-red)


## Description
Felt Teachers is a platform where schools source for qualified and approved Teachers in various sectors or courses. This platform aims to provide qualified Teachers for schools to improve the educational system of the community.

## About
What is this project about. Ok to enrich here or the section above it with an image.

Once this repo has been setup on Codacy by the TTL, replace the above badge with the actual one from the Codacy dashboard, and add the code coverage badge as well. This is mandatory

This is a simple JavaScript starter repo template for setting up your project. The setup contains

- Jest: For runnung tests. We strongly recommend that JavaScript projects use Jest

- Eslint & Prettier: For formatting code to match ESlint AirBnB coding standard. You might need to install the ESlint and Prettier plugins for your code editor to make the most of these utilities.
- Babel: Babel allow us to use the Es6 and it interpret it for  nodejs to understand. You might need to install some babel packages to make it works.
- nodemon: nodemon is use to test the code on development, once it is on production mode nodemon is  not needed. For nodemon to work we need to install it as a devDependencies.

## Why
Why is this project needed or why is it important?
SDG(s) aim is to solve some problems which pose a challenge and difficulties in the community, this app also aims to solve one of the problem in the community like providing qualified and approved teachers to schools in the community. Communities lacks qualified teachers which in turn affect the students educationally and this  is a very big and important problem which needs to be resolved. This app aims to resolve that issue to provide qualified and approved teachers to the communities. It will provide approved and qualified teacher to secondary schools only, this app will make it easier for schools to get qualified and approved teachers without waiting for long time to look for them. 

## Usage
How will the community make use of this app?
- Comunity can make use of this app first  by registering, and only qualified teachers are allowed to apply.
- After successful registration they need to supply their credentials to prove that they are qualified to teach in any schools.
- After that they we need to be graded to prove if they are a good fit for schools in the community, that means they have too go through some tests which will prove if they are qualified to teach.
- If they show that they are qualified by passing the tests, they will be marked as approved. Then schools can now come to employe them without any verification because they have been verified by passing the tests.


## Prerequisites
- [NodeJS](https://devdocs.io/node/)
- [MongoDB](https://docs.mongodb.com/)

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
- Run your app in local dev mode: `yarn dev`. This puts the bundled app in a `dist` folder, set up a local web server at localhost:5000, and continues to watch for your code changes which it syncs with the local server. This means if you loaded the app in a browser, it will auto-refresh as you code along. Feel free to use whatever bundler best meets your needs. Parcel was only added as a sample and for those looking for a simple but effective solution to the hassle of bundlers. 
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
1.  Area two: We want people to opt-in and try using staging app at staging.project-name.com and report any bugs via a form.
2.  Area three: here is the [zoom-link] to our end-of sprint webinar, join and provide feedback as a stakeholder if you can

## Acknowledgements

- Did you use someone else’s code?
The app was built by our team we did't use someone else's code.

- Do you want to thank someone explicitly?
Yes all thanks to our team for puttings heads together to acheive this.

- Did someone’s blog post spark off a wonderful idea or give you a solution to nagging problem?

It's powerful to always give credit.

## Documentation
The API documentation for this project can be found [Here]

## LICENSE
MIT

