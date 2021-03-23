document.getElementById("btn2").addEventListener("click", function moveRight(e) {
    (e.preventDefault);
    let selectlist = document.getElementById('list2');
    let hom = selectlist.getElementsByTagName("li");
    let homs = selectlist.getElementsByTagName("li").length; // compter le nombre d'éléments de la liste et définir comme homs
    for (let i = 0; i < homs; i++) { //i = 0 veut dire commence à 0 de la liste, i < homs = 0 a la fin de la liste il fait 0 - 5
      //alert("winner");
      let subcheck = hom[i].getElementsByTagName('input')[0];
      if (subcheck.checked) { // Si l'input est coher 
        //alert("checked");
        //hom[i].style.color="#FFCC00"
        document.getElementById('list1').appendChild(hom[i]); //  Alors tu l'ajoutes à la listes des Items
      }
    };
  });
  document.getElementById("btn1").addEventListener("click", function moveRight(e) {
    (e.preventDefault);
    let selectlist = document.getElementById('list1');
    let hom = selectlist.getElementsByTagName("li");
    let homs = selectlist.getElementsByTagName("li").length; // compter le nombre d'éléments de la liste et définir comme homs
    for (let i = 0; i < homs; i++) {
      //alert("winner");
      let subcheck = hom[i].getElementsByTagName('input')[0];
      if (subcheck.checked) { // Si l'input est cocher 
        //alert("checked");
        //hom[i].style.color="#FFCC00"
        document.getElementById('list2').appendChild(hom[i]); // Alors tu l'ajoutes à la liste Selected
      }
    };
  });