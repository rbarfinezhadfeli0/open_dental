# File: ./www.opendental.com/manual232/procedurelocking.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Procedure Lock</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('procedurelocking','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/procedurelocking.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/procedurelocking.html" >v24.2</option><option value="https://www.opendental.com/manual241/procedurelocking.html" >v24.1</option><option value="https://www.opendental.com/manual233/procedurelocking.html" >v23.3</option><option value="https://www.opendental.com/manual232/procedurelocking.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/procedurelocking.html" >v23.1</option><option value="https://www.opendental.com/manual224/procedurelocking.html" >v22.4</option><option value="https://www.opendental.com/manual223/procedurelocking.html" >v22.3</option><option value="https://www.opendental.com/manual222/procedurelocking.html" >v22.2</option><option value="https://www.opendental.com/manual221/procedurelocking.html" >v22.1</option><option value="https://www.opendental.com/manual214/procedurelocking.html" >v21.4</option><option value="https://www.opendental.com/manual213/procedurelocking.html" >v21.3</option><option value="https://www.opendental.com/manual212/procedurelocking.html" >v21.2</option><option value="https://www.opendental.com/manual211/procedurelocking.html" >v21.1</option><option value="https://www.opendental.com/manual205/procedurelocking.html" >v20.5</option><option value="https://www.opendental.com/manual204/procedurelocking.html" >v20.4</option><option value="https://www.opendental.com/manual203/procedurelocking.html" >v20.3</option><option value="https://www.opendental.com/manual202/procedurelocking.html" >v20.2</option><option value="https://www.opendental.com/manual201/procedurelocking.html" >v20.1</option><option value="https://www.opendental.com/manual194/procedurelocking.html" >v19.4</option><option value="https://www.opendental.com/manual193/procedurelocking.html" >v19.3</option><option value="https://www.opendental.com/manual192/procedurelocking.html" >v19.2</option><option value="https://www.opendental.com/manual191/procedurelocking.html" >v19.1</option><option value="https://www.opendental.com/manual184/procedurelocking.html" >v18.4</option><option value="https://www.opendental.com/manual183/procedurelocking.html" >v18.3</option><option value="https://www.opendental.com/manual182/procedurelocking.html" >v18.2</option><option value="https://www.opendental.com/manual181/procedurelocking.html" >v18.1</option><option value="https://www.opendental.com/manual174/procedurelocking.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Procedure Lock</p></div>
<div class="GeneralPageContent">
<p>The Procedure Lock Tool is used to permanently lock procedures from being edited, regardless of security permissions, and is rarely used. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Procedure Locking.</p>
<img src="images/procedureLockTool.gif" width="340" height="156"/><p>This option is not used by most offices. Completed <a href="procedurenotes.html">Procedure Notes</a> and any edits made are automatically recorded in the database and cannot be deleted. An archived history of notes on a completed procedure can be viewed in the <a href="chart.html">Chart Module</a> under Show tab, Audit. </p>
<p>To lock procedures for a specific date range at one time, use the Procedure Lock Tool. This tool is only visible in the menu when procedure locking is allowed. To turn on procedure locking, enable the <a href="preferences.html">Preference</a>, <i> Procedure locking is allowed</i>. Open Dental must be restarted for the Procedure Lock Tool to appear in the menu after this preference is enabled.</p>
<p>To lock all procedures completed in a date range, enter the date range in the Procedure Lock Tool window and click <b>OK</b>.</p>
<h2>Locking Individual Procedures</h2>
<p>Procedure locking is for the few offices that want to lock each completed procedure and only allow notes to be appended. If an office uses this option, there is no way to unlock a procedure, regardless of security permissions. In the case of mistakes, a user can mark a locked procedure as invalid (see Invalidating below). This preference can be turned off later, but locked procedures remain permanently locked.</p>
<p>To change the lock setting, disable the <i> Procedure locking is allowed</i> preference.</p>
<p>When locking is allowed, completed procedures will have a <b>Lock</b> button on the right side of the <a href="procedureedit.html">Edit Procedure</a> window.</p>
<img src="images/procedureLockingProc.png" width="553" height="215"/><p>When a user clicks <b>Lock</b>, the procedure is immediately and permanently locked. Users may only view the procedure, append procedure notes, or invalidate the procedure.</p>
<h2>Appending Notes</h2>
<p>Appending a note adds an additional note to the original procedure note. Click <b>Append</b> on a locked procedure.</p>
<img src="images/procLockAppend.png" width="618" height="514"/><p>Enter the new note in the <b>Appended Note</b> text area, or add an <a href="autonotes.html">Auto Note</a>. Appended notes are dated, and appear in the Progress Notes below the procedure. Appended notes can be signed electronically, see <a href="electronicsignatures.html">Electronic Signatures</a>. The user and signed status shown in progress notes will be that of the user to last append the procedure.</p>
<h2>Invalidating</h2>
<p>Locked procedures cannot be edited or deleted, only appended or invalidated. If a user made a mistake (e.g., the wrong procedure was set complete, or wrong treatment area entered), the procedure may need to be invalidated from the Edit Procedure window. If insurance claims, payments, or adjustments are attached to the procedure, these will need detached or deleted prior to invalidating the procedure. </p>
<p>Click <b>Invalidate</b> from the Procedure Edit window.</p>
<img src="images/procLockInvalidate.png" width="552" height="202"/><p>The original procedure will still appear in the Progress Notes section of the Chart Module, but <i>-Invalid-</i> will appear in the description. Graphics will be hidden on the graphical toothchart (odontogram). The procedure status will change to <i>Invalidated</i>. The user will then have to recreate (i.e., re-chart) the procedure to correct any errors.</p>
<img src="images/procLockInvalid.png" width="915" height="144"/></div>
</div>
</body>
</html>```
