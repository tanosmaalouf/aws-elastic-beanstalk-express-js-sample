const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(`
AWS Elastic Beanstalk Express.js Sample
This repository contains a sample Node.js Express application designed to demonstrate how to deploy a web application on AWS Elastic Beanstalk. It includes basic setup for an Express.js server and configuration files necessary for seamless deployment to AWS's platform-as-a-service (PaaS).

The project provides a template for developers looking to quickly get started with building and deploying scalable web apps using Express.js on AWS Elastic Beanstalk.`
));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
