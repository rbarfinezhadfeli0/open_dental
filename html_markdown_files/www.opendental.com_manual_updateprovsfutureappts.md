# File: ./www.opendental.com/manual/updateprovsfutureappts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Update Provs on Future Appts</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/updateprovsfutureappts.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/updateprovsfutureappts.html" >v24.2</option><option value="https://www.opendental.com/manual241/updateprovsfutureappts.html" >v24.1</option><option value="https://www.opendental.com/manual233/updateprovsfutureappts.html" >v23.3</option><option value="https://www.opendental.com/manual232/updateprovsfutureappts.html" >v23.2</option><option value="https://www.opendental.com/manual231/updateprovsfutureappts.html" >v23.1</option><option value="https://www.opendental.com/manual224/updateprovsfutureappts.html" >v22.4</option><option value="https://www.opendental.com/manual223/updateprovsfutureappts.html" >v22.3</option><option value="https://www.opendental.com/manual222/updateprovsfutureappts.html" >v22.2</option><option value="https://www.opendental.com/manual221/updateprovsfutureappts.html" >v22.1</option><option value="https://www.opendental.com/manual214/updateprovsfutureappts.html" >v21.4</option><option value="https://www.opendental.com/manual213/updateprovsfutureappts.html" >v21.3</option><option value="https://www.opendental.com/manual212/updateprovsfutureappts.html" >v21.2</option><option value="https://www.opendental.com/manual211/updateprovsfutureappts.html" >v21.1</option><option value="https://www.opendental.com/manual205/updateprovsfutureappts.html" >v20.5</option><option value="https://www.opendental.com/manual204/updateprovsfutureappts.html" >v20.4</option><option value="https://www.opendental.com/manual203/updateprovsfutureappts.html" >v20.3</option><option value="https://www.opendental.com/manual202/updateprovsfutureappts.html" >v20.2</option><option value="https://www.opendental.com/manual201/updateprovsfutureappts.html" >v20.1</option><option value="https://www.opendental.com/manual194/updateprovsfutureappts.html" >v19.4</option><option value="https://www.opendental.com/manual193/updateprovsfutureappts.html" >v19.3</option><option value="https://www.opendental.com/manual192/updateprovsfutureappts.html" >v19.2</option><option value="https://www.opendental.com/manual191/updateprovsfutureappts.html" >v19.1</option><option value="https://www.opendental.com/manual184/updateprovsfutureappts.html" >v18.4</option><option value="https://www.opendental.com/manual183/updateprovsfutureappts.html" >v18.3</option><option value="https://www.opendental.com/manual182/updateprovsfutureappts.html" >v18.2</option><option value="https://www.opendental.com/manual181/updateprovsfutureappts.html" >v18.1</option><option value="https://www.opendental.com/manual174/updateprovsfutureappts.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Update Provs on Future Appts</p></div>
<div class="GeneralPageContent">
<p>The Update Provs on Future Appts tool is useful if provider schedules or operatories have changed and scheduled appointments need to be updated.</p>
<p>In <a href="operatories.html">Operatories</a>, double-click an operatory. In the Edit Operatory window, at the bottom, is an <b>Update All</b> button.</p>
<img src="images/updateProvButton.png" width="591" height="516"/><br/><p class="MarginBottomZero">The Update Prov on Future Appts tool changes the provider, hygienist, and clinics (if applicable) on all future appointments. This is useful after a final conversion or when an operatory's provider or hygienist is changed. This tool uses the following logic: </p>
<ul class="MarginBottomGap">
<li>If providers are assigned to <a href="schedule.html">Schedules</a>, the scheduled providers are used.</li>
<li>If providers are not assigned to schedules or schedules are not set up, the providers assigned to the operatory are used.</li>
</ul>
<p>See <a href="schedulesetupexamples.html">Schedule Setup Examples</a> for more information on setting up schedules and operatories. </p>
<h2>Run the Tool</h2>
<p class="MarginBottomZero">Before deciding to run this tool, take the following into consideration: </p>
<ul class="MarginBottomGap">
<li>Running this tool updates the provider and hygienist on every future appointment in the operatory. To only change provider/hygienist on individual appointments, see <a href="aptedit.html">Edit Appointment Window</a> instead.</li>
<li>This tool adds or removes the <i>Is Hygiene</i> flag from appointments to match the <i>Is Hygiene</i> checkbox in <a href="operatoryedit.html">Edit Operatory</a>.</li>
<li>This tool will not remove a Hygienist even if the operatory no longer has a Hygienist assigned, or a Hygienist is not assigned to the operatory schedule.</li>
<li>We recommend creating a backup of the database before running the tool.</li>
<li>The logged-on user must have the <i>Setup</i> and <i>Edit Appointment</i> permissions.</li>
<li>This tool should be run after hours, as it may take a long time to run.</li>
</ul>
<p class="MarginBottomZero">To run the tool: </p>
<ol class="MarginBottomGap">
<li>Check operatory and schedule setup. <ul>
<li>For each operatory, make sure the <a href="operatoryedit.html">Operatory</a> provider and hygienist are set up correctly. </li>
<li>If providers are assigned to operatories in the schedule, ensure the correct providers are assigned to the operatory at the correct times.</li>
</ul>
</li>
<li>Click <b>Update All</b>. </li>
<li>There is a warning of the following:  <ul>
<li>It is recommended to create a database backup before running the tool.</li>
<li>The tool may take a long time to run.</li>
<li>This tool can potentially change hundreds of appointments.</li>
<li>Changes made by the tool must be manually reversed.</li>
</ul>
</li>
<img src="images/updateProvFutureApptsWarning.png" width="410" height="185"/><li>To acknowledge the warning and proceed with running the tool, click <b>Yes</b>.</li>
<li>There is one of two messages: <ul>
<li>If all appointments update successfully, there is a <i>Done</i> message once the process is complete. Click OK to close the message. </li>
<li>If any providers assigned to or scheduled in the operatory have a term date that conflicts with scheduled appointments, there is a warning. <br/><img src="images/updateProvTermDateWarning.png" width="412" height="159" class="ImageInParagraph"/><br/> Appointments up to the term date are updated. To finish updating appointments, update the operatory provider or schedule then run the tool again. Alternatively, remove the term date from the <a href="providerseditwindow.html">Provider</a>.</li>
</ul>
</li>
</ol>
<h2>After a Conversion</h2>
<p>After a Final Conversion, future hygiene appointments may have the hygienist assigned as the primary provider. Once providers, operatories, and schedules are set up, run this tool to update providers on existing appointments to match operatory/scheduled providers.</p>
</div>
</div>
</body>
</html>```
