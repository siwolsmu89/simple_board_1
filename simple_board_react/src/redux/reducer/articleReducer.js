import {ADD_ARTICLE, UPDATE_ARTICLE_VIEW} from "../action/actions";

export default function articles(state, action) {
    const { articles } = state;

    switch (action.type) {
        case ADD_ARTICLE:
            let nextNo = 1;
            for (const article of articles) {
                nextNo = article.no >= nextNo ? article.no + 1 : nextNo;
            }

            const newArticle = {
                no: nextNo,
                title: action.title,
                text: action.text,
                comments: [],
                views: 0
            }

            return [...articles, newArticle];
        case UPDATE_ARTICLE_VIEW:
            const articlesAfterUpdateView = [...articles];
            const updatedArticle = articlesAfterUpdateView.find(article => article.no === action.no);
            updatedArticle.views = updatedArticle.views + 1;

            return articlesAfterUpdateView;
        default:
            return articles;
    }
}