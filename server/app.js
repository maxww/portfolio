import express from 'express';
const app = express();

export default app;

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('browser'));

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


import router from './routes';
app.use('/api', router)


import path from 'path';
const rootPath = path.join(__dirname, '../');
const indexPath = path.join(rootPath, './public/index.html')
app.setValue = app.set.bind(app);
app.setValue('indexHTMLPath', indexPath);
// So we can refresh the page and won't get 404
app.get('/*', function (req, res) {
	// res.sendFile(app.get('indexHTMLPath'));
	res.sendFile(indexPath)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log(`now listening port ${PORT}`)
})

app.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});
