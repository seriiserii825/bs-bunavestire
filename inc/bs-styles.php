<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
function bs_bunavestire_scripts() {
	wp_enqueue_style( 'bs-bunavestire-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'bs-bunavestire-style', 'rtl', 'replace' );
	wp_enqueue_style('bs-magnific-css', get_template_directory_uri().'/assets/libs/magnific-popup/magnific-popup.css');
	wp_enqueue_style( 'bs-my-css', get_template_directory_uri() . '/assets/css/my.css' );

	// Регистрация jQuery
	add_action( 'wp_enqueue_scripts', 'jquery_script_method' );
	function jquery_script_method() {
		wp_deregister_script( 'jquery' );
		wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
		wp_enqueue_script( 'jquery' );
	}

	wp_enqueue_script( 'bs-bunavestire-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'bs-bunavestire-magnific-js', get_template_directory_uri() . '/assets/libs/magnific-popup/jquery.magnific-popup.min.js', array('jquery'), null, true );
	wp_enqueue_script( 'bs-bunavestire-webpack-js', get_template_directory_uri() . '/assets/js/webpack.js', array( 'jquery' ), null, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'bs_bunavestire_scripts' );
