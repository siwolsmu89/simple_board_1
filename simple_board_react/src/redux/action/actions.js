import axios from 'axios';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_VIEW = 'UPDATE_ARTICLE_VIEW';
export const GET_ARTICLES = 'GET_ARTICLES';
export const MOVE_PAGE = 'MOVE_PAGE';

export function movePageAction(pageNo) {
    return { type: MOVE_PAGE, pageNo }
}

export function addArticleAction(article) {
    return { type: ADD_ARTICLE, article }
}

export function updateArticleAction(article) {
    return { type: UPDATE_ARTICLE, article }
}

export function updateArticleViewAction(article) {
    return { type: UPDATE_ARTICLE_VIEW, article }
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

export function updateArticleView(no) {
    return function(dispatch) {
        axios({
            url: '/articleView',
            method: 'post',
            dataType: 'json',
            data: { no }
        }).then((response) => {
            const updatedArticle = response.data[0];
            dispatch(updateArticleViewAction(updatedArticle));
        })
    }
}

export function addNewArticle(article) {
   return function(dispatch) {
       axios({
           url: '/addArticle',
           method: 'post',
           dataType: 'json',
           data: article
       }).then((response) => {
           const addedArticle = response.data[0];
           console.log(addedArticle);
           dispatch(addArticleAction(addedArticle));
       });
   }
}