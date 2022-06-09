import React  from 'react';
import styles from './styles/style.scss';
import 'antd/dist/antd.css';
import {Dropdown, Menu} from 'antd';

export const Main = () => (
	<div>
		<header>
		<p className={styles.header}>READ_BOOKA</p>
		<nav className={styles.nav}>
            <p className={styles.navLinks}>Главная</p>
            <p className={styles.navLinks}>Рецензии на книги</p>
            <p className={styles.navLinks}>Подборки книг</p>
            <p className={styles.navLinks}>Новинки месяца</p>
          </nav>
		</header>
		<section>
			<p>
			<img src='/components/images/IMG_20220223_092126_394.jpg' alt='picture'></img>
			</p>
		</section>
		<footer className={styles.footer}>
		<p className={styles.footer_text1} >Книжный блог</p>
		<p className={styles.footer_text}> © 2022 read_booka</p>
		<p className={styles.footer_text}> ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
		</footer>
		
	</div>
);