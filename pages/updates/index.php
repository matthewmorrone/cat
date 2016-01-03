<script src="https://code.jquery.com/jquery-2.1.4.js" id="jquery"></script>
<a class="twitter-timeline"
	data-widget-id="386847684901888000"
	data-profile-id="79254109"
	data-user-id="79254109"
	href="https://twitter.com/CATTransit"
	data-screen-name="CATTransit">
</a>
<script>
var log = console.log.bind(console);

window.twttr = (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {}
	if (d.getElementById(id)) return t
	js = d.createElement(s)
	js.id = id
	js.src = "https://platform.twitter.com/widgets.js"
	fjs.parentNode.insertBefore(js, fjs)
	t._e = []
	t.ready = function(f) {
		t._e.push(f)
	}
	return t;
}(document, "script", "twitter-wjs"))
twttr.ready(function (twttr) {
	twttr.events.bind('loaded', function (e) {
		var target = e.widgets[0]
		try {
			$("#twitter-widget-0").height(500)
			$(target).contents().find("img, .footer, .timeline-header, .timeline-footer, .tweet-actions, .p-nickname, .h-card.p-author, .expand ").remove()
			$(target).contents().find("li").css({padding: "12px"})
			$(target).contents().find(".u-url").css({float: "left"}).removeAttr("href")
			$("#jquery").remove()
		}
		catch(e) {log("ACAO prob")}
	})
	twttr.events.bind('click', function (e) {
		var target = e.widgets[0]
		log(target)
		$(target).contents().find("img, .footer, .timeline-header, .timeline-footer, .tweet-actions, .p-nickname, .h-card.p-author, .expand ").remove()
		$(target).contents().find("li").css({padding: "12px"})
		$(target).contents().find(".u-url").css({float: "left"}).removeAttr("href")
		$("#jquery").remove()
	})
})



</script>

