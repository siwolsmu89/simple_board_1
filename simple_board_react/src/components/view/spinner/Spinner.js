import { Component } from 'react';
import Loader from "react-loader-spinner";
import './Spinner.css'

export default class Spinner extends Component {
    render() {
        const { fetching } = this.props;

        return (
            <div className={`spinner ${ fetching ? 'active' : '' }`}>
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
