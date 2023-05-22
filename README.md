

# FEC

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  [![Amazon AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/) [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![MongoDB](https://img.shields.io/badge/MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

FEC is a web application mimicking the front end of a ecommerce clothing web site. This project was built by the Cerise-Limon-Lucidity team at Hack Reactor.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation and Running](#installation-and-running)
- [Sample .env File](#sample-env-file)
- [Code Highlights](#code-highlights)
- [Authors and Contributors](#authors-and-contributors)
- [Wins and Improvements](#wins-and-improvements)
- [Tips for a Better Readme](#tips-for-a-better-readme)

## Description

FEC is a web application designed to mock the front end of an ecommerce clothing web site. There are four main components to this web app: Overview, Related Products and Outfits, Questions and Answer, and Ratings and Reviews. It was built using a variety of technologies, including React, Express, Node.js, AWS, and Jest.

## Technologies Used

- [React](https://reactjs.org/)
- [Amazon AWS](https://aws.amazon.com/)
- [Express.js](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Heroku API](https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp)

## Installation and Running

To install and run FEC, first clone the repository and install the necessary dependencies by running `npm install`. Once the dependencies are installed, you can run the application with `npm run dev`.


## Sample .env File
A default .env file is not included when cloning so a user has to create their own .env file with the following:
-PORT=3000
-TOKEN=[github api token]
-API_ENDPOINT="https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp"

## Authors and Contributors

FEC was created by the CLL team at Hack Reactor. The team members are:

- [Frank Mirando](https://github.com/fmirando)
- [Aleksandr Gordin](https://github.com/SashaGordin)
- [Julie Kravchenko](https://github.com/jkrav07)
- [Melissa Lava](https://github.com/mellava)


## Wins and Improvements

We were successful in building a complete functional front end experience which provides the user with simple and clean interface to interact with different clothing products.

However, there are some areas that can be improved upon. For example, we could have spent a few more days polishing the CSS styling such as the carousel and modal window for related products. We also seem to be maxing out out our number of requests for the Heroku API so future enhancements could include refactoring our API requests to be more efficient.
