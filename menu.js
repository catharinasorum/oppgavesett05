const menu = document.querySelector("#menu");

const oppgaveSider = [
    { navn: "Oppgavesett 5", url: "index.html"},
    { navn: "Oppgave 1", url: "oppgave01.html"},
    { navn: "Oppgave 2", url: "oppgave02.html"},
    { navn: "Oppgave 3", url: "oppgave03.html"},
    { navn: "Oppgave 4", url: "oppgave04.html"},
    { navn: "Oppgave 5", url: "oppgave05.html"}
];

for(const oppgaveSide of oppgaveSider) {
    const valgtSide = document.location.href;
    const sjekk = valgtSide.search(oppgaveSide.url);

    let klasse = "";

    if(sjekk > 0) {
        klasse = "active";
    }

    menu.innerHTML += `
        <a class="${klasse}" href="${oppgaveSide.url}">${oppgaveSide.navn}</a>
    `;

}