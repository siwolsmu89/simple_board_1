import {Component} from "react";
import { connect } from "react-redux";
import BoardList from "./components/view/board-list/BoardList";
import {movePageAction} from "./redux/action/actions";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoardWrite from "./components/view/board-write/BoardWrite";
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
                        <BoardList
                            articles={ articles }
                            pagination={ pagination }
                            movePage={ pageNo => dispatch(movePageAction(pageNo)) }
                        />
                    </Route>
                    <Route path="/write">
                        <BoardWrite />
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
