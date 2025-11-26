# File: ./www.opendental.com/site/apiguideevents.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Guide - Subscriptions and Events</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiguideevents','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Guide - Subscriptions and Events</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="apievents.html">API Events</a> are webhooks sent to a developer's webhook site when certain changes occur in Open Dental. There are two types of ApiEvents:</p>
<p><li>UI Events occur when a user has taken a certain action on their workstation. For example, the PatientSelected event will fire whenever a new patient is selected within an instance of Open Dental.</li>
<li>Database Events occur when any column has changed in a specific database table. This change could be made through an instance of Open Dental or the API Service.</li>
</p>
<p><a href="apisubscriptions.html">API Subscriptions</a> are how developers subscribe to receive ApiEvent webhooks. They are highly customizable to suit the needs of many different implementations.</p>
<p>You can use a simple webhook site for initial testing, such as Webhook.site or similar.</p>
<h2>Subscribing to an Event</h2>
<p class="MarginBottomZero">This example will subscribe to the Appointment table, which will fire Database Events. This can be used to keep a list of appointments up to date: </p>
<ol class="MarginBottomGap">
<li>Create a Subscription.</li>
<ul>
<li>Use the Subscriptions POST API method to create the subscription. Include a JSON body similar to what is shown below, but be sure to use your current machine name for the Workstation field:<br><p class="codeblock">{<br>  "EndPointUrl": "https://myserver/apievents/",<br>  "Workstation": "MOLLYR", <br>  "WatchTable": "Appointment",<br>  "PollingSeconds": 5 <br>  }<br></p></li>
<li>Your return result will look like this:<br><p class="codeblock">{<br>  "SubscriptionNum": 1,<br>  "EndPointUrl": "https://myserver/apievents/",<br>  "Workstation": "MOLLYR", <br>  "CustomerKey": /*YourCustomerAPIKey*/,<br>  "WatchTable": "Appointment",<br>  "PollingSeconds": 5,<br>  "UiEventType": "",<br>  "DateTimeStart": "2022-11-28 15:04:31",<br>  "DateTimeStop": "0001-01-01 00:00:00",<br>  "Note": ""<br>  }<br></p></li>
<li>Note that the CustomerKey field is derived from the Authorization header of the API request and DateTimeStart is set to the moment the Subscription was created. This particular subscription will cause any instances of Open Dental or the API Service on the passed in Workstation to send a webhook to your EndPointUrl when a change has been made to this customer's appointment table. Subscriptions are stored in the dental office database in the ApiSubscription table.</li>
</ul>
<li>Process the Subscription.</li>
<ul>
<li>There are two ways a Subscription can be processed:<br><ul>
<li>OpenDental.exe running on a workstation can process both UI and Database Events.</li>
<li>OpenDentalAPIService.exe running on a server can only process Database Events (no UI).</li>
</ul>
</li>
<li>Our example will walk through this first option, so launch OpenDental.exe on the machine specified in the Subscription from Step 1.</li>
<li>At the interval specified in your subscription's PollingSeconds, Open Dental will look for changes that occurred in the WatchTable since the DateTimeStart. In our example, the following occurs:  <ol>
<li>Examine all subscriptions that apply to the current workstation ("MOLLYR") or all workstations (left blank, "").</li>
<li>Exclude any expired subscriptions (DateTimeStop field is before the current time).</li>
<li>Determine if it is time to check the database for changes. This is true when the current time is equal to or later than DateTimeStart + PollingSeconds (2022-11-28 15:04:31 + 00:00:05).</li>
<li>Open Dental will query the appointment table for rows with DateTStamp values equal to or greater than DateTimeStart (2022-11-28 15:04:31)</li>
<li>If any rows meet these criteria, a webhook containing these rows is sent to your EndPointUrl.</li>
</ol>
</li>
</ul>
</ol>
<h2>Sending the Event</h2>
<p>Now we will make a change to the appointment table of this database to trigger an event. This change can occur in two ways:</p>
<p><li>Through the API's Appointments PUT and POST methods. All <a href="apilocal.html">API Modes</a> will trigger an event.</li>
<li>Through OpenDental.exe on a workstation. Any change made on any workstation will trigger an event.</li>
</p>
<p>This example will demonstrate both. First make a new appointment with the API using Appointments POST:</p>
<p><p class="codeblock"> {<br> "PatNum": 10,<br> "AptDateTime": "2022-12-02 13:30:00",<br> "Op": 1<br> }<br></p></p>
<p>Your request will return a response including all the information pertaining to this new appointment. Check your webhook service for this new event. Its body will be identical to the JSON returned in your API request. If you do not see this event, see the Troubleshooting section at the end of this guide.</p>
<p>Now we will edit this appointment within Open Dental to trigger an event. In the Appointment Module, double click on the appointment we just created. Any change made to the appointment will cause an event to fire, but let's update the Confirmed field to "Confirmed". Click OK to save your changes and fire an event. On your webhook site, the body of this event will be identical to the first except for the updated Confirmed field.</p>
<h2>Additional Notes</h2>
<p><li>An API Event will not fire if there is nothing to send; they will be sent only when a change has occurred.</li>
<li>Only one API Event will fire per PollingSeconds interval per Subscription. In the above example, if three appointments were added in our 5 second interval, a single event will fire. This event will contain the list of three appointments.</li>
<li>When a Subscription is processed, the DateTimeStart is updated to the current time. Therefore, you can see that the subscription is active/being processed because this field will be incremented by PollingSeconds. This incrementing occurs regardless of if there were changes requiring an event to be fired.</li>
<li>The Workstation specified in the Subscription is important. If the field is left blank, all instances of Open Dental will fire the same database event (duplicates). Most subscriptions for Database Events will specify a workstation. Because the API Service can fire database events, we recommend setting the Subscription.Workstation to the machine on which it is installed. This has the added benefit of processing subscriptions/firing events during the off hours when typical workstations are not running Open Dental.</li>
<li>UI Events fire immediately and do no utilize a PollingSeconds parameter. Most subscriptions for UI Events are used for applications installed on each workstation. Therefore, these developers will likely leave the Workstation field blank (so that all machines fire) and use an EndPointUrl containing "localhost".</li>
<li>The EndPointUrl of the Subscription can be used in a multitude of ways. Query parameters can be included in this string that your webhook service can use in its parsing logic such as "https://myserver/apievents?type=patientdb".</li>
<li>The name of the machine that sent the event can be found in the "Workstation" header as of version 22.4.28. Similarly, the type of event fired (e.g. "WatchTable: Appointment") can be found in the "Event-Type" header starting in 22.4.35.</li>
</p>
<h2>Troubleshooting</h2>
<p>Unable to see an event on your webhook service:</p>
<p><li>Ensure an instance of OpenDental.exe or OpenDentalAPIService.exe is running to process the subscription.</li>
<li>Ensure the Subscription's Workstation either matches the name of the machine running Open Dental or the API Service, or is blank. Events will not fire if there is a mismatch.</li>
<li>For Database Events, use Subscriptions GET a few times to see that the DateTimeStart is incremented by PollingSeconds. This will not occur if there is an issue processing the subscription due to the above reasons.</li>
<li>For Database Events, make sure the action you are performing actually changes the database. Updating an Appointment's Confirmed status from "Unconfirmed" to "Unconfirmed" does not actually change the data in the appointment table, and an event will not fire.</li>
<li>Similarly, selecting the same patient repeatedly will not fire the PatientSelected UI Event.</li>
<li>Ensure the EndPointUrl of your Subscription is accurate. Check the documentation of your webhook service for required formatting. Support for some characters (such as trailing '/') varies widely.</li>
</p>
<p>Seeing duplicate events:</p>
<p><li>Ensure the Subscription's Workstation specifies a machine name for Database Events. Leaving this field blank will cause all instances of Open Dental at the dental office to fire the same event.</li>
<li>If a Workstation is specified, make sure there is only one instance of Open Dental open on the machine processing subscriptions. Having an instance of Open Dental and the API Service running on the specified machine would also produce this result.</li>
</p>
		</div>
	</div>
</body>
</html>```
