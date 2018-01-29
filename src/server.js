const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3002;
const app = express();

app.use(require('./routes'));

app.listen(port, () => console.log(`Server runing at http://localhost:${port}/`));