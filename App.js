// Coding by Anelka MD 
const touches = [...document.querySelectorAll('.boutton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calcul(valeur)
})
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calcul(valeur)
})

const calcul = (valeur) => {
    if (listeKeycode.includes(valeur)){
        switch (valeur) {
            case '8' :
                ecran.textContent = "";
                break;
            case '13' :
                const calculer = eval(ecran.textContent);
                ecran.textContent = calculer;
                break;
            default:
                const keycodeindex = listeKeycode.indexOf(valeur);
                const touche = touches[keycodeindex];
                ecran.textContent += touche.innerHTML;
        }
    }
}
window.addEventListener('error', (e) => {
    alert("Une erreur est survenue dans votre calcule...." + e.message);
})
