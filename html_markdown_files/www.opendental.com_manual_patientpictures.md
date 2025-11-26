# File: ./www.opendental.com/manual/patientpictures.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Picture</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientpictures','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/patientpictures.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/patientpictures.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientpictures.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientpictures.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientpictures.html" >v23.2</option><option value="https://www.opendental.com/manual231/patientpictures.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientpictures.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientpictures.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientpictures.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientpictures.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientpictures.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientpictures.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientpictures.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientpictures.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientpictures.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientpictures.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientpictures.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientpictures.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientpictures.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientpictures.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientpictures.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientpictures.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientpictures.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientpictures.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientpictures.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientpictures.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientpictures.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientpictures.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Picture</p></div>
<div class="GeneralPageContent">
<p>In the <a href="family.html">Family Module</a>, at the upper left, is the Patient Picture.</p>
<img src="images/PatientPictureFamilyMod.png" width="645" height="209"/><p>Optionally, it also displays when hovering over an appointment in the <a href="appointments.html">Appointments Module</a>.</p>
<img src="images/PatientPictureAppt.png" width="505" height="331"/><h2>Add a Patient Picture</h2>
<p>The category marked as <i>Patient Pictures</i> usage in <a href="definitionsimagecat.html">Definitions: Image Categories</a> should be used to store patient pictures. By default, this is the <i>Patient Pictures</i> category of the <a href="images.html">Imaging Module</a>. The most recent image in this category is used as the patient picture. </p>
<h2>Take a Picture</h2>
<p>To take the patient's picture, use a webcam or digital camera, then save the image in an appropriate file format (JPG, GIF, or PNG).</p>
<p>Webcams can be used in Open Dental to take a patient photo using <a href="videocapture.html">Video Capture</a>. An active registration key or trial version is required.</p>
<p>Alternatively, if a webcam has a TWAIN driver is installed, users can take a patient picture using the scan button. The scan button does not support a live feed so users are not able to view the image before it is taken. If there are no other scanners, the webcam can be set as the default scanner, otherwise users should enable <i>Show Select Scanner Window</i> in <a href="imagingsetup.html">Imaging Quality</a> to select the webcam when clicking the scan button. </p>
<p><div class="Note">Note: We are unable to give recommendations regarding specific models of webcam due to the vast number of models and differences in customer hardware. See <a href="imagingcameracompatibility.html">Imaging Camera Compatibility</a> for additional information.</div>
</p>
<h2>Import a Picture</h2>
<p>If the picture is not taken directly in Open Dental (e.g., saved elsewhere on the computer), users have two options to import the picture.</p>
<p class="MarginBottomZero">Option 1:  </p>
<ol class="MarginBottomGap">
<li> Select the image category marked for Patient Pictures usage.</li>
<li>Click <b>Import</b>.</li>
<li>Select the image to import and click <b>OK</b>.</li>
<li>Enter any image details (e.g., name, date, etc). </li>
<li>Click <b>OK</b>.</li>
</ol>
<p class="MarginBottomZero">Option 2: </p>
<ol class="MarginBottomGap">
<li>Locate the picture in the File Explorer.</li>
<li>Drag and drop the file into the Imaging Module category marked for Patient Pictures usage.</li>
<li>Enter any image details (e.g., name, date, etc).</li>
<li>Click <b>OK</b></li>
</ol>
<h2>Remove a Patient Picture</h2>
<p>To permanently remove a picture, in the Imaging Module, right-click the image file and select <b>Delete</b>.</p>
<p class="MarginBottomZero">To add or remove the patient picture from the Appointment Bubble: </p>
<ol class="MarginBottomGap">
<li>In the Main Menu, click Setup, <a href="displayfields.html">Display Fields</a>.</li>
<li>Double-click on Appointment Bubble.</li>
<li>Move the <i>Patient Picture</i> field to or from the Fields Showing list.</li>
</ol>
</div>
</div>
</body>
</html>```
