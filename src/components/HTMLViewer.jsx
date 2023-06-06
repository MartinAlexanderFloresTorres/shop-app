const HTMLViewer = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
export default HTMLViewer
