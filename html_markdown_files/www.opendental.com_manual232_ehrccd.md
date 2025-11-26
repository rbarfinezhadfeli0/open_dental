# File: ./www.opendental.com/manual232/ehrccd.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Continuity of Care Document ( CCD )</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrccd','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ehrccd.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ehrccd.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrccd.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrccd.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrccd.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ehrccd.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrccd.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrccd.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrccd.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrccd.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrccd.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrccd.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrccd.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrccd.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrccd.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrccd.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrccd.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrccd.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrccd.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrccd.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrccd.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrccd.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrccd.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrccd.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrccd.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrccd.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrccd.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrccd.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Continuity of Care Document ( CCD )</p></div>
<div class="GeneralPageContent">
<p>A Continuity of Care document (CCD) is a health record document standard used by United States offices to share patient health information electronically.</p>
<p>In the <a href="chart.html">Chart Module</a>, click <b>CCD</b>.</p>
<img src="images/ccd.png" width="389" height="282"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Show and Print</b>: Click to view the CCD or print. The Summary of Care window opens See below for details. </li>
<li><b>Export to File</b>: Click to export the CCD as an XML and XSL file. Both files export to the location selected by the user.</li>
<li><b>Optional Instructions for Patients to show on CCD</b>: Enter any notes for the patient. These show in the Instructions section on the printed CCD.</li>
</ul>
<p><div class="Note">Note: If the patient's associated Problems do not have SNOMED CT codes attached, a warning displays. Problems must have SNOMED CT codes attached to display on the CCD. </div>
</p>
<h2>Summary of Care</h2>
<p>The Continuity of Care Document opens in the Summary of Care window. From here, it can be printed for the patient or exported to send to another provider.</p>
<img src="images/ccdSummary.png" width="894" height="670"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Show XML</b>: Display the XML in a separate window. </li>
<li><b>Print</b>: Print the CCD. </li>
</ul>
<p> Patients can also view their Summary of Care in the <a href="portalpatientsees.html">Patient Portal</a>. For this to show for patients, the office must have <a href="snomedct.html">SNOMED CT Codes</a> and CVX codes downloaded (see <a href="codesystemimport.html">Importing Code Systems</a>), as well as have <i>ModuleCareSummary</i> checked in <a href="portalsettings.html">Patient Portal Settings</a>. </p>
<p>To automatically export CCDs to a folder, see <a href="hiesetup.html">HIE Setup</a>.</p>
<h2>Details</h2>
<p>The following information shows on a CCD.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient Information</b>: Name, Birthday, Ethnicity, Language, Sex and Race are set on the <a href="patientedit.html">Edit Patient Information</a>.</li>
<li><b>Table of Contents</b>: Click a link to quickly jump to a category.</li>
<li><b>Allergies and Adverse Reactions</b>: Medication allergies only show if, in the <a href="allergiesmaster.html">Allergy List</a>, <ol>
<li>The allergy is associated with a medication that has an <a href="rxnorms.html">RxNorm</a>, and</li>
<li>The Allergy Type is <i>AdverseReactionsToDrug</i>, <i>DrugAllergy</i>, or <i>DrugIntolerance</i>. Otherwise, the allergy is treated as an ingredient allergy (e.g. peanuts, latex), and only shows if it has a UNII code.</li>
</ol>
</li>
<li><b>Encounters</b>: A list of <a href="ehrencounters.html">EHR Encounters</a>.</li>
<li><b>Functional Status</b>: A list of patient <a href="problempatient.html">Problems</a> that have a Problem Type of <i>Problem</i> and a Functional Status of <i>CognitiveResult</i>, <i>CognitiveProblem</i>, <i>FunctionalResult</i>, or <i>Functional Problem</i>. This is defined on the Edit Problem window (on the Medical window, double click a problem in the patient's list, see <a href="medical.html">Medical</a>).</li>
<li><b>Immunizations</b>: A list of all <a href="ehrvaccine.html">EHR Vaccine Data</a> entered.</li>
<li><b>Instructions</b>: Clinical Summaries only. Shows information entered as Instructions when a clinical summary is generated.</li>
<li><b>Medications</b>: A list of all medications in the <a href="medicationspatient.html">Medications</a> list (inactive and active).</li>
<li><b>Care Plan</b>: A list of care plans entered on the Care Plan window.</li>
<li><b>Problems</b>: All problems in the patient's Problem List (inactive and active), that have a Problem Type of <i>Problem</i> and a Functional Status of <i>Problem</i>.</li>
<li><b>Procedures</b>: All procedures in the patient account which are not treatment planned and not referred out, including completed and existing procedures. The code and description that shows on the CCD is the Proc Code and Description as entered on the <a href="procedurecodeedit.html">Procedure Code</a>. <p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If the Proc Code is an CDT code, the CDT code and description show. These cannot be edited.</li>
<li>If the Proc Code is a SNOMED CT (see <a href="snomedct.html">SNOMED CT Codes</a>), the SNOMED CT code and official description (not necessarily from the Procedure Code List) show. These codes must be manually added to the Procedure Code List. See <a href="procedurecodenew.html">Add Procedure Code</a>.</li>
<li>If the Proc Code is a five digit number (CPT code), then the CPT code and description show. These codes must be manually added to the Procedure Code List.</li>
<li>If no code is specified, then the procedure exports without a code as required.</li>
</ul>
<p>Any cross coding in the Procedure Code List does not affect the CCD (e.g. medical codes, alternate codes).</p>
<p>If any procedure has a SNOMED CT Body Site entered on the <a href="proceduremedical.html">Procedure - Medical Tab</a><i></i>, an additional Body Site column shows under Procedures on the CCD. If no body site is entered, this column is hidden.</p>
</li>
<li><b>Reason for Referral</b>: This content changes based on which document is being generated/sent. The text cannot be edited.</li>
<li><b>Diagnostic Results</b>: A list of Lab Results that specify Test Performed LOINC.</li>
<li><b>Social History</b>: Includes the patient's smoking status and pregnancy information.</li>
<li><b>Vital Signs</b>: A log of all vital signs entered for this patient.</li>
<li><b>Author</b>: The patient's primary provider (selected on Patient Edit window) and <a href="practice.html">Practice</a> contact information.</li>
<li><b>Custodian</b>: The NPI of the Practice's default provider and the practice address and contact information. For practices with a single provider, this is the same as the author. For <a href="clinics.html">Clinics</a>, this is probably the NPI of the organization instead of a person.</li>
<li><b>Legal Authenticator</b>: Only shows when the Practice's default provider is a person. Includes the NPI of the default provider and the practice address and contact information.</li>
</ul>
<h2>EHR</h2>
<p>In <a href="../site/ehrmodified2.html">EHR Modified Stage 2</a>, the second measure of the objective <a href="../site/ehreaccess.html">Patient Electronic Access</a> states that at least one patient must (or authorized representatives) use the <a href="portalhostedbyod.html">Patient Portal</a> to view, download or transmit to a third party their health information. In 2015, this is a requirement only for providers who would have attested to Stage 2 in 2015.</p>
</div>
</div>
</body>
</html>```
