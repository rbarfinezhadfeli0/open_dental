# File: ./www.opendental.com/manual232/middletier.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Middle Tier</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('middletier','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/middletier.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/middletier.html" >v24.2</option><option value="https://www.opendental.com/manual241/middletier.html" >v24.1</option><option value="https://www.opendental.com/manual233/middletier.html" >v23.3</option><option value="https://www.opendental.com/manual232/middletier.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/middletier.html" >v23.1</option><option value="https://www.opendental.com/manual224/middletier.html" >v22.4</option><option value="https://www.opendental.com/manual223/middletier.html" >v22.3</option><option value="https://www.opendental.com/manual222/middletier.html" >v22.2</option><option value="https://www.opendental.com/manual221/middletier.html" >v22.1</option><option value="https://www.opendental.com/manual214/middletier.html" >v21.4</option><option value="https://www.opendental.com/manual213/middletier.html" >v21.3</option><option value="https://www.opendental.com/manual212/middletier.html" >v21.2</option><option value="https://www.opendental.com/manual211/middletier.html" >v21.1</option><option value="https://www.opendental.com/manual205/middletier.html" >v20.5</option><option value="https://www.opendental.com/manual204/middletier.html" >v20.4</option><option value="https://www.opendental.com/manual203/middletier.html" >v20.3</option><option value="https://www.opendental.com/manual202/middletier.html" >v20.2</option><option value="https://www.opendental.com/manual201/middletier.html" >v20.1</option><option value="https://www.opendental.com/manual194/middletier.html" >v19.4</option><option value="https://www.opendental.com/manual193/middletier.html" >v19.3</option><option value="https://www.opendental.com/manual192/middletier.html" >v19.2</option><option value="https://www.opendental.com/manual191/middletier.html" >v19.1</option><option value="https://www.opendental.com/manual184/middletier.html" >v18.4</option><option value="https://www.opendental.com/manual183/middletier.html" >v18.3</option><option value="https://www.opendental.com/manual182/middletier.html" >v18.2</option><option value="https://www.opendental.com/manual181/middletier.html" >v18.1</option><option value="https://www.opendental.com/manual174/middletier.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Middle Tier</p></div>
<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a>.</p>
<p>The Middle Tier is an option for <a href="multiplelocations.html">Multiple Locations</a> that isolates the database, improving speed and security by preventing client workstations from directly accessing the database. The server program sits between the database and the client machines. Workstations are ordinary thick clients running the full Windows version of Open Dental. Middle Tier is a useful option for large local networks that might be shared with non-users of Open Dental (like a college campus or hospital). </p>
<p>This diagram explains the 3-tier architecture used in enterprise settings.</p>
<img src="images/Tiers6.gif" width="669" height="337"/><ul>
<li>The business layer can be on the same physical computer as the database or on a dedicated server.</li>
<li>The large arrows represent chatty connections.</li>
<li>The thin arrows represent the slow connections for which the program has been optimized. Fewer calls are made across the slow connections.</li>
</ul>
<br/><p><b>Speed</b>: The goal is to have only one call to the server for each page of display on the screen. This single call will return a single dataset (group of tables) which is as small as possible. Eliminating multiple calls reduces latency (roundtrip time) issues, such as when connecting across a satellite connection. Keeping the result set small helps the program remain responsive even when the connection is slow (e.g., a dial-up connection).</p>
<p class="MarginBottomZero"><b>Security</b>: An advantage of using a Middle Tier is increased security. In a direct connection, the MySQL username and password must be stored on the client computer. But with a Middle Tier, the client doesn't need access to the MySQL username and password. There is still not any security for the <a href="paths.html">Paths</a> if using local or network folders. Each client must still have access to a shared OpenDentImages folder to view items in the Imaging Module. There are a few options: </p>
<ul class="MarginBottomGap">
<li>Local Access: If only a single location uses Middle Tier (e.g., as an added security measure), then providing normal local access is a solid option.</li>
<li>Multiple Location Access: It is best to replicate the files (e.g., DFS replication) or access the OpenDentImages folder via VPN connection. This helps prevent inconsistencies when storing images and documents.</li>
</ul>
<p>Although it is not shown above, multiple clients can connect through either of the two methods and both connection methods can be used simultaneously. In fact, a direct connection is required when updating versions, and this requirement is satisfied by running the OpenDental.exe directly on the Middle Tier server.</p>
<p>See <a href="middletierinstallation.html">Middle Tier Installation</a> for more information.</p>
</div>
</div>
</body>
</html>```
