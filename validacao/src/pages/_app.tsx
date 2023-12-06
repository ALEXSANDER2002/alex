import "@govbr-ds/core/dist/core.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

import Layout from "@/components/layout";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta
          name="description"
          content="Página de Relatório que utiliza o DSGOV."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta property="og:title" content="Relatório de Folha de Pagamento" />
        <meta property="og:type" content="university" />
        <meta
          property="og:description"
          content="Aqui você pode gerar relatórios personalizados e baixá-los em formato Excel para uso em suas análises e processos de negócios."
        />
        <meta property="og:site_name" content="FolhaBolsista" />
        <title>Validação de Documentos </title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
