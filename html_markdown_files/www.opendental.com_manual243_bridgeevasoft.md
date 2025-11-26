# File: ./www.opendental.com/manual243/bridgeevasoft.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EvaSoft Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeevasoft','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgeevasoft.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgeevasoft.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeevasoft.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeevasoft.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeevasoft.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgeevasoft.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeevasoft.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeevasoft.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeevasoft.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeevasoft.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeevasoft.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeevasoft.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeevasoft.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeevasoft.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeevasoft.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeevasoft.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeevasoft.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeevasoft.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeevasoft.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeevasoft.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeevasoft.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeevasoft.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeevasoft.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeevasoft.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeevasoft.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeevasoft.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeevasoft.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeevasoft.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EvaSoft Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>EvaSoft from www.imageworkscorporation.com</b>.</p>
<img src="images/bridgeEvaSoft.png" width="770" height="594"/><p>EvaSoft is a digital imaging program from ImageWorks. Website: <a href="https://www.imageworkscorporation.com/evasoft-software/" target="_blank">https://www.imageworkscorporation.com/evasoft-software/</a>. The bridge for <a href="bridgedentxproimage.html">AFP Imaging Bridge</a> can also be used. Also known as Dent-X ProImage and Eva.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click Save.</li>
</ol>
<h2>Technical Details</h2>
<p class="MarginBottomZero">The ProImage database is based on the patient ID. When using the bridge, the patient ID gets sent along with name, birthdate, address, etc. If the patient ID is not found in the database, then it creates a new patient record. If the ID is found, and the information does not match, then it overwrites all existing patient name, address, etc, with the new information. Every single ID in the ProImage database must be accurate, or the names on each record may be changed. To test the setup if there are already patients entered in ProImage: </p>
<ol class="MarginBottomGap">
<li>Open a patient information window in ProImage to see the name, ID, address, etc. Try to use the Update Patient button.</li>
<li>Open the same patient in Open Dental. Go to the Family Module and open the Edit Patient Information window.</li>
<li>Compare the ID in ProImage with the Patient Number in Open Dental. They must match before the bridge can be used. </li>
<li>If they don't match, go through every patient in ProImage and change the ID to the Open Dental Patient Number. Print a list ahead of time with all names and Patient Numbers from Open Dental. Obtain this list by running this query: <p class="codeblock">SELECT PatNum AS PatID,LName,FName, Birthdate FROM patient ORDER BY LName,FName</p></li>
<li>If using chart numbers heavily in the office, then there is an option to use chart numbers as the patient ID in both programs. The chart numbers must be entered for all patients in Open Dental. Also, if there are existing patient records in ProImage, then the chart numbers entered in the patient ID field must be blank for all patients.</li>
</ol>
<p>EvaSoft may ask to set up Data Drill. This is not required since this bridge does the same thing.</p>
</div>
</div>
</body>
</html>```
