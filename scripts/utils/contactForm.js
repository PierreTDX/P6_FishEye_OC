/* eslint-disable no-unused-vars */
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    
    document.getElementById('first').focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function closeModalByEchap() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {  // Vérifie si la touche Échap est pressée
            closeModal();  // Ferme la fenêtre
        }
    });
}
closeModalByEchap()

// Fonction pour tester puis envoyer le formulaire
/* eslint-disable no-unused-vars */
function submitForm() {

  // Vérification de chaque champ du formulaire en une seule ligne
    const isValid = validateFirstName()
                    && validateLastName()
                    && validateMail()
                    && validateTextArea();

  // appeler la fonction de gesion des messages d'erreurs
  handleMessages();

    // si isValid est true, alors envoyer le formulaire                
    if (isValid) {
        sendForm()
    } else {
        console.log("Le formulaire contient des erreurs. La soumission est bloquée.");
    }
}

function sendForm() {
    // Récupérer les données du formulaire
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    // Convertir les données en un objet pour les afficher dans la console
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Afficher les données dans la console (remplacer cette partie par une requête fetch pour un vrai envoi)
    console.log('Données du formulaire', data);

    // Fermer le modal
    closeModal();
    resetForm();
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
    const form = document.getElementById('contactForm');
    form.reset();
}



/*******************************/
/* fonctions des champs valides*/
/*******************************/

// Fonction de validation de FirstName (1ere manière de coder)
// Si la fonction de validation de la longeur est fausse je renvoie false
// Si la fonction de validation de chiffres est fausse je renvoie false
// si ni l'une, ni l'autre est fausse alors je renvoie true
function validateFirstName() {
    try {
      console.log("dans firstName");
      const firstName = document.getElementById("first").value;
      if (!validateTextLength(firstName, 2)) {
        console.log("longueur Prénom KO");
        return false;
      }
      if (!containsNoDigits(firstName)) {
        console.log("Prénom KO: contient des chiffres", firstName);
        return false;
      }
      console.log("Prénom OK", firstName);
      return true;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation du prénom:", error);
      return false; // ou une autre valeur par défaut selon vos besoins
    }
  }
  
  // Fonction de validation de LastName (2eme manière de coder)
  // Si les 2 fonctions testées sont "true"
  // alors retourne "true", sinon "false"
  function validateLastName() {
    try {
    console.log("dans lastName");
    const lastName = document.getElementById("last").value;
    return validateTextLength(lastName, 2) && containsNoDigits(lastName);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation du nom de famille:", error);
      return false;
    }
  }

  // Fonction de validation du champ e-mail
function validateMail() {
    try {
      const email = document.getElementById("email").value;
      return validateFormatEmail(email);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation de l'e-mail:", error);
      return false; // ou une autre valeur par défaut selon vos besoins
    }
  }

// Fonction de validation de la zone de texte
// Si la fonction de validation de la longeur est fausse je renvoie false
// Si la fonction de validation de chiffres est fausse je renvoie false
// si ni l'une, ni l'autre est fausse alors je renvoie true
function validateTextArea() {
    try {
      console.log("dans zone de texte");
      const textarea = document.getElementById("message").value;
      if (!validateTextLengthMinMax(textarea, 2, 300)) {
        console.log("longueur texte KO");
        return false;
      }
      console.log("Texte OK", textarea);
      return true;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation du prénom:", error);
      return false; // ou une autre valeur par défaut selon vos besoins
    }
  }

/***********************/
/* fonctions génériques*/
/***********************/

// Fonction générique pour vérifier
// si un champ contient plus de x caractères
// qui prend comme paramètres text et length
function validateTextLength(text, length) {
    console.log("valeur du champ", text);
    try {
      if (text.length < length) {
        console.log("Longueur du champs KO", text);
        return false;
      }
      else {
        console.log("Longueur du champ OK", text)
        return true;
      }
    }
    catch (error) {
      console.log("erreur inconnue au niveau longueur Text", error)
      return false;
    }
  }
  
  // Fonction générique pour vérifier 
  // si une chaîne de caractère ne contient pas de chiffres
  // qui prend comme paramètre input
  function containsNoDigits(input) {
    try {
    const regex = /\d/; // regle du regex
    console.log("le champ ne contient pas de chiffres", !regex.test(input));
    return !regex.test(input);
        } catch (error) {
          console.error("Une erreur s'est produite dans containNoDigit", error);
          return false;
        }
  }
  
  // Fonction générique pour vérifier
  // si une chaîne de caractère est au format e-mail
  // en utilisant la règle regex
  // qui prend comme paramètre email
  function validateFormatEmail(email) {
    console.log("valeur de Email", email);
    try {
      // Définir une regex pour valider l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        console.log("Email OK", email);
        return true;
      } else {
        console.log("Email KO", email);
        return false;
      }
    } catch (error) {
      console.log("Erreur inconnue au niveau de l'email", error);
      return false;
    }
  }

// Fonction générique pour vérifier
// si un champ contient plus de x caractères
// et moins de y caracrtères
// qui prend comme paramètres text et lengthmin et lengthmax
function validateTextLengthMinMax(text, lengthmin, lengthmax) {
    console.log("valeur du champ", text);
    try {
      if (text.length < lengthmin) {
        console.log("Longueur mini du champs KO", text);
        return false;
      }
      if (text.length > lengthmax) {
        console.log("Longueur maxi du champs KO", text);
        return false;
      }
      else {
        console.log("Longueur du champ OK", text)
        return true;
      }
    }
    catch (error) {
      console.log("erreur inconnue au niveau longueur Text", error)
      return false;
    }
  }

  /*****************************************/
/* Gestion Affichage des messages erreurs*/
/*****************************************/

function handleMessages() {
    try {
      const isFirstNameValid = validateFirstName();
      if (isFirstNameValid === false) {
        document.querySelector('#first').parentElement.setAttribute('data-error-visible', 'true');
      } else {
        document.querySelector('#first').parentElement.setAttribute('data-error-visible', 'false');
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation du prénom :", error);
    }
  
    try {
      const isLastNameValid = validateLastName();
      if (isLastNameValid === false) {
        document.querySelector('#last').parentElement.setAttribute('data-error-visible', 'true');
      } else {
        document.querySelector('#last').parentElement.setAttribute('data-error-visible', 'false');
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation du nom de famille :", error);
    }
  
    try {
      const isLastNameValid = validateMail();
      if (isLastNameValid === false) {
        document.querySelector('#email').parentElement.setAttribute('data-error-visible', 'true');
      } else {
        document.querySelector('#email').parentElement.setAttribute('data-error-visible', 'false');
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation de l'e-mail :", error);
    }
  
    try {
      const isTextArea = validateTextArea();
      if (isTextArea === false) {
        document.querySelector('#message').parentElement.setAttribute('data-error-visible', 'true');
      } else {
        document.querySelector('#message').parentElement.setAttribute('data-error-visible', 'false');
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la validation de la zone de texte :", error);
    }
    
  }