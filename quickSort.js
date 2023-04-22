async function quickSort() {
    complete = false;
    await doQuickSort(array, 0, array.length - 1);
    complete = true;
}

async function doQuickSort(array, low, high) {
    if (low < high) {
        const partitionIndex = await partition(array, low, high);
        await doQuickSort(array, low, partitionIndex - 1);
        await doQuickSort(array, partitionIndex, high);
    }
}

async function partition(array, low, high) {
    if (complete == true) {
        createGraph();
        return;
    }
    const pivot = array[low];
    let i = low;
    let j = high;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            if (complete == true) {
                createGraph();
                return;
            }
            await delayedSwap(i, j);
            i++;
            j--;
        }
    }
return i;
}
  