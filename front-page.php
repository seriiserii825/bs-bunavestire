<?php
/**
 * Template Name: Front page
 */
get_header();
?>
<?php if (have_posts()): ?>
<?php while (have_posts()): ?>
<?php the_post();?>
<section class="intro intro--full"
    style="background-image: url(<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full') ?>);" id="js-intro">
    <div class="header-logo">
        <?php the_content();?>

    </div>
</section>
<?php endwhile;?>
<?php wp_reset_postdata();?>
<?php endif;?>

<?php require_once __DIR__ . '/template-parts/navigation.php';?>
<main class="main">
    <div class="container">
        <div class="main__wrap">
            <div class="main__content">
                <div class="posts" id="js-posts">
                    <?php $holidays = new WP_Query([
    'post_type' => 'holidays',
    'posts_per_page' => -1,
]);?>
                    <?php if ($holidays->have_posts()): ?>
                    <?php while ($holidays->have_posts()): ?>
                    <?php $holidays->the_post();?>
                    <div class="posts__item">
                        <a class="posts__link" href="<?php the_permalink();?>">
                            <img class="posts__img"
                                style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>')">
                        </a>
                        <h2 class="posts__title">
                            <a href="<?php the_permalink();?>"><?php the_title();?></a>
                        </h2>
                        <a class="posts__tag" href="<?php the_permalink();?>">Vezi articolul</a>
                        <time><?php echo get_the_date(); ?></time>
                    </div>
                    <?php endwhile;?>
                    <?php wp_reset_postdata();?>
                    <?php endif;?>
                </div>
            </div>
            <aside class="sidebar">
                <div class="widget widget-gallery" id="js-widget-gallery">
                    <h3 class="widget__title"><?php echo get_field('gallery_title' . get_lang(), 'option'); ?></h3>
                    <?php $gallery = get_field('gallery', 'option');?>
                    <ul class="gallery-list">
                        <?php foreach ($gallery as $item): ?>
                        <li>
                            <a href="<?php echo $item; ?>">
                                <img src="<?php echo $item; ?>" alt="">
                            </a>
                        </li>
                        <?php endforeach;?>
                    </ul>
                </div>
                <div class="widget widget-schedule">
                    <h3 class="widget__title"><?php echo get_field('hollydays_title' . get_lang(), 'option'); ?></h3>
                    <?php echo get_field('hollydays_table' . get_lang(), 'option'); ?>
                </div>
            </aside>
        </div>
    </div>
</main>