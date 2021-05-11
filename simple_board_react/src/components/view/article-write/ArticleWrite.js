import {Component} from "react";
import {Link} from "react-router-dom";
import listIcon from "../../../resources/list-button.png";
import saveIcon from "../../../resources/save-button.png";
import refreshIcon from "../../../resources/refresh-button.png";
import "./ArticleWrite.css";

export default class ArticleWrite extends Component {

    render() {
        const { articles, addArticle } = this.props;
        let titleInput = '';
        let textInput = '';

        return (
            <div>
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
                <section className="article-write-wrapper">
                    <div className="article-write">
                        <div className="article-title">
                            <input
                                ref={ node => { titleInput = node } }
                                type="text"
                                placeholder="Write Title Here"
                            />
                        </div>
                        <div className="article-content">
                            <textarea
                                ref={ node => { textInput = node } }
                                spellCheck="false"
                                placeholder="Write Content Here"
                            />
                        </div>
                    </div>
                </section>
                <section className="icon-box-wrapper">
                    <div className="icon-box">
                        <img
                            src={ refreshIcon }
                            alt="refresh button icon"
                            onClick={ () => {
                                titleInput.value = '';
                                textInput.value = '';
                            } }
                        />
                        <Link
                            to="/"
                            onClick={ (e) => {
                                const articleTitle = titleInput.value;
                                const articleText = textInput.value;

                                if (!articleTitle || !articleText) {
                                    e.preventDefault();
                                    return;
                                }
                                addArticle({ title: articleTitle, text: articleText });
                            } }
                        >
                            <img
                                src={ saveIcon }
                                alt="save button icon"
                            />
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}