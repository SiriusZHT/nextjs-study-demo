import { withRouter } from 'next/Router'
const B = ({ router }) => <h2>b params:{router.query.id}</h2>
export default withRouter(B)