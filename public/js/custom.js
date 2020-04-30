$(document).ready(function(){
	"use strict";

    // 1. Scroll To Top 
	$(window).on('scroll',function () {
		if ($(this).scrollTop() > 600) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click',function(){
			$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});
	
	// 2.登录
	$('#handleLogin').on('click',function(){
		// 获取邮箱、密码 数据
		let email = $('.emails').val()
		let pwd = $('.pwds').val()
		if(email && pwd){
			window.location.href='/client'
		}else{
			alert('内容不能为空')
		}
	})

	// 3 注册
	$('#handleReg').on('click',function(){
		// 获取邮箱、密码 数据
		let email = $('#email').val()
		let pwd = $('#pwd').val()
		let username = $('#username').val()
		if(email && pwd && username){
			// window.location.href='/handlereg'
		}else{
			alert('内容不能为空')
		}
	})
	
});	
	