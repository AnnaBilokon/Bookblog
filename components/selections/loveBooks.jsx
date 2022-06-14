/* eslint-disable max-len */
import React  from 'react';
import styles from '../styles/style.scss';
import 'antd/dist/antd.css';
import {BrowserRouter, Switch, Route, NavLink, HashRouter} from 'react-router-dom';

export const LoveBooks = () => (
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
			<p className={styles.departmentText}>Книги о любви</p>
			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://s1.livelib.ru/boocover/1000665138/o/0939/Dzhodzho_Mojes__Do_vstrechi_s_toboj.jpeg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Ох, вот не просто так я почти никогда не читаю книгу после того, как посмотрела фильм. Это отвратительно, когда ты знаешь чем всё закончится. Это мешает верить героям, мешает сопереживать и самое главное – мешает фокусироваться ещё и на тех моментах, которых в фильме не было.
Очень сильно меня выбешивала семья Луизы. Особенно сестра. Она живет как хочет, как считает нужным и ставит всех вокруг в условия, когда ей якобы все должны. Очень хочется дать леща и послать куда подальше. Но почему Луизе так сложно просто взять и начать жить?
Отчасти, мне кажется, что Уилл был дан ей в роли хомячка – показать ребенку смерть и научить ценить жизнь. Он мало того что на собственно примере показал, как все возможности могу разом исчезнуть, так ещё и открыл ей мир, дал ей возможности для старта.
Уилл – я не знаю, мне сложно понять почему человек не хотел бороться за то, чтобы жить, но я никогда и не была в такой ситуации. Очень легко рассуждать, когда не у тебя жизнь буквально заблокирована. Его к такому не готовили и он прошел это так, как смог пройти. Я не понимаю его, слишком сильна во мне собственная жажда жить, но и осуждать не могу.
Не могу сказать, что для меня это красивая история люблю. Яркая, надрывная, драматичная – да. Но уж слишком много в ней спровоцировано условиями задачи.
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://img4.labirint.ru/rc/8daa6d4e169b5eb1e39be32aafc5da0f/363x561q80/books48/476412/cover.jpg?1563809523' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				На далеком острове живут смотритель маяка Том Шербурн и его жена Изабель.
Они молоды и страстно любят друг друга, но у каждого в душе кроется страх. Тома терзают кошмарные воспоминания о войне, а Изабель понимает, что ее мечтам о материнстве не суждено сбыться.
Но однажды к берегу прибивает ялик, в котором они находят новорожденную девочку...
Так начинается история, покорившая сердца миллионов читателей.
История загадок, тайн и неожиданных поворотов судьбы.
Какое же решение примут Том и Изабель и чем оно для них обернется?
Чудом - или трагедией?..
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://flibusta.site/i/22/427822/cover.jpg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Впервые Энца и Чиро встретились еще детьми при очень печальных обстоятельствах, на фоне величавых итальянских Альп. Чиро – полусирота, который живет при женском монастыре, а Энца – старшая дочь в большой и очень бедной семье. Они не сетуют на судьбу и готовы к трудам и невзгодам, главное – не расставаться с близкими людьми и с такими прекрасными горами. Но судьба распорядится иначе – совсем детьми оба вынуждены покинуть родину и отправиться через океан в непостижимую и пугающую Америку. Так начинается история их жизней, полная совершенно неожиданных поворотов, искушений, невзгод, счастливых мгновений, дружбы и великой любви. Им придется встретиться и расстаться еще несколько раз, прежде чем они поймут, что судьба недаром подстраивает им встречи, и если есть что-то в жизни, способное справиться с тоской по родной Италии, так это – любовь.
«Жена башмачника» – эпическая история любви, которая пролегла через два континента и две мировые войны, через блеск и нищету Нью-Йорка и умиротворяющую красоту Италии, через долгие разлуки и короткие встречи.

				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://s1.livelib.ru/boocover/1000950759/o/b071/YanFilipp_Zendker__Iskusstvo_slyshat_stuk_serdtsa.jpeg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Дебютный роман писателя, после первого же издания на родине автора стал национальным бестселлером, а скоро завоевал и международное читательское признание. Отец Джулии Вин — личность поистине загадочная. С одной стороны — он блестящий американский адвокат и добропорядочный семьянин, с другой — человек, прошлое которого окутано тьмой. Ни жене, ни его взрослым детям о нем не известно практически ничего. Поэтому, когда однажды мистер Вин исчезает, полиция и родные понятия не имеют, где его искать. Единственная зацепка — письмо, найденное дочерью через четыре года после исчезновения отца. Это — любовное послание к некой женщине по имени Ми Ми, и живет она далеко, по другую сторону океана. Джулия отправляется в долгое путешествие в неизвестность, где ей предстоит обучиться очень непростому искусству — слышать стук сердца других людей.
				</p>
			</div>
			</div>	

			<div className={styles.selectionBox}>
			<div>
			<img className={styles.imgSelection} src='https://s1.livelib.ru/boocover/1000524027/o/c6c3/Dzhejmi_Ford__Otel_na_perekrestke_radosti_i_gorechi.jpeg' alt='picture' />
				</div>
			
			<div className={styles.annotationSelection}>
				<p className={styles.annotation}>
					Аннотация:
				</p>
				<p >
				Романтическая история, рассказанная Джейми Фордом, начинается с реального случая. Генри Ли видит, как открывают старый японский отель "Панама", который стоял заколоченным почти сорок лет. И это событие возвращает Генри в прошлое, в детство, в сороковые годы. Отец поглощен войной с Японией, и ничто его больше не интересует, в своей престижной школе Генри — изгой, поскольку он там единственный китаец, а на улицах его подстерегает белая шпана. Но однажды Генри встречают Кейко, юную японку, которая смотрит на мир куда более оптимистично, хотя у нее-то проблем не в пример больше, ведь идет война с Японией. Но их зарождающее чувство сметает ураган страшных событий. После бомбардировки Перл-Харбор всех американских японцев сгоняют в лагеря, и Генри с Кейко оказываются по разные стороны колючей проволоки. Так начинается романтичная и непредсказуемая история, которая продлится всю войну… Удивительный по душевной тонкости и доброй интонации роман Джейми Форда мгновенно стал бестселлером, повторив судьбу "Бегущего за ветром" Халеда Хоссейни. Миллионные тиражи, издания почти на трех десятках языков, читательские дискуссии на книжных порталах — такова судьба этого дебютного романа, ставшего настоящим событием последних лет. Эта лиричная книга интересна еще и тем, что открывает для русского читателя совершенно незнакомую страницу из военных лет.
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