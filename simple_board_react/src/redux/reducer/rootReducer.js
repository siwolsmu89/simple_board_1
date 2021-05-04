import pagination from "./paginationReducer";
import articles from "./articleReducer";

const initialState = {
    articles: [
        { no:1, title: 'Test Title Text', text:'test text article test text article', comments: [], views: 1 },
        { no:2, title: 'TTT 2', text:'TTA TTA tta', comments: [1, 2, 3], views: 15 }
    ],
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