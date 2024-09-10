

// Recuperation et initialisation

let nbr_etudiant = document.getElementById("nbr-etudiant");
let totalEtudiants = 0;

let sommes_des_notes = document.getElementById("sommes-des-notes");
let sommeNotes = 0;

let Moyenne_plus_grand = document.getElementById("Moyenne-plus-grand");
let maxMoyenne = 0;


// Fonction pour ajouter des étudiants
function f() {
    let prenomEtudiant = document.getElementById("prenom").value;
    let nomEtudiant = document.getElementById("nom").value;
    let noteEtudiant = parseFloat(document.getElementById("note").value); 
    let moyenneEtudiant = parseFloat(document.getElementById("moyenne").value);

    if (nomEtudiant === '' || isNaN(noteEtudiant) || isNaN(moyenneEtudiant)) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    let tableauBody = document.getElementById("tableauBody");

    let table = document.createElement("tr");
    table.innerHTML = `

        <td>${prenomEtudiant}</td>
        <td>${nomEtudiant}</td>
        <td>${noteEtudiant}</td>
        <td>${moyenneEtudiant}</td>
        <td>
            <button class="btn btn-danger btn-actions" onclick="supprimerLigne(this)"><i class="bi bi-trash3"></i></button>
        </td>
    `;

    tableauBody.appendChild(table);

    // localStorage.setItem("table" , tableauBody.innerHTML)

    totalEtudiants++;
    nbr_etudiant.textContent = totalEtudiants;

    sommeNotes += noteEtudiant;
    sommes_des_notes.textContent = sommeNotes;

    if (moyenneEtudiant > maxMoyenne) {
        maxMoyenne = moyenneEtudiant;
        Moyenne_plus_grand.textContent = maxMoyenne;
    }

    // Réinitialisation des champs
    document.getElementById("nom").value = "";
    document.getElementById("note").value = "";
    document.getElementById("moyenne").value = "";

};


// Fonction pour supprimer une ligne
function supprimerLigne(button) {
    let row = button.parentNode.parentNode;
    let note = parseFloat(row.cells[1].textContent);

    // Met à jour les statistiques
    totalEtudiants--;
    nbr_etudiant.textContent = totalEtudiants;
    
    sommeNotes -= note;
    sommes_des_notes.textContent = sommeNotes;

    if (parseFloat(row.cells[2].textContent) === maxMoyenne) {
        moyenneMaximal();
    }

    row.remove();
};

// Fonction pour mettre à jour la moyenne maximale
function moyenneMaximal() {
    let rows = document.querySelectorAll("#tableauBody tr");
    maxMoyenne = 0;
    rows.forEach(row => {
        let moyenne = parseFloat(row.cells[2].textContent);
        if (moyenne > maxMoyenne) {
            maxMoyenne = moyenne;
        }
    });
    Moyenne_plus_grand.textContent = maxMoyenne;
};



// Fonction pour rechercher des étudiants
document.querySelector('input[aria-label="Search"]').addEventListener('input', function() {
    let rechercheEtudiants = this.value.toLowerCase();
    let rows = document.querySelectorAll("#tableauBody tr");
    rows.forEach(row => {
        let nom = row.cells[0].textContent.toLowerCase();
        if (nom.includes(rechercheEtudiants)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});



// _______________________________________________________________________________________

// Ngone Gnigue



// _______________________________________________________________________________________
// Aminata faye