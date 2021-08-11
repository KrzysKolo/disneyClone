import React from 'react';
import styled from 'styled-components';
//FILES
import logo from './../../assets/images/logo.svg';
import home from './../../assets/images/home-icon.svg';
import search from './../../assets/images/search-icon.svg';
import watchlist from './../../assets/images/watchlist-icon.svg';
import orginals from './../../assets/images/original-icon.svg';
import movies from './../../assets/images/movie-icon.svg';
import series from './../../assets/images/series-icon.svg';
//STYLED
import { HeaderWrapper, Nav, Logo, NavMenu, UserImage } from './Header.css';
import { Container } from './../components.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
//REDUX
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { selectUserName, selectUserEmail, selectUserPhoto } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';

const Header = () => {
	const userName = userSelector(selectUserName);
	const userEmail = userSelector(selectUserEmail);
	const userPhoto = userSelector(selectUserPhoto);
	return (
		<HeaderWrapper>
			<Container>
				<Nav>
					<Logo src={logo} alt="logo" />
					{ !userName &&
						<Login>Login</Login>
					}
					<NavMenu>
						<a href="#">
							<img src={home} alt="home" />
							<span>home</span>
						</a>
						<a href="#">
							<img src={search} alt="search" />
							<span>search</span>
						</a>
						<a href="#">
							<img src={watchlist} alt="watchlist" />
							<span>watchlist</span>
						</a>
						<a href="#">
							<img src={orginals} alt="orginals" />
							<span>orginals</span>
						</a>
						<a href="#">
							<img src={movies} alt="movies" />
							<span>movies</span>
						</a>
						<a href="#">
							<img src={series} alt="series" />
							<span>series</span>
						</a>
					</NavMenu>
					<UserImage src="data:image/jpeg;base64,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" />
				</Nav>
			</Container>
		</HeaderWrapper>
	)
}

export default Header;

