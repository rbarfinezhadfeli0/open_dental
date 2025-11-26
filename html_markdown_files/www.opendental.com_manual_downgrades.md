# File: ./www.opendental.com/manual/downgrades.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Estimate Downgrades</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('downgrades','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/downgrades.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/downgrades.html" >v24.2</option><option value="https://www.opendental.com/manual241/downgrades.html" >v24.1</option><option value="https://www.opendental.com/manual233/downgrades.html" >v23.3</option><option value="https://www.opendental.com/manual232/downgrades.html" >v23.2</option><option value="https://www.opendental.com/manual231/downgrades.html" >v23.1</option><option value="https://www.opendental.com/manual224/downgrades.html" >v22.4</option><option value="https://www.opendental.com/manual223/downgrades.html" >v22.3</option><option value="https://www.opendental.com/manual222/downgrades.html" >v22.2</option><option value="https://www.opendental.com/manual221/downgrades.html" >v22.1</option><option value="https://www.opendental.com/manual214/downgrades.html" >v21.4</option><option value="https://www.opendental.com/manual213/downgrades.html" >v21.3</option><option value="https://www.opendental.com/manual212/downgrades.html" >v21.2</option><option value="https://www.opendental.com/manual211/downgrades.html" >v21.1</option><option value="https://www.opendental.com/manual205/downgrades.html" >v20.5</option><option value="https://www.opendental.com/manual204/downgrades.html" >v20.4</option><option value="https://www.opendental.com/manual203/downgrades.html" >v20.3</option><option value="https://www.opendental.com/manual202/downgrades.html" >v20.2</option><option value="https://www.opendental.com/manual201/downgrades.html" >v20.1</option><option value="https://www.opendental.com/manual194/downgrades.html" >v19.4</option><option value="https://www.opendental.com/manual193/downgrades.html" >v19.3</option><option value="https://www.opendental.com/manual192/downgrades.html" >v19.2</option><option value="https://www.opendental.com/manual191/downgrades.html" >v19.1</option><option value="https://www.opendental.com/manual184/downgrades.html" >v18.4</option><option value="https://www.opendental.com/manual183/downgrades.html" >v18.3</option><option value="https://www.opendental.com/manual182/downgrades.html" >v18.2</option><option value="https://www.opendental.com/manual181/downgrades.html" >v18.1</option><option value="https://www.opendental.com/manual174/downgrades.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Estimate Downgrades</p></div>
<div class="GeneralPageContent">
<p>Downgrades can be customized for each insurance plan.</p>
<p>In an <a href="insplan.html">Insurance Plan</a>, on the Other Ins Info Tab, is a button for <b>Subst Codes</b>.</p>
<img src="images/substitutionCodeOptions.gif" width="461" height="146"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/watch?v=zeaA74Mve3c">QuickTip: Customizing Downgrade Codes for an Insurance Plan</a>.</p>
<p>Sometimes an Insurance Plan reduces payment for a procedure based on material (e.g., composite to amalgam or porcelain to gold). In Open Dental, downgraded estimates are based on insurance substitution codes and whether or not the insurance plan is set up to apply substitution codes.<br/><div class="Note">Note: <ul>
<li>The substitution code fee is never more expensive than the original procedure code fee.</li>
<li>Downgrades can include or exclude write-offs depending on the insurance setup.</li>
<li>To see an example of the math behind downgrades, see <a href="writeoffcalculations.html">PPO Insurance Calculations</a>.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero">When an insurance plan is set to downgrade estimates: </p>
<ul class="MarginBottomGap">
<li>The charted code is still billed to insurance.</li>
<li>The procedure's substitution code is used to estimate the insurance fee. If no fee is entered for the substitution code, the fee for the original procedure is used instead.</li>
<li>The patient usually pays the difference between the original allowed fee and the downgraded fee.</li>
</ul>
<h2>Set a Downgrade on the Insurance Plan Level</h2>
<p>By default, insurance plans are set to apply downgrades for all procedure codes with substitution codes (<i>Don't Substitute Codes</i> is unchecked). Optionally, insurance plans can have specific downgrades set, or universal downgrades can be excluded.</p>
<p class="MarginBottomZero">To include or exclude specific downgrades:  </p>
<ol class="MarginBottomGap">
<li> In the Insurance Plan, click the <b>Other Ins Info</b> tab.</li>
<li>Ensure <b>Don't Substitute Codes</b> is unchecked. This is unchecked by default and determines whether the plan calculates downgrades.</li>
<li>Select whether or not to calculate write-offs by checking or unchecking <b>PPO substitution calculates writeoffs</b>. The write-off is calculated using the office fee and the fee for the originally charted procedure.</li>
<li>Click <b>Subst Codes</b>.<br/><img src="images/insplanSubstCode.gif" width="600" height="334" class="ImageInParagraph"/></li>
<li>Click <b>+Add</b> to add a new substitution code. <ul>
<li>When prompted, select the charted procedure code from the Procedure Code list, then type in the downgraded procedure code in the SubstCode column.</li>
<li>Use the <b>SubstOnlyIf</b> column dropdown to select the condition. See below for details. </li>
<li>When changes are made in this window, an <b>X</b> displays in the InsOnly column, indicating the change is at the insurance plan level.</li>
</ul>
</li>
</ol>
<p class="MarginBottomZero"><b>SubstOnlyIf</b>: When setting a downgrade for an insurance plan, the same originally charted procedure can have multiple downgrade options. For example, if a procedure code downgrades to one code for Second Molars, but a different code for Molars. The hierarchy for how a downgrade is determined in these cases is as follows:  </p>
<ol class="MarginBottomGap">
<li>Never: This procedure code is never downgraded. This also ignores any universally set downgrades.</li>
<li>SecondMolar: Any substitution code charted on a second molar uses the selected downgraded code. </li>
<li>Molar: Any substitution code charted on a molar uses the selected downgraded code. Since this condition could also apply to second molar teeth, we check for the SecondMolar condition first. </li>
<li>Posterior: Any substitution code charted on a posterior tooth uses the selected downgraded code.</li>
<li>Always: Always substitute procedures to the downgraded code, unless a condition above is met.</li>
</ol>
<h2>Do not Downgrade Estimates for an Insurance Plan</h2>
<p>To turn off downgraded estimates for a plan, check <b>Don't Substitute Codes</b>. All estimates for the plan are based on the procedure to be completed and substitution codes are ignored.</p>
<img src="images/downgradesInsPlanNo.gif" width="461" height="90"/><p class="MarginBottomZero">When an insurance plan is set to not downgrade estimates: </p>
<ul class="MarginBottomGap">
<li>The charted code is billed to insurance and used to estimate the insurance payment.</li>
<li>If insurance downgrades the fee, the estimated insurance payment in Open Dental will be inaccurate (i.e., too high).</li>
</ul>
<h2>Set a Downgrade Universally for all Insurance Plans</h2>
<p>For procedures commonly downgraded by most insurances, users can create codes that default to downgrades for all insurance plans.</p>
<p class="MarginBottomZero">By default, Open Dental associates four composite procedure codes with corresponding amalgam substitution codes.  </p>
<ul class="MarginBottomGap">
<li>D2391 (composite) = D2140 (substitute amalgam code)</li>
<li>D2392 (composite) = D2150 (substitute amalgam code)</li>
<li>D2393 (composite) = D2160 (substitute amalgam code)</li>
<li>D2394 (composite) = D2161 (substitute amalgam code)</li>
</ul>
<p class="MarginBottomZero">To create additional universally downgraded codes: </p>
<ol class="MarginBottomGap">
<li>In <a href="procedurecodes.html">Procedure Codes</a>, ensure the correct fees are entered in the fee schedule for both the original (charted) procedure code and the substitution procedure code.</li>
<li>Double-click the charted procedure code. </li>
<li>In the <i>Ins. Subst Code</i> field enter the insurance substitution code.<br/><img src="images/downgrades.gif" width="504" height="154" class="ImageInParagraph"/></li>
<li>Optionally set the <b>Only if</b> condition.  <ul>
<li>Always: Always downgrade this procedure code.</li>
<li>Molar: Only downgrade when procedure is performed on a molar.</li>
<li>Second Molar: Only downgrade when procedure is performed on a second molar.</li>
<li>Never: Never downgrade this code. </li>
<li>Posterior: Only downgrade when this procedure is performed on a posterior tooth.</li>
</ul>
</li>
</ol>
<h2>Blue Book</h2>
<p>If using Blue Book, downgrades need to be entered as a Manual Blue Book fee schedule. See <a href="bluebooksetup.html">Insurance Blue Book Setup</a> for details.</p>
<h2>Fees and Estimates</h2>
<p>When a <a href="claimprocedure.html">Claim Procedure</a> is downgraded, the procedure code used for insurance estimates may change.</p>
<p class="MarginBottomZero">Fees or estimates are determined based on the following procedure codes: </p>
<ul class="MarginBottomGap">
<li>Fee: Original procedure code</li>
<li>Allowed Amt: Substitution procedure code</li>
<li>Patient Copay: Substitution procedure code</li>
<li>Insurance Estimate: Substitution procedure code</li>
<li>Write-off Estimate: Original procedure code</li>
</ul>
</div>
</div>
</body>
</html>```
