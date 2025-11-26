# File: ./www.opendental.com/manual243/definitionsapptquickadd.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Appt Procs Quick Add</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsapptquickadd','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionsapptquickadd.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionsapptquickadd.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsapptquickadd.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsapptquickadd.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsapptquickadd.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionsapptquickadd.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsapptquickadd.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsapptquickadd.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsapptquickadd.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsapptquickadd.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsapptquickadd.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsapptquickadd.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsapptquickadd.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsapptquickadd.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsapptquickadd.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsapptquickadd.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsapptquickadd.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsapptquickadd.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsapptquickadd.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsapptquickadd.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsapptquickadd.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsapptquickadd.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsapptquickadd.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsapptquickadd.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsapptquickadd.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsapptquickadd.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsapptquickadd.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsapptquickadd.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Appt Procs Quick Add</p></div>
<div class="GeneralPageContent">
<p>Customize the single-click items in the Edit Appointment window with Appt Proc Quick Adds.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Appt Procs Quick Add.</p>
<img src="images/definitionsApptProcsQuickAdd.png" width="713" height="541"/><p>The Appt Proc Quick Add definition determines the options available and procedure associated with the <i>Single click</i> list in the <a href="aptedit.html">Edit Appointment</a> window.</p>
<p>Double-click an existing item to edit or click <b>Add</b> to create a new item. The Edit Definition window opens.</p>
<img src="images/definitionEditApptQuickAdd.png" width="392" height="212"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the item description. This displays in the Edit Appointment window.</li>
<li><b>ADA Code(s)</b>: Enter the procedure code or group of codes associated with the item. This field is case-sensitive so enter the code as it appears in the <a href="procedurecodes.html">Procedure Codes</a> list. <ul>
<li>To enter more than one code, separate each code with a comma and do not add spaces (e.g., D0140,D0220). </li>
<li>To associate a tooth number with the procedure, enter the tooth number after the code (e.g., D0220#7). The<a href="procedurecodeedit.html">Procedure Code</a> must have its treatment area set to <i>Tooth</i>. To enter the same code on multiple teeth, enter the code individually for each tooth (e.g., D0220#7, D0220#8, etc.)</li>
<li>Procedures with a treatment area other than <i>Mouth</i> or <i>Tooth</i> (when the tooth number is specified) should not be added to a Appt Procs Quick Add definition as users are not prompted to enter the treatment area. </li>
</ul>
</li>
</ul>
<p>Click <b>Save</b> to exit the window and keep changes.</p>
</div>
</div>
</body>
</html>```
