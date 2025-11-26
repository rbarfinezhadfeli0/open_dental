# File: ./www.opendental.com/manual243/webformsupload.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Form Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webformsupload','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/webformsupload.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/webformsupload.html" >v24.2</option><option value="https://www.opendental.com/manual241/webformsupload.html" >v24.1</option><option value="https://www.opendental.com/manual233/webformsupload.html" >v23.3</option><option value="https://www.opendental.com/manual232/webformsupload.html" >v23.2</option><option value="https://www.opendental.com/manual231/webformsupload.html" >v23.1</option><option value="https://www.opendental.com/manual224/webformsupload.html" >v22.4</option><option value="https://www.opendental.com/manual223/webformsupload.html" >v22.3</option><option value="https://www.opendental.com/manual222/webformsupload.html" >v22.2</option><option value="https://www.opendental.com/manual221/webformsupload.html" >v22.1</option><option value="https://www.opendental.com/manual214/webformsupload.html" >v21.4</option><option value="https://www.opendental.com/manual213/webformsupload.html" >v21.3</option><option value="https://www.opendental.com/manual212/webformsupload.html" >v21.2</option><option value="https://www.opendental.com/manual211/webformsupload.html" >v21.1</option><option value="https://www.opendental.com/manual205/webformsupload.html" >v20.5</option><option value="https://www.opendental.com/manual204/webformsupload.html" >v20.4</option><option value="https://www.opendental.com/manual203/webformsupload.html" >v20.3</option><option value="https://www.opendental.com/manual202/webformsupload.html" >v20.2</option><option value="https://www.opendental.com/manual201/webformsupload.html" >v20.1</option><option value="https://www.opendental.com/manual194/webformsupload.html" >v19.4</option><option value="https://www.opendental.com/manual193/webformsupload.html" >v19.3</option><option value="https://www.opendental.com/manual192/webformsupload.html" >v19.2</option><option value="https://www.opendental.com/manual191/webformsupload.html" >v19.1</option><option value="https://www.opendental.com/manual184/webformsupload.html" >v18.4</option><option value="https://www.opendental.com/manual183/webformsupload.html" >v18.3</option><option value="https://www.opendental.com/manual182/webformsupload.html" >v18.2</option><option value="https://www.opendental.com/manual181/webformsupload.html" >v18.1</option><option value="https://www.opendental.com/manual174/webformsupload.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Form Setup</p></div>
<div class="GeneralPageContent">
<p>Set up web forms to be filled online by patients.</p>
<p>In <a href="webformsretrieve.html">Web Forms Retrieve</a>, click <b>Setup</b> in the upper left.</p>
<img src="images/webFormSetup.png" width="901" height="585"/><p>Alternatively, in the Main Menu, click Setup, Web Forms.</p>
<h2>Available Web Forms</h2>
<p>The Available Web Forms grid displays all forms currently uploaded to the Open Dental web server. These forms are available to use online.</p>
<p>Only sheets with a type of <i>PatientForm</i> or <i>MedicalHistory</i> are listed. If there are no custom patient forms or medical histories, the internal versions show.</p>
<img src="images/webFormSetupAvailable.png" width="289" height="291"/><p><b>Add</b>: Click to add a new form to the available list. Pick Sheet opens. Highlight a form, then click OK to upload it. <br/><img src="images/webFormPickSheet.png" width="426" height="252" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Search</b>: Type a sheet name to filter the list. Results update automatically.</li>
<li>Sheets with a type of <i>PatientForm</i> or <i>MedicalHistory</i> are listed. Sheets listed in this window depend on the following: <ul>
<li>If a sheet type (i.e., <i>PatientForm</i> or <i>MedicalHistory</i>) has a custom sheet, only the custom sheets are listed. If no custom sheets exist for the sheet type, the Internal sheets for that type are listed.</li>
<li>To show the internal sheets, if custom sheets have been created, create a copy of the Internal sheet in <a href="sheets.html">Sheet Defs</a>.</li>
</ul>
</li>
<li>Double-click a sheet or highlight and click <b>OK</b> to add it to Available Web Forms.</li>
</ul>
<p><b>Update</b>: When changes have been made to a sheet, the form must be updated to take affect. Highlight the form in the Available grid, then click to update it. Alternatively, web forms in use can be updated immediately after updating the sheet by clicking Yes to the prompt.</p>
<p><b>Delete</b>: Highlight a form, then click to delete it from the Available grid. The form will no longer be available for online use.</p>
<h2>Preferences</h2>
<p>These settings affect every web form uploaded to the web server. </p>
<img src="images/webFormSetupPrefs.png" width="586" height="147"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Host Server Address</b>: The address where web forms are hosted. Do not edit this address.</li>
<li><b>Date Format</b>: Select the preferred date format for patients filling web forms. <ul>
<li>Selected <i>Date Format</i> should match the format set in Windows Region settings.</li>
<li>If there is a mismatch of the date format, birthdates are considered invalid when <a href="webformsretrieve.html">Retrieving Web Forms</a> and when <a href="patientformsimport.html">Importing Forms</a>, the correct format must be manually selected to import the birthdate.</li>
</ul>
</li>
<li><b>Border Color:</b> The background color of the Web Form window. Click Change to select a different color.</li>
<li><b>Disable Web Form Signatures:</b> Select whether to allow signatures on web forms.  <ul>
<li>Checked: Do not allow signatures on any web form. The text "Signature will be recorded later" replaces the signature box. When the patient arrives to the office for their appointment, office staff can retrieve the signature via kiosk, eClipboard, or by printing. </li>
<li>Unchecked: Allow signatures on all web forms.</li>
</ul>
</li>
<li><b>Enable automatic download of web forms</b>: Determines whether web forms automatically download when a patient match is found. The <a href="opendentalservice.html">Open Dental Service</a> must be installed and running to utilize this preference. <ul>
<li>Checked: Enable automatic download of web forms. All web forms are retrieved automatically, even those with no match. Users are shown web forms for patients that do not have a match (e.g., new patients) the next time <i>Retrieve New Forms</i> is used. When enabled, the OpenDentalService checks for retrieval every two minutes. </li>
<li>Unchecked: Do not enable automatic download of web forms. Users must manually retrieve all web forms.</li>
</ul>
</li>
</ul>
<p>Click <b>Save</b> to keep any changes to preferences in Web Form Setup.</p>
<h2>Construct URL</h2>
<p>Build a URL for patients to access web form(s). Parameters in the URL also determine options available on the web form. Patients can use the web form URL to access the form via the office website, email, etc. </p>
<p>Upon exiting Web Form Setup, these settings, including the URLs, are cleared. New URLs only need to be constructed if settings (e.g., forms, order, etc.) are changed.</p>
<p>To construct a URL, start by highlighting one or more forms in the <i>Available Web Forms</i> list. Each selected form generates a unique URL. </p>
<img src="images/webFormSetupConstruct.png" width="623" height="342"/><p><b>Redirect URL</b>: When patients complete their forms, they can be automatically redirected back to the office website. Enter the full URL (e.g., https://opendental.com) where patients should be redirected to. The URLs area will update to include the redirect code.</p>
<img src="images/webFormsConstructRedirect.png" width="478" height="62"/><p class="MarginBottomZero"><b>Next Forms</b>: Link multiple web forms together in a single URL. Patients see a list of all linked forms on and can click on each one to continue to the next form.  </p>
<ol class="MarginBottomGap">
<li>In the <i>Available Web Forms</i> list, highlight the first web form patients will view. </li>
<li>Click<b> [...]</b> next to Next Forms.</li>
<li>Select Next Forms opens.</li>
<img src="images/webFormsNextForms.png" width="637" height="365"/><ul>
<li>Forms listed under Available Web Forms can be added to a URL. </li>
<li>Forms listed under Web Forms Selected will be added to the URL. </li>
<li>Highlight a form, then use the Left and Right arrows to move it to the appropriate list.</li>
<li>Highlight a form, then use the Up and Down arrows to reorder forms that display for a patient. </li>
<li>Do not include the form highlighted in Step 1. The form selected in Step 1 will always be the first form for the patient. </li>
</ul>
<li>Click <b>OK</b>. The URLs area will update to include code for the new 'linked' forms (&amp;NFID=12345).</li>
</ol>
<img src="images/webFormsConstructNext.png" width="479" height="48"/><p><b>Clinic</b>: Click the Clinic dropdown to associate a clinic, or click <b>[...]</b> to select from the Clinic List. When a new patient fills out a form and no patient record exists yet, the clinic associated to the web form(s) will be assigned to the patient. This clinic will not override clinic selection on any existing patient records.</p>
<img src="images/webFormsConstructClinic.png" width="479" height="48"/><p class="MarginBottomZero"><b>Inherit (Auto Fill) Last Name, First Name, and Birthdate from Previous Form</b>: When including <i>Next Forms</i>, a patient's last name, first name, and birthdate they've entered from the previous form is auto-filled into subsequent forms.  </p>
<ul class="MarginBottomGap">
<li>To turn off this option for web forms in this URL, uncheck this box. </li>
<li><span class="codeblock">&amp;AFNAB=N</span> is added to the URL.</li>
</ul>
<p class="MarginBottomZero"><b>Disable Typed Signature</b>: Allow or block patient from typing a signature.  </p>
<ul class="MarginBottomGap">
<li>Checked: Patients cannot type a signature into a Web Form Signature box. <span class="codeblock">&amp;DTS=Y</span> is added to the URL.</li>
<li>Unchecked: This is the default. Patients can type a signature into a Web Form signature box.</li>
</ul>
<img src="images/webformsConstructSign.png" width="479" height="47"/><p class="MarginBottomZero"><b>URLs</b>: As the URL is built, the box updates to include the URL code. This is the URL sent to patients via email, or can be used as a link on the office website. </p>
<ul class="MarginBottomGap">
<li><b>Navigate to URL(s)</b>: Click to open the URL(s) in a browser. </li>
<li><b>Copy to Clipboard</b>: Copy the URL to the computer's clipboard. </li>
</ul>
<h2>Details</h2>
<p>Every uploaded web form sheet must contain <a href="inputfieldnames.html">Input Fields</a> for LastName, FirstName, and Birthdate so that the completed, retrieved form can be matched to the correct patient. The Birthdate field should only be used once per sheet. If additional date fields are needed (e.g., insurance effective date), use the Misc input field instead. Forms can be uploaded or deleted from the server at any time without damaging patient records.</p>
<p>Other sheet types, such as <i>PatientLetter</i> or <i>Consent</i>, are not available for use as web forms. Web forms are designed to have information input (i.e., patient is updating information). Patient Letters are designed to have information output (i.e., patient is receiving information). Consents are designed to have information input by the office (e.g., tooth number or procedure). </p>
<p>Only [dateToday] and [dateTodayLong] <a href="statictextfields.html">Static Text Fields</a> are populated on web forms. As other Static Text Fields are unique to the patient, they are left blank.</p>
<p></p>
</div>
</div>
</body>
</html>```
