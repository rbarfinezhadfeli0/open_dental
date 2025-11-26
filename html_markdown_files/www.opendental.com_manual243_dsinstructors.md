# File: ./www.opendental.com/manual243/dsinstructors.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Instructors</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsinstructors','dsproviders','providers','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dsinstructors.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dsinstructors.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsinstructors.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsinstructors.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsinstructors.html" >v23.2</option><option value="https://www.opendental.com/manual231/dsinstructors.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsinstructors.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsinstructors.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsinstructors.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsinstructors.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsinstructors.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsinstructors.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsinstructors.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsinstructors.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsinstructors.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsinstructors.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsinstructors.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsinstructors.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsinstructors.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsinstructors.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsinstructors.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsinstructors.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsinstructors.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsinstructors.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsinstructors.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsinstructors.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsinstructors.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsinstructors.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Instructors</p></div>
<div class="GeneralPageContent">
<p>Each instructor should be added in Open Dental as a provider.</p>
<p>In <a href="dsproviders.html">Dental School Providers</a>, double-click an existing Instructor to edit.</p>
<img src="images/dsinstructoredit.png" width="516" height="264"/><p>For <a href="dentalschools.html">Dental Schools</a>, instructors are providers who can also fill out <a href="dsevaluations.html">Dental Student Evaluations</a>. Complete steps 1-4 on <a href="dentalschools.html">Dental Schools</a> before adding the first instructor.</p>
<p><div class="Note">Note: Existing providers or students cannot be designated as instructors. Instead, create a new instructor.</div>
</p>
<p>To add instructors, in the <a href="dsproviders.html">Dental School Providers</a> window, select the <i>Instructors</i> radio button and click <b>Add</b>.</p>
<p> Enter the instructor's information on the Edit <a href="providerseditwindow.html">Provider</a>, General tab.</p>
<p class="MarginBottomZero">On the Dental Schools tab, enter the user name and password for the instructor to use to <a href="securitylogin.html">Log In</a> to Open Dental. </p>
<ul class="MarginBottomGap">
<li><b>ProvNum</b>: Automatically generated once the instructor is saved. Cannot be changed.</li>
<li><b>User Name</b>: Defaults to the instructor's ProvNum but can be manually changed. Changes are reflected in <a href="security.html">Security</a>.</li>
<li><b>Password</b>: When editing an existing instructor, the password field is blank. To keep the password the same, leave it blank.<br/> Instructors can change their password when they log on. From the <a href="mainmenu.html">Main Menu</a>, click File, <a href="changepassword.html">Change Password</a>.</li>
</ul>
<p>Click <b>Save</b> to create the instructor or keep changes. New instructors are automatically assigned to the default instructor user group set in <a href="dsusergroupdefaults.html">Dental School Setup</a> and added as a user in Security Setup.</p>
<p>To add other providers and students, see <a href="dsproviders.html">Dental School Providers</a> and <a href="dsstudents.html">Dental School Students</a>.</p>
</div>
</div>
</body>
</html>```
