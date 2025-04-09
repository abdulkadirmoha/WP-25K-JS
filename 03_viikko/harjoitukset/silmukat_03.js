/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.

function averageSpeed() {
    let distance = parseFloat(prompt("Enter the distance"));
    while(true){
        if(distance === 0 ){
            break
        } 

        if(isNaN(distance) || distance < 0){
            alert( "Please enter a valid positive number for distance." );
            continue
        }

        let time = parseFloat(prompt("Enter the time"));

         if(isNaN(time) || time <= 0){

            alert( "Please enter a valid positive number for time." );
            continue
         }

        let average = distance / time;
        alert("the averagage speed is " + average);
        break

    }
    
}

averageSpeed()