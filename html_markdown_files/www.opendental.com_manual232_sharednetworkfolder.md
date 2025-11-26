# File: ./www.opendental.com/manual232/sharednetworkfolder.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Folder Replication</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sharednetworkfolder','replication','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sharednetworkfolder.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sharednetworkfolder.html" >v24.2</option><option value="https://www.opendental.com/manual241/sharednetworkfolder.html" >v24.1</option><option value="https://www.opendental.com/manual233/sharednetworkfolder.html" >v23.3</option><option value="https://www.opendental.com/manual232/sharednetworkfolder.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sharednetworkfolder.html" >v23.1</option><option value="https://www.opendental.com/manual224/sharednetworkfolder.html" >v22.4</option><option value="https://www.opendental.com/manual223/sharednetworkfolder.html" >v22.3</option><option value="https://www.opendental.com/manual222/sharednetworkfolder.html" >v22.2</option><option value="https://www.opendental.com/manual221/sharednetworkfolder.html" >v22.1</option><option value="https://www.opendental.com/manual214/sharednetworkfolder.html" >v21.4</option><option value="https://www.opendental.com/manual213/sharednetworkfolder.html" >v21.3</option><option value="https://www.opendental.com/manual212/sharednetworkfolder.html" >v21.2</option><option value="https://www.opendental.com/manual211/sharednetworkfolder.html" >v21.1</option><option value="https://www.opendental.com/manual205/sharednetworkfolder.html" >v20.5</option><option value="https://www.opendental.com/manual204/sharednetworkfolder.html" >v20.4</option><option value="https://www.opendental.com/manual203/sharednetworkfolder.html" >v20.3</option><option value="https://www.opendental.com/manual202/sharednetworkfolder.html" >v20.2</option><option value="https://www.opendental.com/manual201/sharednetworkfolder.html" >v20.1</option><option value="https://www.opendental.com/manual194/sharednetworkfolder.html" >v19.4</option><option value="https://www.opendental.com/manual193/sharednetworkfolder.html" >v19.3</option><option value="https://www.opendental.com/manual192/sharednetworkfolder.html" >v19.2</option><option value="https://www.opendental.com/manual191/sharednetworkfolder.html" >v19.1</option><option value="https://www.opendental.com/manual184/sharednetworkfolder.html" >v18.4</option><option value="https://www.opendental.com/manual183/sharednetworkfolder.html" >v18.3</option><option value="https://www.opendental.com/manual182/sharednetworkfolder.html" >v18.2</option><option value="https://www.opendental.com/manual181/sharednetworkfolder.html" >v18.1</option><option value="https://www.opendental.com/manual174/sharednetworkfolder.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Folder Replication</p></div>
<div class="GeneralPageContent">
<p>File <a href="replication.html">Replication</a> for shared network folders is important so you can keep folders and files in sync across <a href="multiplelocations.html">Multiple Locations</a>. Below are some file replication tools. See also: <a href="imagesstoreindb.html">Store Images in Database</a>.</p>
<h2>Microsoft Distributed File System (DFS)</h2>
<p><a href="http://technet.microsoft.com/en-us/library/cc753479(v=WS.10).aspx">http://technet.microsoft.com/en-us/library/cc753479(v=WS.10).aspx</a></p>
<p class="MarginBottomZero">This is a good folder replication technology if each replication server has a Windows Server operating system. It enables you to efficiently replicate folders (including those referred to by a DFS namespace path) across multiple servers and sites. You can use DFS Namespaces and DFS Replication to achieve the following goals:  </p>
<ul class="MarginBottomGap">
<li>DFS Namespaces - Provide users with a centralized folder namespace through which to access and store files. You can host the underlying file shares on different servers and in different sites to improve availability and performance.</li>
<li>DFS Replication - Synchronize folder contents efficiently between servers, across LAN or WAN network connections.</li>
</ul>
<p class="MarginBottomZero">Other useful resources: </p>
<ul class="MarginBottomGap">
<li>DFS Namespaces and DFS Replication Overview: <a href="http://technet.microsoft.com/en-us/library/jj127250.aspx">http://technet.microsoft.com/en-us/library/jj127250.aspx</a></li>
<li>Deploying DFS Replication: <a href="http://technet.microsoft.com/en-us/library/cc770925.aspx">http://technet.microsoft.com/en-us/library/cc770925.aspx</a></li>
</ul>
<h2>FreeFileSynch</h2>
<p><a href="http://www.freefilesync.org/manual.php?topic=external-applications">http://www.freefilesync.org/manual.php?topic=external-applications</a></p>
<p>Free Open Source software that helps you synchronize files and folders for Windows, Linux and macOS.</p>
</div>
</div>
</body>
</html>```
