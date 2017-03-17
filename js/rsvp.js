noGuest = [
'Rosales',
'de Cabrol',
'Nestorovic',
'Garduno',
'Al Sudari',
'Alvarez',
'Binder',
'Miller',
'Munn',
'Franz',
'Escobar',
'elejalde',
'elejalde escobar',
'Ferriera',
'Lambert',
'McGoldrick',
'Cavaliero',
'Gonzalez',
'McGarrahan',
'Lolis Coleman',
'Coleman',
'Lolis'
];

oneGuest = [
'Mazza',
'Stein',
'Chang',
'Copes',
'Schuermann',
'Mendoza Lopez',
'Mendoz',
'Lopez',
'O\'Meara',
'Hanusek',
'Patel',
'Marcus',
'Feldman',
'Urbina',
'Hudson',
'Dickert',
'Mestas',
'Thais',
'Sanchez',
'Nguyen',
'Nguyen Thanh',
'Thanh',
'Vigna',
'True',
'Anthanasious',
'Maganis',
'Pinelli',
'Adams',
'Lim',
'Arteaga Hernandez',
'Arteaga',
'Hernandez',
'Ressner',
'Hines',
'Erwin',
'Ramirez',
'Budke',
'Sclafani ',
'Rivas',
'Ponga',
'Segarra'
];
twoGuest =[
'Torres',
'Aragon',
'Vespa',
'DiGiamo'
]

var noGuest = noGuest.map(function(lastname){
	return lastname.toLowerCase();
})

var oneGuest = oneGuest.map(function(lastname){ 
	return lastname.toLowerCase();
})

var twoGuest = twoGuest.map(function(lastname){
	return lastname.toLowerCase();
})

var formNoGuest = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScI_vkPJrXbStH4d25Ff2Vio0Ovch99hVRBFbOQpRYLvLdlJg/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
var form1Guest = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfl7o4p3tLsLkLdRGS47CK4Mt3brDoUHg_kqGH2nRPI5hUaSQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
var form2Guest ='<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSerj0y22WJ5_nAOsedsujGOs-jzK6-5hIbWxFY5j5m85JFJ6A/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'

$(document).ready(function() {
	$('#rsvp-form').submit(function(e){		
		// console.log($('#guest-name').val());
		var name = $('#guest-name').val().toLowerCase();
		if ($.inArray(name, noGuest) !== -1) {
			$('#rsvp-form').toggleClass('hide');
			$('#g-form').removeClass('hide');
			$('#g-form').addClass('show');
			$('#g-form').append(formNoGuest);
			console.log('no guest')
		} else if ($.inArray(name, oneGuest) !== -1) {
			$('#rsvp-form').toggleClass('hide');
			$('#g-form').removeClass('hide');
			$('#g-form').addClass('show');
			$('#g-form').append(form1Guest);
		} else if ($.inArray(name, twoGuest) !== -1) {
			$('#rsvp-form').toggleClass('hide');
			$('#g-form').removeClass('hide');
			$('#g-form').addClass('show');
			$('#g-form').append(form2Guest);
		} else {
			if ($('.form-error').length == 0	){				
				$('#rsvp-form').append('<p class="form-error text-center">try again</p>')
			}
			// console.log('your not on the list')
		}
		return false;
	})
});

