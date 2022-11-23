import React from 'react';
import axios from 'axios';

class PutApi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedAt: null
        };
    }

    componentDidMount() {
        // Simple PUT request with a JSON body using axios
        const article = { title: 'React PUT Request Example' };
        axios.put('https://reqres.in/api/articles/1', article)
            .then(response => this.setState({ updatedAt: response.data.updatedAt }));
    }

    render() {
        const { updatedAt } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple PUT Request</h5>
                <div className="card-body">
                    Returned Update Date: {updatedAt}
                </div>
            </div>
        );
    }
}

export default PutApi;