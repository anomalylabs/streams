// https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/

if (navigator && navigator.clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        const button = document.createElement('button');
        const icon = document.createElement('span');
        const clipboard = navigator.clipboard;

        button.className = 'c-copy-code';
        button.type = 'button';
       // button.innerText = 'Copy';
        button.appendChild(icon);
        codeBlock.parentNode.appendChild(button);

        button.addEventListener('click', () => {
            console.log('clickeds')
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.classList.add('c-copy-code__copied')

                setTimeout(function () {
                    button.classList.remove('c-copy-code__copied')
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        })
    });
}