 function copyToClipboard(elementId) {
        var copyText = document.getElementById(elementId);
        var textArea = document.createElement("textarea");
        textArea.value = copyText.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        var toast = document.getElementById('dark-toast');
        toast.style.display = 'block';
        toast.innerText = 'Copied to clipboard!';

        setTimeout(function () {
            toast.style.display = 'none';
        }, 2000);
    }