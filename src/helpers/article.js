const getArticleInfo = (post) => {
    const {authors, categories, publishedOn} = post.fields;
        return {
            authors,
            categories,
            publishedOn
        };
}

const getCategoriesLink = (categories) => {
    return categories.map((cat) => `<a href="">${cat.fields.name}</a>`)
}

export {
    getArticleInfo,
    getCategoriesLink
};