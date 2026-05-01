export default async function handler(req, res) {

  const url =
    "https://raw.githubusercontent.com/celiboy93/vpnkey/refs/heads/main/vpkey";

  const response =
    await fetch(url);

  const text =
    await response.text();

  res.setHeader(
    "Content-Type",
    "text/plain"
  );

  res.status(200).send(text);
}
