# File: ./www.opendental.com/manual/inputfieldnames.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Input Field Names</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('inputfieldnames','sheetsinputfield','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/inputfieldnames.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/inputfieldnames.html" >v24.2</option><option value="https://www.opendental.com/manual241/inputfieldnames.html" >v24.1</option><option value="https://www.opendental.com/manual233/inputfieldnames.html" >v23.3</option><option value="https://www.opendental.com/manual232/inputfieldnames.html" >v23.2</option><option value="https://www.opendental.com/manual231/inputfieldnames.html" >v23.1</option><option value="https://www.opendental.com/manual224/inputfieldnames.html" >v22.4</option><option value="https://www.opendental.com/manual223/inputfieldnames.html" >v22.3</option><option value="https://www.opendental.com/manual222/inputfieldnames.html" >v22.2</option><option value="https://www.opendental.com/manual221/inputfieldnames.html" >v22.1</option><option value="https://www.opendental.com/manual214/inputfieldnames.html" >v21.4</option><option value="https://www.opendental.com/manual213/inputfieldnames.html" >v21.3</option><option value="https://www.opendental.com/manual212/inputfieldnames.html" >v21.2</option><option value="https://www.opendental.com/manual211/inputfieldnames.html" >v21.1</option><option value="https://www.opendental.com/manual205/inputfieldnames.html" >v20.5</option><option value="https://www.opendental.com/manual204/inputfieldnames.html" >v20.4</option><option value="https://www.opendental.com/manual203/inputfieldnames.html" >v20.3</option><option value="https://www.opendental.com/manual202/inputfieldnames.html" >v20.2</option><option value="https://www.opendental.com/manual201/inputfieldnames.html" >v20.1</option><option value="https://www.opendental.com/manual194/inputfieldnames.html" >v19.4</option><option value="https://www.opendental.com/manual193/inputfieldnames.html" >v19.3</option><option value="https://www.opendental.com/manual192/inputfieldnames.html" >v19.2</option><option value="https://www.opendental.com/manual191/inputfieldnames.html" >v19.1</option><option value="https://www.opendental.com/manual184/inputfieldnames.html" >v18.4</option><option value="https://www.opendental.com/manual183/inputfieldnames.html" >v18.3</option><option value="https://www.opendental.com/manual182/inputfieldnames.html" >v18.2</option><option value="https://www.opendental.com/manual181/inputfieldnames.html" >v18.1</option><option value="https://www.opendental.com/manual174/inputfieldnames.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Input Field Names</p></div>
<div class="GeneralPageContent">
<p>See <a href="sheetsinputfield.html">Sheet Input Field</a>.</p>
<p>Input Fields are <a href="sheetsaddelements.html">Sheet Field Types</a> where patients input information when filling out forms. Most fields are self-explanatory. Fields that need additional detail have a description noted. The available input fields vary by sheet type.</p>
<table class="simpletable">
<tr>
<th style="width:50%">Input Text Field Name</th>
<th style="width:50%">Description</th>
</tr>
<tr>
<td>notes</td>
<td>Available for:  <ul>
<li>Referral Slips. Input notes specific to the referral source.</li>
<li>Rx. Not used. </li>
<li>Lab Slips. </li>
</ul>
</td>
</tr>
<tr>
<td>toothnum</td>
<td>Available for Consents. Input tooth number (e.g., extraction consent)</td>
</tr>
<tr>
<td>misc</td>
<td>Available for Consents, Patient Forms, Medical Histories, Lab Slips, Exam Sheets <br/> Input miscellaneous notes.</td>
</tr>
<tr>
<td>address</td>
<td></td>
</tr>
<tr>
<td>address 2</td>
<td></td>
</tr>
<tr>
<td>Birthdate</td>
<td>Patient birthdate. Date format typically follows the format of where the practice is located (e.g., US vs Canada).</td>
</tr>
<tr>
<td>City</td>
<td></td>
</tr>
<tr>
<td>Email</td>
<td></td>
</tr>
<tr>
<td>Fname</td>
<td></td>
</tr>
<tr>
<td>HmPhone</td>
<td></td>
</tr>
<tr>
<td>ICEName</td>
<td>Available for Patient Forms and Medical Histories. Emergency contact name.</td>
</tr>
<tr>
<td>ICEPhone</td>
<td>Available for Patient Forms and Medical Histories. Emergency contact phone number.</td>
</tr>
<tr>
<td>ins1CarrierName</td>
<td></td>
</tr>
<tr>
<td>ins1CarrierPhone</td>
<td></td>
</tr>
<tr>
<td>ins1EmployerName</td>
<td></td>
</tr>
<tr>
<td>ins1GroupName</td>
<td></td>
</tr>
<tr>
<td>ins1GroupNum</td>
<td></td>
</tr>
<tr>
<td>ins1SubscriberID</td>
<td></td>
</tr>
<tr>
<td>ins1SubscriberNameF</td>
<td></td>
</tr>
<tr>
<td>ins2CarrierName</td>
<td></td>
</tr>
<tr>
<td>ins2CarrierPhone</td>
<td></td>
</tr>
<tr>
<td>ins2EmployerName</td>
<td></td>
</tr>
<tr>
<td>ins2GroupName</td>
<td></td>
</tr>
<tr>
<td>ins2GroupNum</td>
<td></td>
</tr>
<tr>
<td>ins2SubscriberID</td>
<td></td>
</tr>
<tr>
<td>ins2SubscriberNameF</td>
<td></td>
</tr>
<tr>
<td>LName</td>
<td></td>
</tr>
<tr>
<td>MiddleI</td>
<td></td>
</tr>
<tr>
<td>Preferred</td>
<td>Available for Patient Forms. Patient preferred name</td>
</tr>
<tr>
<td>referredFrom</td>
<td>Available for Patient Forms. Where patient was referred from. </td>
</tr>
<tr>
<td>SSN</td>
<td></td>
</tr>
<tr>
<td>State</td>
<td>Requires two character state abbreviation (e.g., OR, WA, CA). Cannot be used in conjunction with StateNoAbbreviation on the same sheet.</td>
</tr>
<tr>
<td>StateNoValidation</td>
<td>Does not require two character state abbreviation. Cannot be used in conjunction with State on the same sheet. </td>
</tr>
<tr>
<td>WkPhone</td>
<td></td>
</tr>
<tr>
<td>WirelessPhone</td>
<td></td>
</tr>
<tr>
<td>wirelessCarrier</td>
<td></td>
</tr>
<tr>
<td>Zip</td>
<td></td>
</tr>
<tr>
<td>inputMed 1-20</td>
<td>Available for Medical Histories. Input medications. Up to 20 allowed on a sheet.</td>
</tr>
<tr>
<td>labcase.Instructions</td>
<td>Available for Lab Slips. Input lab instructions.</td>
</tr>
<tr>
<td>Grade Level</td>
<td>Available for Exam Sheets. Input patient's grade in school.</td>
</tr>
<tr>
<td>Race/Ethnicity</td>
<td>Available for Exam Sheets. Input patient's race or ethnicity.</td>
</tr>
<tr>
<td>Urgency</td>
<td>Available for Exam Sheets.</td>
</tr>
<tr>
<td>Comments</td>
<td>Available for Exam Sheets. Input additional comments about patient's health.</td>
</tr>
</table>
</div>
</div>
</body>
</html>```
