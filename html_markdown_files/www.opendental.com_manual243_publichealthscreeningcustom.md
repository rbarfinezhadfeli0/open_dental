# File: ./www.opendental.com/manual243/publichealthscreeningcustom.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Public Health Custom Screening</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('publichealthscreeningcustom','publichealthscreenings','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/publichealthscreeningcustom.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/publichealthscreeningcustom.html" >v24.2</option><option value="https://www.opendental.com/manual241/publichealthscreeningcustom.html" >v24.1</option><option value="https://www.opendental.com/manual233/publichealthscreeningcustom.html" >v23.3</option><option value="https://www.opendental.com/manual232/publichealthscreeningcustom.html" >v23.2</option><option value="https://www.opendental.com/manual231/publichealthscreeningcustom.html" >v23.1</option><option value="https://www.opendental.com/manual224/publichealthscreeningcustom.html" >v22.4</option><option value="https://www.opendental.com/manual223/publichealthscreeningcustom.html" >v22.3</option><option value="https://www.opendental.com/manual222/publichealthscreeningcustom.html" >v22.2</option><option value="https://www.opendental.com/manual221/publichealthscreeningcustom.html" >v22.1</option><option value="https://www.opendental.com/manual214/publichealthscreeningcustom.html" >v21.4</option><option value="https://www.opendental.com/manual213/publichealthscreeningcustom.html" >v21.3</option><option value="https://www.opendental.com/manual212/publichealthscreeningcustom.html" >v21.2</option><option value="https://www.opendental.com/manual211/publichealthscreeningcustom.html" >v21.1</option><option value="https://www.opendental.com/manual205/publichealthscreeningcustom.html" >v20.5</option><option value="https://www.opendental.com/manual204/publichealthscreeningcustom.html" >v20.4</option><option value="https://www.opendental.com/manual203/publichealthscreeningcustom.html" >v20.3</option><option value="https://www.opendental.com/manual202/publichealthscreeningcustom.html" >v20.2</option><option value="https://www.opendental.com/manual201/publichealthscreeningcustom.html" >v20.1</option><option value="https://www.opendental.com/manual194/publichealthscreeningcustom.html" >v19.4</option><option value="https://www.opendental.com/manual193/publichealthscreeningcustom.html" >v19.3</option><option value="https://www.opendental.com/manual192/publichealthscreeningcustom.html" >v19.2</option><option value="https://www.opendental.com/manual191/publichealthscreeningcustom.html" >v19.1</option><option value="https://www.opendental.com/manual184/publichealthscreeningcustom.html" >v18.4</option><option value="https://www.opendental.com/manual183/publichealthscreeningcustom.html" >v18.3</option><option value="https://www.opendental.com/manual182/publichealthscreeningcustom.html" >v18.2</option><option value="https://www.opendental.com/manual181/publichealthscreeningcustom.html" >v18.1</option><option value="https://www.opendental.com/manual174/publichealthscreeningcustom.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Public Health Custom Screening</p></div>
<div class="GeneralPageContent">
<p>Practices utilizing Public Health can complete screenings using custom sheets.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click <b>Tools</b>, <a href="publichealthscreenings.html">Public Health Screening</a>.</p>
<img src="images/screeningGroups.gif" width="501" height="309"/><p class="MarginBottomZero">These steps explain how to use a custom public health screening form. </p>
<ul class="MarginBottomGap">
<li>In <a href="preferences.html">Preferences</a>, check <i>Screening Use Sheets</i> to use the custom form. To customize the sheet, see <a href="sheetsscreenings.html">Screening Layout</a>.</li>
<li>Before patients can be screened, set up screening groups and add patients.</li>
</ul>
<p>Double-click the screening group to select it. Screening groups are grouped by date. If needed, change the date and click <b>Refresh</b>.</p>
<img src="images/publicScreeningGroupPermissions.gif" width="874" height="337"/><p class="MarginBottomZero">Patients should already list under <b>Patients for Screening</b>. </p>
<ul class="MarginBottomGap">
<li>Only patients with <i>Allowed</i> permission will be screened. Change permissions by right clicking on a patient.</li>
<li>To change patient information, double-click a patient to open the <a href="patientedit.html">Edit Patient Information</a>.</li>
<li>To add patients, see <a href="publichealthscreenings.html">Public Health Screening</a>.</li>
<li>Anonymous screenings do not require adding a patient or setting screening permissions. See Anonymous Screenings at the bottom of this page.</li>
</ul>
<p>If needed, click the <b>Sheet</b> dropdown to select the screening form to use. The default is the internal screening sheet. Once you select a form, it is saved with the screening group.</p>
<p>Click <b>Screen Patients</b>. The screening form for the first patient with an <i>Allowed</i> permission, who hasn't been screened yet, will open.</p>
<p>Enter screening information. See below for a description of common form elements.</p>
<p>Click OK to save. A new row will show in the Screenings list for this patient and a Screening Form will list in the patient's Chart Module, Progress Notes.</p>
<p>If there are more patients to screen, a new custom form will open for the next patient who has an <i>Allowed</i> permission and hasn't been screened.</p>
<div class="Note">Note: <ul>
<li>To exit screenings, click Cancel on the screening form. To resume, click Screen Patients again.</li>
<li>If you delete a screening for a patient, their permission level returns to 'unknown'.</li>
</ul>
</div>
<br/><br/><h2>Elements in a custom screening form</h2>
<p>The options below show in the internal screening form. If you have customized a custom screening form, your options may vary.</p>
<p>Pale yellow fields indicate areas where you can type new or changed information. Names, birthdate, age, and preferred name will be pre-filled if the information is entered on the Edit Patient Information window.</p>
<img src="images/publicScreeningGeneralInfo.gif" width="834" height="587"/><p>Combo boxes: These are pick lists from which you can select from a list of options. Click the combo box, then click an option. Gender, place of service, urgency, and grade level will be pre-filled if the information is entered on the Edit Patient Information window.</p>
<img src="images/sheetsComboBox.gif" width="324" height="140"/><p>Checkboxes: Checking the following boxes automatically adds a corresponding completed procedure code to the patient's chart. Additional checkboxes can be added to a custom screening sheet. If using clinics, the clinic selected in the Main Menu is automatically associated with the procedures charted.</p>
<ul>
<li><b>Assessment Proc</b>: Adds procedure code D0191 (assessment of a patient).</li>
<li><b>Fluoride Proc:</b> Adds procedure code D1206 (topical application of fluoride varnish). <br/><img src="images/publicScreeningAssessFluor.gif" width="248" height="20" class="ImageInParagraph"/></li>
</ul>
<p class="MarginBottomZero">Tooth Charts: Tooth charts can be used to mark tooth status. Primary or permanent teeth is set when customizing the screening form. There are two chart options: </p>
<ul class="MarginBottomGap">
<li><b>Screening Chart:</b> Mark current tooth status including treatment needed.</li>
<li><b>Sealant Placement:</b> Mark completed sealant procedures.</li>
</ul>
<p class="MarginBottomZero">Click on a tooth or surface in the chart then select a code to mark it. Teeth 2, 3, 14, 15, 31, 30, 19, and 18 allow a code per surface. You can mark a single surface or all. A legend of the codes shows under the Screening Chart. </p>
<ul class="MarginBottomGap">
<li>S = Seal</li>
<li>PS = Previously Sealed/Intact</li>
<li>C = Caries</li>
<li>F = Filled</li>
<li>NFE = Not Fully Erupted</li>
<li>NN = Not Needed</li>
<li>None = remove a previously marked code.</li>
</ul>
<p>Sealant Procedures on Permanent Teeth: If S is marked on a tooth or surface, a corresponding procedure (D1351) is also automatically added to the patient's chart. If marked on the Screening Chart, the sealant procedure will have a TP status. If marked on the Sealant Placement chart, the sealant procedure will have a C status (complete). Surface information will be associated with the procedure, but not sent with claims. Sealants are the only code that will insert a procedure in the chart. All other codes are informational only but are reportable in custom queries.</p>
<img src="images/publicCustomScreeningProc.gif" width="564" height="68"/><p>Screening Chart Example: S indicates teeth or surfaces where a sealant is treatment planned. C indicates caries. NFE indicates a tooth not yet erupted. For each permanent tooth with a S code, a corresponding sealant procedure will be added to the patient's chart with a treatment planned status.</p>
<img src="images/publicCustomScreeningChart.gif" width="721" height="167"/><p>Sealant Placement Example: Each S indicates where a sealant procedure was completed. For each permanent tooth with a S code, a corresponding sealant procedure will be added to the patient's chart with a completed status.</p>
<img src="images/publicScreeningChartC.gif" width="723" height="168"/><h2>Add anonymous screenings</h2>
<p class="MarginBottomZero">Anonymous screenings do not require adding a patient or setting screening permissions.  </p>
<ol class="MarginBottomGap">
<li>Click <b>Add Anonymous</b>.</li>
<li>Enter the information. All information except Name can be entered.</li>
<li>Click <b>OK</b>. A new screening form will open.</li>
<li>When finished entering all anonymous screenings, click <b>Cancel</b> to close the screening form.</li>
</ol>
<p>If the person needs treatment, consider entering them into the system as a regular patient (if not already entered) and putting their patient ID number in the Comments section.</p>
</div>
</div>
</body>
</html>```
