import {Component} from "react";
import { connect } from "react-redux";
import ArticleList from "./components/view/article-list/ArticleList";
import {addArticleAction, movePageAction, updateArticleViewAction} from "./redux/action/actions";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleWrite from "./components/view/article-write/ArticleWrite";
import "./App.css";
import ArticleDetail from "./components/view/article-detail/ArticleDetail";

class App extends Component {

    render() {
        const { dispatch, articles, pagination } = this.props;

        return (
            <div className="simple-board-app">
                <div className="title">
                    Simple Board
                </div>
                <Router>
                    <Route exact path="/">
                        <ArticleList
                            articles={ articles }
                            pagination={ pagination }
                            movePage={ pageNo => dispatch(movePageAction(pageNo)) }
                        />
                    </Route>
                    <Route path="/write">
                        <ArticleWrite
                            addArticle={ (title, text) => dispatch(addArticleAction(title, text))}
                        />
                    </Route>
                    <Route path="/detail/:no"
                           render={ (states) =>
                               <ArticleDetail
                                   {...states}
                                   articles={ articles }
                                   updateViewCount={ (no) => dispatch(updateArticleViewAction(no)) }
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
