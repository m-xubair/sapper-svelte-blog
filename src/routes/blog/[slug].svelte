<script context="module">
    import ArticleInfo from "../../components/ArticleInfo.svelte";
    import { getArticleInfo } from "../../helpers/article";
	export async function preload({params}) {
        // console.log(params);
        const { slug } = params;
		const postsReq = await this.fetch(`blog/${slug}.json`);
		const post = await postsReq.json();
        if(post.items.length > 0) {
            const articleInfo = getArticleInfo(post.items[0]);

            return {post: post.items[0], articleInfo};
        }
        this.error(404, 'Not found');
		
	}
</script>
<script>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import Image from "../../components/Image.svelte";
    export let post;
    export let articleInfo;
</script>
    <section class="blog__detail__content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog__detail__card">
                        <div class="blog__img">
                            <Image url="{post.fields.image.fields.file.url}" width="1296" height="600" />
                        </div>
                        <div class="blog__card__body">
                            {@html documentToHtmlString(post.fields.description, {})}
                            
                            <ArticleInfo articleInfo={articleInfo}/>
                        </div>
                    </div>
                    <!-- blog detail card end -->

                    <div class="reply__form">
                        <h3>Leave a Reply</h3>
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input id="name" type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email (will not be published)</label>
                                <input type="text" id="email" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="website">Website</label>
                                <input id="website" type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="comment">Comment*</label>
                                <textarea id="comment" class="form-control" placeholder="Leave a comment here" style="height: 100px"></textarea>
                            </div>
                        </form>
                        <div class="submit__btn__row">
                            <button class="submit__btn">post Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
