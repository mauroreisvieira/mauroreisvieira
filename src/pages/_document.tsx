import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-gray-800 p-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
