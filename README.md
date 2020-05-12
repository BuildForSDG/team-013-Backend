barebones setup for JavaScript / Node projects replace this with a one-liner phrase describing this project or app

[![Codacy Badge](https://img.shields.io/badge/Code%20Quality-D-red)](https://img.shields.io/badge/Code%20Quality-D-red)


## Description
[Name of the project] is a platform where schols source for qualified and approved Teachers in various sectors or courses. This platform aims to provide qualified Teachers for schools to improve the educational system of the community.

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
- You can access the REST API interface from localhost:5000/api/<path>
- The paths are /profile /profile/id etc.

## Authors

- Ifere Okibe [LinkedIn](https://www.linkedin.com/in/ifere-jo/) [Twitter](https://twitter.com/Iam_Ifere)
- Opysko
- Shedrack Ajaegbu [LinkedIn](https://www.linkedin.com/in/ajaegbu-shedrack/) [Twitter](https://twitter.com/theshedman_)
- Samuel Alexzender [linkedIn](https://www.linkedin.com/in/abiokorigho-samuel/) [Twitter](https://twitter.com/Alexzendersamu4)

## Contributing
If this project sounds interesting to you and you'd like to contribute, thank you!
First, you can send a mail to buildforsdg@andela.com to indicate your interest, why you'd like to support and what forms of support you can bring to the table, but here are areas we think we'd need the most help in this project :
1.  area one (e.g this app is about providing qualified Teachers to the community, but the teachers have to be graded first before they are approved to be qualify. So we need contributions on how to improve the grading system)
2.  area two (e.g you want people to opt-in and try using your staging app at staging.project-name.com and report any bugs via a form)
3.  area three (e.g here is the zoom link to our end-of sprint webinar, join and provide feedback as a stakeholder if you can)

## Acknowledgements

Did you use someone else’s code?
Do you want to thank someone explicitly?
Did someone’s blog post spark off a wonderful idea or give you a solution to nagging problem?

It's powerful to always give credit.

## Documentation
The API documentation for this project can be found [Here]

## LICENSE
MIT

