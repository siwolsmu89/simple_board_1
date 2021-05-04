import {Component} from "react";
import "./BoardList.css";
import editIcon from '../../../resources/edit-button.png';

export default class BoardList extends Component {

    setPagination(pagination, movePage) {
        const { currentPage, pageSize, lastPage } = pagination;
        let pageNumbers = [];

        let pageStart = pageSize * Math.ceil(currentPage / pageSize - 1) + 1;

        let pageEnd = pageStart + pageSize - 1;
        pageEnd = pageEnd > lastPage ? lastPage : pageEnd;

        for (let i = pageStart; i <= pageEnd; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(
            (pageNumber) => (
                <button
                    className={ `btn-page ${pagination.currentPage === pageNumber ? 'active' : '' }` }
                    onClick={ () => movePage(pageNumber) }
                >{pageNumber}</button>
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
        const { articles, pagination, movePage } = this.props;

        const articleRows = this.setArticleRows(articles);
        const pageList = this.setPagination(pagination, movePage);

        return (
            <div className="simple-board-list">
                <div className="title">
                    Simple Board
                </div>
                <section className="icon-box-wrapper">
                    <div className="icon-box">
                        <img src={editIcon} alt="edit button icon"/>
                    </div>
                </section>
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
                        <button
                            className={ `btn-prev ${pagination.currentPage === 1 ? 'disabled' : '' }` }
                            onClick={ () => {
                                if (pagination.currentPage === 1) {
                                    return;
                                }
                                movePage(pagination.currentPage - 1)
                            } }
                        >&laquo;</button>
                            { pageList }
                        <button
                            className={ `btn-next ${pagination.currentPage === pagination.lastPage ? 'disabled' : '' }` }
                            onClick={ () => {
                                if (pagination.currentPage === pagination.lastPage) {
                                    return;
                                }
                                movePage(pagination.currentPage + 1)
                            } }
                        >&raquo;</button>
                    </div>
                </section>
            </div>
        );
    }
}