# File: ./www.opendental.com/manual243/procgroupnote.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Procedure Group Note</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('procgroupnote','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/procgroupnote.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/procgroupnote.html" >v24.2</option><option value="https://www.opendental.com/manual241/procgroupnote.html" >v24.1</option><option value="https://www.opendental.com/manual233/procgroupnote.html" >v23.3</option><option value="https://www.opendental.com/manual232/procgroupnote.html" >v23.2</option><option value="https://www.opendental.com/manual231/procgroupnote.html" >v23.1</option><option value="https://www.opendental.com/manual224/procgroupnote.html" >v22.4</option><option value="https://www.opendental.com/manual223/procgroupnote.html" >v22.3</option><option value="https://www.opendental.com/manual222/procgroupnote.html" >v22.2</option><option value="https://www.opendental.com/manual221/procgroupnote.html" >v22.1</option><option value="https://www.opendental.com/manual214/procgroupnote.html" >v21.4</option><option value="https://www.opendental.com/manual213/procgroupnote.html" >v21.3</option><option value="https://www.opendental.com/manual212/procgroupnote.html" >v21.2</option><option value="https://www.opendental.com/manual211/procgroupnote.html" >v21.1</option><option value="https://www.opendental.com/manual205/procgroupnote.html" >v20.5</option><option value="https://www.opendental.com/manual204/procgroupnote.html" >v20.4</option><option value="https://www.opendental.com/manual203/procgroupnote.html" >v20.3</option><option value="https://www.opendental.com/manual202/procgroupnote.html" >v20.2</option><option value="https://www.opendental.com/manual201/procgroupnote.html" >v20.1</option><option value="https://www.opendental.com/manual194/procgroupnote.html" >v19.4</option><option value="https://www.opendental.com/manual193/procgroupnote.html" >v19.3</option><option value="https://www.opendental.com/manual192/procgroupnote.html" >v19.2</option><option value="https://www.opendental.com/manual191/procgroupnote.html" >v19.1</option><option value="https://www.opendental.com/manual184/procgroupnote.html" >v18.4</option><option value="https://www.opendental.com/manual183/procgroupnote.html" >v18.3</option><option value="https://www.opendental.com/manual182/procgroupnote.html" >v18.2</option><option value="https://www.opendental.com/manual181/procgroupnote.html" >v18.1</option><option value="https://www.opendental.com/manual174/procgroupnote.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Procedure Group Note</p></div>
<div class="GeneralPageContent">
<p>A Group Note is a single clinical note made for multiple procedures completed on the same day, by the same provider.</p>
<p>In the <a href="chart.html">Chart Module</a>, highlight multiple procedures set complete on the same day. Right-click and select <b>Group Note</b>.</p>
<img src="images/procGroupNote.png" width="617" height="672"/><p>A Group <a href="notes.html">Note</a> shows in the Progress Notes section of the <a href="chart.html">Chart Module</a> after the last procedure it is attached to. Group Notes can only be created for procedures that have been set complete and have the same procedure date.</p>
<p class="MarginBottomZero">The Group Note is stored in the database as a procedure.  </p>
<ul class="MarginBottomGap">
<li>The <a href="permissions.html">Permission</a> to edit or delete Group Notes is based on the status of attached procedures. If attached to at least one completed procedure, it is controlled by <i>Edit Completed Procedure</i> permission. Otherwise it is controlled by <i>TP Procedure Delete</i>.</li>
<li>Group Note text color in the Progress Notes can be customized in <a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a>, Status Existing Current Prov.</li>
</ul>
<p><b>Procedure Date</b>: Read only. Date of the selected procedures. To change the procedure date, see <a href="procedureedit.html">Edit Procedure</a>.</p>
<p><b>Date Entry</b>: Read only. Date the Group Note was created. Auto-generates today's date for new Group Notes. </p>
<p><b>User:</b> The user tied to the <a href="electronicsignatures.html">Electronic Signature</a>. By default this is the logged-on user. To override, click <b>[...]</b> and enter log on credentials.</p>
<p><b>Auto Note:</b> Click to select and complete <a href="autonotes.html">Auto Notes</a>.</p>
<p><b>Notes:</b> Enter the Group Note.</p>
<p class="MarginBottomZero"><b>Signature/Initials:</b> Electronically sign the note. The signature is connected to the user listed above the Notes area. </p>
<ul class="MarginBottomGap">
<li> If a note is edited later, the signature will be cleared.</li>
<li>Enable <i>Block procedure note signatures when there are uncompleted auto note prompts</i> in <a href="preferences.html">Preferences</a> to prevent users from signing Group Notes with incomplete auto notes.</li>
<li>An <a href="alerts.html">Alert</a> is generated when a signature is cleared by another user.</li>
<li>If a signature is cleared by another user without adding a replacement, users are warned when saving the procedure.</li>
</ul>
<p><b>Procedures:</b> The procedures attached to this Group Note. The columns that display can be customized in <a href="displayfields.html">Display Fields</a>.</p>
<p><b>Delete</b>: Delete the Group Note.</p>
<p><a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</p>
<h2>Aggregate Group Notes</h2>
<p>Aggregate Group notes allow users to create a Group Note that combines notes started on individual procedures. </p>
<p class="MarginBottomZero">When the preference <i>When creating a Group Note, aggregate procedure notes</i> is enabled and a Group Note is created: </p>
<ul class="MarginBottomGap">
<li>If a procedure note is signed, the note remains in the procedure and is copied to the Group Note as well. </li>
<li>If a procedure note is not signed, the note is removed from the procedure but still copied to the Group Note.</li>
</ul>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/embed/g9aYQZo4Css">QuickTip: Using Aggregate Procedure Notes</a>.</p>
<h2>Invalid Group Notes</h2>
<p>Invalid Group Notes are created when <a href="procedurelocking.html">Procedure Lock</a> is turned on.</p>
<img src="images/groupNoteInvalid.png" width="633" height="194"/><p>Invalidated Group Notes cannot be edited or deleted. Users can select the same procedures to create a new Group Note.</p>
</div>
</div>
</body>
</html>```
