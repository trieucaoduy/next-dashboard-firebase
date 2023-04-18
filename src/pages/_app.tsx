import { TAppPropsWithLayout } from "@/common/types";
import MainLayout from "@/layouts/MainLayout";

const App = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <main>
      <MainLayout>
        {getLayout(<Component {...pageProps} />)}
      </MainLayout>
    </main>
  )
}

export default App
