<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php wp_title();?></title>
    <?php wp_head(); ?>
</head>
<?php 
    if(is_home()) {
        $bodyClass = array("body", "post");
    }
    if(is_front_page()) {
        $bodyClass = array("body", "home");
    }      
?>
<body <?php body_class($bodyClass);?> >

<?php wp_nav_menu( array('theme_location'=>'primary')); ?>

<header class="header"> 

</header>
