## Personnes du groupe concernées par le front

Manon Ragnotti

Fabien Marques

Eugénie Roques


## Dossier d'argumentation

### Technologies et librairies utilisées

[ReactJs](https://reactjs.org/)

 - [react-router-dom](https://www.npmjs.com/package/react-router-dom) 
 
[Sass](https://sass-lang.com/)

[Ant Design](https://ant.design/)

[FullCalendar](https://fullcalendar.io/)


### Argumentation liée à l'expertise


Nous avons choisi React comme technologie principale. En effet, nous avons beaucoup travaillé cette librairie cette année et l'année dernière et cela nous paraissait être le choix le plus pertinent pour commencer par un Back Office et continuer sur une application. 

Nous nous sommes aidés de la librairie ant design pour sa simplicité de design système et sa compatibilité avec l'approche professionnelle du projet afin de proposer une meilleure expérience utilisateur.

Nous avons également choisi d'utiliser la librairie Fullcalendar car celle ci est compatible avec la sortie de l'algorithme. De plus, celle ci propose de nombreuses proporiétés modulables qui s'intègrent parfaitement au projet. Elle est open source et très bien documentée et nous permet de réaliser l'intéralité des fonctionnalités pensées. 

#### Manon Ragnotti

Au cours de se projet j'ai effectué principalement le développement front du Back Office. J'ai commencé avec les différents fetch (la récupération des données du back vers le front) de l'API afin d'afficher en front les données concernant les voitures, les employés et les hôtels. Pour les hôtels, j'ai dû récupérer et faire une réunification de deux tables différentes, celle contenant les scores des hôtels, et celle contenant les infos des hôtels. J'ai ensuite intégré toutes ces données selon les maquettes réalisées. 
J'ai également ajouté le système de modal sur la page «salarié », lors du clique sur un salarié, une modal d’information s’ouvre, celle-ci contentant ses informations personnel et ses indisponibilités. La possibilité de supprimer un salarié, un hôtel ou une voiture de la base de donnée a également était implémenter dans notre  back office par mes soins. 
Enfin, sur la page concernant le planning, j’ai effectué le style de la page, et les fetch permettant d’afficher les différents hôtels ainsi que leur note dans les rubriques « urgences », « à replacer » et « suggestion » ainsi que le système d’expand de ces rubriques. 
Ce projet m’a permis d’approfondir mes connaissances en React et d’en apprendre plus sur les systèmes de Hooks et la programmation fonctionnelle et state-less. 

#### Eugenie Roques

Au cours de ce projet, j’ai participé principalement à l’intégration du Back Office. Nous avons intégré la structure tout en réfléchissant aux technologies qui allaient être implémentées pour corréler au lieu avec nos fonctionnalités et besoins du projet. 
Je me suis chargée d’implémenter le planning en utilisant la librairie [Full Calendar](fullcalendar.io). En effet, cette librairie est tout d’abord open-source, et fournit une documentation très claire. Cela rend le planning plus facile à maintenir pour la suite. La librairie permet aussi d’introduire des fonctionnalités nécessaires pour faciliter l’experience utilisateur telles que le “drag and drop” des cartes d’hotels et également un affichage optimisé des plannings. Grace à cette libraire, tout le calendrier est personnalisable simplement en passant à ce composant des propriétés (props). Par exemple, je peux choisir l’heure à laquelle débuter l’affichage du planning, la langues et formats horaires demandés ou d’afficher ou non les week-ends. 
De plus, j’ai mis en place la partie front de l’authentification avec [JWT](https://jwt.io/). J’ai donc récupéré le “token” généré par le back afin de le stocker dans le “local Storage”. Grâce à ce token, nous permettons une connexion à deux niveaux au Back-Office :  en tant qu’administrateur ou intervenant. En fonction du rôle attribué, l’utilisateur aura un accès plus ou moins limité aux ressources et à la gestion du planning. A terme, je souhaite sécuriser toutes les routes du back office en ajoutant une authorisation bearer pour fournir une verification permanente de l’authentification de cet utilisateur. 
Ce projet m’a permis de ma familiariser avec la syntaxe fonctionnelle et state-less de ReactJs ainsi qu’avec les Hooks de cette librairie. 


#### Fabien Marques

 - Recherche page hôtels 
 
 - Infrastructure


### Liens
 
#### Back-office deployé 
[Back-office déployé](http://ec2-34-249-204-157.eu-west-1.compute.amazonaws.com:80)

##### Identification au Back Office
Adresse mail : admin@gmail.com

Mot de passe: hetic2018

#### Api déployée
[API déployé](http://ec2-34-249-204-157.eu-west-1.compute.amazonaws.com:3000)

Repository de l'API :
https://github.com/Mehdi-Verfaillie/samuSocial-api

