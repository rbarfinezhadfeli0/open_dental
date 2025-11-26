# File: ./www.opendental.com/manual/sheets.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheets</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheets.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheets.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheets.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheets.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheets.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheets.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheets.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheets.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheets.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheets.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheets.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheets.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheets.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheets.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheets.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheets.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheets.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheets.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheets.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheets.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheets.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheets.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheets.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheets.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheets.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheets.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheets.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheets.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheets</p></div>
<div class="GeneralPageContent">
<p>Sheets are templates that can be customized for patient forms, letters, and more.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Sheets</b>.</p>
<img src="images/sheetsMain.png" width="915" height="620"/><p>Sheets can include text, images, information from the database, input fields, checkboxes and radio buttons, signature boxes, and freehand drawing. Open Dental has several internal sheets that can be used for patients, or copied and edited as needed. </p>
<p><div class="Note">Note: Open Dental Support only provides minimal assistance for Sheets. See below for our Sheet Design Service. </div>
</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCkq2c7edvWusslmr_O8LS4N" target="_blank">Sheets Playlist</a>. </p>
<p><b>Sheet Type Filter</b>: Select to filter the sheets list by type.</p>
<p class="MarginBottomZero">Grids: </p>
<ul class="MarginBottomGap">
<li><b>Internal</b>: The original sheet templates that come with Open Dental. Cannot be edited, but can be copied.</li>
<li><b>Custom</b>: Sheet templates that have been customized or created by offices.</li>
</ul>
<p class="MarginBottomZero">Buttons: </p>
<ul class="MarginBottomGap">
<li><b>Defaults</b>: Click to open <a href="sheetdefaults.html">Sheet Def Defaults</a> window.</li>
<li><b>Tools</b>: Click to open <a href="sheettools.html">Sheet Tools Import / Export</a> window.</li>
<li><b>Copy</b>: Select an internal sheet from the list on the left and click copy to create a custom version to edit.</li>
<li><b>New</b>: Create a new blank custom sheet.</li>
<li><b>Duplicate</b>: Highlight a Custom sheet in the list and click Duplicate to create a new copy. For example: duplicate a custom letter sheet to create a second version that can be customized with a different body of content.</li>
</ul>
<p class="MarginBottomZero">Also see: </p>
<ul class="MarginBottomGap">
<li><a href="sheetsetup.html">Edit Sheet Def</a><ul>
<li><a href="sheetproperties.html">Sheet Def Properties</a></li>
<li><a href="sheetsaddelements.html">Sheet Field Types</a> (fields, images, checkboxes/radio buttons, signature boxes, grids, formatting, etc.)</li>
</ul>
</li>
<li><a href="../site/webforms.html">Web Forms Feature</a></li>
<li><a href="kiosk.html">Kiosk Manager</a></li>
<li><a href="sheetsfillout.html">Fill Sheet</a></li>
<li><a href="patientformsimport.html">Import Patient Forms and Medical Histories</a></li>
<li><a href="sheetstroubleshooting.html">Sheet Troubleshooting</a></li>
</ul>
<p class="MarginBottomZero">Sheet Types: </p>
<ul class="MarginBottomGap">
<li><a href="sheetsconsent.html">Consent Form Layout</a></li>
<li><a href="sheetsdepositslip.html">Deposit Slip Layout</a></li>
<li><a href="sheetsera.html">ERA Layout</a></li>
<li><a href="sheetseragridheader.html">ERA Grid Header Layout</a></li>
<li><a href="sheetsexamsheets.html">Exam Sheet Layout</a></li>
<li><a href="sheetslabslips.html">Lab Slip Layout</a></li>
<li><a href="sheetslabels.html">Label Layout</a></li>
<li><a href="sheetsmedicalhistory.html">Medical History Layout</a></li>
<li><a href="sheetspatientform.html">Patient Form Layout</a> (e.g., reg. form, HIPAA, financial agreements)</li>
<li><a href="sheetsletterspatient.html">Patient Letter Layout</a></li>
<li><a href="paymentplansheets.html">Payment Plan Layout</a></li>
<li><a href="sheetsscreenings.html">Screening Layout</a></li>
<li><a href="sheetsreferrals.html">Referral Letter Layout</a></li>
<li><a href="sheetsreferralslips.html">Referral Slip Layout</a></li>
<li><a href="sheetsroutingslips.html">Routing Slip Layout</a></li>
<li><a href="sheetsrxpatinstruct.html">Rx Instructions Layout</a></li>
<li><a href="sheetsrx.html">Rx Layout</a></li>
<li><a href="sheetsrxmulti.html">Rx Multiple Layout</a></li>
<li><a href="statementsheets.html">Statement Layout</a></li>
<li><a href="sheetstreatplan.html">Treatment Plan Layout</a></li>
<li><a href="layout.html">Chart Layout</a></li>
</ul>
<h2>Sheet Design Service</h2>
<p>If you have existing forms you would like to convert to sheets, but don't have the time or expertise to set them up, we can help! Please submit a <a href="https://opendentalsoft.com:1943/ODCustomSheetForm/CustomSheetForm.aspx">Custom Sheet Request</a> to get started. See <a href="https://opendental.com/site/fees.html">Fees for Support and Services</a> for our rates.</p>
<p>Anyone can submit a Custom Sheet Request for a quote. However, an office must be on support or have a final conversion scheduled before work can begin on an approved Custom Sheet Request job.</p>
<p>When you submit your request, we will ask you to send us samples of the forms you are already using so we can design to match as closely as possible. If you can supply a native program file (e.g., a Word document or PDF, not a scanned image), it may reduce the design cost.</p>
</div>
</div>
</body>
</html>```
