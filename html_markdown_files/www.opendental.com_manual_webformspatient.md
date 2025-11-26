# File: ./www.opendental.com/manual/webformspatient.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Forms: What Patient Sees</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webformspatient','webformsupload','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/webformspatient.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/webformspatient.html" >v24.2</option><option value="https://www.opendental.com/manual241/webformspatient.html" >v24.1</option><option value="https://www.opendental.com/manual233/webformspatient.html" >v23.3</option><option value="https://www.opendental.com/manual232/webformspatient.html" >v23.2</option><option value="https://www.opendental.com/manual231/webformspatient.html" >v23.1</option><option value="https://www.opendental.com/manual224/webformspatient.html" >v22.4</option><option value="https://www.opendental.com/manual223/webformspatient.html" >v22.3</option><option value="https://www.opendental.com/manual222/webformspatient.html" >v22.2</option><option value="https://www.opendental.com/manual221/webformspatient.html" >v22.1</option><option value="https://www.opendental.com/manual214/webformspatient.html" >v21.4</option><option value="https://www.opendental.com/manual213/webformspatient.html" >v21.3</option><option value="https://www.opendental.com/manual212/webformspatient.html" >v21.2</option><option value="https://www.opendental.com/manual211/webformspatient.html" >v21.1</option><option value="https://www.opendental.com/manual205/webformspatient.html" >v20.5</option><option value="https://www.opendental.com/manual204/webformspatient.html" >v20.4</option><option value="https://www.opendental.com/manual203/webformspatient.html" >v20.3</option><option value="https://www.opendental.com/manual202/webformspatient.html" >v20.2</option><option value="https://www.opendental.com/manual201/webformspatient.html" >v20.1</option><option value="https://www.opendental.com/manual194/webformspatient.html" >v19.4</option><option value="https://www.opendental.com/manual193/webformspatient.html" >v19.3</option><option value="https://www.opendental.com/manual192/webformspatient.html" >v19.2</option><option value="https://www.opendental.com/manual191/webformspatient.html" >v19.1</option><option value="https://www.opendental.com/manual184/webformspatient.html" >v18.4</option><option value="https://www.opendental.com/manual183/webformspatient.html" >v18.3</option><option value="https://www.opendental.com/manual182/webformspatient.html" >v18.2</option><option value="https://www.opendental.com/manual181/webformspatient.html" >v18.1</option><option value="https://www.opendental.com/manual174/webformspatient.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Forms: What Patient Sees</p></div>
<div class="GeneralPageContent">
<p>In <a href="webformsupload.html">Web Form Setup</a>, click <b>Navigate to URL(s)</b>.</p>
<img src="images/webFormFill.png" width="915" height="662"/><p>Web forms can be viewed on a desktop (see above) or on a mobile device (see below). The view is responsive and automatically detects the user's device and adapts accordingly.</p>
<img src="images/webformMobile.png" width="313" height="625"/><h2>Fields</h2>
<p><b>Language</b>: If sheets have <a href="sheetsetuplanguage.html">Language Translations</a> added, a Language dropdown is visible allowing patients to select their preferred language.</p>
<p><b>Prev / Next</b>: Use these to navigate forms that are linked together. On desktop, all forms are listed on the left. Forms that have not been opened are marked as <i>new.</i></p>
<p><b>Submit</b>: Click to submit forms. Required fields are verified before sending. If any required fields are not filled in, they are turned red. On mobile, <i>Submit</i> is only enabled on the last form and appears at both the top and bottom of the screen.</p>
<h2>Filling Out the Form</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="webformsupload.html">Web Form Setup</a> determines Web Form settings such as whether patient Last Name, First Name, and Birthdate is inherited on 'next' forms, whether there are 'next' forms, the clinic associated to the web form, whether a redirect occurs after submit, and whether typed signatures are allowed. These settings come through to the web form via the URL.</li>
<li>Pale yellow areas indicate fillable fields.</li>
<li>Birthdate validation is based on Windows region settings (format, date format) for the office. To import patient birthdates successfully into Open Dental, make sure the region settings expected on the web form match the region settings on the workstation running Open Dental.</li>
<li>If web form signatures are turned on, patients can electronically sign web forms using a mouse or stylus, or they can opt to type their name. When the form is imported into the database by the office, a date stamp appears in place of the signature. To erase a signature, click <b>Clear</b>. To type, check <b>Enable typed signature</b>, then enter the Full Name.<br/><img src="images/webFormSignature.png" width="387" height="205" class="ImageInParagraph"/></li>
<li>Font support is dependent on the browser used to view the form. If the browser doesn't support a font used in the form, a supported font is substituted.</li>
<li>The form is pure HTML with some JavaScript to validate certain fields.</li>
<li>Free-form drawing does not work.</li>
</ul>
<h2>Troubleshooting</h2>
<p><b>On a mobile device, the web form is not displaying a mobile view.</b></p>
<p>In <a href="sheetproperties.html">Sheet Def Properties</a>, <i>Use Mobile Layout</i> must been enabled for each form.</p>
<p><b>In Mobile View, when a patient clicks (Add text) the screen darkens and patient is forced to scroll way down to find the text entry popup. </b></p>
<p class="MarginBottomZero">You have most likely embedded your web form in an iFrame. There are two options options: </p>
<ul class="MarginBottomGap">
<li>Do not embed in an iFrame, just navigate the patient directly to the link provided by Open Dental.</li>
<li>Call support so we can evaluate the height setup of your iFrame in your HTML source and help you format your iFrame in a way that alleviates this issue.</li>
</ul>
<p><b>Would a patient (or parent/guardian) be able to digitally sign a web-based consent form?</b></p>
<p>The practice would do better to have the patient (or parent/guardian) complete the document online, then sign it in the office, rather than online. </p>
</div>
</div>
</body>
</html>```
