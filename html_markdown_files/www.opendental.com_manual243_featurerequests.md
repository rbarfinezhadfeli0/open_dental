# File: ./www.opendental.com/manual243/featurerequests.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Feature Requests</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('featurerequests','+help','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/featurerequests.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/featurerequests.html" >v24.2</option><option value="https://www.opendental.com/manual241/featurerequests.html" >v24.1</option><option value="https://www.opendental.com/manual233/featurerequests.html" >v23.3</option><option value="https://www.opendental.com/manual232/featurerequests.html" >v23.2</option><option value="https://www.opendental.com/manual231/featurerequests.html" >v23.1</option><option value="https://www.opendental.com/manual224/featurerequests.html" >v22.4</option><option value="https://www.opendental.com/manual223/featurerequests.html" >v22.3</option><option value="https://www.opendental.com/manual222/featurerequests.html" >v22.2</option><option value="https://www.opendental.com/manual221/featurerequests.html" >v22.1</option><option value="https://www.opendental.com/manual214/featurerequests.html" >v21.4</option><option value="https://www.opendental.com/manual213/featurerequests.html" >v21.3</option><option value="https://www.opendental.com/manual212/featurerequests.html" >v21.2</option><option value="https://www.opendental.com/manual211/featurerequests.html" >v21.1</option><option value="https://www.opendental.com/manual205/featurerequests.html" >v20.5</option><option value="https://www.opendental.com/manual204/featurerequests.html" >v20.4</option><option value="https://www.opendental.com/manual203/featurerequests.html" >v20.3</option><option value="https://www.opendental.com/manual202/featurerequests.html" >v20.2</option><option value="https://www.opendental.com/manual201/featurerequests.html" >v20.1</option><option value="https://www.opendental.com/manual194/featurerequests.html" >v19.4</option><option value="https://www.opendental.com/manual193/featurerequests.html" >v19.3</option><option value="https://www.opendental.com/manual192/featurerequests.html" >v19.2</option><option value="https://www.opendental.com/manual191/featurerequests.html" >v19.1</option><option value="https://www.opendental.com/manual184/featurerequests.html" >v18.4</option><option value="https://www.opendental.com/manual183/featurerequests.html" >v18.3</option><option value="https://www.opendental.com/manual182/featurerequests.html" >v18.2</option><option value="https://www.opendental.com/manual181/featurerequests.html" >v18.1</option><option value="https://www.opendental.com/manual174/featurerequests.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Feature Requests</p></div>
<div class="GeneralPageContent">
<p>The Feature Request system is a unique tool that allows offices to vote on features they want in Open Dental.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Help, <b>Request Features</b>. </p>
<img src="images/featureRequestList.png" width="884" height="411"/><p> Every office can vote on requests and submit new requests. The voting process takes time but helps us prioritize requested features. Open Dental does not supply estimates on when a Feature Request might be implemented or guarantee that every request will become a feature.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our QuickTip Video: <a href="https://youtu.be/FUZ3QTxqrkc">Feature Requests</a></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Search terms</b>: Enter a search term or Request Number. Leave field blank to view all requests. Click <b>Search</b> to update results in the Feature Requests grid.</li>
<li><b>Mine</b>: Only search for requests created by your office. </li>
<li><b>My Votes</b>: Only search for requests your office has voted on.</li>
<li><b>Add</b>: Click to add a new request. See the following Add a New Request for details.</li>
</ul>
<p>Click a column to sort results.</p>
<h2>View or Vote on a Request</h2>
<p>Double-click an existing request to view details.</p>
<img src="images/featureRequest.png" width="885" height="397"/><p class="MarginBottomZero">My Votes: Use the My Votes section to vote on a Feature Request. </p>
<ul class="MarginBottomGap">
<li><b>Points</b>: Enter the number of votes to apply to the request. The office can edit points on features not currently marked <i>InProgress</i>. Any points voted to <i>InProgress</i> features are unavailable and are automatically returned to <i>Points Remaining</i> once the feature is complete.</li>
<li><b>Points Remaining</b>: Total number of voting points not currently allocated to Feature Requests. Each office is given 100 points to start.</li>
<li><b>Is Critical</b>: Check to mark feature as critical. Each office can mark up to two Feature Requests as critical. </li>
</ul>
<p></p>
<p class="MarginBottomZero">Totals: These are the totals of all votes and criticals from all Open Dental users. </p>
<ul class="MarginBottomGap">
<li><b>Points</b>: The total number of votes allocated to this Feature Request.</li>
<li><b>Is Critical</b>: The total number of offices that have marked this request as critical.</li>
<li><b>Weight</b>: An internal calculation used by Open Dental Headquarters (HQ) to determine the value of a Feature Request.</li>
</ul>
<p class="MarginBottomZero">Discussion: Users can add notes about the request. These notes are not monitored but are useful for clarity or encouragement. </p>
<ul class="MarginBottomGap">
<li><b>Save</b>: Type notes then click to add to the Feature Request. We suggest prepending the note with a name. </li>
</ul>
<h2>Add a New Request</h2>
<p>Click <b>Add</b> to create a new request. Before creating a new request, be sure to search for an existing request to avoid duplicates.</p>
<img src="images/featureRequestAdd.png" width="885" height="308"/><p><b>Short Description</b>: Enter a brief description of the request.</p>
<p><b>Detail</b>: Enter details about the request. Add plenty of detail to help Open Dental HQ fully understand the request. </p>
<p class="MarginBottomZero">My Votes: Shows details about feature request votes for this request.  </p>
<ul class="MarginBottomGap">
<li><b>Points</b>: Add points (votes) to the request. </li>
<li>Use the <i>Points Remaining</i> to determine how many votes to allocate to the request. </li>
<li>Check <b>Is Critical</b> to denote the request as critical.</li>
</ul>
<p>Review the Feature Request information and make changes as needed. Only <i>My Votes</i> can be edited once the request is submitted</p>
<p>Click <b>Save</b> to submit the request.</p>
<h2>Improving Feature Request Visibility</h2>
<p class="MarginBottomZero">To increase the chances of the Feature Request being implemented, use this system to your advantage: </p>
<ol class="MarginBottomGap">
<li>Vote for your request. If there are no votes, then the request cannot be seen by anyone else.</li>
<li>Mark it critical.</li>
<li>Use the Open Dental Community (User Forum, Facebook User Group, etc) to promote your feature and get others interested in voting for it.</li>
</ol>
</div>
</div>
</body>
</html>```
