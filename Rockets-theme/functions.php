<?php 
 // *** Functions ***

 // css and js loader
 
 function scriptloader() {
     wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/main.css', array(), 'all' );
     wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true );
 }
 
 // add theme support

function themeSupport(){
    add_theme_support('menus');
    register_nav_menu( 'primary', 'Primary navigation');
    register_nav_menu( 'secondry', 'Footer navigation');
}

add_action( 'wp_enqueue_scripts', 'scriptloader');
add_action( 'init', 'themeSupport' );

?>