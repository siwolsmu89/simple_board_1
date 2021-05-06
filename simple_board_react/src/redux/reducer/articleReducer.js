import {ADD_ARTICLE} from "../action/actions";

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
        default:
            return articles;
    }
}