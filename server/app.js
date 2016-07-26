import express from 'express';
const app = express();

export default app;

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('browser'));

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



// import router from './routes';
// app.use('/api', router)

app.listen(3000, function () {
	console.log("now listening port 3000")
})
