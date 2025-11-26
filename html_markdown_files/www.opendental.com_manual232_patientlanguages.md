# File: ./www.opendental.com/manual232/patientlanguages.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Language</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientlanguages','miscsetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/patientlanguages.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/patientlanguages.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientlanguages.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientlanguages.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientlanguages.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/patientlanguages.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientlanguages.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientlanguages.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientlanguages.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientlanguages.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientlanguages.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientlanguages.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientlanguages.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientlanguages.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientlanguages.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientlanguages.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientlanguages.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientlanguages.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientlanguages.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientlanguages.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientlanguages.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientlanguages.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientlanguages.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientlanguages.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientlanguages.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientlanguages.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientlanguages.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientlanguages.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Language</p></div>
<div class="GeneralPageContent">
<p>A patient's primary language can be assigned to them so that literature and messages sent to the patient are in their preferred language.</p>
<p>In <a href="miscsetup.html">Miscellaneous Setup</a>, click <b>Edit Languages</b>.</p>
<img src="images/languagedefs.gif" width="723" height="588"/><p class="MarginBottomZero">First set the languages most commonly used in the office's region.  </p>
<ul class="MarginBottomGap">
<li><b>All Languages</b>: Displays microsoft-supported languages. Highlight a language then click <b>Add</b> at the top to add it to the list of available options.</li>
<li><b>Custom</b>: Enter a language not available in the list above. Click <b>Add</b> at the bottom to add it to the list of available options.</li>
<li><b>Languages used by patients</b>: The language options that show in the Language dropdown on the Patient Edit window, listed in the order they appear.  <ul>
<li>Use the <b>Up</b> and <b>Down</b> arrows to reorder them.</li>
<li>Highlight a language then click<b> Delete</b> to remove it from the options.</li>
</ul>
</li>
<li><b>Indicator that patient has no specified language</b>: For EHR (see <a href="../site/ehrlicense.html">Open Dental EHR</a>). This language is the indicator that patient declined to specify a language. Only Custom options can be selected. This indicator is recognized in <a href="ehrmeasures.html">EHR Measure Reports</a> as acceptable input.</li>
</ul>
<h2>Add the Language to a Patient</h2>
<p>Languages are assigned to patients in the <a href="patientedit.html">Edit Patient Information</a> window, Language dropdown.</p>
<img src="images/patientEditLanguage.gif" width="291" height="110"/><p>Language translations can be added to sheets (see <a href="sheetsetuplanguage.html">Language Translations for Sheets</a>) and automated text messages (see <a href="automatedmessaging.html">Automated Messaging</a>). When the patient has a language assigned, and these features have a translation in the same language, the language translation will automatically be selected for the patient.</p>
</div>
</div>
</body>
</html>```
