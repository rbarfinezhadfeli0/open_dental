# File: ./www.opendental.com/manual/ecwprocedures.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eCW Procedures</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ecwprocedures','bridgeeclinicalworks','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ecwprocedures.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ecwprocedures.html" >v24.2</option><option value="https://www.opendental.com/manual241/ecwprocedures.html" >v24.1</option><option value="https://www.opendental.com/manual233/ecwprocedures.html" >v23.3</option><option value="https://www.opendental.com/manual232/ecwprocedures.html" >v23.2</option><option value="https://www.opendental.com/manual231/ecwprocedures.html" >v23.1</option><option value="https://www.opendental.com/manual224/ecwprocedures.html" >v22.4</option><option value="https://www.opendental.com/manual223/ecwprocedures.html" >v22.3</option><option value="https://www.opendental.com/manual222/ecwprocedures.html" >v22.2</option><option value="https://www.opendental.com/manual221/ecwprocedures.html" >v22.1</option><option value="https://www.opendental.com/manual214/ecwprocedures.html" >v21.4</option><option value="https://www.opendental.com/manual213/ecwprocedures.html" >v21.3</option><option value="https://www.opendental.com/manual212/ecwprocedures.html" >v21.2</option><option value="https://www.opendental.com/manual211/ecwprocedures.html" >v21.1</option><option value="https://www.opendental.com/manual205/ecwprocedures.html" >v20.5</option><option value="https://www.opendental.com/manual204/ecwprocedures.html" >v20.4</option><option value="https://www.opendental.com/manual203/ecwprocedures.html" >v20.3</option><option value="https://www.opendental.com/manual202/ecwprocedures.html" >v20.2</option><option value="https://www.opendental.com/manual201/ecwprocedures.html" >v20.1</option><option value="https://www.opendental.com/manual194/ecwprocedures.html" >v19.4</option><option value="https://www.opendental.com/manual193/ecwprocedures.html" >v19.3</option><option value="https://www.opendental.com/manual192/ecwprocedures.html" >v19.2</option><option value="https://www.opendental.com/manual191/ecwprocedures.html" >v19.1</option><option value="https://www.opendental.com/manual184/ecwprocedures.html" >v18.4</option><option value="https://www.opendental.com/manual183/ecwprocedures.html" >v18.3</option><option value="https://www.opendental.com/manual182/ecwprocedures.html" >v18.2</option><option value="https://www.opendental.com/manual181/ecwprocedures.html" >v18.1</option><option value="https://www.opendental.com/manual174/ecwprocedures.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eCW Procedures</p></div>
<div class="GeneralPageContent">
<p>When using Open Dental in Tight Integration with <a href="bridgeeclinicalworks.html">eClinicalWorks</a>, as procedures are completed in Open Dental, they are sent to eCW for billing and claim purposes. This section assumes that the appointment (encounter) was previously created in eCW.</p>
<h2>Send a Procedure to eCW</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Access Open Dental from eCW by selecting View Dental Chart. The VisitID/AptNum is passed silently to Open Dental and an appointment will show in the Chart. It was transferred there via HL7 within 70 seconds of the last appointment edit in eCW.</li>
<li>If you haven't already added today's treatment planned procedures, chart the procedures with status treatment planned. See <a href="entertreatment.html">Enter Treatment</a>.</li>
<li>In the <a href="chart.html">Chart Module</a>, double click on today's appointment to see treatment planned procedures. Highlight the procedures to attach. Any other procedures that have been completed already will be automatically highlighted.</li>
<li>Verify the correct provider is attached to the appointment.</li>
<li>Change the appointment status from <i>Scheduled</i> to <i>Complete</i>, then click OK.</li>
<li>This will generate any default <a href="procedurenotes.html">Procedure Notes</a>, mark the procedures as <i>Complete</i> (which does not mean you are finished, only that these are the procedures you have done today), and apply the associated provider to the completed procedures.</li>
<li>If you use <a href="procgroupnote.html">Procedure Group Note</a>, highlight your completed procedures, then right click and select Group Note to enter.</li>
<li>During the course of the appointment, procedures may still be altered, added, removed, etc.</li>
<li>When patient treatment is done, open the appointment and check the procedures one last time for accuracy.</li>
<li>Signatures and procedure notes are verified prior to Finish &amp; Send if boxes <i>Require Signatures for Procedure Notes</i> and <i>Don't Allow Incomplete Procedure Notes</i> are checked.</li>
<li>Click Finish &amp; Send to close Open Dental and send the procedures to eCW. The Finish &amp; Send button is labeled Complete prior to version 12.4.47.</li>
</ol>
<p>If the procedures were sent incorrectly and need to be altered, open the appointment again and click Revise. This allows you to fix them in Open Dental. They will also need to be separately fixed in eCW. The user must have the security permission <i>EcwAppointmentRevise</i> in order to revise.</p>
<h2>Duplicate Procedures</h2>
<p class="MarginBottomZero">Duplicate procedures are checked for and removed from HL7 messages. In order to send more than one of the same procedure, there must be a distinguishing characteristic (e.g. tooth number, tooth range, surface, or procedure fee). The recommended property is tooth number. We do not recommend procedure fee. </p>
<ul class="MarginBottomGap">
<li>If it is a filling or crown, the distinguishing characteristic is Tooth Number.</li>
<li>If a procedure doesn't have a tooth treatment area, create a dummy code that will have that treatment area. For example, to add multiple PA's, create a code D0230b with a treatment area of tooth. For each additional PA you complete for the patient, select a different tooth so they all show up in the HL7 DFT message. The HL7 service will remove any characters after the first five digits, so the 'b' would not be included in the DFT message.</li>
</ul>
<h2>Full-mouth Series Procedure Button</h2>
<p class="MarginBottomZero">A custom procedure button can be set up to handle a 6 PA series. The button must be set up exactly like this: </p>
<ul class="MarginBottomGap">
<li>Procedure code for PA must be area <i>mouth</i>, and must have an abbreviation of <i>PA</i>. The ordinary PA code can be used.</li>
<li>Procedure code for PA+ must be created that is different than the normal PA+ code. See Duplicate Procedures above. The second PA+ code must have an area of <i>Tooth</i> and must have a abbreviation of <i>PA+</i>.</li>
<li>A procedure button must be created so that it has these exact six codes on it: <i>PA, PA+, PA+, PA+, PA+, PA+</i>.</li>
</ul>
<p>When the button is used, it will create a PA with no tooth number as well as 5 additional PAs with tooth numbers of 8,14,19,24, and 30. These procedures will not trigger the duplicate procedures warning for HL7 because they have unique tooth numbers to distinguish them.</p>
</div>
</div>
</body>
</html>```
