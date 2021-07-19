let feedIsHidden = false;
let feed;

if (!feedIsHidden) {
	setInterval(() => {
		try {
			feed = document.querySelector("section").style.display = "none";
		} catch {}
		feed ? (feedIsHidden = true) : "";
	}, 500);
}
