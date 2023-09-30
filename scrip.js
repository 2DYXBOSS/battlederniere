let rec = document.querySelector(".ghzeu");
let egcdfczzd = JSON.parse(localStorage.getItem("poster"));
egcdfczzd.forEach((user) => {
    gdsh = ` <div class="eqtgu">
    <h1 style="font-family: 'Rowdies', cursive;text-transform: uppercase;">NOM DE TACHES : <span style="font-size: 1.2rem;text-transform: uppercase;">${user.nomdetac}</span></h1>
    <h1 style="font-family: 'Rowdies', cursive;text-transform: uppercase;">Heure/Jour :<span style="font-size: 1.2rem;text-transform: uppercase;">${user.jpudetac}</span></h1>
    <h1 style="text-transform: uppercase;font-family: 'Rowdies', cursive;">Lieux de taches :<span style="font-size: 1.2rem;text-transform: uppercase;">${user.liedetac}</span></h1>
    <h1 style="text-transform: uppercase;font-family: 'Rowdies', cursive;">Description :<span style="font-size: 1.2rem;text-transform: uppercase;">${user.descgdg}</span></h1>
</div>
        `
    rec.innerHTML += gdsh

});