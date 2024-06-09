$(document).on("ready", function(){
    $("body").append("<div id='menu-overlay'></div>");

    // ���־� ���� ���̰� ����
	var hei = $(window).innerHeight();
	$(".visual-section.h-100").css("height", hei);

	// dim click
    $("#menu-overlay").click(function(){
        if($(this).hasClass("pop-on")){
            var id = $(this).data("pop-id");
            $(this).removeClass("pop-on").removeAttr("data-pop-id").removeData().fadeOut(100);
            $("#"+id+"").removeClass("pop-on").fadeOut(100);
        }
	});
});

$(window).on('load', function(){
	// ���־� ���� ���̰� ����
	var w = $(window).innerWidth(),
		h = $(window).innerHeight();
	$(".visual-section.h-100").css("height", h);
});

function scrollFixed() { // ��ũ�� Fixed
	var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
	var ovY;
	!isTablet === true ? (ovY = "scroll): (ovY = "hidden");

	$("html").css({
		overflow : "hidden",
		"overflow-y" : ovY,
		position : "fixed",
		width : "100%",
		top : -$(window).scrollTop()
	});
}

function scrollAuto() {  // ��ũ�� Auto
	var hTop = $("html").css("top");
	var hTop_2 = hTop.split("px");
	var winTop = Math.abs(hTop_2[0]);

	$("html").removeAttr("style");
	window.scrollTo(0, winTop);
}

function popOpen(padding, id) { // �˾� ���� onclick
	// scrollFixed();
	// dim
	$("#menu-overlay")
	.addClass("pop-on")
	.attr("data-pop-id", id)
	.fadeIn(300);

	$("#"+id+"")
	.css({"padding": ""+padding+"", "margin-top": -$("#"+id+"")
	.outerHeight()/2})
	.addClass("pop-on")
	.fadeIn(300);
}

//RSVP �˾�
function popRsvp(toggle) { // �˾� ���� onclick	
	var el = $("#openRsvpCon");	
	
	if(toggle === "open"){
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(500).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){		
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function popClose(id) { // �˾� �ݱ� onclick
	// scrollAuto();
	// dim click
	$("#menu-overlay[data-pop-id="+id+"]")
	.removeClass("pop-on")
	.removeAttr("data-pop-id")
	.removeData()
	.fadeOut(100);

	$("#"+id+"")
	.removeClass("pop-on")
	.fadeOut(100);
}

function dataPicker(data) { // �޷� ���
	var el = $("#calendar");
	var date = new Date(data);    

	el.datepicker({
		dateFormat: 'yyyy-mm-dd' //Input Display Format ����
		,defaultDate: date // �⺻ ��¥ ����
		,showOtherMonths: false //�� ������ ������� �յڿ��� ��¥�� ǥ��
		,showMonthAfterYear: false //�⵵ ���� ������, �ڿ� �� ǥ��
		,changeYear: false //�޺��ڽ����� �� ���� ����
		,changeMonth: false //�޺��ڽ����� �� ���� ����      
		,constrainInput: false //���Ŀ� �ؽ�Ʈ �Է�����. ����Ʈ true
		//,showOn: "both" //button:��ư�� ǥ���ϰ�,��ư�� �����߸� �޷� ǥ�� ^ both:��ư�� ǥ���ϰ�,��ư�� �����ų� input�� Ŭ���ϸ� �޷� ǥ��  
		//,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //��ư �̹��� ���
		//,buttonImageOnly: true //�⺻ ��ư�� ȸ�� �κ��� ���ְ�, �̹����� ���̰� ��
		//,buttonText: "����" //��ư�� ���콺 ���� ���� �� ǥ�õǴ� �ؽ�Ʈ                
		//,yearSuffix: "��" //�޷��� �⵵ �κ� �ڿ� �ٴ� �ؽ�Ʈ
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //�޷��� �� �κ� �ؽ�Ʈ
		,monthNames: ['<strong>1</strong> January','<strong>2</strong> Fedruary','<strong>3</strong> March','<strong>4</strong> April','<strong>5</strong> May','<strong>6</strong> June','<strong>7</strong> July','<strong>8</strong> August','<strong>9</strong> September','<strong>10</strong> October','<strong>11</strong> November','<strong>12</strong> December'] //�޷��� �� �κ� Tooltip �ؽ�Ʈ
		,dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'Sa']
		,dayNames: ['�Ͽ���','������','ȭ����','������','�����','�ݿ���','�����'] //�޷��� ���� �κ� Tooltip �ؽ�Ʈ
		//,minDate: "-1M" //�ּ� ��������(-1D:�Ϸ���, -1M:�Ѵ���, -1Y:�ϳ���)
		//,maxDate: "+1M" //�ִ� ��������(+1D:�Ϸ���, -1M:�Ѵ���, -1Y:�ϳ���)
		,onSelect: function(date){
			
		}
	});
}

function dataPicker2(y,m,d) { // �޷� ���
	var el = $("#calendar");
	//var date = new Date(data);
    var date = new Date(y,m,d,'00','00');	

	el.datepicker({
		dateFormat: 'yyyy-mm-dd' //Input Display Format ����
		,defaultDate: date // �⺻ ��¥ ����
		,showOtherMonths: false //�� ������ ������� �յڿ��� ��¥�� ǥ��
		,showMonthAfterYear: false //�⵵ ���� ������, �ڿ� �� ǥ��
		,changeYear: false //�޺��ڽ����� �� ���� ����
		,changeMonth: false //�޺��ڽ����� �� ���� ����      
		,constrainInput: false //���Ŀ� �ؽ�Ʈ �Է�����. ����Ʈ true
		//,showOn: "both" //button:��ư�� ǥ���ϰ�,��ư�� �����߸� �޷� ǥ�� ^ both:��ư�� ǥ���ϰ�,��ư�� �����ų� input�� Ŭ���ϸ� �޷� ǥ��  
		//,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //��ư �̹��� ���
		//,buttonImageOnly: true //�⺻ ��ư�� ȸ�� �κ��� ���ְ�, �̹����� ���̰� ��
		//,buttonText: "����" //��ư�� ���콺 ���� ���� �� ǥ�õǴ� �ؽ�Ʈ                
		//,yearSuffix: "��" //�޷��� �⵵ �κ� �ڿ� �ٴ� �ؽ�Ʈ
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //�޷��� �� �κ� �ؽ�Ʈ
		,monthNames: ['<strong>1</strong> January','<strong>2</strong> Fedruary','<strong>3</strong> March','<strong>4</strong> April','<strong>5</strong> May','<strong>6</strong> June','<strong>7</strong> July','<strong>8</strong> August','<strong>9</strong> September','<strong>10</strong> October','<strong>11</strong> November','<strong>12</strong> December'] //�޷��� �� �κ� Tooltip �ؽ�Ʈ
		,dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'Sa']
		,dayNames: ['�Ͽ���','������','ȭ����','������','�����','�ݿ���','�����'] //�޷��� ���� �κ� Tooltip �ؽ�Ʈ
		//,minDate: "-1M" //�ּ� ��������(-1D:�Ϸ���, -1M:�Ѵ���, -1Y:�ϳ���)
		//,maxDate: "+1M" //�ִ� ��������(+1D:�Ϸ���, -1M:�Ѵ���, -1Y:�ϳ���)
		,onSelect: function(date){
			
		}
	});
}

var imgGallerySlider;
var popGallerySlider;
function imageGallery() { // ���䰶����
	imgGallerySlider = $('#image-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:500,
		auto:false,
		loop:true,
		//adaptiveHeight:true,
		onSliderLoad: function() {
			$('#image-gallery').removeClass('cS-hidden');
		},
		onAfterSlide: function(el, index) {
			popGallerySlider.goToSlide(index);
		}
	});
}

