
function fuzzyLogic(tlTick, tlPlacement, carPlacement) {

    // Step 1: Ασαφοποίηση εισόδων
    if (carPlacement < tlPlacement / 3) {
        trafficLight.tlDistance = "far";
    } else if (carPlacement > tlPlacement * 2 / 3) {
        trafficLight.tlDistance = "close";
    } else {
        trafficLight.tlDistance = "middle";
    }

    if (tlTick < redTick) {
        trafficLight.tlColor = "Red";
    } else if (tlTick < redTick + greenTick) {
        trafficLight.tlColor = "Green";
    } else {
        trafficLight.tlColor = "Orange";
    }

    sig = tlPlacement / 5.5

    /*
    Κανόνας 1: If Car is Close to the Traffic Light OR Traffic Light is Red, then Slow Down.
        -Εφαρμόζω gaussmf στο close
        -Εφαρμόζω trimf στο red
        Slow Down -> ΜΑΧ(Distance=Close, Light=Red)
    */

    //Step 2: Εφαρμογή ασαφών τελεστών
    case1Distance = gaussmf(tlPlacement - carPlacement, sig, 0);
    case1Light = trimf(tlTick, 0, redTick, redTick);
    //Step 3: Εφαρμογή μεθόδου συμπερασμού
    if (case1Distance > case1Light) {
        case1 = case1Distance;
    } else {
        case1 = case1Light;
    }

    /*
    Κανόνας 2: If Car is neither far or close to Traffic Light OR Traffic Light is Green, then Keep Middle Speed.
        -Εφαρμόζω gaussmf στο Middle
        -Εφαρμόζω trimf στο Green
        Middle Speed -> MAX(Distance=Middle, Light=Green)
    */

    //Step 2: Εφαρμογή ασαφών τελεστών
    case2Distance = gaussmf(tlPlacement - carPlacement, sig, tlPlacement / 2);
    case2Light = trimf(tlTick, redTick, redTick + orangeTick, redTick + orangeTick + greenTick);
    //Step 3: Εφαρμογή μεθόδου συμπερασμού
    if (case2Distance > case2Light) {
        case2 = case2Distance;
    } else {
        case2 = case2Light;
    }

    /*
    //Κανόνας 3: If Car is Far from the Traffic Light OR Traffic Light is Orange, then Speed Up.
        -Εφαρμόζω gaussmf στο Far
        -Εφαρμόζω trimf στο Orange
        Speed Up -> MAX(Distance=Far, Light=Orange)
    */

    //Step 2: Εφαρμογή ασαφών τελεστών
    case3Distance = gaussmf(tlPlacement - carPlacement, sig, tlPlacement);
    case3Light = trimf(tlTick, redTick + orangeTick, redTick + greenTick, redTick + orangeTick + greenTick);
    //Step 3: Εφαρμογή μεθόδου συμπερασμού
    if (case3Distance > case3Light) {
        case3 = case3Distance;
    } else {
        case3 = case3Light;
    }

    // Step 4: Άθροιση των αποτελεσμάτων για κάθε ασαφή μεταβλητή εξόδου
    carSpeedChoice = case1 * 0 + case2 * 50 / 100 + case3;


    // Εμφανίσεις στη HTML σελίδα
    document.getElementById("case1Distance").value = case1Distance;
    document.getElementById("case2Distance").value = case2Distance;
    document.getElementById("case3Distance").value = case3Distance;
    document.getElementById("case1Light").value = case1Light;
    document.getElementById("case2Light").value = case2Light;
    document.getElementById("case3Light").value = case3Light;


    // Step 5: Αποασαφοποίηση των τιμών: centroid (κεντρο βάρος)
    resultOfAggression = carSpeedChoice / 3;
    // Επιστροφή του ποσοστού ταχύτητας που μπορεί να προχωρήσει
    return resultOfAggression;

}

function gaussmf(x, sig, c) {
    return Math.exp(-(Math.pow((x - c), 2)) / (2 * Math.pow(sig, 2)))
}

function trimf(x, a, b, c) {
    if (x <= a || c <= x) {
        return 0
    } else if (a <= x && x <= b) {
        return (x - a) / (b - a)
    } else if (b <= x && x <= c) {
        return (c - x) / (c - b)
    }
}
