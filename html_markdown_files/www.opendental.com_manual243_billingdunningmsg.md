# File: ./www.opendental.com/manual243/billingdunningmsg.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dunning Messages</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('billingdunningmsg','billing','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/billingdunningmsg.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/billingdunningmsg.html" >v24.2</option><option value="https://www.opendental.com/manual241/billingdunningmsg.html" >v24.1</option><option value="https://www.opendental.com/manual233/billingdunningmsg.html" >v23.3</option><option value="https://www.opendental.com/manual232/billingdunningmsg.html" >v23.2</option><option value="https://www.opendental.com/manual231/billingdunningmsg.html" >v23.1</option><option value="https://www.opendental.com/manual224/billingdunningmsg.html" >v22.4</option><option value="https://www.opendental.com/manual223/billingdunningmsg.html" >v22.3</option><option value="https://www.opendental.com/manual222/billingdunningmsg.html" >v22.2</option><option value="https://www.opendental.com/manual221/billingdunningmsg.html" >v22.1</option><option value="https://www.opendental.com/manual214/billingdunningmsg.html" >v21.4</option><option value="https://www.opendental.com/manual213/billingdunningmsg.html" >v21.3</option><option value="https://www.opendental.com/manual212/billingdunningmsg.html" >v21.2</option><option value="https://www.opendental.com/manual211/billingdunningmsg.html" >v21.1</option><option value="https://www.opendental.com/manual205/billingdunningmsg.html" >v20.5</option><option value="https://www.opendental.com/manual204/billingdunningmsg.html" >v20.4</option><option value="https://www.opendental.com/manual203/billingdunningmsg.html" >v20.3</option><option value="https://www.opendental.com/manual202/billingdunningmsg.html" >v20.2</option><option value="https://www.opendental.com/manual201/billingdunningmsg.html" >v20.1</option><option value="https://www.opendental.com/manual194/billingdunningmsg.html" >v19.4</option><option value="https://www.opendental.com/manual193/billingdunningmsg.html" >v19.3</option><option value="https://www.opendental.com/manual192/billingdunningmsg.html" >v19.2</option><option value="https://www.opendental.com/manual191/billingdunningmsg.html" >v19.1</option><option value="https://www.opendental.com/manual184/billingdunningmsg.html" >v18.4</option><option value="https://www.opendental.com/manual183/billingdunningmsg.html" >v18.3</option><option value="https://www.opendental.com/manual182/billingdunningmsg.html" >v18.2</option><option value="https://www.opendental.com/manual181/billingdunningmsg.html" >v18.1</option><option value="https://www.opendental.com/manual174/billingdunningmsg.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dunning Messages</p></div>
<div class="GeneralPageContent">
<p>In <a href="billing.html">Billing</a>, at the right, below the Dunning Messages grid, click <b>Setup Dunning</b>.</p>
<img src="images/dunningMsgSetup.png" width="915" height="367"/><p>Dunning Messages are notes and email messages that show on <a href="billing.html">Billing</a> statements generated via the <a href="billinglist.html">Billing List</a>. The messages are generated based on account aging, insurance pending, Billing Type, or a combination of these criteria.</p>
<h2>Filters</h2>
<p>Filters apply to Dunning Messages listed in the Messages box to the right.</p>
<img src="images/dunningMsgFilter.png" width="446" height="272"/><p><b>Billing Type</b>: Select the Billing Types assigned to Dunning Messages. CTRL + Click to choose multiple Billing Types. Billing Types are set up in <a href="definitionsbillingtypes.html">Definitions: Billing Types</a>.</p>
<p><b>Clinic</b>: Select to view Dunning Messages assigned to a specific clinic. Clinic-restricted users can view Dunning Messages assigned to their accessible clinic(s) only.</p>
<p><b>Age of Account</b>: Select the age of account assigned to the Dunning Messages. Filters for an exact match, except when Any Balance is selected (e.g., if filtering Over 60 Days results show only Dunning Messages with aging of Over 60 Days, does not include Over 90 Days)</p>
<p><b>Days in Adv</b>: Filter by Days in Adv assigned to Dunning Message. Filters for an exact match.</p>
<p><b>Insurance Payment Pending</b>: Filter by Insurance Payment Pending status of Dunning Message. Selecting <i>Doesn't Matter</i> returns messages with any status assigned. </p>
<p></p>
<h2>Messages</h2>
<p class="MarginBottomZero">Messages that meet the filter criteria are listed. Dunning Messages can be filtered by clinic then sorted by criteria complexity: messages with more general criteria appear higher in the list and messages with stricter criteria appear lower. The first message that matches the billing criteria is used, starting from the bottom up (lower listed messages take precedence).  </p>
<ul class="MarginBottomGap">
<li>Only one Dunning Message is used on any bill.</li>
<li>The Dunning Message Email Statement template overrides the Billing Defaults, Email Statements template.</li>
<li>If a Billing Defaults, General Message exists, it appears on the statement note above any Dunning Message.</li>
<li>Dunning Messages do not show when a <a href="statement.html">Single Statement</a> is generated.</li>
</ul>
<img src="images/dunningMsgList.png" width="647" height="402"/><p>Double-click an existing Dunning Message to edit it.</p>
<p><b>Add</b>: Click to create a new Dunning Message.</p>
<p><b>Duplicate</b>: Select an existing Dunning Message and click to create a duplicate.</p>
<h2>Add or Edit Dunning Messages</h2>
<p>Dunning Messages can be used to put a specific message on statements that meet specific criteria. Click <b>Add</b> to create a new Dunning Message from blank or double-click an existing Dunning Message to open the <i>Edit Dunning Message</i> window.<b></b></p>
<p>In the screenshot below is an example of a Dunning Message set up for a precollections warning in the statement bold note for accounts aged over 90 days with the Dunning Message to include a precollections email message.</p>
<img src="images/dunningMsgEdit.png" width="910" height="556"/><p><b>Billing Type</b>: Highlight the Billing Type(s) to assign the message to. Billing Type is set on the <a href="patientedit.html">Edit Patient Information</a>.</p>
<p><b>Age of Account</b>: Select the account age the message applies to. See <a href="aging.html">Aging</a> for details about how aging is calculated. <p><b>Days in Adv</b>: Enter a value to trigger the Dunning Message a certain number of days before an account reaches an aging bucket. If 0, the message is triggered at day 30, 60, or 90, depending on age of account selected.</p>
</p>
<p class="MarginBottomZero"><b>Insurance Payment Pending</b>: Select whether to include patients who have insurance payments pending.  </p>
<ul class="MarginBottomGap">
<li>Doesn't Matter: Dunning Message applies regardless if patient has outstanding insurance claims or not.</li>
<li>Yes: Dunning Message only applies is patient has outstanding insurance claims.</li>
<li>No: Dunning Message applies if patient has no outstanding insurance claims.</li>
</ul>
<p class="MarginBottomZero"><b>Statement Notes</b>:The messages that appears on statements. To edit placement of statement notes, See <a href="statementsheets.html">Statement Layout</a>. </p>
<ul class="MarginBottomGap">
<li>Message: Appears once at the bottom of the statement. </li>
<li>Bold Message: Appears in bold red at the top and bottom of the statement.</li>
</ul>
<p><b>Super Family</b>: Check this box if the Dunning Message only applies to superfamily heads.</p>
<p><b>Clinic</b>: Select the Clinic this Dunning Message applies to.</p>
<p><b>Email Statement Override</b>: Enter the subject and/or message body for emailed statements. Variables can be used. This message overrides the Billing Defaults email message.</p>
</div>
</div>
</body>
</html>```
