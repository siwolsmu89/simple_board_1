import {Component} from "react";
import {Link} from "react-router-dom";
import homeIcon from "../../../resources/home-button.png";
import './ArticleDetail.css';

export default class ArticleDetail extends Component {

    render() {
        const { articles } = this.props;
        const { no } = this.props.match.params;
        let articleBody;

        if (Number(no)) {
            const detailArticle = articles.find( article => article.no === Number(no));
            articleBody = (
                <div className="article-detail">
                    <div className="article-detail-title">
                        { detailArticle.title }
                    </div>
                    <div className="article-detail-content">
                        { detailArticle.text }
                    </div>
                </div>
            );
        }

        return (
            <div className="simple-board-detail">
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
                <section className="article-detail-wrapper">
                    { articleBody }
                </section>
                <section className="article-comment-wrapper">
                    <div className="article-detail-comment">
                        Comments here
                    </div>
                </section>
            </div>
        );

    }
}