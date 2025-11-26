# File: ./www.opendental.com/manual232/unitedwayreports.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - United Way Reports</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('unitedwayreports','queryoverview','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/unitedwayreports.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/unitedwayreports.html" >v24.2</option><option value="https://www.opendental.com/manual241/unitedwayreports.html" >v24.1</option><option value="https://www.opendental.com/manual233/unitedwayreports.html" >v23.3</option><option value="https://www.opendental.com/manual232/unitedwayreports.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/unitedwayreports.html" >v23.1</option><option value="https://www.opendental.com/manual224/unitedwayreports.html" >v22.4</option><option value="https://www.opendental.com/manual223/unitedwayreports.html" >v22.3</option><option value="https://www.opendental.com/manual222/unitedwayreports.html" >v22.2</option><option value="https://www.opendental.com/manual221/unitedwayreports.html" >v22.1</option><option value="https://www.opendental.com/manual214/unitedwayreports.html" >v21.4</option><option value="https://www.opendental.com/manual213/unitedwayreports.html" >v21.3</option><option value="https://www.opendental.com/manual212/unitedwayreports.html" >v21.2</option><option value="https://www.opendental.com/manual211/unitedwayreports.html" >v21.1</option><option value="https://www.opendental.com/manual205/unitedwayreports.html" >v20.5</option><option value="https://www.opendental.com/manual204/unitedwayreports.html" >v20.4</option><option value="https://www.opendental.com/manual203/unitedwayreports.html" >v20.3</option><option value="https://www.opendental.com/manual202/unitedwayreports.html" >v20.2</option><option value="https://www.opendental.com/manual201/unitedwayreports.html" >v20.1</option><option value="https://www.opendental.com/manual194/unitedwayreports.html" >v19.4</option><option value="https://www.opendental.com/manual193/unitedwayreports.html" >v19.3</option><option value="https://www.opendental.com/manual192/unitedwayreports.html" >v19.2</option><option value="https://www.opendental.com/manual191/unitedwayreports.html" >v19.1</option><option value="https://www.opendental.com/manual184/unitedwayreports.html" >v18.4</option><option value="https://www.opendental.com/manual183/unitedwayreports.html" >v18.3</option><option value="https://www.opendental.com/manual182/unitedwayreports.html" >v18.2</option><option value="https://www.opendental.com/manual181/unitedwayreports.html" >v18.1</option><option value="https://www.opendental.com/manual174/unitedwayreports.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>United Way Reports</p></div>
<div class="GeneralPageContent">
<p>Below are some <a href="queryoverview.html"> Queries</a> that may be required for United Way. </p>
<h2>Active Patient count by age and gender for patients with first visit date in the date range</h2>
<p><span class="CourierFont">/*United Way Report. Active Patient count by age and gender for patients with first visit date in the date range*/<br />
SET @FromDate='2013-07-01', @ToDate='2013-09-30';<br />
SELECT (CASE WHEN (YEAR(CURDATE())-YEAR(Birthdate)) - (RIGHT(CURDATE(),5)&amp;lt;RIGHT(Birthdate,5))&amp;lt;120 <br />
THEN (YEAR(CURDATE())-YEAR(Birthdate)) - (RIGHT(CURDATE(),5)&amp;lt;RIGHT(Birthdate,5)) ELSE 'NONE' END)<br />
AS 'Age', <br />
p.Gender,<br />
COUNT(DISTINCT p.PatNum) AS 'Patients'<br />
FROM patient p <br />
WHERE p.PatStatus=0<br />
AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate<br />
GROUP BY Age, Gender <br />
ORDER BY Gender ASC,Birthdate DESC;<br /></span><br/></p>
<h2>Active Patient count by race for patients with first visit date in the date range</h2>
<p><span class="CourierFont">/*United Way Report. Active Patient count by race for patients with first visit date in the date range. ONLY FOR OD VERSIONS BEFORE 13.2*/<br />
 SET @FromDate='2014-01-01', @ToDate='2014-02-01';<br />
 SELECT p.Race,<br />
 COUNT(DISTINCT p.PatNum) AS 'Patients'<br />
 FROM patient p <br />
 WHERE p.PatStatus=0<br />
 AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate<br />
 GROUP BY p.Race<br />
 ORDER BY p.Race;</span><br/></p>
<h2>Active Patient count for patients with specific health problem with first visit date in the date range</h2>
<p><span class="CourierFont">/*United Way Report. Active Patient count for patients with specific health problem with first visit date in the date range. ONLY FOR OD VERSIONS BEFORE 13.2*/<br />
 SET @FromDate='2014-01-01', @ToDate='2014-02-01';<br />
 SET @ProblemName='%Cholera%';<br />
 SELECT (CASE WHEN d.DiseaseDefNum=0 THEN icd9.Description ELSE ddef.DiseaseName END) AS 'Problem',<br />
 COUNT(DISTINCT p.PatNum) AS 'Patients'<br />
 FROM patient p <br />
 INNER JOIN disease d ON d.PatNum=p.PatNum AND d.ProbStatus=0<br />
 LEFT JOIN diseasedef ddef ON ddef.DiseaseDefNum=d.DiseaseDefNum<br />
 LEFT JOIN icd9 ON icd9.ICD9Num=d.ICD9Num<br />
 WHERE p.PatStatus=0<br />
 AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate<br />
 AND ((d.DiseaseDefNum=0 AND icd9.Description LIKE @ProblemName) OR (d.DiseaseDefNum!=0 AND ddef.DiseaseName LIKE @ProblemName))</span><br/></p>
<h2>Active Patient count for patients with specific patfield value and first visit date in the date range</h2>
<p><span class="CourierFont">/*United Way Report. Active Patient count for patients with specific patfield value and first visit date in the date range*/<br />
 SET @FromDate='2014-01-01', @ToDate='2014-02-01';<br />
 SET @FieldName='%Occupation%', @FieldValue='%Dentist%';<br />
 SELECT pf.FieldName AS 'PatField',<br />
 pf.FieldValue AS 'FieldValue',<br />
 COUNT(DISTINCT p.PatNum) AS 'Patients'<br />
 FROM patient p <br />
 INNER JOIN patfield pf ON p.PatNum=pf.PatNum AND pf.FieldName LIKE @FieldName AND pf.FieldValue LIKE @FieldValue<br />
 WHERE p.PatStatus=0<br />
 AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate<br />
 GROUP BY pf.FieldName,pf.FieldValue<br />
 ORDER BY pf.FieldName,pf.FieldValue</span></p>
</div>
</div>
</body>
</html>```
