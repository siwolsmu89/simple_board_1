import {Component} from "react";
import {Link} from "react-router-dom";
import homeIcon from "../../../resources/home-button.png";
import saveIcon from "../../../resources/save-button.png";
import refreshIcon from "../../../resources/refresh-button.png";
import "./ArticleWrite.css";

export default class ArticleWrite extends Component {
    render() {
        const { addArticle } = this.props;
        let articleTitle = '';
        let articleContent = '';

        return (
            <div>
                <section className="icon-box-wrapper">
                    <div className="icon-box">
                        <Link to="/">
                            <img
                                src={ homeIcon }
                                alt="home button icon"
                            />
                        </Link>
                    </div>
                </section>
                <section className="article-write-wrapper">
                    <div className="article-write">
                        <div className="article-title">
                            <input
                                type="text"
                                placeholder="Write Title Here"
                            />
                        </div>
                        <div className="article-content">
                            <textarea
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
                        />
                        <Link to="/" onClick={ () => addArticle("test", "test2")}>
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