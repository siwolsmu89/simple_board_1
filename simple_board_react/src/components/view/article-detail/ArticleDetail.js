import {Component} from "react";

export default class ArticleDetail extends Component {

    render() {

        const { articles } = this.props;
        const { no } = this.props.match.params;

        if (Number(no)) {
            const detailArticle = articles.find( article => article.no === Number(no));
            return(
                <div>
                    <h1>{detailArticle.title}</h1>
                    <p>{detailArticle.text}</p>
                </div>
            );
        } else {
            return (
                <div>
                    Article Not Found
                </div>
            );
        }

    }
}