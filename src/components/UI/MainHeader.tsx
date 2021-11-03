import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './MainHeader.module.css';

const MainHeader: React.FC = () => {

	return (
		<Navbar expand="lg" variant="dark" className={styles.header_theme}>
			<Navbar.Toggle aria-controls="main-nav" />

			<Navbar.Collapse id="main-nav">
				<Nav className="mr-auto">
					<NavLink exact activeClassName={styles.active} className={styles.navitem} to="/">Home</NavLink>
					<NavLink activeClassName={styles.active} className={styles.navitem} to="/bitcoin">Bitcoin</NavLink>
					<NavLink activeClassName={styles.active} className={styles.navitem} to="/ethereum">Ethereum</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainHeader;