import {Component} from "react";
import {Link} from "react-router-dom";
import listIcon from "../../../resources/list-button.png";
import './ArticleDetail.css';

export default class ArticleDetail extends Component {

    componentDidMount() {
        const { updateViewCount } = this.props;
        const { no } = this.props.match.params;

        updateViewCount(Number(no));
    }

    render() {
        const { articles } = this.props;
        const { no } = this.props.match.params;
        const detailArticle = articles.find( article => article.no === Number(no));

        let articleBody;
        if (detailArticle) {
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
                                src={ listIcon }
                                alt="list button icon"
                            />
                        </Link>
                    </div>
                </section>
                <section className="article-detail-wrapper">
                    { articleBody }
                </section>
            </div>
        );

    }
}