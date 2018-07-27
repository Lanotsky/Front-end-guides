<?php get_header( ); ?>
    

    <?php 
        if(have_posts()){};
            while(have_posts()) : ?>
                <span>posted on <?php the_time('F j, Y') ?></span>
                <h1><?php the_title();?></h1>
                <?php the_post();?>
                <hr>
                <?php the_content();?>
           <?php endwhile;
    ?>
    
<?php get_footer(); ?>