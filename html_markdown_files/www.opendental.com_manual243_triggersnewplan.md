# File: ./www.opendental.com/manual243/triggersnewplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Fields that Trigger New Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('triggersnewplan','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/triggersnewplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/triggersnewplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/triggersnewplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/triggersnewplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/triggersnewplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/triggersnewplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/triggersnewplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/triggersnewplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/triggersnewplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/triggersnewplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/triggersnewplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/triggersnewplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/triggersnewplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/triggersnewplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/triggersnewplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/triggersnewplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/triggersnewplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/triggersnewplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/triggersnewplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/triggersnewplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/triggersnewplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/triggersnewplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/triggersnewplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/triggersnewplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/triggersnewplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/triggersnewplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/triggersnewplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/triggersnewplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fields that Trigger New Plan</p></div>
<div class="GeneralPageContent">
<p>New plans can be created from an existing insurance plan.</p>
<p>In an <a href="insplan.html">Insurance Plan</a>, select <b>Create new Plan if needed</b>. </p>
<img src="images/triggersPlanCreate.gif" width="248" height="52"/><p>To create a new plan, ensure the radio button above is selected, and at least one of the following field values must change. This is useful when a plan changes for a single subscriber, but not all other subscribers on the plan. Only plans with more than one subscriber are changed.</p>
<p>The following fields are listed in order as shown on the insurance plan. (Top to bottom, each tab, then subscriber information.)</p>
<p>When <i>Create new Plan if needed</i> is selected, a new plan is assigned to the currently selected subscriber (and any dependents). Historical claims are updated to reflect the new plan information. If the subscriber has a new insurance plan and historical claims should not be changed, the current plan should be dropped and a new plan added instead.</p>
<p><b>Field = Db Column Name</b></p>
<p>Medical Insurance = IsMedical</p>
<p>Employer = EmployerNum</p>
<p>Carrier Information = CarrierNum</p>
<p>Group Name = GroupName</p>
<p>Group Number = GroupNum</p>
<p>Plan Type = PlanType</p>
<p>Manual Blue Book fee schedule</p>
<p>Use Alternate Code = UseAltCode</p>
<p>Don't Substitute Codes = CodeSubstNone</p>
<p>Claims show for UCR fee, not billed fee = ClaimsUseUCR</p>
<p>Hidden = IsHidden</p>
<p>Fee Schedule = FeeSched</p>
<p>Claim Form = ClaimFormNum</p>
<p>Patient Co-Pay Amounts = CopayFeeSched</p>
<p>Carrier Allowed Amounts = AllowedFeeSched</p>
<p>COB Rule = CobRule</p>
<p>Filing Code = FilingCode</p>
<p>File Code Subtypes = FilingCodeSubtype</p>
<p>Claim show base units = ShowBaseUnits</p>
<p>Ortho Claim Type = OrthoType</p>
<p>Ortho Auto Proc = OrthoAutoProc</p>
<p>Ortho Auto Fee = OrthoAutoFeeBilled</p>
<p>Auto Proc Period = OrthoAutoProcFreq</p>
<p>Wait 30 days before creating first automatic claim = OrthoAutoClaimDayWait</p>
<p>Plan Note = PlanNote</p>
<p>Trojan ID = TrojanID</p>
<p>Benefit Year (Benefit Info window) = MonthRenew</p>
<p>Don't Verify checkbox = HideFromVerifyList</p>
<p><b>Canadian Customers only:</b></p>
<p> Div. No. = DivisionNo</p>
<p> Dentaide Card Sequence = DentaideCardSequence</p>
<p> Plan Flag = CanadianPlanFlag</p>
</div>
</div>
</body>
</html>```
