# File: ./www.opendental.com/manual232/apiusergroups.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - API UserGroups</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apiusergroups','apispecification','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/apiusergroups.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/apiusergroups.html" >v24.2</option><option value="https://www.opendental.com/manual241/apiusergroups.html" >v24.1</option><option value="https://www.opendental.com/manual233/apiusergroups.html" >v23.3</option><option value="https://www.opendental.com/manual232/apiusergroups.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/apiusergroups.html" >v23.1</option><option value="https://www.opendental.com/manual224/apiusergroups.html" >v22.4</option><option value="https://www.opendental.com/manual223/apiusergroups.html" >v22.3</option><option value="https://www.opendental.com/manual222/apiusergroups.html" >v22.2</option><option value="https://www.opendental.com/manual221/apiusergroups.html" >v22.1</option><option value="https://www.opendental.com/manual214/apiusergroups.html" >v21.4</option><option value="https://www.opendental.com/manual213/apiusergroups.html" >v21.3</option><option value="https://www.opendental.com/manual212/apiusergroups.html" >v21.2</option><option value="https://www.opendental.com/manual211/apiusergroups.html" >v21.1</option><option value="https://www.opendental.com/manual205/apiusergroups.html" >v20.5</option><option value="https://www.opendental.com/manual204/apiusergroups.html" >v20.4</option><option value="https://www.opendental.com/manual203/apiusergroups.html" >v20.3</option><option value="https://www.opendental.com/manual202/apiusergroups.html" >v20.2</option><option value="https://www.opendental.com/manual201/apiusergroups.html" >v20.1</option><option value="https://www.opendental.com/manual194/apiusergroups.html" >v19.4</option><option value="https://www.opendental.com/manual193/apiusergroups.html" >v19.3</option><option value="https://www.opendental.com/manual192/apiusergroups.html" >v19.2</option><option value="https://www.opendental.com/manual191/apiusergroups.html" >v19.1</option><option value="https://www.opendental.com/manual184/apiusergroups.html" >v18.4</option><option value="https://www.opendental.com/manual183/apiusergroups.html" >v18.3</option><option value="https://www.opendental.com/manual182/apiusergroups.html" >v18.2</option><option value="https://www.opendental.com/manual181/apiusergroups.html" >v18.1</option><option value="https://www.opendental.com/manual174/apiusergroups.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>API UserGroups</p></div>
<div class="GeneralPageContent">
<p>See <a href="../site/apispecification.html">API Specification</a></p>
<p>See <a href="securityusers.html">User Edit</a> for more information.</p>
<h2>UserGroups GET</h2>
<p>Version Added: 23.2.21</p>
<p>Gets a list of user groups, which can include CEMT user groups. See <a href="https://opendental.com/manual/securityusergroups.html">User Groups</a>.</p>
<p><b>includeCEMT:</b> Optional. Either "true" or "false". Set to "true" to return usergroups that are designated as CEMT as well as those that are not. Default "false".</p>
<p><b>Example Request:</b><br/> GET /usergroups<br/> GET /usergroups?includeCEMT=true<br/></p>
<p><b>Example Response:</b><br/><span class="codeblock"> [<br/>  {<br/> "UserGroupNum": 1,<br/>  "Description": "Admin",<br/>  "UserGroupNumCEMT": 0<br/> },<br/>  {<br/> "UserGroupNum": 3,<br/>  "Description": "Security",<br/>  "UserGroupNumCEMT": 3<br/> },<br/>  {<br/> "UserGroupNum": 4,<br/>  "Description": "HR",<br/>  "UserGroupNumCEMT": 0<br/> },<br/> etc...<br/> ]<br/></span></p>
<p>200 OK<br/> 400 Bad Request (with explanation)<br/></p>
</div>
</div>
</body>
</html>```
