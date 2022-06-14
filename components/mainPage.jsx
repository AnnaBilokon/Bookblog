/* eslint-disable max-len */
import React  from 'react';
import styles from './styles/style.scss';
import 'antd/dist/antd.css';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';
import {Selection} from './selection.jsx';
import {Reviews} from './reviews.jsx';
import {Fav2021} from './selections/fav2021';
import {LoveBooks} from './selections/loveBooks';

export const Main = () => (
	<div>
		
		<header>
		<p className={styles.header}>READ_BOOKA</p>
		<nav className={styles.nav}>
		    {/* <NavLink to={'/'} style={{color: 'black'}}><p className={styles.navLinks}>Главная</p></NavLink> */}
			<NavLink to={'/reviews'} style={{color: 'black'}}><p className={styles.navLinks}>Рецензии на книги</p></NavLink>
            <NavLink to={'/selection'} style={{color: 'black'}}><p className={styles.navLinks}>Подборки книг</p></NavLink>
            <p className={styles.navLinks}>Новинки месяца</p>
          </nav>
		</header>
		<section>
			<div className={styles.reviewBox}>
			<p className={styles.departmentText}>Главная</p>
			
			</div>
		</section>
		<footer className={styles.footer}>
		<p className={styles.footer_text1} >Книжный блог</p>
		<p className={styles.footer_text}> © 2022 read_booka</p>
		<p className={styles.footer_text}> ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
		</footer>
		
	</div>

);

export const pathes = {
	main: '/',
	selection: '/selection'
  };

export const Links = () => (
	<div>
	<BrowserRouter>
    <Switch>
	<Route exact path={'/'} component={Reviews}></Route>
	<Route path={'/reviews'} component={Reviews}></Route>
	<Route path={'/selection'} component={Selection}></Route>
	<Route path={'/favorite2021'} component={Fav2021}></Route>
	<Route path={'/loveBooks'} component={LoveBooks}></Route>
    </Switch>
  </BrowserRouter>
	</div>
  
	);