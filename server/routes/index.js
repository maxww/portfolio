import { Router } from 'express';
const router = Router();
export default router;

import path from 'path';
const rootPath = path.join(__dirname, '../../');
const aboutPath = path.join(rootPath, './server/db/about.js')
const contactPath = path.join(rootPath, './server/db/contact.js')
const projectsPath = path.join(rootPath, './server/db/projects.js')

router.get("/home", function (req, res, next) {
	console.log("home")
	res.status(200).json({ "home": "home" });
})

router.get("/about", function (req, res, next) {
	console.log("about")
	res.status(200).sendFile(aboutPath);
})

router.get("/contact", function (req, res, next) {
	console.log("contact")
	res.status(200).sendFile(contactPath);
})

router.get("/projects", function (req, res, next) {
	console.log("projects")
	res.status(200).sendFile(projectsPath);
})
