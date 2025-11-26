# File: ./www.opendental.com/manual232/definitionswebschedexistingpatappttypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Web Sched Existing Appt Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionswebschedexistingpatappttypes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/definitionswebschedexistingpatappttypes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/definitionswebschedexistingpatappttypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionswebschedexistingpatappttypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionswebschedexistingpatappttypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionswebschedexistingpatappttypes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/definitionswebschedexistingpatappttypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionswebschedexistingpatappttypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionswebschedexistingpatappttypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionswebschedexistingpatappttypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionswebschedexistingpatappttypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionswebschedexistingpatappttypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionswebschedexistingpatappttypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionswebschedexistingpatappttypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionswebschedexistingpatappttypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionswebschedexistingpatappttypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionswebschedexistingpatappttypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionswebschedexistingpatappttypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionswebschedexistingpatappttypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionswebschedexistingpatappttypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionswebschedexistingpatappttypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionswebschedexistingpatappttypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionswebschedexistingpatappttypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionswebschedexistingpatappttypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionswebschedexistingpatappttypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionswebschedexistingpatappttypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionswebschedexistingpatappttypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionswebschedexistingpatappttypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionswebschedexistingpatappttypes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Web Sched Existing Appt Types</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Web Sched Existing Appt Types.</p>
<img src="images/definitionsWebSchedExistingPatApptTypes.png" width="816" height="532"/><p>The Web Sched Existing Appt Types definition determines the list of available <i>Reasons for Appointment</i> options patients select from when scheduling an appointment using the <a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a> feature.</p>
<p>Create <a href="appointmenttypes.html">Appointment Types</a> first to determine the length and procedures for certain types of appointments. Then assign a Web Sched Existing Appt Type to the appointment type. When a patient schedules an appointment online and selects one of these types from the list of appointment reasons, an appointment will be created with the procedures and for the length designated in the associated appointment type.</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window will open.</p>
<img src="images/definitionEditWebSchedExistingApptType.png" width="489" height="202"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the reason. The reason text is also added to the appointment note.</li>
<li><b>Appointment Type</b>: Click [...] to assign an appointment type. Each reason can be assigned to one appointment type.</li>
<li><b>Restrict to Specific Blockouts</b>: Click [...] to restrict this appointment type to scheduling over the specific blockout. Multiple appointment types can be restricted to the same blockout.</li>
</ul>
<p>Click OK to save.</p>
<p>To delete a reason not in use, double-click an item and click <b>Delete</b>.</p>
<p><div class="Note">Note: Do not create Web Sched Existing Patient Appointment Types for recall appointments. Instead, use the built-in recall option. <i>Recall display name</i> field in Web Sched Existing Patient setup. </div>
</p>
</div>
</div>
</body>
</html>```
