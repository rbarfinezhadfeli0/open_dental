# File: ./www.opendental.com/manual232/atozfolder.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - A to Z Folder</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('atozfolder','paths','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/atozfolder.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/atozfolder.html" >v24.2</option><option value="https://www.opendental.com/manual241/atozfolder.html" >v24.1</option><option value="https://www.opendental.com/manual233/atozfolder.html" >v23.3</option><option value="https://www.opendental.com/manual232/atozfolder.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/atozfolder.html" >v23.1</option><option value="https://www.opendental.com/manual224/atozfolder.html" >v22.4</option><option value="https://www.opendental.com/manual223/atozfolder.html" >v22.3</option><option value="https://www.opendental.com/manual222/atozfolder.html" >v22.2</option><option value="https://www.opendental.com/manual221/atozfolder.html" >v22.1</option><option value="https://www.opendental.com/manual214/atozfolder.html" >v21.4</option><option value="https://www.opendental.com/manual213/atozfolder.html" >v21.3</option><option value="https://www.opendental.com/manual212/atozfolder.html" >v21.2</option><option value="https://www.opendental.com/manual211/atozfolder.html" >v21.1</option><option value="https://www.opendental.com/manual205/atozfolder.html" >v20.5</option><option value="https://www.opendental.com/manual204/atozfolder.html" >v20.4</option><option value="https://www.opendental.com/manual203/atozfolder.html" >v20.3</option><option value="https://www.opendental.com/manual202/atozfolder.html" >v20.2</option><option value="https://www.opendental.com/manual201/atozfolder.html" >v20.1</option><option value="https://www.opendental.com/manual194/atozfolder.html" >v19.4</option><option value="https://www.opendental.com/manual193/atozfolder.html" >v19.3</option><option value="https://www.opendental.com/manual192/atozfolder.html" >v19.2</option><option value="https://www.opendental.com/manual191/atozfolder.html" >v19.1</option><option value="https://www.opendental.com/manual184/atozfolder.html" >v18.4</option><option value="https://www.opendental.com/manual183/atozfolder.html" >v18.3</option><option value="https://www.opendental.com/manual182/atozfolder.html" >v18.2</option><option value="https://www.opendental.com/manual181/atozfolder.html" >v18.1</option><option value="https://www.opendental.com/manual174/atozfolder.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>A to Z Folder</p></div>
<div class="GeneralPageContent">
<p>See <a href="paths.html">Paths</a>.</p>
<p>The A to Z folder is where Open Dental stores images and documents. It is typically found on the C drive of the server.</p>
<img src="images/AtoZ.gif" width="823" height="491"/><p class="MarginBottomZero"> Images are often scanned or imported in the <a href="images.html">Imaging Module</a>. The A to Z folder consists of the following: </p>
<ul class="MarginBottomGap">
<li>26 letter folders, labeled A through Z.</li>
<li>Folders for email attachments, email images, EOBs, forms, provider images, reports, sheet images, and wiki images.</li>
<li>Folders for SetupFiles (copies of all setup.exe versions used to install updates) and UpdateFiles (files copied during updates).</li>
<li>Printed <a href="claimforms.html">Claim Form</a> images.</li>
<li>Saved logs from <a href="databasemaintenance.html">Database Maintenance</a> and the <a href="querymonitor.html">Query Monitor</a>.</li>
</ul>
<div class="Note">Note: The OpenDentImages folder may be called the OpenDentalData folder in older installations of Open Dental.</div>
<br/><br/><p>The default name of the A to Z folder is OpenDentImages. Below is what the file structure might look like if stored in a local or network folder.</p>
<p>Within each lettered folder are patient folders based on last name.</p>
<img src="images/AtoZpatient.gif" width="832" height="357"/><p>Each patient's folder is labeled by last name, first name and a unique number (Patient.PatNum in the database). Once recognized by Open Dental, do not rename or move the files, or Open Dental will not know where to find them. If a patient name changes (e.g., marriage) the folder name will not change; it will always remain the same as when the record was first created.</p>
<p>Images and documents stored in the A to Z folder are viewable in the Imaging Module. If using Open Dental on multiple computers and storing files in a local or network folder, you will need to share the OpenDentlmages folder (see <a href="atozshare.html">Share A to Z Folder</a>). For shared network folder replication strategies, see <a href="sharednetworkfolder.html">Folder Replication</a>.</p>
<h2>Placing Images and Documents</h2>
<p>Images and documents can be placed into a patient's folder rather than importing them through Open Dental.</p>
<p>If an image or document is placed directly into the folder, the file is located in the first Image Category listed for the patient in the Imaging Module. </p>
<p class="MarginBottomZero">To place a file into a specific folder, prefix the file name with <span class="codeblock">_###_</span> where ### equals the Image Definition Number. (e.g., <i>_190_PatientPicture.png</i>) </p>
<ul class="MarginBottomGap">
<li>To find a list of Image Definition Numbers, run the following query:<br/><span class="codeblock">Select DefNum, ItemName from Definition where Category=18 AND IsHidden=False<br/> ORDER BY ItemOrder</span></li>
</ul>
<h2>Troubleshooting</h2>
<p><b>Error: Could not find the path to the AtoZ folder.</b></p>
<p>Solution: Verify the data path to the A to Z folder is correct on the Data Paths window.</p>
<p><b>Problem: I upgraded to Windows 10 and can no longer access the shared OpenDentImages folder. </b></p>
<p>Solution: See the Troubleshooting section at the bottom of <a href="atozshare.html">Share A to Z Folder</a>.</p>
<p><b>Problem: My images are missing and/or I can't find them in the AtoZ folder.</b></p>
<p>Solution: Check for duplicated folders in your Open Dental directory. Click C: (or the drive Open Dental was installed on), Program Files (x86), Open Dental. Merge duplicated folders from the directory into the AtoZ folder.</p>
</div>
</div>
</body>
</html>```
