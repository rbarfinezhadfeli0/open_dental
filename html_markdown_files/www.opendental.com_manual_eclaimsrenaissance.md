# File: ./www.opendental.com/manual/eclaimsrenaissance.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Renaissance E-Claims</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsrenaissance','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclaimsrenaissance.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclaimsrenaissance.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsrenaissance.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsrenaissance.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsrenaissance.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclaimsrenaissance.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsrenaissance.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsrenaissance.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsrenaissance.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsrenaissance.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsrenaissance.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsrenaissance.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsrenaissance.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsrenaissance.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsrenaissance.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsrenaissance.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsrenaissance.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsrenaissance.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsrenaissance.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsrenaissance.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsrenaissance.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsrenaissance.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsrenaissance.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsrenaissance.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsrenaissance.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsrenaissance.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsrenaissance.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsrenaissance.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Renaissance E-Claims</p></div>
<div class="GeneralPageContent">
<p>Renaissance is an e-claims clearinghouse solution that uses the Remote Lite software. </p>
<p>In <a href="clearinghouses.html">Clearinghouses</a>, double-click Renaissance.</p>
<img src="images/eClaimsRenaissance.png" width="915" height="689"/> 
<h2>Open Dental Setup</h2>
<p>Contact Renaissance to set up an account and install the RemoteLite program. </p>
<p class="MarginBottomZero">Default settings are preset in this window. Verify settings before sending claims. </p>
<ul class="MarginBottomGap">
<li>If using Renaissance Version 5 or greater the Claim Export Path should be changed to <b>C:\Users\Public\RES\DOTR\upload\</b>.</li>
<li>Update the Launch Client Program file path if needed. It should point to the location of the <span class="codeblock">RemoteLite.exe.</span></li>
</ul>
<h2>Claims</h2>
<p>When sending a claim to Renaissance from Open Dental, the Remote Lite program displays with a list of claims that have been created. Click the Send Claims Button at the bottom of the Remote Lite window.</p>
<p>If there is a claim that should not be sent, highlight it and click the red X delete button in RemoteLite. Then go back to Open Dental and change the status of the claim back to <i>Waiting to Send</i>.</p>
<div class="Note">Note: <ul>
<li>If there are more than 8 procedures on a claim, the claim will be rejected. Make sure to send two separate claims in that case, with some procedures on each claim.</li>
<li>Practice address must be on one line. If address includes a suite or unit number, do not use the field for Address 2 in Practice Setup.</li>
</ul>
</div>
<br/><br/><h2>Technical Details</h2>
<p>Renaissance only supports four places of service in their custom electronic claims format. Below are the Open Dental settings for place of service, and how they output to Renaissance. </p>
<table class="simpletable">
<tr>
<th style="width:65%">Open Dental Places of Service</th>
<th style="width:35%">Renaissance Output</th>
</tr>
<tr>
<td>Office</td>
<td>Office</td>
</tr>
<tr>
<td>InpatHospital, OutpatHospital</td>
<td>Hospital</td>
</tr>
<tr>
<td>SkilledNurseFac, CustodialCareFacility</td>
<td>ECF</td>
</tr>
<tr>
<td>PatientsHome, OtherLocation</td>
<td>Other</td>
</tr>
</table>
<br/><p>All other Place of Service codes in Open Dental are not supported by Renaissance and will not output anything to the Renaissance claim.</p>
<p><div class="Note">Note: Renaissance uses its own unique format for claims (not X-12). We do not recommend using a format that is not X-12 format. No validation is done on claims and not as much information can be sent. For example, Renaissance's unique format only allows sending information that can be printed on a claim form. X-12 format allows for 15 different places of service, but Renaissance only allows 4 particular places of service. Some insurance companies reject claims if the place of service is not properly set for specific procedure codes. Some offices choose to use Renaissance anyway. Please bear in mind that our support for Renaissance issues is minimal. </div>
</p>
</div>
</div>
</body>
</html>```
