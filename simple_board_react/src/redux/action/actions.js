export const GET_ARTICLES = 'GET_ARTICLES';
export const MOVE_PAGE = 'MOVE_PAGE';

export function movePageAction(pageNo) {
    return { type: MOVE_PAGE, pageNo }
}