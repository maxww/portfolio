import { Router } from 'express';
const router = Router();
export default router;

router.get("/", function (req, res, next) {
	console.log("home")
	res.status(200).json({ "home": "home" });
})

router.get("/about", function (req, res, next) {
	console.log("about")
	res.status(200).json({ "about": "about" });
})

router.get("/projects", function (req, res, next) {
	console.log("projects")
	res.status(200).json({ "projects": "projects" });
})

router.get("/contact", function (req, res, next) {
	console.log("contact")
	res.status(200).json({ "contact": "contact" });
})
