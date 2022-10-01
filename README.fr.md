</br>
<p align="center">
 <img src="https://img.shields.io/github/languages/count/zachinjapan/haku?style=plastic" alt="Languages" />
 <img src="https://img.shields.io/github/languages/top/zachinjapan/haku?style=plastic&labelColor=yellow" alt="Top Language" />
 <img src="https://img.shields.io/github/languages/code-size/zachinjapan/haku?style=plastic" alt="Code Size" />
 <img src="https://img.shields.io/github/repo-size/zachinjapan/haku?style=plastic" alt="Repo Size" /> 
 <img src="https://img.shields.io/github/last-commit/zachinjapan/haku?style=plastic" alt="Last Commit" /> 
 <img src="https://img.shields.io/github/issues/zachinjapan/haku?style=plastic" alt="Issues" /> 
 <img src="https://img.shields.io/github/followers/zachinjapan?style=social" alt="Followers" /> 
</p>

# Haku

## Description

Haku est un robuste et entirement gratuit trackeur de Travail. Les utilisateurs peuvent créer, mettre à jour, et suprrimer des applications.


Pour apprendre l'authentication et la database, j'ai pris un projet que j'ai fait à travers un cours payant et ait ajouté des features en plus.

Par example, j'ai jouté une page d'acceuil, un demo login, le fait de pouvoir supprimer un utilisateur, un thème sombre, des champs pour le travail et l'utilisateur, et une page outils.

Voici le projet original du cours payant que j'ai utilisé comme point de départ. https://www.jobify.live/landing

J'espère que vous aimez ce projet et si vous avez des questions ou commentaires n'hesitez pas à me contacter.

</br>

## Table des matières

