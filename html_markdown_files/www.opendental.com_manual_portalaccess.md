# File: ./www.opendental.com/manual/portalaccess.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portal Access</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('portalaccess','portalhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/portalaccess.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/portalaccess.html" >v24.2</option><option value="https://www.opendental.com/manual241/portalaccess.html" >v24.1</option><option value="https://www.opendental.com/manual233/portalaccess.html" >v23.3</option><option value="https://www.opendental.com/manual232/portalaccess.html" >v23.2</option><option value="https://www.opendental.com/manual231/portalaccess.html" >v23.1</option><option value="https://www.opendental.com/manual224/portalaccess.html" >v22.4</option><option value="https://www.opendental.com/manual223/portalaccess.html" >v22.3</option><option value="https://www.opendental.com/manual222/portalaccess.html" >v22.2</option><option value="https://www.opendental.com/manual221/portalaccess.html" >v22.1</option><option value="https://www.opendental.com/manual214/portalaccess.html" >v21.4</option><option value="https://www.opendental.com/manual213/portalaccess.html" >v21.3</option><option value="https://www.opendental.com/manual212/portalaccess.html" >v21.2</option><option value="https://www.opendental.com/manual211/portalaccess.html" >v21.1</option><option value="https://www.opendental.com/manual205/portalaccess.html" >v20.5</option><option value="https://www.opendental.com/manual204/portalaccess.html" >v20.4</option><option value="https://www.opendental.com/manual203/portalaccess.html" >v20.3</option><option value="https://www.opendental.com/manual202/portalaccess.html" >v20.2</option><option value="https://www.opendental.com/manual201/portalaccess.html" >v20.1</option><option value="https://www.opendental.com/manual194/portalaccess.html" >v19.4</option><option value="https://www.opendental.com/manual193/portalaccess.html" >v19.3</option><option value="https://www.opendental.com/manual192/portalaccess.html" >v19.2</option><option value="https://www.opendental.com/manual191/portalaccess.html" >v19.1</option><option value="https://www.opendental.com/manual184/portalaccess.html" >v18.4</option><option value="https://www.opendental.com/manual183/portalaccess.html" >v18.3</option><option value="https://www.opendental.com/manual182/portalaccess.html" >v18.2</option><option value="https://www.opendental.com/manual181/portalaccess.html" >v18.1</option><option value="https://www.opendental.com/manual174/portalaccess.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portal Access</p></div>
<div class="GeneralPageContent">
<p>Use the Patient Portal window to provide or remove access to the portal. </p>
<p>In the patient's <a href="chart.html">Chart Module</a>, Patient Information area, double-click the <i>Patient Portal</i> row.</p>
<img src="images/patientportalAccess.png" width="791" height="273"/><p>Alternatively, in the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <b>Provide Online Access</b> next to the <i>ElectronicCopyAccess</i> measure.</p>
<p class="MarginBottomZero">Before access can be granted: </p>
<ul class="MarginBottomGap">
<li>Patient Portal must be enabled in the <a href="eservicessignup.html">eServices Signup</a> Portal.</li>
<li>The <i>Patient Portal</i> row must first be added to Chart Patient Information in <a href="displayfields.html">Display Fields</a>.</li>
<li>The patient must have a name, address, date of birth, email address, and phone number entered in the Family Module.</li>
</ul>
<p><b>Setup</b>: Click to open <a href="portalhostedbyod.html">Patient Portal</a> settings.</p>
<p><b>Provide Online Access</b>: Displays when a patient does not have access. Click to automatically generate a user name and password. </p>
<p><b>Remove Online Access</b>. Displays when a patient has access. Click to remove the patient's ability to login to the portal. </p>
<p><b>Patient Facing URL</b>: The patient portal web address. Click <b>Open</b> to open the URL in a web browser.</p>
<p><b>Online Username</b>: Defaults to the patient's first name plus a random number. The user name is not case sensitive. Patients can change their username after logging into Patient Portal.</p>
<p class="MarginBottomZero"><b>Online Password</b>: Displays the generated password or asterisks if a password already exists. The password is case sensitive. </p>
<ul class="MarginBottomGap">
<li>Click <b>Generate New</b> to assign a random 8-digit one-time use password.</li>
<li>One-time use passwords generated by Open Dental are valid until the patient changes their password, or until a different password is generated in Open Dental (manually or via a sheet or invitation).</li>
<li>The office staff can manually change a password by typing in the field. Passwords must be at least 8 characters and have one uppercase letter, one lowercase letter, and one number. </li>
<li>Patients can change their password after logging into Patient Portal. </li>
</ul>
<p><b>Print</b>: Generate a printout of the user name, password, and the patient portal URL to give to the patient.</p>
<p>For information about what the patients sees when they log in to the portal see <a href="portalpatientsees.html">Patient Portal: What Patient Sees</a> and <a href="authrep.html">Authorized Representatives</a>.</p>
<h2>Alternative Methods to Grant Access</h2>
<p>Option 1: Set up Patient Portal Invites which can be sent via email before or after a scheduled appointment. See <a href="editrule.html">Edit Rule</a>, Patient Portal Invites section for details.</p>
<p class="MarginBottomZero">Option 2: Generate a <a href="sheets.html">Sheet</a> that has the <i>patientPortalCredentials </i><a href="sheetsstatictext.html">Sheet Static Text Field</a> on it. </p>
<ul class="MarginBottomGap">
<li>The credentials only display on the sheet if the patient does not have online access at the time the sheet was created.</li>
<li>Example of text that replaces the <i>patientPortalCredentials</i> static text field:<br/><p class="codeblock">Patient Portal Login</p><p class="codeblock">UserName: Ann123</p><p class="codeblock">Password: xxxxxx</p></li>
</ul>
</div>
</div>
</body>
</html>```
