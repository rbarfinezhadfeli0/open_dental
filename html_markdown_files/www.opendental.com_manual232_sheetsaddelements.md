# File: ./www.opendental.com/manual232/sheetsaddelements.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Field Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsaddelements','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetsaddelements.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetsaddelements.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsaddelements.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsaddelements.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsaddelements.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetsaddelements.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsaddelements.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsaddelements.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsaddelements.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsaddelements.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsaddelements.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsaddelements.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsaddelements.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsaddelements.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsaddelements.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsaddelements.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsaddelements.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsaddelements.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsaddelements.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsaddelements.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsaddelements.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsaddelements.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsaddelements.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsaddelements.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsaddelements.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsaddelements.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsaddelements.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsaddelements.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Field Types</p></div>
<div class="GeneralPageContent">
<p>When editing a sheet in the <a href="sheetsetup.html">Edit Sheet Def</a> window, various Field Types can be edited, added, or formatted as needed. </p>
<h2>Field Types</h2>
<p class="MarginBottomZero">Available Field Types: </p>
<ul class="MarginBottomGap">
<li><a href="sheetsoutputtext.html">Output Text</a>: Output data fields that will be pulled from the database so information does not need to be entered manually. </li>
<li><a href="sheetsinputfield.html">Input Field</a>: Fields that expect the user to input data. Data can be imported into the database. Importable data fields can also be pulled from the database in a new sheet. </li>
<li><a href="sheetsstatictext.html">Static Text</a>: Text information such as labels and large paragraphs. Also includes fields that can be inserted as static text so that resulting text is specific to the patient (e.g., patient address, gender, age, etc.)</li>
<li><a href="sheetscheckbox.html">Checkbox</a>: A defined area where the user can click to toggle an X on and off. Can allow multiple choices or be set as radio buttons that require users to select one option out of many.</li>
<li><a href="sheetscombobox.html">Combo Box</a>: Add pick lists that allow users to make a single selection from a list of options.</li>
<li><a href="sheetsstaticimage.html">Static Image</a>: Import large or small graphic images (JPG, GIF, PNG, TIF, BMP).</li>
<li><a href="sheetspatimage.html">Pat Image</a>: Add patient images stored in the Imaging Module (BMP, GIF, EXIF, JPG, PNG, and TIFF). </li>
<li><a href="sheetsline.html">Line</a>: Fixed lines for the background.</li>
<li><a href="sheetsline.html">Rectangle</a>: Fixed rectangles for the background. Used to create the box around a checkbox or radio button.</li>
<li><a href="sheetssignature.html">Signature</a>: Insert a box for an electronic signature. </li>
<li><a href="sheetssignature.html">SigPractice</a>: As above, but limited to <a href="sheetstreatplan.html">Treatment Plan</a> sheets for practice staff to sign. </li>
<li><a href="sheetsscreenchart.html">ScreenChart</a>: Add up to two tooth charts to a custom public health screening form. </li>
<li><a href="sheetsgrid.html">Grid</a>: Insert a fixed group of items arranged in columns and rows.</li>
<li><a href="sheetsspecial.html">Special</a>: Add the tooth chart and tooth chart legend.</li>
</ul>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Also see our Webinar: <a href="https://youtu.be/l16y8s53CEI" target="_blank">Understanding Sheet Field Types</a></p>
<h2>Editing Fields</h2>
<p>The fields available for a sheet depend on the Sheet Type:</p>
<table class="simpletable">
<tr>
<th style="width:7%">Sheet Type</th>
<th style="width:7%">OutputText</th>
<th style="width:7%">InputField</th>
<th style="width:7%">StaticText</th>
<th style="width:7%">Checkbox</th>
<th style="width:7%">ComboBox</th>
<th style="width:7%">StaticImage</th>
<th style="width:7%">PatImage</th>
<th style="width:7%">Line</th>
<th style="width:7%">Rect</th>
<th style="width:7%">Signature</th>
<th style="width:7%">SigPractice</th>
<th style="width:7%">ScreenChart</th>
<th style="width:7%">Grid</th>
<th style="width:7%">Special</th>
</tr>
<tr>
<td>LabelPatient</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>LabelCarrier</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>LabelAppointment</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>LabelReferral</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ReferralSlip</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Rx</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Consent</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>PatientLetter</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>ReferralLetter</td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<td>RoutingSlip</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>PatientForm</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>MedicalHistory</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>LabSlip</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ExamSheet</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>DepositSlip</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Statement</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>TreatmentPlan</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<td>Screening</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Payment Plan</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
</tr>
<tr>
<td>RxMulti</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ERA</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ERAGridHeader</td>
<td>x</td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Dashboard</td>
<td></td>
<td></td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td></td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<td>Chart Module</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
</tr>
</table>
<br/></div>
</div>
</body>
</html>```
