import {Component} from "react";
import { connect } from "react-redux";
import ArticleList from "./components/view/article-list/ArticleList";
import {addArticleAction, movePageAction} from "./redux/action/actions";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleWrite from "./components/view/article-write/ArticleWrite";
import "./App.css";

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
                            addArticle={ (title, content) => dispatch(addArticleAction(title, content))}
                        />
                    </Route>
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
