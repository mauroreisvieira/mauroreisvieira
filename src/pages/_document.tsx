import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="leading-relaxed bg-white dark:bg-black p-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
