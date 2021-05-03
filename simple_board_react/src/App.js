import {Component} from "react";
import { connect } from "react-redux";
import BoardList from "./components/view/board-list/BoardList";

class App extends Component {

    render() {
        const { articles, pagination } = this.props;

        return (
            <div className="simple-board-app">
                <BoardList
                    articles={ articles }
                    pagination={ pagination }
                />
            </div>
        )
    }
}

function selector(state) {
    const { articles, pagination } = state;
    return { articles, pagination };
}

export default connect(selector)(App);
