// interacting with UI
function openmenu() {
  $('.window').addClass('active');
}
function closemenu() {
  $('.window, .menu a').removeClass('active');
  $('.exwindow').removeClass('opened')
}
function isinveh() {
  $('.veh_actions').show();
}
function isoutofveh() {
  $('.veh_actions').hide();
}
$('.header').click(function(){
	closemenu();
});

// menu
$('a').click(function (e){
	e.preventDefault();
});
// veh/weap/skin
$('.menu a').click(function () {
  // setting btn properties
  $('.menu a').removeClass('active');
  $(this).addClass("active");
  // closing all active tabs
  $('.opened').removeClass('opened');
  // opening tab
  var menulink = $(this).attr('href');
  $(menulink).addClass('opened');
  // reseting tab's scroll
  $(menulink + ' .section').scrollTop(0);
});
//addhp button
$('#addhp').click(function(){
	TriggerEvent('addhp');
});
//addarmour button
$('#addarmour').click(function(){
	TriggerEvent('addarmour');
});
//respawn button
$('#respawn').click(function(){
	TriggerEvent('respawn');
});
//spawn vehicles
$(document).ready(function(){
	$('.avehicle').click(function(){
		var veh = $(this).attr('data-veh');
		console.log('CEFLOG:' + veh);
		TriggerEvent('spawnveh', veh);
	});
});

// loading contents

////vehicles
$.getJSON('js/vehicles.json', function (data) {
  var items = '';
  $.each(data, function (key, val) {
    items += '<h2>' + key + '</h2>';
    $.each(val, function(vKey, vVal) {
      items += '<a href="#" class="avehicle" data-veh="' + vVal + '">' + vVal + '</a>';
    });
  });
  $('<div/>', {
    class: 'section',
    html: items
  }).appendTo('#vehicles');
});
//// weapons
$.getJSON('js/weapons.json', function (data) {
  var items = '';
  $.each(data, function (key, val) {
    items += '<h2>' + key + '</h2>';
    $.each(val, function(vKey, vVal ) {
      items += '<a href="#" class="aweapon" data-weapon="' + vVal.hash + '">' + vVal.name + '</a>';
    });
  });
  $('<div/>', {
    class: 'section',
    html: items
  }).appendTo('#weapons');
});
//// skins
$.getJSON('js/skins.json', function (data) {
  var items = '';
  $.each(data, function (key, val) {
    $.each(val, function(vKey, vVal) {
      items += '<a href="#" class="askin" data-skin="' + vVal + '">' + vVal + '</a>';
    });
  });
  $('<div/>', {
    class: 'section',
    html: items
  }).appendTo('#skins');
});