http-status-to-description  [![Build Status](https://travis-ci.org/nexus-uw/http-status-to-description.svg)](https://travis-ci.org/nexus-uw/http-status-to-description)[![Code Climate](https://codeclimate.com/github/nexus-uw/http-status-to-description/badges/gpa.svg)](https://codeclimate.com/github/nexus-uw/http-status-to-description)[![Test Coverage](https://codeclimate.com/github/nexus-uw/http-status-to-description/badges/coverage.svg)](https://codeclimate.com/github/nexus-uw/http-status-to-description)
==========================

A node module to simply convert HTTP status codes to their common english description.

Note: Every REST API is different (or not a true REST API), and may have different meaning associated with their response statuses or use unassigned statuses for custom responses. Always check if the response has a message in the body or header before using this lib's descriptions. It is intended as a fall back.

How to Use
-----------
 1 in the terminal
  `npm install http-status-to-description`
 2 and then in your node project
 ``` var httpStatusToDescription = require('http-status-to-description');
  httpStatusToDescription('200');
  ```