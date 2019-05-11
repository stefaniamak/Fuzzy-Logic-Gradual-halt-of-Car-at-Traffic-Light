/*

Fuzzy Logic File

Notes from Fuzzy Logic Toolbox.pdf

--- page 11

    Τρία Βάματα:
-Ασαφοποίηση εισόδων
-Εκτέλεση των λογικών πράξεων στις προϋποθέσεις του κανόνα και εύρεση του βαθμού υποστήριξης 
 (degree of support) του κανόνα (μεταξύ 0 και 1)
-Εφαρμογή του βαθμού υποστήρικηε στο αποτέλεσμα

Συνήθως δεν αρκεί ένας κανόνας. Απαιτούνται τουλάχιστον ένας κανόνας για κάθε ασαφή τιμή του στόχου..
Τα αποτελέσματα των ακανόνων συνδυάζονται.


---- page 12

1. Fuzzy inputs
2. Apply OR operator (max)
3. Apply implication operator (min)


---- page 13

    Ένα σύστημα ασαφούς συλλοιστικής αποτελείαι από τον προσδιορισμό των:
-Ασαφών μεταβλητών
-Ασαφών τιμών (συνόλων)
-Ασαφών κανόνων

    Δύο τύποι ασαφών συστημάτων
-Τύπου Mandami
Η έξοδος  των κανόνων είναι ασαφείς τιμές που πρέπει να συνδυαστούν
-Τύπου Sugeno
Η Έξοδος έίναι απευθείας πραγματικές τιμές


---- page 14

    Τα 5 Βήματα
Inputs (non-fuzzy) -> Rules (fuzzy) -> Results/Conbined rules (defuzzidied) -> Result (non-fuzzy)
1. Ασαφοποίηση εισόδων
    -Για κάθε μεταβλητή εισόδου, για κάθε ασαφή τιμή, προσδιορίζεται ο βαθμός συμμετοχής της.
2. Εφαρμογή ασαφών τελεστών
    πχ:
    -Σύζευξη AND: minimum, product
    -Διάζευκη: maximum, probor(a,b)= a + b - ab
3. Εφαρμογή μεθόδου συμπερασμού
    -Υπολογίζεται ο βαθμός στήριξης του κανόνα από τις προϋποθέσεις του
    -Ο ίδιος ο κανόνας έχει επίσης ένα βάρος (μεταξύ 0 και 1), το οποίο συνήθως είναι 1
    -Ο συνολικός βαθμός στήριξης προκύπτει από τη σύζευξη (AND) των παραπάνω δύο τιμών
    -Το αρχικό σσυμπέρασμα είναι ένα ασαφές σύνολο
    -Το συμπέρασμα αναμορφώνεται με βάση το βαθμό στήριξης του κανόνα, εφαρμόζοντας τον τελεστή AND.
4. Άθροιση των αποτελεσμάτων για κάθε ασαφή μεταβλητή εξόδου
    -Τα διάφορα ασαφή σύνολα που αποτελούν τις εξόδους των διαφόρων κανόνων (για την ίδια την μεταβλητή) 
     συνδυάζονται σε ένα ασαφές σύνολο για κάθε μεταβλητή εξόδου.
    -Τρεις μέθοδοι:
        -maximum
        -prodor
        -sum
5. Αποασαφοποίηση των τιμών
    Υποστηρίζονται πέντε μέθοδοι:
    -centroid (κεντρο βάρος)
    -besector (του εμβαδού)
    -middle of maximum (the average of the maximum value of the output set)
    -largerst of maximum
    -smallest of maximum


*/

//Input
//const tlDistance = "";
// tlColor = Green / Orange / Red
// tlDistance = far / middle / close      tlPlacement - carPlacement

//Output
//const carSpeedChoice = "";


function fuzzyLogic(tlTick, tlPlacement, carPlacement) {
//Step 1
    if (carPlacement < tlPlacement/3) {
        tlDistance = "far";
    }else if (carPlacement > tlPlacement*2/3) {
        tlDistance = "close";
    }else {
        tlDistance = "middle";
    }

    if (tlTick < redTick) {
        tlColor = "Red";
    }else if (tlTick < redTick+greenTick) {
        tlColor = "Green";
    }else {
        tlColor = "Orange";
    }

//Step 2

    //Kanonas 1: Slow Down -> MIN(Distance=Close, Light=Red)
    //Efarmozw gaussmf sto close
    //Efarmozw trimf sto red
    //Step 3   Sugkrinw, krataw thn min timh

    case1Distance = gaussmf(tlPlacement-carPlacement,0.5,0);
    case1Light = trimf(tlTick,-200,200,200);

    if (case1Distance > case1Light) {
        case1 = case1Distance;
    } else {
        case1 = case1Light;
    }

    //Kanonas 2: Middle Speed -> MAX(Distance=Middle, Light=Green)
    //Efarmozw gaussmf sto Middle
    //Efarmozw trimf sto Green
    //Step 3   Sugkrinw, krataw thn max timh

    case2Distance = gaussmf(tlPlacement-carPlacement,0.5,tlPlacement/2);
    case2Light = trimf(tlTick,200,300,300);

    if (case2Distance > case2Light) {
        case2 = case2Distance;
    } else {
        case2 = case2Light;
    }


    //Kanonas 1: Speed Up -> MAX(Distance=Far, Light=Orange)
    //Efarmozw gaussmf sto Far
    //Efarmozw trimf sto Orange
    //Step 3   Sugkrinw, krataw thn max timh

    case3Distance = gaussmf(tlPlacement-carPlacement,0.5,tlPlacement);
    case3Light = trimf(tlTick,250,350,350);

    if (case3Distance > case3Light) {
        case3 = case3Distance;
    } else {
        case3 = case3Light;
    }


// Step 4
    //Pairnw tis 3eis panw times kai tis kanw 1 sxhma

    carSpeedChoice = case1*0 + case2*50/100 //+ case3*100/100


// Step 5
    //Dialegw tropo ermineushs tou sxhmatos

    resultOfAggression = carSpeedChoice/3;
    return resultOfAggression;


    /*
    if (tlColor == "Green" || tlDistance == "far") {
        carSpeedChoice = "Normal Speed";
    }else if (tlColor == "Red" || tlDistance == "middle") {
        carSpeedChoice = "Slow Down";
    }else {
        carSpeedChoice = "Speed Up";
    }
    

    if (carSpeedChoice == "Normal Speed") {
        car.start()
    }else if (carSpeedChoice == "Slow Down") {
        //percentage = (tlPlacement - carPlacement)/100;
        car.stop();
    }else {
        car.fast()
    }
    */
    //car.start()

    

}

// addmf -> CHECK page 164-165 @ https://aetos.it.teithe.gr/~adamidis/IntelSys/fuzzy.pdf

// gauss -> CHECK page 195

function gaussmf (x,sig,c) {
    return Math.exp((-(x - c)^2)/(2 * sig^2))
}

function trimf(x,a,b,c) { // page 249 @ https://aetos.it.teithe.gr/~adamidis/IntelSys/fuzzy.pdf
    if (x <= a || c <= x) {
        return 0
    } else if (a <= x && x <= b) {
        return (x-a)/(b-a)
    } else if (b <= x && x <= c) {
        return (c-x)/(c-b)
    }
}


