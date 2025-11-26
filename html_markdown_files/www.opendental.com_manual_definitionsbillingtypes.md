# File: ./www.opendental.com/manual/definitionsbillingtypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Billing Types</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsbillingtypes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionsbillingtypes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionsbillingtypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsbillingtypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsbillingtypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsbillingtypes.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionsbillingtypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsbillingtypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsbillingtypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsbillingtypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsbillingtypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsbillingtypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsbillingtypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsbillingtypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsbillingtypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsbillingtypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsbillingtypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsbillingtypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsbillingtypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsbillingtypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsbillingtypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsbillingtypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsbillingtypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsbillingtypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsbillingtypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsbillingtypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsbillingtypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsbillingtypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsbillingtypes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Billing Types</p></div>
<div class="GeneralPageContent">
<p>Add and customize billing types available for patients and insurance plans.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Billing Types.</p>
<img src="images/definitionsBillingTypes.png" width="713" height="402"/><p>Billing Type options are available in the <a href="patientedit.html">Edit Patient Information</a> and <a href="insplan.html">Edit Insurance Plan</a> windows. Set the default Billing Type in <a href="practice.html">Practice Setup</a>.</p>
<p>Create Billing Types to indicate how a patient is to be billed (e.g., email statements, send to collections, etc.).</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window opens.</p>
<img src="images/definitionEditBillingTypes.png" width="425" height="201"/><p><b>Name:</b> Enter the Billing Type name.</p>
<p class="MarginBottomZero">Set the behavior of the Billing Type.<br/></p>
<ul class="MarginBottomGap">
<li>Enter <b>E</b> to email statements to patients assigned this Billing Type. Statements are emailed when sent from the <a href="billinglist.html">Billing List</a>.</li>
<li>Enter <b>C</b> for use with patient accounts sent to <a href="tsicollections.html">TSI</a> for collections. <div class="Note">Note: If multiple C Billing Types are created, only guarantors assigned first in the list are included in the <a href="tsisent.html">TSI Sent Accounts</a> tab. Using a single C Billing Type is recommended, and it should not be added to a preexisting Billing Type already in use.</div>
</li>
<li>Enter <b>CE</b> for use with patients excluded from <a href="tsicollections.html">TSI</a> collections. <div class="Note">Note: If multiple CE billing types have been created, only guarantors assigned first in the list are included in the <a href="tsiexcluded.html">TSI Excluded Accounts</a> tab. Using a single CE Billing Type is recommended, and it should not be added to a preexisting Billing Type already in use.</div>
</li>
<li>Leave blank for standard billing. From the Billing List, statements are printed to be mailed or sent electronically if Electronic Billing is set up in <a href="billingdefaults.html">Billing Defaults</a>.</li>
</ul>
<p><b>Hidden</b>: Billing Types may be hidden. However, if in use, hidden Billing Types may be visible throughout various areas of the program. If <i>Adding new primary insurance plan to patient sets billing type</i> is enabled in <a href="preferences.html">Preferences</a>, and an insurance plan is assigned a hidden Billing Type, adding the insurance plan to a new patient will still change the patient to the hidden Billing Type.</p>
<p>Click <b>Save</b> to exit the window and keep changes.</p>
</div>
</div>
</body>
</html>```
