export const ADD_ARTICLE = 'ADD_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_VIEW = 'UPDATE_ARTICLE_VIEW';
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