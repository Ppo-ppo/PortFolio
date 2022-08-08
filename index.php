<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mon portfolio">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@100&family=Alegreya+Sans:wght@100&family=Megrim&display=swap" rel="stylesheet">
    <link rel="icon" href="img/pomme.svg" />
    <title>PortFolio</title>
</head>
<body> 
    <div id="page">
        <div class="pane">
            <div class="container1">
                <img class="pomme" src="img/pomme.svg"alt="petite pomme"></img>
                <img class="patate1"src="img/patate1.svg" alt="patate rose">
                <img class="patate2"src="img/Patate2.svg" alt="patate rose">
                <img src="img/dessinr 1.png" class="petitdessin"alt="petit personnage minimaliste avec des lunettes">
                <div class="un">
                    <h1 class="firstname">PAULINE</h1>
                    <h1 class="lastname">LOUVRIER</h1>
                    <h2 class="dev">Développeur Web</h2>
                </div>
                <div class="box1">
                    <ul class="navbar">
                        <li><p class="nav acceuil">Home </p></li>
                        <li><p class="nav propos">À Propos</p></li>
                        <li><p class="nav port">Portfolio</p></li>
                        <li><p class="nav contactNav" href="#conta">Contact</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="pane">
            <div class="container2">
                <h2>À Propos:</h2>
                <p >passionée des nouvelles technologies. J'ai fais le choix d'une reconversion professionelle pour devenir web developpeur. J'aime donner vie aux maquettes que l'on me confit.</p>
                <div class="about"></div>
            </div>
            
        </div>
        <div class="pane">
            
            <div class="portfo" >
                <h2>Portfolio:</h2>
                <p>&VerticalLine;</p>
                <a class="projet1" >Projet Creative</a>
                <a class="projet3" >Projet Calculette</a>
                <a class="projet4" >Projet PopCode</a>
                <p>&VerticalLine;</p>
            </div>
            <div class="modal none">
                <div class="modalcontent">
                    <h2></h2>
                    <img class="lg"src="">
                    <p></p>
                    <a class="lien"></a>
                    <img class="croix"src="img/close.svg" alt="croix de fermeture de description">
                </div>
            </div>
            <div class="portfo2" id="portfolio">
                <h2 class="competence">Mes compétences:</h2>
                <p>&VerticalLine; FRONT &VerticalLine;</p>
                <p>-Html, Css, Javascript, Vue, WordPress-</p>
                <p>&VerticalLine; BACK &VerticalLine;</p>
                <p>-Php, WordPress, Laravel-</p>
                <p>&VerticalLine; DESIGN &VerticalLine;</p>
                <p>-Figma-</p>
            </div>
        </div>
        <div class="pane">
            <section class="contactMe">
                <img class="patate4"src="img/patate4.svg" alt="patate rose">
                <img class="patate5"src="img/patate5.svg" alt="patate rose">
                <img class="patate6"src="img/Patate6.svg" alt="patate rose">
                <div class="bbox">
                <h2 class="contact">Contact:</h2>
                </div>
                <div class="container5">
                    <img class="cadre"src="img/cadre_contact.svg" alt="cadre">
                    <div class="cadreContain"id="conta">
                        <p class="telephone">Téléphone:</p>
                        <p class="telephone2">06-38-92-54-86</p>
                        <p class="mail">Me contacter par mail</p>
                    <div class="modalContact none">
                        <div class="modalContentContact">
                            <h2 class="contactezmoi">Contactez moi</h2>
                            <form method="POST" action="">
                                <input type="text" name="nom" placeholder="Votre nom" value="<?php if(isset($_POST['nom'])) { echo $_POST['nom']; } ?>" /><br /><br />
                                <input type="email" name="mail" placeholder="Votre email" value="<?php if(isset($_POST['mail'])) { echo $_POST['mail']; } ?>" /><br /><br />
                                <textarea name="message" placeholder="Votre message"><?php if(isset($_POST['message'])) { echo $_POST['message']; } ?></textarea><br /><br />
                                <input type="submit" value="Envoyer !" name="mailform"/>
                            </form>
                            <img class="croixContact"src="img/close.svg" alt="croix de fermeture de formulaire de contact">
                        </div>
                    </div>
                        <div class="social">
                            <a  href="https://github.com/Ppo-ppo"><img src="img/GitHub.svg" class="github" alt="Lien vers mon GitHub"></a>
                            <a class="linkedin"href="https://www.linkedin.com/in/pauline-louvrier/"><img src="img/Linkedin.svg" class="link"alt="lien vers mon linkedin"></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
<script src="portfolio.js"></script>
</body>
</html>

