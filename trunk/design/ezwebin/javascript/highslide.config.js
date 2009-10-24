/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = '/extension/hr_highslide/design/ezwebin/stylesheets/graphics/';
//expandCursor : null, // null disables
//restoreCursor : null, // null disables
hs.showCredits = false;
hs.outlineType = 'custom';
hs.captionEval = 'this.a.title';
hs.headingEval = 'this.thumb.title';
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Schließen"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});


// German language strings
hs.lang = {
	cssDirection: 'ltr',
	loadingText: 'Lade...',
	loadingTitle: 'Klick zum Abbrechen',
	focusTitle: 'Klick um nach vorn zu bringen',
	fullExpandTitle: 'Zur Originalgröße erweitern',
	creditsText: 'Powered by <i>Highslide JS</i>',
	creditsTitle: 'Gehe zur Highslide JS Homepage',
	previousText: 'Voriges',
	nextText: 'Nächstes',
	moveText: 'Verschieben',
	closeText: 'Schließen',
	closeTitle: 'Schließen (Esc)',
	resizeTitle: 'Größe wiederherstellen',
	playText: 'Abspielen',
	playTitle: 'Slideshow abspielen (Leertaste)',
	pauseText: 'Pause',
	pauseTitle: 'Pausiere Slideshow (Leertaste)',
	previousTitle: 'Voriges (Pfeiltaste links)',
	nextTitle: 'Nächstes (Pfeiltaste rechts)',
	moveTitle: 'Verschieben',
	fullExpandText: 'Vollbild',
	number: 'Bild %1 von %2',
	restoreTitle: 'Klick um das Bild zu schließen, klick und ziehe um zu verschieben. Benutze Pfeiltasten für vor und zurück.'
};
