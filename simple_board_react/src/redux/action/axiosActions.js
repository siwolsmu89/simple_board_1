import axios from "axios";
import {
    addArticleAction,
    calculatePaginationAction,
    getArticlesAction,
    movePageAction,
    updateArticleViewAction
} from "./actions";

export function getArticles(pagination) {
    return function (dispatch) {
        axios({
            url:'/articles',
            method:'post',
            dataType:'json',
            data: { pagination }
        }).then(response => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(calculatePaginationAction(response.data.totalCount));
        })
    }
}

export function movePage(pagination) {
    return function (dispatch) {
        axios({
            url:'/articles',
            method:'post',
            dataType:'json',
            data: { pagination }
        }).then(response => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(movePageAction(pagination));
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
            dispatch(addArticleAction(addedArticle));
        });
    }
}