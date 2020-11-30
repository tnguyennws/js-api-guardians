let _apiKey = "20269d4e-8be0-4390-8a56-ffbb7a17cfbd";

(function () {
  /*
   *   Utilisation du fetch avec then et catch
   */
  getArticles(_apiKey, "Christmas")
    .then((response) => response.json())
    .then((response) => {
      // Code éxécuté quand vous recevez la réponse
      let articles = response.response.results;

      for (let i = 0; i < articles.length; i++) {
        renderArticle(articles[i]);
      }
    })
    .catch((error) => alert("Erreur : " + error));
})();

function getArticles(_apiKey, _searchParam) {
  return fetch(
    "https://content.guardianapis.com/search?q=" +
      _searchParam +
      "&api-key=" +
      _apiKey
  );
}

function getArticle(_apiKey, _URI) {
  return fetch(_URI + "?api-key=" + _apiKey);
}

function renderArticle(article) {
  let _apiUrl = article.apiUrl;
  let _artTitle = article.webTitle;
  /*
  TODO: 
   1. Afficher la section (sectionName: "Food")
   2. Affiche la date (webPublicationDate)
   3. Afficher le titre le l'article
  */

  let DOMmodel = document.getElementById("article-preview-model");
  let model = DOMmodel.cloneNode(true);

  let link = model.getElementsByTagName("a")[0];
  console.log(link);

  link.addEventListener("click", () => {
    loadModalData(_apiUrl);
  });

  // Afficher l'article dans le DOM
  insertArticle(model);
}

function insertArticle(DOMElement) {
  let container = document.getElementById("articles-feed");
  DOMElement.style.display = "block";
  container.appendChild(DOMElement);
}

function loadModalData(articleUrl) {
  console.log(articleUrl);

  getArticle(_apiKey, articleUrl)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      /*
        1. Afficher le titre de l'article à la place Modal title
        2. Ajouter un lien sur le bouton "Lire l'article" qui affiche l'article sur le site du Guardians
      */
    })
    .catch((error) => alert("Erreur : " + error));
}

function renderModalData() {}
