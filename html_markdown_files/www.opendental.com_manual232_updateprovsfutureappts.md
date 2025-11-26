# File: ./www.opendental.com/manual232/updateprovsfutureappts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Update Provs on Future Appts</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('updateprovsfutureappts','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/updateprovsfutureappts.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/updateprovsfutureappts.html" >v24.2</option><option value="https://www.opendental.com/manual241/updateprovsfutureappts.html" >v24.1</option><option value="https://www.opendental.com/manual233/updateprovsfutureappts.html" >v23.3</option><option value="https://www.opendental.com/manual232/updateprovsfutureappts.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/updateprovsfutureappts.html" >v23.1</option><option value="https://www.opendental.com/manual224/updateprovsfutureappts.html" >v22.4</option><option value="https://www.opendental.com/manual223/updateprovsfutureappts.html" >v22.3</option><option value="https://www.opendental.com/manual222/updateprovsfutureappts.html" >v22.2</option><option value="https://www.opendental.com/manual221/updateprovsfutureappts.html" >v22.1</option><option value="https://www.opendental.com/manual214/updateprovsfutureappts.html" >v21.4</option><option value="https://www.opendental.com/manual213/updateprovsfutureappts.html" >v21.3</option><option value="https://www.opendental.com/manual212/updateprovsfutureappts.html" >v21.2</option><option value="https://www.opendental.com/manual211/updateprovsfutureappts.html" >v21.1</option><option value="https://www.opendental.com/manual205/updateprovsfutureappts.html" >v20.5</option><option value="https://www.opendental.com/manual204/updateprovsfutureappts.html" >v20.4</option><option value="https://www.opendental.com/manual203/updateprovsfutureappts.html" >v20.3</option><option value="https://www.opendental.com/manual202/updateprovsfutureappts.html" >v20.2</option><option value="https://www.opendental.com/manual201/updateprovsfutureappts.html" >v20.1</option><option value="https://www.opendental.com/manual194/updateprovsfutureappts.html" >v19.4</option><option value="https://www.opendental.com/manual193/updateprovsfutureappts.html" >v19.3</option><option value="https://www.opendental.com/manual192/updateprovsfutureappts.html" >v19.2</option><option value="https://www.opendental.com/manual191/updateprovsfutureappts.html" >v19.1</option><option value="https://www.opendental.com/manual184/updateprovsfutureappts.html" >v18.4</option><option value="https://www.opendental.com/manual183/updateprovsfutureappts.html" >v18.3</option><option value="https://www.opendental.com/manual182/updateprovsfutureappts.html" >v18.2</option><option value="https://www.opendental.com/manual181/updateprovsfutureappts.html" >v18.1</option><option value="https://www.opendental.com/manual174/updateprovsfutureappts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Update Provs on Future Appts</p></div>
<div class="GeneralPageContent">
<p>The Update Provs on Future Appts tool is useful if provider schedules or operatories have changed and scheduled appointments need to be updated.</p>
<p>In <a href="operatories.html">Operatories</a>, double-click an operatory. In the Edit Operatory window, at the bottom, is an <b>Update All</b> button.</p>
<img src="images/updateProvButton.png" width="584" height="488"/><br/><p class="MarginBottomZero">The Update Prov on Future Appts tool changes the provider, hygienist, and clinics (if applicable) on all future appointments. This is useful when you change an operatory's provider or hygienist, or after a final conversion. It follows typical provider logic.  </p>
<ul class="MarginBottomGap">
<li>If <a href="schedule.html">Schedules</a> are set up, the scheduled providers will be used.</li>
<li>If schedules are not set up, the providers assigned to the operatory will be used.</li>
</ul>
<h2>Run the Tool</h2>
 Before running the tool: <p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>For each operatory, make sure the operatory provider and hygienist are set correctly. See <a href="operatories.html">Operatories</a>.</li>
<li> If using schedules, ensure the provider is assigned to the correct operatories under Setup, Schedules.</li>
</ul>
<p>Click <b>Update All</b>. When the warning prompt appears, click <b>Yes</b> to start running the tool. </p>
<p><img src="images/updateProvFutureApptsWarning.png" width="410" height="185"/></p>
<p>A Done message will indicate when the tool is finished running. Click OK to close.</p>
<div class="Note">Note: <ul>
<li>Running this tool will update the provider and hygienist on every future appointment in the operatory. To only change provider/hygienist on individual appointments, see <a href="aptedit.html">Edit Appointment Window</a> instead.</li>
<li>This tool will not remove the <i>Is Hygiene</i> flag from the appointment, even if <i>Is Hyg</i> is not checked in the operatory setup.</li>
<li>This tool will not remove a Hygienist even if the operatory no longer has a Hygienist assigned, or a Hygienist is assigned to the operatory schedule.</li>
<li>We recommend backing up your data before running the tool.</li>
<li>The logged-on user must have the <i>Setup</i> and <i>Edit Appointment</i> permissions.</li>
<li>This tool should be run after hours, as it may take a long time to run.</li>
</ul>
</div>
<br/><br/><h2>After a Conversion</h2>
<p>After a Final Conversion, future hygiene appointments may have the hygienist assigned as the primary provider. Once providers and operatories are setup, you should update appointment providers to match operatory providers.</p>
</div>
</div>
</body>
</html>```
