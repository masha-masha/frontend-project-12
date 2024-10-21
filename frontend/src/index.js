import ReactDOM from 'react-dom/client';
import init from './init';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
const vdom = init();
root.render(
    vdom
);
