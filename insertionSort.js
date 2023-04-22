async function insertionSort() {

    complete = false;

    var i = 0;
    var j = 0;
    var key = 0;

    for (i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {

            if (complete == true) {
                createGraph();
                return;
            }

            array[j + 1] = array[j];
            await delayAndUpdate();
            j = j - 1;

        } 
        array[j + 1] = key;

        if (complete == true) {
            createGraph();
            return;
        }

        await delayAndUpdate();

    } 

    updateGraph();
    complete = true;
}

