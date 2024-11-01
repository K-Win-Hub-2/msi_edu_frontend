const ConvertHTML = (data) => {
  return (
    <>
      <iframe>
        <html>
          <body>{{ data }}</body>
        </html>
      </iframe>
    </>
  );
};
export default ConvertHTML;