- [Liens](#liens)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)
- (Debut de mes propres features)
- [Page d'acceuil](#page-d'-acceuil)
- [Demo Login](#demo-login)
- [Supprimer Un Utilisateur](#supprimer-un-utilisateur)
- [Theme Sombre](#theme-sombre)
- [Notes](#notes)
- [Favori](#favori)
- [Page D'Outils](#page-d-outils)
- [Stats](#stats)
- [Donations](#donations)
- [Autre](#autre)

## Liens

- Site Live: (https://www.hakujobs.com)
- URL Du Dossier Github: (https://github.com/zachinjapan/haku)

## License

[![MIT](https://img.shields.io/badge/license-MIT-green?style=plastic)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Contributions

Fork, faites une requete, ou contactez moi.

## Questions

[![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Me!-blueviolet?style=plastic&logo=GitHub)](https://github.com/zachinjapan)
[![LinkedIn](https://img.shields.io/badge/My%20LinkedIn-Click%20Me!-grey?style=plastic&logo=LinkedIn&labelColor=blue)](https://www.linkedin.com/in/zach-stone-45b649211/)

このプロジェクトに関するご質問は、Zach.Stone.Developer@gmail.com までお気軽にご連絡ください。

N'hesitez pas à me contacter à Zach.Stone.Developer@gmail.com avec vos questions à propos de ce projet!

## Page D'Acceuil

J'ai créée une page d'acceuil personalisée avec un focus sur un design proffessionel

J'ai aussi refais le styling, les couleurs, et fais un logo customisé

j'ai utilisé beaucoup d'images SVG, et aussi React Reveal pour créer des transitions sobres quand l'utilisateur scroll la page.

<img src ="https://media.giphy.com/media/PTzDs14LT1UK3lG8aW/giphy.gif" alt ="Landing Page" width ="80%">

## Demo Login

L'application du tutoriel ne pouvait pas avoir une démo de l'app.

J'ai créée une page de demo login pour montrer à l'utilisateur comment se connecter à l'app.

J'ai utilisé un comonent Demo register customisé qui crée un demo utilisateur.

Il utilise des chiffres aléatoires pour créer un email et mot de pass (avant le hash).

J'ai aussi ajouté un état emailProvider au schema utilisateur.

C'est important parce que quand l'utilisateur demo se log out l'emailProvider est accedé pour déterminer si l'utilisateur est un utilisateur demo et si c'est le cas ça va supprimer l'utilisateur.

<img src ="https://media.giphy.com/media/gXBUFtPIxuh0TY7eHi/giphy.gif" alt ="Demo Login" width ="80%">

## Supprimer Un Utilisateur

L'app du tutoriel ne pouvait pas supprimer un utilisateurs et ses jobs.

J'ai créée un bouton pour supprimer l'utilisateur et ait ajouté cette fonctionalitée à l'app.

dans auth controller

```
const deleteUser = async (req, res) => {
 const user = await User.findOne({ _id: req.user.userId });
 await user.remove();
 res.status(StatusCodes.OK).json({ message: "User deleted" });

 const jobs = await Job.find({ createdBy: req.user.userId });
 await jobs.forEach((job) => {
 job.remove();
 });
};

```

les actions de react context

```

 DELETE_USER_BEGIN,
 DELETE_USER_SUCCESS,
 DELETE_USER_ERROR,

```

app context

```
 const deleteUser = async (currentUser) => {
 dispatch({ type: DELETE_USER_BEGIN });
 try {
 const { data } = await authFetch.delete("/auth/deleteUser", currentUser);

 const { user, location, token } = data;

 dispatch({
 type: DELETE_USER_SUCCESS,
 payload: { user, location, token },
 });
 } catch (error) {
 if (error.response.status !== 401) {
 dispatch({
 type: DELETE_USER_ERROR,
 payload: { msg: error.response.data.msg },
 });
 }
 }
 clearAlert();
 removeUserFromLocalStorage();
 };

```

reduceurs

```

if (action.type === DELETE_USER_BEGIN) {
 return { ...state, isLoading: true };
 }
 if (action.type === DELETE_USER_SUCCESS) {
 return {
 ...state,
 isLoading: false,
 showAlert: true,
 alertType: "success",
 alertText: "User Profile Deleted! Redirecting to Login Page...",
 };
 }
 if (action.type === DELETE_USER_ERROR) {
 return {
 ...state,
 isLoading: false,
 showAlert: true,
 alertType: "danger",
 alertText: action.payload.msg,
 };
 }

```

## Mode Sombre

J'ai créé un mode sombre pour l'app en utilisant des variables css et des attribus data-theme.

Le theme est sauvegardé non seulement dans le local storage mais aussi dans le schema d'utilisateur.

Cela permet à l'utilisateur de selectionner le theme et de l'avoir persister à travers l'app et les autres appareils automatiquement.

<img src = "https://media.giphy.com/media/zjMy6ny7DUQPAHC8Yk/giphy.gif" width = "80%">

## Notes

Je voulais que l'utilisateur puisse ajouter des informations customisées à propos de leur job, comme le salaires, les bénéfices, etc.

J'ai donc ajouté un champ notes au schema job.

J'ai aussi créé un composant notes qui permet à l'utilisateur d'ajouter des notes et va lui donner du feedback si les notes sont trop longues

<img src = "https://media.giphy.com/media/Y0hfYaGnvn9wjNydRO/giphy.gif" width = "80%">

## Favori

Alors qu'il est déjà possible de trier les jobs par date, ordre alphabétique, etc... je voulais rendre plus facile à l'utilisateur de trouver les jobs sauvegardés qui leur importe.

J'ai donc ajouté un champ favori au schema job dans le composant job, j'ai ajouté un bouton étoile qui ajoute le job dans le tableau favori dans le schema utilisateur.

Vous pouvez aussi trier par si les jobs sont mis en favoris ou non.

<img src = "https://media.giphy.com/media/L4G5mwNoD5DhPexYNI/giphy.gif" width = "80%">

## Page D'Outils

I created a page that gives some tools for the user to use during the job application process.
J'ai créé une page qui donne des outils pour l'utilisateur pour choisir durant le procéssus de recherche de travail.

J'ai même implémenté une API qui vérifie le taux de conversion actuel pour plus de 50 monnaies.

J'ai fais un composant currency qui permet à l'utilisateur d'entrer une monnaie et ça lui donera le taux de conversion pour la monnaie choisie.

J'ai aussi ajouté une calculatrice, des liens utiles, et une liste de tous les jobs.

<img src = "https://media.giphy.com/media/EU55vEVuq5KA34F6n7/giphy.gif" width = "80%">

## Stats

I added 3 more stats.
J'ai ajouté 3 stats supplémentaires
- Les jobs ajoutés durant le mois en cours
- Les jobs favoris
- Le nombre total de jobs

<img src = "https://media.giphy.com/media/g5q2BAEimCplq3tjEG/giphy.gif" width = "80%">

## Donations

Je voulais permettre à l'utilisateur de faire des donations pour l'app.

J'ai utilisé Coinbase commerce pour les donations en crypto et le button "buy me a coffee" pour les donations en cash.

Je n'atends aucune donations, mais si vous pouvez, j'adorerais pouvoir m'en servir pour payer les frais de servers, etc.

<img src = "https://media.giphy.com/media/uQryhlp6aUUZszRdJG/giphy.gif" width = "80%">
                                                                                
## Autre
                                                                                
J'ai aussi ajouté beaucoup de petites caractéristiques
                                                                                
Par exemple j'ai ajouté un rate limiter pour empecher les attaques DDOS
                                                                                
```

// rate limiter

const getLimiter = rateLimiter({
windowMs: 1 _ 60 _ 1000, // 1 minute
max: 50,
});

```



Merci d'avoir lu jusqu'ici! Vous êtes génial!

Vous pouvez trouver le code source de l'app sur ma page Github.