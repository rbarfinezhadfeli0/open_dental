# File: ./www.opendental.com/manual/dotnet.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - dot Net ( .NET )</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dotnet','installation','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dotnet.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dotnet.html" >v24.2</option><option value="https://www.opendental.com/manual241/dotnet.html" >v24.1</option><option value="https://www.opendental.com/manual233/dotnet.html" >v23.3</option><option value="https://www.opendental.com/manual232/dotnet.html" >v23.2</option><option value="https://www.opendental.com/manual231/dotnet.html" >v23.1</option><option value="https://www.opendental.com/manual224/dotnet.html" >v22.4</option><option value="https://www.opendental.com/manual223/dotnet.html" >v22.3</option><option value="https://www.opendental.com/manual222/dotnet.html" >v22.2</option><option value="https://www.opendental.com/manual221/dotnet.html" >v22.1</option><option value="https://www.opendental.com/manual214/dotnet.html" >v21.4</option><option value="https://www.opendental.com/manual213/dotnet.html" >v21.3</option><option value="https://www.opendental.com/manual212/dotnet.html" >v21.2</option><option value="https://www.opendental.com/manual211/dotnet.html" >v21.1</option><option value="https://www.opendental.com/manual205/dotnet.html" >v20.5</option><option value="https://www.opendental.com/manual204/dotnet.html" >v20.4</option><option value="https://www.opendental.com/manual203/dotnet.html" >v20.3</option><option value="https://www.opendental.com/manual202/dotnet.html" >v20.2</option><option value="https://www.opendental.com/manual201/dotnet.html" >v20.1</option><option value="https://www.opendental.com/manual194/dotnet.html" >v19.4</option><option value="https://www.opendental.com/manual193/dotnet.html" >v19.3</option><option value="https://www.opendental.com/manual192/dotnet.html" >v19.2</option><option value="https://www.opendental.com/manual191/dotnet.html" >v19.1</option><option value="https://www.opendental.com/manual184/dotnet.html" >v18.4</option><option value="https://www.opendental.com/manual183/dotnet.html" >v18.3</option><option value="https://www.opendental.com/manual182/dotnet.html" >v18.2</option><option value="https://www.opendental.com/manual181/dotnet.html" >v18.1</option><option value="https://www.opendental.com/manual174/dotnet.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>dot Net ( .NET )</p></div>
<div class="GeneralPageContent">
<p>Open Dental <a href="installation.html">Installation</a> requires Microsoft .NET. If Windows is updated regularly, workstations should already have the required files installed. Newer versions of Windows come with .NET installed.</p>
<h2>Version 24.1 and Greater</h2>
<p class="MarginBottomZero">In Open Dental Version 24.1 and greater, Microsoft .NET version 4.8 is required:  </p>
<ul class="MarginBottomGap">
<li><a href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48">.NET 4.8</a> (link to Microsoft website)</li>
</ul>
<h2>Version 20.2 and Greater</h2>
<p class="MarginBottomZero">In Open Dental Version 20.2 and greater, two versions of Microsoft .NET are required. The minimum version requirements are as follows: </p>
<ul class="MarginBottomGap">
<li><a href="https://dotnet.microsoft.com/download/dotnet-framework/net472">.NET 4.7.2</a> (link to Microsoft website).  <ul>
<li>.NET 4.7.2 replaces .NET 4.5. This means they use the same runtime version, but the assembly versions are updated and include new types and members. </li>
</ul>
</li>
<li><a href="../resources/dotnetfx35bootstrapper.exe">.NET 3.5</a> (.exe) <ul>
<li>.NET 3.5 is typically already included in Windows, but it may need to be turned on manually in the Control Panel. </li>
</ul>
</li>
</ul>
<h2>.NET Framework Repair Tool</h2>
<p>Repair Tool: Sometimes the installation must be repaired. See <a href="http://www.microsoft.com/en-us/download/details.aspx?id=30135">http://www.microsoft.com/en-us/download/details.aspx?id=30135</a> to download the Microsoft .NET Framework Repair Tool.</p>
</div>
</div>
</body>
</html>```
