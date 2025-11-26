# File: ./www.opendental.com/manual243/ehrsettings.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Settings</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrsettings','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrsettings.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrsettings.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrsettings.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrsettings.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrsettings.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrsettings.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrsettings.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrsettings.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrsettings.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrsettings.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrsettings.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrsettings.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrsettings.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrsettings.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrsettings.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrsettings.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrsettings.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrsettings.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrsettings.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrsettings.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrsettings.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrsettings.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrsettings.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrsettings.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrsettings.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrsettings.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrsettings.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrsettings.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Settings</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="chart.html">Chart</a>, <a href="ehrsetupwindow.html">EHR</a>, then click <b>Settings</b> in the upper left corner.</p>
<img src="images/ehrSettings.gif" width="493" height="723"/><p>EHR settings include meaningful use (MU) stage options, drug interaction severity levels, and default encounter and pregnancy diagnosis codes used in CQMs. These settings should be defined prior to entering patient data for MU.</p>
<h2>Global Settings</h2>
<p class="MarginBottomZero"><b>Only show high significance Rx alerts</b>: Determine whether less severe <a href="rxinteractionchecks.html">Rx / Prescription Alert</a> show when writing paper prescriptions in Open Dental. High significance alerts always show. </p>
<ul class="MarginBottomGap">
<li>Check the box to only show severe/high significance alerts.</li>
<li>Uncheck the box to show all alerts, regardless of severity level.</li>
</ul>
<p class="MarginBottomZero"><b>Automatically send Summary of Care webmails</b>: Determines if <a href="securewebmail.html">Secure WebMail Feature</a> about summaries of care are automatically sent to patients when a referral is made to another provider. </p>
<ul class="MarginBottomGap">
<li>Check the box to automatically send patients a summary of care WebMail when a referral to another provider is made.</li>
<li>Uncheck the box to not send patients an automatic summary of care WebMail when a referral is made.</li>
</ul>
<p>Select the stage of meaningful use to apply to provider's whose EHR Meaningful Use setting is <i>Use Global</i> (<a href="providerseditwindow.html">Provider</a>). Stage determines which measures list on the EHR dashboard and in Measure Reports. There are three options:</p>
<img src="images/ehrSettingsMU.gif" width="163" height="64"/><br/><br/><p><a href="../site/ehrmodified2.html">Modified Stage 2</a> (this should be the setting for all providers entering meaningful use data.)</p>
<p>Stage 1 and Stage 2 can be used for historical information.</p>
<h2>Default Encounter Code</h2>
<p>By setting a default encounter code, you ensure that an <a href="ehrencounters.html">Encounter</a> (based on the code) is automatically generated every time a procedure is set complete. Only one encounter per date/patient/provider combination will be generated. So if a patient has procedures completed on one day, one by a dentist and one by a hygienist, an encounter will be generated for each provider.</p>
<p>You are not limited to the recommended codes and can choose your own SNOMED CT codes, <a href="procedurecodetools.html">CDT</a> codes, CPT Codes or HCPCS code. However, if you choose a code not in the recommended list, patients may not be included in CQM calculations if the code does not qualify. If you do not select a code at all, encounters must be manually created in order to affect CQM calculations.</p>
<p class="MarginBottomZero">Recommended Codes: These 9 SNOMED CT codes are used in every CQM. Click the dropdown to select. A description will show. </p>
<ul class="MarginBottomGap">
<li>none: Encounters will NOT be automatically generated.</li>
<li>90052600: Initial evaluation and management of healthy individual (procedure)</li>
<li>185349003: Encounter for check-up (procedure)</li>
<li>185463005: Visit out of hours (procedure)</li>
<li>185465003: Weekend visit (procedure)</li>
<li>270427003: Patient-initiated encounter (procedure)</li>
<li>270430005: Provider-initiated encounter (procedure)</li>
<li>308335008: Patient encounter procedure (procedure)</li>
<li>390906007: Follow-up encounter (procedure)</li>
<li>406547006: Urgent follow-up (procedure)</li>
</ul>
<p><b>Insert Encs</b>: Generate encounters for a code for a date range. For example, you would generate codes if you did not select an encounter code before your reporting period. See <a href="ehrencountercodetool.html">Generating Encounter Codes</a>.</p>
<h2>Default Pregnancy Diagnosis Code</h2>
<b>Pregnancy codes exclude patients from some Clinical Quality Measures (CQMs).</b> The default pregnancy code is used automatically when you exclude a patient from a vital signs BMI exam due to pregnancy. A diagnosis of pregnancy will also be added to the patient's list of problems with a start date equal to exam date, if an active diagnosis already doesn't exist in the list. <p>You are not limited to the recommended codes and can choose your own SNOMED CT, ICD-9-CM, or ICD-10-CM code. However, if you choose a code not in the recommended list, or choose no code at all, you must manually enter pregnancy diagnosis with a qualified code to exclude a patient from CQM calculations.</p>
<p class="MarginBottomZero">Recommended Codes: These 9 SNOMED CT codes are used in CQMs. Click the dropdown to select. A description will show. </p>
<ul class="MarginBottomGap">
<li>none: Pregnancy codes will NOT be automatically generated</li>
<li>72892002: Normal pregnancy (finding)</li>
<li>77386006: Patient currently pregnant (finding)</li>
<li>83074005: Unplanned pregnancy (finding)</li>
<li>169560008: Pregnant - urine test confirms (finding)</li>
<li>169563005: Pregnant - on history (finding)</li>
<li>169565003: Pregnant - planned (finding)</li>
<li>237238006: Pregnancy with uncertain dates (finding)</li>
<li>248985009: Presentation of pregnancy (finding)</li>
<li>314204000: Early stage of pregnancy (finding)</li>
</ul>
</div>
</div>
</body>
</html>```
