# File: ./www.opendental.com/manual243/dsstudents.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Students</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsstudents','dsproviders','providers','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dsstudents.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dsstudents.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsstudents.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsstudents.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsstudents.html" >v23.2</option><option value="https://www.opendental.com/manual231/dsstudents.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsstudents.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsstudents.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsstudents.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsstudents.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsstudents.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsstudents.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsstudents.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsstudents.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsstudents.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsstudents.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsstudents.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsstudents.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsstudents.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsstudents.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsstudents.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsstudents.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsstudents.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsstudents.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsstudents.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsstudents.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsstudents.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsstudents.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Students</p></div>
<div class="GeneralPageContent">
<p>In <a href="dsproviders.html">Dental School Providers</a>, select the Students radio button, and double-click an existing Student to edit.</p>
<img src="images/dsStudentAdd.png" width="418" height="273"/><p>If the Students radio button is not selected, the <a href="providerseditwindow.html">Provider</a> opens instead.</p>
<p>For <a href="dentalschools.html">Dental Schools</a>, students are providers who can use Open Dental for charting but may have restricted security permissions. Complete steps 1-4 on <a href="dentalschools.html">Dental Schools</a> before adding the first student.</p>
<p>To add a student, in the <a href="dsproviders.html">Dental School Providers</a> window, select a <a href="dsclasses.html">Dental School Class</a> from the Classes dropdown, select the Students radio button, and click <b>Add</b>. </p>
<p class="MarginBottomZero">Enter the student information: </p>
<ul class="MarginBottomGap">
<li><b>ProvNum</b>: Automatically generated once the student is saved. Cannot be changed.</li>
<li><b>Class</b>: The student's dental class.</li>
<li><b>Last Name/First Name</b>: The student's name.</li>
<li><b>Abbr</b>: Automatically generated using the first four characters of the last name and first initial of first name. Can be changed and does not need to be unique.</li>
<li><b>User Name:</b> The user name the student uses to <a href="securitylogin.html">Log On</a> to Open Dental. Defaults to the student's ProvNum but can be manually changed.</li>
<li><b>Password</b>: Enter a password the student uses to log on to Open Dental. When editing an existing student, the password field is blank. To keep the password the same, leave it blank.  <ul>
<li>Students can change their password when they log on from <a href="mainmenu.html">Main Menu</a>, File, <a href="changepassword.html">Change Password</a>.</li>
</ul>
</li>
</ul>
<p>Click <b>Save</b> to keep changes or add the new student. New students are automatically assigned to the default student user group set in <a href="dsusergroupdefaults.html">Dental School Setup</a>.</p>
<p>To add instructors and other providers, see <a href="dsinstructors.html">Dental School Instructors</a> and <a href="dsproviders.html">Dental School Providers</a>.</p>
</div>
</div>
</body>
</html>```
