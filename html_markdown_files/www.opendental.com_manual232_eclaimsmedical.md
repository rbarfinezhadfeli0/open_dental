# File: ./www.opendental.com/manual232/eclaimsmedical.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medical E-Claims</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsmedical','claimsend','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/eclaimsmedical.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclaimsmedical.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsmedical.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsmedical.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsmedical.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclaimsmedical.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsmedical.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsmedical.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsmedical.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsmedical.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsmedical.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsmedical.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsmedical.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsmedical.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsmedical.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsmedical.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsmedical.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsmedical.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsmedical.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsmedical.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsmedical.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsmedical.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsmedical.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsmedical.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsmedical.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsmedical.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsmedical.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsmedical.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medical E-Claims</p></div>
<div class="GeneralPageContent">
<p>When sending <a href="medicalins.html">Medical Insurance</a>, review the following to ensure claims are accepted. </p>
<h2>Insurance Plan</h2>
<p>On the <a href="insplan.html">Insurance Plan</a>, Plan Info Tab, check the <i>Medical Insurance</i> box. This is used for medical and institutional claims, and controls whether claims go out in dental format or in medical/institutional format. Also set the Claim Form to UB04 or 1500, in case paper claims are printed.</p>
<img src="images/medInsBox.png" width="457" height="129"/><h2>Preferences</h2>
<p>The preference, <i>Set medical claims to institutional when using medical insurance</i>, affects all insurance plans set as <i>medical</i> and determines whether claims are created as medical (837-P) or institutional (837-I). This option can be changed for individual claims.</p>
<h2>Claims</h2>
<p>Create the medical claim in the <a href="account.html">Account Module</a>. If the patient has dental insurance and medical insurance, create the medical claim by selecting the procedure(s) and clicking the <b>New Claim</b> dropdown in the toolbar, then <b>Medical</b>. </p>
<img src="images/newMedClaim.png" width="150" height="123"/><p>The <i>Med/Dent </i>and <i>Claim Form</i> settings can be changed on the <a href="claimedit.html">Edit Claim</a> window.</p>
<img src="images/medClaimEdit.png" width="270" height="133"/><h2>Clearinghouse</h2>
<p>In <a href="clearinghouses.html">Clearinghouses</a>, set a default for dental and a separate default for medical/institutional. Dental clearinghouses cannot accept medical or institutional claims. If generating claim files from Open Dental and uploading them manually to Medicaid, set up a clearinghouse to specify the Claim Export Path. The format for dental claims can be 4010 or 5010, and can be freely switched as needed. Medical and institutional claim format are only 5010.</p>
<h2>Technical Details</h2>
<p>When <a href="claimsend.html">Sending Claims</a>, send batches of claims to one clearinghouse at once. To determine the format, information is required from both the claim.MedType and the clearinghouse.Eformat. Neither alone is sufficient. Once messages are generated, they are archived in the etrans table in the database for later retrieval. These archived claims may be seen in the history list at the bottom of the Insurance Claims window. All 4 claim types (med5010, inst5010, dent5010, dent4010) show as "claim sent" in the archival.</p>
</div>
</div>
</body>
</html>```
