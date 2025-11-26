Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Output Text Field Names

See [Sheet Output Text Field](sheetsoutputtext.html).

Output Text fields are [Sheet Field Types](sheetsaddelements.html) that pull information from the database when filling out forms. This list is in progress and not all fields have a description yet. The available output text fields vary by sheet type.

| Output Text Field Name | Description |
| --- | --- |
| accountNumber | Patient's PatNum or ChartNum, depending on the preference *Account Numbers use*. Displays on statements as "Account Number 1234". |
| address |  |
| amountDueValue |  |
| appt.DateTime | Date and time of the appointment. |
| appt.estPatientPortion | Estimated patient portion for attached procedures. (patient portion = gross production - estimated insurance write-offs + adjustments - insurance estimates) |
| appt.length | Length of the patient's appointment in minutes. |
| appt.Note | Note attached to the appointment. |
| appt.procedures | Procedures attached to the patient's appointment. |
| appt.providers | Providers attached the appointment. |
| appt.timeDate | Time and date on the appointment. |
| APR | Annual percentage rate on the payment plan. |
| balanceLabel | Displays the label =Balance: on statements. |
| balanceValue | Displays the total value of the patient or family balance on statements. |
| billingAddress | The guarantor name and address. If *Single patient only* is selected when generating a Statement, the patient name is used instead of guarantor. |
| birthdate | Date of birth for the selected patient. |
| CarrierName | Insurance carrier name. |
| CashSumTotal | Total of cash payments on a deposit slip. Payments must have a payment type of *Cash* associated for cashSumTotal to calculate. |
| ccNumberMaskedWithExp | Available for payment plans. Shows the patient credit card on file as a masked number, with the associated expiration date.  (e.g., XXXXXXXXXXXX5555 Exp 12/23) |
| ChartNumber | Manually assigned from the Edit Patient Information window. |
| checkNumber | 01 through 18. Each item displays the *Check Number* of a payment attached to the deposit. Blank *Check Numbers* are included. |
| cityStateZip |  |
| clinic.address | The address entered for the currently selected clinic. |
| clinic.cityStateZip | The city, state, and zip code entered for the currently selected clinic. |
| clinic.phone | The phone number entered for the currently selected clinic. |
| County |  |
| dateLabReceived | Date the first Lab Case listed on an appointment was marked received. |
| dateLabSent | Date the first Lab Case listed on an appointment was marked sent. |
| DateOfAgreement | Date of payment plan agreement. |
| DateScreenGroup |  |
| dateTime.Today | Todays date (mm/dd/yyyy) |
| dateTSigned | Records date of electronic signature on a Treatment Plan. |
| dateTPracticeSigned | Records date of electronic signature from secondary signature box on a Treatment Plan. |
| DaysOfSupply | Fills in with days from the Edit Rx window. Requires *Procedure code required on some prescriptions* preference. See [Rx / Prescription](rx.html), Procedure Required on Prescription for setup. |
| defaultHeading | Practice/clinic name, practice/clinic phone number, patient name, patient title (if any), date of birth, and Treatment Plan date |
| deposit.BankAccountInfo | Inserts information from the Bank Account Info box in the deposit. |
| deposit.DateDeposit | Date of deposit. (mm/dd/yyyy) |
| depositItem | 01 through 18. Each item is a payment attached to the deposit slip. |
| depositItemCount | Number of deposit items. |
| depositList | Lists all deposit items. Date, patient name, check number, branch, and amount. |
| depositTotal | Total of payments attached to deposit. |
| Description |  |
| Disp |  |
| Drug | Drug being prescribed in an Rx. |
| futureAppointments | Displays date, time, and procedures attached to any future schedule appointment. |
| GradeSchool |  |
| guarantor | Guarantor last name followed by first name. |
| Heading | Heading (i.e., description) of the Treatment Plan |
| insEstLabel |  |
| insEstValue |  |
| invoicePaymentLabel | Labeled Payments in the sheet, this is the sum of all the payments in the Patient Account grid, whether or not the payments are attached to a procedure. |
| invoicePaymentValue | This is the sum of all the payments in the Patient Account grid, whether or not the payments are attached to a procedure. If the preference, *Invoice payments grid shows write-offs* is checked, the procedure write-off will be included in this value. |
| invoicePayPlanLabel | Labeled Pay Plan Charges in the sheet. |
| invoicePayPlanValue | Displays the payment plan Charges Due amount. |
| invoiceTotalLabel | Labeled Balance Remaining in the sheet, this is the sum of the charges minus the sum of the payments. |
| invoiceTotalValue | Displays the balance remaining amount. |
| lab.Address |  |
| lab.CityStZip |  |
| lab.Description |  |
| lab.Email |  |
| lab.Notes |  |
| lab.Phone |  |
| lab.WirelessPhone |  |
| labcase.DateTimeCreated |  |
| labcase.DateTimeDue |  |
| labcase.LabCaseNum | Unique identifier for a lab case. |
| labName | Name of the Laboratory associated with the first Lab Case listed on an appointment. |
| length |  |
| nameFL | Patient first and last name. |
| nameLF | Patient last name, preferred name, and first name. |
| Note | The note entered on a payment plan. |
| otherFamilyMembers |  |
| pat.address |  |
| pat.Birthdate | Patient's birthdate (mm/dd/yyyy). |
| pat.cityStateZip |  |
| pat.HmPhone |  |
| pat.nameFL |  |
| patient.address | Patient address |
| patient.cityStateZip | Patient's city, state, and zip code |
| patient.HmPhone |  |
| patient.NameFL | Patient first and last name |
| patient.priProvNameFL | First and last name of the patient's primary provider |
| patient.provider | Usually patient's primary provider. For [Referral Slip Layout](sheetsreferralslips.html) this is the Referring Provider. |
| patient.salutation | Enters the words "Dear Patient". Patient will be replaced with the patient's preferred name. If no preferred name is entered, the first name will be used. |
| patient.WirelessPhone |  |
| patient.WkPhone |  |
| PatNum |  |
| payPlanAmtDueValue | Displays the payment plan amount due, or "N/A" when used in a Limited Statement. |
| PlaceOfService |  |
| PracticeAddress | Physical address of the practice. |
| practiceCityStateZip | City, state, and zip code of the practice. |
| PracticeTitle | Title of the practice. |
| Principal | Principal balance on payment plan. |
| priProvName |  |
| ProcCode | The procedure code associated to the prescription. See [Rx / Prescription](rx.html), Procedure Required on Prescription for setup. |
| prov.dEANum | Providers DEA number. |
| prov.nameFormal |  |
| prov.NationalProvID |  |
| prov.phone |  |
| prov.stateLicense |  |
| prov.stateRxID |  |
| providerLegend | This output field only works for users in Australia, with language settings set to English-Australia. Adds a legend to the statement that shows all non-hidden providers.  * Swiss bank routing fields do not show on the new custom statements. * Australian Provider legend must be added from the available output fields. |
| ProvName |  |
| referral.address | The referrers street address. |
| referral.cityStateZip | The referrers city, state, and zip code. |
| referral.nameFL | The referrers first and last name. |
| referral.nameL | The referrers last name. |
| referral.phone | The referrers phone number. |
| referral.phone2 |  |
| referral.salutation | The salutation (Dear) followed by the referrals first name. e.g., Dear John |
| Refills | Number of refills allowed on an Rx. |
| returnAddress | Inserts the address of the guarantor's assigned clinic. |
| RxDate | Date Rx was created. |
| RxDateMonthSpelled |  |
| sheet.DateTimeSheet |  |
| Sig |  |
| SignatureText | OutputText where patient may type their name. |
| SignaturePracticeText | OutputText where presenter may type their name. |
| statement.DateSent | Date statement was created. |
| statement.Note | Notes added to a statement. Drawn from [Dunning Messages](billingdunningmsg.html). |
| statement.NoteBold | Bold notes added to a statement. |
| statementNum | Available for Statements. Adds a statement number. |
| statementIsCopy | If printing a copy of an invoice the word COPY will be printed on the sheet. |
| statementIsTaxReceipt | Only shows when printing receipts. The field will show KEEP THIS RECEIPT FOR INCOME TAX PURPOSES. |
| statementReceiptInvoice | This field determines the title of the document based on how it is generated.  * Statements will read STATEMENT #. * Receipts will read RECEIPT. * Invoices will read INVOICE. * For Australia and New Zealand, it will read TAX INVOICE. * For Singapore it will read RECEIPT #. |
| statementURL | Include a URL patients can use to launch the Patient Portal sign-in window (e.g., http://www.patientviewer.com/statement/CyVue8). Patients must have Patient Portal credentials. After logging in, a PDF copy of the statement is displayed. If [Payment Portal Setup](paymentportalsetup.html) are enabled, patients can access the [Payment Portal](portalpaymentsbypatient.html) to make payments. |
| statementShortURL | Include a short URL patients can use to launch the Patient Portal sign-in window (e.g., http://od.ag/s/CyVue8). Patients must have Patient Portal credentials. After logging in, a PDF copy of the statement is displayed. If Online Payments are enabled, patients can access the Payment Portal to make payments. |
| TermsAndConditions | The default Payment Plan Terms and Conditions set in [Preferences](preferences.html). |
| today.DayDate | Today's day of the week (i.e., Monday) |
| totalCostOfLoan | Total cost of loan on a payment plan. |
| totalFinanceCharge | Total finance charges on a payment plan. |
| totalLabel |  |
| totalValue |  |
| tpPatPortionEst | Estimated patient portion for a treatment plan |
| weekdayDateTime |  |