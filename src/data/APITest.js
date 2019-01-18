import React, { Component } from 'react';


//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class APITest extends Component {
    constructor() {
        super();
        this.state = {
            //pictures: [],
        };
    }


componentDidMount() {
    fetch('https://.....')
    .then(results => {
        return results.json();
    }).then(data => {
        let pictures = data.results.map((pic) => {
            return(
                <div key={pic.results}>
                    <img src={pic.picture.medium} />
                </div>
            )
        })
        this.setState({pictures: pictures});
        console.log("state", this.state.pictures);
    })
}

render() {
    return (
        <div>
            {this.state.pictures}
        </div>
    )
}

}