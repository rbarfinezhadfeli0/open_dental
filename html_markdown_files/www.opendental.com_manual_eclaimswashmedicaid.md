# File: ./www.opendental.com/manual/eclaimswashmedicaid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Washington Medicaid E-Claims</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimswashmedicaid','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclaimswashmedicaid.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclaimswashmedicaid.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimswashmedicaid.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimswashmedicaid.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimswashmedicaid.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclaimswashmedicaid.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimswashmedicaid.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimswashmedicaid.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimswashmedicaid.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimswashmedicaid.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimswashmedicaid.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimswashmedicaid.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimswashmedicaid.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimswashmedicaid.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimswashmedicaid.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimswashmedicaid.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimswashmedicaid.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimswashmedicaid.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimswashmedicaid.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimswashmedicaid.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimswashmedicaid.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimswashmedicaid.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimswashmedicaid.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimswashmedicaid.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimswashmedicaid.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimswashmedicaid.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimswashmedicaid.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimswashmedicaid.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Washington Medicaid E-Claims</p></div>
<div class="GeneralPageContent">
<p>Washington Medicaid is an E-Claims Direct Carrier. </p>
<p>In <a href="clearinghouses.html">Clearinghouses</a>, click Add.</p>
<img src="images/eclaimsWashMedicaid.png" width="915" height="689"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Washington Medicaid web portal: <a href="https://www.waproviderone.org/ecams/jsp/common/pgLogin.jsp" target="_blank">ProviderOne</a></li>
<li>Washington Medicaid website: <a href="https://www.hca.wa.gov/billers-providers-partners" target="_blank">https://www.hca.wa.gov/billers-providers-partners</a>.</li>
</ul>
<p class="MarginBottomZero">Other Resources:  </p>
<ul class="MarginBottomGap">
<li>Dental Provider Guide: <a href="https://www.hca.wa.gov/billers-providers-partners/programs-and-services/dental-services" target="_blank">https://www.hca.wa.gov/billers-providers-partners/programs-and-services/dental-services</a></li>
<li>HIPAA/EDI web page: <a href="https://www.hca.wa.gov/billers-providers-partners/prior-authorization-claims-and-billing/hipaa-electronic-data-interchange-edi" target="_blank">https://www.hca.wa.gov/billers-providers-partners/prior-authorization-claims-and-billing/hipaa-electronic-data-interchange-edi</a></li>
</ul>
<h2>Setup</h2>
<p class="MarginBottomZero">The Colorado Medicaid clearinghouse must be manually added to Open Dental. Set up the clearinghouse as follows: </p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Enter <i>WA State HCA</i>.</li>
<li><b>Authorization Information</b>: Enter <i>00</i>.</li>
<li><b>Sender ID Qualifier</b>: Enter <i>ZZ</i>.</li>
<li><b>Tax ID Number</b>: 9 digits. Find the Tax ID Number in the ProviderOne portal (a 7 digit number), then add two trailing zeros at the end. </li>
<li><b>Name</b>: Enter the practice name.</li>
<li><b>Telephone Number</b>: Enter the practice phone number.</li>
<li><b>Receiver ID Qualifier</b>: Enter <i>ZZ</i>.</li>
<li><b>Clearinghouse ID</b>: Enter <i>77045</i>.</li>
<li><b>GS03</b>: Enter <i>77045</i>.</li>
<li><b>Test or Production</b>: Enter <i>P</i>.</li>
<li><b>Claim Export Path</b>: Typically <b>C:\Washington Medicaid\</b>.</li>
<li><b>Format</b>: Select <i>x837D_5010_dental</i>.</li>
<li><b>Payors</b>: Enter <i>77045</i>.</li>
</ul>
<p>In the <a href="carriers.html">Carriers</a> list, create a carrier for WA State HCA.</p>
<img src="images/eclaimsWashMedicaidCarrier.png" width="546" height="465"/><p>Ensure all Washington Medicaid insurance plans use the WA State HCA carrier, and the insurance filing code <i>Medicaid</i> (<a href="insplan.html">Insurance Plan</a>).</p>
<h2>Claims</h2>
<p class="MarginBottomZero">To send claims: </p>
<ol class="MarginBottomGap">
<li>In the <a href="claimsend.html">Send Claims</a> window, select the claims for Washington Medicaid. Click the <i>Send E-Claims</i> dropdown and select <i>Washington Medicaid</i> from the list.</li>
<li>In the Windows file explorer, go to <b>C:\Washington Medicaid\</b>. Change the extensions on the newest files from TXT to DAT. </li>
<li>Log into the ProviderOne portal. <ul>
<li>Find the Batch Claims Submission (837) link.</li>
<li>Upload each new DAT file created.</li>
</ul>
</li>
<li>After 15 minutes, the files should register in ProviderOne.  <ul>
<li>Go to the Retrieve HIPAA Batch Responses link. Select 837D from the Transaction Type dropdown menu.</li>
<li>Change the first filter to Upload/Sent Date and type today's date in the box to the right.</li>
<li>Click Go. One line displays for each file uploaded.</li>
<li>For each file, click the Custom Report Response File link to view any errors in the claim format.</li>
</ul>
</li>
<li>The next day, use the Claim Inquiry link to look up each claim and verify that it will be paid.</li>
</ol>
</div>
</div>
</body>
</html>```
