function openUrls() {
    const urlList = document.getElementById('urlInput').value.split('\n');
    urlList.forEach(url => {
        let trimmedUrl = url.trim();
        if (trimmedUrl) {
            // Check if the URL starts with "http://" or "https://"
            if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
                // If not, prepend "https://"
                trimmedUrl = 'https://' + trimmedUrl;
            }
            // Open the URL in a new tab
            window.open(trimmedUrl, '_blank');
        } else if (trimmedUrl) {
            // Alert if the URL doesn't start with http:// or https:// (redundant due to auto-fix)
            alert('Please make sure each URL starts with "http://" or "https://"');
        }
    });
}


window.addEventListener('load', onLoad);

function onLoad() {
    const copyrightEl = document.getElementById('copyright');

    if (copyrightEl) {
        const currentYear = new Date().getFullYear();
        const copyrightText = `Copyright &copy; ${currentYear} Hasan`;

        copyrightEl.innerHTML = copyrightText;
    }
}