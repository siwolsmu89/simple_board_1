import {Component} from "react";
import {Link} from "react-router-dom";
import homeIcon from "../../../resources/home-button.png";

export default class BoardWrite extends Component {
    render() {
        return (
            <div>
                <section className="icon-box-wrapper">
                    <div className="icon-box">
                        <Link to="/">
                            <img
                                src={homeIcon}
                                alt="edit button icon"
                            />
                        </Link>
                    </div>
                </section>
                <section className="board-write-wrapper">
                    <div>
                        Writer <input type="text" />
                    </div>
                    <div>
                        content <input type="textarea" />
                    </div>
                </section>
            </div>
        );
    }
}