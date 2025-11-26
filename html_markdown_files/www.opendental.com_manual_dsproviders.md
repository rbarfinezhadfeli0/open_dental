# File: ./www.opendental.com/manual/dsproviders.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Providers</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsproviders','providers','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dsproviders.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dsproviders.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsproviders.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsproviders.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsproviders.html" >v23.2</option><option value="https://www.opendental.com/manual231/dsproviders.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsproviders.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsproviders.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsproviders.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsproviders.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsproviders.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsproviders.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsproviders.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsproviders.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsproviders.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsproviders.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsproviders.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsproviders.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsproviders.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsproviders.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsproviders.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsproviders.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsproviders.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsproviders.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsproviders.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsproviders.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsproviders.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsproviders.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Providers</p></div>
<div class="GeneralPageContent">
<p>Create and edit provider information for Dental School Instructors and Students.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Providers.</p>
<img src="images/dentalProviders.png" width="915" height="538"/><p>All provider types can be added and edited in the Provider List. </p>
<p class="MarginBottomZero">For <a href="dentalschools.html">Dental Schools</a>, there are three types of providers: </p>
<ul class="MarginBottomGap">
<li><a href="dsinstructors.html">Dental School Instructors</a>: Can create student evaluations.</li>
<li><a href="dsstudents.html">Dental School Students</a>: Usually have less security permissions.</li>
<li>Other providers (see <a href="providers.html">Providers</a>).</li>
</ul>
<p>To define the security permissions each type has, see <a href="dssecurity.html">Dental School Security</a>.</p>
<p>To set up school requirements, see <a href="requirements.html">Dental School Requirements Needed</a>.</p>
<p class="MarginBottomZero"><b>Providers Grid</b>: Displays providers matching search criteria.  </p>
<ul class="MarginBottomGap">
<li>X in the <i>Instructor</i> column indicates the provider is a Dental School Instructor.</li>
<li>A class name in the <i>Class</i> column indicates the provider is a Dental School Student.</li>
<li>Check <b>Show Hidden</b> to view providers in the list marked as <i>Hidden</i>.</li>
<li>Check <b>Show Merged</b> to view providers removed during a <a href="mergeproviders.html">Provider Merge</a>. Deleted providers display in red and their information can be viewed but not edited</li>
</ul>
<p class="MarginBottomZero"><b>Dental School Search by</b>: Determine which providers are listed in the providers grid. </p>
<ul class="MarginBottomGap">
<li>Classes: Only show student providers from a specific <a href="dsclasses.html">Dental Class</a>.</li>
<li>All: Shows all providers, regardless of student or instructor designation.</li>
<li>Students: Only display providers who are Dental School Students.</li>
<li>Instructors: Only display providers who are Dental School Instructors.</li>
<li>Last Name / First Name / ProvNum: Enter criteria to find a specific provider.</li>
</ul>
<p><b>Add</b>: Create a new provider. See <a href="dsinstructors.html">Dental School Instructors</a> or <a href="dsstudents.html">Dental School Students</a> for instructions on create Students or Instructors.</p>
<p><b>Student Bulk Edit</b>: Opens <a href="dsstudentbulk.html">Dental Student Bulk Edit</a> to quickly make changes to multiple students. </p>
<p><b></b></p>
</div>
</div>
</body>
</html>```
