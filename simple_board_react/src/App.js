import {Component} from "react";
import { connect } from "react-redux";
import BoardList from "./components/view/board-list/BoardList";
import {movePageAction} from "./redux/action/actions";

class App extends Component {

    render() {
        const { dispatch, articles, pagination } = this.props;

        return (
            <div className="simple-board-app">
                <BoardList
                    articles={ articles }
                    pagination={ pagination }
                    movePage={ pageNo => dispatch(movePageAction(pageNo)) }
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
