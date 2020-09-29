// @ts-check
import { useRouter } from 'next/router'

function RouterPage(props) {
  const router = useRouter()
  return (
    <main>
      <h1> Next.js route </h1>
      {router.pathname}
      <br />
      As path: {router.asPath}
      <br />
      My query: {JSON.stringify(router.query)}
    </main>
  )
}

export default RouterPage
