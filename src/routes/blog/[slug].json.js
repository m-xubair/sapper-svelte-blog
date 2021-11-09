import { getPostBySlug } from "../../api/contentful";
export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
    const { slug } = req.params;
	const post = await getPostBySlug(slug);
	if (post !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(post));
	} else {
		next();
	}
}