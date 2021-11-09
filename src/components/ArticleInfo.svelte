<script>
    import moment from "moment";
    import {getCategoriesLink} from "../helpers/article";

    export let articleInfo;
</script>
<ul class="post-infos clearfix">
    <li>{moment(articleInfo.publishedOn).format('MMM DD, YYYY')}</li>
    <li>By:
        {
            articleInfo.authors.map((a) => {
                return a.fields.firstName + ' ' + a.fields.lastName;
            }).join(', ')
        }
    </li>
    <li>Category:
        {@html getCategoriesLink(articleInfo.categories).join(', ')}
    </li>
</ul>