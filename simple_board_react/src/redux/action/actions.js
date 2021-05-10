export const ADD_ARTICLE = 'ADD_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_VIEW = 'UPDATE_ARTICLE_VIEW';
export const GET_ARTICLES = 'GET_ARTICLES';
export const CALCULATE_PAGINATION = 'CALCULATE_PAGINATION';
export const MOVE_PAGE = 'MOVE_PAGE';

export function calculatePaginationAction(totalCount) {
    return { type: CALCULATE_PAGINATION, totalCount }
}

export function movePageAction(pagination) {
    return { type: MOVE_PAGE, pagination }
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
