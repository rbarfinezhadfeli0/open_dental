# File: ./www.opendental.com/site/SchemaRedirect﹖commlog.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Open Dental Software - Schema Documentation</title>

  <script>
    // Set version here.
    const version = '25-2';
    const base = `https://www.opendental.com/OpenDentalDocumentation${version}.xml`;

    // Meta-refresh to the base document (no fragment)
    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = `0; url=${base}`;
    document.head.appendChild(meta);

    (function() {
      // Grab the “raw” param
      const params = new URLSearchParams(window.location.search);
      const target = params.get('doc') || window.location.search.substring(1);

      // If we got a target, append it as a fragment instead of part of the filename
      const dest = target
        ? `${base}#${encodeURIComponent(target)}`
        : base;

      window.location.replace(dest);
    })();
  </script>
</head>
<body>
  <p>Redirecting to documentation…</p>
  <p>
    If you’re not redirected automatically to the schema documentation, 
    <a id="link" href="#">click here</a>.
  </p>
  <script>
    // Mirror the same logic for the fallback link
    const versioned = `https://www.opendental.com/OpenDentalDocumentation${version}.xml`;
    const params = new URLSearchParams(window.location.search);
    const target = params.get('doc') || window.location.search.substring(1);
    document.getElementById('link').href = 
      target
        ? `${versioned}#${encodeURIComponent(target)}`
        : versioned;
  </script>
</body>
</html>
```
