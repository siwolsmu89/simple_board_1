import {ADD_ARTICLE, GET_ARTICLES, UPDATE_ARTICLE_VIEW} from "../action/actions";

export default function articles(state, action) {
    const { articles } = state;

    switch (action.type) {
        case ADD_ARTICLE:
            const newArticle = action.article;
            console.log(newArticle);

            return [...articles, newArticle];
        case UPDATE_ARTICLE_VIEW:
            const articlesAfterUpdateView = [...articles];
            let updatedIdx = articlesAfterUpdateView.findIndex(article => article.no === action.article.no);
            articlesAfterUpdateView[updatedIdx] = action.article;

            return articlesAfterUpdateView;
        case GET_ARTICLES:
            return action.articles;
        default:
            return articles;
    }
}