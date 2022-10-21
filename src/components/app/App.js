import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import withRender from '../withRender/withRender';

import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import Overview from '../overview/Overview';

import './app.scss';


const App = () => {
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
    const {request} = useHttp();

    const NavigationWithRender = withRender(Navigation);
    const OverviewWithRender = withRender(Overview);

    useEffect(() => {
        request('https://machines-db.herokuapp.com/machines')
            .then(res => setMachines(res))
            .finally(() => setLoading(false))
            // eslint-disable-next-line
    }, [])

    
    return (
        <>
            <Header />
            {loading ? <h4>Loading...</h4> :  <>
                    <NavigationWithRender machines={machines} loading={loading} />
                    <main className='overview'>
                        <OverviewWithRender machines={machines} loading={loading}/>
                    </main>
                </> }
        </>
    )
}

export default App;