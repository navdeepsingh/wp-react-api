import React        from 'react';
import DataStore    from './../stores/DataStore.js';

class Home extends React.Component {

    render() {
        let allData = DataStore.getAll();
        console.log(allData);

        return (
            <div>
                <h1>Hello World</h1>
                <p></p>
            </div>
        );
    }
}

export default Home;
