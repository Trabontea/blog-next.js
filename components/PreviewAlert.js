import {Alert} from 'react-bootstrap';
export default function PreviewAlert() {
  return (
      <Alert variant="secondary">
         You are in preview mode! {' '}
        {/* this will lead me to API route that will remove preview cookies */}
        <Alert.Link href="/api/exit-preview">Leave preview node</Alert.Link>
      </Alert>
  )
}