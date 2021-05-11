import {Component} from "react";
import {Link} from "react-router-dom";
import listIcon from "../../../resources/list-button.png";
import deleteIcon from "../../../resources/delete-button.png";
import editIcon from "../../../resources/edit-button.png";
import './ArticleDetail.css';
import cancelIcon from "../../../resources/close-button.png";
import saveIcon from "../../../resources/save-button.png";

export default class ArticleDetail extends Component {

    componentDidMount() {
        const { updateViewCount } = this.props;
        const { no } = this.props.match.params;

        updateViewCount(Number(no));
    }

    convertArticleText(text) {
        const textLines = text.split("\n");
        return textLines.map(
            (line) => (
                    <span>
                        {line}
                        <br/>
                    </span>
            )
        )
    }

    render() {
        const { articles, deleteArticle, editArticle } = this.props;
        const { no, mode } = this.props.match.params;
        const detailArticle = articles.find( article => article.no === Number(no));

        let articleBody, titleInput, textInput, iconBox;
        if (detailArticle && mode === 'view') {
            articleBody = (
                <div className="article-detail mode-view">
                    <div className="article-detail-title">
                        { detailArticle.title }
                    </div>
                    <div className="article-detail-content">
                        { this.convertArticleText(detailArticle.text) }
                    </div>
                </div>
            );

            iconBox = (
                <div className="icon-box">
                    <Link to="/">
                        <img
                            src={ deleteIcon }
                            alt="delete button icon"
                            onClick={ () => {
                                deleteArticle(no);
                            }}
                        />
                    </Link>
                    <Link
                        to={ "/detail/edit/" + no }
                    >
                        <img
                            src={ editIcon }
                            alt="edit button icon"
                        />
                    </Link>
                </div>
            );
        } else if (detailArticle && mode === 'edit') {
            articleBody = (
                <div className="article-detail mode-edit">
                    <div className="article-title">
                        <input
                            ref={ node => { titleInput = node } }
                            type="text"
                            placeholder="Write Title Here"
                            defaultValue={ detailArticle.title }
                        />
                    </div>
                    <div className="article-content">
                            <textarea
                                ref={ node => { textInput = node } }
                                spellCheck="false"
                                placeholder="Write Content Here"
                                defaultValue={ detailArticle.text }
                            />
                    </div>
                </div>
            );

            iconBox = (
                <div className="icon-box">
                    <Link to={ "/detail/view/" + no }>
                        <img
                            src={ cancelIcon }
                            alt="cancel button icon"
                        />
                    </Link>
                    <Link
                        to="/"
                        onClick={ (e) => {
                            const articleTitle = titleInput.value;
                            const articleText = textInput.value;

                            if (!articleTitle || !articleText) {
                                e.preventDefault();
                                return;
                            }
                            editArticle({ no: no, title: articleTitle, text: articleText });
                        } }
                    >
                        <img
                            src={ saveIcon }
                            alt="save button icon"
                        />
                    </Link>
                </div>
            );
        }

        return (
            <div className="simple-board-detail">
                <section className="icon-box-wrapper">
                    <div className="icon-box">
                        <Link to="/">
                            <img
                                src={ listIcon }
                                alt="list button icon"
                            />
                        </Link>
                    </div>
                </section>
                <section className="article-detail-wrapper">
                    { articleBody }
                </section>
                <section className="icon-box-wrapper">
                    { iconBox }
                </section>
            </div>
        );

    }
}