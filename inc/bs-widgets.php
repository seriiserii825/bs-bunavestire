<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
function bs_bunavestire_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Language', 'bs-bunavestire' ),
		'id'            => 'sidebar-language',
		'description'   => esc_html__( 'Add widgets here.', 'bs-bunavestire' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '',
		'after_title'   => '',
	) );
}
add_action( 'widgets_init', 'bs_bunavestire_widgets_init' );
