# File: ./www.opendental.com/manual243/unittestdowngrades.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Estimate Downgrade Unit Tests</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('unittestdowngrades','unittesting.html','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/unittestdowngrades.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/unittestdowngrades.html" >v24.2</option><option value="https://www.opendental.com/manual241/unittestdowngrades.html" >v24.1</option><option value="https://www.opendental.com/manual233/unittestdowngrades.html" >v23.3</option><option value="https://www.opendental.com/manual232/unittestdowngrades.html" >v23.2</option><option value="https://www.opendental.com/manual231/unittestdowngrades.html" >v23.1</option><option value="https://www.opendental.com/manual224/unittestdowngrades.html" >v22.4</option><option value="https://www.opendental.com/manual223/unittestdowngrades.html" >v22.3</option><option value="https://www.opendental.com/manual222/unittestdowngrades.html" >v22.2</option><option value="https://www.opendental.com/manual221/unittestdowngrades.html" >v22.1</option><option value="https://www.opendental.com/manual214/unittestdowngrades.html" >v21.4</option><option value="https://www.opendental.com/manual213/unittestdowngrades.html" >v21.3</option><option value="https://www.opendental.com/manual212/unittestdowngrades.html" >v21.2</option><option value="https://www.opendental.com/manual211/unittestdowngrades.html" >v21.1</option><option value="https://www.opendental.com/manual205/unittestdowngrades.html" >v20.5</option><option value="https://www.opendental.com/manual204/unittestdowngrades.html" >v20.4</option><option value="https://www.opendental.com/manual203/unittestdowngrades.html" >v20.3</option><option value="https://www.opendental.com/manual202/unittestdowngrades.html" >v20.2</option><option value="https://www.opendental.com/manual201/unittestdowngrades.html" >v20.1</option><option value="https://www.opendental.com/manual194/unittestdowngrades.html" >v19.4</option><option value="https://www.opendental.com/manual193/unittestdowngrades.html" >v19.3</option><option value="https://www.opendental.com/manual192/unittestdowngrades.html" >v19.2</option><option value="https://www.opendental.com/manual191/unittestdowngrades.html" >v19.1</option><option value="https://www.opendental.com/manual184/unittestdowngrades.html" >v18.4</option><option value="https://www.opendental.com/manual183/unittestdowngrades.html" >v18.3</option><option value="https://www.opendental.com/manual182/unittestdowngrades.html" >v18.2</option><option value="https://www.opendental.com/manual181/unittestdowngrades.html" >v18.1</option><option value="https://www.opendental.com/manual174/unittestdowngrades.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Estimate Downgrade Unit Tests</p></div>
<div class="GeneralPageContent">
<p>These Unit Tests are for <a href="downgrades.html">Estimate Downgrades</a>.</p>
<p><b>Test #60</b>: Patient has a PPO plan which covers D2393 at 100%. UCR fee for D2393 is $300 and PPO is $120. D2393 downgrades to D2160 always. D2160 has a UCR fee of $100 and the PPO fee is blank. When adding a procedure for D2393 for this patient, the allowed amount should be $120, the writeoff should be $180, and the insurance estimate should be $120.</p>
<ul>
<li>UCR fee for D2393: $300</li>
<li>PPO fee for D2393: $120</li>
<li>D2393 downgrades to D2160 always</li>
<li>UCR fee for D2160: $100</li>
<li>PPO fee for D2160: Blank</li>
<li>Add a D2393 for this patient</li>
<li>Allowed amount: $120</li>
<li>Writeoff: $180</li>
<li>Insurance estimate: $120</li>
</ul>
<br/><p><b>Test #61</b>: Patient has a PPO plan which covers D2391 at 100%. UCR fee for D2393 is $140 and PPO fee is $80. D2391 downgrades to D2140 always. D2140 has a UCR fee of $120 and a PPO fee of $100. When adding a procedure for D2391 for this patient, the allowed amount should be $80, the writeoff should be $60, and the insurance estimate should be $80.</p>
<ul>
<li>UCR fee for D2391: $140</li>
<li>PPO fee for D2391: $80</li>
<li>D2391 downgrades to D2140 always</li>
<li>UCR fee for D2140: $120</li>
<li>PPO fee for D2140: $100</li>
<li>Add a D2391 for this patient</li>
<li>Allowed amount: $80</li>
<li>Writeoff: $60</li>
<li>Insurance estimate: $80</li>
</ul>
<br/><p>Related Links:</p>
<ul>
<li><a href="unittestpaymentplan.html">Payment Plan Unit Tests</a></li>
<li><a href="unittestrepeatingcharges.html">Repeating Charges Unit Tests</a></li>
<li><a href="hl7tests.html">HL7 Unit Tests</a></li>
</ul>
</div>
</div>
</body>
</html>```
