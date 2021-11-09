import { getPosts } from '../api/contentful';
export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const posts = await getPosts();
	if (posts !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(posts));
	} else {
		next();
	}
}