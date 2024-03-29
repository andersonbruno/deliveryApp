import Document, {
    Html,
    Head,
    Main,
    NextScript
  } from 'next/document';
  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700;800&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;