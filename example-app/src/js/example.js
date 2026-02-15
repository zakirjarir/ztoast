import { ZToast } from 'ztoast';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    ZToast.echo({ value: inputValue })
}
