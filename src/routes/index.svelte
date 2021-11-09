<script context="module">
	export async function preload(page, session) {
		const {SPACE_ID, CONTENTFUL_ACCESS_TOKEN} = session;
		const postsReq = await this.fetch('index.json');
		const posts = await postsReq.json();
		return {posts};
		
	}
</script>
<script>
	import ArticleInfo from "../components/ArticleInfo.svelte";
	import Image from "../components/Image.svelte";
	import { getArticleInfo, getCategoriesLink } from "../helpers/article"
	// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

	export let posts;
	const  truncate = (str, n) => {
		return (str.length > n) ? str.substr(0, n-1) + '...' : str;
	};
</script>

<svelte:head>
	<title>Zubair's Blog</title>
</svelte:head>
<section class="blogs">
	<div class="container">
		<div class="row">
			{#each posts.items as post}
			<div class="col-lg-6 blog__col">
				<div class="blog__card">
					<div class="blog__img">
						<Image url="{post.fields.image.fields.file.url}" width="636" 
						height="352"/>
					</div>
					<div class="blog__card__body">
						<h3>{post.fields.title}</h3>
						<ArticleInfo articleInfo={getArticleInfo(post)} />						
						<p>
							{truncate(documentToPlainTextString(post.fields.description), 1000)}
						</p>
					</div>
					<a href={`/blog/${post.fields.slug}`} class="read__more__btn">Read More</a>
				</div>
			</div>
			{/each}
			<!-- <div class="col-lg-6 blog__col">
				<div class="blog__card">
					<div class="blog__img">
						<img src="images/blog2.jpg" alt=""/>
					</div>
					<div class="blog__card__body">
						<h3>Interactively coordinate proactive e-commerce via process-centric</h3>
						<ul class="post-infos clearfix">
							<li>December 28, 2017</li>
							<li>By:root</li>
							<li>Category:<a href="#">News</a></li>
							<li>no comments</li>
						</ul>
						<p>
							Objectively innovate empowered manufactured products whereas parallel platforms. 
							Holisticly predominate extensible testing procedures for reliable supply chains. 
							Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. 
							Proactively envisioned multimedia based expertise and cross-media growth strategies. 
							Seamlessly visualize quality intellectual capital without superior 
							collaboration and idea-sharing. Holistically pontificate installed 
							base portals after maintainable products. 
							Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively…
						</p>
					</div>
					<a href="blog-detail.html" class="read__more__btn">Read More</a>
				</div>
			</div>
			<div class="col-lg-6 blog__col">
				<div class="blog__card">
					<div class="blog__img">
						<img src="images/blog3.jpg" alt=""/>
					</div>
					<div class="blog__card__body">
						<h3>Quickly deploy strategic networks with compelling e-business</h3>
						<ul class="post-infos clearfix">
							<li>December 28, 2017</li>
							<li>By:root</li>
							<li>Category:<a href="#">News</a></li>
							<li>no comments</li>
						</ul>
						<p>
							Credibly reintermediate backend ideas for cross-platform models. 
							Continually reintermediate integrated processes through technically 
							sound intellectual capital. Holistically foster superior methodologies 
							without market-driven best practices. Distinctively exploit optimal 
							alignments for intuitive bandwidth. Quickly coordinate e-business 
							applications through revolutionary catalysts for change. Seamlessly 
							underwhelm optimal testing procedures whereas bricks-and-clicks processes. Synergistically evolve 
							2.0 technologies rather than just in time initiatives. Quickly deploy…
						</p>
					</div>
					<a href="blog-detail.html" class="read__more__btn">Read More</a>
				</div>
			</div>
			<div class="col-lg-6 blog__col">
				<div class="blog__card">
					<div class="blog__img">
						<img src="images/blog4.jpg" alt=""/>
					</div>
					<div class="blog__card__body">
						<h3>high-impact infrastructures vis-a-vis efficient customer service</h3>
						<ul class="post-infos clearfix">
							<li>December 28, 2017</li>
							<li>By:root</li>
							<li>Category:<a href="#">News</a></li>
							<li>no comments</li>
						</ul>
						<p>
							Appropriately empower dynamic leadership skills after business portals. Globally myocardinate 
							interactive supply chains with distinctive quality vectors. Globally revolutionize global sources 
							through interoperable services. Enthusiastically mesh long-term high-impact infrastructures vis-a-vis 
							efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. 
							Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products. 
							Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an…
						</p>
					</div>
					<a href="blog-detail.html" class="read__more__btn">Read More</a>
				</div>
			</div>
			<div class="col-lg-6 blog__col">
				<div class="blog__card">
					<div class="blog__img">
						<img src="images/blog5.jpg" alt=""/>
					</div>
					<div class="blog__card__body">
						<h3>Crawford Healthcare on top after a rollercoaster ride</h3>
						<ul class="post-infos clearfix">
							<li>December 28, 2017</li>
							<li>By:root</li>
							<li>Category:<a href="#">News</a></li>
							<li>no comments</li>
						</ul>
						<p>
							Bring to the table win-win survival strategies to ensure proactive 
							domination. At the end of the day, going forward, a new normal that 
							has evolved from generation X is on the runway heading towards a streamlined 
							cloud solution. User generated content in real-time will have multiple touchpoints 
							for offshoring. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam…
						</p>
					</div>
					<a href="blog-detail.html" class="read__more__btn">Read More</a>
				</div>
			</div>
			<div class="col-lg-6 blog__col">
				<div class="blog__card">
					<div class="blog__img">
						<img src="images/blog6.jpg" alt=""/>
					</div>
					<div class="blog__card__body">
						<h3>Podcasting operational change management</h3>
						<ul class="post-infos clearfix">
							<li>December 28, 2017</li>
							<li>By:root</li>
							<li>Category:<a href="#">News</a></li>
							<li>no comments</li>
						</ul>
						<p>
							Leverage agile frameworks to provide a robust synopsis for high level overviews. 
							Iterative approaches to corporate strategy foster collaborative thinking to 
							further the overall value proposition. Organically grow the holistic world 
							view of disruptive innovation via workplace diversity and empowerment. Bring to the table 
							win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a…
						</p>
					</div>
					<a href="blog-detail.html" class="read__more__btn">Read More</a>
				</div>
			</div> -->
		</div>
	</div>
</section>

