function wybor(WyborUzytkownik)
{
    
    const opcje = ['papier', 'kamien', 'nozyce'];
    const opcje_komputer = opcje[Math.floor(Math.random()*3)];
    
    //1. pobrac elemnt result
    let h1 = document.getElementById("result")

    //2. odpowiednio zmienic zawarosc



    if(WyborUzytkownik===opcje_komputer)
      {
        //document.write("Remis. Komputer też wybrał: " + WyborUzytkownik)
        h1.innerHTML ="Remis. Komputer też wybrał: " + WyborUzytkownik
      }
      else if(WyborUzytkownik==='papier' && opcje_komputer==='kamien'||
        WyborUzytkownik==='kamien' && opcje_komputer==='nozyce'||
        WyborUzytkownik==='nozyce' && opcje_komputer==='papier' )
        {
            //document.write("Wygrałeś. Komputer wybrał: "+ opcje_komputer)
            h1.innerHTML = "Wygrałeś. Komputer wybrał: "+ opcje_komputer
            }
        
        else
        h1.innerHTML ="Przegrałeś. Komputer wybrał: "+opcje_komputer     
}