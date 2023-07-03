// html skeleton provider
export default function template(title, initialState = {}, content = "", meta_data = {}) {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/style.css">
                <meta name="og:title" content="${title}">
                <meta name="description" content="${meta_data?.description}">
                <meta name="og:description" content="${meta_data?.description}">
                <meta name="keywords" content="${meta_data?.keywords}">
                <meta name="author" content="John Doe">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>

                  ${scripts}
              </body>
              `;

  return page;
}
