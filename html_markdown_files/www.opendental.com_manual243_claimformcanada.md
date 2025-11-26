# File: ./www.opendental.com/manual243/claimformcanada.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Canada Claim Form</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimformcanada','claimforms','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimformcanada.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimformcanada.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimformcanada.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimformcanada.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimformcanada.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimformcanada.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimformcanada.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimformcanada.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimformcanada.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimformcanada.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimformcanada.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimformcanada.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimformcanada.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimformcanada.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimformcanada.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimformcanada.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimformcanada.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimformcanada.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimformcanada.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimformcanada.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimformcanada.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimformcanada.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimformcanada.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimformcanada.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimformcanada.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimformcanada.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimformcanada.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimformcanada.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Canada Claim Form</p></div>
<div class="GeneralPageContent">
<p>Below is an explanation of how each field on the printed Canadian <a href="claimforms.html">Claim Form</a> is populated.</p>
<p><div class="Note">Note:  The requirements for e-claims are different than the requirements for paper claims. Printing a claim does not represent what is sent in an e-claim. Likewise information sent in an e-claim does not necessarily print on a paper claim. </div>
</p>
<table class="simpletable">
<tr>
<th style="width:33%">Area / Field Name</th>
<th style="width:33%">Claim Form Item Used</th>
<th style="width:33%">Where Entered</th>
</tr>
<tr>
<td><b>Part 1 - Dentist</b></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Patient</b></td>
<td>PatientLastFirst</td>
<td>Edit Patient Information window, last and first name</td>
</tr>
<tr>
<td></td>
<td>PatientAddress</td>
<td>Edit Patient Information window, Address</td>
</tr>
<tr>
<td></td>
<td>PatientAddress2</td>
<td>Edit Patient Information window, Address2</td>
</tr>
<tr>
<td></td>
<td>PatientCity</td>
<td>Edit Patient Information window, City</td>
</tr>
<tr>
<td></td>
<td>PatientST</td>
<td>Edit Patient Information window, Province</td>
</tr>
<tr>
<td></td>
<td>PatientZip</td>
<td>Edit Patient Information window, Postal Code</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Unique No.</td>
<td>TreatingDentistNPI</td>
<td>Provider Edit window, CDA number</td>
</tr>
<tr>
<td>Spec.</td>
<td></td>
<td>Not entered</td>
</tr>
<tr>
<td>Patients Office Account No</td>
<td>PatientPatNum</td>
<td>Edit Patient Information window, Patient Number</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Dentist</b></td>
<td>TreatingDentist</td>
<td>Edit Provider window, first name, last name, middle initial, suffix. Displays treating provider on claim.</td>
</tr>
<tr>
<td></td>
<td>PayToDentistAddress</td>
<td>Edit Practice Info window, Pay To Address. If blank, uses physical treating address. </td>
</tr>
<tr>
<td></td>
<td>PayToDentistAddress2</td>
<td>Edit Practice Info window, Pay To Address 2. If blank, uses physical treating address. </td>
</tr>
<tr>
<td></td>
<td>PayToDentistCity</td>
<td>Edit Practice Info window, Pay To City. If blank, uses physical treating address.</td>
</tr>
<tr>
<td></td>
<td>PayToDentistST</td>
<td>Edit Practice Info window, Pay To St (province). If blank, uses physical treating address.</td>
</tr>
<tr>
<td></td>
<td>PayToDentistZip</td>
<td>Edit Practice Info window, Pay To Zip. If blank, uses physical treating address. </td>
</tr>
<tr>
<td></td>
<td>TreatingDentistPhoneRaw</td>
<td>Edit Practice Info window, Phone</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>I hereby assign...</td>
<td>Patient Assignment</td>
<td>Edit Insurance Plan window. When Assignment of Benefits is checked, <i>Signature on File</i> shows.</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>For Dentist Use Only</td>
<td>Remarks</td>
<td>Line 1: If predetermination, shows <i>Predetermination Only</i>. If Assignment of Benefits is checked, shows <i>Please pay patient</i>. <br/> Line 2: Shows notes entered in Edit Claim window, General Tab, Claim Note.</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>I understand that the fee...</td>
<td>TotalFee</td>
<td>Fee billed to insurance for all items on claim. </td>
</tr>
<tr>
<td>Signature of Patient</td>
<td>PatientRelease</td>
<td>Edit Insurance Plan window. When Release of Information is checked, <i>Signature on File</i> shows.</td>
</tr>
<tr>
<td>Date of Service</td>
<td>P1Date, etc</td>
<td>Procedure Info window, Date</td>
</tr>
<tr>
<td>Procedure Code</td>
<td>P1Code, etc</td>
<td>Procedure sent to insurance</td>
</tr>
<tr>
<td>Intl Tooth Code</td>
<td>P1ToothNumOrArea, etc</td>
<td>Treatment area of procedure code, if any</td>
</tr>
<tr>
<td>Tooth Surfaces</td>
<td>P1Surface, etc</td>
<td>Tooth surface of procedure code, if any</td>
</tr>
<tr>
<td>Dentists Fee</td>
<td>P1FeeMinusLab, etc</td>
<td>Fee billed to insurance for procedure, minus the lab fee, if any.</td>
</tr>
<tr>
<td>Laboratory Charge</td>
<td>P1Lab, etc</td>
<td>Lab fee associated with procedure</td>
</tr>
<tr>
<td>Total Charges</td>
<td>P1Fee, etc</td>
<td>Sum of Dentist's fee and lab charges for the procedure code</td>
</tr>
<tr>
<td>Total Fee Submitted </td>
<td>TotalFee</td>
<td>Sum of Total Charges for all procedures</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Part 2 - Employee/Plan Member/Subscriber</b></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Group Policy/Plan No</td>
<td>GroupNum</td>
<td>Edit Insurance Plan window, Plan Number</td>
</tr>
<tr>
<td>Division/Section No</td>
<td>DivisionNum</td>
<td>Edit Insurance Plan window, Div. No.</td>
</tr>
<tr>
<td>Your Name</td>
<td>SubscrLastFirst</td>
<td>Edit Patient Information window, last and first name of subscriber</td>
</tr>
<tr>
<td>Employer</td>
<td>EmployerName</td>
<td>Edit Insurance Plan window, Employer</td>
</tr>
<tr>
<td>Your Cert No or SIN or ID No</td>
<td>SubscrIDStrict</td>
<td>Edit Insurance Plan window, Subscriber ID</td>
</tr>
<tr>
<td>Name of Insurance Agency or Plan</td>
<td>PriInsCarrierName</td>
<td>Edit Insurance Plan window, Carrier</td>
</tr>
<tr>
<td>Your Date of Birth</td>
<td>SubscrDOB</td>
<td>Edit Patient Information window, Birthdate of subscriber</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Part 3 - Patient Information </b></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient Relationship to Employee/Plan Member/Subscriber</td>
<td>Relationship</td>
<td>Edit Insurance Plan window, Relationship to Subscriber</td>
</tr>
<tr>
<td>Date of Birth</td>
<td>PatientDOB</td>
<td>Edit Patient Information window, Birthdate</td>
</tr>
<tr>
<td>If child indicate... Student</td>
<td>Is Student</td>
<td>Edit Patient Information window, Other tab, Eligibility Excep Code 1 or 3</td>
</tr>
<tr>
<td>If child indicate... Handicapped</td>
<td></td>
<td>Not entered</td>
</tr>
<tr>
<td>If student, indicate school</td>
<td>College Name</td>
<td>Edit Patient Information window, Other tab, Name of school</td>
</tr>
<tr>
<td>Patient ID No</td>
<td>PatIDFromPatPlan</td>
<td>If carrier is Pacific Blue Cross, then: Edit Insurance Plan window, Subscriber ID <br/> If any other carrier, then: Edit Insurance Plan window, Dependent Code</td>
</tr>
<tr>
<td>Are any dental benefit or services... No</td>
<td>OtherInsNotExists</td>
<td>If no secondary coverage</td>
</tr>
<tr>
<td>Are any dental benefit or services... Yes</td>
<td>OtherInsExists</td>
<td>If secondary coverage exists</td>
</tr>
<tr>
<td>Policy No</td>
<td>OtherInsGroupNum</td>
<td>Edit Insurance Plan window, Plan Number (of secondary insurance, if any)</td>
</tr>
<tr>
<td>Spouse Date of Birth</td>
<td>OtherInsSubscrDOB</td>
<td>Edit Patient Information window, Birthdate (of secondary coverage subscriber)</td>
</tr>
<tr>
<td>Name of other insuring agency or plan</td>
<td>OtherInsCarrierName</td>
<td>Edit Insurance Plan, Carrier (of secondary coverage)</td>
</tr>
<tr>
<td>Signature of Employee/Plan Member/Subscriber</td>
<td></td>
<td>Not entered</td>
</tr>
<tr>
<td>Is any treatment required as the result of the accident?No</td>
<td>IsNotAccident</td>
<td>Edit Claim window, Canadian tab. No accident date entered.</td>
</tr>
<tr>
<td>Is any treatment required as the result of the accident?Yes</td>
<td>IsAccident</td>
<td>Edit Claim window, Canadian tab. Accident date entered.</td>
</tr>
<tr>
<td>If Denture, Crown or Bridge... No</td>
<td>IsReplacementProsth</td>
<td>Edit Claim window, Canadian tab. Maxillary Prosthesis and Mandibular Prosthesis - 1 No and the other not entered or both No</td>
</tr>
<tr>
<td>If Denture, Crown or Bridge... Yes</td>
<td>IsInitialProsth</td>
<td>Edit Claim window, Canadian tab. Maxillary Prosthesis and Mandibular Prosthesis - 1 Yes and the other not entered or both Yes</td>
</tr>
<tr>
<td>Is any treatment required for ortho... No</td>
<td>IsNotOrtho</td>
<td>Edit Claim window, Canadian tab, Treatment Required for Ortho, not checked</td>
</tr>
<tr>
<td>Is any treatment required for ortho... Yes</td>
<td>IsOrtho</td>
<td>Edit Claim window, Canadian tab, Treatment Required for Ortho, checked</td>
</tr>
<tr>
<td>Date</td>
<td>PatientReleaseDate</td>
<td>Edit Claim window, Date Sent.</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Part 4 - Policy Holder / Employer</b></td>
<td></td>
<td>Not entered. If needed, must be filled by hand.</td>
</tr>
</table>
</div>
</div>
</body>
</html>```
