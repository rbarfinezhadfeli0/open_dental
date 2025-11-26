# File: ./www.opendental.com/site/apipayments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Payments</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipayments','apispecification','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>API Payments</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96payment.html" target="_blank">Payment Database Schema.</a></p>
<h2>Payments GET</h2>
<p>Version Added: 22.2.32</p>
<p>Gets a list of payments.</p>
<p><b>Parameters: </b>All optional.<br></p>
<p><b>PayType: </b>(Added in version 23.3.11) definition.DefNum where definition.Category=10.<br><b>PatNum: </b>(Optional after version 23.3.11) FK to patient.PatNum.<br><b>DateEntry:</b> String in "yyyy-MM-dd" format. Gets all payments made on or after a certain date.<br></p>
<p><b>Example Requests:</b><br> GET /payments?PatNum=1337<br> GET /payments?PatNum=1337&amp;DateEntry=2022-06-24<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "PayNum": 56734,<br> "PayType": 69,<br> "payType": "Check",<br> "PayDate": "2022-06-24",<br> "PayAmt": "339",<br> "CheckNum": "12798",<br> "BankBranch": "20-6",<br> "PayNote": "",<br> "PatNum": 1337,<br> "ClinicNum": "0",<br> "DateEntry": "2022-06-24",<br> "DepositNum": 0,<br> "Receipt": "",<br> "IsRecurringCC": "true",<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-06-24 07:34:31",<br> "PaymentSource": "None",<br> "ProcessStatus": "OfficeProcessed",<br> "RecurringChargeDate": "0001-01-01",<br> "IsCcCompleted": "false",<br> "serverDateTime": "2022-08-26 11:55:44"<br> },<br> {<br> "PayNum": 56952,<br> "PayType": 69,<br> "payType": "Check",<br> "PayDate": "2022-07-24",<br> "PayAmt": "239",<br> "CheckNum": "12816",<br> "BankBranch": "20-6",<br> "PayNote": "",<br> "PatNum": 1337,<br> "ClinicNum": "0",<br> "DateEntry": "2022-07-24",<br> "DepositNum": 0,<br> "Receipt": "",<br> "IsRecurringCC": "true",<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-07-24 07:34:31",<br> "PaymentSource": "API",<br> "ProcessStatus": "OfficeProcessed",<br> "RecurringChargeDate": "0001-01-01",<br> "IsCcCompleted": "false",<br> "serverDateTime": "2022-08-26 11:55:44"<br> }<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (Missing or invalid fields)<br> 404 NotFound (Patient not found)<br></p>
<h2>Payments POST (create)</h2>
<p>Version Added: 21.2</p>
<p>Creates a payment for a patient. Does not support insurance payments or income transfers. Payments apply to outstanding charges in a FIFO order. Overpayments are inserted as unearned income.</p>
<p>Payments will be applied to the patient's payment plan, if one is eligible. The oldest plan will be chosen if there is more than one eligible plan. By marking the payment as a prepayment and supplying a <b>payPlanNum</b>, patients are able to prepay on a specific Dynamic Payment Plan for its future charges. If needed, the user can later detach the payment from the plan within the Edit Payment Plan window by editing the split and unchecking "Attach to Payment Plan". They can also attach to a different plan in the same manner. </p>
<p>This method also creates appropriate paysplits according to the payment allocation preferences from Setup &gt; Allocations within Open Dental.</p>
<p><b>PayAmt: </b>Required.<br><b>PatNum: </b>Required.<br><br><b>PayType: </b>(Added in version 23.1.27) Optional. definition.DefNum where definition.Category=10. Defaults to the ApiPaymentType preference.<br><b>PayDate:</b> Optional. String in "yyyy-MM-dd" format. Defaults to today's date. Follows the office's preference to allow future-dated payments.<br><b>CheckNum:</b> Optional.<br><b>PayNote:</b> Optional. <br><b>BankBranch:</b> Optional. <br><b>ClinicNum: </b>Optional. Defaults to patient.ClinicNum<br><b>isPatientPreferred:</b> Optional. When entering a payment through Open Dental directly, there is a checkbox for this option. This API field allows the same functionality. It causes the splits to go to the patient instead of being split among family members on a FIFO basis. Default "false".<br><b>isPrepayment:</b> (Added in version 22.4.8) Optional. Creates a single paysplit using the default unearned type for unallocated paysplits stored in the PrepaymentUnearnedType preference. See also <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7unearnedprepayment.html">Unearned / Prepayment</a>. Default "false".<br><b>procNums:</b> (Added in version 22.4.16) Optional. An array of ProcNums, in [1,2,3] format to apply this Payment to. Procedures are paid by Procedure.ProcDate on a FIFO basis. Procedures not in the Patient's family will be silently ignored. Ignored if isPrepayment is set to "true". Default is an empty array.<br><b>payPlanNum:</b> (Added in version 23.1.31) Optional. FK to payplan.PayPlanNum for a Dynamic Payment Plan. Only allowed if <b>isPrepayment</b> is "true" prior to version 23.3.4. Default 0.<br></p>
<p><b>Example Requests:</b><br> POST /payments<br></p>
<p><span class="codeblock"> {<br>  "PayAmt": "129.99",<br>  "PatNum": 1568<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br>  "PayAmt": "129.99",<br>  "PatNum": 1568,<br>  "PayDate": "2021-07-05",<br>  "CheckNum": "2058",<br>  "PayNote": "Check payment through website",<br>  "BankBranch": "19-7076",<br>  "ClinicNum": "3",<br>  "isPatientPreferred": "true",<br>  "isPrepayment": "true",<br>  "procNums": [13,14,18]<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "PayAmt": "129.99",<br> "PatNum": 1568,<br> "isPrepayment": "true",<br> "payPlanNum": 12<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PayNum": 56734,<br> "PayType": 383,<br> "payType": "Check",<br> "PayDate": "2021-07-05",<br> "PayAmt": "129.99",<br> "CheckNum": "2058",<br> "BankBranch": "19-7076",<br> "PayNote": "Check payment through website",<br> "PatNum": 1568,<br> "ClinicNum": "3",<br> "DateEntry": "2021-07-05",<br> "DepositNum": 0,<br> "Receipt": "",<br> "IsRecurringCC": "true",<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2021-07-05 07:34:31",<br> "PaymentSource": "API",<br> "ProcessStatus": "OfficeProcessed",<br> "RecurringChargeDate": "0001-01-01",<br> "IsCcCompleted": "false",<br> "serverDateTime": ""<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (Missing or invalid fields)<br> 404 NotFound (Patient not found)<br></p>
<h2>Payments POST Refund</h2>
<p>Version Added: 24.4.28</p>
<p>Creates a refund payment. Cannot refund payments that are attached to payment plans or have negative paysplits. </p>
<p><b>Example Requests:</b><br> POST /payments/Refund<br></p>
<p><span class="codeblock"> {<br>  "PayNum": 178<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PayNum": 231,<br> "PayType": 383,<br> "payType": "Check",<br> "PayDate": "2025-01-05",<br> "PayAmt": "-129.99",<br> "CheckNum": "2058",<br> "BankBranch": "19-7076",<br> "PayNote": "Check payment through website",<br> "PatNum": 1568,<br> "ClinicNum": "3",<br> "DateEntry": "2025-01-05",<br> "DepositNum": 0,<br> "Receipt": "",<br> "IsRecurringCC": "true",<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2025-02-26 07:34:31",<br> "PaymentSource": "None",<br> "ProcessStatus": "OfficeProcessed",<br> "RecurringChargeDate": "0001-01-01",<br> "IsCcCompleted": "false",<br> "serverDateTime": ""<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Payments PUT (update)</h2>
<p>Version Added: 23.3.11</p>
<p>Updates a payment.</p>
<p><b>PayNum: </b>Required in the URL.<br><br><b>PayType: </b>definition.DefNum where definition.Category=10.<br><b>CheckNum: </b>Check number. Overwrites existing value.<br><b>BankBranch: </b>Bank-branch code for checks. Overwrites existing value.<br><b>PayNote: </b>Note on payment. Overwrites existing value.<br><b>ProcessStatus: </b>(Added in version 24.3.26) Indicates whether a payment came from in office or online, and if the online payment is processed or pending. Either "OnlineProcessed" or "OnlinePending".<br></p>
<p><b>Example Requests:</b><br> PUT /payments/56734<br></p>
<p><span class="codeblock"> {<br> "ProcessStatus": "OnlineProcessed"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "PayType": 449,<br> "CheckNum": "7492",<br> "BankBranch": "98-795",<br> "PayNote": "12 months - 10% discount."<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PayNum": 56734,<br> "PayType": 449,<br> "payType": "API Payment Processed",<br> "PayDate": "2022-06-24",<br> "PayAmt": "339",<br> "CheckNum": "7492",<br> "BankBranch": "98-795",<br> "PayNote": "12 months - 10% discount.",<br> "PatNum": 1337,<br> "ClinicNum": "0",<br> "DateEntry": "2022-06-24",<br> "DepositNum": 0,<br> "Receipt": "",<br> "IsRecurringCC": "true",<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-06-24 07:34:31",<br> "PaymentSource": "API",<br> "ProcessStatus": "OfficeProcessed",<br> "RecurringChargeDate": "0001-01-01",<br> "IsCcCompleted": "false",<br> "serverDateTime": ""<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Payments PUT Partial</h2>
<p>Version Added: 25.1.11</p>
<p><span style="color:red">Rarely used.</span> Before calling this method, a payment must be made via Open Dental UI or Payments POST. Afterward, normally use PaySplits GET to obtain the new paysplits.</p>
<p>This method deletes those existing paysplits for the payment and inserts new ones created for the passed-in procedures and/or payplancharges. Both <b>procNumsAndAmounts</b> and <b>payPlanChargeNumsAndAmounts</b> can be passed in simultaneously, but a request must have at least one or the other. The sum of all <b>Amounts</b> across both fields must equate to the PayAmt of the payment.</p>
<p><b>PayNum: </b>Required in the URL. </p>
<p><b>procNumsAndAmounts: </b>Required if payPlanChargeNumsAndAmounts is not being passed in. Optional otherwise. One or many pairs of <b>ProcNums</b> and <b>Amounts</b>.  <li><b>ProcNum: </b>FK to procedure.ProcNum. Procedure must have an outstanding charge, and be for the patient or a family member. </li>
<li><b>Amount: </b>Amount to allocate to the ProcNum's procedure. </li>
</p>
<p><b>payPlanChargeNumsAndAmounts: </b>(Added in version 25.2.45) Required if procNumsAndAmounts is not being passed in. Optional otherwise. One or many pairs of <b>PayPlanChargeNums</b> and <b>Amounts</b>.  <li><b>PayPlanChargeNum: </b>FK to payplancharge.PayPlanChargeNum. Must be for a Dynamic Payment Plan belonging to the patient or a family member. </li>
<li><b>Amount: </b>Amount to allocate to the PayPlanCharge. </li>
</p>
<p><b>Example Request:</b><br> PUT /payments/40143/Partial<br></p>
<p><span class="codeblock"> {<br> "procNumsAndAmounts": [ {"ProcNum": 271, "Amount": 40}, {"ProcNum": 402, "Amount": 15} ],<br> "payPlanChargeNumsAndAmounts": [ {"PayPlanChargeNum": 62, "Amount": 20} ]<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PayNum": 40143,<br> "PayType": 383,<br> "payType": "Check",<br> "PayDate": "2025-02-14",<br> "PayAmt": "75",<br> "CheckNum": "",<br> "BankBranch": "",<br> "PayNote": "",<br> "PatNum": 654,<br> "ClinicNum": "0",<br> "DateEntry": "2025-02-14",<br> "DepositNum": 0,<br> "Receipt": "",<br> "IsRecurringCC": "false",<br> "SecUserNumEntry": 1,<br> "SecDateTEdit": "2025-02-14 09:25:48",<br> "PaymentSource": "None",<br> "ProcessStatus": "OfficeProcessed",<br> "RecurringChargeDate": "0001-01-01",<br> "IsCcCompleted": "false",<br> "serverDateTime": ""<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
