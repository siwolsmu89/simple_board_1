import axios from 'axios';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_VIEW = 'UPDATE_ARTICLE_VIEW';
export const GET_ARTICLES = 'GET_ARTICLES';
export const MOVE_PAGE = 'MOVE_PAGE';

export function movePageAction(pageNo) {
    return { type: MOVE_PAGE, pageNo }
}

export function addArticleAction(title, text) {
    return { type: ADD_ARTICLE, title, text }
}

export function updateArticleAction(article) {
    return { type: UPDATE_ARTICLE, article }
}

export function updateArticleViewAction(no) {
    return { type: UPDATE_ARTICLE_VIEW, no }
}

export function getArticlesAction(articles) {
    return { type: GET_ARTICLES, articles }
}

export function getArticles(pagination) {
    return function (dispatch) {
        axios({
            url:'/articles',
            method:'post',
            dataType:'json',
            data: { pagination }
        }).then(response => {
            dispatch(getArticlesAction(response.data));
        })
    }
}