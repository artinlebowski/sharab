// thumbnail
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;
  });
});


//navbar
const btn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");

btn.onclick = function(){
  if(!navbar.classList.contains("show-links2")){
    navbar.classList.toggle("show-links");

  }else{
    navbar.classList.remove("show-links2");
    navbar.classList.toggle("show-links");
  }
  
}

//categories
const categories = document.getElementById("categories");

categories.onclick = function(event){
  event.preventDefault();
  navbar.classList.toggle("show-links2");
}


var setAnim = function(obj,id,direction,speed){
				var num = getNum(obj,direction);
				if(direction == 'up' || direction == 'down'){
					$(obj).parent('.infiniteslide_wrap').css({
						height: num + 'px'
					});
				}
				var i = getTranslate(num,direction);
				
				$(obj).attr('data-style','infiniteslide' + id);

				var css = '@keyframes infiniteslide' + id + '{' + 
								'from {transform:translate3d(0,0,0);}' + 
								'to {transform:translate3d(' + i + ');}' + 
							'}';
				$('<style />').attr('id','infiniteslide' + id + '_style')
				.html(css)
				.appendTo('head');
				
				if(direction == 'right' || direction == 'down'){
					var reverse = ' reverse';
				} else {
					var reverse = '';
				}
				
				$(obj).css({
					animation: 'infiniteslide' + id + ' ' + getSpeed(num,speed) + 's linear 0s infinite' + reverse
				});
			}





