async function mergeSort() {
    complete = false;
    await doMergeSort(array, 0, array.length - 1);
    complete = true;
}

async function doMergeSort(array, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await doMergeSort(array, left, mid);
        await doMergeSort(array, mid + 1, right);
        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            i++;
        } else {
        await shiftArray(array, j, j, i);
            i++;
            mid++;
            j++;
        }
    }
}

async function shiftArray(array, start, end, newPosition) {
    if (complete == true) {
        createGraph();
        abort();
        createGraph();
    }

    const temp = array.slice(start, end + 1);
    array.splice(start, end - start + 1);
    array.splice(newPosition, 0, ...temp);
    await delayAndUpdate();
}