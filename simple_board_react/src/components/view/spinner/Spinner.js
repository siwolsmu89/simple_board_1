import { Component } from 'react';
import Loader from "react-loader-spinner";
import './Spinner.css'

export default class Spinner extends Component {
    render() {
        const { spinning } = this.props;

        return (
            <div className={`spinner ${ spinning ? 'active' : '' }`}>
                <Loader
                    type="Puff"
                    color="darkgray"
                    height={200}
                    width={100}
                />
            </div>
        );
    }
}
