import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<>
	  <header id="home">
	  <nav class="navbar navbar-expand-lg  navbar-fixed-top" role="navigation">
		  <div class="container">
			 
			  <div class="navbar-header">
				
				  <a class="navbar-brand" href="#"><img src="assets/img/skailogo.png" alt="Brand Skailab"
						  class="skailogo" /></a>
			  </div> 
			  <div class="collapse navbar-collapse" id="col0">
				  <ul class="navbar-nav">
					  <li class="el-navbar"><a href="#home">HOME</a></li>
					  <li class="el-navbar"><a href="#projects">PROJECTS</a></li>
					  <li class="el-navbar"><a href="#goals">GOALS</a></li>
					  <li class="el-navbar"><a href="#team">TEAM</a></li>
					  <li class="el-navbar"><a href="#contact">CONTACT US</a></li>
					  <li class="dropdownxx el-navbar">
						  <a>
							  <select id="lang" name="lang" class="inputbox" size="1">
								  <option value="EN" class="clang">En</option>
								  <option value="AR" class="clang">Ar</option>
								  <option value="FR" class="clang">Fr</option>
								  <option value="DU" class="clang">Du</option>
								  <option value="SP" class="clang">Sp</option>
							  </select>
						  </a>
					  </li>
				
				  </ul>
			  </div>
		  </div>
	  </nav>
	
	  <section class="background">
		  <div class="bigimg">
			  <img class="bigbrand" src="assets/img/Frame_1_brand.svg" alt="Backgound Image" width="430px"
				  height="auto"/>
			  <header class="intro-brand">
				  Artificial Intelligence Excellence Laboratory
			  </header>
			  <button type="button" class="discoverBtn"> DISCOVER NOW </button>
		  </div>
	  </section>
  </header>
  
  <main>
	
	  <section class="home-section" id="discover">
		
		  <header class="center-title">
			  <h3>DISCOVER</h3>
		  </header>
		
		  <section class="container">
			  <div class="row">
				  <div class="col-sm-6">
					  <header>
						  <h3 class="discover-title">WHAT IS SKAILAB ? </h3>
					  </header>
					  <div class="discover-text">SKAILAB is the first Artificial Intelligence Center in Algeria.
						  It was build with the HPC of the University of skikda,
						  August, 20th 1955 North east of Algeria
					  </div>

					
				  </div>
				  <div class="col-sm-6">

					  <section class="videob">
						  <div class="wrapper">
							  <video class="video">
								  <source  src="https://files.slack.com/files-pri/T010YR8JY3W-F01GU788866/ai-video.mp4"
									  type="video/mp4" />
								 
							  </video>
						

							  <div class="buttons">
								  <div class="play-btn">
									  <i class="fa fa-play fan-play"></i>
								  </div>
							  </div>
						  </div>
					  </section>

				  </div>
			  </div>
		  </section>
		
	  </section>


	  <section class="home-section" id="projects">
	
		  <header class="center-title pt-5">

			  <h3>
				  PROJECTS
			  </h3>

			  <div class="w-66 mlr-auto">
				  <p>
					  Solve real life problems using Artificial Intelligence
					  Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are
					  programmed to think like humans and mimic their actions. Reviewing the types of problems that
					  can be solved, Understanding building blocks , Learning the fundamentals of building models in
					  machine learning, Exploring key algorithms
				  </p>
			  </div>

		  </header>
		
		  <div class="container">

			  <div class="row">

				  <div class="col-sm-5 algeria">
					  <img src="assets/img/algeria.svg" alt="Algeria Map Logo"/>
				  </div>
				  <section class="col-sm-7">
					  <ul class="projects-list">

						  <li class="redpoint"><a
								  href="https://devmesh.intel.com/projects/neonatal-jaundice-detection-in-algeria-using-ai"
								  target="__blank">Neonatal jaundice Detection in Algeria Using AI <i
									  class="fas fa-link"></i> </a></li>

						  <li class="redpoint"><a
								  href="https://devmesh.intel.com/projects/a-hybrid-solution-for-pattern-recognition-face-and-speech"
								  target="__blank"> A Hybrid Solution For Pattern Recognition: Face and Speech <i
									  class="fas fa-link"></i></a></li>

						  <li class="redpoint"><a href="https://devmesh.intel.com/projects/smoke-detection-in-algeria"
								  target="__blank">Smoke Detection in Algeria Monitorinf and air Pollutin Reduction <i
									  class="fas fa-link"></i></a>

						  </li>

						  <li class="redpoint"><a
								  href="https://devmesh.intel.com/projects/deep-learning-for-education-equity"
								  target="__blank"> Deep learning fr Equity Education <i class="fas fa-link"></i></a>
						  </li>

						  <li class="redpoint"> <a
								  href="https://devmesh.intel.com/projects/lung-disease-ai-classifier"
								  target="__blank">Lung disease AI Classifier <i class="fas fa-link"></i></a>
						  </li>

					  </ul>

				  </section>
			  </div>

		  </div>
	
	  </section>

	


	  <section class="home-section" id="goals">
		
		  <header class="center-title">
			  <h3>
				  GOALS
			  </h3>

		  </header>



		  <section class="container">

			  <div class="row">

				  <div class="col-sm-4">
					  <img class="cardimg" src="assets/img/card1.jpg" alt="Card Image"/>
					  <div class="insidecard4">
						  <header class="titleInCard">
							  Learn
						  </header>
						  <br></br>
						  <p class="textInCard text-muted">Get smarter using online tutorials,
							  <span id="dots4">...</span>
							  <span class="mor text-muted" id="more4">
								  webinars, student kits and support forums.

							  </span>
						  </p>
						  <a class="link-read-more" onclick="myFunction4()" id="myBtn4">Read more</a>
					  </div>
				  </div>

				  <div class="col-sm-4">
					  <img class="cardimg" src="assets/img/card1.jpg" alt="Card Image"/>
					  <div class="insidecard5">
						  <header class="titleInCard">
							  Develop
						  </header>
						  <br></br>
						  <p class="textInCard text-muted">Get access to online resources: Coding using
							  <span id="dots5">...</span>
							  <span class="mor text-muted" id="more5">
								  Jupyter, Collab for programming skills

							  </span>
						  </p>
						  <a class="link-read-more" onclick="myFunction5()" id="myBtn5">Read more</a>
					  </div>
				  </div>

				  <div class="col-sm-4">
					  <img class="cardimg" src="assets/img/card1.jpg" alt="Card Image"/>
					  <div class="insidecard6">
						  <header class="titleInCard">
							  Create
						  </header>
						  <br></br>
						  <p class="textInCard text-muted">Create and educate others using available
							  <span id="dots6">...</span>
							  <span class="mor text-muted " id="more6">
								  course materials, hands-on labs, and more

							  </span>
						  </p>
						  <a class="link-read-more" onclick="myFunction6()" id="myBtn6">Read more</a>
					  </div>
				  </div>

			  </div>



		  </section>
		 

	  </section>

	

	  <section class="home-section" id="team">
		
		  <header class="center-title">
			  <h3>
				  TEAM

			  </h3>

		  </header>
	
		  <div class="container">
			  <div class="row align-items-center justify-content-center">

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/mourad bouache.jpg" alt="Mourad Bouache image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Dr.Mourad Bouache</h5>
								  <p class="card-text"> AI and Performance Yahoo! Silicon valley</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/mohamed senouci.png" alt="Dr Mohamed Senouci image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Dr.Mohamed Senouci</h5>
								  <p class="card-text"> Professor at ECE Paris</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/salim haddad.png" alt="Salim Haddad image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Pr.Salim Haddad</h5>
								  <p class="card-text">President of the University of Skikda</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/smaine mazouzi.jpg" alt="Salim Haddad image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Pr.Smaine Mazouzi</h5>
								  <p class="card-text">Professor at the University of Skikda | CS</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class="col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/isra boucetta.jpg" alt="Isra Boucetta image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1"> Isra Boucetta</h5>
								  <p class="card-text"> Middle School Student</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/yasmine lala bouali.jpg"
								  alt="Yasmine Lala Bouali image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Yasmine Lala Bouali</h5>
								  <p class="card-text">Master 2 CS Student</p>
							  </div>
						  </div>
					  </div>
				  </div>


				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/sofia smati.png" alt="Sofia Smati image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Sofia Smati</h5>
								  <p class="card-text">Master 2nd CS Student</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/safa hamreras.jpg" alt="Safa Hamreras image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Safa Hamreras</h5>
								  <p class="card-text">PhD Student CS</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/imad bekouch.jpg" alt="Imad Bekouch image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Imad Bekouch</h5>
								  <p class="card-text"> PhD Student CS</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/abdelrahman toumi.jpg" alt="abdelrahman Toumi image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Abderrahmane Toumi</h5>
								  <p class="card-text">Full Stack Web Developer</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/lahcen rahlaoui.jpg" alt="Lahcen Rahlaoui image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Lahcen Rahlaoui</h5>
								  <p class="card-text">Front-end Web Developer</p>
							  </div>
						  </div>
					  </div>
				  </div>

				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/iyad badache.png" alt="Iyad Badache image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Iyad Badache</h5>
								  <p class="card-text"> Web Designer</p>
							  </div>
						  </div>
					  </div>
				  </div>


				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/ramy ounnoughene.jpg" alt="Ramy Ounnoughene image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Ramy Ounnoughene<br></br>
									  <span class="badge bg-secondary mb-1">Ai Junior</span></h5>
								  <p class="card-text"> High School Student</p>
							  </div>
						  </div>
					  </div>
				  </div>



				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/chebab mokhtaria.jpg" alt="Chebab Mokhtaria image"/>
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Chebab Mokhtaria<br></br>
									  <span class="badge bg-secondary mb-1">Ai Junior</span></h5>
								  <p class="card-text"> PhD Student CS</p>
							  </div>
						  </div>
					  </div>
				  </div>


				  <div class=" col-md-6 card mb-3" style="max-width: 540px;">
					  <div class="row g-0">
						  <div class="col-md-4">
							  <img class="heyimg" src="data/pimg/serine sefardjelah.jpg"
								  alt="Serine Sefardjelah image" />
						  </div>
						  <div class="col-md-8">
							  <div class="card-body ml-2">
								  <h5 class="card-title mb-4 mt-1">Serine Sefardjelah<br></br>
									  <span class="badge bg-secondary mb-1">Ai Junior</span></h5>
								  <p class="card-text"> Student At Esi Algeirs</p>
							  </div>
						  </div>
					  </div>
				  </div>




			  </div>

		  </div>
	
	  </section>


	  <section class="home-section" id="contact">

	
		  <header class="center-title">
			  <h3>
				  CONTACT US
			  </h3>

		  </header>
		
		  <section class="container">
			  <div class="row">
				  <div class="col-sm-5">
					  <br></br>
					  <h1 class="m-em-4 h1">Leave an E-mail<br></br></h1>
					  <div class="textemail"> Just fill out the form and our support team will get back at you within
						  24 hours.</div>
				  </div>

				  <div class="col-sm-7">
					  <form action="https://send.pageclip.co/e7NFMeFC0p25DKOpLN8kQnXCarSW3DsG/contact" class="pageclip-form" method="post">
						  <div class="row">
							  <div class="col-sm-12">
								  <input class="inp" placeholder="Your E-mail adress" name="email" type="email"
									  required/>
							  </div>
							  <div class="col-sm-12">
								  <textarea class="inp" name="body"
									  placeholder="write your lettre here"></textarea>
							  </div>
							  <div class="col-sm-12">
								  <button class="pageclip-form__submit" type="submit">
									  <span>SUBMIT NOW</span>
								  </button>
							  </div>
						  </div>
					  </form>
				  </div>
			  </div>
		  </section>
	
	  </section>



  </main>

  <footer>

	  <div class="container-fluid lastone">
		  <div class="row">
			  <div class="col-sm-2">
			  </div>
			  <div class="col-sm-3">
				  <div class="adclas">
					  Address
				  </div>

				  <div class="coclas">
					  University Of 20 August 1955 Skikda Algeria
				  </div>

				  <div class="copclas">
					  Copyright 2020 Skailab
				  </div>
			  </div>
			  <div class="col-sm-1">
				
			  </div>
			  <div class="col-sm-6">
				  <div class="row">
					  <div class="col-sm-6">
						  <div class="toclas">
							  Get in Touch
						  </div>
						  <div class="emclas">
							  skailabcenter@gmail.com
						  </div>
						  <div class="font-social fontclas ">
							  <a href="#"><i class="fab fa-facebook-f"></i></a>
							  <a href="#"><i class="fab fa-linkedin-in"></i></a>
							  <a href="#"><i class="fab fa-twitter"></i></a>
						  </div>
					  </div>
					  <div class="col-sm-6">
						  <img class="f_logo" src="assets/img/f_logo.svg" alt="Logo Of Skailab"/>
					  </div>
				  </div>

				  <div class="row padd">
					  <div class="col-sm-4">
						  <img class="center1" src="assets/img/Group.png" alt="Silicon Valley Logo"/>
					  </div>
					  <div class="col-sm-3">
						  <img class="center1" src="assets/img/limitlesslogo.svg" alt="Limitless Logo"/>
					  </div>
					  <div class="col-sm-4">
						  <img class="center1" src="assets/img/univ.svg" alt="Skikda University"/>
					  </div>

				  </div>
			  </div>

		  </div>

	  </div>
	  

  </footer>
  </>
);

export default Home;
