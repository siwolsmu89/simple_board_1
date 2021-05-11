export const ADD_ARTICLE = 'ADD_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_VIEW = 'UPDATE_ARTICLE_VIEW';
export const GET_ARTICLES = 'GET_ARTICLES';
export const CALCULATE_PAGINATION = 'CALCULATE_PAGINATION';
export const MOVE_PAGE = 'MOVE_PAGE';
export const SPINNING_ON = 'SPINNING_ON';
export const SPINNING_OFF = 'SPINNING_OFF';

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

export function startSpinningAction() {
    return { type: SPINNING_ON }
}

export function stopSpinningAction() {
    return { type: SPINNING_OFF }
}