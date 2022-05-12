//문서가 준비가 되면,  윈도우 객체를 인수로 넘겨주고 시작
$(function(win){
	//html문서를 들고와서 문서의 크기 확인.
	const $html = $("html");
	const deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	};

	//문서의 화면 크기 리턴 및 스크롤 여부
	function scrollShowHide(status) {
		$html.css({"overflow-y":status});
		return $html.width();    
	}

	//문서의 화면 크기 
	var sc_w1 = scrollShowHide("hidden"),
		sc_w2 = scrollShowHide("scroll"),
		sc_w3 = sc_w1 - sc_w2;

	if(sc_w3 > 0) {
					deviceSize.pc = deviceSize.pc -  sc_w3;
					deviceSize.tablet = deviceSize.tablet -  sc_w3;
					deviceSize.mobile = deviceSize.mobile -  sc_w3;
	}



	//문서의 화면 크기에 따라서 클래스 추가 및 제거
	$(win).on("resize", function() {
		const w_size = $(win).width();
		
		if(w_size >= deviceSize.pc 
		&& !$("html").hasClass("pc")) {
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		} 
		
		else if(w_size < deviceSize.pc 
		&& w_size >= deviceSize.tablet 
		&& !$("html").hasClass("tablet")) {
			$html.removeClass("mobile pc").addClass("tablet");
			scrollShowHide("scroll");
		} 
		
		else if(w_size <= deviceSize.mobile 
		&& !$html.hasClass("mobile")) {
			$html.removeClass("pc tablet").addClass("mobile");
			const menu_pos = parseInt($(".mobile_menu_wrap").css("left"));
			if(menu_pos >= 0) {
							scrollShowHide("hidden");
						}
		}
	});

	// 문서의 화면 크기에 따라서 글로벌네비게이션바의 메뉴여는 법 지정
	$(function(){
					$(win).trigger("resize");

					//pc와 태블릿으로 열었을때
					$(document).on("mouseover focus",
					".pc #gnb>ul>li>a, .tablet #gnb>ul>li>a", 
					gnbPlay);

					//모바일로 열었을때
					$(document).on("click",
					".mobile #gnb>ul>li:not(.no-sub)>a", 
					gnbPlay);
					

					//글로벌네비게이션바 여는 애니메이션
					function gnbPlay() {
						
						const $ts = $(this);

						// 모바일일때 
						if($("html").hasClass("mobile")) {
							$(".mobile #gnb>ul>li>a").removeClass("on");
							$("#gnb ul ul:visible").slideUp(300);

							if($ts.next().is(":hidden")) {
											$ts.addClass("on");
											$ts.next().stop(true,true).slideDown(300);
							}
						} 
						else {
						// PC와 태블릿일때
						/* 직접 작성할 공간 */
							//모든 보이는 서브메뉴를 닫는다
							$("#gnb ul ul:visible").slideUp(300);
							//현재 이벤트로 선택된 a태그(메뉴)의 형제(서브메뉴)를 보여준다
							$ts.next().stop(true,true).slideDown(300);

						}
					} 

					//pc와 태블릿으로 닫았을때
					$(document).on("mouseleave",
					".pc #gnb, .tablet #gnb", gnbleave);

					//글로벌네비게이션바 닫는 애니메이션
					function gnbleave() {
						/* 직접 작성할 공간 */
						// 보이는 전체 서브메뉴를 닫고
						$("#gnb ul ul:visible").slideUp(300);
						// a태그의 클래스 on을 제거
						$("#gnb>ul>l1>a").removeClass("on");
					}


					//모바일 열기 버튼을 눌렀을때
					$(".mobile_menu_open button").on("click", function() {
						$(".mobile_menu_wrap").animate({"left":0}, 200);
						scrollShowHide("hidden");
					});

					//모바일 닫기 버튼을 눌렀을때
					$(".mobile_menu_close button").on("click", function() {
						$(".mobile_menu_wrap").animate({"left":"-1000px"}, 200);
						scrollShowHide("scroll");
						gnbleave();
					});
	});
});
