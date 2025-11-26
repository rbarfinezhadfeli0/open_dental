# File: ./www.opendental.com/manual243/accrual.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Accrual Accounting </title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('accrual','accounting','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/accrual.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/accrual.html" >v24.2</option><option value="https://www.opendental.com/manual241/accrual.html" >v24.1</option><option value="https://www.opendental.com/manual233/accrual.html" >v23.3</option><option value="https://www.opendental.com/manual232/accrual.html" >v23.2</option><option value="https://www.opendental.com/manual231/accrual.html" >v23.1</option><option value="https://www.opendental.com/manual224/accrual.html" >v22.4</option><option value="https://www.opendental.com/manual223/accrual.html" >v22.3</option><option value="https://www.opendental.com/manual222/accrual.html" >v22.2</option><option value="https://www.opendental.com/manual221/accrual.html" >v22.1</option><option value="https://www.opendental.com/manual214/accrual.html" >v21.4</option><option value="https://www.opendental.com/manual213/accrual.html" >v21.3</option><option value="https://www.opendental.com/manual212/accrual.html" >v21.2</option><option value="https://www.opendental.com/manual211/accrual.html" >v21.1</option><option value="https://www.opendental.com/manual205/accrual.html" >v20.5</option><option value="https://www.opendental.com/manual204/accrual.html" >v20.4</option><option value="https://www.opendental.com/manual203/accrual.html" >v20.3</option><option value="https://www.opendental.com/manual202/accrual.html" >v20.2</option><option value="https://www.opendental.com/manual201/accrual.html" >v20.1</option><option value="https://www.opendental.com/manual194/accrual.html" >v19.4</option><option value="https://www.opendental.com/manual193/accrual.html" >v19.3</option><option value="https://www.opendental.com/manual192/accrual.html" >v19.2</option><option value="https://www.opendental.com/manual191/accrual.html" >v19.1</option><option value="https://www.opendental.com/manual184/accrual.html" >v18.4</option><option value="https://www.opendental.com/manual183/accrual.html" >v18.3</option><option value="https://www.opendental.com/manual182/accrual.html" >v18.2</option><option value="https://www.opendental.com/manual181/accrual.html" >v18.1</option><option value="https://www.opendental.com/manual174/accrual.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Accrual Accounting </p></div>
<div class="GeneralPageContent">
<p>Most small dental offices use cash-basis <a href="accounting.html">Accounting</a> rather than accrual-basis accounting. This page is an attempt to discuss how to use Open Dental in an accrual-basis accounting scenario.</p>
<p class="MarginBottomZero"><b>Current Guidelines</b></p>
<ol class="MarginBottomGap">
<li>In <a href="securitysettings.html">Global Security Settings</a>, use the lock date feature to prevent users from making changes.</li>
<li>After locking, run monthly reports. Never unlock to make historical changes.</li>
<li>PPO write-offs: See <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>, where it discusses the option for <i>Default selected date for PPO write-offs</i>. Set to <i>Insurance Pay Date</i> to avoid changing history.</li>
</ol>
<p>To keep track of prepayments, see <a href="unearnedprepayment.html">Unearned / Prepayment</a>.</p>
<p>Also see the <a href="reportunearnedallocation.html">Unearned Allocation Report</a>.</p>
</div>
</div>
</body>
</html>```
