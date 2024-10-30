jQuery(function() {

	jQuery("#reset_keywords").click(function() {
		jQuery("#clever_keywords_new_field").val("");
		jQuery("#possible_clever_keywords li a").removeClass("active");
		jQuery("#publish").click();
	});

	jQuery("#save_keywords").click(function() {
		jQuery("#publish").click();
	});

	jQuery("#possible_clever_keywords li a").click(function() {
		jQuery(this).toggleClass("active");
		var current_word = jQuery.trim(jQuery(this).html());
		var current_keywords = jQuery("#clever_keywords_new_field").val().split(",");

		var new_keywordlist = new Array();
		var add_word = true;
		var removeIndex = -1;
		jQuery(current_keywords).each(function(next_index) {
			if (current_word == current_keywords[next_index]) {
				add_word = false;
				removeIndex = next_index;
			}
		});

		if (add_word) {
			// Add the word.
			current_keywords.push(current_word);
		} else {
			// Remove the word.
			current_keywords[removeIndex] = null;
			current_keywords = jQuery.grep(current_keywords,function(n){ return(n) });
		}

		jQuery("#clever_keywords_new_field").val(current_keywords.join(",").replace(/^,/, ""));
		
		return false;
	});

});