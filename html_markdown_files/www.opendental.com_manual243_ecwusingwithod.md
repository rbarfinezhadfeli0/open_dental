# File: ./www.opendental.com/manual243/ecwusingwithod.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Using eCW</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ecwusingwithod','bridgeeclinicalworks','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ecwusingwithod.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ecwusingwithod.html" >v24.2</option><option value="https://www.opendental.com/manual241/ecwusingwithod.html" >v24.1</option><option value="https://www.opendental.com/manual233/ecwusingwithod.html" >v23.3</option><option value="https://www.opendental.com/manual232/ecwusingwithod.html" >v23.2</option><option value="https://www.opendental.com/manual231/ecwusingwithod.html" >v23.1</option><option value="https://www.opendental.com/manual224/ecwusingwithod.html" >v22.4</option><option value="https://www.opendental.com/manual223/ecwusingwithod.html" >v22.3</option><option value="https://www.opendental.com/manual222/ecwusingwithod.html" >v22.2</option><option value="https://www.opendental.com/manual221/ecwusingwithod.html" >v22.1</option><option value="https://www.opendental.com/manual214/ecwusingwithod.html" >v21.4</option><option value="https://www.opendental.com/manual213/ecwusingwithod.html" >v21.3</option><option value="https://www.opendental.com/manual212/ecwusingwithod.html" >v21.2</option><option value="https://www.opendental.com/manual211/ecwusingwithod.html" >v21.1</option><option value="https://www.opendental.com/manual205/ecwusingwithod.html" >v20.5</option><option value="https://www.opendental.com/manual204/ecwusingwithod.html" >v20.4</option><option value="https://www.opendental.com/manual203/ecwusingwithod.html" >v20.3</option><option value="https://www.opendental.com/manual202/ecwusingwithod.html" >v20.2</option><option value="https://www.opendental.com/manual201/ecwusingwithod.html" >v20.1</option><option value="https://www.opendental.com/manual194/ecwusingwithod.html" >v19.4</option><option value="https://www.opendental.com/manual193/ecwusingwithod.html" >v19.3</option><option value="https://www.opendental.com/manual192/ecwusingwithod.html" >v19.2</option><option value="https://www.opendental.com/manual191/ecwusingwithod.html" >v19.1</option><option value="https://www.opendental.com/manual184/ecwusingwithod.html" >v18.4</option><option value="https://www.opendental.com/manual183/ecwusingwithod.html" >v18.3</option><option value="https://www.opendental.com/manual182/ecwusingwithod.html" >v18.2</option><option value="https://www.opendental.com/manual181/ecwusingwithod.html" >v18.1</option><option value="https://www.opendental.com/manual174/ecwusingwithod.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Using eCW</p></div>
<div class="GeneralPageContent">
<p>Below are general steps for using Open Dental within the <a href="bridgeeclinicalworks.html">eClinicalWorks</a> interface.</p>
<ol>
<li>In eCW, create the patient if one doesn't already exist.</li>
<li>In eCW, create the appointment. Select Dental as the Visit Type. If you create new dental visit types, open a ticket with eCW and request that they map them as Dental visit types.</li>
<li>From eCW, launch Open Dental. There are three ways:  <ul>
<li>From the Resource Scheduler, right click on the appointment and click View Dental Chart.</li>
<li>From the Progress Notes, click the green arrow next to Details, then click View Dental Chart.</li>
<li>From the Scheduling Button (aka the SO Jellybean), locate your encounter by specifying provider, facility, date, etc. Double click it to open.</li>
</ul>
<p>Open Dental will launch with the Chart Module open:</p>
<img src="images/ecwChart.gif" width="915" height="674"/></li>
<li>Verify the appointment shows in the Clinical Notes, as well as any treatment planned procedures. If for today, the appointment and procedures will highlight yellow. <br/><div class="Note">Note: It can take up to 60 seconds for the appointment to show in Open Dental. If you do not see it after this amount of time, contact us immediately at 503-363-5432 or <a href="mailto:ecw@opendental.com">ecw@opendental.com</a>.</div>
</li>
<li>Add procedures to the chart for today and the future. See <a href="chart.html">Chart Module</a>, <a href="entertreatment.html">Enter Treatment</a>, <a href="treatmentplan.html">Treatment Plan Module</a>.</li>
<li>Attach the procedures completed today to the appointment. <ul>
<li>Double click on the appointment in the Clinical Notes. Any treatment planned procedures will show under Procedures on this Appointment.</li>
<li>Highlight the procedures to attach. They will turn light grey.</li>
</ul>
<img src="images/ecwAptEdit.gif" width="915" height="678"/></li>
<li>Click Finish and Send to send the procedures to eCW. This will set both the appointment and procedures complete. You only get one chance to send procedures to eCW using Finish and Send. If you make a mistake, or do not see Finish and Send, see Troubleshooting below. Hint: In Open Dental, open the appointment at any time and click Notes PDF to send an updated copy of your notes to the Patient Documents in eCW.</li>
<li>Verify that the procedures and any PDFs show in eCW. <ul>
<li>Procedure Codes show in the patient's progress notes, under Billing Information (scroll to the bottom). <br/><img src="images/ecwProcs.gif" width="375" height="145" class="ImageInParagraph"/></li>
<li>PDFs of progress notes and any saved treatment plans show In the medical panel, under the DRTLA tab, Documents.</li>
</ul>
<br/><img src="images/ecwDRTLA.gif" width="641" height="513" class="ImageInParagraph"/></li>
</ol>
<div class="Note">Note: If procedures show in the progress notes but the Progress Notes/Treatment Plan PDFs do not, open a ticket with eCW and tell them PDFs are not importing correctly from Open Dental.</div>
<br/><br/><h2>Troubleshooting</h2>
<ul>
<li>If you send the appointment and then realize the attached procedures are incorrect, you must manually fix the procedures in both Open Dental and in eCW.</li>
<li>If you see a Revise instead of Finish and Send, the appointment has already been sent to eCW and cannot be sent again. The Revise button can be used to make changes, but they will not show in eCW</li>
<li>If Finish and Send is grayed out, you must re-launch Open Dental from the correct appointment in eCW. Only the appointment that you use to launch Open Dental can be sent back to eCW.</li>
</ul>
</div>
</div>
</body>
</html>```
