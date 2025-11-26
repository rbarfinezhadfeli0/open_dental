# File: ./www.opendental.com/manual232/otherbenefits.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Other Benefits</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('otherbenefits','benefitinfo','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/otherbenefits.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/otherbenefits.html" >v24.2</option><option value="https://www.opendental.com/manual241/otherbenefits.html" >v24.1</option><option value="https://www.opendental.com/manual233/otherbenefits.html" >v23.3</option><option value="https://www.opendental.com/manual232/otherbenefits.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/otherbenefits.html" >v23.1</option><option value="https://www.opendental.com/manual224/otherbenefits.html" >v22.4</option><option value="https://www.opendental.com/manual223/otherbenefits.html" >v22.3</option><option value="https://www.opendental.com/manual222/otherbenefits.html" >v22.2</option><option value="https://www.opendental.com/manual221/otherbenefits.html" >v22.1</option><option value="https://www.opendental.com/manual214/otherbenefits.html" >v21.4</option><option value="https://www.opendental.com/manual213/otherbenefits.html" >v21.3</option><option value="https://www.opendental.com/manual212/otherbenefits.html" >v21.2</option><option value="https://www.opendental.com/manual211/otherbenefits.html" >v21.1</option><option value="https://www.opendental.com/manual205/otherbenefits.html" >v20.5</option><option value="https://www.opendental.com/manual204/otherbenefits.html" >v20.4</option><option value="https://www.opendental.com/manual203/otherbenefits.html" >v20.3</option><option value="https://www.opendental.com/manual202/otherbenefits.html" >v20.2</option><option value="https://www.opendental.com/manual201/otherbenefits.html" >v20.1</option><option value="https://www.opendental.com/manual194/otherbenefits.html" >v19.4</option><option value="https://www.opendental.com/manual193/otherbenefits.html" >v19.3</option><option value="https://www.opendental.com/manual192/otherbenefits.html" >v19.2</option><option value="https://www.opendental.com/manual191/otherbenefits.html" >v19.1</option><option value="https://www.opendental.com/manual184/otherbenefits.html" >v18.4</option><option value="https://www.opendental.com/manual183/otherbenefits.html" >v18.3</option><option value="https://www.opendental.com/manual182/otherbenefits.html" >v18.2</option><option value="https://www.opendental.com/manual181/otherbenefits.html" >v18.1</option><option value="https://www.opendental.com/manual174/otherbenefits.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Other Benefits</p></div>
<div class="GeneralPageContent">
<p>Other Benefits are additional benefits or overrides added to insurance plans. </p>
<p>In the <a href="benefitinfo.html">Edit Benefits</a> window, at the bottom, is the Other Benefits grid.</p>
<img src="images/otherBenefits.gif" width="578" height="215"/><p>For a detailed explanation of options on the Edit Benefit window, see <a href="benefitinforowview.html">Edit Benefits - Row View</a>. Other Benefits are useful when setting up an incentive plan, or when overriding typical insurance percentages or amounts. Only specific scenarios listed below are known to work. Combinations not listed will display in the benefits section for informational purposes only.</p>
<p>Click <b>Add,</b> or double-click an existing benefit to edit.</p>
<h2>1. Override a procedure or category benefit percentage for a specific patient but not everyone on the plan (e.g. incentive plans)</h2>
<p>This may be necessary when you have an incentive plan and each family member is at a different percentage.</p>
<img src="images/otherBenefitOverrideRow.gif" width="578" height="52"/><img src="images/otherbenefitoverride.png" width="629" height="546"/><h2>2. Cover a procedure at a different percentage</h2>
<p>For example, insurance covers nitrous oxide at 80%, even though other procedures in that Insurance Category are not covered (0%).</p>
<img src="images/otherbenefitDiffPercRow.gif" width="578" height="52"/><img src="images/otherbenefitDiffPerc.png" width="629" height="546"/><h2>3. Some work does not apply toward regular annual max</h2>
<p>This may be necessary when you need to add a benefit that does not apply to the annual max. For each category you want to exclude from the annual max, create a new benefit.</p>
<p class="MarginBottomZero">Examples: </p>
<ul class="MarginBottomGap">
<li>CHIP</li>
<li>Some Medicaid plans</li>
<li>A plan that has a x-ray limit of $150 for the year, with everything else covered at a flat co-pay amount.</li>
<li>Diagnostic, preventive, and x-rays that do not apply to the annual max.</li>
<li>A specific procedure code is covered up to a set amount. Enter the procedure code with the amount it will be covered up to by insurance.</li>
</ul>
<img src="images/otherbenefitPreventiveRow.gif" width="578" height="52"/><img src="images/otherbenefitPreventive.png" width="629" height="546"/><h2>4. Each family member has a different annual maximum</h2>
<p>For each family member, add an Other Benefit using the settings below.</p>
<div class="Note">Note: Remove the Annual Maximum values entered in the Edit Benefits window first. Otherwise, these annual maximum Other Benefits will not be applied.</div>
<img src="images/otherbenefitAnnualMaxRow.gif" width="578" height="52"/><img src="images/otherbenefitAnnualMax.png" width="629" height="546"/><h2>5. No max for a category (e.g., preventive).</h2>
<img src="images/otherBenefitsNoMaxPreventiveRow.gif" width="578" height="52"/><img src="images/otherBenefitsNoMaxPreventive.png" width="629" height="546"/><p>You can also set the time period as service year if appropriate. Test in the treatment plan module (e.g., add a $10000 preventive procedure and a $200 filling to make sure it behaves as expected.)</p>
<h2>6. Set an age limitation</h2>
<p>The age limit is through the designated age. For example, entering 16 will cover the patient until their 17th birthday. <div class="Note">Note: Fluoride, Sealants, and Ortho age limitations can be set from the Edit Benefits window.</div>
</p>
<img src="images/otherbenefitAgeLimitrow.png" width="578" height="65"/><img src="images/otherbenefitAgeLimit.png" width="629" height="546"/><h2>7. There is a waiting period on a specific code</h2>
<p>Waiting periods can be set by code from the Edit Benefits window. Individual codes can be done using the setup below. An effective date is required to be entered in the Insurance plan for the calculations to work.</p>
<img src="images/otherbenefitWaitingPeriodRow.png" width="578" height="65"/><img src="images/otherbenefitWaitingPeriod.png" width="629" height="546"/><h2>8. Certain Codes or Categories have Exclusions</h2>
<p>Some states or municipalities allow uncovered procedures to be charged at the full UCR fee with no writeoffs. Create an Other Benefit to define which procedures or categories are subject to this Exclusion.</p>
<img src="images/otherbenefitExclusionRow.png" width="578" height="52"/><img src="images/otherbenefitExclusion.png" width="629" height="546"/><p>Define how Exclusions are billed in Preferences, or in the <a href="insplan.html">Insurance Plan</a>, Other Ins Info tab.</p>
<h2>9. Lifetime Max for Code or Category</h2>
<p>For plans that have a lifetime maximum for certain codes or categories, create an Other Benefit to define the applicable code or category, and the amount.</p>
<img src="images/otherbenefitLifetimeMaxRow.png" width="578" height="65"/><br/><img src="images/otherbenefitLifetimeMax.png" width="629" height="546" class="ImageInParagraph"/><h2>10. Deductible max for category or procedure</h2>
<p>For categories or procedures that have a deductible that differs from the general annual deductible create an Other Benefit to define this amount. </p>
<img src="images/otherBenefitRowDeductible.gif" width="578" height="52"/><img src="images/otherBenefitDeductible.png" width="629" height="546"/><div class="Note">Note: Deductibles for Diagnostic, X-Ray, and Routine Preventive can be set from the Edit Benefits window. See <a href="deductibles.html">Deductibles</a> for more information. Deductibles entered as an Other Benefit will still apply towards the general deductible.</div>
<h2>11. Override a frequency limitation for a specific patient, but not everyone on the plan.</h2>
<p>This may be necessary for patients enrolled in special insurance programs due to higher oral health risk.</p>
<img src="images/otherBenefitRowFrequency.png" width="578" height="52"/><img src="images/otherBenefitFrequency.png" width="629" height="546"/><p class="MarginBottomZero">This other benefit must be set up in the following way to function properly:  </p>
<ul class="MarginBottomGap">
<li><b>Patient Override</b>: This box must be checked.</li>
<li><b>or Proc Code</b>: Procedure codes must already be added to <a href="codegroups.html">Code Groups</a>. All procedure codes for the Code Group are considered for the frequency limitation (e.g., if D1110, all codes entered in the <i>Prophy</i> Code Group are considered).</li>
<li><b>Type</b>: Limitations</li>
<li><b>Time Period</b> and <b>Qualifier</b>: Must be the same as any plan-level <a href="insfrequencylimitations.html">Frequency Limitation</a> (e.g., if the plan-level benefit is NumberOfServices per CalendarYear, the override must be as well).</li>
<li><b>Coverage Level</b>: None</li>
</ul>
<h2>12. If you have different categories</h2>
<p>Usually this means you are in a country other than the U.S. or Canada, and thus using Row View instead of Simplified View. Enter the insurance categories in <a href="definitions.html">Definitions</a> and <a href="inscatssetup.html">Insurance Categories</a>. Then assign benefit amounts. For a Canadian Time Unit benefit example, see <a href="canadaproctimeunits.html">Canada Procedure Code Time Units</a>.</p>
</div>
</div>
</body>
</html>```
