/* eslint-disable max-len */
import React  from 'react';
import styles from '../styles/style.scss';
import 'antd/dist/antd.css';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';

export const Fav2021 = () => (
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
			<p className={styles.departmentText}>Лучшие книги 2021 года</p>
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

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://s1.livelib.ru/boocover/1005540079/o/7c5f/Mett_Hejg__Polnochnaya_biblioteka.jpeg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Между жизнь и смертью есть библиотека. В неё попадает 35-летняя Нора, учительница музыки из Бедфорда, когда однажды ночью вся её жизнь летит под откос. Полки здесь тянутся бесконечно. Каждая книга даёт шанс прожить свою собственную, но совсем другую жизнь. Принимать другие решения и, главное, не сожалеть о том, что когда-то не случилось. Оказывается, поступи Нора иначе в тот или иной момент жизни, она могла бы стать рок-звездой, олимпийской чемпионкой, учёным-гляциологом, женой и матерью, побывать в Австралии. Но стала бы она счастливее?
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_200/7414340-archibald-kronin-citadel.jpg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				«Цитадель» — возможно, самая известная книга Кронина, это замечательный злободневный роман-притча о жизненном пути человека от его становления и развития до разложения и упадка личности под гнетом суровой реальности.

Эндрю Мэнсон приезжает на первую в своей жизни практику с благородной целью: помочь как можно большему количеству людей. Он искренне хочет стать одним из тех, кто сможет по-настоящему прославить медицину. Все начинается с малого, но Эндрю не отступает перед трудностями: в захолустном городке молодой человек числится помощником доктора, но на самом деле он сам — доктор. Такова жизнь и Эндрю принимает вызов!

Мало-помалу, меняя одну больницу за другой, Эндрю делает головокружительную карьеру. Однако за взлетами в один момент становится трудно обрести самого себя. Успешный доктор теперь гораздо реже задается глобальными вопросами о том, как изменить медицинскую систему.
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://img4.labirint.ru/rc/09e4d4f619e738b63d20ca9d27b66531/363x561q80/books77/765156/cover.jpg?1617686703' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Кира живет в закрытом северном городе Сулиме, где местные промышляют браконьерством. Ли — в университетском кампусе в США, занимается исследованием на стыке современного искусства и антропологии. Таня — в современной Москве, снимает документальное кино. Незаметно для них самих зло проникает в их жизни и грозит уничтожить. А может быть, оно всегда там было? Но почему, за счёт чего, как это произошло?

Риф — это роман о вечной войне поколений, авторское исследование религиозных культов, где древние ритуалы смешиваются с современностью, а за остроактуальными сюжетами скрываются мифологические и мистические измерения. Каждый из нас может натолкнуться на РИФ, важнее то, как ты переживешь крушение.
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://s1.livelib.ru/boocover/1004028175/200/4488/boocover.jpg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Меня зовут Сид Арго. Мой дом – город Корк, один из самых консервативных и религиозных в штате Пенсильвания. У нас есть своеобразная Библия (её называют Уставом), открыв которую, на первых ста пятидесяти страницах вы увидите свод правил, включающий обязательность молитв, служб и запреты. Запреты на всё. Нельзя громко говорить на улице. Нельзя нарушать комендантский час. Нельзя пропускать религиозные собрания. Нельзя. Нельзя. Нельзя. Ничего нельзя, кроме тайного ощущения собственной ничтожности...

Но в самом конце лета в город приезжает новая семья, и что-то начинает неуловимо, но неизбежно меняться. Мое мировоззрение, мои взгляды... Все подвергается сомнению. Ты, Флоренс Вёрстайл, подвергаешь их сомнению. И почему-то я тебе верю.
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://s1.livelib.ru/boocover/1005233776/o/742e/Lyusinda_Rajli__Polunochnaya_roza.jpeg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				В романе «Полуночная роза» среди сверкающих дворцов индийских махарадж и величественных домов британских аристократов разворачивается история жизни девушки-простолюдинки по имени Анахита, чей путь от компаньонки принцессы до возлюбленной молодого лорда устлан удивительными приключениями, последствия которых будут занимать умы потомков даже полвека спустя, став поворотными моментами в их судьбе...
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
	</div>
);