function popGallery() { // �˾�������
	popGallerySlider = $('#pop-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:500,
		auto:false,
		loop:true,
		//adaptiveHeight:true,
		onSliderLoad: function(el, index) {
			$('#pop-gallery').removeClass('cS-hidden');
			el.find("li:not(.clone)").eq(0).addClass("pg_idx");
		},
		onAfterSlide: function(el, index){

		}
	});
}

function galleryPOP(toggle, type, index) { // �������˾� ����,�ݱ�
	if(type === "type1)return galleryType1(toggle);
	if(type === "type2)return galleryType2(toggle, index);
	if(type === "type3)return galleryType3(toggle, index);
}

function galleryType1(toggle){ // �����̵��� ������
	var el = $(".gallery-pop-wrap"),
		sw = $(".lSSlideWrapper");

	if(sw.hasClass('moveOn')) return this;
	
	if(toggle === "open"){
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(500).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		var index = $('#pop-gallery li.active').index();
		imgGallerySlider.goToSlide(index);
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function galleryType2(toggle, index){ // �簢�� ������
	var el = $(".gallery-pop-wrap");

	if(toggle === "open"){
		popGallerySlider.goToSlide(index);
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(400).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function galleryType3(toggle, index){ // ���� ������
	var el = $(".gallery-pop-wrap");

	if(toggle === "open"){
		popGallerySlider.goToSlide(index);
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(400).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function daumMap(x, y) { // ���� ����
	var mapContainer = document.getElementById('map_canvas'), // ������ ǥ���� div 
		mapOption = {
			center: new daum.maps.LatLng(x, y), // ������ �߽���ǥ
			level: 3 // ������ Ȯ�� ����
		};  

	// ������ �����մϴ�    
	var map = new daum.maps.Map(mapContainer, mapOption); 

	// ��Ŀ�� ǥ�õ� ��ġ�Դϴ� 
	var markerPosition  = new daum.maps.LatLng(x, y); 

	var daum_marker = new daum.maps.Marker({ 
		// ���� �߽���ǥ�� ��Ŀ�� �����մϴ� 
		map: map,
		position: markerPosition
	}); 
}

function pcAlert() { // PCȯ�濡�� ���ӽ� alert
	alert('�̸����� ������������ ����� ���ѵ˴ϴ�.');
}