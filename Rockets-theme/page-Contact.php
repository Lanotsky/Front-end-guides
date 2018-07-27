<?php get_header( ) ?>
<h2>Contacts page template</h2>
<?php 
        if(have_posts()){};
            while(have_posts()) : ?>
                <span>posted on <?php the_time('F j, Y') ?></span>
                <h2><?php the_title();?></h2>
                <?php the_post();?>
                <hr>
                <?php the_content();?>
           <?php endwhile;
    ?>
<?php get_footer( )?>