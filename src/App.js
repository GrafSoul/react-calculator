import React, { Component } from 'react';

import Aux from './hoc/AuxComponent/AuxComponent';
import Layout from './components/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';

class App extends Component {
    render() {
        return (
            <Aux>
                <Layout>
                    <Calculator />
                </Layout>
            </Aux>
        );
    }
}
export default App;
