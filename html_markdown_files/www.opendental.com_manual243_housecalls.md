# File: ./www.opendental.com/manual243/housecalls.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - HouseCalls Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('housecalls','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/housecalls.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/housecalls.html" >v24.2</option><option value="https://www.opendental.com/manual241/housecalls.html" >v24.1</option><option value="https://www.opendental.com/manual233/housecalls.html" >v23.3</option><option value="https://www.opendental.com/manual232/housecalls.html" >v23.2</option><option value="https://www.opendental.com/manual231/housecalls.html" >v23.1</option><option value="https://www.opendental.com/manual224/housecalls.html" >v22.4</option><option value="https://www.opendental.com/manual223/housecalls.html" >v22.3</option><option value="https://www.opendental.com/manual222/housecalls.html" >v22.2</option><option value="https://www.opendental.com/manual221/housecalls.html" >v22.1</option><option value="https://www.opendental.com/manual214/housecalls.html" >v21.4</option><option value="https://www.opendental.com/manual213/housecalls.html" >v21.3</option><option value="https://www.opendental.com/manual212/housecalls.html" >v21.2</option><option value="https://www.opendental.com/manual211/housecalls.html" >v21.1</option><option value="https://www.opendental.com/manual205/housecalls.html" >v20.5</option><option value="https://www.opendental.com/manual204/housecalls.html" >v20.4</option><option value="https://www.opendental.com/manual203/housecalls.html" >v20.3</option><option value="https://www.opendental.com/manual202/housecalls.html" >v20.2</option><option value="https://www.opendental.com/manual201/housecalls.html" >v20.1</option><option value="https://www.opendental.com/manual194/housecalls.html" >v19.4</option><option value="https://www.opendental.com/manual193/housecalls.html" >v19.3</option><option value="https://www.opendental.com/manual192/housecalls.html" >v19.2</option><option value="https://www.opendental.com/manual191/housecalls.html" >v19.1</option><option value="https://www.opendental.com/manual184/housecalls.html" >v18.4</option><option value="https://www.opendental.com/manual183/housecalls.html" >v18.3</option><option value="https://www.opendental.com/manual182/housecalls.html" >v18.2</option><option value="https://www.opendental.com/manual181/housecalls.html" >v18.1</option><option value="https://www.opendental.com/manual174/housecalls.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>HouseCalls Bridge</p></div>
<div class="GeneralPageContent">
<p>TeleVox's HouseCalls delivers automatic appointment reminders.</p>
<p>In <a href="programlinks.html">Program Links</a>, double-click on <b>HouseCalls</b>.</p>
<img src="images/bridgeHousecalls.png" width="770" height="594"/><p>HouseCalls is a patient engagement platform. Website: <a href="https://televox.com/" target="_blank">https://televox.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings. <ol>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Verify the <b>Export Path</b>.</li>
</ol>
</li>
<li>Set up a clickable bridge button. <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
</ol>
</li>
</ol>
<h2>Technical Details</h2>
<p>The data is always exported to a file called Appt.txt in the Export Path specified. The file is a simple comma-delimited text file which has the following columns:</p>
<p><span class="codeblock">LastName</span><br/><span class="codeblock">FirstName</span> (or Preferred Name, if exists)<br/><span class="codeblock">PatientNumber </span>(Can be PatNum or ChartNumber, depending on what user selected)<br/><span class="codeblock">HomePhone</span><br/><span class="codeblock">WorkNumber</span><br/><span class="codeblock">EmailAddress</span><br/><span class="codeblock">SendEmail</span> (if email address exists.)<br/><span class="codeblock">Address</span><br/><span class="codeblock">Address2</span> (although they did not offer this as an option)<br/><span class="codeblock">CityStateZip</span><br/><span class="codeblock">ApptDate</span><br/><span class="codeblock">ApptTime</span><br/><span class="codeblock">ApptReason </span>(procedure descriptions)<br/><span class="codeblock">DoctorNumber</span> (patient primary provider)<br/><span class="codeblock">DoctorName</span><br/><span class="codeblock">IsNew</span><br/><span class="codeblock">PatientWirelessPhone</span></p>
<p>Click the HouseCalls button, then select a date range of appointments to confirm:</p>
<img src="images/housecallsOptions.png" width="488" height="263"/><p>Click OK to create the text file. The HouseCalls software upload the text file sometime in the middle of the night.</p>
</div>
</div>
</body>
</html>```
