import React  from 'react';
import styles from './styles/style.scss';
import 'antd/dist/antd.css';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';

export const Selection = () => (
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
			<p className={styles.departmentText}>Подборки книг</p>
			</div>
			<NavLink to={'/favorite2021'} style={{color: 'black'}}> <div className={styles.selectionItem}>
				<p className={styles.selectionItemTitle}>Лучшие книги 2021 года</p>
			</div> </NavLink>
			<div className={styles.selectionItem}>
				<p className={styles.selectionItemTitle}>Книги о Холокосте</p>
			</div>
			<div className={styles.selectionItem}>
				<p className={styles.selectionItemTitle}>5 любимых зарубежных классиков</p>
			</div>
			<NavLink to={'/loveBooks'} style={{color: 'black'}}><div className={styles.selectionItem}>
				<p className={styles.selectionItemTitle}>Книги о любви</p>
			</div> </NavLink>
			</section>
			<footer className={styles.footer}>
		<p className={styles.footer_text1} >Книжный блог</p>
		<p className={styles.footer_text}> © 2022 read_booka</p>
		<p className={styles.footer_text}> ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
		</footer>
</div>
);
