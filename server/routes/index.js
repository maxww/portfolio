import { Router } from 'express';
const router = Router();
export default router;

router.get("/home", function (req, res, next) {
	console.log("home")
	res.status(200).json({ "home": "home" });
})

router.get("/about", function (req, res, next) {
	console.log("about")
	res.status(200).json({ "about": "about" });
})

import path from 'path';
const rootPath = path.join(__dirname, '../../');
const projectsPath = path.join(rootPath, './server/db/projects.js')


router.get("/projects", function (req, res, next) {
	console.log("projects")
	res.status(200).sendFile(projectsPath);
})

router.get("/contact", function (req, res, next) {
	console.log("contact")
	res.status(200).json({ "contact": "contact" });
})
