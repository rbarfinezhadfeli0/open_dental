Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

United Way Reports

Below are some  [Queries](queryoverview.html) that may be required for United Way.

## Active Patient count by age and gender for patients with first visit date in the date range

/\*United Way Report. Active Patient count by age and gender for patients with first visit date in the date range\*/
SET @FromDate='2013-07-01', @ToDate='2013-09-30';
SELECT (CASE WHEN (YEAR(CURDATE())-YEAR(Birthdate)) - (RIGHT(CURDATE(),5)&lt;RIGHT(Birthdate,5))&lt;120
THEN (YEAR(CURDATE())-YEAR(Birthdate)) - (RIGHT(CURDATE(),5)&lt;RIGHT(Birthdate,5)) ELSE 'NONE' END)
AS 'Age',
p.Gender,
COUNT(DISTINCT p.PatNum) AS 'Patients'
FROM patient p
WHERE p.PatStatus=0
AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate
GROUP BY Age, Gender
ORDER BY Gender ASC,Birthdate DESC;

## Active Patient count by race for patients with first visit date in the date range

/\*United Way Report. Active Patient count by race for patients with first visit date in the date range. ONLY FOR OD VERSIONS BEFORE 13.2\*/
SET @FromDate='2014-01-01', @ToDate='2014-02-01';
SELECT p.Race,
COUNT(DISTINCT p.PatNum) AS 'Patients'
FROM patient p
WHERE p.PatStatus=0
AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate
GROUP BY p.Race
ORDER BY p.Race;

## Active Patient count for patients with specific health problem with first visit date in the date range

/\*United Way Report. Active Patient count for patients with specific health problem with first visit date in the date range. ONLY FOR OD VERSIONS BEFORE 13.2\*/
SET @FromDate='2014-01-01', @ToDate='2014-02-01';
SET @ProblemName='%Cholera%';
SELECT (CASE WHEN d.DiseaseDefNum=0 THEN icd9.Description ELSE ddef.DiseaseName END) AS 'Problem',
COUNT(DISTINCT p.PatNum) AS 'Patients'
FROM patient p
INNER JOIN disease d ON d.PatNum=p.PatNum AND d.ProbStatus=0
LEFT JOIN diseasedef ddef ON ddef.DiseaseDefNum=d.DiseaseDefNum
LEFT JOIN icd9 ON icd9.ICD9Num=d.ICD9Num
WHERE p.PatStatus=0
AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate
AND ((d.DiseaseDefNum=0 AND icd9.Description LIKE @ProblemName) OR (d.DiseaseDefNum!=0 AND ddef.DiseaseName LIKE @ProblemName))

## Active Patient count for patients with specific patfield value and first visit date in the date range

/\*United Way Report. Active Patient count for patients with specific patfield value and first visit date in the date range\*/
SET @FromDate='2014-01-01', @ToDate='2014-02-01';
SET @FieldName='%Occupation%', @FieldValue='%Dentist%';
SELECT pf.FieldName AS 'PatField',
pf.FieldValue AS 'FieldValue',
COUNT(DISTINCT p.PatNum) AS 'Patients'
FROM patient p
INNER JOIN patfield pf ON p.PatNum=pf.PatNum AND pf.FieldName LIKE @FieldName AND pf.FieldValue LIKE @FieldValue
WHERE p.PatStatus=0
AND p.DateFirstVisit BETWEEN @FromDate AND @ToDate
GROUP BY pf.FieldName,pf.FieldValue
ORDER BY pf.FieldName,pf.FieldValue