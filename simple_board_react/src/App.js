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
        const { dispatch, articles, pagination, spinning } = this.props;

        return (
            <div className="simple-board-app">
                <div className="title">
                    Simple Board
                </div>
                <Spinner
                    spinning={ spinning }
                />
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
                            addArticle={ (article) => dispatch(addNewArticle(article, pagination))}
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
    const { articles, pagination, spinning } = state;
    return { articles, pagination, spinning };
}

export default connect(selector)(App);
