export function calculateFileSize(file) {
    let fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
    let fSize = file.size;
    let i = 0;

    while (fSize > 900) {
        fSize /= 1024;
        i++;
    }

    return (Math.round(fSize * 100) / 100) + ' ' + fSExt[i];
}