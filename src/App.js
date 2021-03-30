import React from 'react';

import { Cards,Chart,CountryPick} from './Components';
import styles from './App.module.css';
import { fetchData } from './api/index';

import coronaImg from './images/OIP.jpg'

class App extends React.Component {

    state = {
        data : {},
        country:''
    }
    

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data : fetchedData });
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country:country });
    }

    render() {
        const {data,country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="Corona Virus"/>
                <Cards data={data} />
                <CountryPick handleCountryChange={this.handleCountryChange} />
                <Chart  data={data} country={country} />
            </div>
        );
    }
}

export default App;