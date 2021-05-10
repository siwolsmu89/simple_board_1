import pagination from "./paginationReducer";
import articles from "./articleReducer";

const initialState = {
    articles: [],
    pagination: {
        currentPage: 1,
        pageSize: 5,
        lastPage: 1
    }
}

export default function reducer(state=initialState, action) {
    return {
        articles: articles(state, action),
        pagination: pagination(state, action)
    };
}