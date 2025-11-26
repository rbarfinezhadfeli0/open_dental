# File: ./www.opendental.com/manual232/dentalserverreq.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental School Servers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dentalserverreq','dentalschools','showfeatures','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dentalserverreq.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dentalserverreq.html" >v24.2</option><option value="https://www.opendental.com/manual241/dentalserverreq.html" >v24.1</option><option value="https://www.opendental.com/manual233/dentalserverreq.html" >v23.3</option><option value="https://www.opendental.com/manual232/dentalserverreq.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dentalserverreq.html" >v23.1</option><option value="https://www.opendental.com/manual224/dentalserverreq.html" >v22.4</option><option value="https://www.opendental.com/manual223/dentalserverreq.html" >v22.3</option><option value="https://www.opendental.com/manual222/dentalserverreq.html" >v22.2</option><option value="https://www.opendental.com/manual221/dentalserverreq.html" >v22.1</option><option value="https://www.opendental.com/manual214/dentalserverreq.html" >v21.4</option><option value="https://www.opendental.com/manual213/dentalserverreq.html" >v21.3</option><option value="https://www.opendental.com/manual212/dentalserverreq.html" >v21.2</option><option value="https://www.opendental.com/manual211/dentalserverreq.html" >v21.1</option><option value="https://www.opendental.com/manual205/dentalserverreq.html" >v20.5</option><option value="https://www.opendental.com/manual204/dentalserverreq.html" >v20.4</option><option value="https://www.opendental.com/manual203/dentalserverreq.html" >v20.3</option><option value="https://www.opendental.com/manual202/dentalserverreq.html" >v20.2</option><option value="https://www.opendental.com/manual201/dentalserverreq.html" >v20.1</option><option value="https://www.opendental.com/manual194/dentalserverreq.html" >v19.4</option><option value="https://www.opendental.com/manual193/dentalserverreq.html" >v19.3</option><option value="https://www.opendental.com/manual192/dentalserverreq.html" >v19.2</option><option value="https://www.opendental.com/manual191/dentalserverreq.html" >v19.1</option><option value="https://www.opendental.com/manual184/dentalserverreq.html" >v18.4</option><option value="https://www.opendental.com/manual183/dentalserverreq.html" >v18.3</option><option value="https://www.opendental.com/manual182/dentalserverreq.html" >v18.2</option><option value="https://www.opendental.com/manual181/dentalserverreq.html" >v18.1</option><option value="https://www.opendental.com/manual174/dentalserverreq.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental School Servers</p></div>
<div class="GeneralPageContent">
<p>Here are some ideas for <a href="dentalschools.html">Dental Schools</a> server organization:</p>
<p><b>MySQL Server</b>: Running the MySQL database.</p>
<p><b>Application Server 1</b>: Running our <a href="middletier.html">Middle Tier</a> for security.</p>
<p><b>Application Server 2 (optional)</b>: Also running the Middle Tier. Serving more workstations. This may not be needed if Application Server 1 is adequate for the number of workstations.</p>
<p><b>Remote Desktop Server (optional)</b>: Using either MS or a competing remoting solution. This would only be for a few remote users, not for the majority of users.</p>
<p><b>Report Server (optional)</b>: Running a <a href="replication.html">Replication</a> replica database to take some load off the MySQL Server. If a malformed query is run, this report server will go down instead of the MySQL Server. Limit primary keys to a narrow range.</p>
<p><b>File Server (maybe optional)</b>: For storing images, especially radiographs, but also scanned documents. The needed capacity of the file server will vary widely between institutions. If any scanning or digital imaging will be performed, this should be a separate server.</p>
</div>
</div>
</body>
</html>```
