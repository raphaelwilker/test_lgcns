//Rotate
let btn = document.querySelector('#btn_rotacionar');
btn.addEventListener('click',function(event){
	let peguin = document.querySelector('#penguim_rotacionar');
	let cont_deg = 0;
	let rotate = setInterval(rot_function,10)
	function rot_function(){
		cont_deg++;
		peguin.style.transform = 'rotate('+cont_deg+'deg)';
		if(cont_deg == 360){
			clearInterval(rotate);
		}
	}
	
});

//Fade in
let btn_fade_in = document.querySelector('#btn_fade_in');
btn_fade_in.addEventListener('click',function(event){
	let peguin = document.querySelector('#penguim_fade_in');
	peguin.style.opacity = '0';
	let cont_opacity = 0.0;
	let opacity = setInterval(opacity_function,80)
	function opacity_function(){
		cont_opacity+= 0.1;
		
		peguin.style.opacity = cont_opacity;
		console.log(cont_opacity)
		if(cont_opacity >= 1.0){
			console.log(cont_opacity)
			cont_opacity = 0.0;
			clearInterval(opacity);
		}
	}
	
});

//modal
let btn_modal = document.querySelector('#btn_modal');
let close = document.querySelector('#btn_modal_close');
let modal = document.querySelector('#modal-penguim');
let content = document.querySelector('#content-modal');
btn_modal.addEventListener('click',function(event){
	content.innerHTML = '';
	let peguin = document.querySelector('#penguim_modal');
	modal.style.display = 'block';
	content.innerHTML = '<img src="'+peguin.src+'" alt="'+peguin.alt+'">'

});

close.addEventListener('click',function(event){
	let peguin = document.querySelector('#penguim_modal');
	modal.style.display = 'none';
});


//remove
let btn_remove = document.querySelector('#btn_remove');
btn_remove.addEventListener('click',function(){
	let remove_peguim = document.querySelector('#remove_peguim');
	remove_peguim.innerHTML = '<div class="controls">'+
                    		'<button id="btn_remove">Remover a imagem</button>'+
                			'</div>';
});


//change by text
let btn_change = document.querySelector('#btn_change');
btn_change.addEventListener('click',function(){
	let trade_peguim = document.querySelector('#trade_by_text');
	let arr = ['Hello','Olá', 'Bacon ipsum dolor amet ground round ribeye sirloin boudin, andouille rump t-bone short','LG'];
	let random = Math.floor(Math.random() * 4) ;
	let str = arr[random];
	trade_peguim.innerHTML = '<p>'+str+'</p>';
});

//alert
let btn_alert = document.querySelector('#btn_alert');
btn_alert.addEventListener('click',function(){
	if(!!navigator.userAgent.match(/Trident\/7\./)){
		alert('Fui alertado no IE');
	}else{
		this.setAttribute('disabled','disabled');
		this.classList.add('disabled');
		this.textContent = 'Botão foi desabilitado, somente para ter alguma resposta visual em outros navegadores.'
	}
});


//Rotate list
let btn_list = document.querySelector('#btn_rotate_list');
btn_list.addEventListener('click',function(event){
	let list_img = document.querySelectorAll('.img_rotate');
	for(var i = 0; i < list_img.length; i++){
		let cont_deg = 0;
		let img = list_img[i];
		let rotate = setInterval(rot_list_function,10)
		function rot_list_function(){
			cont_deg++;
			img.style.transform = 'rotate('+cont_deg+'deg)';
			if(cont_deg == 360){
				clearInterval(rotate);
			}
		}
	}
	//solution only chrome
	/*list_img.forEach(function(evt){
		let img = evt;
		let cont_deg = 0;
		let rotate = setInterval(rot_function,10)
		function rot_function(){
			cont_deg++;
			img.style.transform = 'rotate('+cont_deg+'deg)';
			if(cont_deg == 360){
				clearInterval(rotate);
			}
		}
	});*/
	
});


//change by text
let btn_trade_color_transform = document.querySelector('#btn_trade_color_transform');
btn_trade_color_transform.addEventListener('click',function(){
	let trade_element = document.querySelector('#change_form');
	let current_class = trade_element.classList[0];
	let arr = ['circle','arc', 'triangle'];
	let random = Math.floor(Math.random() * 3) ;
	let str = arr[random];
	let random_color = Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
	trade_element.classList.remove(current_class);
	trade_element.classList.add(str);
	if(str !== 'triangle'){
		trade_element.style.backgroundColor = 'rgb('+random_color+')';	
	}else{
		trade_element.style.borderBottomColor = 'rgb('+random_color+')';
		trade_element.style.backgroundColor = '#fff';
	}
	
});


let btn_submit = document.querySelector('#btn_submit');
btn_submit.addEventListener('click', function(event){
	event.preventDefault();
	let name = document.querySelector('#input_name').value;
	let last_name = document.querySelector('#input_last_name').value;
	let selectOption = document.querySelector('#select_option');
	if(name.length == 0){
		alert('Por favor preencher o campo nome.');
	}else if(last_name.length == 0){
		alert('Por favor preencher o campo sobrenome.');
	}else if(selectOption.options[selectOption.options.selectedIndex].value == ""){
		alert('Por favor selecionar uma opção.');
	}else{
		document.querySelector('#input_name').value = "";
		document.querySelector('#input_last_name').value = "";
		selectOption.options.selectedIndex = 0;
		alert('Formulário enviado com sucesso');
	}


	/*
	RegEx para evitar que a pessoa use somente espaço
	if(name.length > 0  && name.match(/!\w\s/g)){
		alert('Por favor preencher o campo nome utilizando letras e não espaço');
	}*/


});