let feedIsHidden = false;

if (!feedIsHidden) {
	setInterval(() => {
		try {
			let feed = (document.querySelector("section").style.display = "none");
		} catch {}
		feed ? (feedIsHidden = true) : "";
	}, 500);
}
