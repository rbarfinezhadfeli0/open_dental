# File: ./www.opendental.com/manual/ehrcdsintervention.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR CDS Interventions</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcdsintervention','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrcdsintervention.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrcdsintervention.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcdsintervention.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcdsintervention.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcdsintervention.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrcdsintervention.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcdsintervention.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcdsintervention.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcdsintervention.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcdsintervention.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcdsintervention.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcdsintervention.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcdsintervention.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcdsintervention.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcdsintervention.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcdsintervention.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcdsintervention.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcdsintervention.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcdsintervention.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcdsintervention.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcdsintervention.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcdsintervention.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcdsintervention.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcdsintervention.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcdsintervention.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcdsintervention.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcdsintervention.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcdsintervention.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR CDS Interventions</p></div>
<div class="GeneralPageContent">
<p>See <a href="ehrdashboard1.html">EHR Dashboard</a>.</p>
<p>CDS interventions provide evidence-based clinical guidance when a user is making a clinical decision. If a user has the appropriate <a href="ehrcdspermissions.html">EHR CDS Permissions</a> and enters data for a patient that triggers a <a href="ehrcdsconfigure.html">CDS Rule</a>, an intervention will pop up on-screen.</p>
<img src="images/ehrcdsintervention.gif" width="915" height="317"/><p>Each intervention identifies the conditions that triggered it, as well as instructions and bibliographical information.</p>
<p><img src="images/infobutton.gif" width="15" height="15" style="margin-bottom: 0px"/> Info button: Shows when a user has the <i>Show i</i> CDS Permission. Click this button to access additional clinical information via <a href="http://www.nlm.nih.gov/medlineplus/">MedLinePlus</a>. See <a href="ehrinfobutton.html">EHR InfoButton</a>.</p>
<p>Click OK to close the intervention.</p>
<p>Click <b>Cancel Current Action</b> to cancel the addition of the data that triggered the intervention. This option is not available for all interventions.</p>
</div>
</div>
</body>
</html>```
