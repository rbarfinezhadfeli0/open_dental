# File: ./www.opendental.com/manual243/eclaimsemdeonmedical.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Change Healthcare Medical E-Claims</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsemdeonmedical','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclaimsemdeonmedical.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclaimsemdeonmedical.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsemdeonmedical.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsemdeonmedical.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsemdeonmedical.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclaimsemdeonmedical.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsemdeonmedical.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsemdeonmedical.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsemdeonmedical.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsemdeonmedical.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsemdeonmedical.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsemdeonmedical.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsemdeonmedical.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsemdeonmedical.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsemdeonmedical.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsemdeonmedical.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsemdeonmedical.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsemdeonmedical.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsemdeonmedical.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsemdeonmedical.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsemdeonmedical.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsemdeonmedical.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsemdeonmedical.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsemdeonmedical.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsemdeonmedical.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsemdeonmedical.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsemdeonmedical.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsemdeonmedical.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Change Healthcare Medical E-Claims</p></div>
<div class="GeneralPageContent">
<p>In <a href="clearinghouses.html">Clearinghouses</a>, double-click Emdeon Medical.</p>
<img src="images/eClaimsEmdeonMedical.png" width="915" height="689"/><p>Change Healthcare is not a recommended clearinghouse solution. It appears Change Healthcare has stopped providing clearinghouse services after a cyber attack that took place in early 2024. </p>
<h2>Signup &amp; Setup</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Fill out this registration form (right-click to save file): <a href="http://opendental.com/resources/EmdeonEnrollmentForm.docx">Emdeon Enrollment Form</a></li>
<li>Within 3 to 5 business days of receipt, an Emdeon rep will deliver the ITS credentials (used in step 4), discuss payor agreement requirements, and review reporting and support tools.</li>
<li>In Open Dental, <a href="showfeatures.html">Show Features</a>, enable <i>Medical Insurance</i>.</li>
<li>In Open Dental, set up the Emdeon Medical clearinghouse (shown above). Enter the user name and password provided by Emdeon, then click OK to save. </li>
</ol>
<h2>Electronic Attachments</h2>
<p>Medical attachments cannot be sent through Open Dental. Most medical payers do not accept electronic attachments. However, it may be possible to send electronic attachments to a few select carriers with a third party application called <a href="https://vynemedical.com/our-products/fastattach/" target="_blank">NEA FastAttach</a> (Vyne Medical). Emdeon Medical is directly integrated with FastAttach. Contact Emdeon Medical or FastAttach support lines for details.</p>
<h2>ERA Automatic Downloads</h2>
<p>Emdeon Medical supports automatic downloads of <a href="claimsera835.html">ERAs</a>. Setup a Report Path, and select Download ERAs to enable in Open Dental. Contact Change Healthcare to enable this option for the practice. </p>
<h2>Viewing Status of Sent Claims</h2>
<p>Log into the Emdeon Vision online portal at <a href="https://access.emdeon.com/">https://access.emdeon.com/</a> to see the status of sent claims. Contact Emdeon Medical for details.</p>
<h2>Troubleshooting</h2>
<p><b>Problem: When I submit e-claims, I get the error message "Medicare Assignment is required."</b></p>
<p>Solution: There are two known reasons why this error can occur. Either the claims were submitted with an older version of Open Dental, or the Filing Code on the <a href="insplan.html">Insurance Plan</a> was not set to the proper Medicare option (the most common option is MedicarePartB).</p>
<p><b>Problem: I receive an error message in the Emdeon Vision online portal stating "Billing Provider Taxonomy Code: Required; Must be entered for Payer."</b></p>
<p>Solution: The claim billing and treating provider must be the same for any claim sent to the insurance carrier in question. Most carriers do not require this extra step. However, in some states, Medicare and Medicaid sometimes have this extra requirement.</p>
</div>
</div>
</body>
</html>```
