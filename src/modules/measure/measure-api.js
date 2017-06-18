

export default class MeasureApi {

    create(data, onComplete) {
        const measures = window.firebase.database().ref("measures/");
        measures.push(data, onComplete);

    }

    update(data) {
        const measures = window.firebase.database().ref(`measures/${data.uid}`);
        measures.update(data);
    }

    delete(data) {

    }

    list(onComplete){
        const measures = window.firebase.database().ref("measures/");
        measures.on('value', data => {
            data = data.val();
            let list = Object.keys(data).map((k) => ({...data[k], key: k}));
            onComplete(list)
        });
    }

    get(id) {

    }
}