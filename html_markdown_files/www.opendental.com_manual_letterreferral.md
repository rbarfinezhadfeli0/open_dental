# File: ./www.opendental.com/manual/letterreferral.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Referral Letter</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('letterreferral','letterspatient','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/letterreferral.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/letterreferral.html" >v24.2</option><option value="https://www.opendental.com/manual241/letterreferral.html" >v24.1</option><option value="https://www.opendental.com/manual233/letterreferral.html" >v23.3</option><option value="https://www.opendental.com/manual232/letterreferral.html" >v23.2</option><option value="https://www.opendental.com/manual231/letterreferral.html" >v23.1</option><option value="https://www.opendental.com/manual224/letterreferral.html" >v22.4</option><option value="https://www.opendental.com/manual223/letterreferral.html" >v22.3</option><option value="https://www.opendental.com/manual222/letterreferral.html" >v22.2</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Referral Letter</p></div>
<div class="GeneralPageContent">
<p>In the <a href="toolbar.html">Main Toolbar</a>, click the <a href="letterspatient.html">Letter</a> dropdown.</p>
<img src="images/letterReferral.png" width="242" height="135"/>
<p>Referral Letters can be used with <a href="automation.html">Automation</a>.</p>
<p class="MarginBottomZero">To create a referral letter: </p>
<ul class="MarginBottomGap">
<ul>
<li>At least one custom referral letter sheet must be set up. See <a href="sheetsreferrals.html">Referral Letter Layout</a>.</li>
<li>There must be a <a href="referrals.html">Referrals</a> attached to the currently selected patient.</li>
</ul>
</ul>
<p> All referrals attached to the currently selected patient are listed under <i>Referrals</i>. Select the referral name and the Pick Sheet window opens.</p>
<img src="images/letterReferralPick.png" width="460" height="214"/><p>Double-click a sheet to use letter and the <a href="sheetsfillout.html">Fill Sheet</a> opens.</p>
<p class="MarginBottomZero">The referral letter can be edited from this window.  </p>
<ul class="MarginBottomGap">
<li>The default content of the letter is defined in <a href="sheetsetup.html">Edit Sheet Def</a>. </li>
<li>Text on the letter is editable. Click in the letter and begin to type to make changes.</li>
</ul>
<img src="images/letterReferralExample.png" width="900" height="660"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If a referral letter contains the <i>ReferralLetterProceduresCompleted</i> grid or tooth chart, it will be saved as a PDF in the Imaging Module under Letters.</li>
<li>Referral Letters saved to the Imaging Module can be deleted from the right-click menu from the Chart Module.</li>
</ul>
<p>Use the options at the bottom of the Fill Sheet window to send the letter. Sent letters can be viewed in the patient's Chart Module and Account Module.</p>
</div>
</div>
</body>
</html>```
