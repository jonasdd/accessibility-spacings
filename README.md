# Accessibility-spacings

Ce script permet de tester plus facilement le critère 10.12 du référentiel RGAA V4.

> Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?

Dans ce critère il est demandé de tester l'apparence du contenu après modification du texte par ajout de marges, espacements des lettres, espacements des mots et hauteur de ligne.

Les valeurs de ces propriétés sont relatives à la taille de typographie de chaque élément. Ce script permet d'appliquer les règles sur l'ensemble de la page.

# Générer la bookmarklet

Github ne permet pas de générer directement le lien à copier dans vos favoris.

Utilisez un générateur de bookmarklet pour générer le lien de favori. Utilisez par exemple : http://bookmarklets.org/maker/

Veuillez décocher :

* URL-encode
* jQuery

Copier/coller le code ci-dessous dans le générateur
```javascript
var inlineScript = "https://raw.githack.com/jonasdd/accessibility-spacings/master/script.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```
Il ne vous reste ensuite qu'à glisser/déposer le lien généré dans vos favoris.

# Utilisation

1 Naviguez vers la page à auditer
2 Cliquez sur votre favori
3 Une liste déroulante est alors ajoutée à votre page. Il ne vous reste plus qu'a choisir la propriété que vous souhaitez changer

**Les propriétés se cumulent, vous pouvez choisir reset dans la liste pour supprimer les styles déjà appliqués**
