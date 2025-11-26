# File: ./www.opendental.com/manual/econfirmationsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eConfirmations</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('econfirmationsetup','automatedmessaging','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/econfirmationsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/econfirmationsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/econfirmationsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/econfirmationsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/econfirmationsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/econfirmationsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/econfirmationsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/econfirmationsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/econfirmationsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/econfirmationsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/econfirmationsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/econfirmationsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/econfirmationsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/econfirmationsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/econfirmationsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/econfirmationsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/econfirmationsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/econfirmationsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/econfirmationsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/econfirmationsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/econfirmationsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/econfirmationsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/econfirmationsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/econfirmationsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/econfirmationsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/econfirmationsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/econfirmationsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/econfirmationsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eConfirmations</p></div>
<div class="GeneralPageContent">
<p>eConfirmations are automated text messages about upcoming appointments that also allow the patient to confirm their appointment.</p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <a href="automatedmessaging.html">Automated Messaging</a>.</p>
<img src="images/eConfirmationSetup.png" width="915" height="539"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/>See our video: <a href="https://youtu.be/YuKNAHdNC9g">Automated Messaging</a>.</li>
<li> eConfirmations is a paid service. For signup and pricing, see <a href="eservicessignup.html">eServices Signup</a>.</li>
<li>Also see <a href="eremindertroubleshooting.html">eReminder and eConfirmation Troubleshooting</a>.</li>
</ul>
<p>When sending eConfirmations, the practice can send a confirmation code (e.g., reply C to confirm) or have the patient click a URL to confirm. </p>
<h2>Activate / Deactivate eConfirmations</h2>
<p>eConfirmations can be activated or deactivated as needed.</p>
<img src="images/eConfirmationsActivateDeactivate.png" width="353" height="228"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>To enable eConfirmations, click <b>Activate eConfirmations</b>. The eConfirmation row displays in green with a status of <i>Active</i>.</li>
<li>To disable eConfirmations, click <b>Deactivate eConfirmations</b>. The eConfirmations row displays in red with a status of <i>Inactive</i>.</li>
</ul>
<p>After activating eConfirmations, set up eConfirmation Rules.</p>
<h2>eConfirmation Rules</h2>
<p>To edit an existing eConfirmation Rule, double-click a Confirmation Rule from the Automated Messaging Rules grid. To add a new rule, click <b>Add eConfirmation</b>.</p>
<p>eConfirmation messages can include the [AddToCalendar] tag so patients can add the appointment to the calendar on their device.</p>
<p>For information on adding and editing rules, see <a href="editrule.html">Edit Rule</a>.</p>
<h2>eConfirmation Exclusions</h2>
<p>To exclude eConfirmations from being sent on certain days of the week (e.g., weekends), or certain days (e.g., holidays), set the <a href="econfirmationexclusiondays.html">eConfirmation and Web Sched Recall Exclusion Days</a>.</p>
</div>
</div>
</body>
</html>```
