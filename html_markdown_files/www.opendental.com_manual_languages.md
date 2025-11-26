# File: ./www.opendental.com/manual/languages.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Language Translation</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('languages','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/languages.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/languages.html" >v24.2</option><option value="https://www.opendental.com/manual241/languages.html" >v24.1</option><option value="https://www.opendental.com/manual233/languages.html" >v23.3</option><option value="https://www.opendental.com/manual232/languages.html" >v23.2</option><option value="https://www.opendental.com/manual231/languages.html" >v23.1</option><option value="https://www.opendental.com/manual224/languages.html" >v22.4</option><option value="https://www.opendental.com/manual223/languages.html" >v22.3</option><option value="https://www.opendental.com/manual222/languages.html" >v22.2</option><option value="https://www.opendental.com/manual221/languages.html" >v22.1</option><option value="https://www.opendental.com/manual214/languages.html" >v21.4</option><option value="https://www.opendental.com/manual213/languages.html" >v21.3</option><option value="https://www.opendental.com/manual212/languages.html" >v21.2</option><option value="https://www.opendental.com/manual211/languages.html" >v21.1</option><option value="https://www.opendental.com/manual205/languages.html" >v20.5</option><option value="https://www.opendental.com/manual204/languages.html" >v20.4</option><option value="https://www.opendental.com/manual203/languages.html" >v20.3</option><option value="https://www.opendental.com/manual202/languages.html" >v20.2</option><option value="https://www.opendental.com/manual201/languages.html" >v20.1</option><option value="https://www.opendental.com/manual194/languages.html" >v19.4</option><option value="https://www.opendental.com/manual193/languages.html" >v19.3</option><option value="https://www.opendental.com/manual192/languages.html" >v19.2</option><option value="https://www.opendental.com/manual191/languages.html" >v19.1</option><option value="https://www.opendental.com/manual184/languages.html" >v18.4</option><option value="https://www.opendental.com/manual183/languages.html" >v18.3</option><option value="https://www.opendental.com/manual182/languages.html" >v18.2</option><option value="https://www.opendental.com/manual181/languages.html" >v18.1</option><option value="https://www.opendental.com/manual174/languages.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Language Translation</p></div>
<div class="GeneralPageContent">
<p>Open Dental's translation tool is a way for an office to enter translations specific to the software on their own. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Language Translation. </p>
<img src="images/languageCategory.png" width="530" height="602"/><p><div class="Note">Note: <ul>
<li>This menu item is only visible if the computer's Region and Language setting is something other than English (United States).</li>
<li>For information on setting the patient's preferred language, see <a href="patientlanguages.html">Language</a>.</li>
<li>For information on translating sheets, see <a href="sheetsetuplanguage.html">Language Translations for Sheets</a>.</li>
<li>Most changes in this window require a restart of Open Dental to take effect.</li>
<li>Some language translations may need to be re-entered after updating Open Dental.</li>
</ul>
</div>
</p>
<p>Users must input translation manually. See Translations section below. </p>
<p>Translations allows users to view Open Dental in their preferred language. Language support is built into Open Dental. The code is written to automatically adapt to the user's <a href="regionlanguagesettings.html">Region and Language</a> Settings. Translations are specific to the culture (country), not just the language. If a translation has not been made specifically for the local country, the code uses a translation for the same language from a different country.</p>
<p>Set the computer's Region and Language Settings to the local language/country, then restart Open Dental for changes to take affect.</p>
<p class="MarginBottomZero"><b>Download</b>: The following is available for download: </p>
<ul class="MarginBottomGap">
<li>es-MX.txt (Spanish - Mexico) </li>
<li>fr-CA.txt (French - Canada)</li>
</ul>
<p><b>Export All</b>: Export custom language settings to share with other offices. To share the translation with another office, <a href="../contact.html">Contact Us</a> and Open Dental Support can assist with importing translations into another database.</p>
<h2>Translations</h2>
<p>All translated words and phrases are organized by category. The category usually corresponds to the name of window each item is displayed in. To understand the various categories and windows, users need to become familiar with the program. As they access areas in Open Dental, English phrases are dynamically added to the translation tool. The more they use the program, the more categories show, and the more phrases are available to translate. The program is designed this way to help users more easily identify and translate the areas of the program that they actually use. </p>
<img src="images/languageSelectCategory.png" width="270" height="334"/><p>Double-click on a category to enter custom translations.</p>
<img src="images/languageTranslate.gif" width="915" height="348"/><p>This window shows all the available phrases and translations for a category. The more users work with the program, the more phrases that appear.</p>
<p>Double-click on an item to edit.</p>
<img src="images/languageTranEdit.gif" width="890" height="699"/><p><b>English</b>: Users cannot add English comments; it is for Open Dental internal use only.</p>
<p><b>Translation</b>: Enter the translation. If a phrase needs to be left blank, enter a space. (e.g., for Social Security Number). A space is very different from an empty field. A space makes the word show up empty; an empty field retains the English version.</p>
<p><b>Other Translation</b>: Shows any other available translations for a language. For example, if the computer language is set to Spanish-Peru and the translation for Spanish-Mexico is downloaded, the downloaded translation appears here.</p>
<p><b>Comments</b>: Enter any comments.</p>
<h2>Custom Fields</h2>
<p>Some fields in Open Dental are not accessible via the translation tool because they are easily customizable for all users. Refer to many of the options in the Main Menu, Setup.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="displayfields.html">Display Fields</a>: Define which fields appear in various Open Dental windows (e.g., patient information, procedure information). Enter translations as field descriptions.</li>
<li><a href="custompatientfields.html">Patient Fields</a>: Create and translate custom patient fields that show in the Patient Information area of the Family Module.</li>
<li><a href="appointmentfields.html">Appointment Field Defs</a>: Create and translate custom Appointment fields that show on the Edit Appointment window, and can be displayed in an Appointment View.</li>
<li><a href="definitions.html">Definitions</a>: Define and translate category/list options that are used throughout the program.</li>
<li><a href="operatories.html">Operatories</a>: Define operatory names.</li>
<li><a href="procedurecodes.html">Procedure Codes</a>: Set up procedure codes and translate descriptions and notes.</li>
<li><a href="recallsetup.html">Setup Recall</a> and <a href="confirmationsetup.html">Confirmation Setup</a>: Translate recall and confirmation messages.</li>
<li><a href="autonotes.html">Auto Notes</a></li>
<li><a href="feeschedules.html">Fee Schedules</a></li>
<li><a href="inscatssetup.html">Insurance Categories</a></li>
<li><a href="messaging.html">Messaging</a></li>
</ul>
</div>
</div>
</body>
</html>```
