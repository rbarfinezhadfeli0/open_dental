# File: ./www.opendental.com/site/vendorsthirdparty.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Third-Party Vendors</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('vendorsthirdparty','vendorssupplementalservices','documentation')">
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
		<div class="TopBar2"><p>Third-Party Vendors</p></div>
		<div class="GeneralPageContent">
<p>This page explains the types of third-party vendors who interact with the Open Dental database and their current known status. Also see <a href="integrationtypes.html">Integration Types</a> for additional details. </p>
<p class="MarginBottomZero">The list on this page is a small subset of the hundreds of companies that interact with Open Dental. Many do not access data. For information on additional integrations or vendors, see: </p>
<ul class="MarginBottomGap">
<li><a href="programbridges.html">Program Bridges</a></li>
<li><a href="vendorssupplementalservices.html">Vendors - Supplemental Services and Products</a></li>
<li><a href="integrationsnative.html">Native Integrations</a></li>
<li><a href="0_clearinghouses.html">Clearinghouses</a></li>
<li><a href="aiimageanalysis.html">AI Image Analysis Integrations</a></li>
</ul>
<p>The vendors listed on this page offer supplemental products to Open Dental customers. We do not necessarily recommend any of these companies, nor do we provide technical support for their products or services.</p>
<p><b>Authorized Vendors: </b>These vendors are using an authorized integration, the Open Dental API. The Open Dental API is the approved method of writing to the database (such as creating an appointment or entering a payment). By utilizing the API, third-party developers ensure their programs continue to safely and securely integrate with Open Dental, even as new versions are released. </p>
<p><b>Authorized in Transition: </b>These vendors may have existing products in active transition to using the API or may be new products (or new product capabilities) in late-stage development. If the product writes to secured Open Dental database fields using (pre-existing) unapproved methods, then the developer must have an active contract allowing API usage and specifying a transition timeline to using the API for defined use cases. The developers of these products are in routine contact with Open Dental.</p>
<p><b>Dangerous/Unknown Vendors: </b>These vendors are using a possibly dangerous integration type. These types of integrations are dangerous because the third party writes directly to the Open Dental database, versus writing via the API which uses Open Dental code. Alternatively, these vendors may be using a plug-in that has not been whitelisted by Open Dental. These vendors should be avoided as they can harm your data, including patient data, and are not guaranteed to work as Open Dental releases new versions. These vendors can contact Open Dental for information on safe integrations or to be removed from this list if they are not writing to the Open Dental database.</p>
<p>If you believe a product is dangerous or not authorized, please email vendor.relations@opendental.com with details so that we may investigate.</p>
<h2>Integrations List</h2>
<p><table><tr><td><b>Authorized</b></td>
<td><b>Authorized In Transition</b></td>
<td><b>Dangerous/Unknown</b></td>
</tr>
<tr><td><a href="https://acrewdental.com/" target="_blank">Acrew</a></td>
<td>Dental Intelligence</td>
<td>Adit / Pozative</td>
</tr>
<tr><td><a href="https://allinone.dental/" target="_blank">All in One Dental</a></td>
<td>DentalPaas</td>
<td>Clover Connect</td>
</tr>
<tr><td><a href="http://analyzeceph.com/" target="_blank">AnalyzeCeph</a></td>
<td>DentTracks</td>
<td>Denti AI</td>
</tr>
<tr><td><a href="http://apedental.com/" target="_blank">APE</a></td>
<td>Intiveo</td>
<td>Enlive Dental</td>
</tr>
<tr><td><a href="https://www.apointoo.com/" target="_blank">Apointoo</a></td>
<td>Kasper</td>
<td>Jarvis Analytics</td>
</tr>
<tr><td><a href="https://www.assorthealth.com/" target="_blank">Assort Health</a></td>
<td>Moolah</td>
<td>Kolla</td>
</tr>
<tr><td><a href="https://www.getavora.ai/" target="_blank">Avora</a></td>
<td>PatientLoop</td>
<td>Lassie</td>
</tr>
<tr><td><a href="https://meetaxle.com/" target="_blank">Axle</a></td>
<td>PatientXpress</td>
<td>Legwork</td>
</tr>
<tr><td><a href="http://www.beacondso.com/" target="_blank">Beacon AI</a></td>
<td>ThirdVoice.ai</td>
<td>Lighthouse</td>
</tr>
<tr><td><a href="https://www.bearfoot.ai/" target="_blank">Bearfoot AI</a></td>
<td>Practice by Numbers</td>
<td>MConsent</td>
</tr>
<tr><td><a href="https://www.billnow.ai/#home" target="_blank">BillNow</a></td>
<td>Sikka AI</td>
<td>Nadapayments</td>
</tr>
<tr><td><a href="https://birdeye.com/" target="_blank">Birdeye</a></td>
<td></td>
<td>NexHealth</td>
</tr>
<tr><td><a href="https://www.certifyhealth.com/" target="_blank">Certify Health</a></td>
<td></td>
<td>Pay Proudly</td>
</tr>
<tr><td><a href="https://daydream.dental/" target="_blank">DayDream</a></td>
<td></td>
<td>PracticeDilly</td>
</tr>
<tr><td><a href="https://dentalbee.ai/" target="_blank">DentalBee</a></td>
<td></td>
<td>Practice Mojo</td>
</tr>
<tr><td><a href="https://www.dentalpayz.com/" target="_blank">DentalPayz</a></td>
<td></td>
<td>ScribeHealth.ai</td>
</tr>
<tr><td><a href="https://dentalrobot.ai/" target="_blank">DentalRobot</a></td>
<td></td>
<td>Stratus AI</td>
</tr>
<tr><td><a href="https://dentalassist.ai/" target="_blank">Dental Assist AI</a></td>
<td></td>
<td>Teamio</td>
</tr>
<tr><td><a href="https://dentalsymphony.com/" target="_blank">Dental Symphony</a></td>
<td></td>
<td>TopCard</td>
</tr>
<tr><td><a href="https://dentin.ai/" target="_blank">Dentin.ai</a></td>
<td></td>
<td>Treatment24Seven</td>
</tr>
<tr><td><a href="http://dntel.com/" target="_blank">Dntel</a></td>
<td></td>
<td>UseMyStats</td>
</tr>
<tr><td><a href="https://dentalbilling.com/" target="_blank">eAssist Dental Solutions</a></td>
<td></td>
<td>Verrific</td>
</tr>
<tr><td><a href="https://www.ebillerpr.com/" target="_blank">eBiller</a></td>
<td></td>
<td>Wellfit</td>
</tr>
<tr><td><a href="http://fintu.io/" target="_blank">FINTU</a></td>
<td></td>
<td>Yapi</td>
</tr>
<tr><td><a href="https://www.flex.dental/" target="_blank">Flex</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.foji.io/dental" target="_blank">Foji</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://gethelpdesk.ai/" target="_blank">GetHelpdesk.ai</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.kickcall.ai/integrations/opendental">KickCall AI</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.kitview.com/en" target="_blank">Kitview</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.leadsquared.com/healthcare/crm-for-dental-practices/" target="_blank">LeadSquared</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://getmaxassist.com/" target="_blank">MaxAssist</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="http://www.joinordo.com/" target="_blank">Ordo</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="http://paratushealth.com/" target="_blank">Paratus Health</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://phoneninjas.ai/" target="_blank">Phone Ninjas AI</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="http://www.practiceleads.com/" target="_blank">Practice Leads</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://dental.powervox.com/" target="_blank">Powervox</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.quantasuite.com/" target="_blank">QuantaSuite</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://revenuewell.com/" target="_blank">RevenueWell</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="http://seeuwell.com/" target="_blank">SeeUWell</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="http://www.solutionreach.com/" target="_blank">Solutionreach</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://subscribili.com/" target="_blank">Subscribili</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.tensorlinks.com/" target="_blank">Tensor Links</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://velmeni.ai/" target="_blank">Velmeni</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://verifixed.io/" target="_blank">Verifixed</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://vynedental.com/" target="_blank">Vyne Dental</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.toothy.ai/" target="_blank">Toothy AI</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.getweave.com/integration/open-dental/" target="_blank">Weave</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.withwisdom.com/?utm_medium=partner&amp;utm_campaign=opendental_site" target="_blank">Wisdom</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.zentist.io/" target="_blank">Zentist</a></td>
<td></td>
<td></td>
</tr>
<tr><td><a href="https://www.zocdoc.com/about/join" target="_blank">Zocdoc</a></td>
<td></td>
<td></td>
</tr>
</table>
</p>
<h2>For Vendors</h2>
<p>There are hundreds of enrolled API developers. We only list vendors who have an available product with a verified API status. If your company would like to be listed, or you believe you were incorrectly listed, please email vendor.relations@opendental.com. </p>
		</div>
	</div>
</body>
</html>```
