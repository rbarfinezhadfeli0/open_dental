# File: ./www.opendental.com/manual232/apiasapcomms.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - API AsapComms</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apiasapcomms','apispecification','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/apiasapcomms.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/apiasapcomms.html" >v24.2</option><option value="https://www.opendental.com/manual241/apiasapcomms.html" >v24.1</option><option value="https://www.opendental.com/manual233/apiasapcomms.html" >v23.3</option><option value="https://www.opendental.com/manual232/apiasapcomms.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/apiasapcomms.html" >v23.1</option><option value="https://www.opendental.com/manual224/apiasapcomms.html" >v22.4</option><option value="https://www.opendental.com/manual223/apiasapcomms.html" >v22.3</option><option value="https://www.opendental.com/manual222/apiasapcomms.html" >v22.2</option><option value="https://www.opendental.com/manual221/apiasapcomms.html" >v22.1</option><option value="https://www.opendental.com/manual214/apiasapcomms.html" >v21.4</option><option value="https://www.opendental.com/manual213/apiasapcomms.html" >v21.3</option><option value="https://www.opendental.com/manual212/apiasapcomms.html" >v21.2</option><option value="https://www.opendental.com/manual211/apiasapcomms.html" >v21.1</option><option value="https://www.opendental.com/manual205/apiasapcomms.html" >v20.5</option><option value="https://www.opendental.com/manual204/apiasapcomms.html" >v20.4</option><option value="https://www.opendental.com/manual203/apiasapcomms.html" >v20.3</option><option value="https://www.opendental.com/manual202/apiasapcomms.html" >v20.2</option><option value="https://www.opendental.com/manual201/apiasapcomms.html" >v20.1</option><option value="https://www.opendental.com/manual194/apiasapcomms.html" >v19.4</option><option value="https://www.opendental.com/manual193/apiasapcomms.html" >v19.3</option><option value="https://www.opendental.com/manual192/apiasapcomms.html" >v19.2</option><option value="https://www.opendental.com/manual191/apiasapcomms.html" >v19.1</option><option value="https://www.opendental.com/manual184/apiasapcomms.html" >v18.4</option><option value="https://www.opendental.com/manual183/apiasapcomms.html" >v18.3</option><option value="https://www.opendental.com/manual182/apiasapcomms.html" >v18.2</option><option value="https://www.opendental.com/manual181/apiasapcomms.html" >v18.1</option><option value="https://www.opendental.com/manual174/apiasapcomms.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>API AsapComms</p></div>
<div class="GeneralPageContent">
<p>See <a href="../site/apispecification.html">API Specification</a></p>
<p>AsapComms is used by the Web Sched ASAP feature to quickly send text messages to patients on the ASAP List about last minuet appointment openings. See <a href="webschedasap.html">Web Sched ASAP</a>, <a href="webschedasaphistory.html">Web Sched ASAP History</a>, and <a href="webschedasappatientsees.html">Web Sched ASAP: What Patient Sees</a> for more information.</p>
<h2>AsapComms GET (single)</h2>
<p>Version Added: <span style="color:red">In Development for: 23.3.01</span></p>
<p>Gets a single asapcomm.</p>
<p><b>Parameters:</b></p>
<p><b>AsapCommNum: </b> Required in the URL.<br/></p>
<p><b>Example Request:</b><br/> GET /asapcomms/192<br/></p>
<b>Example Response:</b><br/><p><span class="codeblock"> {<br/> "AsapCommNum": 192,<br/> "FKey": 539,<br/> "FKeyType": "ScheduledAppt",<br/> "ScheduleNum": 3523,<br/> "PatNum": 1771,<br/> "ClinicNum": 1,<br/> "DateTimeEntry": "2023-08-24 10:04:14",<br/> "DateTimeExpire": "2023-09-20 09:00:00",<br/> "DateTimeSmsScheduled": "2023-09-14 10:04:14",<br/> "SmsSendStatus": "SendSuccessful",<br/> "DateTimeSmsSent": "2023-09-14 10:04:14",<br/> "ResponseStatus": "PendingRsvp",<br/> "DateTimeOrig": "2023-09-26 10:00:00",<br/> "TemplateText": "[NameF], an appointment opening has become available on 08/28/2023 at 2:00 PM at SouthSide Dental. Visit [AsapURL] to reserve it.",<br/> "Note": ""<br/> }<br/></span></p>
<p></p>
<p> 200 OK <br/> 404 NotFound (with explanation)<br/></p>
<h2>AsapComms GET (multiple)</h2>
<p>Version Added: <span style="color:red">In Development for: 23.3.01</span></p>
<p>Gets a list of asapcomms.</p>
<p><b>Parameters:</b> All Optional.</p>
<p><b>ClinicNum: </b> FK to clinic.ClinicNum. The clinic that is sending the AsapComms.<br/><b>date: </b>For a single day. String in "yyyy-mm-dd" format.<br/><b>dateStart, dateEnd: </b>For a date range, inclusive of both dates. String in "yyyy-mm-dd" format. Default is the last 7 days.<br/><b>dateStart: </b>Only return asapcomms with a DateTimeEntry after this date. String in "yyyy-mm-dd" format. Default is the last 7 days.<br/><b>dateEnd: </b>Only return asapcomms with a DateTimeEntry before this date. String in "yyyy-mm-dd" format. Default is today at midnight.<br/></p>
<p><b>Example Request:</b><br/> GET /asapcomms?ClinicNum=4<br/> GET /asapcomms?ClinicNum=4&amp;date=2023-09-14<br/> GET /asapcomms?ClinicNum=4&amp;dateStart=2023-09-01&amp;dateEnd=2023-09-14<br/></p>
<b>Example Response:</b><br/><p><span class="codeblock"> [<br/> {<br/> "AsapCommNum": 1224,<br/> "FKey": 11543,<br/> "FKeyType": "ScheduledAppt",<br/> "ScheduleNum": 13651,<br/> "PatNum": 11775,<br/> "ClinicNum": 4,<br/> "DateTimeEntry": "2023-09-01 10:04:25",<br/> "DateTimeExpire": "2023-09-08 10:00:00",<br/> "DateTimeSmsScheduled": "0001-01-01 00:00:00",<br/> "SmsSendStatus": "DoNotSend",<br/> "DateTimeSmsSent": "0001-01-01 00:00:00",<br/> "ResponseStatus": "UnableToSend",<br/> "DateTimeOrig": "2023-09-24 10:00:00",<br/> "TemplateText": "[NameF], an appointment opening has become available on 09/04/2023 at 2:00 PM at NorthSide Dental. Visit [AsapURL] to reserve it.",<br/> "Note": "Not sending text because the patient has opted out of automated messaging."<br/> },<br/> {<br/> "AsapCommNum": 1225,<br/> "FKey": 11642,<br/> "FKeyType": "UnscheduledAppt",<br/> "ScheduleNum": 13619,<br/> "PatNum": 11774,<br/> "ClinicNum": 4,<br/> "DateTimeEntry": "2023-09-01 10:04:25",<br/> "DateTimeExpire": "2023-09-08 10:00:00",<br/> "DateTimeSmsScheduled": "2023-09-01 10:04:25",<br/> "SmsSendStatus": "SendSuccessful",<br/> "DateTimeSmsSent": "2023-09-01 10:04:25",<br/> "ResponseStatus": "PendingRsvp",<br/> "DateTimeOrig": "2023-10-25 09:00:00",<br/> "TemplateText": "[NameF], an appointment opening has become available on 09/04/2023 at 2:00 PM at NorthSide Dental. Visit [AsapURL] to reserve it.",<br/> "Note": ""<br/> },<br/> {<br/> "AsapCommNum": 1226,<br/> "FKey": 11836,<br/> "FKeyType": "PlannedAppt",<br/> "ScheduleNum": 3459,<br/> "PatNum": 11768,<br/> "ClinicNum": 4,<br/> "DateTimeEntry": "2023-09-01 10:04:25",<br/> "DateTimeExpire": "2023-09-08 10:00:00",<br/> "DateTimeSmsScheduled": "2023-09-01 10:06:25",<br/> "SmsSendStatus": "DoNotSend",<br/> "DateTimeSmsSent": "2023-09-01 10:06:25",<br/> "ResponseStatus": "Failed",<br/> "DateTimeOrig": "2023-10-21 10:00:00",<br/> "TemplateText": "[NameF], an appointment opening has become available on 09/04/2023 at 2:00 PM at NorthSide Dental. Visit [AsapURL] to reserve it.",<br/> "Note": "Not sending because the time slot has been taken by another appointment."<br/>  },<br/> ect.<br/> ]<br/></span></p>
<p></p>
<p> 200 OK <br/> 400 BadRequest (with explanation)<br/> 404 NotFound (with explanation)<br/></p>
<h2>AsapComms POST (Insert)</h2>
<p>Version Added: <span style="color:red">In Development for: 23.3.01</span></p>
<p><span style="color:red">Rarely used. Dental office must be subscribed to the following eServices: </span><a href="../site/websched.html">WebSched ASAP</a><span style="color:red"> and </span><a href="../site/textintegrated.html">Integrated Texting Feature</a>. </p>
<p>Creates an AsapComm, and a Web Sched ASAP Blockout. See <a href="webschedasap.html">Web Sched ASAP</a>, and <a href="asapmsgs.html">ASAP Message Setup</a> for more information. The End Time is calculated from the pattern of the appointment. Will not schedule if the new appointment would overlap with an existing appointment or blockout that does not allow overlap.</p>
<p>Prior to running this method, obtain the <b>aptNum</b> of the appointment with Appointments GET ASAP. Then use Appointments GET Slots or Appointments GET (multiple) along with Schedules GET (multiple) to obtain an available time slot for the <b>dateTimeStart</b> and <b>op</b> for the ASAP Appointment.</p>
<p><b>aptNum: </b>Required. FK to appointment.AptNum. Appointment.Priority must be 1 (ASAP).<br/><b>op: </b>Required. FK to operatory.OperatoryNum.<br/><b>dateTimeStart: </b>Required. The Start Time of the appointment. String in "yyyy-MM-dd HH:mm:ss" format. <br/></p>
<p><b>Example Request:</b><br/> POST /asapcomms<br/></p>
<p><span class="codeblock"> {<br/> "aptNum": 11939,<br/> "op": 2,<br/> "dateTimeStart": "2023-10-18 14:00:00"<br/> }<br/></span></p>
<p><b>Example Response:</b><br/><span class="codeblock"> {<br/> "AsapCommNum": 2374,<br/> "FKey": 11939,<br/> "FKeyType": "Broken",<br/> "ScheduleNum": 52527,<br/> "PatNum": 6522,<br/> "ClinicNum": 4,<br/> "DateTimeEntry": "2023-10-16 09:01:25",<br/> "DateTimeExpire": "2023-10-25 14:00:00",<br/> "DateTimeSmsScheduled": "2023-10-16 09:01:25",<br/> "SmsSendStatus": "SendNotAttempted",<br/> "DateTimeSmsSent": "0001-01-01 00:00:00",<br/> "ResponseStatus": "AwaitingTransmit",<br/> "DateTimeOrig": "2023-10-31 16:00:00",<br/> "TemplateText": "[NameF], an appointment opening has become available on 10/18/2023 at 2:00 PM at Southern Office. Visit [AsapURL] to reserve it.",<br/> "Note": ""<br/> }<br/></span></p>
<p>200 OK<br/> 400 BadRequest (with explanation)<br/> 404 NotFound (with explanation)<br/></p>
</div>
</div>
</body>
</html>```
