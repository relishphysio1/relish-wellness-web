export default function handler(req, res) {
  const body = "google-site-verification: google5d006f26e5daf13c.html";
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(body);
}
