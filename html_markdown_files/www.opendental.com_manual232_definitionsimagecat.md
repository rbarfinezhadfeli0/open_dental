# File: ./www.opendental.com/manual232/definitionsimagecat.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Image Categories</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsimagecat','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/definitionsimagecat.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/definitionsimagecat.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsimagecat.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsimagecat.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsimagecat.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/definitionsimagecat.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsimagecat.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsimagecat.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsimagecat.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsimagecat.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsimagecat.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsimagecat.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsimagecat.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsimagecat.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsimagecat.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsimagecat.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsimagecat.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsimagecat.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsimagecat.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsimagecat.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsimagecat.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsimagecat.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsimagecat.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsimagecat.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsimagecat.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsimagecat.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsimagecat.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsimagecat.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Image Categories</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Image Categories.</p>
<img src="images/definitionsImageCats.png" width="816" height="583"/><p>The Image Categories definition determines the category folders available to organize documents in the <a href="images.html">Imaging Module</a>.</p>
<p>Also with this definition, set category images to show in other areas of the program and set the default category where documents are saved (e.g., saved treatment plans, statements, etc).</p>
<p>Double-click an existing item or click <b>Add</b> to create a new item. The Edit Definition window will open.</p>
<img src="images/definitionEditImageCats.png" width="666" height="390"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the category name.</li>
<li><b>Usage</b>: (Optional) Set the category properties by checking the boxes that apply. Letters in parentheses display the designation used in User Queries. <ul>
<li><b>Show in Chart Module</b>: Check to show category as both a folder in the Imaging Module and as an additional tab at the bottom of the Chart Module.</li>
<li><b>Show Thumbnails</b>: Images in this category display a thumbnail in the Image Categories list. Only image files types (e.g., .jpg, .gif, .png, etc.) will show a thumbnail preview.</li>
<li><b>Show in Patient Forms</b>: Check to access documents in this category from the <a href="patientform.html">Patient Forms</a>. Double-clicking a document in the forms window will immediately switch to the document in the Imaging Module.</li>
<li><b>Show in Patient Portal</b>: Check to allow patients access to the documents in this category from the <a href="../site/patientportal.html">Patient Portal Feature</a>.</li>
<li><b>Patient Pictures (only one)</b>: Check to use images stored in this category as the patient picture in the <a href="family.html">Family Module</a> and on the <a href="appointments.html">Appointments Module</a>.</li>
<li><b>Statements (only one)</b>: Check to store PDF copies of all printed and emailed <a href="statement.html">Statements</a> in this category. Also stores statements exported as a CSV. </li>
<li><b>Graphical Tooth Charts (only one)</b>: Check to store tooth charts saved from the Chart Module in this category.</li>
<li><b>Treatment Plans</b>: Check to store PDF copies of printed, emailed, or signed treatment plans from the <a href="treatmentplan.html">Treatment Plan Module</a> in this category. Enable the <i> Save signed Treatment Plans to PDF</i> preference to automatically save signed treatment plans.</li>
<li><b>Payment Plans (only one)</b>: Check to store PDF copies of printed payment plans or payment plans signed on eClipboard. See <a href="paymentplanprint.html">Sign and Print Payment Plan</a> in this category.</li>
<li><b>Claim Attachments (only one)</b>: Check to store attachments from <a href="dentalxchangeattachmentservice.html">DentalXChange Attachment Service.</a></li>
<li><b>Lab Cases (only one)</b>: Check to store PDF copies of <a href="labslips.html">Lab Slips</a> in this category when printed, emailed, or saved as a PDF.</li>
<li><b>Autosave Forms (only one)</b>: Check to enable <i>Check 'Autosave' By Default</i> in <a href="sheetproperties.html">Sheet Def Properties</a> and <i>Autosave to Images</i> in <a href="sheetsfillout.html">Fill Sheet</a>. Sheets are only autosaved when clicking OK from the Fill Sheet window and the <i>Autosave to Images</i> box is checked. Autosaved sheets or forms will be saved as a PDF to this category.</li>
<li><b>Task Attachments (only one)</b>: Check to enable attachments on tasks. See <a href="taskattachments.html">Task Attachments</a>.</li>
<li><b>Claim Responses (only one)</b>: Check to enable saving claim responses to the Imaging Module. Only used for Canada users.</li>
</ul>
</li>
</ul>
<p>Click <b>OK</b> to save.</p>
<p>To combine duplicate images, see <a href="mergeimagecategories.html">Merge Image Categories</a>.</p>
</div>
</div>
</body>
</html>```
