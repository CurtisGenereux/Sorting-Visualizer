async function bubbleSort() {

    complete = false;

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            swap(j, j+1);
            await delayAndUpdate();
            if (complete == true) {
                createGraph();
                return;
            }

        }      
    }
    complete = true;

}