# File: ./www.opendental.com/manual232/ehremergency.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Emergency</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehremergency','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehremergency.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehremergency.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehremergency.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehremergency.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehremergency.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehremergency.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehremergency.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehremergency.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehremergency.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehremergency.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehremergency.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehremergency.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehremergency.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehremergency.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehremergency.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehremergency.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehremergency.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehremergency.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehremergency.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehremergency.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehremergency.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehremergency.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehremergency.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehremergency.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehremergency.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehremergency.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehremergency.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehremergency.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Emergency</p></div>
<div class="GeneralPageContent">
<p>The Emergency Now button on the EHR <a href="ehrsetupwindow.html">Setup</a> window toggles emergency mode on and off. Anyone can switch to emergency mode.</p>
<p>When emergency mode is turned on, the box next to the button turns red, and users with the EHR Emergency Access security Permission are given temporary access to other permissions. For the very narrow requirements of EHR certification, this permission currently gives access to the <a href="family.html">Family Module</a> (FamilyModule), which is a permission most users have anyways.</p>
</div>
</div>
</body>
</html>```
