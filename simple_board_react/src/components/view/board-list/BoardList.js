import {Component} from "react";
import "./BoardList.css";

export default class BoardList extends Component {

    setPagination(pagination) {
        const { currentPage, pageSize, lastPage } = pagination;
        let pageNumbers = [];

        let pageEnd = currentPage + pageSize - 1;
        pageEnd = pageEnd > lastPage ? lastPage : pageEnd;

        for (let i = currentPage; i<=pageEnd; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(
            (pageNumber) => (
                <span className="btn-page">{pageNumber}</span>
            )
        );
    }

    setArticleRows(articles) {
        return articles.map(
            ({ no, title, comments, views }) => (
                <tr className="board-item">
                    <td className="article-no">{ no }</td>
                    <td className="article-title">{ title } <span className="comment-count">[{ comments.length }]</span></td>
                    <td className="article-views">{ views }</td>
                </tr>
            )
        );
    }

    render() {
        const { articles, pagination } = this.props;

        const articleRows = this.setArticleRows(articles);
        const pageList = this.setPagination(pagination);

        return (
            <div className="simple-board-list">
                <section className="list-table-wrapper">
                    <table className="list-table">
                        <thead>
                        <tr className="board-column">
                            <th>No.</th>
                            <th>Title</th>
                            <th>Views</th>
                        </tr>
                        </thead>
                        <tbody>
                            { articleRows }
                        </tbody>
                    </table>
                </section>
                <section className="pagination-wrapper">
                    <div className="pagination">
                        <span className="btn-prev">&laquo;</span>
                            { pageList }
                        <span className="btn-next">&raquo;</span>
                    </div>
                </section>
            </div>
        );
    }
}