# File: ./www.opendental.com/manual232/manual.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Manual</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">.LeftTree{
        display:block;/*For manual.html, always show the tree*/
        max-width:98%;/*Let it shrink when very narrow*/
    }
		.RightMain{
				margin-left:384px;/*and never change the margin for the right pane*/
				display:none;/*for phones*/
		}
		.LinkOdSpecialSearch, .LinkOdSpecialHome{
				display:block;/*show this link on phones*/
				margin-left:24px;
		}
		@media screen and (min-width: 700px) {/*if screen is at all big enough on manual.html*/
				.RightMain {
						display: block;/*then show the right pane*/
				}
				.LinkOdSpecialSearch, .LinkOdSpecialHome{
						display:none;/*hide this redundant link*/
				}
		}
</style>
</head>
<body onload="BodyLoaded('manual','modules','mainmenu','toolbar','+technical')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<p class="LinkOdSpecialHome"><a href="../index.html">Open Dental Home</a></p>
<p class="LinkOdSpecialSearch"><a href="searchmanual.html">Search</a></p>
<ul class="LeftTreeFirstNode" onclick="ButtonClicked(event)">
<li class="collapse" id="manual"><div class="exptxt"><a href="manual.html">Manual</a></div>
<ul id="ul_manual">
<li class="collapse" id="modules"><div class="exptxt"><a href="modules.html">Module</a></div>
<ul id="ul_modules">
<li class="collapse" id="appointments"><div class="exptxt"><a href="appointments.html">Appointments Module</a></div>
<ul id="ul_appointments">
<li id="appointmentviews"><a href="appointmentviews.html">Appointment Views</a></li>
<li id="timebars"><a href="timebars.html">Time Bars</a></li>
<li id="blockouts"><a href="blockouts.html">Blockouts</a></li>
<li id="apptpinboard"><a href="apptpinboard.html">Pinboard</a></li>
<li id="productiontotals"><a href="productiontotals.html">Production Totals</a></li>
<li id="waitingroom"><a href="waitingroom.html">Waiting Room</a></li>
<li id="confirmationstatus"><a href="confirmationstatus.html">Confirmation Status</a></li>
<li id="aptedit"><a href="aptedit.html">Edit Appointment</a></li>
<li id="apptspatient"><a href="apptspatient.html">Patient Appointments</a></li>
<li class="collapse" id="appointmentlists"><div class="exptxt"><a href="appointmentlists.html">Appointment Lists</a></div>
<ul id="ul_appointmentlists">
<li class="collapse" id="recalllist"><div class="exptxt"><a href="recalllist.html">Recall List</a></div>
<ul id="ul_recalllist">
<li id="recalllistrecentlycontacted"><a href="recalllistrecentlycontacted.html">Recall List - Reminders</a></li>
<li id="recalllistreactivation"><a href="recalllistreactivation.html">Recall List - Reactivations</a></li>
</ul>
<li id="confirmationlist"><a href="confirmationlist.html">Confirmation List</a></li>
<li id="appttracker"><a href="appttracker.html">Planned Appointment Tracker</a></li>
<li id="unscheduled"><a href="unscheduled.html">Unscheduled List</a></li>
<li class="collapse" id="asaplist"><div class="exptxt"><a href="asaplist.html">ASAP List</a></div>
<ul id="ul_asaplist">
<li id="asapmsgs"><a href="asapmsgs.html">ASAP Message Setup</a></li>
</ul>
<li id="insverifylist"><a href="insverifylist.html">Insurance Verification List</a></li>
</ul>
<li id="updateprovsfutureappts"><a href="updateprovsfutureappts.html">Update Provs on Future Appts</a></li>
<li id="apptcomplete"><a href="apptcomplete.html">Set Appointment Complete</a></li>
<li id="apptbreak"><a href="apptbreak.html">Break Appointment</a></li>
<li id="apptdelete"><a href="apptdelete.html">Delete Appointment</a></li>
<li id="timeasktoarrive"><a href="timeasktoarrive.html">Time Ask to Arrive</a></li>
<li id="apptprint"><a href="apptprint.html">Print Appointments</a></li>
</ul>
<li class="collapse" id="family"><div class="exptxt"><a href="family.html">Family Module</a></div>
<ul id="ul_family">
<li class="collapse" id="patientedit"><div class="exptxt"><a href="patientedit.html">Edit Patient Information</a></div>
<ul id="ul_patientedit">
<li id="patienteditemergencycontact"><a href="patienteditemergencycontact.html">Edit Patient Information: Emergency Contact Tab</a></li>
<li id="patientedithospitals"><a href="patientedithospitals.html">Edit Patient Information: Hospitals Tab</a></li>
<li id="patienteditother"><a href="patienteditother.html">Edit Patient Information: Other Tab</a></li>
<li class="collapse" id="patienteditpublichealth"><div class="exptxt"><a href="patienteditpublichealth.html">Edit Patient Information: Public Health Tab</a></div>
<ul id="ul_patienteditpublichealth">
<li id="publichealth"><a href="publichealth.html">Public Health</a></li>
</ul>
<li id="requiredfields"><a href="requiredfields.html">Required Fields</a></li>
<li id="familyrelationship"><a href="familyrelationship.html">Family Relationships</a></li>
<li id="patienteditehr"><a href="patienteditehr.html">Edit Patient Information: EHR Misc Tab</a></li>
</ul>
<li class="collapse" id="referrals"><div class="exptxt"><a href="referrals.html">Referrals</a></div>
<ul id="ul_referrals">
<li id="referralslips"><a href="referralslips.html">Referral Slip</a></li>
</ul>
<li class="collapse" id="insplan"><div class="exptxt"><a href="insplan.html">Insurance Plan</a></div>
<ul id="ul_insplan">
<li class="collapse" id="benefitinfo"><div class="exptxt"><a href="benefitinfo.html">Benefits</a></div>
<ul id="ul_benefitinfo">
<li id="editbenefit"><a href="editbenefit.html">Edit Benefit</a></li>
<li id="benefitinforowview"><a href="benefitinforowview.html">Edit Benefits - Row View</a></li>
<li id="benefitlogic"><a href="benefitlogic.html">Benefit Logic</a></li>
<li id="otherbenefits"><a href="otherbenefits.html">Other Benefits</a></li>
<li id="deductibles"><a href="deductibles.html">Deductibles</a></li>
<li id="insfrequencylimitations"><a href="insfrequencylimitations.html">Frequency Limitations</a></li>
</ul>
<li id="adjinsbenefits"><a href="adjinsbenefits.html">Adjustments to Insurance Benefits</a></li>
<li id="triggersnewplan"><a href="triggersnewplan.html">Fields that Trigger New Plan</a></li>
<li id="ebenefits"><a href="ebenefits.html">Electronic Eligibility and Benefits</a></li>
<li id="insadd"><a href="insadd.html">Add Insurance</a></li>
<li class="collapse" id="insplantypes"><div class="exptxt"><a href="insplantypes.html">Insurance Plan Types</a></div>
<ul id="ul_insplantypes">
<li class="collapse" id="planppo"><div class="exptxt"><a href="planppo.html">PPO Insurance Plan</a></div>
<ul id="ul_planppo">
<li id="writeoffcalculations"><a href="writeoffcalculations.html">PPO Insurance Calculations</a></li>
</ul>
<li id="planppofixed"><a href="planppofixed.html">PPO Fixed Benefit Insurance Plan</a></li>
<li id="plancatperc"><a href="plancatperc.html">Category Percentage Insurance Plan</a></li>
<li id="planmedicaid"><a href="planmedicaid.html">Medicaid or Flat Co-Pay Insurance Plan</a></li>
<li id="plancapitation"><a href="plancapitation.html">Capitation ( HMO / DMO ) Insurance Plan</a></li>
<li id="planhmosupplemental"><a href="planhmosupplemental.html">HMO / DMO Insurance Plan with Co-pays</a></li>
</ul>
<li id="insplanedit"><a href="insplanedit.html">Change Insurance Plan Information</a></li>
<li id="insplandrop"><a href="insplandrop.html">Drop Insurance Plan</a></li>
<li id="insplancombine"><a href="insplancombine.html">Combine Insurance Plans</a></li>
<li class="collapse" id="medicalins"><div class="exptxt"><a href="medicalins.html">Medical Insurance</a></div>
<ul id="ul_medicalins">
<li id="icdcodes"><a href="icdcodes.html">ICD-10 Codes</a></li>
</ul>
<li class="collapse" id="inssecondary"><div class="exptxt"><a href="inssecondary.html">Secondary Insurance</a></div>
<ul id="ul_inssecondary">
<li id="cob"><a href="cob.html">Coordination of Benefits ( COB )</a></li>
</ul>
<li id="inshistory"><a href="inshistory.html">Insurance History</a></li>
<li id="downgrades"><a href="downgrades.html">Estimate Downgrades</a></li>
</ul>
<li id="recall"><a href="recall.html">Recall</a></li>
<li id="patientpictures"><a href="patientpictures.html">Patient Picture</a></li>
<li id="superfamily"><a href="superfamily.html">Super Family</a></li>
<li id="patientclone"><a href="patientclone.html">Clone</a></li>
<li id="discountplan"><a href="discountplan.html">Discount Plan</a></li>
</ul>
<li class="collapse" id="account"><div class="exptxt"><a href="account.html">Account Module</a></div>
<ul id="ul_account">
<li class="collapse" id="payment"><div class="exptxt"><a href="payment.html">Payment</a></div>
<ul id="ul_payment">
<li class="collapse" id="paysplit"><div class="exptxt"><a href="paysplit.html">Paysplit</a></div>
<ul id="ul_paysplit">
<li id="paysplitsedit"><a href="paysplitsedit.html">Paysplit Revise</a></li>
</ul>
<li class="collapse" id="paymentpatientcreditcard"><div class="exptxt"><a href="paymentpatientcreditcard.html">Credit Card Payment</a></div>
<ul id="ul_paymentpatientcreditcard">
<li class="collapse" id="payconnectpaymentwindow"><div class="exptxt"><a href="payconnectpaymentwindow.html">PayConnect Window</a></div>
<ul id="ul_payconnectpaymentwindow">
<li id="payconnectvoid"><a href="payconnectvoid.html">PayConnect Void</a></li>
<li id="payconnectsetup"><a href="payconnectsetup.html">PayConnect Setup</a></li>
<li id="payconnectclinics"><a href="payconnectclinics.html">PayConnect Setup for Clinics</a></li>
</ul>
<li class="collapse" id="xcharge"><div class="exptxt"><a href="xcharge.html">XCharge (OpenEdge)</a></div>
<ul id="ul_xcharge">
<li id="xchargevoid"><a href="xchargevoid.html">XCharge Void Payment</a></li>
<li id="xchargetroubleshooting"><a href="xchargetroubleshooting.html">XCharge Troubleshooting</a></li>
<li id="xchargesetup"><a href="xchargesetup.html">XCharge Setup</a></li>
<li id="xchargeclinic"><a href="xchargeclinic.html">XCharge Setup for Clinics</a></li>
</ul>
<li id="paysimple"><a href="paysimple.html">PaySimple</a></li>
<li class="collapse" id="edgeexpress"><div class="exptxt"><a href="edgeexpress.html">Edge Express</a></div>
<ul id="ul_edgeexpress">
<li id="edgeexpressvoid"><a href="edgeexpressvoid.html">EdgeExpress Void</a></li>
</ul>
<li id="paymenttransdetails"><a href="paymenttransdetails.html">Credit Card Transaction Details</a></li>
</ul>
<li id="paymentreturn"><a href="paymentreturn.html">Credit Card Return</a></li>
<li id="unearnedprepayment"><a href="unearnedprepayment.html">Unearned / Prepayment</a></li>
<li id="unearnedallocate"><a href="unearnedallocate.html">Allocate Unearned Income</a></li>
<li id="refunds"><a href="refunds.html">Refund</a></li>
<li id="incometransfermanager"><a href="incometransfermanager.html">Income Transfer Manager</a></li>
<li id="incometransfer"><a href="incometransfer.html">Income Transfer</a></li>
<li id="eclipboardpayment"><a href="eclipboardpayment.html">eClipboard: Payment</a></li>
</ul>
<li class="collapse" id="adjustments"><div class="exptxt"><a href="adjustments.html">Adjustment</a></div>
<ul id="ul_adjustments">
<li id="adjustmentsmultiwindow"><a href="adjustmentsmultiwindow.html">Add Multiple Adjustments</a></li>
<li id="salestax"><a href="salestax.html">Sales Tax</a></li>
<li id="selectprocedure"><a href="selectprocedure.html">Select Procedure</a></li>
</ul>
<li class="collapse" id="claimedit"><div class="exptxt"><a href="claimedit.html">Claim</a></div>
<ul id="ul_claimedit">
<li id="claimtabgeneral"><a href="claimtabgeneral.html">Edit Claim - General Tab</a></li>
<li class="collapse" id="claimtabattach"><div class="exptxt"><a href="claimtabattach.html">Edit Claim - Attachments Tab</a></div>
<ul id="ul_claimtabattach">
<li id="dentalxchangeattachmentservice"><a href="dentalxchangeattachmentservice.html">DentalXChange Attachment</a></li>
</ul>
<li id="claimtabmisc"><a href="claimtabmisc.html">Edit Claim - Misc Tab</a></li>
<li id="claimmedical"><a href="claimmedical.html">Edit Claim - Medical Tab</a></li>
<li id="claimtabstatus"><a href="claimtabstatus.html">Edit Claim - Status History Tab</a></li>
<li id="claimprocedure"><a href="claimprocedure.html">Claim Procedures ( claimprocs )</a></li>
<li id="claimsaddresses"><a href="claimsaddresses.html">Claim Addresses</a></li>
<li id="claimprocedureprovider"><a href="claimprocedureprovider.html">Claimproc Provider</a></li>
<li id="claimpaymentincorrectproc"><a href="claimpaymentincorrectproc.html">Incorrect Procedures on Claim</a></li>
<li id="claimtypes"><a href="claimtypes.html">Claim Types</a></li>
<li class="collapse" id="claimreceive"><div class="exptxt"><a href="claimreceive.html">Receive Claim</a></div>
<ul id="ul_claimreceive">
<li class="collapse" id="claimpayfinalize"><div class="exptxt"><a href="claimpayfinalize.html">Finalize Insurance Payment</a></div>
<ul id="ul_claimpayfinalize">
<li id="claimpaymenteobscan"><a href="claimpaymenteobscan.html">Scan EOB</a></li>
</ul>
<li id="insinterest"><a href="insinterest.html">Interest on Insurance Payments</a></li>
</ul>
<li class="collapse" id="inspayeob"><div class="exptxt"><a href="inspayeob.html">Insurance Payment (EOB)</a></div>
<ul id="ul_inspayeob">
<li id="editinspayment"><a href="editinspayment.html">Edit Insurance Payment</a></li>
</ul>
<li id="claimpaymentsplit"><a href="claimpaymentsplit.html">Split Claim</a></li>
<li id="claimpaymentsupplemental"><a href="claimpaymentsupplemental.html">Supplemental Insurance Payments</a></li>
<li id="insurancerefunds"><a href="insurancerefunds.html">Insurance Refunds</a></li>
</ul>
<li class="collapse" id="paymentplanpatient"><div class="exptxt"><a href="paymentplanpatient.html">Payment Plan</a></div>
<ul id="ul_paymentplanpatient">
<li id="paymentplanprint"><a href="paymentplanprint.html">Sign and Print Payment Plan</a></li>
<li id="paymentplanpayment"><a href="paymentplanpayment.html">Payment to a Payment Plan</a></li>
<li id="paymentplanclose"><a href="paymentplanclose.html">Close Payment Plan</a></li>
<li id="paymentplanscenarios"><a href="paymentplanscenarios.html">Payment Plan Examples</a></li>
<li id="paymentplanrecalculate"><a href="paymentplanrecalculate.html">Payment Plan Recalculate</a></li>
<li id="paymentplanpatientfaq"><a href="paymentplanpatientfaq.html">Payment Plan Q and A</a></li>
<li id="paymentplantxcredits"><a href="paymentplantxcredits.html">Payment Plan Procedures and Credits</a></li>
<li id="eclipboardpaymentplans"><a href="eclipboardpaymentplans.html">eClipboard: Payment Plans</a></li>
</ul>
<li id="paymentplanins"><a href="paymentplanins.html">Insurance Payment Plans</a></li>
<li id="paymentplandynamic"><a href="paymentplandynamic.html">Dynamic Payment Plan</a></li>
<li id="installmentplan"><a href="installmentplan.html">Installment Plan</a></li>
<li id="quickprocs"><a href="quickprocs.html">Quick Procs</a></li>
<li id="repeatingcharge"><a href="repeatingcharge.html">Repeating Charge</a></li>
<li class="collapse" id="statementwindow"><div class="exptxt"><a href="statementwindow.html">Statement Window</a></div>
<ul id="ul_statementwindow">
<li id="statement"><a href="statement.html">Statement</a></li>
<li id="receipt"><a href="receipt.html">Receipt</a></li>
<li id="invoice"><a href="invoice.html">Invoice</a></li>
<li id="limited"><a href="limited.html">Limited Statement</a></li>
</ul>
<li id="orthocase"><a href="orthocase.html">Ortho Case</a></li>
<li id="hiddensplits"><a href="hiddensplits.html">Hidden Splits</a></li>
<li class="collapse" id="creditcardsmanage"><div class="exptxt"><a href="creditcardsmanage.html">Credit Card Manage</a></div>
<ul id="ul_creditcardsmanage">
<li id="xchargeaddcard"><a href="xchargeaddcard.html">XCharge Add Card</a></li>
<li id="payconnectaddcard"><a href="payconnectaddcard.html">PayConnect Add Card</a></li>
<li id="paysimpleaddcard"><a href="paysimpleaddcard.html">PaySimple Add Card</a></li>
<li id="edgeexpressaddcard"><a href="edgeexpressaddcard.html">Edge Express Add Card</a></li>
<li id="recurringchargesauthorize"><a href="recurringchargesauthorize.html">Authorize Recurring Charges</a></li>
</ul>
<li id="servicedateview"><a href="servicedateview.html">Service Date View</a></li>
<li id="orthoauto"><a href="orthoauto.html">Auto Ortho</a></li>
</ul>
<li class="collapse" id="treatmentplan"><div class="exptxt"><a href="treatmentplan.html">Treatment Plan Module</a></div>
<ul id="ul_treatmentplan">
<li id="treatmentplanedit"><a href="treatmentplanedit.html">Edit Treatment Plan</a></li>
<li id="treatmentplansign"><a href="treatmentplansign.html">Sign Treatment Plan</a></li>
<li id="treatmentplanprint"><a href="treatmentplanprint.html">Print Treatment Plan</a></li>
<li id="treatmentplandiscounts"><a href="treatmentplandiscounts.html">TP Procedure Discount</a></li>
<li id="preauth"><a href="preauth.html">Preauthorization</a></li>
<li id="insremainingcalc"><a href="insremainingcalc.html">Insurance Remaining Calculations</a></li>
<li id="eclipboardtreatmentplan"><a href="eclipboardtreatmentplan.html">eClipboard: Treatment Plan</a></li>
</ul>
<li class="collapse" id="chart"><div class="exptxt"><a href="chart.html">Chart Module</a></div>
<ul id="ul_chart">
<li class="collapse" id="+chartTabs"><div class="exptxt">Chart Tabs</div>
<ul id="ul_+chartTabs">
<li class="collapse" id="entertreatment"><div class="exptxt"><a href="entertreatment.html">Enter Treatment</a></div>
<ul id="ul_entertreatment">
<li class="collapse" id="procedureedit"><div class="exptxt"><a href="procedureedit.html">Procedure</a></div>
<ul id="ul_procedureedit">
<li class="collapse" id="electronicsignatures"><div class="exptxt"><a href="electronicsignatures.html">Electronic Signatures</a></div>
<ul id="ul_electronicsignatures">
<li id="topazsetupbsb"><a href="topazsetupbsb.html">Topaz BSB Model Setup</a></li>
<li id="topazsetuphsb"><a href="topazsetuphsb.html">Topaz HSB Model Setup</a></li>
</ul>
<li id="supernumeraryteeth"><a href="supernumeraryteeth.html">Supernumerary Teeth</a></li>
<li id="procedurefinancial"><a href="procedurefinancial.html">Procedure - Financial Tab</a></li>
<li id="proceduremedical"><a href="proceduremedical.html">Procedure - Medical Tab</a></li>
<li id="proceduremisc"><a href="proceduremisc.html">Procedure - Misc Tab</a></li>
<li id="procedurenotes"><a href="procedurenotes.html">Procedure Notes</a></li>
<li id="autonotes"><a href="autonotes.html">Auto Notes</a></li>
<li id="rightclicktextboxes"><a href="rightclicktextboxes.html">Right Click Text Box</a></li>
<li id="notes"><a href="notes.html">Notes</a></li>
</ul>
<li id="procsmultipleappts"><a href="procsmultipleappts.html">Procedure over Multiple Appointments</a></li>
</ul>
<li id="missingteeth"><a href="missingteeth.html">Missing/Primary Teeth</a></li>
<li id="movements"><a href="movements.html">Tooth Movements</a></li>
<li id="apptplanned"><a href="apptplanned.html">Planned Appointments</a></li>
<li id="showtabchart"><a href="showtabchart.html">Show Chart Views</a></li>
<li id="chartdrawing"><a href="chartdrawing.html">Draw on Tooth Chart</a></li>
<li id="ortho"><a href="ortho.html">Ortho</a></li>
</ul>
<li class="collapse" id="+chartToolbar"><div class="exptxt">Chart Toolbar</div>
<ul id="ul_+chartToolbar">
<li class="collapse" id="rx"><div class="exptxt"><a href="rx.html">Rx / Prescription</a></div>
<ul id="ul_rx">
<li id="rxmanage"><a href="rxmanage.html">Rx Manage</a></li>
</ul>
<li class="collapse" id="+eRx"><div class="exptxt">eRx</div>
<ul id="ul_+eRx">
<li class="collapse" id="dosespotuse"><div class="exptxt"><a href="dosespotuse.html">DoseSpot eRx / Prescription</a></div>
<ul id="ul_dosespotuse">
<li id="dosespotsetup"><a href="dosespotsetup.html">DoseSpot Setup</a></li>
<li id="dosespotalerts"><a href="dosespotalerts.html">DoseSpot Alerts</a></li>
<li id="dosespotrequiredinfo"><a href="dosespotrequiredinfo.html">Required DoseSpot eRx Information</a></li>
</ul>
<li class="collapse" id="newcrop"><div class="exptxt"><a href="newcrop.html">NewCrop eRx / Prescription</a></div>
<ul id="ul_newcrop">
<li id="newcropallergies"><a href="newcropallergies.html">NewCrop eRx Allergies</a></li>
<li id="newcropcredentials"><a href="newcropcredentials.html">NewCrop eRx Credentialing</a></li>
<li id="newcropdoctorslist"><a href="newcropdoctorslist.html">NewCrop eRx Doctor's List</a></li>
<li id="newcropdruginteraction"><a href="newcropdruginteraction.html">NewCrop eRx Drug-Drug, Drug-Allergy Interaction Checks</a></li>
<li id="newcropepcs"><a href="newcropepcs.html">NewCrop eRx EPCS Setup</a></li>
<li id="newcropfaq"><a href="newcropfaq.html">NewCrop eRx Frequently Asked Questions</a></li>
<li id="newcropmedications"><a href="newcropmedications.html">NewCrop eRx Medications</a></li>
<li id="newcropmissingrx"><a href="newcropmissingrx.html">Report a Failed or Missing Prescription in NewCrop eRx</a></li>
<li id="newcroppharmacy"><a href="newcroppharmacy.html">NewCrop eRx Pharmacies</a></li>
<li id="newcroprequiredinfo"><a href="newcroprequiredinfo.html">Required NewCrop eRx Information</a></li>
<li id="newcroptroubleshooting"><a href="newcroptroubleshooting.html">NewCrop eRx Troubleshooting</a></li>
<li id="newcropformularychecks"><a href="newcropformularychecks.html">NewCrop eRx Drug Formulary Checks</a></li>
</ul>
<li class="collapse" id="electronicrx"><div class="exptxt"><a href="../site/electronicrx.html">eRx Companies</a></div>
<ul id="ul_electronicrx">
<li id="erxohio"><a href="erxohio.html">eRx Ohio</a></li>
</ul>
<li id="pdmp"><a href="pdmp.html">Prescription Drug Monitoring Program (PDMP)</a></li>
</ul>
<li class="collapse" id="labcaseedit"><div class="exptxt"><a href="labcaseedit.html">Lab Case</a></div>
<ul id="ul_labcaseedit">
<li id="labslips"><a href="labslips.html">Lab Slip</a></li>
</ul>
<li class="collapse" id="perio"><div class="exptxt"><a href="perio.html">Perio Chart</a></div>
<ul id="ul_perio">
<li id="graphicalperiochart"><a href="graphicalperiochart.html">Graphical Perio Chart</a></li>
<li id="periochartingvoice"><a href="periochartingvoice.html">Voice Perio Charting</a></li>
</ul>
<li class="collapse" id="orthochart"><div class="exptxt"><a href="orthochart.html">Ortho Chart</a></div>
<ul id="ul_orthochart">
<li id="orthochartsetup"><a href="orthochartsetup.html">Ortho Chart Setup</a></li>
</ul>
<li id="consentforms"><a href="consentforms.html">Consent Form</a></li>
<li id="examsheets"><a href="examsheets.html">Exam Sheet</a></li>
<li class="collapse" id="ehrdashboard1"><div class="exptxt"><a href="ehrdashboard1.html">EHR Dashboard</a></div>
<ul id="ul_ehrdashboard1">
<li class="collapse" id="ehrcpoelab"><div class="exptxt"><a href="ehrcpoelab.html">EHR Medical Lab Order ( CPOE )</a></div>
<ul id="ul_ehrcpoelab">
<li id="ehrcpoelabresultsenter"><a href="ehrcpoelabresultsenter.html">EHR Lab Results</a></li>
<li id="ehrcpoerad"><a href="ehrcpoerad.html">EHR Lab Order RAD codes</a></li>
<li id="ehrcpoeradresultsattach"><a href="ehrcpoeradresultsattach.html">EHR Attach Image to Radiology Order</a></li>
</ul>
<li id="ehrcdsintervention"><a href="ehrcdsintervention.html">EHR CDS Interventions</a></li>
<li id="ehredresourcesprovide"><a href="ehredresourcesprovide.html">EHR Educational Resources</a></li>
<li id="ehramendments"><a href="ehramendments.html">EHR Amendments</a></li>
<li id="ehrccd"><a href="ehrccd.html">EHR Continuity of Care Document ( CCD )</a></li>
<li id="ehrclinicalsummaryprovide"><a href="ehrclinicalsummaryprovide.html">EHR Clinical Summary</a></li>
<li id="ehrcqmreport"><a href="ehrcqmreport.html">EHR Report Clinical Quality Measures (CQMs)</a></li>
<li class="collapse" id="ehrcqm"><div class="exptxt"><a href="ehrcqm.html">EHR Clinical Quality Measures</a></div>
<ul id="ul_ehrcqm">
<li id="payortypes"><a href="payortypes.html">EHR Payor Type / SOP Codes</a></li>
</ul>
<li id="ehrcqmcurrentmeds"><a href="ehrcqmcurrentmeds.html">EHR Attest Medications Documented</a></li>
<li id="ehrcqmdef"><a href="ehrcqmdef.html">EHR Clinical Quality Measure Descriptions</a></li>
<li id="ehrcqmdetails"><a href="ehrcqmdetails.html">EHR CQM Calculation Details</a></li>
<li id="ehrencounters"><a href="ehrencounters.html">EHR Encounters</a></li>
<li id="ehrencryption"><a href="ehrencryption.html">EHR Encryption </a></li>
<li id="ehrhash"><a href="ehrhash.html">EHR Hash </a></li>
<li id="ehrinfobutton"><a href="ehrinfobutton.html">EHR InfoButton</a></li>
<li id="ehrinterventions"><a href="ehrinterventions.html">EHR Interventions</a></li>
<li id="ehrmeasureeventedit"><a href="ehrmeasureeventedit.html">EHR Edit Measure Events</a></li>
<li id="ehrmeasures"><a href="ehrmeasures.html">EHR Measure Reports</a></li>
<li id="ehrmedreconcileelectronic"><a href="ehrmedreconcileelectronic.html">EHR: Reconciling from an Imported Summary of Care</a></li>
<li id="ehrmedreconcilemanual"><a href="ehrmedreconcilemanual.html">EHR Reconcile from Paper Document</a></li>
<li id="ehrmustagesetting"><a href="ehrmustagesetting.html">EHR Set Meaningful Use Stage</a></li>
<li id="ehrnotperformed"><a href="ehrnotperformed.html">EHR CQMs Not Performed</a></li>
<li id="ehrpatientlistgenerate"><a href="ehrpatientlistgenerate.html">EHR Generate Patient List</a></li>
<li id="ehrreminderssend"><a href="ehrreminderssend.html">EHR Document Reminders Sent to Patients</a></li>
<li id="ehrsummaryofcaresend"><a href="ehrsummaryofcaresend.html">EHR Summaries of Care</a></li>
<li id="ehrsyndromicdataexport"><a href="ehrsyndromicdataexport.html">EHR Export Syndromic Surveillance Data</a></li>
<li id="ehrsyndromicdataobs"><a href="ehrsyndromicdataobs.html">EHR Syndromic Surveillance Observations</a></li>
<li id="ehrvaccine"><a href="ehrvaccine.html">EHR Vaccine Data</a></li>
<li id="ehrvaccineexport"><a href="ehrvaccineexport.html">EHR Export Vaccine Data</a></li>
<li id="smokingenter"><a href="smokingenter.html">EHR Tobacco</a></li>
<li id="familyhealthenter"><a href="familyhealthenter.html">Family Health History</a></li>
<li id="ehrcpoeradapprove"><a href="ehrcpoeradapprove.html">EHR Radiology Order List</a></li>
</ul>
<li id="layout"><a href="layout.html">Chart Layout</a></li>
</ul>
<li id="charttp"><a href="charttp.html">Treatment Plan in Chart</a></li>
<li class="collapse" id="graphicaltoothchart"><div class="exptxt"><a href="graphicaltoothchart.html">Graphical Tooth Chart</a></div>
<ul id="ul_graphicaltoothchart">
<li id="chartbig"><a href="chartbig.html">Big Graphical Tooth Chart</a></li>
</ul>
<li class="collapse" id="medical"><div class="exptxt"><a href="medical.html">Medical</a></div>
<ul id="ul_medical">
<li id="problempatient"><a href="problempatient.html">Problems</a></li>
<li id="medicationspatient"><a href="medicationspatient.html">Medications</a></li>
<li id="allergiespatient"><a href="allergiespatient.html">Allergies</a></li>
<li class="collapse" id="vitalsignsenter"><div class="exptxt"><a href="vitalsignsenter.html">EHR Vital Signs</a></div>
<ul id="ul_vitalsignsenter">
<li id="vitalsignsgrowthchart"><a href="vitalsignsgrowthchart.html">EHR Growth Chart</a></li>
</ul>
</ul>
<li id="procgroupnote"><a href="procgroupnote.html">Procedure Group Note</a></li>
</ul>
<li class="collapse" id="images"><div class="exptxt"><a href="images.html">Imaging Module</a></div>
<ul id="ul_images">
<li id="videocapture"><a href="videocapture.html">Video Capture</a></li>
<li id="imageenhancing"><a href="imageenhancing.html">Enhancing Radiograph Images</a></li>
<li id="mountsize"><a href="mountsize.html">Mount Size</a></li>
<li id="imageinfo"><a href="imageinfo.html">Image Info</a></li>
<li id="mountinfo"><a href="mountinfo.html">Mount Info</a></li>
<li id="imagingcameracompatibility"><a href="imagingcameracompatibility.html">Imaging Camera Compatibility</a></li>
<li class="collapse" id="sensorcompatibility"><div class="exptxt"><a href="../site/sensorcompatibility.html">Sensor Compatibility</a></div>
<ul id="ul_sensorcompatibility">
<li id="sensorschick"><a href="../site/sensorschick.html">Schick Sensors</a></li>
<li id="sensorsxdr"><a href="../site/sensorsxdr.html">XDR Sensors</a></li>
<li id="sensorssotaclio"><a href="../site/sensorssotaclio.html">Sota Clio Sensors</a></li>
<li id="scanx"><a href="../site/scanx.html">Scan X</a></li>
</ul>
<li id="imagingimprovements"><a href="../site/imagingimprovements.html">Imaging Improvements</a></li>
<li id="draw"><a href="draw.html">Draw</a></li>
<li id="mountacquire"><a href="mountacquire.html">Select Mount and Acquire</a></li>
</ul>
<li class="collapse" id="manage"><div class="exptxt"><a href="manage.html">Manage Module</a></div>
<ul id="ul_manage">
<li class="collapse" id="claimsend"><div class="exptxt"><a href="claimsend.html">Send Claims</a></div>
<ul id="ul_claimsend">
<li id="claimscreatebatch"><a href="claimscreatebatch.html">Procedures Not Billed to Insurance - New Claims</a></li>
<li id="claims277"><a href="claims277.html">Claim Ack 277</a></li>
<li id="eclaimscomplexities"><a href="eclaimscomplexities.html">E-Claims Complexities</a></li>
<li id="eclaimsmedical"><a href="eclaimsmedical.html">Medical E-Claims</a></li>
<li id="eclaimserrors"><a href="eclaimserrors.html">E-Claims Errors</a></li>
</ul>
<li id="claimpaymentbatch"><a href="claimpaymentbatch.html">Batch Insurance Payment</a></li>
<li class="collapse" id="billing"><div class="exptxt"><a href="billing.html">Billing</a></div>
<ul id="ul_billing">
<li id="billinglist"><a href="billinglist.html">Billing List</a></li>
<li id="billingdefaults"><a href="billingdefaults.html">Billing Defaults</a></li>
<li id="billingdunningmsg"><a href="billingdunningmsg.html">Dunning Messages</a></li>
</ul>
<li id="depositslip"><a href="depositslip.html">Deposit Slip</a></li>
<li class="collapse" id="supplyinventory"><div class="exptxt"><a href="supplyinventory.html">Supply Inventory</a></div>
<ul id="ul_supplyinventory">
<li id="equipment"><a href="equipment.html">Equipment</a></li>
<li id="supplyorders"><a href="supplyorders.html">Supply Orders</a></li>
<li id="supplies"><a href="supplies.html">Supplies</a></li>
<li id="suppliersetup"><a href="suppliersetup.html">Suppliers</a></li>
</ul>
<li class="collapse" id="tsicollections"><div class="exptxt"><a href="tsicollections.html">TSI Collections</a></div>
<ul id="ul_tsicollections">
<li id="tsisent"><a href="tsisent.html">TSI Sent Accounts</a></li>
<li id="tsiexcluded"><a href="tsiexcluded.html">TSI Excluded Accounts</a></li>
<li id="tsihistory"><a href="tsihistory.html">TSI History</a></li>
<li id="tsipayment"><a href="tsipayment.html">TSI Payments</a></li>
</ul>
<li id="tasksarea"><a href="tasksarea.html">Tasks Area</a></li>
<li class="collapse" id="backuptool"><div class="exptxt"><a href="backuptool.html">Backup Tool</a></div>
<ul id="ul_backuptool">
<li id="removeolddata"><a href="removeolddata.html">Remove Old Data</a></li>
<li id="supplementalbackups"><a href="supplementalbackups.html">Supplemental Backups</a></li>
<li id="backups"><a href="backups.html">Backups</a></li>
<li id="backupreminder"><a href="backupreminder.html">Backup Reminder</a></li>
<li id="backupsonline"><a href="backupsonline.html">Online Backups</a></li>
<li id="backupsmanual"><a href="backupsmanual.html">Manual Backups</a></li>
</ul>
<li class="collapse" id="accounting"><div class="exptxt"><a href="accounting.html">Accounting</a></div>
<ul id="ul_accounting">
<li id="quickbooks"><a href="quickbooks.html">QuickBooks</a></li>
<li id="accountingsetup"><a href="accountingsetup.html">Accounting Setup</a></li>
<li id="accountingcloseyear"><a href="accountingcloseyear.html">Accounting Close Year</a></li>
<li id="accountingfaq"><a href="accountingfaq.html">Accounting FAQ</a></li>
<li id="transactionhistory"><a href="transactionhistory.html">Accounting Transactions</a></li>
<li id="reconcile"><a href="reconcile.html">Reconcile</a></li>
<li id="accrual"><a href="accrual.html">Accrual Accounting </a></li>
<li id="accountingreports"><a href="accountingreports.html">Accounting Reports</a></li>
</ul>
<li class="collapse" id="emailinbox"><div class="exptxt"><a href="emailinbox.html">Email Client</a></div>
<ul id="ul_emailinbox">
<li id="emaildirectreceive"><a href="emaildirectreceive.html">Email Inbox Encryption</a></li>
</ul>
<li class="collapse" id="claimsera835"><div class="exptxt"><a href="claimsera835.html">ERAs</a></div>
<ul id="ul_claimsera835">
<li class="collapse" id="era"><div class="exptxt"><a href="era.html">ERA</a></div>
<ul id="ul_era">
<li id="claimsera835trackstatus"><a href="claimsera835trackstatus.html">Track ERA</a></li>
<li id="claimseraeobdetails"><a href="claimseraeobdetails.html">EOB Claim Details</a></li>
<li id="claimseramatching"><a href="claimseramatching.html">ERA Match with Claim</a></li>
<li id="eraprocess"><a href="eraprocess.html">Process ERA</a></li>
</ul>
<li id="claimsera835troubleshooting"><a href="claimsera835troubleshooting.html">ERA Troubleshooting</a></li>
<li id="era835workflow"><a href="era835workflow.html">ERA Workflow</a></li>
</ul>
<li id="importinsplans834"><a href="importinsplans834.html">Import Ins Plan 834</a></li>
<li id="messaging"><a href="messaging.html">Messaging</a></li>
<li class="collapse" id="timeclock"><div class="exptxt"><a href="timeclock.html">Time Clock</a></div>
<ul id="ul_timeclock">
<li id="timecardmanage"><a href="timecardmanage.html">Manage Time Cards</a></li>
<li id="timeclockedit"><a href="timeclockedit.html">TimeCard</a></li>
<li id="scheduleview"><a href="scheduleview.html">Schedule View Employee</a></li>
</ul>
</ul>
</ul>
<li class="collapse" id="mainmenu"><div class="exptxt"><a href="mainmenu.html">Main Menu</a></div>
<ul id="ul_mainmenu">
<li class="collapse" id="+file"><div class="exptxt">File</div>
<ul id="ul_+file">
<li id="changepassword"><a href="changepassword.html">Change Password</a></li>
<li id="emailaddressedit"><a href="emailaddressedit.html">Email Address Edit</a></li>
<li id="usersettings"><a href="usersettings.html">User Settings</a></li>
<li id="printersetup"><a href="printersetup.html">Printer Setup</a></li>
<li id="graphics"><a href="graphics.html">Graphics Preferences</a></li>
<li class="collapse" id="choosedatabase"><div class="exptxt"><a href="choosedatabase.html">Choose Database</a></div>
<ul id="ul_choosedatabase">
<li id="freedentalconfig"><a href="freedentalconfig.html">FreeDentalConfig.xml</a></li>
</ul>
</ul>
<li class="collapse" id="+setup"><div class="exptxt">Setup</div>
<ul id="ul_+setup">
<li id="preferences"><a href="preferences.html">Preferences</a></li>
<li class="collapse" id="+appointments"><div class="exptxt">[Appointments]</div>
<ul id="ul_+appointments">
<li id="confirmationsetup"><a href="confirmationsetup.html">Confirmation Setup</a></li>
<li class="collapse" id="appointmentfields"><div class="exptxt"><a href="appointmentfields.html">Appointment Field Defs</a></div>
<ul id="ul_appointmentfields">
<li id="apptfieldsexample"><a href="apptfieldsexample.html">Screening Patient Temperature</a></li>
</ul>
<li id="appointmentrules"><a href="appointmentrules.html">Appointment Rules</a></li>
<li id="appointmenttypes"><a href="appointmenttypes.html">Appointment Types</a></li>
<li class="collapse" id="appointmentviewsetup"><div class="exptxt"><a href="appointmentviewsetup.html">Appointment View Setup</a></div>
<ul id="ul_appointmentviewsetup">
<li id="appointmentvieweditwindow"><a href="appointmentvieweditwindow.html">Appointment View Edit</a></li>
<li id="apptviewproccolors"><a href="apptviewproccolors.html">Proc Appt Colors</a></li>
</ul>
<li id="insverifylistsetup"><a href="insverifylistsetup.html">Insurance Verification Setup</a></li>
<li class="collapse" id="operatories"><div class="exptxt"><a href="operatories.html">Operatories</a></div>
<ul id="ul_operatories">
<li id="operatoryedit"><a href="operatoryedit.html">Operatory Edit</a></li>
</ul>
<li id="reactivationsetup"><a href="reactivationsetup.html">Setup Reactivation</a></li>
<li id="recallsetup"><a href="recallsetup.html">Setup Recall</a></li>
<li id="recalltypes"><a href="recalltypes.html">Recall Types</a></li>
</ul>
<li class="collapse" id="+familyinsurance"><div class="exptxt">[Family / Insurance]</div>
<ul id="ul_+familyinsurance">
<li class="collapse" id="claimforms"><div class="exptxt"><a href="claimforms.html">Claim Forms</a></div>
<ul id="ul_claimforms">
<li id="claimformada2012"><a href="claimformada2012.html">ADA 2012 and 2018 Claim Forms</a></li>
<li id="claimform1500"><a href="claimform1500.html">HCFA 1500 Claim Form</a></li>
<li id="claimformcanada"><a href="claimformcanada.html">Canada Claim Form</a></li>
<li id="claimformedit"><a href="claimformedit.html">Claim Form Edit</a></li>
</ul>
<li class="collapse" id="clearinghouses"><div class="exptxt"><a href="clearinghouses.html">Clearinghouses</a></div>
<ul id="ul_clearinghouses">
<li id="clearinghousesclinics"><a href="clearinghousesclinics.html">Clearinghouse Clinic Setup</a></li>
<li id="eclaimscoloradomedicaid"><a href="eclaimscoloradomedicaid.html">Colorado Medicaid E-Claims</a></li>
<li id="eclaimsinmediata"><a href="eclaimsinmediata.html">Inmediata E-Claims</a></li>
<li id="eclaimsapex"><a href="eclaimsapex.html">Apex</a></li>
<li id="eclaimsans"><a href="eclaimsans.html">ANS E-Claims</a></li>
<li id="eclaimsbcbsga"><a href="eclaimsbcbsga.html">BCBS Georgia E-Claims</a></li>
<li id="eclaimsbcbsnebraska"><a href="eclaimsbcbsnebraska.html">BCBS Nebraska E-Claims</a></li>
<li id="eclaimsclaimconnect"><a href="eclaimsclaimconnect.html">ClaimConnect E-Claims</a></li>
<li id="eclaimsclaimx"><a href="eclaimsclaimx.html">ClaimX E-Claims</a></li>
<li id="dentical"><a href="dentical.html">Denti-Cal</a></li>
<li id="lantek"><a href="lantek.html">Lantek</a></li>
<li id="eclaimsedsmedical"><a href="eclaimsedsmedical.html">Electronic Dental Services - Medical</a></li>
<li id="eclaimseds"><a href="eclaimseds.html">Electronic Dental Services</a></li>
<li id="eclaimsemdeonmedical"><a href="eclaimsemdeonmedical.html">Change Healthcare Medical E-Claims</a></li>
<li id="eclaimsems"><a href="eclaimsems.html">EMS E-Claims</a></li>
<li id="eclaimsetactics"><a href="eclaimsetactics.html">Etactics</a></li>
<li id="eclaimslindsaytechnicalconsultants"><a href="eclaimslindsaytechnicalconsultants.html">Lindsay Technical Consultants E-Claims</a></li>
<li id="eclaimsofficeally"><a href="eclaimsofficeally.html">Office Ally E-Claims</a></li>
<li id="eclaimspostntrack"><a href="eclaimspostntrack.html">Post-n-Track E-Claims</a></li>
<li id="eclaimsramq"><a href="eclaimsramq.html">RAMQ E-Claims </a></li>
<li id="eclaimsrecs"><a href="eclaimsrecs.html">RECS E-Claims</a></li>
<li id="eclaimsrenaissance"><a href="eclaimsrenaissance.html">Renaissance E-Claims</a></li>
<li id="eclaimstesia"><a href="eclaimstesia.html">Tesia E-Claims</a></li>
<li id="eclaimstesiabridge"><a href="eclaimstesiabridge.html">TesiaBridge E-Claims</a></li>
<li id="eclaimsvyne"><a href="eclaimsvyne.html">Vyne Dental E-Claims</a></li>
<li id="eclaimswashmedicaid"><a href="eclaimswashmedicaid.html">Washington Medicaid E-Claims</a></li>
<li id="eclaimswebmd"><a href="eclaimswebmd.html">Change Healthcare E-Claims</a></li>
</ul>
<li id="bluebooksetup"><a href="bluebooksetup.html">Insurance Blue Book Setup</a></li>
<li id="inscatssetup"><a href="inscatssetup.html">Insurance Categories</a></li>
<li id="insfilingcodes"><a href="insfilingcodes.html">Insurance Filing Codes</a></li>
<li id="custompatientfields"><a href="custompatientfields.html">Patient Fields</a></li>
<li id="payerids"><a href="payerids.html">Electronic Payer IDs</a></li>
</ul>
<li class="collapse" id="+account"><div class="exptxt">[Account]</div>
<ul id="ul_+account">
<li id="allocationssetup"><a href="allocationssetup.html">Allocations Setup</a></li>
<li id="payplantemplates"><a href="payplantemplates.html">Payment Plan Templates</a></li>
</ul>
<li id="+treatPlan">[Treat'Plan]</li>
<li class="collapse" id="+chart"><div class="exptxt">[Chart]</div>
<ul id="ul_+chart">
<li class="collapse" id="ehrsetupwindow"><div class="exptxt"><a href="ehrsetupwindow.html">EHR Setup Window</a></div>
<ul id="ul_ehrsetupwindow">
<li class="collapse" id="ehrsettings"><div class="exptxt"><a href="ehrsettings.html">EHR Settings</a></div>
<ul id="ul_ehrsettings">
<li id="ehrencountercode"><a href="ehrencountercode.html">EHR Default Encounter Code</a></li>
<li id="ehrencountercodetool"><a href="ehrencountercodetool.html">EHR Generate Encounter Codes</a></li>
<li id="ehrpregnancycode"><a href="ehrpregnancycode.html">EHR Default Pregnancy Code</a></li>
</ul>
<li id="ehrvaccinesetup"><a href="ehrvaccinesetup.html">EHR Vaccine Setup</a></li>
<li id="ehrvaccinedrugman"><a href="ehrvaccinedrugman.html">EHR Vaccine Drug Manufacturers</a></li>
<li id="ehrvaccinedrugunits"><a href="ehrvaccinedrugunits.html">EHR Vaccine Drug Units</a></li>
<li id="ehrsetupreminderrules"><a href="ehrsetupreminderrules.html">EHR Reminder Rules</a></li>
<li id="ehrsetupedresources"><a href="ehrsetupedresources.html">EHR Setup Education Resources and Triggers</a></li>
<li class="collapse" id="ehrproviderkeys"><div class="exptxt"><a href="ehrproviderkeys.html">EHR Annual Provider Keys</a></div>
<ul id="ul_ehrproviderkeys">
<li id="ehrquarterlykeys"><a href="ehrquarterlykeys.html">EHR Quarterly Keys</a></li>
</ul>
<li id="codesystemimport"><a href="codesystemimport.html">Importing Code Systems</a></li>
<li id="snomedct"><a href="snomedct.html">SNOMED CT Codes</a></li>
<li id="loinc"><a href="loinc.html">LOINC Codes</a></li>
<li class="collapse" id="ehrcdsconfigure"><div class="exptxt"><a href="ehrcdsconfigure.html">EHR Configure CDS Rules</a></div>
<ul id="ul_ehrcdsconfigure">
<li id="ehrcdspermissions"><a href="ehrcdspermissions.html">EHR CDS Permissions</a></li>
</ul>
<li id="ehrnistsync"><a href="ehrnistsync.html">EHR NIST Time Synchronization</a></li>
<li id="ehroid"><a href="ehroid.html">EHR Object Identifiers (OIDs)</a></li>
<li id="ehremergency"><a href="ehremergency.html">EHR Emergency</a></li>
<li class="collapse" id="cptcodes"><div class="exptxt"><a href="cptcodes.html">CPT Codes</a></div>
<ul id="ul_cptcodes">
<li id="crosscode"><a href="crosscode.html">Cross Code</a></li>
</ul>
<li id="rxnorms"><a href="rxnorms.html">RxNorms</a></li>
</ul>
<li class="collapse" id="procedurebuttons"><div class="exptxt"><a href="procedurebuttons.html">Procedure Buttons</a></div>
<ul id="ul_procedurebuttons">
<li id="quickprocedurebutton"><a href="quickprocedurebutton.html">Quick Procedure Button</a></li>
<li id="procedurebuttonedit"><a href="procedurebuttonedit.html">Procedure Button Edit</a></li>
</ul>
</ul>
<li class="collapse" id="+images"><div class="exptxt">[Images]</div>
<ul id="ul_+images">
<li id="imagingdevices"><a href="imagingdevices.html">Imaging Devices</a></li>
<li id="mountdefinitions"><a href="mountdefinitions.html">Mount Definitions</a></li>
<li id="imagingsetup"><a href="imagingsetup.html">Imaging Quality</a></li>
</ul>
<li class="collapse" id="+manage"><div class="exptxt">[Manage]</div>
<ul id="ul_+manage">
<li class="collapse" id="emailsetup"><div class="exptxt"><a href="emailsetup.html">Email Setup</a></div>
<ul id="ul_emailsetup">
<li class="collapse" id="emailsecuritycertificates"><div class="exptxt"><a href="emailsecuritycertificates.html">Email Certificate</a></div>
<ul id="ul_emailsecuritycertificates">
<li id="emailcerthost"><a href="emailcerthost.html">Email Certificate Hosting</a></li>
<li id="emailcertinstall"><a href="emailcertinstall.html">Email Certificate Install</a></li>
</ul>
</ul>
<li id="messagingelements"><a href="messagingelements.html">Message Element</a></li>
<li id="messagingbuttons"><a href="messagingbuttons.html">Messaging Buttons</a></li>
<li id="timecardsetup"><a href="timecardsetup.html">Time Card Setup</a></li>
</ul>
<li class="collapse" id="+menusetupAdvanced"><div class="exptxt">[Advanced Setup]</div>
<ul id="ul_+menusetupAdvanced">
<li id="computer"><a href="computer.html">Computers</a></li>
<li class="collapse" id="hl7genericmsg"><div class="exptxt"><a href="hl7genericmsg.html">Generic HL7 Message Structure</a></div>
<ul id="ul_hl7genericmsg">
<li class="collapse" id="hl7"><div class="exptxt"><a href="hl7.html">Generic HL7</a></div>
<ul id="ul_hl7">
<li class="collapse" id="hl7labcorp"><div class="exptxt"><a href="hl7labcorp.html">LabCorp HL7</a></div>
<ul id="ul_hl7labcorp">
<li id="hl7labcorpmsg"><a href="hl7labcorpmsg.html">LabCorp HL7 Definition</a></li>
</ul>
<li id="hl7msgs"><a href="hl7msgs.html">HL7 Message Types</a></li>
<li id="hl7servicemanager"><a href="hl7servicemanager.html">HL7 Service Manager</a></li>
</ul>
<li class="collapse" id="hl7ecw"><div class="exptxt"><a href="hl7ecw.html">eClinicalWorks HL7</a></div>
<ul id="ul_hl7ecw">
<li id="hl7ecwmsg"><a href="hl7ecwmsg.html">eCW HL7 Message Structure</a></li>
</ul>
</ul>
<li id="fhir"><a href="fhir.html">API Setup</a></li>
<li id="hiesetup"><a href="hiesetup.html">HIE Setup</a></li>
<li id="replicationservers"><a href="replicationservers.html">Replication Setup</a></li>
<li class="collapse" id="showfeatures"><div class="exptxt"><a href="showfeatures.html">Show Features</a></div>
<ul id="ul_showfeatures">
<li class="collapse" id="dentalschools"><div class="exptxt"><a href="dentalschools.html">Dental Schools</a></div>
<ul id="ul_dentalschools">
<li id="dentalserverreq"><a href="dentalserverreq.html">Dental School Servers</a></li>
</ul>
</ul>
<li id="scheduledprocesses"><a href="scheduledprocesses.html">Scheduled Processes</a></li>
</ul>
<li id="alertcategories"><a href="alertcategories.html">Alert Categories</a></li>
<li class="collapse" id="autocode"><div class="exptxt"><a href="autocode.html">Auto Codes</a></div>
<ul id="ul_autocode">
<li id="canadaautocodes"><a href="canadaautocodes.html">Canada Auto Codes</a></li>
</ul>
<li id="automation"><a href="automation.html">Automation</a></li>
<li id="autonotesetup"><a href="autonotesetup.html">Auto Note Setup</a></li>
<li id="cloudmanagement"><a href="cloudmanagement.html">Cloud Management</a></li>
<li id="codegroups"><a href="codegroups.html">Code Groups</a></li>
<li class="collapse" id="paths"><div class="exptxt"><a href="paths.html">Paths</a></div>
<ul id="ul_paths">
<li id="atozfolder"><a href="atozfolder.html">A to Z Folder</a></li>
<li id="atozshare"><a href="atozshare.html">Share A to Z Folder</a></li>
<li id="imagesstoreindb"><a href="imagesstoreindb.html">Store Images in Database</a></li>
<li id="dropbox"><a href="dropbox.html">Dropbox</a></li>
</ul>
<li class="collapse" id="definitions"><div class="exptxt"><a href="definitions.html">Definitions</a></div>
<ul id="ul_definitions">
<li id="colorselection"><a href="colorselection.html">Color</a></li>
<li id="definitionsaccountcolors"><a href="definitionsaccountcolors.html">Definitions: Account Colors</a></li>
<li id="definitionsaccountquickadd"><a href="definitionsaccountquickadd.html">Definitions: Account Procs Quick Add</a></li>
<li id="definitionsadjtypes"><a href="definitionsadjtypes.html">Definitions: Adj Types</a></li>
<li id="definitionsappointmentcolors"><a href="definitionsappointmentcolors.html">Definitions: Appointment Colors</a></li>
<li id="definitionsapptconfirmed"><a href="definitionsapptconfirmed.html">Definitions: Appt Confirmed</a></li>
<li id="definitionsapptquickadd"><a href="definitionsapptquickadd.html">Definitions: Appt Procs Quick Add</a></li>
<li id="definitionsautodepositaccount"><a href="definitionsautodepositaccount.html">Definitions: Auto Deposit Account</a></li>
<li id="definitionsautonotes"><a href="definitionsautonotes.html">Definitions: Auto Note Categories</a></li>
<li id="definitionsbillingtypes"><a href="definitionsbillingtypes.html">Definitions: Billing Types</a></li>
<li id="definitionsblockouts"><a href="definitionsblockouts.html">Definitions: Blockout Types</a></li>
<li id="definitionscarriergroupnames"><a href="definitionscarriergroupnames.html">Definitions: Carrier Group Names</a></li>
<li id="definitionscertificationcats"><a href="definitionscertificationcats.html">Definitions: Certification Categories</a></li>
<li id="definitionschartgraphiccolors"><a href="definitionschartgraphiccolors.html">Definitions: Chart Graphic Colors</a></li>
<li id="definitionsclaimcustomtracking"><a href="definitionsclaimcustomtracking.html">Definitions: Claim Custom Tracking</a></li>
<li id="definitionsclaimerrorcode"><a href="definitionsclaimerrorcode.html">Definitions: Claim Error Code</a></li>
<li id="definitionsclaimpaymentgroups"><a href="definitionsclaimpaymentgroups.html">Definitions: Claim Payment Groups</a></li>
<li id="definitionsclaimpaytracking"><a href="definitionsclaimpaytracking.html">Definitions: Claim Payment Tracking</a></li>
<li id="definitionsclinicspecialties"><a href="definitionsclinicspecialties.html">Definitions: Clinic Specialties</a></li>
<li id="definitionscommlogtypes"><a href="definitionscommlogtypes.html">Definitions: Commlog Types</a></li>
<li id="definitionscontactcategories"><a href="definitionscontactcategories.html">Definitions: Contact Categories</a></li>
<li id="definitionsdiagnoses"><a href="definitionsdiagnoses.html">Definitions: Diagnosis Types</a></li>
<li id="definitionseclipboardimages"><a href="definitionseclipboardimages.html">Definitions: eClipboard Images</a></li>
<li id="definitionsfeecolors"><a href="definitionsfeecolors.html">Definitions: Fee Colors</a></li>
<li id="definitionsimagecat"><a href="definitionsimagecat.html">Definitions: Image Categories</a></li>
<li id="definitionsinsfilingcodes"><a href="definitionsinsfilingcodes.html">Definitions: Insurance Filing Code Group</a></li>
<li id="inspaytypes"><a href="inspaytypes.html">Definitions: Insurance Payment Types</a></li>
<li id="definitionsinsverify"><a href="definitionsinsverify.html">Definitions: Insurance Verification Status</a></li>
<li id="definitionslettermerge"><a href="definitionslettermerge.html">Definitions: Letter Merge Cats</a></li>
<li id="definitionsmisccolors"><a href="definitionsmisccolors.html">Definitions: Misc Colors</a></li>
<li id="definitionsoperatorytypes"><a href="definitionsoperatorytypes.html">Definitions: Operatory Types</a></li>
<li id="definitionspaymentplancategories"><a href="definitionspaymentplancategories.html">Definitions: Payment Plan Categories</a></li>
<li id="definitionspaymenttypes"><a href="definitionspaymenttypes.html">Definitions: Payment Types</a></li>
<li id="definitionspaysplitunearned"><a href="definitionspaysplitunearned.html">Definitions: PaySplit Unearned Types</a></li>
<li id="definitionsprocbuttoncategories"><a href="definitionsprocbuttoncategories.html">Definitions: Proc Button Categories</a></li>
<li id="definitionsproccodecategories"><a href="definitionsproccodecategories.html">Definitions: Proc Code Categories</a></li>
<li id="definitionsprognotecolors"><a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a></li>
<li id="definitionsprognosis"><a href="definitionsprognosis.html">Definitions: Prognosis</a></li>
<li id="definitionsproviderspecialty"><a href="definitionsproviderspecialty.html">Definitions: Provider Specialties</a></li>
<li id="definitionsrecallunschedstatus"><a href="definitionsrecallunschedstatus.html">Definitions: Recall / Unsched Status</a></li>
<li id="definitionsregions"><a href="definitionsregions.html">Definitions: Regions</a></li>
<li id="definitionssupplycats"><a href="definitionssupplycats.html">Definitions: Supply Categories</a></li>
<li id="definitionstaskpriorities"><a href="definitionstaskpriorities.html">Definitions: Task Priorities</a></li>
<li id="definitionstimecardadjtypes"><a href="definitionstimecardadjtypes.html">Definitions: Time Card Adj Types</a></li>
<li id="definitionstreatplanpriorities"><a href="definitionstreatplanpriorities.html">Definitions: Treat' Plan Priorities</a></li>
<li id="definitionswebschedexistingpatappttypes"><a href="definitionswebschedexistingpatappttypes.html">Definitions: Web Sched Existing Appt Types</a></li>
<li id="definitionswebschednewpatappttypes"><a href="definitionswebschednewpatappttypes.html">Definitions: Web Sched New Patient Appt Types</a></li>
</ul>
<li class="collapse" id="dsusergroupdefaults"><div class="exptxt"><a href="dsusergroupdefaults.html">Dental School Setup</a></div>
<ul id="ul_dsusergroupdefaults">
<li id="dsevaluationsetup"><a href="dsevaluationsetup.html">Dental School Evaluation Setup</a></li>
<li id="dsgradingscale"><a href="dsgradingscale.html">Dental School Grading Scales</a></li>
</ul>
<li id="displayfields"><a href="displayfields.html">Display Fields</a></li>
<li id="enterprisesetup"><a href="enterprisesetup.html">Enterprise Setup</a></li>
<li class="collapse" id="feeschedules"><div class="exptxt"><a href="feeschedules.html">Fee Schedules</a></div>
<ul id="ul_feeschedules">
<li id="feeschedulecheckfees"><a href="feeschedulecheckfees.html">Check Ins Plan Fees</a></li>
</ul>
<li id="feeschedulegroups"><a href="feeschedulegroups.html">Fee Schedule Groups</a></li>
<li id="laboratories"><a href="laboratories.html">Laboratories</a></li>
<li class="collapse" id="miscsetup"><div class="exptxt"><a href="miscsetup.html">Miscellaneous Setup</a></div>
<ul id="ul_miscsetup">
<li id="patientlanguages"><a href="patientlanguages.html">Language</a></li>
</ul>
<li class="collapse" id="orthosetup"><div class="exptxt"><a href="orthosetup.html">Ortho Setup</a></div>
<ul id="ul_orthosetup">
<li id="orthodontic"><a href="orthodontic.html">Orthodontics</a></li>
<li id="orthohardwaresetup"><a href="orthohardwaresetup.html">Setup Ortho Hardware Specs</a></li>
<li id="orthoprescriptionssetup"><a href="orthoprescriptionssetup.html">Ortho Prescriptions Setup</a></li>
</ul>
<li class="collapse" id="practice"><div class="exptxt"><a href="practice.html">Practice Setup</a></div>
<ul id="ul_practice">
<li id="nondentalinterface"><a href="nondentalinterface.html">Non-Dental</a></li>
</ul>
<li class="collapse" id="programlinks"><div class="exptxt"><a href="programlinks.html">Program Links</a></div>
<ul id="ul_programlinks">
<li class="collapse" id="bridgecustom"><div class="exptxt"><a href="bridgecustom.html">Custom Bridges</a></div>
<ul id="ul_bridgecustom">
<li id="programlinkoutputfile"><a href="programlinkoutputfile.html">Program Link Output File</a></li>
</ul>
<li id="bridgeacteon"><a href="bridgeacteon.html">Acteon Bridge</a></li>
<li id="bridgeadstra"><a href="bridgeadstra.html">ADSTRA Bridge</a></li>
<li id="bridgeaidental"><a href="bridgeaidental.html">Ai-Dental Bridge</a></li>
<li id="bridgeapixia"><a href="bridgeapixia.html">Apixia Bridge</a></li>
<li id="bridgeappriss"><a href="bridgeappriss.html">Appriss Bridge</a></li>
<li id="bridgeapteryx"><a href="bridgeapteryx.html">Apteryx Bridge</a></li>
<li id="bridgeapteryxxvweb"><a href="bridgeapteryxxvweb.html">Apteryx XVWeb Bridge</a></li>
<li id="bridgeaudaxceph"><a href="bridgeaudaxceph.html">AudaxCeph Bridge</a></li>
<li id="anesthesia"><a href="anesthesia.html">Anesthesia</a></li>
<li id="bridgebenco"><a href="bridgebenco.html">Benco Bridge</a></li>
<li id="bridgebiopak"><a href="bridgebiopak.html">BioPAK Bridge</a></li>
<li id="bridgecadi"><a href="bridgecadi.html">CADI Bridge</a></li>
<li id="bridgecallfire"><a href="bridgecallfire.html">CallFire Bridge</a></li>
<li id="bridgecamsight"><a href="bridgecamsight.html">CamSight Bridge</a></li>
<li id="bridgecapturelink"><a href="bridgecapturelink.html">CaptureLink Bridge</a></li>
<li class="collapse" id="carecreditsetup"><div class="exptxt"><a href="carecreditsetup.html">CareCredit Setup</a></div>
<ul id="ul_carecreditsetup">
<li id="carecreditaction"><a href="carecreditaction.html">CareCredit Action</a></li>
<li id="carecredittransactions"><a href="carecredittransactions.html">CareCredit Transactions</a></li>
<li id="carecreditpayment"><a href="carecreditpayment.html">CareCredit Payment</a></li>
<li id="carecreditrefund"><a href="carecreditrefund.html">CareCredit Refund</a></li>
<li id="carecredit"><a href="../site/carecredit.html">CareCredit</a></li>
</ul>
<li id="bridgecarestream"><a href="bridgecarestream.html">Carestream Bridge</a></li>
<li id="bridgecds"><a href="bridgecds.html">Central Data Storage CDS Bridge</a></li>
<li id="bridgecerec"><a href="bridgecerec.html">Cerec Bridge</a></li>
<li id="bridgeclearay"><a href="bridgeclearay.html">CleaRay Bridge</a></li>
<li id="bridgecliniview"><a href="bridgecliniview.html">CliniView Bridge</a></li>
<li id="bridgecliosoft"><a href="bridgecliosoft.html">ClioSoft/SOTA Imaging Bridge</a></li>
<li id="bridgedbswin"><a href="bridgedbswin.html">DBSWIN Bridge</a></li>
<li id="bridgedemandforce"><a href="bridgedemandforce.html">Demandforce Bridge</a></li>
<li id="bridgedentaleye"><a href="bridgedentaleye.html">DentalEye Bridge</a></li>
<li id="bridgedentalintel"><a href="bridgedentalintel.html">Dental Intel Bridge</a></li>
<li id="bridgedentalstudio"><a href="bridgedentalstudio.html">DentalStudio Bridge</a></li>
<li id="bridgedentaltek"><a href="bridgedentaltek.html">DentalTek Bridge</a></li>
<li id="dentalxchangecreditservice"><a href="dentalxchangecreditservice.html">DentalXChange Patient Credit Score Service</a></li>
<li id="bridgedentforms"><a href="bridgedentforms.html">DentForms Bridge</a></li>
<li id="bridgedentxproimage"><a href="bridgedentxproimage.html">AFP ProImage Eva Bridge</a></li>
<li id="bridgedexis"><a href="bridgedexis.html">Dexis Bridge</a></li>
<li id="bridgedexisintegrator"><a href="bridgedexisintegrator.html">Dexis Integrator Bridge</a></li>
<li id="bridgedigora"><a href="bridgedigora.html">Digora Soredex Optime Bridge</a></li>
<li id="bridgedivvy"><a href="bridgedivvy.html">Divvy Bridge</a></li>
<li id="bridgedocpoint"><a href="bridgedocpoint.html">Docpoint Bridge</a></li>
<li id="bridgedolphin"><a href="bridgedolphin.html">Dolphin Bridge</a></li>
<li id="bridgedrceph"><a href="bridgedrceph.html">Dr. Ceph Bridge</a></li>
<li id="bridgedxis"><a href="bridgedxis.html">DXIS Bridge</a></li>
<li id="bridgeeasynotespro"><a href="bridgeeasynotespro.html">EasyNotesPro Bridge</a></li>
<li class="collapse" id="bridgeeclinicalworks"><div class="exptxt"><a href="bridgeeclinicalworks.html">eClinicalWorks</a></div>
<ul id="ul_bridgeeclinicalworks">
<li id="ecwbridgesetup"><a href="ecwbridgesetup.html">eCW Installlation</a></li>
<li id="ecwbridgingmodes"><a href="ecwbridgingmodes.html">eCW Bridge Modes</a></li>
<li id="ecwdemographics"><a href="ecwdemographics.html">eCw Patient Demographics</a></li>
<li id="ecwfeeschedules"><a href="ecwfeeschedules.html">eCW Fee Schedules</a></li>
<li id="ecwgeneral"><a href="ecwgeneral.html">eCW General Information</a></li>
<li id="ecwinstall"><a href="ecwinstall.html">eCW Install Workstation</a></li>
<li id="ecwprocedures"><a href="ecwprocedures.html">eCW Procedures</a></li>
<li id="ecwtechnical"><a href="ecwtechnical.html">eCW Technical</a></li>
<li id="ecwtroubleshooting"><a href="ecwtroubleshooting.html">eCW Troubleshooting</a></li>
<li id="ecwusingwithod"><a href="ecwusingwithod.html">Using eCW</a></li>
</ul>
<li id="edgeexpresssetup"><a href="edgeexpresssetup.html">EdgeExpress Setup</a></li>
<li class="collapse" id="bridgeerx"><div class="exptxt"><a href="bridgeerx.html">eRx Setup</a></div>
<ul id="ul_bridgeerx">
<li id="erxdisable"><a href="erxdisable.html">Disabling eRx</a></li>
</ul>
<li id="bridgeevasoft"><a href="bridgeevasoft.html">EvaSoft Bridge</a></li>
<li id="bridgeewoo"><a href="bridgeewoo.html">Ewoo Bridge</a></li>
<li id="bridgefloridaprobe"><a href="bridgefloridaprobe.html">Florida Probe Bridge</a></li>
<li id="bridgegenoraytriana"><a href="bridgegenoraytriana.html">Genoray Triana Bridge</a></li>
<li id="bridgeguru"><a href="bridgeguru.html">Guru Bridge</a></li>
<li id="bridgehandydentist"><a href="bridgehandydentist.html">HandyDentist Bridge</a></li>
<li id="bridgehdxwill"><a href="bridgehdxwill.html">HDX Will Bridge</a></li>
<li id="housecalls"><a href="housecalls.html">HouseCalls Bridge</a></li>
<li id="iaplus"><a href="iaplus.html">Insurance Answers Plus</a></li>
<li id="bridgeicat"><a href="bridgeicat.html">iCat Bridge</a></li>
<li id="bridgeidixel"><a href="bridgeidixel.html">i-Dixel Bridge</a></li>
<li id="bridgeirys"><a href="bridgeirys.html">iRYS Bridge</a></li>
<li id="bridgejazzclassic"><a href="bridgejazzclassic.html">Jazz Classic Bridge</a></li>
<li id="bridgemediadent"><a href="bridgemediadent.html">MediaDent Bridge</a></li>
<li id="bridgemeditlink"><a href="bridgemeditlink.html">Medit Link Bridge</a></li>
<li id="bridgemidway"><a href="bridgemidway.html">Midway Dental Bridge</a></li>
<li id="bridgemipacs"><a href="bridgemipacs.html">MiPACS Bridge</a></li>
<li id="bridgemountainside"><a href="bridgemountainside.html">Mountainside Bridge</a></li>
<li id="bridgenewtom"><a href="bridgenewtom.html">NewTom NNT Bridge</a></li>
<li id="bridgeoffice"><a href="bridgeoffice.html">Office Bridge</a></li>
<li id="bridgeorthocad"><a href="bridgeorthocad.html">OrthoCAD Bridge</a></li>
<li id="bridgeorthoinsight"><a href="bridgeorthoinsight.html">Ortho Insight 3D Bridge</a></li>
<li id="bridgeorthoplex"><a href="bridgeorthoplex.html">OrthoPlex Bridge</a></li>
<li id="bridgeoryx"><a href="bridgeoryx.html">Oryx Bridge</a></li>
<li id="bridgepandaperio"><a href="bridgepandaperio.html">PANDA Perio Bridge</a></li>
<li id="bridgeowandy"><a href="bridgeowandy.html">Owandy Bridge</a></li>
<li id="bridgepandaperioadvanced"><a href="bridgepandaperioadvanced.html">PANDA Perio (advanced) Bridge </a></li>
<li id="patientxpress"><a href="patientxpress.html">PatientXPress</a></li>
<li id="bridgepatientgallery"><a href="bridgepatientgallery.html">Patient Gallery Bridge</a></li>
<li id="bridgepatterson"><a href="bridgepatterson.html">Patterson Imaging Bridge</a></li>
<li id="paysimplesetup"><a href="paysimplesetup.html">PaySimple Setup</a></li>
<li id="bridgepdmpillinois"><a href="bridgepdmpillinois.html">PDMP Bridge</a></li>
<li id="bridgeperiopal"><a href="bridgeperiopal.html">PerioPal Bridge</a></li>
<li id="bridgepixel"><a href="bridgepixel.html">Pixel Bridge</a></li>
<li id="bridgeplanmeca"><a href="bridgeplanmeca.html">Planmeca Bridge</a></li>
<li id="bridgepodium"><a href="bridgepodium.html">Podium Bridge</a></li>
<li id="bridgeportray"><a href="bridgeportray.html">PORTRAY Bridge</a></li>
<li id="bridgepracticebooster"><a href="bridgepracticebooster.html">Practice Booster Bridge</a></li>
<li id="bridgepracticebynumbers"><a href="bridgepracticebynumbers.html">Practice by Numbers Bridge</a></li>
<li id="bridgepracticeweb"><a href="bridgepracticeweb.html">PracticeWeb Reports Bridge</a></li>
<li id="bridgeprexion"><a href="bridgeprexion.html">PreXion Bridge</a></li>
<li id="bridgeprexionaquire"><a href="bridgeprexionaquire.html">Prexion Acquire Bridge</a></li>
<li id="bridgeprogeny"><a href="bridgeprogeny.html">Progeny Bridge</a></li>
<li id="quickbooksonline"><a href="quickbooksonline.html">QuickBooks Online</a></li>
<li id="ptdental"><a href="ptdental.html">PT Dental Bridge</a></li>
<li id="bridgerapidcall"><a href="bridgerapidcall.html">DentalTek Rapid Call Bridge</a></li>
<li id="bridgeraymage"><a href="bridgeraymage.html">RayMage Bridge</a></li>
<li id="bridgerecordlincsync"><a href="bridgerecordlincsync.html">RecordLinc Sync</a></li>
<li id="bridgescanora"><a href="bridgescanora.html">Scanora Bridge</a></li>
<li id="bridgeschick"><a href="bridgeschick.html">Schick CDR Dicom Bridge</a></li>
<li id="bridgeshining3d"><a href="bridgeshining3d.html">Shining 3D Bridge</a></li>
<li id="bridgesirona"><a href="bridgesirona.html">Sirona Sidexis Bridge</a></li>
<li id="bridgesmartdent"><a href="bridgesmartdent.html">SMARTDent Bridge</a></li>
<li id="bridgesmartdentnew"><a href="bridgesmartdentnew.html">SMARTDent New Bridge</a></li>
<li id="bridgesmilereminder"><a href="bridgesmilereminder.html">Solutionreach/Smile Reminder Bridge</a></li>
<li id="bridgesopro"><a href="bridgesopro.html">Sopro Bridge</a></li>
<li id="spear"><a href="spear.html">Spear Education</a></li>
<li id="bridgespeedvision"><a href="bridgespeedvision.html">SpeedVision Bridge</a></li>
<li id="bridgesterisimple"><a href="bridgesterisimple.html">SteriSimple Bridge</a></li>
<li id="suni"><a href="suni.html">Suni</a></li>
<li id="swellcx"><a href="swellcx.html">Swell CX</a></li>
<li id="bridgetigerview"><a href="bridgetigerview.html">TigerView Bridge</a></li>
<li id="bridgetrophy"><a href="bridgetrophy.html">Trophy Bridge</a></li>
<li id="bridgetrophyenhanced"><a href="bridgetrophyenhanced.html">Trophy (Enhanced) Bridge</a></li>
<li id="trojan"><a href="trojan.html">Trojan Bridge</a></li>
<li class="collapse" id="trojancollectbridge"><div class="exptxt"><a href="trojancollectbridge.html">Trojan Express Collect Bridge</a></div>
<ul id="ul_trojancollectbridge">
<li id="trojancollect"><a href="trojancollect.html">Trojan Express Collect</a></li>
</ul>
<li id="bridgetscan"><a href="bridgetscan.html">Tscan Bridge</a></li>
<li id="tsisetup"><a href="tsisetup.html">TSI Setup</a></li>
<li id="bridgeuappoint"><a href="bridgeuappoint.html">UAppoint Bridge</a></li>
<li id="bridgevipersoft"><a href="bridgevipersoft.html">Vipersoft Bridge</a></li>
<li id="bridgevisionx"><a href="bridgevisionx.html">VisionX Bridge</a></li>
<li id="bridgevisora"><a href="bridgevisora.html">visOra Bridge</a></li>
<li id="bridgevistadent"><a href="bridgevistadent.html">VistaDent Bridge</a></li>
<li id="bridgevixwinimaging"><a href="bridgevixwinimaging.html">VixWin (Numbered) Bridge</a></li>
<li id="bridgexdr"><a href="bridgexdr.html">XDR Bridge</a></li>
<li id="bridgezimage"><a href="bridgezimage.html">Z-Image Bridge</a></li>
<li id="bridge3shape"><a href="bridge3shape.html">3Shape Bridge</a></li>
</ul>
<li class="collapse" id="quickpastenotessetup"><div class="exptxt"><a href="quickpastenotessetup.html">Quick Paste Notes Setup</a></div>
<ul id="ul_quickpastenotessetup">
<li id="quickpastecategory"><a href="quickpastecategory.html">Quick Paste Category</a></li>
<li id="quickpastenoteedit"><a href="quickpastenoteedit.html">Quick Paste Note Edit</a></li>
</ul>
<li class="collapse" id="reportssetup"><div class="exptxt"><a href="reportssetup.html">Reports Setup</a></div>
<ul id="ul_reportssetup">
<li id="reportdisplaysettings"><a href="reportdisplaysettings.html">Report Setup: Display Settings</a></li>
<li id="reportsecurity"><a href="reportsecurity.html">Report Setup: Security Permissions</a></li>
<li id="reportserver"><a href="reportserver.html">Report Setup: Report Server</a></li>
<li id="reportmiscsettings"><a href="reportmiscsettings.html">Report Setup: Misc Settings</a></li>
</ul>
<li class="collapse" id="schedule"><div class="exptxt"><a href="schedule.html">Schedule Setup</a></div>
<ul id="ul_schedule">
<li id="scheduleeditdaywindow"><a href="scheduleeditdaywindow.html">Schedule Edit</a></li>
<li id="schedulechart"><a href="schedulechart.html">Schedule Graph</a></li>
<li id="schedulesetupexamples"><a href="schedulesetupexamples.html">Schedule Setup Examples</a></li>
</ul>
<li class="collapse" id="security"><div class="exptxt"><a href="security.html">Security</a></div>
<ul id="ul_security">
<li class="collapse" id="securitysettings"><div class="exptxt"><a href="securitysettings.html">Global Security Settings</a></div>
<ul id="ul_securitysettings">
<li id="singlesignon"><a href="singlesignon.html">Single Sign-On / Domain Login</a></li>
</ul>
<li class="collapse" id="securityusers"><div class="exptxt"><a href="securityusers.html">User Edit</a></div>
<ul id="ul_securityusers">
<li id="alertsubscribe"><a href="alertsubscribe.html">Alert Subscription</a></li>
<li id="securityunlockaccount"><a href="securityunlockaccount.html">Unlock Account</a></li>
</ul>
<li class="collapse" id="securityusergroups"><div class="exptxt"><a href="securityusergroups.html">User Group</a></div>
<ul id="ul_securityusergroups">
<li class="collapse" id="permissions"><div class="exptxt"><a href="permissions.html">Permissions</a></div>
<ul id="ul_permissions">
<li id="permissionssetup"><a href="permissionssetup.html">"Setup" Permission</a></li>
<li id="permissionssecurityadmin"><a href="permissionssecurityadmin.html">"Security Admin" Permission</a></li>
</ul>
</ul>
<li id="dssecurity"><a href="dssecurity.html">Dental School Security</a></li>
<li id="securitylogin"><a href="securitylogin.html">Log On</a></li>
<li id="securitylockdates"><a href="securitylockdates.html">Security Lock Dates</a></li>
</ul>
<li class="collapse" id="sheets"><div class="exptxt"><a href="sheets.html">Sheets</a></div>
<ul id="ul_sheets">
<li class="collapse" id="sheetsetup"><div class="exptxt"><a href="sheetsetup.html">Edit Sheet Def</a></div>
<ul id="ul_sheetsetup">
<li id="sheetsetupmobile"><a href="sheetsetupmobile.html">Edit Mobile Sheet Def</a></li>
<li id="sheetproperties"><a href="sheetproperties.html">Sheet Def Properties</a></li>
<li id="sheetsaddelements"><a href="sheetsaddelements.html">Sheet Field Types</a></li>
<li class="collapse" id="sheetsoutputtext"><div class="exptxt"><a href="sheetsoutputtext.html">Sheet Output Text Field</a></div>
<ul id="ul_sheetsoutputtext">
<li id="outputtextfields"><a href="outputtextfields.html">Output Text Field Names</a></li>
</ul>
<li class="collapse" id="sheetsstatictext"><div class="exptxt"><a href="sheetsstatictext.html">Sheet Static Text Field</a></div>
<ul id="ul_sheetsstatictext">
<li id="statictextfields"><a href="statictextfields.html">Static Text Field Names</a></li>
</ul>
<li class="collapse" id="sheetsinputfield"><div class="exptxt"><a href="sheetsinputfield.html">Sheet Input Field</a></div>
<ul id="ul_sheetsinputfield">
<li id="inputfieldnames"><a href="inputfieldnames.html">Input Field Names</a></li>
</ul>
<li id="sheetsline"><a href="sheetsline.html">Sheet Line and Rectangle</a></li>
<li class="collapse" id="sheetscheckbox"><div class="exptxt"><a href="sheetscheckbox.html">Sheet Checkbox and Radio Button</a></div>
<ul id="ul_sheetscheckbox">
<li id="checkboxfields"><a href="checkboxfields.html">Sheet CheckBox Field Names</a></li>
</ul>
<li id="sheetsstaticimage"><a href="sheetsstaticimage.html">Sheet Static Image</a></li>
<li id="sheetssignature"><a href="sheetssignature.html">Sheet Signature Box</a></li>
<li id="sheetscombobox"><a href="sheetscombobox.html">Sheet ComboBox</a></li>
<li id="sheetspatimage"><a href="sheetspatimage.html">Sheet Patient Image</a></li>
<li id="sheetsscreenchart"><a href="sheetsscreenchart.html">Sheet Screen Chart</a></li>
<li id="sheetsgrid"><a href="sheetsgrid.html">Sheet Grid</a></li>
<li id="sheetsspecial"><a href="sheetsspecial.html">Sheet Special Field</a></li>
<li id="sheetsetuplanguage"><a href="sheetsetuplanguage.html">Language Translations for Sheets</a></li>
</ul>
<li id="sheetdefaults"><a href="sheetdefaults.html">Sheet Def Defaults</a></li>
<li id="sheettools"><a href="sheettools.html">Sheet Tools Import / Export</a></li>
<li id="sheetsconsent"><a href="sheetsconsent.html">Consent Form Layout</a></li>
<li id="sheetsdepositslip"><a href="sheetsdepositslip.html">Deposit Slip Layout</a></li>
<li id="sheetsera"><a href="sheetsera.html">ERA Layout</a></li>
<li id="sheetseragridheader"><a href="sheetseragridheader.html">ERA Grid Header Layout</a></li>
<li id="sheetsexamsheets"><a href="sheetsexamsheets.html">Exam Sheet Layout</a></li>
<li id="sheetslabslips"><a href="sheetslabslips.html">Lab Slip Layout</a></li>
<li id="sheetslabels"><a href="sheetslabels.html">Label Layout</a></li>
<li id="sheetsmedicalhistory"><a href="sheetsmedicalhistory.html">Medical History Layout</a></li>
<li id="sheetspatientform"><a href="sheetspatientform.html">Patient Form Layout</a></li>
<li id="sheetsletterspatient"><a href="sheetsletterspatient.html">Patient Letter Layout</a></li>
<li id="paymentplansheets"><a href="paymentplansheets.html">Payment Plan Layout</a></li>
<li id="sheetsscreenings"><a href="sheetsscreenings.html">Screening Layout</a></li>
<li id="sheetsreferrals"><a href="sheetsreferrals.html">Referral Letter Layout</a></li>
<li id="sheetsreferralslips"><a href="sheetsreferralslips.html">Referral Slip Layout</a></li>
<li id="sheetsroutingslips"><a href="sheetsroutingslips.html">Routing Slip Layout</a></li>
<li id="sheetsrx"><a href="sheetsrx.html">Rx Layout</a></li>
<li id="sheetsrxpatinstruct"><a href="sheetsrxpatinstruct.html">Rx Instructions Layout</a></li>
<li id="sheetsrxmulti"><a href="sheetsrxmulti.html">Rx Multiple Layout</a></li>
<li id="statementsheets"><a href="statementsheets.html">Statement Layout</a></li>
<li id="sheetstreatplan"><a href="sheetstreatplan.html">Treatment Plan Layout</a></li>
<li id="sheetstroubleshooting"><a href="sheetstroubleshooting.html">Sheet Troubleshooting</a></li>
</ul>
<li id="spellcheck"><a href="spellcheck.html">Spell Check</a></li>
<li id="tasksetup"><a href="tasksetup.html">Tasks Preferences</a></li>
<li class="collapse" id="+obsolete"><div class="exptxt">Obsolete</div>
<ul id="ul_+obsolete">
<li id="lettersquick"><a href="lettersquick.html">Quick Letters</a></li>
<li id="questionnaire"><a href="questionnaire.html">Questionnaire</a></li>
</ul>
</ul>
<li class="collapse" id="+lists"><div class="exptxt">Lists</div>
<ul id="ul_+lists">
<li class="collapse" id="procedurecodes"><div class="exptxt"><a href="procedurecodes.html">Procedure Codes</a></div>
<ul id="ul_procedurecodes">
<li id="procedurecodetools"><a href="procedurecodetools.html">Procedure Code Tools</a></li>
<li id="procedurecodeedit"><a href="procedurecodeedit.html">Procedure Code</a></li>
<li id="procedurecodenew"><a href="procedurecodenew.html">Add Procedure Code</a></li>
<li id="procedurefeeoverrides"><a href="procedurefeeoverrides.html">Fee Override for Provider or Clinic</a></li>
<li id="cdt"><a href="cdt.html">ADA CDT Codes</a></li>
<li id="feeschedulelogic"><a href="feeschedulelogic.html">Fee Schedule Logic</a></li>
<li class="collapse" id="feescheduletools"><div class="exptxt"><a href="feescheduletools.html">Fee Tools</a></div>
<ul id="ul_feescheduletools">
<li id="feeschedulecopy"><a href="feeschedulecopy.html">Fees Copy</a></li>
<li id="feescheduleincrease"><a href="feescheduleincrease.html">Fees Increase</a></li>
<li id="feesimport"><a href="feesimport.html">Fees Import</a></li>
<li id="feesexport"><a href="feesexport.html">Fees Export</a></li>
<li id="feesupdate"><a href="feesupdate.html">Fees Update</a></li>
<li id="newyeartasks"><a href="newyeartasks.html">New Year</a></li>
</ul>
<li id="insplanoverrides"><a href="insplanoverrides.html">Insurance Plans Overrides</a></li>
</ul>
<li id="allergiesmaster"><a href="allergiesmaster.html">Allergy List</a></li>
<li class="collapse" id="clinicsetup"><div class="exptxt"><a href="clinicsetup.html">Clinic List</a></div>
<ul id="ul_clinicsetup">
<li id="cliniceditwindow"><a href="cliniceditwindow.html">Clinic</a></li>
</ul>
<li id="contacts"><a href="contacts.html">Contacts</a></li>
<li id="counties"><a href="counties.html">Counties</a></li>
<li id="discountplans"><a href="discountplans.html">Discount Plans</a></li>
<li id="dsclasses"><a href="dsclasses.html">Dental School Classes</a></li>
<li id="dscourses"><a href="dscourses.html">Dental School Courses</a></li>
<li class="collapse" id="employees"><div class="exptxt"><a href="employees.html">Employees</a></div>
<ul id="ul_employees">
<li id="employeeleaving"><a href="employeeleaving.html">Employee Leaving</a></li>
</ul>
<li id="employers"><a href="employers.html">Employers</a></li>
<li class="collapse" id="carriers"><div class="exptxt"><a href="carriers.html">Carriers</a></div>
<ul id="ul_carriers">
<li id="carrierscombine"><a href="carrierscombine.html">Combine Carriers</a></li>
</ul>
<li id="insplanlist"><a href="insplanlist.html">Insurance Plans</a></li>
<li id="labcasemanage"><a href="labcasemanage.html">Lab Cases</a></li>
<li id="medicationmaster"><a href="medicationmaster.html">Medications List</a></li>
<li id="pharmacies"><a href="pharmacies.html">Pharmacies</a></li>
<li id="problemmaster"><a href="problemmaster.html">Problem List</a></li>
<li class="collapse" id="providers"><div class="exptxt"><a href="providers.html">Providers</a></div>
<ul id="ul_providers">
<li id="providerseditwindow"><a href="providerseditwindow.html">Provider</a></li>
<li class="collapse" id="dsproviders"><div class="exptxt"><a href="dsproviders.html">Dental School Providers</a></div>
<ul id="ul_dsproviders">
<li id="dsinstructors"><a href="dsinstructors.html">Dental School Instructors</a></li>
<li id="dsstudents"><a href="dsstudents.html">Dental School Students</a></li>
<li id="dsstudentbulk"><a href="dsstudentbulk.html">Dental Student Bulk Edit</a></li>
</ul>
</ul>
<li class="collapse" id="rxsetup"><div class="exptxt"><a href="rxsetup.html">Rx / Prescriptions List</a></div>
<ul id="ul_rxsetup">
<li id="rxinteractionchecks"><a href="rxinteractionchecks.html">Rx / Prescription Alert</a></li>
<li id="prescriptionscombine"><a href="prescriptionscombine.html">Combine Prescriptions</a></li>
</ul>
<li id="referralsetup"><a href="referralsetup.html">Referral List</a></li>
<li id="stateabbreviations"><a href="stateabbreviations.html">State Abbreviations</a></li>
<li id="sites"><a href="sites.html">Site List</a></li>
<li id="zipcodes"><a href="zipcodes.html">Zip Code List</a></li>
</ul>
<li class="collapse" id="reports"><div class="exptxt"><a href="reports.html">Reports</a></div>
<ul id="ul_reports">
<li class="collapse" id="reportsstandard"><div class="exptxt"><a href="reportsstandard.html">Standard Reports</a></div>
<ul id="ul_reportsstandard">
<li id="reportcomplex"><a href="reportcomplex.html">Complex Report System</a></li>
<li class="collapse" id="reportprodinc"><div class="exptxt"><a href="reportprodinc.html">Production and Income Reports</a></div>
<ul id="ul_reportprodinc">
<li id="closeoutmonth"><a href="closeoutmonth.html">Close Out Month</a></li>
<li id="productionincome"><a href="productionincome.html">Production and Income</a></li>
<li id="reportprovpayroll"><a href="reportprovpayroll.html">Provider Payroll Production and Income Report</a></li>
<li id="trackingincome"><a href="trackingincome.html">Track Income by Provider</a></li>
<li id="writeoffstoproduction"><a href="writeoffstoproduction.html">Show Insurance Writeoffs</a></li>
</ul>
<li class="collapse" id="+daily"><div class="exptxt">Daily</div>
<ul id="ul_+daily">
<li id="reportdailyadj"><a href="reportdailyadj.html">Daily Adjustments Report</a></li>
<li id="reportdailypayments"><a href="reportdailypayments.html">Daily Payments Report</a></li>
<li id="reportdailyprocs"><a href="reportdailyprocs.html">Daily Procedures Report</a></li>
<li id="reportdailywriteoffs"><a href="reportdailywriteoffs.html">Daily Writeoff Report</a></li>
<li id="reportincompleteprocnote"><a href="reportincompleteprocnote.html">Incomplete Procedure Notes Report</a></li>
<li id="routingslips"><a href="routingslips.html">Routing Slips</a></li>
<li id="reportunfinalizedinsurancepayments"><a href="reportunfinalizedinsurancepayments.html">Unfinalized Insurance Payment Report</a></li>
<li id="reportnetproddaily"><a href="reportnetproddaily.html">Net Production Detail Daily Report</a></li>
<li id="reportdailypatportuncollected"><a href="reportdailypatportuncollected.html">Patient Portion Uncollected Report</a></li>
</ul>
<li class="collapse" id="+monthly"><div class="exptxt">Monthly</div>
<ul id="ul_+monthly">
<li id="reportaging"><a href="reportaging.html">Aging of Accounts Receivable (A/R) Report</a></li>
<li id="reportclaimsnotsent"><a href="reportclaimsnotsent.html">Claims Not Sent Report</a></li>
<li id="reportcapitation"><a href="reportcapitation.html">Capitation Utilization Report</a></li>
<li id="reportfinancecharge"><a href="reportfinancecharge.html">Finance Charge Report</a></li>
<li id="reportoutins"><a href="reportoutins.html">Outstanding Insurance Claims Report</a></li>
<li id="reportprocsnotbilledins"><a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a></li>
<li id="reportppowriteoffs"><a href="reportppowriteoffs.html">PPO Writeoffs Report</a></li>
<li id="reportpaymentplan"><a href="reportpaymentplan.html">Payment Plans Report</a></li>
<li id="reportreceivablesbreakdown"><a href="reportreceivablesbreakdown.html">Receivables Breakdown Report</a></li>
<li class="collapse" id="reportunearnedincome"><div class="exptxt"><a href="reportunearnedincome.html">Unearned Income Reports</a></div>
<ul id="ul_reportunearnedincome">
<li id="reportunearnedallocation"><a href="reportunearnedallocation.html">Unearned Allocation Report</a></li>
<li id="reportnetunearnedincome"><a href="reportnetunearnedincome.html">Net Unearned Income Report</a></li>
<li id="reportlineitemunearned"><a href="reportlineitemunearned.html">Line Item Unearned Income Report</a></li>
<li id="reportunearnedaccounts"><a href="reportunearnedaccounts.html">Unearned Accounts Report</a></li>
</ul>
<li id="reportinsoverpaid"><a href="reportinsoverpaid.html">Insurance Overpaid Report</a></li>
<li id="reportpresentedtp"><a href="reportpresentedtp.html">Presented Treatment Production Report</a></li>
<li id="reporttpstatistics"><a href="reporttpstatistics.html">Treatment Plan Presentation Statistics Report</a></li>
<li id="reportinspayplanpastdue"><a href="reportinspayplanpastdue.html">Insurance Payment Plans Past Due Report</a></li>
<li id="reportinsaging"><a href="reportinsaging.html">Insurance Aging Report</a></li>
<li id="reportcustomaging"><a href="reportcustomaging.html">Custom Aging Report</a></li>
<li id="reportproceduresoverpaid"><a href="reportproceduresoverpaid.html">Procedures Overpaid Report</a></li>
<li id="reportproductiongoal"><a href="reportproductiongoal.html">Monthly Production Goal Report</a></li>
<li id="reportdynamicpayplanovercharged"><a href="reportdynamicpayplanovercharged.html">Dynamic Payment Plans Overcharged Report</a></li>
</ul>
<li class="collapse" id="+reportlists"><div class="exptxt">Lists</div>
<ul id="ul_+reportlists">
<li id="reportactivepatient"><a href="reportactivepatient.html">Active Patients Report</a></li>
<li id="reportappts"><a href="reportappts.html">Appointments Report</a></li>
<li id="reportbirthdays"><a href="reportbirthdays.html">Birthday Report and Postcards</a></li>
<li id="reportbrokenappt"><a href="reportbrokenappt.html">Broken Appointments Report</a></li>
<li id="reportdiscountplan"><a href="reportdiscountplan.html">Discount Plans Report</a></li>
<li id="reporthiddensplits"><a href="reporthiddensplits.html">Hidden Payment Splits Report</a></li>
<li id="reportinsuranceplan"><a href="reportinsuranceplan.html">Insurance Plans Report</a></li>
<li id="reportsnewpatient"><a href="reportsnewpatient.html">New Patients Report</a></li>
<li id="reportpatientraw"><a href="reportpatientraw.html">Patients Report</a></li>
<li id="reportpatientnotes"><a href="reportpatientnotes.html">Patient Notes Report</a></li>
<li id="reportprescriptions"><a href="reportprescriptions.html">Prescriptions Report</a></li>
<li id="reportprocedurecodes"><a href="reportprocedurecodes.html">Procedure Codes - Fee Schedules Report</a></li>
<li id="reportreferralraw"><a href="reportreferralraw.html">Referral - Raw Report</a></li>
<li id="reportreferralanalysis"><a href="reportreferralanalysis.html">Referral Analysis Report</a></li>
<li id="reportreferralproctrack"><a href="reportreferralproctrack.html">Referred Procedure Tracking Report</a></li>
<li id="reporttreatfinder"><a href="reporttreatfinder.html">Treatment Finder Report</a></li>
<li id="webschedapptreport"><a href="webschedapptreport.html">Web Sched Appointments Report</a></li>
<li id="reporterasautomaticallyprocess"><a href="reporterasautomaticallyprocess.html">ERAs Automatically Processed Report</a></li>
</ul>
<li class="collapse" id="+reportsPublicHealth"><div class="exptxt">Public Health</div>
<ul id="ul_+reportsPublicHealth">
<li id="reportsrawscreeningdata"><a href="reportsrawscreeningdata.html">Raw Screening Data Report</a></li>
<li id="reportsrawpopulationdata"><a href="reportsrawpopulationdata.html">Raw Population Data Report</a></li>
<li id="reportsuds"><a href="reportsuds.html">UDS Report</a></li>
</ul>
<li id="reportehrexport"><a href="reportehrexport.html">EHR Patient Export</a></li>
<li id="laserlabels"><a href="laserlabels.html">Laser Labels</a></li>
<li id="claimsnapshot"><a href="claimsnapshot.html">Claim Snapshot</a></li>
</ul>
<li class="collapse" id="reportsgraphic"><div class="exptxt"><a href="reportsgraphic.html">Graphic Reports</a></div>
<ul id="ul_reportsgraphic">
<li id="reportsgraphicsetup"><a href="reportsgraphicsetup.html">Graphic Reports Setup</a></li>
</ul>
<li class="collapse" id="queryoverview"><div class="exptxt"><a href="queryoverview.html">User Query</a></div>
<ul id="ul_queryoverview">
<li id="queryfavorites"><a href="queryfavorites.html">Query Favorites</a></li>
<li id="queryexamples.html"><a href="queryexamples.html">queryexamples</a></li>
<li id="excel"><a href="excel.html">Excel</a></li>
<li id="ooformletter"><a href="ooformletter.html">OpenOffice.org Form Letter</a></li>
<li id="oospread"><a href="oospread.html">OpenOffice.org Spreadsheet</a></li>
<li id="queryrequesterror.html"><a href="queryrequesterror.html">Query Request Error</a></li>
<li id="querysql.html"><a href="../site/querysql.html">Using SQL to Write Reports</a></li>
<li id="unitedwayreports"><a href="unitedwayreports.html">United Way Reports</a></li>
</ul>
<li id="eserviceactivitylog"><a href="eserviceactivitylog.html">eService Activity Log</a></li>
</ul>
<li class="collapse" id="+tools"><div class="exptxt">Tools</div>
<ul id="ul_+tools">
<li id="printscreentool"><a href="printscreentool.html">Print Screen Tool</a></li>
<li class="collapse" id="+misc"><div class="exptxt">Misc Tools</div>
<ul id="ul_+misc">
<li id="blockoutsduplicate"><a href="blockoutsduplicate.html">Clear Duplicate Blockouts</a></li>
<li id="atozcreate"><a href="atozcreate.html">Create AtoZ Folder</a></li>
<li id="databasemaintenancepat"><a href="databasemaintenancepat.html">Database Maintenance for Patient</a></li>
<li id="mergebillingtypes"><a href="mergebillingtypes.html">Merge Billing Types</a></li>
<li id="mergediscountplans"><a href="mergediscountplans.html">Merge Discount Plans</a></li>
<li id="mergeimagecategories"><a href="mergeimagecategories.html">Merge Image Categories</a></li>
<li id="mergemedications"><a href="mergemedications.html">Merge Medications</a></li>
<li id="mergepatients"><a href="mergepatients.html">Merge Patients</a></li>
<li id="mergeproviders"><a href="mergeproviders.html">Merge Providers</a></li>
<li id="mergereferrals"><a href="mergereferrals.html">Merge Referrals</a></li>
<li id="subscribersmove"><a href="subscribersmove.html">Move Subscribers</a></li>
<li class="collapse" id="servicemanager"><div class="exptxt"><a href="servicemanager.html">Service Manager</a></div>
<ul id="ul_servicemanager">
<li id="opendentalservice"><a href="opendentalservice.html">Open Dental Service</a></li>
<li id="opendentalreplicationservice"><a href="opendentalreplicationservice.html">Open Dental Replication Service</a></li>
</ul>
<li id="procedurelocking"><a href="procedurelocking.html">Procedure Lock</a></li>
<li id="shutdown"><a href="shutdown.html">Shutdown Workstations</a></li>
<li id="telephonenumbers"><a href="telephonenumbers.html">Telephone Numbers</a></li>
<li id="testlatency"><a href="testlatency.html">Test Latency</a></li>
<li id="patientstatussetter"><a href="patientstatussetter.html">Patient Status Setter</a></li>
</ul>
<li class="collapse" id="+advertising"><div class="exptxt">Advertising</div>
<ul id="ul_+advertising">
<li id="postcardssetup"><a href="postcardssetup.html">Postcards Setup (Advertising)</a></li>
<li class="collapse" id="postcardsupload"><div class="exptxt"><a href="postcardsupload.html">Upload Postcard Recipients</a></div>
<ul id="ul_postcardsupload">
<li id="sendpostcards"><a href="sendpostcards.html">Send Postcards (Advertising)</a></li>
<li id="postcardsadvertisingworkflow"><a href="postcardsadvertisingworkflow.html">Postcards (Advertising): Workflow</a></li>
<li id="advertisingselectpatients"><a href="advertisingselectpatients.html">Advertising - Select Patients</a></li>
</ul>
</ul>
<li id="aging"><a href="aging.html">Aging</a></li>
<li class="collapse" id="audittrail"><div class="exptxt"><a href="audittrail.html">Audit Trail</a></div>
<ul id="ul_audittrail">
<li id="audittrailpermissions"><a href="audittrailpermissions.html">Audit Trail Permissions</a></li>
</ul>
<li id="orthoautoclaim"><a href="orthoautoclaim.html">Ortho Auto Claims</a></li>
<li id="financecharges"><a href="financecharges.html">Billing/Finance Charges</a></li>
<li class="collapse" id="recurringcharges"><div class="exptxt"><a href="recurringcharges.html">CC Recurring Charges</a></div>
<ul id="ul_recurringcharges">
<li id="recurringchargeshistory"><a href="recurringchargeshistory.html">Recurring Charge History</a></li>
</ul>
<li class="collapse" id="certifications"><div class="exptxt"><a href="certifications.html">Certifications</a></div>
<ul id="ul_certifications">
<li id="certificationsetup"><a href="certificationsetup.html">Certification Setup</a></li>
</ul>
<li class="collapse" id="databasemaintenance"><div class="exptxt"><a href="databasemaintenance.html">Database Maintenance</a></div>
<ul id="ul_databasemaintenance">
<li class="collapse" id="databasemaintenancetools"><div class="exptxt"><a href="databasemaintenancetools.html">Database Maintenance Tools Tab</a></div>
<ul id="ul_databasemaintenancetools">
<li id="familybalancertool"><a href="familybalancertool.html">Family Balancer Tool</a></li>
</ul>
</ul>
<li class="collapse" id="dsevaluations"><div class="exptxt"><a href="dsevaluations.html">Dental Student Evaluations</a></div>
<ul id="ul_dsevaluations">
<li id="dsfillevaluation"><a href="dsfillevaluation.html">Fill out Student Evaluations</a></li>
<li id="dsreports"><a href="dsreports.html">Dental Student Reports</a></li>
</ul>
<li class="collapse" id="erouting"><div class="exptxt"><a href="erouting.html">eRouting</a></div>
<ul id="ul_erouting">
<li id="eroutingsetup"><a href="eroutingsetup.html">eRouting Setup</a></li>
</ul>
<li id="kioskpatient"><a href="kioskpatient.html">Kiosk</a></li>
<li id="kiosk"><a href="kiosk.html">Kiosk Manager</a></li>
<li id="languages"><a href="languages.html">Language Translation</a></li>
<li id="latecharges"><a href="latecharges.html">Late Charges</a></li>
<li class="collapse" id="mobilesynchupload"><div class="exptxt"><a href="mobilesynchupload.html">Mobile Synch Setup</a></div>
<ul id="ul_mobilesynchupload">
<li id="mobilesynchuse"><a href="mobilesynchuse.html">Using Mobile Synch</a></li>
</ul>
<li class="collapse" id="portalonlinepayments"><div class="exptxt"><a href="portalonlinepayments.html">Online Payments</a></div>
<ul id="ul_portalonlinepayments">
<li id="portalpaymentsbypatient"><a href="portalpaymentsbypatient.html">Payment Portal</a></li>
</ul>
<li id="dashboardsetup"><a href="dashboardsetup.html">Dashboard Setup</a></li>
<li id="patientportaltransactions"><a href="patientportaltransactions.html">Patient Portal Transactions</a></li>
<li class="collapse" id="publichealthscreenings"><div class="exptxt"><a href="publichealthscreenings.html">Public Health Screening</a></div>
<ul id="ul_publichealthscreenings">
<li id="publichealthscreeningclassic"><a href="publichealthscreeningclassic.html">Public Health Classic Screening</a></li>
<li id="publichealthscreeningcustom"><a href="publichealthscreeningcustom.html">Public Health Custom Screening</a></li>
</ul>
<li id="repeatingcharges"><a href="repeatingcharges.html">Repeating Charges</a></li>
<li id="setupwizard"><a href="setupwizard.html">Setup Wizard</a></li>
<li id="requirements"><a href="requirements.html">Dental School Requirements Needed</a></li>
<li class="collapse" id="wiki"><div class="exptxt"><a href="wiki.html">Wiki</a></div>
<ul id="ul_wiki">
<li id="wikiaddedit"><a href="wikiaddedit.html">Wiki Edit</a></li>
<li id="wikilists"><a href="wikilists.html">Wiki List</a></li>
<li id="wikimarkup"><a href="wikimarkup.html">Wiki Markup</a></li>
<li id="wikisearch"><a href="wikisearch.html">Wiki Search</a></li>
<li id="wikihistory"><a href="wikihistory.html">Wiki History</a></li>
</ul>
<li class="collapse" id="webformsupload"><div class="exptxt"><a href="webformsupload.html">Web Form Setup</a></div>
<ul id="ul_webformsupload">
<li id="webformsretrieve"><a href="webformsretrieve.html">Web Forms Retrieve</a></li>
<li id="webformspatient"><a href="webformspatient.html">Web Forms: What Patient Sees</a></li>
<li id="screeningform"><a href="screeningform.html">Dental Patient Screening Form</a></li>
<li id="webformsdiagram"><a href="webformsdiagram.html">Web Forms Technical Diagram</a></li>
</ul>
<li class="collapse" id="zoom"><div class="exptxt"><a href="zoom.html">Zoom</a></div>
<ul id="ul_zoom">
<li id="zoomartifacts"><a href="zoomartifacts.html">Zoom Artifacts</a></li>
</ul>
</ul>
<li id="clinics"><a href="clinics.html">Clinics</a></li>
<li id="patientdashboard"><a href="patientdashboard.html">Patient Dashboard</a></li>
<li class="collapse" id="eservicessetup"><div class="exptxt"><a href="eservicessetup.html">eServices Setup</a></div>
<ul id="ul_eservicessetup">
<li class="collapse" id="eservicessignup"><div class="exptxt"><a href="eservicessignup.html">eServices Signup</a></div>
<ul id="ul_eservicessignup">
<li class="collapse" id="signupportalbasic"><div class="exptxt"><a href="signupportalbasic.html">eServices Signup Basic</a></div>
<ul id="ul_signupportalbasic">
<li id="textregister"><a href="textregister.html">Register with Carriers</a></li>
</ul>
<li id="signupportaladvanced"><a href="signupportaladvanced.html">eServices Signup Advanced</a></li>
<li id="portalsettings"><a href="portalsettings.html">Patient Portal Settings</a></li>
<li class="collapse" id="opendentalmobile"><div class="exptxt"><a href="opendentalmobile.html">ODMobile</a></div>
<ul id="ul_opendentalmobile">
<li id="opendentalmobileappts"><a href="opendentalmobileappts.html">ODMobile Appointments</a></li>
<li id="opendentalmobilepatients"><a href="opendentalmobilepatients.html">ODMobile Patients</a></li>
<li id="opendentalmobilemessages"><a href="opendentalmobilemessages.html">ODMobile Messages</a></li>
<li class="collapse" id="opendentalmobilemenu"><div class="exptxt"><a href="opendentalmobilemenu.html">ODMobile Menu</a></div>
<ul id="ul_opendentalmobilemenu">
<li id="opendentalmobilereports"><a href="opendentalmobilereports.html">ODMobile Reports</a></li>
<li id="opendentalmobilesettings"><a href="opendentalmobilesettings.html">ODMobile Settings</a></li>
</ul>
</ul>
<li id="signupportalabout"><a href="signupportalabout.html">eServices Sign Up About</a></li>
<li id="signupportalhelp"><a href="signupportalhelp.html">eServices Signup Help</a></li>
<li id="textintegratedmonthlylimit"><a href="textintegratedmonthlylimit.html">SMS Warning Amount</a></li>
</ul>
<li class="collapse" id="econnector"><div class="exptxt"><a href="econnector.html">eConnector</a></div>
<ul id="ul_econnector">
<li id="allowapplication"><a href="allowapplication.html">eConnector Firewall</a></li>
<li id="eserviceports"><a href="../site/eserviceports.html">Ports and IP Addresses for eServices</a></li>
<li id="eservicestroubleshooting"><a href="eservicestroubleshooting.html">eServices Troubleshooting</a></li>
</ul>
<li class="collapse" id="mobilewebhostedbyod"><div class="exptxt"><a href="mobilewebhostedbyod.html">Mobile Web</a></div>
<ul id="ul_mobilewebhostedbyod">
<li class="collapse" id="mobilewebuse"><div class="exptxt"><a href="mobilewebuse.html">Mobile Web Home</a></div>
<ul id="ul_mobilewebuse">
<li id="mobilewebuseappts"><a href="mobilewebuseappts.html">Mobile Web Appointments</a></li>
<li id="mobilewebusepatients"><a href="mobilewebusepatients.html">Mobile Web Patients</a></li>
<li id="mobilewebuseops"><a href="mobilewebuseops.html">Mobile Web Operatories</a></li>
<li id="mobilewebusepharmacies"><a href="mobilewebusepharmacies.html">Mobile Web Pharmacies</a></li>
<li id="mobilewebuseerx"><a href="mobilewebuseerx.html">Mobile Web eRx</a></li>
</ul>
<li id="mobilewebtroubleshooting"><a href="mobilewebtroubleshooting.html">Mobile Web Troubleshooting</a></li>
</ul>
<li class="collapse" id="portalhostedbyod"><div class="exptxt"><a href="portalhostedbyod.html">Patient Portal</a></div>
<ul id="ul_portalhostedbyod">
<li id="portalodhostdiagram"><a href="portalodhostdiagram.html">Patient Portal Host Diagram</a></li>
<li id="portallhostown"><a href="portallhostown.html">Host your own Patient Portal</a></li>
<li id="portalaccess"><a href="portalaccess.html">Patient Portal Access</a></li>
<li id="portaltroubleshooting"><a href="portaltroubleshooting.html">Patient Portal Troubleshooting</a></li>
<li id="portalpatientsees"><a href="portalpatientsees.html">Patient Portal: What Patient Sees</a></li>
<li id="authrep"><a href="authrep.html">Authorized Representatives</a></li>
</ul>
<li id="paymentportalsetup"><a href="paymentportalsetup.html">Payment Portal Setup</a></li>
<li class="collapse" id="textintegratedusage"><div class="exptxt"><a href="textintegratedusage.html">Texting</a></div>
<ul id="ul_textintegratedusage">
<li id="textintegratedtroubleshooting"><a href="textintegratedtroubleshooting.html">Integrated Texting Troubleshooting</a></li>
<li id="textmsgfaq"><a href="textmsgfaq.html">Integrated Texting Q and A</a></li>
<li id="appointmenttexts"><a href="appointmenttexts.html">Appointment Texts</a></li>
<li id="eservicestermsofservice"><a href="eservicestermsofservice.html">Texting Terms of Service</a></li>
</ul>
<li class="collapse" id="automatedmessaging"><div class="exptxt"><a href="automatedmessaging.html">Automated Messaging</a></div>
<ul id="ul_automatedmessaging">
<li id="automatedmessagingadvanced"><a href="automatedmessagingadvanced.html">Automated Messaging Advanced Settings</a></li>
<li class="collapse" id="ereminderssetup"><div class="exptxt"><a href="ereminderssetup.html">eReminders</a></div>
<ul id="ul_ereminderssetup">
<li id="eremindertroubleshooting"><a href="eremindertroubleshooting.html">eReminder and eConfirmation Troubleshooting</a></li>
</ul>
<li id="econfirmationsetup"><a href="econfirmationsetup.html">eConfirmations</a></li>
<li id="autothankyousetup"><a href="autothankyousetup.html">Automated Thank-Yous</a></li>
<li class="collapse" id="arrivalssetup"><div class="exptxt"><a href="arrivalssetup.html">Arrivals</a></div>
<ul id="ul_arrivalssetup">
<li id="arrivalssees"><a href="arrivalssees.html">Arrivals: What Patient Sees</a></li>
</ul>
<li id="editrule"><a href="editrule.html">Edit Rule</a></li>
<li id="generalmessagesetup"><a href="generalmessagesetup.html">General Messages</a></li>
<li id="econfirmationexclusiondays"><a href="econfirmationexclusiondays.html">eConfirmation Exclusion Days</a></li>
<li id="automatedmessagingpreferences"><a href="automatedmessagingpreferences.html">Automated Messaging Preferences</a></li>
</ul>
<li class="collapse" id="eclipboardsetup"><div class="exptxt"><a href="eclipboardsetup.html">eClipboard Setup</a></div>
<ul id="ul_eclipboardsetup">
<li id="eclipboardsees"><a href="eclipboardsees.html">eClipboard: What Patient Sees</a></li>
<li id="byodsees"><a href="byodsees.html">BYOD: What Patient Sees</a></li>
<li id="byodworkflow"><a href="byodworkflow.html">BYOD: Workflow</a></li>
<li id="eclipboardtroubleshooting"><a href="eclipboardtroubleshooting.html">eClipboard Troubleshooting</a></li>
<li id="eclipboardworkflow"><a href="eclipboardworkflow.html">eClipboard: Workflow</a></li>
<li id="eclipboardimages"><a href="eclipboardimages.html">eClipboard Images</a></li>
<li id="eclipboardbranding"><a href="eclipboardbranding.html">eClipboard Branding Profile</a></li>
<li id="odtouchsecurity"><a href="odtouchsecurity.html">ODTouch Security</a></li>
</ul>
<li id="eservicesmisctab"><a href="eservicesmisctab.html">eServices Misc</a></li>
<li class="collapse" id="secureemailsetup"><div class="exptxt"><a href="secureemailsetup.html">Secure Email Setup</a></div>
<ul id="ul_secureemailsetup">
<li id="secureemailworkflow"><a href="secureemailworkflow.html">Secure Email: Workflow</a></li>
<li id="hostedemailsignatures"><a href="hostedemailsignatures.html">Hosted Email Signatures</a></li>
<li id="hostedemailaddressverification"><a href="hostedemailaddressverification.html">Hosted Email Address Verification</a></li>
</ul>
<li class="collapse" id="odtouchsetup"><div class="exptxt"><a href="odtouchsetup.html">ODTouch Setup</a></div>
<ul id="ul_odtouchsetup">
<li class="collapse" id="odtouchhome"><div class="exptxt"><a href="odtouchhome.html">ODTouch: Home Screen</a></div>
<ul id="ul_odtouchhome">
<li id="odtouchappts"><a href="odtouchappts.html">ODTouch: Appointments</a></li>
<li id="odtouchimages"><a href="odtouchimages.html">ODTouch: Images</a></li>
<li id="odtouchprodgoal"><a href="odtouchprodgoal.html">ODTouch: Production Goals</a></li>
<li id="odtouchmedical"><a href="odtouchmedical.html">ODTouch: Medical Info</a></li>
<li id="odtouchperio"><a href="odtouchperio.html">ODTouch: Perio</a></li>
<li id="odtouchchart"><a href="odtouchchart.html">ODTouch: Chart</a></li>
<li id="odtouchreports"><a href="odtouchreports.html">ODTouch: Reports</a></li>
<li id="odtouchsettings"><a href="odtouchsettings.html">ODTouch: Settings</a></li>
<li id="odtouchtreatmentplans"><a href="odtouchtreatmentplans.html">ODTouch: Treatment Plans</a></li>
<li id="odtoucherouting"><a href="odtoucherouting.html">ODTouch: eRouting</a></li>
<li id="odtouchpayplan"><a href="odtouchpayplan.html">ODTouch: Payment plans</a></li>
<li id="odtoucherx"><a href="odtoucherx.html">ODTouch: eRx</a></li>
<li id="odtouchexam"><a href="odtouchexam.html">ODTouch: Exam Sheets</a></li>
</ul>
<li id="privacypolicyodtouch"><a href="privacypolicyodtouch.html">ODTouch Privacy Policy</a></li>
</ul>
<li id="mobilesettings"><a href="mobilesettings.html">Mobile Settings</a></li>
<li class="collapse" id="webschedrecallsetup"><div class="exptxt"><a href="webschedrecallsetup.html">Web Sched Recall</a></div>
<ul id="ul_webschedrecallsetup">
<li id="webschedrecallsees"><a href="webschedrecallsees.html">Web Sched Recall: What Patient Sees</a></li>
</ul>
<li class="collapse" id="webschednewpatsetup"><div class="exptxt"><a href="webschednewpatsetup.html">Web Sched New Patient</a></div>
<ul id="ul_webschednewpatsetup">
<li id="webschednewpatsees"><a href="webschednewpatsees.html">Web Sched New Patient: What Patient Sees</a></li>
<li id="webschedverify"><a href="webschedverify.html">Web Sched Notify Setup</a></li>
<li id="webschedcarrierrule"><a href="webschedcarrierrule.html">Web Sched Carrier Rule</a></li>
</ul>
<li class="collapse" id="webschedexistingpatsetup"><div class="exptxt"><a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a></div>
<ul id="ul_webschedexistingpatsetup">
<li id="webschedexistingpatientsees"><a href="webschedexistingpatientsees.html">Web Sched Existing Patient: What Patient Sees</a></li>
</ul>
<li class="collapse" id="webschedasap"><div class="exptxt"><a href="webschedasap.html">Web Sched ASAP</a></div>
<ul id="ul_webschedasap">
<li id="webschedasaphistory"><a href="webschedasaphistory.html">Web Sched ASAP History</a></li>
<li id="webschedasappatientsees"><a href="webschedasappatientsees.html">Web Sched ASAP: What Patient Sees</a></li>
</ul>
<li id="webschedadvanced"><a href="webschedadvanced.html">Web Sched Advanced</a></li>
<li id="webschedtroubleshooting"><a href="webschedtroubleshooting.html">Web Sched Troubleshooting</a></li>
<li id="eservicebundleworkflow"><a href="eservicebundleworkflow.html">eServices Bundle Workflow</a></li>
<li id="devicemanager"><a href="devicemanager.html">Device Manager</a></li>
</ul>
<li id="alerts"><a href="alerts.html">Alerts</a></li>
<li class="collapse" id="+help"><div class="exptxt">Help</div>
<ul id="ul_+help">
<li id="helpfeature"><a href="helpfeature.html">Help Feature</a></li>
<li id="querymonitor"><a href="querymonitor.html">Query Monitor</a></li>
<li id="featurerequests"><a href="featurerequests.html">Feature Requests</a></li>
<li id="payloadmonitor"><a href="payloadmonitor.html">Payload Monitor</a></li>
<li id="supportstatus"><a href="supportstatus.html">Support Status</a></li>
<li class="collapse" id="update"><div class="exptxt"><a href="update.html">Update</a></div>
<ul id="ul_update">
<li id="updatesetup"><a href="updatesetup.html">Update Setup</a></li>
<li class="collapse" id="+buglist"><div class="exptxt">Bug List</div>
<ul id="ul_+buglist">
<li id="bugtrackerolderversions.html"><a href="../site/bugtrackerolderversions.html">bugtrackerolderversions</a></li>
<li id="previous.html"><a href="../site/previous.html">Previous Versions</a></li>
<li id="annoyances"><a href="../site/annoyances.html">Annoyances</a></li>
</ul>
<li id="updateinstall"><a href="updateinstall.html">Install Update</a></li>
</ul>
<li class="collapse" id="aboutwindow"><div class="exptxt"><a href="aboutwindow.html">About</a></div>
<ul id="ul_aboutwindow">
<li id="licenses"><a href="licenses.html">Licenses</a></li>
<li id="diagnostics"><a href="diagnostics.html">Diagnostics</a></li>
</ul>
</ul>
</ul>
<li class="collapse" id="toolbar"><div class="exptxt"><a href="toolbar.html">Main Toolbar</a></div>
<ul id="ul_toolbar">
<li class="collapse" id="patientselect"><div class="exptxt"><a href="patientselect.html">Select Patient</a></div>
<ul id="ul_patientselect">
<li id="patientnew"><a href="patientnew.html">Add Patient</a></li>
<li id="familyadd"><a href="familyadd.html">Add Family</a></li>
</ul>
<li id="commlog"><a href="commlog.html">Commlog</a></li>
<li class="collapse" id="emailmessage"><div class="exptxt"><a href="emailmessage.html">Email Message Edit</a></div>
<ul id="ul_emailmessage">
<li id="email"><a href="email.html">Email</a></li>
<li id="emailhtml"><a href="emailhtml.html">HTML Email</a></li>
<li id="emailautographs"><a href="emailautographs.html">Email Autographs</a></li>
<li class="collapse" id="emailencrypted"><div class="exptxt"><a href="emailencrypted.html">Email Encryption Options</a></div>
<ul id="ul_emailencrypted">
<li id="emailoutlooksign"><a href="emailoutlooksign.html">Email Certificate Outlook</a></li>
<li id="direct"><a href="direct.html">Email Direct Encryption</a></li>
<li id="encryptedstandard"><a href="encryptedstandard.html">Email Encryption Setup</a></li>
</ul>
<li id="emailerrors"><a href="emailerrors.html">Email Errors</a></li>
<li id="emailtemplates"><a href="emailtemplates.html">Email Templates</a></li>
</ul>
<li id="securewebmailsend"><a href="securewebmailsend.html">WebMail</a></li>
<li class="collapse" id="textmessages"><div class="exptxt"><a href="textmessages.html">Text Message</a></div>
<ul id="ul_textmessages">
<li id="textmsginbox"><a href="textmsginbox.html">Text Messaging Mailbox</a></li>
</ul>
<li class="collapse" id="letterspatient"><div class="exptxt"><a href="letterspatient.html">Letter</a></div>
<ul id="ul_letterspatient">
<li id="letterreferral"><a href="letterreferral.html">Referral Letter</a></li>
<li id="lettermerge"><a href="lettermerge.html">Letter Merge</a></li>
<li id="mailmergeword"><a href="mailmergeword.html">Mail Merge in Word</a></li>
</ul>
<li class="collapse" id="patientform"><div class="exptxt"><a href="patientform.html">Patient Forms</a></div>
<ul id="ul_patientform">
<li id="sheetsfillout"><a href="sheetsfillout.html">Fill Sheet</a></li>
<li id="patientformsimport"><a href="patientformsimport.html">Import Patient Forms and Medical Histories</a></li>
<li id="registrationforms"><a href="registrationforms.html">Registration Forms</a></li>
</ul>
<li class="collapse" id="tasks"><div class="exptxt"><a href="tasks.html">Task</a></div>
<ul id="ul_tasks">
<li class="collapse" id="taskswindow"><div class="exptxt"><a href="taskswindow.html">Task Window</a></div>
<ul id="ul_taskswindow">
<li id="taskattachments"><a href="taskattachments.html">Task Attachments</a></li>
</ul>
<li class="collapse" id="taskreminders"><div class="exptxt"><a href="taskreminders.html">Task Reminder</a></div>
<ul id="ul_taskreminders">
<li id="tasklistrepeating"><a href="tasklistrepeating.html">Repeating Task Lists (Legacy)</a></li>
</ul>
<li id="tasklists"><a href="tasklists.html">Task List and Inbox</a></li>
<li id="tasksearch"><a href="tasksearch.html">Task Search</a></li>
</ul>
<li id="labels"><a href="labels.html">Labels</a></li>
<li id="popups"><a href="popups.html">Popups</a></li>
</ul>
<li class="collapse" id="technical"><div class="exptxt"><a href="technical.html">Technical</a></div>
<ul id="ul_technical">
<li class="collapse" id="computernetworksetup"><div class="exptxt"><a href="computernetworksetup.html">Network and Computer Setup</a></div>
<ul id="ul_computernetworksetup">
<li id="computerrequirements.html"><a href="../site/computerrequirements.html">Computer Requirements</a></li>
<li id="screensize"><a href="../site/screensize.html">Screen Size</a></li>
<li id="connectingworkstations"><a href="connectingworkstations.html">Connecting Workstations to a Database</a></li>
<li class="collapse" id="securitycomputers"><div class="exptxt"><a href="securitycomputers.html">Computer Security</a></div>
<ul id="ul_securitycomputers">
<li id="firewalls"><a href="firewalls.html">Firewall</a></li>
<li id="securitymysql"><a href="securitymysql.html">MySQL Security</a></li>
<li id="windowsupdates"><a href="windowsupdates.html">Windows Update</a></li>
<li id="networkusers"><a href="networkusers.html">Network Users</a></li>
<li class="collapse" id="virus"><div class="exptxt"><a href="virus.html">Antivirus</a></div>
<ul id="ul_virus">
<li id="virusbestpractices"><a href="virusbestpractices.html">Antivirus Best Practices</a></li>
</ul>
<li class="collapse" id="encryption"><div class="exptxt"><a href="encryption.html">Encryption of Data at Rest and in Transit</a></div>
<ul id="ul_encryption">
<li id="encryptionbitlocker"><a href="encryptionbitlocker.html">BitLocker Encryption</a></li>
<li id="encryptionefs"><a href="encryptionefs.html">EFS Encryption</a></li>
</ul>
<li id="embezzlement"><a href="embezzlement.html">Embezzlement</a></li>
<li id="privacypolicy"><a href="privacypolicy.html">Privacy Policy - Google</a></li>
<li id="privacypolicyodmobile"><a href="../site/privacypolicyodmobile.html">Open Dental / ODMobile Privacy Policy</a></li>
</ul>
<li id="tablet"><a href="../site/tablet.html">Tablet</a></li>
<li id="scanners"><a href="scanners.html">Scanners</a></li>
<li id="wireless"><a href="wireless.html">Wireless</a></li>
<li class="collapse" id="hipaaopendental"><div class="exptxt"><a href="../site/hipaaopendental.html">HIPAA at Open Dental Software, Inc.</a></div>
<ul id="ul_hipaaopendental">
<li id="hipaa"><a href="../site/hipaa.html">HIPAA</a></li>
</ul>
</ul>
<li class="collapse" id="installation"><div class="exptxt"><a href="installation.html">Installation</a></div>
<ul id="ul_installation">
<li class="collapse" id="+trial"><div class="exptxt">Trial Version</div>
<ul id="ul_+trial">
<li id="trialversionimprovements"><a href="../site/trialversionimprovements.html">Trial Database Improvements</a></li>
</ul>
<li id="updatefullversion"><a href="updatefullversion.html">Update to Full Version</a></li>
<li id="installworkstation"><a href="installworkstation.html">Install on Workstation</a></li>
<li id="dotnet"><a href="dotnet.html">dot Net ( .NET )</a></li>
<li class="collapse" id="troubleshooting"><div class="exptxt"><a href="troubleshooting.html">Troubleshooting</a></div>
<ul id="ul_troubleshooting">
<li id="unhandledexception"><a href="unhandledexception.html">Unhandled Exception</a></li>
<li id="troubleshootingslowness"><a href="troubleshootingslowness.html">Troubleshooting Slowness</a></li>
</ul>
<li id="usingodblank"><a href="usingodblank.html">Use Blank Database</a></li>
<li id="port3306"><a href="port3306.html">Open Port 3306</a></li>
<li id="uninstall"><a href="uninstall.html">Uninstalling Open Dental</a></li>
</ul>
<li class="collapse" id="advancedtopics"><div class="exptxt"><a href="advancedtopics.html">Advanced Topics</a></div>
<ul id="ul_advancedtopics">
<li id="remote"><a href="remote.html">Remote Access</a></li>
<li id="multiplelocations"><a href="multiplelocations.html">Multiple Locations</a></li>
<li class="collapse" id="replication"><div class="exptxt"><a href="replication.html">Replication</a></div>
<ul id="ul_replication">
<li id="replicationautoincrement"><a href="replicationautoincrement.html">Replication Auto Increment</a></li>
<li id="replicationbestpractices"><a href="replicationbestpractices.html">Replication Best Practices</a></li>
<li id="replicationdaisychain"><a href="replicationdaisychain.html">Daisy Chain Replication</a></li>
<li id="replicationdaisychainnewserver"><a href="replicationdaisychainnewserver.html">Daisy Chain Replication: Add Server</a></li>
<li id="replicationdaisychainnewserverrandomprimary"><a href="replicationdaisychainnewserverrandomprimary.html">Daisy Chain Replication: Add Server (random primary keys)</a></li>
<li id="replicationoneway"><a href="replicationoneway.html">One-Way Replication</a></li>
<li id="replicationonewayrandomprimary"><a href="replicationonewayrandomprimary.html">One-Way Replication (random primary keys)</a></li>
<li id="replicationprimarykeys"><a href="replicationprimarykeys.html">Random Primary Keys</a></li>
<li id="replicationreinitialize"><a href="replicationreinitialize.html">Reinitialize Replication</a></li>
<li id="replicationtroubleshooting"><a href="replicationtroubleshooting.html">Replication Troubleshooting</a></li>
<li id="replicationupdateod"><a href="replicationupdateod.html">Replication: Update Open Dental Version</a></li>
<li id="sharednetworkfolder"><a href="sharednetworkfolder.html">Folder Replication</a></li>
</ul>
<li class="collapse" id="middletier"><div class="exptxt"><a href="middletier.html">Middle Tier</a></div>
<ul id="ul_middletier">
<li id="middletierinstallation"><a href="middletierinstallation.html">Middle Tier Installation</a></li>
<li id="timezones"><a href="timezones.html">Time Zones</a></li>
<li id="cloudhostedserver"><a href="cloudhostedserver.html">Self-Directed Cloud Hosting</a></li>
<li id="proxyserver"><a href="proxyserver.html">Proxy Server</a></li>
<li id="middletiersecuritycert"><a href="middletiersecuritycert.html">Middle Tier Security Certificate</a></li>
<li id="middletiertroubleshooting"><a href="middletiertroubleshooting.html">Middle Tier Troubleshooting</a></li>
<li id="hostmultipledatabases"><a href="hostmultipledatabases.html">Host Multiple Databases from One Web Server</a></li>
</ul>
<li class="collapse" id="central"><div class="exptxt"><a href="central.html">Central Enterprise Management Tool ( CEMT )</a></div>
<ul id="ul_central">
<li id="cemtbestpractices"><a href="cemtbestpractices.html">CEMT Best Practices</a></li>
<li id="cemtconnections"><a href="cemtconnections.html">CEMT Connections</a></li>
<li id="cemtpasswords"><a href="cemtpasswords.html">CEMT Passwords</a></li>
<li id="cemtprodincreport"><a href="cemtprodincreport.html">CEMT Reports</a></li>
<li id="cemtsecurity"><a href="cemtsecurity.html">CEMT Security</a></li>
<li id="cemtsetup"><a href="cemtsetup.html">CEMT Setup</a></li>
<li id="cemtupdate"><a href="cemtupdate.html">CEMT Update Databases</a></li>
<li id="cemtpatienttransfer"><a href="cemtpatienttransfer.html">CEMT Patient Transfer</a></li>
<li id="cemtusersettings"><a href="cemtusersettings.html">CEMT User Settings</a></li>
<li id="cemtconnectiongroups"><a href="cemtconnectiongroups.html">CEMT Connection Groups</a></li>
</ul>
<li class="collapse" id="databasemanagementsystems"><div class="exptxt"><a href="databasemanagementsystems.html">Database Management Systems</a></div>
<ul id="ul_databasemanagementsystems">
<li class="collapse" id="mysql"><div class="exptxt"><a href="mysql.html">MySQL</a></div>
<ul id="ul_mysql">
<li id="mysql50"><a href="mysql50.html">MySQL 5.0</a></li>
<li id="mysql55"><a href="mysql55.html">MySQL 5.5</a></li>
<li id="mysql56update"><a href="mysql56update.html">MySQL 5.6</a></li>
</ul>
<li id="mariadb"><a href="mariadb.html">MariaDB</a></li>
<li id="mysqlinnodb"><a href="mysqlinnodb.html">MySQL InnoDB</a></li>
<li id="corruption"><a href="corruption.html">Corruption</a></li>
<li id="mycnf"><a href="mycnf.html">my.cnf</a></li>
<li id="myini"><a href="myini.html">my.ini</a></li>
<li id="odbc"><a href="odbc.html">ODBC</a></li>
<li id="refreshing"><a href="refreshing.html">Refreshing Data</a></li>
<li id="oracle.html"><a href="../site/oracle.html">Oracle</a></li>
<li id="servermigration"><a href="servermigration.html">Server Migration</a></li>
<li id="mysqlusermanager"><a href="mysqlusermanager.html">MySQL User Manager</a></li>
<li id="mysqltroubleshooting"><a href="mysqltroubleshooting.html">MySQL Troubleshooting</a></li>
<li id="slowquerylog"><a href="slowquerylog.html">Slow Query Log</a></li>
<li id="amazonrds"><a href="amazonrds.html">Amazon RDS</a></li>
<li id="queryrequest"><a href="queryrequest.html">Query Requests</a></li>
<li id="mysqlmanage"><a href="mysqlmanage.html">MySQL Data Directory Management</a></li>
</ul>
<li id="multitenant"><a href="multitenant.html">Multi-tenant Hosting</a></li>
<li class="collapse" id="unittesting.html"><div class="exptxt"><a href="../site/unittesting.html">Unit Testing</a></div>
<ul id="ul_unittesting.html">
<li id="hl7tests"><a href="hl7tests.html">HL7 Unit Tests</a></li>
<li id="unittestdowngrades"><a href="unittestdowngrades.html">Estimate Downgrade Unit Tests</a></li>
<li class="collapse" id="unittestpaymentplan"><div class="exptxt"><a href="unittestpaymentplan.html">Payment Plan Unit Tests</a></div>
<ul id="ul_unittestpaymentplan">
<li id="unittestpaymentplanscreens"><a href="unittestpaymentplanscreens.html">Payment Plan Unit Test Screens</a></li>
</ul>
<li id="unittestrepeatingcharges"><a href="unittestrepeatingcharges.html">Repeating Charges Unit Tests</a></li>
</ul>
<li id="commandline"><a href="commandline.html">Command Line Arguments</a></li>
<li id="keyboardshortcuts"><a href="keyboardshortcuts.html">Keyboard Shortcuts</a></li>
<li class="collapse" id="versions"><div class="exptxt"><a href="../site/versions.html">Versions</a></div>
<ul id="ul_versions">
<li id="version2_1"><a href="../site/version2_1.html">Version 2.1</a></li>
<li id="version2_5"><a href="../site/version2_5.html">Version 2.5</a></li>
<li id="version2_8"><a href="../site/version2_8.html">Version 2.8</a></li>
<li id="version2_9"><a href="../site/version2_9.html">Version 2.9</a></li>
<li id="version3_0"><a href="../site/version3_0.html">Version 3.0</a></li>
<li id="version3_1"><a href="../site/version3_1.html">Version 3.1</a></li>
<li id="version3_4"><a href="../site/version3_4.html">Version 3.4</a></li>
<li id="version3_5"><a href="../site/version3_5.html">Version 3.5</a></li>
<li id="version3_6"><a href="../site/version3_6.html">Version 3.6</a></li>
<li id="version3_7"><a href="../site/version3_7.html">Version 3.7</a></li>
<li id="version3_8"><a href="../site/version3_8.html">Version 3.8</a></li>
<li id="version3_9"><a href="../site/version3_9.html">Version 3.9</a></li>
<li id="version4_0"><a href="../site/version4_0.html">Version 4.0</a></li>
<li id="version4_1"><a href="../site/version4_1.html">Version 4.1</a></li>
<li id="version4_2"><a href="../site/version4_2.html">Version 4.2</a></li>
<li id="version4_3"><a href="../site/version4_3.html">Version 4.3</a></li>
<li id="version4_4"><a href="../site/version4_4.html">Version 4.4</a></li>
<li id="version4_5"><a href="../site/version4_5.html">Version 4.5</a></li>
<li id="version4_6"><a href="../site/version4_6.html">Version 4.6</a></li>
<li id="version4_7"><a href="../site/version4_7.html">Version 4.7</a></li>
<li id="version4_8"><a href="../site/version4_8.html">Version 4.8</a></li>
<li id="version4_9"><a href="../site/version4_9.html">Version 4.9</a></li>
<li id="version5_0"><a href="../site/version5_0.html">Version 5.0</a></li>
<li id="version5_1"><a href="../site/version5_1.html">Version 5.1</a></li>
<li id="version5_2"><a href="../site/version5_2.html">Version 5.2</a></li>
<li id="version5_3"><a href="../site/version5_3.html">Version 5.3</a></li>
<li id="version5_4"><a href="../site/version5_4.html">Version 5.4</a></li>
<li id="version5_5"><a href="../site/version5_5.html">Version 5.5</a></li>
<li id="version5_6"><a href="../site/version5_6.html">Version 5.6</a></li>
<li id="version5_7"><a href="../site/version5_7.html">Version 5.7</a></li>
<li id="version5_8"><a href="../site/version5_8.html">Version 5.8</a></li>
<li id="version5_9"><a href="../site/version5_9.html">Version 5.9</a></li>
<li id="version6_0"><a href="../site/version6_0.html">Version 6.0</a></li>
<li id="version6_1"><a href="../site/version6_1.html">Version 6.1</a></li>
<li id="version6_2"><a href="../site/version6_2.html">Version 6.2</a></li>
<li id="version6_3"><a href="../site/version6_3.html">Version 6.3</a></li>
<li id="version6_4"><a href="../site/version6_4.html">Version 6.4</a></li>
<li id="version6_5"><a href="../site/version6_5.html">Version 6.5</a></li>
<li id="version6_6"><a href="../site/version6_6.html">Version 6.6</a></li>
<li id="version6_7"><a href="../site/version6_7.html">Version 6.7</a></li>
<li id="version6_8"><a href="../site/version6_8.html">Version 6.8</a></li>
<li id="version6_9"><a href="../site/version6_9.html">Version 6.9</a></li>
<li id="version7_0"><a href="../site/version7_0.html">Version 7.0</a></li>
<li id="version7_1"><a href="../site/version7_1.html">Version 7.1</a></li>
<li id="version7_2"><a href="../site/version7_2.html">Version 7.2</a></li>
<li id="version7_3"><a href="../site/version7_3.html">Version 7.3</a></li>
<li id="version7_4"><a href="../site/version7_4.html">Version 7.4</a></li>
<li id="version7_5"><a href="../site/version7_5.html">Version 7.5</a></li>
<li id="version7_6"><a href="../site/version7_6.html">Version 7.6</a></li>
<li id="version7_7"><a href="../site/version7_7.html">Version 7.7</a></li>
<li id="version7_8"><a href="../site/version7_8.html">Version 7.8</a></li>
<li id="version7_9"><a href="../site/version7_9.html">Version 7.9</a></li>
<li id="version11_0"><a href="../site/version11_0.html">Version 11.0</a></li>
<li id="version11_1"><a href="../site/version11_1.html">Version 11.1</a></li>
<li id="version12_0"><a href="../site/version12_0.html">Version 12.0</a></li>
<li id="version12_1"><a href="../site/version12_1.html">Version 12.1</a></li>
<li id="version12_2"><a href="../site/version12_2.html">Version 12.2</a></li>
<li id="version12_3"><a href="../site/version12_3.html">Version 12.3</a></li>
<li id="version12_4"><a href="../site/version12_4.html">Version 12.4</a></li>
<li id="version13_1"><a href="../site/version13_1.html">Version 13.1</a></li>
<li id="version13_2"><a href="../site/version13_2.html">Version 13.2</a></li>
<li id="version13_3"><a href="../site/version13_3.html">Version 13.3</a></li>
<li id="version14_1"><a href="../site/version14_1.html">Version 14.1</a></li>
<li id="version14_2"><a href="../site/version14_2.html">Version 14.2</a></li>
<li id="version14_3"><a href="../site/version14_3.html">Version 14.3</a></li>
<li id="version15_1"><a href="../site/version15_1.html">Version 15.1</a></li>
<li id="version15_2"><a href="../site/version15_2.html">Version 15.2</a></li>
<li id="version15_3"><a href="../site/version15_3.html">Version 15.3</a></li>
<li id="version15_4"><a href="../site/version15_4.html">Version 15.4</a></li>
<li id="version16_1"><a href="../site/version16_1.html">Version 16.1</a></li>
<li id="version16_2"><a href="../site/version16_2.html">Version 16.2</a></li>
<li id="version16_3"><a href="../site/version16_3.html">Version 16.3</a></li>
<li id="version16_4"><a href="../site/version16_4.html">Version 16.4</a></li>
<li id="version17_1.html"><a href="../site/version17_1.html">Version 17.1</a></li>
<li id="version17_2.html"><a href="../site/version17_2.html">Version 17.2</a></li>
<li id="version17_3.html"><a href="../site/version17_3.html">Version 17.3</a></li>
<li id="version17_4.html"><a href="../site/version17_4.html">Version 17.4</a></li>
<li id="version18_1"><a href="../site/version18_1.html">Version 18.1</a></li>
<li id="version18_2"><a href="../site/version18_2.html">Version 18.2</a></li>
<li id="version18_3"><a href="../site/version18_3.html">Version 18.3</a></li>
<li id="version18_4"><a href="../site/version18_4.html">Version 18.4</a></li>
<li id="version19_1"><a href="../site/version19_1.html">Version 19.1</a></li>
<li id="version19_2"><a href="../site/version19_2.html">Version 19.2</a></li>
<li id="version19_3"><a href="../site/version19_3.html">Version 19.3</a></li>
<li id="version19_4"><a href="../site/version19_4.html">Version 19.4</a></li>
<li id="version20_1"><a href="../site/version20_1.html">Version 20.1</a></li>
<li id="version20_2"><a href="../site/version20_2.html">Version 20.2</a></li>
<li id="version20_3"><a href="../site/version20_3.html">Version 20.3</a></li>
<li id="version20_4"><a href="../site/version20_4.html">Version 20.4</a></li>
<li id="version20_5"><a href="../site/version20_5.html">Version 20.5</a></li>
<li id="version21_1"><a href="../site/version21_1.html">Version 21.1</a></li>
<li id="version21_2"><a href="../site/version21_2.html">Version 21.2</a></li>
<li id="version21_3"><a href="../site/version21_3.html">Version 21.3</a></li>
<li id="version21_4"><a href="../site/version21_4.html">Version 21.4</a></li>
<li id="version22_1"><a href="../site/version22_1.html">Version 22.1</a></li>
<li id="version22_2"><a href="../site/version22_2.html">Version 22.2</a></li>
<li id="version22_3"><a href="../site/version22_3.html">Version 22.3</a></li>
<li id="version22_4"><a href="../site/version22_4.html">Version 22.4</a></li>
<li id="version23_1"><a href="../site/version23_1.html">Version 23.1</a></li>
<li id="version23_2"><a href="../site/version23_2.html">Version 23.2</a></li>
</ul>
<li class="collapse" id="apispecification"><div class="exptxt"><a href="../site/apispecification.html">API Specification</a></div>
<ul id="ul_apispecification">
<li id="apisetup"><a href="../site/apisetup.html">API Setup</a></li>
<li id="apiimplementation"><a href="../site/apiimplementation.html">API Implementation</a></li>
<li id="apipermissions"><a href="../site/apipermissions.html">API Permissions</a></li>
<li id="apilocal"><a href="../site/apilocal.html">API Modes - Local, Service, and Cloud</a></li>
<li id="apievents"><a href="../site/apievents.html">API Events</a></li>
<li id="apiaccountmodules"><a href="../site/apiaccountmodules.html">API AccountModules</a></li>
<li id="apiadjustments"><a href="../site/apiadjustments.html">API Adjustments</a></li>
<li id="apiallergies"><a href="../site/apiallergies.html">API Allergies</a></li>
<li id="apiallergydefs"><a href="../site/apiallergydefs.html">API AllergyDefs</a></li>
<li id="apiappointments"><a href="../site/apiappointments.html">API Appointments</a></li>
<li id="apiappointmenttypes"><a href="../site/apiappointmenttypes.html">API AppointmentTypes</a></li>
<li id="apiapptfields"><a href="../site/apiapptfields.html">API ApptFields</a></li>
<li id="apiapptfielddefs"><a href="../site/apiapptfielddefs.html">API ApptFieldDefs</a></li>
<li id="apiasapcomms"><a href="apiasapcomms.html">API AsapComms</a></li>
<li id="apiautonotecontrols"><a href="../site/apiautonotecontrols.html">API AutoNoteControls</a></li>
<li id="apiautonotes"><a href="../site/apiautonotes.html">API AutoNotes</a></li>
<li id="apibenefits"><a href="../site/apibenefits.html">API Benefits</a></li>
<li id="apicarriers"><a href="../site/apicarriers.html">API Carriers</a></li>
<li id="apichartmodules"><a href="../site/apichartmodules.html">API ChartModules</a></li>
<li id="apiclaimpayments"><a href="../site/apiclaimpayments.html">API ClaimPayments</a></li>
<li id="apiclaimprocs"><a href="../site/apiclaimprocs.html">API ClaimProcs</a></li>
<li id="apiclaims"><a href="../site/apiclaims.html">API Claims</a></li>
<li id="apiclaimtrackings"><a href="../site/apiclaimtrackings.html">API ClaimTrackings</a></li>
<li id="apiclinics"><a href="../site/apiclinics.html">API Clinics</a></li>
<li id="apicommlogs"><a href="../site/apicommlogs.html">API Commlogs</a></li>
<li id="apicomputers"><a href="../site/apicomputers.html">API Computers</a></li>
<li id="apidefinitions"><a href="../site/apidefinitions.html">API Definitions</a></li>
<li id="apidiscountplans"><a href="../site/apidiscountplans.html">API DiscountPlans</a></li>
<li id="apidiscountplansubs"><a href="../site/apidiscountplansubs.html">API DiscountPlanSubs</a></li>
<li id="apidiseasedefs"><a href="../site/apidiseasedefs.html">API DiseaseDefs</a></li>
<li id="apidiseases"><a href="../site/apidiseases.html">API Diseases</a></li>
<li id="apidocuments"><a href="../site/apidocuments.html">API Documents</a></li>
<li id="apiemployers"><a href="../site/apiemployers.html">API Employers</a></li>
<li id="apietrans"><a href="../site/apietrans.html">API Etrans</a></li>
<li id="apietransmessagetexts"><a href="../site/apietransmessagetexts.html">API EtransMessageTexts</a></li>
<li id="apietranss"><a href="../site/apietranss.html">API Etranss</a></li>
<li id="apifamilymodules"><a href="../site/apifamilymodules.html">API FamilyModules</a></li>
<li id="apifeescheds"><a href="../site/apifeescheds.html">API FeeScheds</a></li>
<li id="apihistappointments"><a href="../site/apihistappointments.html">API HistAppointments</a></li>
<li id="apiinsplans"><a href="../site/apiinsplans.html">API InsPlans</a></li>
<li id="apiinssubs"><a href="../site/apiinssubs.html">API InsSubs</a></li>
<li id="apiinsverifies"><a href="../site/apiinsverifies.html">API InsVerifies</a></li>
<li id="apimedicationpats"><a href="../site/apimedicationpats.html">API MedicationPats</a></li>
<li id="apimedications"><a href="../site/apimedications.html">API Medications</a></li>
<li id="apioperatories"><a href="../site/apioperatories.html">API Operatories</a></li>
<li id="apipatfielddefs"><a href="../site/apipatfielddefs.html">API PatFieldDefs</a></li>
<li id="apipatfields"><a href="../site/apipatfields.html">API PatFields</a></li>
<li id="apipatientnotes"><a href="../site/apipatientnotes.html">API PatientNotes</a></li>
<li id="apipatientraces"><a href="../site/apipatientraces.html">API PatientRaces</a></li>
<li id="apipatients"><a href="../site/apipatients.html">API Patients</a></li>
<li id="apipatplans"><a href="../site/apipatplans.html">API PatPlans</a></li>
<li id="apipayments"><a href="../site/apipayments.html">API Payments</a></li>
<li id="apipayplancharges"><a href="apipayplancharges.html">API PayPlanCharges</a></li>
<li id="apipayplans"><a href="../site/apipayplans.html">API PayPlans</a></li>
<li id="apipaysplits"><a href="../site/apipaysplits.html">API PaySplits</a></li>
<li id="apiperioexams"><a href="../site/apiperioexams.html">API PerioExams</a></li>
<li id="apiperiomeasures"><a href="../site/apiperiomeasures.html">API PerioMeasures</a></li>
<li id="apipopups"><a href="../site/apipopups.html">API Popups</a></li>
<li id="apipreferences"><a href="../site/apipreferences.html">API Preferences</a></li>
<li id="apiprocedurecodes"><a href="../site/apiprocedurecodes.html">API ProcedureCodes</a></li>
<li id="apiprocedurelogs"><a href="../site/apiprocedurelogs.html">API ProcedureLogs</a></li>
<li id="apiprocnotes"><a href="../site/apiprocnotes.html">API ProcNotes</a></li>
<li id="apiproctps"><a href="../site/apiproctps.html">API ProcTPs</a></li>
<li id="apiproviders"><a href="../site/apiproviders.html">API Providers</a></li>
<li id="apiqueries"><a href="../site/apiqueries.html">API Queries</a></li>
<li id="apiquickpastecats"><a href="../site/apiquickpastecats.html">API QuickPasteCats</a></li>
<li id="apiquickpastenotes"><a href="../site/apiquickpastenotes.html">API QuickPasteNotes</a></li>
<li id="apirecalls"><a href="../site/apirecalls.html">API Recalls</a></li>
<li id="apirefattaches"><a href="../site/apirefattaches.html">API RefAttaches</a></li>
<li id="apireferrals"><a href="../site/apireferrals.html">API Referrals</a></li>
<li id="apireports"><a href="../site/apireports.html">API Reports</a></li>
<li id="apischeduleops"><a href="apischeduleops.html">API ScheduleOps</a></li>
<li id="apischedules"><a href="../site/apischedules.html">API Schedules</a></li>
<li id="apisecurity"><a href="../site/apisecurity.html">API SecurityPerms</a></li>
<li id="apisecuritylogs"><a href="../site/apisecuritylogs.html">API SecurityLogs</a></li>
<li id="apisheetdefs"><a href="../site/apisheetdefs.html">API SheetDefs</a></li>
<li id="apisheets"><a href="../site/apisheets.html">API Sheets</a></li>
<li id="apisheetfields"><a href="../site/apisheetfields.html">API SheetFields</a></li>
<li id="apisignalods"><a href="../site/apisignalods.html">API Signalods</a></li>
<li id="apisubscriptions"><a href="../site/apisubscriptions.html">API Subscriptions</a></li>
<li id="apisubstitutionlinks"><a href="../site/apisubstitutionlinks.html">API SubstitutionLinks</a></li>
<li id="apitasklists"><a href="../site/apitasklists.html">API TaskLists</a></li>
<li id="apitasks"><a href="../site/apitasks.html">API Tasks</a></li>
<li id="apitreatplanattaches"><a href="../site/apitreatplanattaches.html">API TreatPlanAttaches</a></li>
<li id="apitreatplans"><a href="../site/apitreatplans.html">API TreatPlans</a></li>
<li id="apiusergroups"><a href="apiusergroups.html">API UserGroups</a></li>
<li id="apiuserods"><a href="../site/apiuserods.html">API Userods</a></li>
</ul>
</ul>
<li class="collapse" id="usingodconversion"><div class="exptxt"><a href="usingodconversion.html">Use Converted Database</a></div>
<ul id="ul_usingodconversion">
<li id="convclaims"><a href="convclaims.html">Conversions: Outstanding Claims</a></li>
<li id="convclinicsunassigned"><a href="convclinicsunassigned.html">Conversions: Unassigned Clinics</a></li>
<li id="convduplicates"><a href="convduplicates.html">Conversions: Duplicate Patients</a></li>
<li id="convfutureappts"><a href="convfutureappts.html">Conversions: Overlapping Appointments</a></li>
<li id="convincometransfer"><a href="convincometransfer.html">Conversions: Family Balancer</a></li>
<li id="convinspending"><a href="convinspending.html">Conversions: Verify Insurance</a></li>
<li id="convperio"><a href="convperio.html">Conversions: Perio</a></li>
</ul>
<li class="collapse" id="countries"><div class="exptxt"><a href="../site/countries.html">International Customers</a></div>
<ul id="ul_countries">
<li class="collapse" id="canada"><div class="exptxt"><a href="canada.html">Canada</a></div>
<ul id="ul_canada">
<li class="collapse" id="canadaclaims"><div class="exptxt"><a href="canadaclaims.html">Canada Claims</a></div>
<ul id="ul_canadaclaims">
<li id="canadaetransedit"><a href="canadaetransedit.html">Canada Etrans Edit</a></li>
</ul>
<li id="canadaclaimsend"><a href="canadaclaimsend.html">Send Canadian Claims and Retrieve Reports</a></li>
<li id="canadaapptprocsquickadd"><a href="canadaapptprocsquickadd.html">Canada Definitions: Appt Procs Quick Add</a></li>
<li id="canadafeeschedules"><a href="canadafeeschedules.html">Canada Fee Guides</a></li>
<li id="canadageneral"><a href="canadageneral.html">Canada Install and Setup</a></li>
<li id="canadainscatsetup"><a href="canadainscatsetup.html">Canada Insurance Categories</a></li>
<li id="canadacarriers"><a href="canadacarriers.html">Canada Carriers</a></li>
<li id="canadainsplan"><a href="canadainsplan.html">Canada Insurance Plans</a></li>
<li id="canadalabfees"><a href="canadalabfees.html">Canada Lab Fees</a></li>
<li id="canadaproccodetools"><a href="canadaproccodetools.html">Canada Procedure Code Tools</a></li>
<li id="canadaprocedures"><a href="canadaprocedures.html">Edit Procedure Canada Tab</a></li>
<li id="canadaprovider"><a href="canadaprovider.html">Canada Provider Setup</a></li>
<li id="canadaproctimeunits"><a href="canadaproctimeunits.html">Canada Procedure Code Time Units</a></li>
<li id="canadarecalltypes"><a href="canadarecalltypes.html">Canada Recall Types</a></li>
<li id="canadareceipts"><a href="canadareceipts.html">Canada Receipts</a></li>
<li id="canadasetup"><a href="canadasetup.html">Register Canadian Providers for E-Claims</a></li>
<li id="cdadigitalcert"><a href="cdadigitalcert.html">CDA Digital IDs</a></li>
<li id="itrans"><a href="itrans.html">ITRANS</a></li>
<li id="itrans20"><a href="itrans20.html">ITRANS 2.0</a></li>
<li id="ccdws"><a href="ccdws.html">CCDWS Service</a></li>
<li id="claimstream"><a href="claimstream.html">Claimstream</a></li>
<li id="dac"><a href="dac.html">Denturist Association of Canada ( DAC )</a></li>
<li id="canadaattachments"><a href="canadaattachments.html">Canada Attachments</a></li>
</ul>
<li id="australia"><a href="../site/australia.html">Australia</a></li>
<li id="caribbean"><a href="../site/caribbean.html">Caribbean Licensing Issues</a></li>
<li id="regionlanguagesettings"><a href="regionlanguagesettings.html">Region and Language</a></li>
<li id="gdpr.html"><a href="../site/gdpr.html">General Data Protection Regulation ( GDPR )</a></li>
<li id="newzealand"><a href="../site/newzealand.html">New Zealand</a></li>
<li id="unitedkingdom"><a href="../site/unitedkingdom.html">United Kingdom</a></li>
</ul>
</ul>
</ul>
</ul>
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
						}"><option value="https://www.opendental.com/manual243/manual.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/manual.html" >v24.2</option><option value="https://www.opendental.com/manual241/manual.html" >v24.1</option><option value="https://www.opendental.com/manual233/manual.html" >v23.3</option><option value="https://www.opendental.com/manual232/manual.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/manual.html" >v23.1</option><option value="https://www.opendental.com/manual224/manual.html" >v22.4</option><option value="https://www.opendental.com/manual223/manual.html" >v22.3</option><option value="https://www.opendental.com/manual222/manual.html" >v22.2</option><option value="https://www.opendental.com/manual221/manual.html" >v22.1</option><option value="https://www.opendental.com/manual214/manual.html" >v21.4</option><option value="https://www.opendental.com/manual213/manual.html" >v21.3</option><option value="https://www.opendental.com/manual212/manual.html" >v21.2</option><option value="https://www.opendental.com/manual211/manual.html" >v21.1</option><option value="https://www.opendental.com/manual205/manual.html" >v20.5</option><option value="https://www.opendental.com/manual204/manual.html" >v20.4</option><option value="https://www.opendental.com/manual203/manual.html" >v20.3</option><option value="https://www.opendental.com/manual202/manual.html" >v20.2</option><option value="https://www.opendental.com/manual201/manual.html" >v20.1</option><option value="https://www.opendental.com/manual194/manual.html" >v19.4</option><option value="https://www.opendental.com/manual193/manual.html" >v19.3</option><option value="https://www.opendental.com/manual192/manual.html" >v19.2</option><option value="https://www.opendental.com/manual191/manual.html" >v19.1</option><option value="https://www.opendental.com/manual184/manual.html" >v18.4</option><option value="https://www.opendental.com/manual183/manual.html" >v18.3</option><option value="https://www.opendental.com/manual182/manual.html" >v18.2</option><option value="https://www.opendental.com/manual181/manual.html" >v18.1</option><option value="https://www.opendental.com/manual174/manual.html" >v17.4</option></select>
				</div>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="GeneralPageContent">
<p><a href="modules.html">Modules</a></p>
<p><a href="mainmenu.html">Main Menu</a></p>
<p><a href="toolbar.html">Main Toolbar</a></p>
<h2>How to Use the Manual</h2>
<p>Access the manual via the Open Dental website (<a href="../index.html">www.opendental.com</a>) or from within Open Dental, <a href="mainmenu.html">Main Menu</a>, Help: </p>
<p>Online Help - Contents: Opens this page.</p>
<p>Online Help - Index: Opens the <a href="../manual/searchmanual.html">Search</a> page.</p>
<p><img src="images/helpIcon.gif" width="43" height="31" style="margin-bottom: 0px"/> Customers on support may click the Help Icon at the top of each window within the Open Dental program to open the corresponding manual page. </p>
</div>
</div>
</body>
</html>```
