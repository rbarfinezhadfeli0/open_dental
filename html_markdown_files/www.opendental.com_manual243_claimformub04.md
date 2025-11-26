# File: ./www.opendental.com/manual243/claimformub04.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - UB04 Claim Form</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimformub04','claimforms','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimformub04.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimformub04.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimformub04.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimformub04.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimformub04.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimformub04.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimformub04.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimformub04.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimformub04.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimformub04.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimformub04.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimformub04.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimformub04.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimformub04.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimformub04.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimformub04.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimformub04.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimformub04.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimformub04.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimformub04.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimformub04.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimformub04.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimformub04.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimformub04.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimformub04.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimformub04.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimformub04.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimformub04.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>UB04 Claim Form</p></div>
<div class="GeneralPageContent">
<p>Below is an explanation of how each field on the printed UB04 <a href="claimforms.html">Claim Form</a> is populated for medical claims.</p>
<p>Some fields require <a href="medicalins.html">Medical Insurance</a> features to be enabled. If the <i>Where Entered</i> column for a field is N/A, information is not automatically populated from the database.</p>
<p><div class="Note">Note: Requirements for e-claims are different than requirements for paper claims. Printing a claim does not represent what is sent for an e-claim. Likewise, information sent for an e-claim does not necessarily print on a paper claim.</div>
</p>
<table class="simpletable">
<tr>
<th style="width:10%">#</th>
<th style="width:45%">Field Name on Form</th>
<th style="width:45%">Where Entered</th>
</tr>
<tr>
<td>1</td>
<td></td>
<td>Billing <a href="providerseditwindow.html">Provider</a> name and practice or clinic Pay To <a href="claimsaddresses.html">Address</a> (if any). If there is no Pay To address, the Billing Address is used if <i>Use On Claims</i> is checked or the Physical Treating Address is used. </td>
</tr>
<tr>
<td>2</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>3a</td>
<td>Pat Ctrl #</td>
<td><a href="patientedit.html">Edit Patient Information</a>, ChartNumber</td>
</tr>
<tr>
<td>3b</td>
<td>Med Rec #</td>
<td>N/A</td>
</tr>
<tr>
<td>4</td>
<td>Type of Bill</td>
<td><a href="claimmedical.html">Edit Claim - Medical Tab</a>, Type of Bill</td>
</tr>
<tr>
<td>5</td>
<td>Fed Tax No</td>
<td>Billing Provider SSN or TIN</td>
</tr>
<tr>
<td>6</td>
<td>Statement Covers Period From Through</td>
<td><a href="claimedit.html">Edit Claim</a>, Date of Service</td>
</tr>
<tr>
<td>7</td>
<td></td>
<td>Edit Insurance Plan, Other Ins Info tab, Insurance Filing Code. Shows <i>XOVER</i> when filinf code is set to Medicare Part B.</td>
</tr>
<tr>
<td>8</td>
<td>Patient Name</td>
<td></td>
</tr>
<tr>
<td>8a</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>8b</td>
<td></td>
<td>Edit Patient Information, First Name, Middle Initial, Last Name</td>
</tr>
<tr>
<td>9 a-c</td>
<td>Patient Address</td>
<td>Edit Patient Information, Address, City, State, Zip</td>
</tr>
<tr>
<td>9d</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>10</td>
<td>Birthdate</td>
<td>Edit Patient Information, Birthdate</td>
</tr>
<tr>
<td>11</td>
<td>Sex</td>
<td>Edit Patient Information, Gender</td>
</tr>
<tr>
<td>12</td>
<td>Date</td>
<td>Edit Claim, Date of Service</td>
</tr>
<tr>
<td>13</td>
<td>HR</td>
<td>N/A</td>
</tr>
<tr>
<td>14</td>
<td>Type</td>
<td>Edit Claim - Medical tab, Admission Type</td>
</tr>
<tr>
<td>15</td>
<td>SRC</td>
<td>Edit Claim - Medical tab, Admission Source</td>
</tr>
<tr>
<td>16</td>
<td>DHR</td>
<td>N/A</td>
</tr>
<tr>
<td>17</td>
<td>Stat</td>
<td>Edit Claim - Medical tab, Patient Status</td>
</tr>
<tr>
<td>18 - 28</td>
<td>Condition Codes</td>
<td>Edit Claim - Medical tab, Conditions Codes.</td>
</tr>
<tr>
<td>29</td>
<td>Acdt State</td>
<td><a href="claimtabgeneral.html">Edit Claim - General Tab</a>, Accident State</td>
</tr>
<tr>
<td>30</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>31</td>
<td>Code / Occurrence Date</td>
<td>Edit Claim - General tab, Accident Related and Accident State</td>
</tr>
<tr>
<td>32</td>
<td>Code / Occurrence Date</td>
<td>N/A</td>
</tr>
<tr>
<td>33</td>
<td>Code / Occurrence Date</td>
<td>N/A</td>
</tr>
<tr>
<td>34</td>
<td>Code / Occurrence Date</td>
<td>N/A</td>
</tr>
<tr>
<td>35</td>
<td>Code / Occurrence Date</td>
<td>N/A</td>
</tr>
<tr>
<td>36</td>
<td>Code / Occurrence Date</td>
<td>N/A</td>
</tr>
<tr>
<td>37</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>38</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>39 a-d</td>
<td>Code / Value Codes Amount</td>
<td>Edit Claim - Medical tab, Value Codes (39)</td>
</tr>
<tr>
<td>40 a-d</td>
<td>Code / Value Codes Amount</td>
<td>Edit Claim - Medical tab, Value Codes (40)</td>
</tr>
<tr>
<td>41 a-d</td>
<td>Code / Value Codes Amount</td>
<td>Edit Claim - Medical tab, Value Codes (41)</td>
</tr>
<tr>
<td>42 </td>
<td>Rev. Cd.</td>
<td>Procedure Info - Medical tab, Revenue Code. Up to 10.</td>
</tr>
<tr>
<td>43</td>
<td>Description</td>
<td><a href="procedurecodeedit.html">Procedure Code</a>, Description. Up to 10 codes.</td>
</tr>
<tr>
<td>44</td>
<td>HCPS / Rate / HIPPS Code</td>
<td>Procedure - Medical tab, Mods. Mods are appended to the Procedure Code. Up to 10.</td>
</tr>
<tr>
<td>45</td>
<td>Serv. Date</td>
<td><a href="procedureedit.html">Procedure Info</a>, Date</td>
</tr>
<tr>
<td>46</td>
<td>Serv. Units</td>
<td>Procedure Info - Medical tab, Unit Quantity</td>
</tr>
<tr>
<td>47</td>
<td>Total Charges</td>
<td><a href="claimprocedure.html">Edit Claim Procedure</a>, Fee Billed to Ins</td>
</tr>
<tr>
<td>48</td>
<td>Non-Covered Charges</td>
<td>N/A</td>
</tr>
<tr>
<td>49</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>42 Totals</td>
<td></td>
<td>Total number of procedures on the claim.</td>
</tr>
<tr>
<td></td>
<td>Page _ of _</td>
<td><i>Page 1 of 1</i> by default. </td>
</tr>
<tr>
<td></td>
<td>Creation Date</td>
<td>Edit Claim, Date of Service</td>
</tr>
<tr>
<td>47 Totals</td>
<td></td>
<td>Total of amounts in the #47 column for all rows. Total claim billed amount. </td>
</tr>
<tr>
<td>48 Totals</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>50 a-c</td>
<td>Payer Name</td>
<td><a href="insplan.html">Edit Insurance Plan</a>, Carrier. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>51 a-c</td>
<td>Health Plan ID</td>
<td>N/A</td>
</tr>
<tr>
<td>52 a-c</td>
<td>Rel. Info</td>
<td>Edit Insurance Plan, Release of Information. When checked, shows as <i>X</i> on the claim form. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>53 a-c</td>
<td>Asg. Ben.</td>
<td>Edit Insurance Plan, Assignment of Benefits. When checked, shows as X on the claim form.</td>
</tr>
<tr>
<td>54 a-c</td>
<td>Prior Payments</td>
<td>Ins Pay amount from other other claims. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>55 a-c</td>
<td>Est. Amount Due</td>
<td>Calculated by <span class="codeblock">Total Charges - Prior Payments</span></td>
</tr>
<tr>
<td>56 a-c</td>
<td>NPI</td>
<td>Billing Dentist NPI</td>
</tr>
<tr>
<td>57 a-c</td>
<td>Other Prv ID</td>
<td>Edit Provider, Supplemental IDs, Supplemental Provider Identifiers. Only the ID Number matching the carrier's Payor ID is used. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>58 a-c</td>
<td>Insured's Name</td>
<td>Edit Insurance Plan, Subscriber Name. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>59 a-c</td>
<td>P. Rel</td>
<td>Edit Insurance Plan, Relationship to Subscriber</td>
</tr>
<tr>
<td>60 a-c</td>
<td>Insured's Unique ID</td>
<td>Edit Insurance Plan, Subscriber ID. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>61 a-c</td>
<td>Group Name</td>
<td>Edit Insurance Plan, Group Name. Up to three medical insurance plans.</td>
</tr>
<tr>
<td>62 a-c</td>
<td>Insurance Group No.</td>
<td>Edit Insurance Plan, Group Num. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>63 a-c</td>
<td>Treatment Authorization Codes</td>
<td>Edit Claim, Predeterm Benefits</td>
</tr>
<tr>
<td>64 a-c</td>
<td>Document Control Number</td>
<td>N/A</td>
</tr>
<tr>
<td>65 a-c</td>
<td>Employer Name</td>
<td>Edit Insurance Plan, Employer. Information is only shown on one row. The row used depends on the Insurance Plan Order.</td>
</tr>
<tr>
<td>66</td>
<td>Dx</td>
<td>Edit Procedure, Diagnosis Code. Up to 4.</td>
</tr>
<tr>
<td>68</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>69</td>
<td>Admit Dx</td>
<td>N/A</td>
</tr>
<tr>
<td>70</td>
<td>Patient Reason Dx</td>
<td>N/A</td>
</tr>
<tr>
<td>71</td>
<td>PPS Code</td>
<td>N/A</td>
</tr>
<tr>
<td>72</td>
<td>ECI</td>
<td>N/A</td>
</tr>
<tr>
<td>73</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>74</td>
<td>Principal Procedure Code / Date</td>
<td>N/A</td>
</tr>
<tr>
<td>74a</td>
<td>Other Procedure Code / Date</td>
<td>N/A</td>
</tr>
<tr>
<td>74b</td>
<td>Other Procedure Code / Date</td>
<td>N/A</td>
</tr>
<tr>
<td>74c</td>
<td>Other Procedure Code / Date</td>
<td>N/A</td>
</tr>
<tr>
<td>74d</td>
<td>Other Procedure Code / Date</td>
<td>N/A</td>
</tr>
<tr>
<td>74e</td>
<td>Other Procedure Code / Date</td>
<td>N/A</td>
</tr>
<tr>
<td>75</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td>76</td>
<td>Attending NPI / Qual / Last / First</td>
<td>N/A</td>
</tr>
<tr>
<td>77</td>
<td>Operating NPI / Qual / Last / First</td>
<td>Treating Provider, National Provider ID, Last Name, First Name</td>
</tr>
<tr>
<td>78</td>
<td>Other NPI / Qual / Last / First</td>
<td>N/A</td>
</tr>
<tr>
<td>79</td>
<td>Other NPI / Qual / Last / First</td>
<td>N/A</td>
</tr>
<tr>
<td>80</td>
<td>Remarks</td>
<td>Edit Claim - General, Claim Note</td>
</tr>
<tr>
<td>81 a-d</td>
<td>CC</td>
<td>N/A</td>
</tr>
</table>
</div>
</div>
</body>
</html>```
