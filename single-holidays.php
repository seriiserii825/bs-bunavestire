<?php
get_header();
?>
<header class="page-header"
        style="background-image: url('<?php echo get_field( 'holidays_header_image', 'option' ); ?>')"></header>
<?php require_once __DIR__ . '/template-parts/navigation.php'; ?>
<?php if ( have_posts() ): ?>
	<?php while ( have_posts() ): ?>
		<?php the_post(); ?>
        <main class="main">
            <div class="container">
                <div class="main__content">
                    <div class="single-post">
                        <h1 class="single-post__title">
                            <span> <?php the_title(); ?> </span>
                        </h1>
                        <div class="single-post__content">
                            <?php the_content(); ?>
                        </div>
                        <h2 class="single-post__title">
                            <span><?php echo get_field( 'holidays_pray_title' . get_lang(), 'option' ); ?></span>
                        </h2>
                        <div class="single-post__content">
							<?php echo get_field( 'pray_of_the_day' ); ?>
                        </div>
                    </div>
                </div>
            </div>
        </main>
	<?php endwhile; ?>
	<?php wp_reset_postdata(); ?>
<?php endif; ?>

<?php get_footer(); ?>
