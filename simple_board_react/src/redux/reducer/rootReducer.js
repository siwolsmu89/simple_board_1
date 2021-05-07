import pagination from "./paginationReducer";
import articles from "./articleReducer";

const initialState = {
    articles: [],
    pagination: {
        currentPage: 4,
        pageSize: 5,
        lastPage: 16
    }
}

export default function reducer(state=initialState, action) {
    return {
        articles: articles(state, action),
        pagination: pagination(state, action)
    };
}