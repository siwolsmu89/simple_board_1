import axios from "axios";
import {
    calculatePaginationAction,
    getArticlesAction,
    movePageAction, startSpinningAction, stopSpinningAction,
    updateArticleViewAction
} from "./actions";

export function getArticles(pagination) {
    return function (dispatch) {
        dispatch(startSpinningAction());
        axios({
            url:'/articles',
            method:'post',
            dataType:'json',
            data: { pagination }
        }).then(response => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(calculatePaginationAction(response.data.totalCount));
            dispatch(stopSpinningAction());
        })
    }
}

export function movePage(pagination) {
    return function (dispatch) {
        dispatch(startSpinningAction());
        axios({
            url:'/articles',
            method:'post',
            dataType:'json',
            data: { pagination }
        }).then(response => {
            dispatch(getArticlesAction(response.data.articles));
            dispatch(movePageAction(pagination));
            dispatch(stopSpinningAction());
        })
    }
}

export function updateArticleView(no) {
    return function(dispatch) {
        dispatch(startSpinningAction());
        axios({
            url: '/articleView',
            method: 'post',
            dataType: 'json',
            data: { no }
        }).then((response) => {
            const updatedArticle = response.data[0];
            dispatch(updateArticleViewAction(updatedArticle));
            dispatch(stopSpinningAction());
        })
    }
}

export function addNewArticle(article, pagination) {
    return function(dispatch) {
        dispatch(startSpinningAction());
        axios({
            url: '/addArticle',
            method: 'post',
            dataType: 'json',
            data: article
        }).then(() => {
            dispatch(getArticles(pagination));
        });
    }
}

export function deleteArticle(no, pagination) {
    return function(dispatch) {
        dispatch(startSpinningAction());
        axios({
            url: '/deleteArticle',
            method: 'post',
            dataType: 'json',
            data: { no }
        }).then(() => {
            dispatch(getArticles(pagination));
        })
    }
}