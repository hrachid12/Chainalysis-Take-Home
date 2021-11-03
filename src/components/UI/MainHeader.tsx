import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './MainHeader.module.css';

import Coin from '../../models/Coin';

const MainHeader: React.FC<{ coins: Coin[]}> = (props) => {

	return (
		<Navbar expand="lg" variant="dark" className={styles.header_theme}>
			<Navbar.Toggle aria-controls="main-nav" />

			<Navbar.Collapse id="main-nav">
				<Nav className="mr-auto">
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/">Home</NavLink>
					
					{props.coins.map((coin) => {
					return (
						<NavLink activeClassName={styles.active} className={styles.navitem} to={`/${coin.ticker}`}>{coin.name}</NavLink>
					)
					})}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainHeader;