# File: ./www.opendental.com/manual232/spellcheck.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Spell Check</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('spellcheck','+setup','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/manual243/spellcheck.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/spellcheck.html" >v24.2</option><option value="https://www.opendental.com/manual241/spellcheck.html" >v24.1</option><option value="https://www.opendental.com/manual233/spellcheck.html" >v23.3</option><option value="https://www.opendental.com/manual232/spellcheck.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/spellcheck.html" >v23.1</option><option value="https://www.opendental.com/manual224/spellcheck.html" >v22.4</option><option value="https://www.opendental.com/manual223/spellcheck.html" >v22.3</option><option value="https://www.opendental.com/manual222/spellcheck.html" >v22.2</option><option value="https://www.opendental.com/manual221/spellcheck.html" >v22.1</option><option value="https://www.opendental.com/manual214/spellcheck.html" >v21.4</option><option value="https://www.opendental.com/manual213/spellcheck.html" >v21.3</option><option value="https://www.opendental.com/manual212/spellcheck.html" >v21.2</option><option value="https://www.opendental.com/manual211/spellcheck.html" >v21.1</option><option value="https://www.opendental.com/manual205/spellcheck.html" >v20.5</option><option value="https://www.opendental.com/manual204/spellcheck.html" >v20.4</option><option value="https://www.opendental.com/manual203/spellcheck.html" >v20.3</option><option value="https://www.opendental.com/manual202/spellcheck.html" >v20.2</option><option value="https://www.opendental.com/manual201/spellcheck.html" >v20.1</option><option value="https://www.opendental.com/manual194/spellcheck.html" >v19.4</option><option value="https://www.opendental.com/manual193/spellcheck.html" >v19.3</option><option value="https://www.opendental.com/manual192/spellcheck.html" >v19.2</option><option value="https://www.opendental.com/manual191/spellcheck.html" >v19.1</option><option value="https://www.opendental.com/manual184/spellcheck.html" >v18.4</option><option value="https://www.opendental.com/manual183/spellcheck.html" >v18.3</option><option value="https://www.opendental.com/manual182/spellcheck.html" >v18.2</option><option value="https://www.opendental.com/manual181/spellcheck.html" >v18.1</option><option value="https://www.opendental.com/manual174/spellcheck.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Spell Check</p></div>
<div class="GeneralPageContent">
<p>A custom dictionary can be created for words or abbreviations not commonly known.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Spell Check.</p>
<img src="images/spellcheck.gif" width="545" height="321"/><p><b>Spell Check Enabled</b>: Enable spell check to underline misspelled words throughout the program. </p>
<div class="Note">Note: This preference will be disabled if <i>Text boxes use foreign language Input Method Editor (IME) composition</i> is checked in <a href="miscsetup.html">Miscellaneous Setup</a>.</div>
<p><br/><b>Add</b>: Enter a custom word or abbreviation, then click Add to add it to your dictionary. The custom dictionary is stored in the database and shared, so it is available on every computer in the office.</p>
<p>Double-click an existing word to edit it.<br/><img src="images/spellcheckeditword.gif" width="465" height="152" class="ImageInParagraph"/></p>
<p><b>Delete</b>: Highlight an existing word and click to remove it from Custom Words. </p>
<p>A restart of Open Dental may be required for existing text (e.g., an existing Commlog) to reflect changes after updating Custom Words if the text has already been spell checked. </p>
<h2>Using Spell Check</h2>
<p><a href="rightclicktextboxes.html">Text Boxes</a> throughout the program have spell checking built in. Words flagged as possible misspellings are underlined in red. When you see a red underlined word, right-click on it.</p>
<img src="images/spellcheckpopup.gif" width="770" height="360"/><p class="MarginBottomZero">Select the appropriate action: </p>
<ul class="MarginBottomGap">
<li>Replace the word with a Hunspell generated suggestion.</li>
<li>Add the word to the custom dictionary.</li>
<li>Disable Spell Check: Disables the Spell Check feature for all users. Re-enable Spell Check from Setup, Spell Check.</li>
</ul>
<h2>Technical Details</h2>
<p>We make use of the open source <a href="http://hunspell.sourceforge.net/">Hunspell</a> spell checker and morphological analyzer.</p>
</div>
</div>
</body>
</html>```
