# File: ./www.opendental.com/manual232/autocode.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Auto Codes</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('autocode','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/autocode.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/autocode.html" >v24.2</option><option value="https://www.opendental.com/manual241/autocode.html" >v24.1</option><option value="https://www.opendental.com/manual233/autocode.html" >v23.3</option><option value="https://www.opendental.com/manual232/autocode.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/autocode.html" >v23.1</option><option value="https://www.opendental.com/manual224/autocode.html" >v22.4</option><option value="https://www.opendental.com/manual223/autocode.html" >v22.3</option><option value="https://www.opendental.com/manual222/autocode.html" >v22.2</option><option value="https://www.opendental.com/manual221/autocode.html" >v22.1</option><option value="https://www.opendental.com/manual214/autocode.html" >v21.4</option><option value="https://www.opendental.com/manual213/autocode.html" >v21.3</option><option value="https://www.opendental.com/manual212/autocode.html" >v21.2</option><option value="https://www.opendental.com/manual211/autocode.html" >v21.1</option><option value="https://www.opendental.com/manual205/autocode.html" >v20.5</option><option value="https://www.opendental.com/manual204/autocode.html" >v20.4</option><option value="https://www.opendental.com/manual203/autocode.html" >v20.3</option><option value="https://www.opendental.com/manual202/autocode.html" >v20.2</option><option value="https://www.opendental.com/manual201/autocode.html" >v20.1</option><option value="https://www.opendental.com/manual194/autocode.html" >v19.4</option><option value="https://www.opendental.com/manual193/autocode.html" >v19.3</option><option value="https://www.opendental.com/manual192/autocode.html" >v19.2</option><option value="https://www.opendental.com/manual191/autocode.html" >v19.1</option><option value="https://www.opendental.com/manual184/autocode.html" >v18.4</option><option value="https://www.opendental.com/manual183/autocode.html" >v18.3</option><option value="https://www.opendental.com/manual182/autocode.html" >v18.2</option><option value="https://www.opendental.com/manual181/autocode.html" >v18.1</option><option value="https://www.opendental.com/manual174/autocode.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Auto Codes</p></div>
<div class="GeneralPageContent">
<p>Auto Codes work behind the scenes to insert and validate the correct procedure code depending on a variety of conditions.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Auto Codes.</p>
<img src="images/autoCodes.png" width="348" height="321"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/watch?v=QmAf8Ux0f-I">Procedure Buttons, Quick Buttons, and Auto Codes Webinar</a>.</p>
<p>Auto Codes can be associated with <a href="procedurebuttons.html">Procedure Buttons</a>. Open Dental comes preloaded with many Auto Codes, but additional can be created.</p>
<p class="MarginBottomZero">Examples: </p>
<ul class="MarginBottomGap">
<li>When a primary tooth and two surfaces is selected, then a user clicks the Amalgam procedure button, the Auto Code inserts the correct procedure code.</li>
<li>While <a href="entertreatment.html">Entering Treatment</a>, if a user selects three surfaces for a two surface procedure code, Open Dental recognizes the mismatch and prompts the user to change to the recommended three-surface procedure code.</li>
</ul>
<p>To require that staff accept Auto Code suggestions, enable <i>Require use of suggested auto codes</i> in <a href="preferences.html">Preferences</a>.</p>
<p>To reset Auto Codes to the default settings, see <a href="procedurecodetools.html">Procedure Code Tools</a>.</p>
<p><b>Add</b>: Create a new Auto Code. Opens Edit Auto Code. See Edit Auto Code section below for more information.</p>
<p><b>Delete</b>: Highlight an existing Auto Code and click to permanently remove.</p>
<h2>Edit Auto Code</h2>
<p>Double-click an existing Auto Code from the Auto Codes list to edit.</p>
<img src="images/autoCodeEdit.png" width="804" height="591"/><p><b>Description</b>: Name of the Auto Code.</p>
<p><b>Hidden</b>: Remove this Auto Code as available in <a href="procedurebuttonedit.html">Procedure Button Edit</a> Procedure Button Edit. </p>
<p><b>Do not check codes in the procedure edit window, but only use this Auto Code for procedure buttons</b>: If checked, this Auto Code is only used when entering treatment using a Procedure Button. It is not used for validating procedure codes entered on the <a href="procedureedit.html">Procedure</a> Info window or charted using any other method.</p>
<p><b>Add</b>: Create a new Auto Code Item. See Edit Auto Code Item section below for additional details. </p>
<p><b>Delete</b>: Highlight an Auto Code Item in the list, then click to remove it from the Auto Code. </p>
<p>All possible conditions must be defined for the Auto Code to work correctly.</p>
<p>Click <b>OK</b> to save changes. </p>
<h2>Edit Auto Code Item</h2>
<p>In the Edit Auto Code window, click <b>Add</b> to open Edit Auto Code Item to set up additional Procedure Codes and conditions for an Auto Code. Double-click an existing item row to edit.</p>
<p><img src="images/autoCodeItem.png" width="653" height="433"/></p>
<p><b>Code</b>: Click <b>Change</b> to open <a href="procedurecodes.html">Procedure Codes</a> list and select a Procedure Code to attach. </p>
<p class="MarginBottomZero"><b>Conditions</b>: Highlight conditions to trigger the procedure code. Available conditions are: </p>
<ul class="MarginBottomGap">
<li>Anterior: Grouped with Posterior. Can also be grouped with Molar and Premolar.</li>
<li>Posterior: Grouped with Anterior.</li>
<li>Premolar: Grouped with Molar and Anterior.</li>
<li>Molar: Grouped with Premolar and Anterior.</li>
<li>One_Surf: Grouped with other Surfaces (e.g., Two_Surf, Three_Surf, etc.)</li>
<li>Two_Surf: Grouped with other Surfaces (e.g., One_Surf, Three_Surf, etc.)</li>
<li>Three_Surf: Grouped with other Surfaces (e.g., One_Surf, Two_Surf, etc.)</li>
<li>Four_Surf: Grouped with other Surfaces (e.g., One_Surf, Two_Surf, etc.)</li>
<li>Five_Surf: Grouped with other Surfaces (e.g., One_Surf, Two_Surf, etc.)</li>
<li>First: Grouped with Each Additional.</li>
<li>Each Additional: Grouped with First.</li>
<li>Maxillary: Grouped with Mandibular.</li>
<li>Mandibular: Grouped with Maxillary.</li>
<li>Primary: Grouped with Permanent.</li>
<li>Permanent: Grouped with Primary</li>
<li>Pontic: Grouped with Retainer. Used if a tooth is missing. Mark teeth as missing from the Chart Module <a href="missingteeth.html">Missing/Primary Teeth</a> tab. Teeth with treatment planned extractions are also considered Pontic.</li>
<li>Retainer: Grouped with Pontic. Used if a tooth is not missing.</li>
<li>AgeOver18: This condition is not functional and should not be used.</li>
</ul>
<h2>Tips</h2>
<p>Users may receive an error when attempting to save the Auto Code if the conditions selected for Auto Code Items do not match or all conditions from a category are not used.</p>
<p>Multiple conditions from the same category grouping should not be assigned to a single Auto Code Item, as it is not possible for multiple conditions to be met simultaneously. If the same code is used for multiple conditions in the Auto Code, create separate Auto Code Items (e.g., D2394 is used for both Four_Surf and Five_Surf).</p>
<p></p>
<p class="MarginBottomZero">Most of the conditions are based on tooth number. </p>
<ul class="MarginBottomGap">
<li>For example, for tooth number 5, the Anterior condition is false, the Posterior condition is true, and the Premolar condition is true.</li>
<li>First and Each Additional generally only apply when multiple teeth are selected on the Graphical Tooth Chart and a user clicks a Procedure Button (e.g., for a PA). The first one meets the First condition, and the remaining will be Each Additional.</li>
<li>For Pontic and Retainer, a tooth is considered missing if it has been marked as missing in the <a href="chart.html">Chart Module</a> (an extraction or using <a href="missingteeth.html">Missing/Primary Teeth</a>), this includes a tooth where an implant may be placed. So the Pontic condition is met if the tooth is missing, and the Retainer condition is met if the tooth is not missing.</li>
</ul>
</div>
</div>
</body>
</html>```
