let feedIsHidden = false;

function hideFeed() {
	let feed;
	try {
		feed = document.querySelector("section").style.display = "none";
	} catch {}
	if (feed) {
		feedIsHidden = true;
	}
}

if (!feedIsHidden) {
	setInterval(hideFeed, 500);
}
