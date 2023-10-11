const jingo = () => {
    alert('put numeric value');
}

const askmoney = () => {
    const res = confirm('going to picnic ? ');
    console.log(res);
    if (res === true) {
        alert('send money');
    }
    else {
        alert('no money needed');
    }
}