import React from 'react';
import TryToday from '@components/TryToday/TryToday';
import ChooseMenu from '../../containers/ChooseMenu/ChooseMenu';
import Notice from '../../components/Notice/Notice';
import Reservation from '../../containers/Reservation/Reservation';
import Footer from '../../containers/Footer/Footer';

const Home = () => {
	return (
		<>
			<TryToday/>
			<ChooseMenu/>
			<Notice/>
			<Reservation/>
			<Footer/>
		</>
        
	);
}

export default Home;
