<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Usersnap_Blog
 */

if ( ! function_exists( 'usersnap_blog_posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function usersnap_blog_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		$posted_on = sprintf(
			/* translators: %s: post date. */
			esc_html_x( 'Posted on %s', 'post date', 'usersnap_blog' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);

		echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.

	}
endif;

if ( ! function_exists( 'usersnap_blog_posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function usersnap_blog_posted_by() {
  	$avatar = get_avatar( get_the_author_meta( 'ID' ), 96 );
  	
		$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( 'by %s', 'post author', 'usersnap_blog' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);
		
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( __( ', ', 'usersnap_blog' ) );

		echo '
		  <div class="author-block">
		    ' . $avatar . '
		    <div>
		      <span class="byline"> ' . $byline . '</span><br>
          <span class="categories">' . $categories_list . '</span>
		    </div>
		  </div>'; // WPCS: XSS OK.

	}
endif;

if ( ! function_exists( 'usersnap_blog_entry_footer' ) ) :
	function usersnap_blog_entry_footer() {
		
	}
endif;

if ( ! function_exists( 'usersnap_blog_post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
	function usersnap_blog_post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		if ( is_singular() ) :
			?>

			<div class="post-thumbnail">
				<?php the_post_thumbnail(); ?>
			</div><!-- .post-thumbnail -->

		<?php else : ?>

		<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
			<?php
			the_post_thumbnail( 'post-thumbnail', array(
				'alt' => the_title_attribute( array(
					'echo' => false,
				) ),
			) );
			?>
		</a>

		<?php
		endif; // End is_singular().
	}
endif;

if( ! function_exists('usersnap_blog_related_posts') ):
  /*
   * Displays Related Posts to the current Article
  */
  
  function usersnap_blog_related_posts() {
    if(!is_singular() ) return;

    $related_posts = get_field('related_posts_footer');
    
    if($related_posts != null):
      ?>
      <div class="article_footer_section article_footer_section__related_posts">
        
        <h1><?php _e('You might be also interested in', 'usersnap_blog'); ?></h1>
      	<ul class="related_posts related_posts_footer">
    
      	  <?php
          foreach($related_posts as $related):
      		?>
  
      		<li>
      			<a href="<?php echo get_the_permalink( $related->ID ); ?>">
      			  <?php echo get_the_post_thumbnail($related->ID); ?>
      				<h2><?php echo get_the_title( $related->ID ); ?></h2>
      				<span><?php _e('Read →', 'usersnap_blog'); ?></span>
      			</a>
      		</li>
      		
          <?php
          endforeach;
      		?>
  
        </ul>
      </div>

    <?php
    endif;
  }

endif;

if( ! function_exists('usersnap_blog_post_feedback') ):
  /*
   * Displays a Post Feedback Module
  */
  
  function usersnap_blog_post_feedback() {
    if(!is_singular() ) return;
    
      $emotions = apply_filters('usersnap_blog_post_feedback_emotions', [
        [
          'name'     => 'angry',
          'emoticon' => ':rage:',
        ],
        [
          'name'     => 'sad',
          'emoticon' => ':white_frowning_face:',
        ],
        [
          'name'     => 'neutral',
          'emoticon' => ':neutral_face:',
        ],
        [
          'name'     => 'happy',
          'emoticon' => ':slightly_smiling_face:',
        ],
        [
          'name'     => 'love',
          'emoticon' => ':heart_eyes:',
        ],
      ]);
    ?>
    <div class="article_footer_section article_footer_section__post_feedback">
      <form>
        <h1><?php _e('Did you enjoy this post?', 'usersnap_blog'); ?></h1>
        
        <div class="pf_stage_1 pf_emotions">
          <?php foreach($emotions as $emotion): ?>
            <input type="radio" name="post_feedback_emotion" value="<?php echo $emotion['name']; ?>" id="post_feedback_emotion_<?php echo $emotion['name']; ?>">
            <label for="post_feedback_emotion_<?php echo $emotion['name']; ?>"><?php echo $emotion['emoticon']; ?></label>
          <?php endforeach; ?>
        </div>
        
        <div class="pf_stage_2 pf_text">
          <p><?php _e('Thanks! Would you like to give some additional feedback?', 'usersnap_blog'); ?></p>
          
          <div class="textarea_submit_wrapper">
            <textarea name="post_feedback_text"></textarea>
            <input type="submit" name="post_feedback_submit" value="<?php _e('Post', 'usersnap_blog');?>">
          </div>
        </div>
        
      </form>
    </div>
    <?php
  }
endif;

if( ! function_exists('usersnap_blog_share_area') ):
  /*
   * Displays a Share Area aside of the current Post
  */
  
  function usersnap_blog_share_area() {
    $encoded_url = urlencode( get_the_permalink() );
    $encoded_title = urlencode( get_the_title() );

    $encoded_text = urlencode( str_replace ( '[post_title]', get_the_title(), get_field('sharing_headline') ) );
    if(!$encoded_text) $encoded_text = $encoded_title;

    $encoded_via = urlencode( get_field('sharing_via') );
    if(!$encoded_via) $encoded_via = 'usersnap';

    $encoded_hashtag = urlencode( get_field('sharing_hashtag') );
    if(!$encoded_hashtag) $encoded_hashtag = 'MakeFeedbackMatter';
    ?>
		<aside class="entry-content-share sidebar">
			<ul class="sidebar__inner">
				<li><a href="https://www.facebook.com/sharer.php?u=<?php echo $encoded_url; ?>" class="facebook" target="_blank"><span class="screen-reader-text">Facebook </span><span class="count"> <?php the_field('share_count_facebook'); ?></span></a></li>
				<li><a href="https://twitter.com/intent/tweet
?url=<?php echo $encoded_url; ?>&text=<?php echo $encoded_text; ?>&via=<?php echo $encoded_via; ?>&hashtags=<?php echo $encoded_hashtag; ?>" class="twitter" target="_blank"><span class="screen-reader-text">Twitter </span><span class="count"> <?php the_field('share_count_twitter'); ?></span></a></li>
				<li><a href="https://www.linkedin.com/shareArticle
?mini=true
&url=<?php echo $encoded_url; ?>&title=<?php echo $encoded_title; ?>&summary=<?php echo $encoded_text; ?>" class="linkedin" target="_blank"><span class="screen-reader-text">LinkedIn </span> <span class="count"><?php the_field('share_count_linkedin'); ?></span></a></li>
				<li><a href="https://wa.me/?text=<?php echo $encoded_url; ?>" class="whatsapp" target="_blank"><span class="screen-reader-text">WhatsApp </span><span class="count"> <?php the_field('share_count_whatsapp'); ?></span></a></li>
				<li><a href="https://share.flipboard.com/bookmarklet/popout?v=2&title=<?php echo $encoded_title; ?>&url=<?php echo $encoded_url; ?>" class="flipboard" target="_blank"><span class="screen-reader-text">Flipboard </span><span class="count"> <?php the_field('share_count_flipboard'); ?></span></a></li>
			</ul>
		</aside>
		<?php
  }
endif;


if( ! function_exists('usersnap_blog_mailchimp_form') ):
  /*
   * Displays a Mailchimp Newsletter Signup Form
  */
  
  function usersnap_blog_mailchimp_form($use_h1 = false) {
    $form_id = uniqid();
  ?>
    <!-- Begin Mailchimp Signup Form -->
    <div class="mc_embed_signup">
      <<?php echo $use_h1 ? 'h1' : 'h2'; ?>>
        <?php _e('Join our 45,000+ newsletter subscribers', 'usersnap_blog'); ?>
      </<?php echo $use_h1 ? 'h1' : 'h2'; ?>>
      
      <p>
        <?php _e('LinkedIn, Microsoft, Codeship, Pivotal and Benefit Cosmetics leaders are reading our blog!', 'usersnap_blog'); ?>
      </p>
      
      <form
        action="https://usersnap.us4.list-manage.com/subscribe/post?u=8908eddf48c10a11f183d9099&amp;id=0d251fe92e"
        method="post" id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div class="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <label for="mce-FNAME-<?php echo $form_id; ?>" class="screen-reader-text">First Name <span class="asterisk">*</span></label>
            <input type="text" value="" name="FNAME" class="required full" id="mce-FNAME-<?php echo $form_id; ?>" placeholder="<?php _e('Your Name', 'usersnap_blog'); ?>">
          </div>
  
          <div class="mc-field-group">
            <label for="mce-EMAIL-<?php echo $form_id; ?>" class="screen-reader-text">Email Address <span class="asterisk">*</span></label>
            <input type="email" value="" name="EMAIL" class="required email full" id="mce-EMAIL-<?php echo $form_id; ?>" placeholder="<?php _e('Email', 'usersnap_blog'); ?>">
          </div>
        </div>

        <div class="mce-responses" class="clear">
          <div class="response" id="mce-error-response-<?php echo $form_id; ?>" style="display:none"></div>
          <div class="response" id="mce-success-response-<?php echo $form_id; ?>" style="display:none"></div>
        </div>
        
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_8908eddf48c10a11f183d9099_0d251fe92e" tabindex="-1" value="">
        </div>
        
        <div class="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
        </div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  <?php
  }
endif;