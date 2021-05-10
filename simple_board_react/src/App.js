import {Component} from "react";
import { connect } from "react-redux";
import ArticleList from "./components/view/article-list/ArticleList";
import {
    addNewArticle,
    getArticles,
    movePage,
    updateArticleView
} from "./redux/action/axiosActions";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleWrite from "./components/view/article-write/ArticleWrite";
import "./App.css";
import ArticleDetail from "./components/view/article-detail/ArticleDetail";
import Spinner from "./components/view/spinner/Spinner";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(getArticles(this.props.pagination));
    }

    render() {
        const { dispatch, articles, pagination } = this.props;

        return (
            <div className="simple-board-app">
                <div className="title">
                    Simple Board
                </div>
                <Spinner />
                <Router>
                    <Route exact path="/">
                        <ArticleList
                            articles={ articles }
                            pagination={ pagination }
                            movePage={ pagination => dispatch(movePage(pagination)) }
                        />
                    </Route>
                    <Route path="/write">
                        <ArticleWrite
                            articles={ articles }
                            addArticle={ (article) => dispatch(addNewArticle(article))}
                        />
                    </Route>
                    <Route path="/detail/:no"
                           render={ (states) =>
                               <ArticleDetail
                                   {...states}
                                   articles={ articles }
                                   updateViewCount={ (no) => dispatch(updateArticleView(no)) }
                               />
                           }
                    />
                </Router>
            </div>
        )
    }
}

function selector(state) {
    const { articles, pagination } = state;
    return { articles, pagination };
}

export default connect(selector)(App);
