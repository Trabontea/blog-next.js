export default function existPreview(_, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/'});
  res.end();
}