export const ADD_ARTICLE = 'ADD_ARTICLE';
export const MOVE_PAGE = 'MOVE_PAGE';

export function movePageAction(pageNo) {
    return { type: MOVE_PAGE, pageNo }
}

export function addArticleAction(title, content) {
    return { type: ADD_ARTICLE, title, content }
}