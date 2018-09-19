$(document).ready(function(){
 	const number = $(".js-result");
	const btn = $(".js-random");
	const nf = Intl.NumberFormat();
	const speakBtn = $('.js-speak');
	let arrCheck = [];

	const randomInt = (a, b) => {
	  const min = Math.ceil(a);
	  const max = Math.floor(b);
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	btn.on('click', function(e) {
  	const $this = $(e.target);
  	const data = $this.attr("data");
	  	switch (data) {
		    case '1':{
		      const i = randomInt(0, 10);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '2':{
		      const i = randomInt(10, 100);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '3':{
		      const i = randomInt(100, 1000);
		      number.text(nf.format(i));
		      break;
		    }
		    case '4':{
		      const i = randomInt(1000, 10000);
		      number.text(nf.format(i));
		      break;
		    }
		    case '5':{
		      const i = randomInt(10000, 100000);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '6':{
		      const i = randomInt(100000, 1000000);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '7':{
		      const i = randomInt(1000000, 10000000);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '8':{
		      const i = randomInt(10000000, 100000000);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '9':{
		      const i = randomInt(100000000, 1000000000);
		      number.text(nf.format(i)); 
		      break;
		    }
		    case '10':{
		      const i = randomInt(1000000000, 10000000000);
		      number.text(nf.format(i)); 
		      break;
		    }
		    default:
		      break;
	  	}
	})

	speakBtn.on('click', function() {
		responsiveVoice.speak(number.text() + '円', "Japanese Female", {volume: 1});
		console.log(number.text());
	});

});




















































