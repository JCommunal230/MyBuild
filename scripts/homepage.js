
window.onload=function(){
	document.querySelector('video').playbackRate = 0.85;/*verify on other browsers*/
}

let positions = document.querySelectorAll('.positions');
let tooltip_right = document.querySelectorAll('.tooltiptextright');
let tooltip_left = document.querySelectorAll('.tooltiptextleft');
let favorite = document.querySelector('.favorite_champions').children;
let most_played = document.querySelector('.most_played').children;
let champions = document.querySelectorAll('.champion');

for (let i = 0; i<positions.length; i++){
	positions[i].addEventListener('click', function(){
		if(positions[i].className =='positions active'){
			positions[i].classList.toggle('active')

			favorite[i].classList.toggle('active')
			favorite[i].classList.toggle('hidden')
			for (let j = 0; j<positions.length; j++){
				favorite[j].classList.toggle('hidden')
			}

			most_played[i].classList.toggle('active')
			most_played[i].classList.toggle('hidden')

			for (let j = 0; j<positions.length; j++){
				most_played[j].classList.toggle('hidden')
			}
			for (let k = 0; k<tooltip_right.length; k++){
				tooltip_right[k].classList.toggle('active')
			}
			for (let k = 0; k<tooltip_left.length; k++){
				tooltip_left[k].classList.toggle('active')
			}					
		}
		else{
			for (let j = 0; j<positions.length; j++){
					if(positions[j].className =='positions active'){
						positions[j].classList.toggle('active')

						favorite[j].classList.toggle('active')
						favorite[j].classList.toggle('hidden')

						most_played[j].classList.toggle('active')
						most_played[j].classList.toggle('hidden')

						for (let k = 0; k<tooltip_right.length; k++){
							tooltip_right[k].classList.toggle('active')
						}
						for (let k = 0; k<tooltip_left.length; k++){
							tooltip_left[k].classList.toggle('active')
						}	
										
					}
					else{
						if(favorite[j].className =='hidden'){
							continue
						}else{
							favorite[j].classList.toggle('hidden')

							most_played[j].classList.toggle('hidden')
						}		
					}				
				}		
			positions[i].classList.toggle('active')		

			favorite[i].classList.toggle('active')
			favorite[i].classList.toggle('hidden')

			most_played[i].classList.toggle('active')
			most_played[i].classList.toggle('hidden')

			for (let k = 0; k<tooltip_right.length; k++){
				tooltip_right[k].classList.toggle('active')
			}
			for (let k = 0; k<tooltip_left.length; k++){
				tooltip_left[k].classList.toggle('active')
			}
			
		}
		for (let k = 0; k<champions.length; k++){/*trigger the champion animation on each click*/
				champions[k].style.animation = "none"
				champions[k].offsetHeight; /* trigger the reflow*/
 				champions[k].style.animation = null;
			}
	})

}