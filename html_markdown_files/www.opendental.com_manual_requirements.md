# File: ./www.opendental.com/manual/requirements.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Requirements Needed</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('requirements','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/requirements.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/requirements.html" >v24.2</option><option value="https://www.opendental.com/manual241/requirements.html" >v24.1</option><option value="https://www.opendental.com/manual233/requirements.html" >v23.3</option><option value="https://www.opendental.com/manual232/requirements.html" >v23.2</option><option value="https://www.opendental.com/manual231/requirements.html" >v23.1</option><option value="https://www.opendental.com/manual224/requirements.html" >v22.4</option><option value="https://www.opendental.com/manual223/requirements.html" >v22.3</option><option value="https://www.opendental.com/manual222/requirements.html" >v22.2</option><option value="https://www.opendental.com/manual221/requirements.html" >v22.1</option><option value="https://www.opendental.com/manual214/requirements.html" >v21.4</option><option value="https://www.opendental.com/manual213/requirements.html" >v21.3</option><option value="https://www.opendental.com/manual212/requirements.html" >v21.2</option><option value="https://www.opendental.com/manual211/requirements.html" >v21.1</option><option value="https://www.opendental.com/manual205/requirements.html" >v20.5</option><option value="https://www.opendental.com/manual204/requirements.html" >v20.4</option><option value="https://www.opendental.com/manual203/requirements.html" >v20.3</option><option value="https://www.opendental.com/manual202/requirements.html" >v20.2</option><option value="https://www.opendental.com/manual201/requirements.html" >v20.1</option><option value="https://www.opendental.com/manual194/requirements.html" >v19.4</option><option value="https://www.opendental.com/manual193/requirements.html" >v19.3</option><option value="https://www.opendental.com/manual192/requirements.html" >v19.2</option><option value="https://www.opendental.com/manual191/requirements.html" >v19.1</option><option value="https://www.opendental.com/manual184/requirements.html" >v18.4</option><option value="https://www.opendental.com/manual183/requirements.html" >v18.3</option><option value="https://www.opendental.com/manual182/requirements.html" >v18.2</option><option value="https://www.opendental.com/manual181/requirements.html" >v18.1</option><option value="https://www.opendental.com/manual174/requirements.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Requirements Needed</p></div>
<div class="GeneralPageContent">
<p>For Dental Schools, requirements can be added and copied to class/course combinations, attached to appointments, then managed by students and instructors.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Requirements Needed</b>.</p>
<img src="images/requirementsNeeded.png" width="803" height="403"/><p>See <a href="dentalschools.html">Dental Schools</a>.</p>
<h2>Add Requirements</h2>
<p>Select the Class and Course.</p>
<p>Click <b>Add</b>. <br/><img src="images/dsRequirementEdit.png" width="611" height="196" class="ImageInParagraph"/></p>
<p>Enter the <b>Description</b> and click <b>OK</b>.</p>
<p>Repeat for all requirements for the class/course combination.</p>
<h2>Copy Requirements</h2>
<p class="MarginBottomZero">Requirements for one class/course combination can be copied to another. Existing requirements will not be replaced. </p>
<ol class="MarginBottomGap">
<li>Select the class and course to copy from.</li>
<li>Select the class and course to copy requirements to.</li>
<li>Click <b>Copy</b>. A confirmation message will show. Click <b>OK</b> to copy.</li>
</ol>
<h2>Attach Requirements to an Appointment</h2>
<p class="MarginBottomZero">A requirement can be added multiple times to an appointment, and requirements for multiple students can be added to one appointment. Students and instructors can add requirements to appointments. </p>
<ol class="MarginBottomGap">
<li>In the left panel of the <a href="aptedit.html">Edit Appointment</a> window, click <b>Req</b>. <br/><img src="images/dsReqbutton.gif" width="234" height="61" class="ImageInParagraph"/><br/><img src="images/requirementsAppointment.png" width="903" height="572" class="ImageInParagraph"/></li>
<li>Select a class, course, and instructor.</li>
<li>Highlight a student.</li>
<li>Highlight the requirements, then click <b>Add</b>. They will list under Currently Attached Requirements.</li>
</ol>
<h2>Students: Viewing and Editing Requirements</h2>
<p class="MarginBottomZero">A student can view and edit their requirements when the following conditions are met: </p>
<ul class="MarginBottomGap">
<li>Student is logged in as a user.</li>
<li>User must be linked to a provider in the <a href="securityusers.html">User Edit</a> window.</li>
<li>The linked provider must be assigned to a class in the <a href="providerseditwindow.html">Provider</a>.</li>
</ul>
<ol>
<li>In the main menu, click Tools, <b>Student Requirements</b>. <br/><img src="images/requirementsOne.png" width="835" height="232" class="ImageInParagraph"/></li>
<li>Double-click a requirement to view it or to change a patient or appointment the requirement is attached to. <br/><img src="images/requirementEdit.png" width="667" height="320" class="ImageInParagraph"/></li>
<li>Click <b>Detach</b> to remove a patient or appointment. Click <b>Select</b> to select a different patient.</li>
<li>Click <b>OK</b> to close the window and save any changes. Click <b>Cancel</b> to close the window without saving changes.</li>
</ol>
<br/><h2>Instructors: Viewing Requirements</h2>
<p class="MarginBottomZero">When the instructor is logged in, they can view student requirements. </p>
<ol class="MarginBottomGap">
<li>In the main menu, click Tools, <b>Student Requirements</b>. <br/><img src="images/requirementsMany.png" width="699" height="208" class="ImageInParagraph"/></li>
<li>Select the Class and Course.</li>
<li>Double-click on a student to see a list of their requirements.</li>
<li>Double-click a requirement to view details. <br/><img src="images/requirementEditInstructor.png" width="667" height="320" class="ImageInParagraph"/></li>
<li>Verify the patient and appointment.</li>
<li>Click <b>OK</b> to close the window and save any changes. Click <b>Cancel</b> to close the window without saving changes.</li>
</ol>
<p>If the logged-in instructor is also the instructor associated to the requirement, the requirement may be deleted or the instructor may be changed.</p>
<p>Requirements are pass/fail, with no grade assignments.</p>
</div>
</div>
</body>
</html>```
