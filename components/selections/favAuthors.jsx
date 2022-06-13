/* eslint-disable max-len */
import React  from 'react';
import styles from '../styles/style.scss';
import 'antd/dist/antd.css';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';

export const FavAuthors = () => (
	<div>
<BrowserRouter>
<header>
		<p className={styles.header}>READ_BOOKA</p>
		<nav className={styles.nav}>
		    <NavLink to={'/'} style={{color: 'black'}}><p className={styles.navLinks}>Главная</p></NavLink>
			<NavLink to={'/reviews'} style={{color: 'black'}}><p className={styles.navLinks}>Рецензии на книги</p></NavLink>
            <NavLink to={'/selection'} style={{color: 'black'}}><p className={styles.navLinks}>Подборки книг</p></NavLink>
            <p className={styles.navLinks}>Новинки месяца</p>
          </nav>
		</header>
		<section>
		<div className={styles.reviewBox}>
			<p className={styles.departmentText}>Любимая современная проза</p>
			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_330/46098219-dzhodi-pikolt-devyatnadcat-minut.jpg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				За девятнадцать минут можно постричь газон перед домом, или покрасить волосы, или испечь лепешки к завтраку.
За девятнадцать минут можно остановить землю или спрыгнуть с нее.
За девятнадцать минут можно получить отмщение.
Стерлинг – провинциальный сонный городок в штате Нью-Гэмпшир. Однажды его тихую жизнь нарушают выстрелы в старшей школе. И чтобы пережить это событие, недостаточно добиться торжества правосудия. Для жителей Стерлинга навсегда стерлась грань между правдой и вымыслом, добром и злом, своим и чужим. Джози Кормье, дочка судьи, могла бы быть ценным свидетелем обвинения, но не помнит того, что произошло у нее на глазах, а те факты, которые проясняются в ходе разбирательства, бросают тень вины как на школьников, так и на взрослых, разрушая даже самые крепкие дружеские и семейные узы.
Роман «Девятнадцать минут» ставит простые вопросы, на которые нет простых ответов. Можно ли не знать собственного ребенка? Что значит быть не таким, как все? Оправдано ли желание жертвы нанести ответный удар? И кому вершить суд, если кто-нибудь из нас вообще вправе судить другого?
				</p>
			</div>
			
			</div>	
			
			</div>

		</section>
		<footer className={styles.footer}>
		<p className={styles.footer_text1} >Книжный блог</p>
		<p className={styles.footer_text}> © 2022 read_booka</p>
		<p className={styles.footer_text}> ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
		</footer>
		</BrowserRouter>	
	</div>
);