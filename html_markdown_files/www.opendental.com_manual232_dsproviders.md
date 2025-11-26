# File: ./www.opendental.com/manual232/dsproviders.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Providers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
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
						}"><option value="https://www.opendental.com/manual243/dsproviders.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dsproviders.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsproviders.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsproviders.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsproviders.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dsproviders.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsproviders.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsproviders.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsproviders.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsproviders.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsproviders.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsproviders.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsproviders.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsproviders.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsproviders.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsproviders.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsproviders.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsproviders.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsproviders.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsproviders.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsproviders.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsproviders.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsproviders.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsproviders.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsproviders.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsproviders.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsproviders.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsproviders.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Providers</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Providers.</p>
<img src="images/dentalProviders.png" width="915" height="604"/><p>All provider types can be added and edited in the Provider List. </p>
<p class="MarginBottomZero">For <a href="dentalschools.html">Dental Schools</a>, there are three types of providers: </p>
<ul class="MarginBottomGap">
<li><a href="dsinstructors.html">Dental School Instructors</a>: Can create student evaluations.</li>
<li><a href="dsstudents.html">Dental School Students</a>: Usually have less security permissions.</li>
<li>Other providers (see <a href="providers.html">Providers</a>).</li>
</ul>
<p>To define the security permissions each type has, see <a href="dssecurity.html">Dental School Security</a>.</p>
<p class="MarginBottomZero">By default, all providers are listed. </p>
<ul class="MarginBottomGap">
<li>If a provider is an instructor, an X shows in the Instructor column.</li>
<li>To view providers that have been marked Hidden on the Edit Provider window, check Show Hidden.</li>
<li>To view providers that were removed during a <a href="mergeproviders.html">Merge Providers</a>, check Show Deleted. The deleted providers are highlighted red and their information can be viewed but not edited.</li>
</ul>
<p class="MarginBottomZero">To filter the list, use the Dental Schools Search by area in the upper right corner. </p>
<ul class="MarginBottomGap">
<li><b>Classes</b>: Show student providers from a specific <a href="dsclasses.html">Dental Class</a>.</li>
<li><b>Radio Buttons</b>: All = show all providers; Students = show all students in all classes; Instructors = show all instructors.</li>
<li><b>Last name, First Name, ProvNum</b>: Enter specific criteria. The list filters as information is typed.</li>
</ul>
<br/><p>To set up school requirements, see <a href="requirements.html">Dental School Requirements Needed</a>.</p>
</div>
</div>
</body>
</html>```
