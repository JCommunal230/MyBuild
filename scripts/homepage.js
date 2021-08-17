let p = document.querySelectorAll('.posName');
for (let i = 0; i<p.length; i++){
	p[i].addEventListener('click', function(){
		if(p[i].className =='posName active'){
			p[i].classList.toggle('active')
			p[i].parentElement.parentElement.nextElementSibling.children[i].classList.toggle('active')
			p[i].parentElement.parentElement.nextElementSibling.children[i].classList.toggle('hidden')
			for (let j = 0; j<p.length; j++){
				p[j].parentElement.parentElement.nextElementSibling.children[j].classList.toggle('hidden')
			}
		}
		else{
			for (let j = 0; j<p.length; j++){
					if(p[j].className =='posName active'){
						p[j].classList.toggle('active')
						p[j].parentElement.parentElement.nextElementSibling.children[j].classList.toggle('active')
						p[j].parentElement.parentElement.nextElementSibling.children[j].classList.toggle('hidden')
					}
					else{
						if(p[j].parentElement.parentElement.nextElementSibling.children[j].className =='hidden'){
							continue
						}else{
							p[j].parentElement.parentElement.nextElementSibling.children[j].classList.toggle('hidden')
						}		
					}				
				}		
			p[i].classList.toggle('active')		
			p[i].parentElement.parentElement.nextElementSibling.children[i].classList.toggle('hidden')
			p[i].parentElement.parentElement.nextElementSibling.children[i].classList.toggle('active')
		}

	})

}