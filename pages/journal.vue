<template>
	<div class="page-wrapper">
		
		<!-- Courses Page Section -->
		<section class="courses-page-section style-two">
		    <div class="pattern-layer" style="background-image: url(/webAssets/images/background/pattern-22.png);"></div>
		    <div class="pattern-layer-two" style="background-image: url(/webAssets/images/background/pattern-6.png);"></div>
		    <div class="pattern-layer-three" style="background-image: url(/webAssets/images/background/pattern-19.png);"></div>
		    <div class="pattern-layer-four" style="background-image: url(/webAssets/images/background/pattern-23.png);"></div>
		    <div class="auto-container">
		        <div class="row clearfix goal-section">
		            <div class="images-column col-lg-9 col-md-12 col-sm-12">
		                <!-- Images Column -->
		                <div class="row clearfix journal-section">
		                    <div class="images-column col-lg-4 col-md-12 col-sm-12">
		                        <div class="inner-column">
		                            <div class="pattern-layer" style="background-image: url(/webAssets/images/background/pattern-4.png);"></div>
		                            <div class="pattern-layer-two" style="background-image: url(/webAssets/images/background/pattern-17.png);"></div>
		                            <div class="image">
		                                <img src="https://benthamscience.com/journal-images/related-journals/acamc.jpg" alt="" />
		                            </div>
		                        </div>
		                    </div>

		                    <!-- Content Column -->
		                    <div class="content-column col-lg-8 col-md-12 col-sm-12">
		                        <div class="inner-column">
		                            <div class="pattern-layer-three" style="background-image: url(/webAssets/images/background/pattern-13.png);"></div>
		                            <div class="sec-title">
		                                <h2>Microbiology</h2>
		                                <div class="text">
		                                    Welcome to the Immunology and Microbiology area of SCILIP which provides you with access to the latest journal news, books, conferences and other resources across Elsevier’s publications and services. The
		                                    broad subject areas covered here are general microbiology, bacteriology, virology, fungal biology and all subjects withing immunology including vaccinology.
		                                </div>
		                            </div>

		                            <!-- Fact Counter -->
		                            <div class="fact-counter">
		                                <div class="row clearfix">
		                                    <!-- Column -->
		                                    <ul class="column counter-column col-lg-12 col-md-12 col-sm-12">
		                                        <li class="btns-box">
		                                            <nuxt-link to="/artical" class="theme-btn btn-style-custom"><span class="txt">Articals</span></nuxt-link>
		                                        </li>
		                                        <li class="btns-box">
		                                            <a href="#" class="theme-btn btn-style-custom"><span class="txt">Become Editor</span></a>
		                                        </li>
		                                        <li class="btns-box">
		                                            <nuxt-link to="/editorial-board" class="theme-btn btn-style-custom"><span class="txt">Editorial Board</span></nuxt-link>
		                                        </li>
		                                        <li class="btns-box">
		                                            <nuxt-link to="/aims-and-scops" class="theme-btn btn-style-custom"><span class="txt">Aims and Scope</span></nuxt-link>
		                                        </li>
		                                        <li class="btns-box">
		                                            <nuxt-link to="/instructions-to-authos" class="theme-btn btn-style-custom"><span class="txt">Instructions To Author</span></nuxt-link>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
		                <aside class="sidebar sticky-top">

		                    <!-- Popular Post Widget -->
		                    <div class="sidebar-widget popular-posts">
		                        <div class="panel panel-default">
		                            <div class="panel-heading"><h3 class="panel-title">Editor-in-Chief</h3></div>
		                            <div class="panel-body">
		                                <div class="row">
		                                    <div class="col-sm-3"><img width="48" alt="graphic" src="https://benthamscience.com/journal-images/editorial-board-images/acamc-carradori.gif" /></div>
		                                    <div class="col-sm-9">
		                                        <strong>Simone Carradori</strong><br />
		                                        Department of Pharmacy<br />
		                                        “G. d’Annunzio” University of Chieti-Pescara<br />
		                                        Chieti<br />
		                                       
		                                    </div>
		                                </div>
		                                
		                            </div>
		                        </div>
		                        <div class="panel panel-default">
		                            <div class="panel-heading"><h3 class="panel-title">About the Journal</h3></div>
		                            <div class="panel-body">
		                                <div class="row">
		                                   <ul class="sidebar-context">
		                                   		<li><nuxt-link to="/journal-list">Articals</nuxt-link></li>
		                                   		<li><a href="">Become Editor</a></li>
		                                   		<li><nuxt-link to="/editorial-board">Editorial Board</nuxt-link></li>
		                                   		<li><nuxt-link to="/aims-and-scops">Aims and Scope</nuxt-link></li>
		                                   		<li><nuxt-link to="/instructions-to-authos">Instructions To Author</nuxt-link></li>
		                                   </ul>
		                                </div>
		                                
		                            </div>
		                        </div>
		                    </div>
		                </aside>
		            </div>
		        </div>
		        <hr />
		        
		    </div>
		</section>
		<!-- End Courses Page Section -->
	</div>
</template>

<style type="text/css">
    .goal-section .images-column .image {
        transform: none;
    }
    .sec-title h2 {
        font-size: 20px;
    }
    .sec-title .text {
        margin-top: 12px;
        font-size: 13px;
    }
    .goal-section {
        padding-top: 0;
    }
    .journal-section {
        padding: 30px;
        background: #eee;
        border-radius: 10px;
    }
    .btns-box {
        float: left;
        padding: 5px 10px;
        margin: 5px 10px;
        background: #989494;
        border-radius: 7px;
    }
    .btns-box a {
        color: #fff;
    }
    .panel-default {
    border-color: #ddd;
	}
	.panel {
	    margin-bottom: 20px;
	    background-color: #fff;
	    border: 1px solid transparent;
	    border-radius: 4px;
	    box-shadow:1px 1px 3px rgb(197 191 191)
	}
	.panel-default>.panel-heading {
	    color: #333;
	    background-color: #f5f5f5;
	    border-color: #ddd;
	}
	.panel-heading {
	    padding: 10px 15px;
	    border-bottom: 1px solid transparent;
	    border-top-right-radius: 3px;
	    border-top-left-radius: 3px;
	}
	.panel-body {
	    padding: 15px;
	}
	.btn-danger {
	    color: #fff!important;
	    background-color: #d9534f;
	    border-color: #d43f3a;
	}
	.panel-title{
		font-size: 17px;
	}
	.sidebar-context {
	    padding-left: 25px;
	}
	.sidebar-context a {
		color:#444;
	}
	.sidebar-context a::before{
		content:"⇨";
		margin-right: 10px;
	}
</style>